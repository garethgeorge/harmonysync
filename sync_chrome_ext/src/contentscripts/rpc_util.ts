import * as io from "socket.io-client";
import * as rpc from "../../build/protos/rpc_pb";
import * as jspb from "google-protobuf";

export class RPCError extends Error {}

export function decodeResponse(msg: Uint8Array, decoder: typeof jspb.Message) {
  const resp = rpc.Response.deserializeBinary(msg);
  if (resp.getStatus() == rpc.Response.Status.OK) {
    return {
      trackingId: resp.getTrackingId(),
      response: decoder.deserializeBinary(resp.getResponse_asU8()),
    };
  } else if (resp.getStatus() == rpc.Response.Status.ERROR) {
    throw new RPCError(resp.getErrorMessage());
  } else {
    throw new RPCError("unhandled response status: " + resp.getStatus());
  }
}

export function packageResponse(resp: jspb.Message, trackingId: number = 0) {
  const pkg = new rpc.Response();
  pkg.setStatus(rpc.Response.Status.OK);
  pkg.setResponse(resp.serializeBinary());
  pkg.setTrackingId(trackingId);
  return pkg;
}

export function packageErrorResponse(error: string, trackingId: number = 0) {
  const pkg = new rpc.Response();
  pkg.setStatus(rpc.Response.Status.ERROR);
  pkg.setErrorMessage(error);
  pkg.setTrackingId(trackingId);
  return pkg;
}

let reqId = 0;
export const packageRequest = (req: jspb.Message) => {
  const pkg = new rpc.Request();
  pkg.setRequest(req.serializeBinary());
  pkg.setTrackingId(++reqId);
  return pkg;
};

export const rpcInvoke = (
  socket: SocketIOClient.Socket,
  eventName: string,
  request: jspb.Message,
  responseDecoder: typeof jspb.Message
): Promise<jspb.Message> => {
  const reqPkg = packageRequest(request);
  return new Promise((accept, reject) => {
    socket.once("error", reject);
    socket.emit(eventName, reqPkg.serializeBinary().buffer);
    socket.once(eventName + ":" + reqPkg.getTrackingId(), (data) => {
      socket.removeListener("error", reject);
      try {
        accept(decodeResponse(new Uint8Array(data), responseDecoder).response);
      } catch (e) {
        reject(e);
      }
    });
  });
};

export const attachRpcHandler = (socket: SocketIOClient.Socket, eventName: string, requestDecoder: typeof jspb.Message, handler: (request: jspb.Message) => jspb.Message) => {
  socket.on(eventName, (data) => {
    if (!(data instanceof ArrayBuffer)) {
      console.error(`rpc handler(${eventName}): received non ArrayBuffer request: `, data);
      return;
    }

    const reqPkg = rpc.Request.deserializeBinary(new Uint8Array(data));
    const req = requestDecoder.deserializeBinary(reqPkg.getRequest_asU8());
    try {
      const res = handler(req);
      socket.emit(eventName + ":" + reqPkg.getTrackingId(), packageResponse(res, reqPkg.getTrackingId()).serializeBinary().buffer);
    } catch (e) {
      console.error(e);
      socket.emit(eventName + ":" + reqPkg.getTrackingId(), packageErrorResponse(e.toString(), reqPkg.getTrackingId()).serializeBinary().buffer);
    }
  })
}
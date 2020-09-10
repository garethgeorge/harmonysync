import * as SocketIO from "socket.io";
import * as rpc from "../build/protos/rpc_pb";
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
  socket: SocketIO.Socket,
  eventName: string,
  request: jspb.Message,
  responseDecoder: typeof jspb.Message
): Promise<jspb.Message> => {
  const reqPkg = packageRequest(request);
  return new Promise((accept, reject) => {
    socket.once("error", reject);
    socket.emit(eventName, reqPkg.serializeBinary());
    socket.once(eventName + ":" + reqPkg.getTrackingId(), (data) => {
      socket.removeListener("error", reject);
      try {
        accept(decodeResponse(data as Uint8Array, responseDecoder).response);
      } catch (e) {
        reject(e);
      }
    });
  });
};

export const attachRpcHandler = (socket: SocketIO.Socket, eventName: string, requestDecoder: typeof jspb.Message, handler: (request: jspb.Message) => jspb.Message) => {
  socket.on(eventName, (data) => {
    const reqPkg = rpc.Request.deserializeBinary(data as Uint8Array);
    const req = requestDecoder.deserializeBinary(reqPkg.getRequest_asU8());
    try {
      const res = handler(req);
      socket.emit(eventName + ":" + reqPkg.getTrackingId(), packageResponse(res, reqPkg.getTrackingId()));
    } catch (e) {
      console.error(e);
      socket.emit(eventName + ":" + reqPkg.getTrackingId(), packageErrorResponse(e.toString(), reqPkg.getTrackingId()));
    }
  })
}
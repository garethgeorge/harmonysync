import EventEmitter from "eventemitter3";
import { RPCMessageTransport } from "protorpcjs/src/transport";
import EngineIO from "engine.io-client";

export default class SocketTransport
  extends EventEmitter.EventEmitter
  implements RPCMessageTransport {
  constructor(private socket: EngineIO.Socket) {
    super();
  }

  onData(callback: (data: Uint8Array) => void): void {
    this.socket.on("message", (data: ArrayBuffer) => {
      console.log("got data!!!", new Uint8Array(data));
      callback(new Uint8Array(data));
    });
  }

  onClose(callback: () => void): void {
    this.socket.on("close", callback);
  }

  onError(callback: (error: Error) => void): void {
    this.socket.on("error", callback);
  }

  send(data: Uint8Array): void {
    console.log("sending data!!!");
    const sliceBuffer = data.buffer.slice(0, data.length);
    this.socket.send(sliceBuffer);
  }

  close(): void {
    this.socket.close();
  }
}

import EventEmitter from "eventemitter3";
import { RPCMessageTransport } from "protorpcjs/src/transport";
import SocketIO from "socket.io";

export default class SocketTransport
  extends EventEmitter.EventEmitter
  implements RPCMessageTransport {
  constructor(private socket: SocketIO.Socket) {
    super();
  }

  onData(callback: (data: Uint8Array) => void): void {
    this.socket.on("srvpkt", (data: Buffer) => {
      console.log("data from client: ", SocketTransport.printData(new Uint8Array(data)));
      callback(new Uint8Array(data));
    });
  }

  onClose(callback: () => void): void {
    this.socket.on("disconnect", callback);
  }

  onError(callback: (error: Error) => void): void {
    this.socket.on("error", callback);
  }

  send(data: Uint8Array): void {
    console.log("sending data to client: " + SocketTransport.printData(data));
    this.socket.emit("srvpkt", data);
  }

  close(): void {
    this.socket.disconnect();
  }

  static printData(data: Uint8Array) {
    const bytes = [];
    for (let i = 0; i < data.length; ++i) {
      bytes.push('' + data[i]);
    }
    return "[length = " + data.length + "; " + bytes.join(",") + "]";
  }
}

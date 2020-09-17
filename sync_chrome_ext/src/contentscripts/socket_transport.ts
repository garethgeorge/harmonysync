import * as EventEmitter from "eventemitter3";
import { RPCMessageTransport } from "protorpcjs/src/transport";

import "socket.io-client";

export default class SocketTransport
  extends EventEmitter.EventEmitter
  implements RPCMessageTransport {
  constructor(private socket: SocketIOClient.Socket) {
    super();

    socket.on("error", (message) => {
      console.log("socket error: ", message);
    });
  }

  onData(callback: (data: Uint8Array) => void): void {
    this.socket.on("srvpkt", (data: Uint8Array) => {
      console.log("data from server: ", SocketTransport.printData(data));
      console.log("raw data from server: ", data);
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
    console.log("sending data to server: " + SocketTransport.printData(data));
    this.socket.emit("srvpkt", data.buffer.slice(data.byteOffset, data.byteLength));
  }

  close(): void {
    this.socket.disconnect();
  }

  static printData(data: Uint8Array) {
    const bytes = [];
    for (let i = 0; i < data.length; ++i) {
      bytes.push("" + data[i]);
    }
    return "[length = " + data.length + "; " + bytes.join(",") + "]";
  }
}

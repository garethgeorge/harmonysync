import * as $protobuf from "protobufjs";
/** Represents a ServerSyncService */
export class ServerSyncService extends $protobuf.rpc.Service {
  /**
   * Constructs a new ServerSyncService service.
   * @param rpcImpl RPC implementation
   * @param [requestDelimited=false] Whether requests are length-delimited
   * @param [responseDelimited=false] Whether responses are length-delimited
   */
  constructor(
    rpcImpl: $protobuf.RPCImpl,
    requestDelimited?: boolean,
    responseDelimited?: boolean
  );

  /**
   * Creates new ServerSyncService service using the specified rpc implementation.
   * @param rpcImpl RPC implementation
   * @param [requestDelimited=false] Whether requests are length-delimited
   * @param [responseDelimited=false] Whether responses are length-delimited
   * @returns RPC service. Useful where requests and/or responses are streamed.
   */
  public static create(
    rpcImpl: $protobuf.RPCImpl,
    requestDelimited?: boolean,
    responseDelimited?: boolean
  ): ServerSyncService;

  /**
   * Calls getServerVersion.
   * @param request Empty message or plain object
   * @param callback Node-style callback called with the error, if any, and ServerProtocolVersion
   */
  public getServerVersion(
    request: IEmpty,
    callback: ServerSyncService.getServerVersionCallback
  ): void;

  /**
   * Calls getServerVersion.
   * @param request Empty message or plain object
   * @returns Promise
   */
  public getServerVersion(request: IEmpty): Promise<ServerProtocolVersion>;

  /**
   * Calls setSyncState.
   * @param request SetSyncStateReq message or plain object
   * @param callback Node-style callback called with the error, if any, and SetSyncStateResp
   */
  public setSyncState(
    request: ISetSyncStateReq,
    callback: ServerSyncService.setSyncStateCallback
  ): void;

  /**
   * Calls setSyncState.
   * @param request SetSyncStateReq message or plain object
   * @returns Promise
   */
  public setSyncState(request: ISetSyncStateReq): Promise<SetSyncStateResp>;

  /**
   * Calls requestResync.
   * @param request RequestResyncReq message or plain object
   * @param callback Node-style callback called with the error, if any, and Empty
   */
  public requestResync(
    request: IRequestResyncReq,
    callback: ServerSyncService.requestResyncCallback
  ): void;

  /**
   * Calls requestResync.
   * @param request RequestResyncReq message or plain object
   * @returns Promise
   */
  public requestResync(request: IRequestResyncReq): Promise<Empty>;
}

export namespace ServerSyncService {
  /**
   * Callback as used by {@link ServerSyncService#getServerVersion}.
   * @param error Error, if any
   * @param [response] ServerProtocolVersion
   */
  type getServerVersionCallback = (
    error: Error | null,
    response?: ServerProtocolVersion
  ) => void;

  /**
   * Callback as used by {@link ServerSyncService#setSyncState}.
   * @param error Error, if any
   * @param [response] SetSyncStateResp
   */
  type setSyncStateCallback = (
    error: Error | null,
    response?: SetSyncStateResp
  ) => void;

  /**
   * Callback as used by {@link ServerSyncService#requestResync}.
   * @param error Error, if any
   * @param [response] Empty
   */
  type requestResyncCallback = (error: Error | null, response?: Empty) => void;
}

/** Represents a ClientSyncService */
export class ClientSyncService extends $protobuf.rpc.Service {
  /**
   * Constructs a new ClientSyncService service.
   * @param rpcImpl RPC implementation
   * @param [requestDelimited=false] Whether requests are length-delimited
   * @param [responseDelimited=false] Whether responses are length-delimited
   */
  constructor(
    rpcImpl: $protobuf.RPCImpl,
    requestDelimited?: boolean,
    responseDelimited?: boolean
  );

  /**
   * Creates new ClientSyncService service using the specified rpc implementation.
   * @param rpcImpl RPC implementation
   * @param [requestDelimited=false] Whether requests are length-delimited
   * @param [responseDelimited=false] Whether responses are length-delimited
   * @returns RPC service. Useful where requests and/or responses are streamed.
   */
  public static create(
    rpcImpl: $protobuf.RPCImpl,
    requestDelimited?: boolean,
    responseDelimited?: boolean
  ): ClientSyncService;

  /**
   * Calls setSyncState.
   * @param request SyncState message or plain object
   * @param callback Node-style callback called with the error, if any, and Empty
   */
  public setSyncState(
    request: ISyncState,
    callback: ClientSyncService.setSyncStateCallback
  ): void;

  /**
   * Calls setSyncState.
   * @param request SyncState message or plain object
   * @returns Promise
   */
  public setSyncState(request: ISyncState): Promise<Empty>;
}

export namespace ClientSyncService {
  /**
   * Callback as used by {@link ClientSyncService#setSyncState}.
   * @param error Error, if any
   * @param [response] Empty
   */
  type setSyncStateCallback = (error: Error | null, response?: Empty) => void;
}

/** Properties of an Empty. */
export interface IEmpty {}

/** Represents an Empty. */
export class Empty implements IEmpty {
  /**
   * Constructs a new Empty.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEmpty);

  /**
   * Creates a new Empty instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Empty instance
   */
  public static create(properties?: IEmpty): Empty;

  /**
   * Encodes the specified Empty message. Does not implicitly {@link Empty.verify|verify} messages.
   * @param message Empty message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEmpty,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
   * @param message Empty message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEmpty,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes an Empty message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Empty
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): Empty;

  /**
   * Decodes an Empty message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Empty
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Empty;

  /**
   * Verifies an Empty message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates an Empty message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Empty
   */
  public static fromObject(object: { [k: string]: any }): Empty;

  /**
   * Creates a plain object from an Empty message. Also converts values to other types if specified.
   * @param message Empty
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Empty,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this Empty to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ServerProtocolVersion. */
export interface IServerProtocolVersion {
  /** ServerProtocolVersion version */
  version?: string | null;
}

/** Represents a ServerProtocolVersion. */
export class ServerProtocolVersion implements IServerProtocolVersion {
  /**
   * Constructs a new ServerProtocolVersion.
   * @param [properties] Properties to set
   */
  constructor(properties?: IServerProtocolVersion);

  /** ServerProtocolVersion version. */
  public version: string;

  /**
   * Creates a new ServerProtocolVersion instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ServerProtocolVersion instance
   */
  public static create(
    properties?: IServerProtocolVersion
  ): ServerProtocolVersion;

  /**
   * Encodes the specified ServerProtocolVersion message. Does not implicitly {@link ServerProtocolVersion.verify|verify} messages.
   * @param message ServerProtocolVersion message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IServerProtocolVersion,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ServerProtocolVersion message, length delimited. Does not implicitly {@link ServerProtocolVersion.verify|verify} messages.
   * @param message ServerProtocolVersion message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IServerProtocolVersion,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ServerProtocolVersion message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ServerProtocolVersion
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ServerProtocolVersion;

  /**
   * Decodes a ServerProtocolVersion message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ServerProtocolVersion
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ServerProtocolVersion;

  /**
   * Verifies a ServerProtocolVersion message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ServerProtocolVersion message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ServerProtocolVersion
   */
  public static fromObject(object: { [k: string]: any }): ServerProtocolVersion;

  /**
   * Creates a plain object from a ServerProtocolVersion message. Also converts values to other types if specified.
   * @param message ServerProtocolVersion
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ServerProtocolVersion,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ServerProtocolVersion to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SyncState. */
export interface ISyncState {
  /** SyncState seqNo */
  seqNo?: number | null;

  /** SyncState playing */
  playing?: boolean | null;

  /** SyncState lastSyncTime */
  lastSyncTime?: number | null;

  /** SyncState lastSyncPosition */
  lastSyncPosition?: number | null;
}

/** Represents a SyncState. */
export class SyncState implements ISyncState {
  /**
   * Constructs a new SyncState.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISyncState);

  /** SyncState seqNo. */
  public seqNo: number;

  /** SyncState playing. */
  public playing: boolean;

  /** SyncState lastSyncTime. */
  public lastSyncTime: number;

  /** SyncState lastSyncPosition. */
  public lastSyncPosition: number;

  /**
   * Creates a new SyncState instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SyncState instance
   */
  public static create(properties?: ISyncState): SyncState;

  /**
   * Encodes the specified SyncState message. Does not implicitly {@link SyncState.verify|verify} messages.
   * @param message SyncState message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ISyncState,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified SyncState message, length delimited. Does not implicitly {@link SyncState.verify|verify} messages.
   * @param message SyncState message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ISyncState,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a SyncState message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SyncState
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): SyncState;

  /**
   * Decodes a SyncState message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SyncState
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): SyncState;

  /**
   * Verifies a SyncState message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a SyncState message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SyncState
   */
  public static fromObject(object: { [k: string]: any }): SyncState;

  /**
   * Creates a plain object from a SyncState message. Also converts values to other types if specified.
   * @param message SyncState
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: SyncState,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this SyncState to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SetSyncStateReq. */
export interface ISetSyncStateReq {
  /** SetSyncStateReq newSyncState */
  newSyncState?: ISyncState | null;
}

/** Represents a SetSyncStateReq. */
export class SetSyncStateReq implements ISetSyncStateReq {
  /**
   * Constructs a new SetSyncStateReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISetSyncStateReq);

  /** SetSyncStateReq newSyncState. */
  public newSyncState?: ISyncState | null;

  /**
   * Creates a new SetSyncStateReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SetSyncStateReq instance
   */
  public static create(properties?: ISetSyncStateReq): SetSyncStateReq;

  /**
   * Encodes the specified SetSyncStateReq message. Does not implicitly {@link SetSyncStateReq.verify|verify} messages.
   * @param message SetSyncStateReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ISetSyncStateReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified SetSyncStateReq message, length delimited. Does not implicitly {@link SetSyncStateReq.verify|verify} messages.
   * @param message SetSyncStateReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ISetSyncStateReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a SetSyncStateReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SetSyncStateReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): SetSyncStateReq;

  /**
   * Decodes a SetSyncStateReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SetSyncStateReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): SetSyncStateReq;

  /**
   * Verifies a SetSyncStateReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a SetSyncStateReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SetSyncStateReq
   */
  public static fromObject(object: { [k: string]: any }): SetSyncStateReq;

  /**
   * Creates a plain object from a SetSyncStateReq message. Also converts values to other types if specified.
   * @param message SetSyncStateReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: SetSyncStateReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this SetSyncStateReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SetSyncStateResp. */
export interface ISetSyncStateResp {
  /** SetSyncStateResp status */
  status?: SetSyncStateResp.Status | null;
}

/** Represents a SetSyncStateResp. */
export class SetSyncStateResp implements ISetSyncStateResp {
  /**
   * Constructs a new SetSyncStateResp.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISetSyncStateResp);

  /** SetSyncStateResp status. */
  public status: SetSyncStateResp.Status;

  /**
   * Creates a new SetSyncStateResp instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SetSyncStateResp instance
   */
  public static create(properties?: ISetSyncStateResp): SetSyncStateResp;

  /**
   * Encodes the specified SetSyncStateResp message. Does not implicitly {@link SetSyncStateResp.verify|verify} messages.
   * @param message SetSyncStateResp message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ISetSyncStateResp,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified SetSyncStateResp message, length delimited. Does not implicitly {@link SetSyncStateResp.verify|verify} messages.
   * @param message SetSyncStateResp message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ISetSyncStateResp,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a SetSyncStateResp message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SetSyncStateResp
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): SetSyncStateResp;

  /**
   * Decodes a SetSyncStateResp message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SetSyncStateResp
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): SetSyncStateResp;

  /**
   * Verifies a SetSyncStateResp message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a SetSyncStateResp message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SetSyncStateResp
   */
  public static fromObject(object: { [k: string]: any }): SetSyncStateResp;

  /**
   * Creates a plain object from a SetSyncStateResp message. Also converts values to other types if specified.
   * @param message SetSyncStateResp
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: SetSyncStateResp,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this SetSyncStateResp to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

export namespace SetSyncStateResp {
  /** Status enum. */
  enum Status {
    REJECT = 0,
    ACCEPT = 1,
  }
}

/** Properties of a RequestResyncReq. */
export interface IRequestResyncReq {
  /** RequestResyncReq clientLatestSeqNo */
  clientLatestSeqNo?: number | null;
}

/** Represents a RequestResyncReq. */
export class RequestResyncReq implements IRequestResyncReq {
  /**
   * Constructs a new RequestResyncReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IRequestResyncReq);

  /** RequestResyncReq clientLatestSeqNo. */
  public clientLatestSeqNo: number;

  /**
   * Creates a new RequestResyncReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns RequestResyncReq instance
   */
  public static create(properties?: IRequestResyncReq): RequestResyncReq;

  /**
   * Encodes the specified RequestResyncReq message. Does not implicitly {@link RequestResyncReq.verify|verify} messages.
   * @param message RequestResyncReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IRequestResyncReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified RequestResyncReq message, length delimited. Does not implicitly {@link RequestResyncReq.verify|verify} messages.
   * @param message RequestResyncReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IRequestResyncReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a RequestResyncReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns RequestResyncReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): RequestResyncReq;

  /**
   * Decodes a RequestResyncReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns RequestResyncReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): RequestResyncReq;

  /**
   * Verifies a RequestResyncReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a RequestResyncReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns RequestResyncReq
   */
  public static fromObject(object: { [k: string]: any }): RequestResyncReq;

  /**
   * Creates a plain object from a RequestResyncReq message. Also converts values to other types if specified.
   * @param message RequestResyncReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: RequestResyncReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this RequestResyncReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

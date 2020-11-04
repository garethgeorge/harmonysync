import * as $protobuf from "protobufjs";
/** Represents a SessionService */
export class SessionService extends $protobuf.rpc.Service {

    /**
     * Constructs a new SessionService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new SessionService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SessionService;

    /**
     * Calls getServerVersion.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and ServerProtocolVersion
     */
    public getServerVersion(request: IEmpty, callback: SessionService.getServerVersionCallback): void;

    /**
     * Calls getServerVersion.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public getServerVersion(request: IEmpty): Promise<ServerProtocolVersion>;

    /**
     * Calls ping.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and Empty
     */
    public ping(request: IEmpty, callback: SessionService.pingCallback): void;

    /**
     * Calls ping.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public ping(request: IEmpty): Promise<Empty>;

    /**
     * Calls auth.
     * @param request UserAuthReq message or plain object
     * @param callback Node-style callback called with the error, if any, and UserAuthResp
     */
    public auth(request: IUserAuthReq, callback: SessionService.authCallback): void;

    /**
     * Calls auth.
     * @param request UserAuthReq message or plain object
     * @returns Promise
     */
    public auth(request: IUserAuthReq): Promise<UserAuthResp>;

    /**
     * Calls createRoom.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and RoomInfo
     */
    public createRoom(request: IEmpty, callback: SessionService.createRoomCallback): void;

    /**
     * Calls createRoom.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public createRoom(request: IEmpty): Promise<RoomInfo>;

    /**
     * Calls joinRoom.
     * @param request JoinRoomReq message or plain object
     * @param callback Node-style callback called with the error, if any, and RoomInfo
     */
    public joinRoom(request: IJoinRoomReq, callback: SessionService.joinRoomCallback): void;

    /**
     * Calls joinRoom.
     * @param request JoinRoomReq message or plain object
     * @returns Promise
     */
    public joinRoom(request: IJoinRoomReq): Promise<RoomInfo>;

    /**
     * Calls sendMessage.
     * @param request SendMessageReq message or plain object
     * @param callback Node-style callback called with the error, if any, and Empty
     */
    public sendMessage(request: ISendMessageReq, callback: SessionService.sendMessageCallback): void;

    /**
     * Calls sendMessage.
     * @param request SendMessageReq message or plain object
     * @returns Promise
     */
    public sendMessage(request: ISendMessageReq): Promise<Empty>;
}

export namespace SessionService {

    /**
     * Callback as used by {@link SessionService#getServerVersion}.
     * @param error Error, if any
     * @param [response] ServerProtocolVersion
     */
    type getServerVersionCallback = (error: (Error|null), response?: ServerProtocolVersion) => void;

    /**
     * Callback as used by {@link SessionService#ping}.
     * @param error Error, if any
     * @param [response] Empty
     */
    type pingCallback = (error: (Error|null), response?: Empty) => void;

    /**
     * Callback as used by {@link SessionService#auth}.
     * @param error Error, if any
     * @param [response] UserAuthResp
     */
    type authCallback = (error: (Error|null), response?: UserAuthResp) => void;

    /**
     * Callback as used by {@link SessionService#createRoom}.
     * @param error Error, if any
     * @param [response] RoomInfo
     */
    type createRoomCallback = (error: (Error|null), response?: RoomInfo) => void;

    /**
     * Callback as used by {@link SessionService#joinRoom}.
     * @param error Error, if any
     * @param [response] RoomInfo
     */
    type joinRoomCallback = (error: (Error|null), response?: RoomInfo) => void;

    /**
     * Callback as used by {@link SessionService#sendMessage}.
     * @param error Error, if any
     * @param [response] Empty
     */
    type sendMessageCallback = (error: (Error|null), response?: Empty) => void;
}

/** Properties of an Empty. */
export interface IEmpty {
}

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
    public static encode(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
     * @param message Empty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Empty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Empty;

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Empty;

    /**
     * Verifies an Empty message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

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
    public static toObject(message: Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Empty to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerProtocolVersion. */
export interface IServerProtocolVersion {

    /** ServerProtocolVersion version */
    version?: (string|null);

    /** ServerProtocolVersion motd */
    motd?: (string|null);
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

    /** ServerProtocolVersion motd. */
    public motd: string;

    /**
     * Creates a new ServerProtocolVersion instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerProtocolVersion instance
     */
    public static create(properties?: IServerProtocolVersion): ServerProtocolVersion;

    /**
     * Encodes the specified ServerProtocolVersion message. Does not implicitly {@link ServerProtocolVersion.verify|verify} messages.
     * @param message ServerProtocolVersion message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerProtocolVersion, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerProtocolVersion message, length delimited. Does not implicitly {@link ServerProtocolVersion.verify|verify} messages.
     * @param message ServerProtocolVersion message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerProtocolVersion, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerProtocolVersion message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerProtocolVersion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerProtocolVersion;

    /**
     * Decodes a ServerProtocolVersion message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerProtocolVersion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerProtocolVersion;

    /**
     * Verifies a ServerProtocolVersion message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

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
    public static toObject(message: ServerProtocolVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerProtocolVersion to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserAuthReq. */
export interface IUserAuthReq {

    /** UserAuthReq name */
    name?: (string|null);
}

/** Represents a UserAuthReq. */
export class UserAuthReq implements IUserAuthReq {

    /**
     * Constructs a new UserAuthReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserAuthReq);

    /** UserAuthReq name. */
    public name: string;

    /**
     * Creates a new UserAuthReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserAuthReq instance
     */
    public static create(properties?: IUserAuthReq): UserAuthReq;

    /**
     * Encodes the specified UserAuthReq message. Does not implicitly {@link UserAuthReq.verify|verify} messages.
     * @param message UserAuthReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserAuthReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserAuthReq message, length delimited. Does not implicitly {@link UserAuthReq.verify|verify} messages.
     * @param message UserAuthReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserAuthReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserAuthReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserAuthReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserAuthReq;

    /**
     * Decodes a UserAuthReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserAuthReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserAuthReq;

    /**
     * Verifies a UserAuthReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserAuthReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserAuthReq
     */
    public static fromObject(object: { [k: string]: any }): UserAuthReq;

    /**
     * Creates a plain object from a UserAuthReq message. Also converts values to other types if specified.
     * @param message UserAuthReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserAuthReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserAuthReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserAuthResp. */
export interface IUserAuthResp {

    /** UserAuthResp userInfo */
    userInfo?: (IUserInfo|null);
}

/** Represents a UserAuthResp. */
export class UserAuthResp implements IUserAuthResp {

    /**
     * Constructs a new UserAuthResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserAuthResp);

    /** UserAuthResp userInfo. */
    public userInfo?: (IUserInfo|null);

    /**
     * Creates a new UserAuthResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserAuthResp instance
     */
    public static create(properties?: IUserAuthResp): UserAuthResp;

    /**
     * Encodes the specified UserAuthResp message. Does not implicitly {@link UserAuthResp.verify|verify} messages.
     * @param message UserAuthResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserAuthResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserAuthResp message, length delimited. Does not implicitly {@link UserAuthResp.verify|verify} messages.
     * @param message UserAuthResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserAuthResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserAuthResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserAuthResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserAuthResp;

    /**
     * Decodes a UserAuthResp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserAuthResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserAuthResp;

    /**
     * Verifies a UserAuthResp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserAuthResp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserAuthResp
     */
    public static fromObject(object: { [k: string]: any }): UserAuthResp;

    /**
     * Creates a plain object from a UserAuthResp message. Also converts values to other types if specified.
     * @param message UserAuthResp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserAuthResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserAuthResp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a JoinRoomReq. */
export interface IJoinRoomReq {

    /** JoinRoomReq id */
    id?: (string|null);
}

/** Represents a JoinRoomReq. */
export class JoinRoomReq implements IJoinRoomReq {

    /**
     * Constructs a new JoinRoomReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IJoinRoomReq);

    /** JoinRoomReq id. */
    public id: string;

    /**
     * Creates a new JoinRoomReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JoinRoomReq instance
     */
    public static create(properties?: IJoinRoomReq): JoinRoomReq;

    /**
     * Encodes the specified JoinRoomReq message. Does not implicitly {@link JoinRoomReq.verify|verify} messages.
     * @param message JoinRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link JoinRoomReq.verify|verify} messages.
     * @param message JoinRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a JoinRoomReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): JoinRoomReq;

    /**
     * Decodes a JoinRoomReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns JoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): JoinRoomReq;

    /**
     * Verifies a JoinRoomReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a JoinRoomReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns JoinRoomReq
     */
    public static fromObject(object: { [k: string]: any }): JoinRoomReq;

    /**
     * Creates a plain object from a JoinRoomReq message. Also converts values to other types if specified.
     * @param message JoinRoomReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: JoinRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this JoinRoomReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SendMessageReq. */
export interface ISendMessageReq {

    /** SendMessageReq text */
    text?: (string|null);
}

/** Represents a SendMessageReq. */
export class SendMessageReq implements ISendMessageReq {

    /**
     * Constructs a new SendMessageReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISendMessageReq);

    /** SendMessageReq text. */
    public text: string;

    /**
     * Creates a new SendMessageReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendMessageReq instance
     */
    public static create(properties?: ISendMessageReq): SendMessageReq;

    /**
     * Encodes the specified SendMessageReq message. Does not implicitly {@link SendMessageReq.verify|verify} messages.
     * @param message SendMessageReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISendMessageReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SendMessageReq message, length delimited. Does not implicitly {@link SendMessageReq.verify|verify} messages.
     * @param message SendMessageReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISendMessageReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendMessageReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SendMessageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SendMessageReq;

    /**
     * Decodes a SendMessageReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SendMessageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SendMessageReq;

    /**
     * Verifies a SendMessageReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SendMessageReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SendMessageReq
     */
    public static fromObject(object: { [k: string]: any }): SendMessageReq;

    /**
     * Creates a plain object from a SendMessageReq message. Also converts values to other types if specified.
     * @param message SendMessageReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SendMessageReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SendMessageReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetUserInfoReq. */
export interface IGetUserInfoReq {

    /** GetUserInfoReq id */
    id?: (number|null);
}

/** Represents a GetUserInfoReq. */
export class GetUserInfoReq implements IGetUserInfoReq {

    /**
     * Constructs a new GetUserInfoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetUserInfoReq);

    /** GetUserInfoReq id. */
    public id: number;

    /**
     * Creates a new GetUserInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetUserInfoReq instance
     */
    public static create(properties?: IGetUserInfoReq): GetUserInfoReq;

    /**
     * Encodes the specified GetUserInfoReq message. Does not implicitly {@link GetUserInfoReq.verify|verify} messages.
     * @param message GetUserInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetUserInfoReq message, length delimited. Does not implicitly {@link GetUserInfoReq.verify|verify} messages.
     * @param message GetUserInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetUserInfoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetUserInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetUserInfoReq;

    /**
     * Decodes a GetUserInfoReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetUserInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetUserInfoReq;

    /**
     * Verifies a GetUserInfoReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetUserInfoReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetUserInfoReq
     */
    public static fromObject(object: { [k: string]: any }): GetUserInfoReq;

    /**
     * Creates a plain object from a GetUserInfoReq message. Also converts values to other types if specified.
     * @param message GetUserInfoReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetUserInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetUserInfoReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PongResp. */
export interface IPongResp {

    /** PongResp serverLoad */
    serverLoad?: (number|null);
}

/** Represents a PongResp. */
export class PongResp implements IPongResp {

    /**
     * Constructs a new PongResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPongResp);

    /** PongResp serverLoad. */
    public serverLoad: number;

    /**
     * Creates a new PongResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PongResp instance
     */
    public static create(properties?: IPongResp): PongResp;

    /**
     * Encodes the specified PongResp message. Does not implicitly {@link PongResp.verify|verify} messages.
     * @param message PongResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPongResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PongResp message, length delimited. Does not implicitly {@link PongResp.verify|verify} messages.
     * @param message PongResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPongResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PongResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PongResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PongResp;

    /**
     * Decodes a PongResp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PongResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PongResp;

    /**
     * Verifies a PongResp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PongResp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PongResp
     */
    public static fromObject(object: { [k: string]: any }): PongResp;

    /**
     * Creates a plain object from a PongResp message. Also converts values to other types if specified.
     * @param message PongResp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PongResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PongResp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserList. */
export interface IUserList {

    /** UserList users */
    users?: (IUserInfo[]|null);
}

/** Represents a UserList. */
export class UserList implements IUserList {

    /**
     * Constructs a new UserList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserList);

    /** UserList users. */
    public users: IUserInfo[];

    /**
     * Creates a new UserList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserList instance
     */
    public static create(properties?: IUserList): UserList;

    /**
     * Encodes the specified UserList message. Does not implicitly {@link UserList.verify|verify} messages.
     * @param message UserList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserList message, length delimited. Does not implicitly {@link UserList.verify|verify} messages.
     * @param message UserList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserList;

    /**
     * Decodes a UserList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserList;

    /**
     * Verifies a UserList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserList
     */
    public static fromObject(object: { [k: string]: any }): UserList;

    /**
     * Creates a plain object from a UserList message. Also converts values to other types if specified.
     * @param message UserList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UsersDiff. */
export interface IUsersDiff {

    /** UsersDiff addedUsers */
    addedUsers?: (IUserInfo[]|null);

    /** UsersDiff droppedUsers */
    droppedUsers?: (number[]|null);
}

/** Represents a UsersDiff. */
export class UsersDiff implements IUsersDiff {

    /**
     * Constructs a new UsersDiff.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUsersDiff);

    /** UsersDiff addedUsers. */
    public addedUsers: IUserInfo[];

    /** UsersDiff droppedUsers. */
    public droppedUsers: number[];

    /**
     * Creates a new UsersDiff instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UsersDiff instance
     */
    public static create(properties?: IUsersDiff): UsersDiff;

    /**
     * Encodes the specified UsersDiff message. Does not implicitly {@link UsersDiff.verify|verify} messages.
     * @param message UsersDiff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUsersDiff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UsersDiff message, length delimited. Does not implicitly {@link UsersDiff.verify|verify} messages.
     * @param message UsersDiff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUsersDiff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UsersDiff message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UsersDiff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UsersDiff;

    /**
     * Decodes a UsersDiff message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UsersDiff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UsersDiff;

    /**
     * Verifies a UsersDiff message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UsersDiff message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UsersDiff
     */
    public static fromObject(object: { [k: string]: any }): UsersDiff;

    /**
     * Creates a plain object from a UsersDiff message. Also converts values to other types if specified.
     * @param message UsersDiff
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UsersDiff, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UsersDiff to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserInfo. */
export interface IUserInfo {

    /** UserInfo id */
    id?: (number|null);

    /** UserInfo name */
    name?: (string|null);
}

/** Represents a UserInfo. */
export class UserInfo implements IUserInfo {

    /**
     * Constructs a new UserInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserInfo);

    /** UserInfo id. */
    public id: number;

    /** UserInfo name. */
    public name: string;

    /**
     * Creates a new UserInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserInfo instance
     */
    public static create(properties?: IUserInfo): UserInfo;

    /**
     * Encodes the specified UserInfo message. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @param message UserInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @param message UserInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserInfo;

    /**
     * Decodes a UserInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserInfo;

    /**
     * Verifies a UserInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserInfo
     */
    public static fromObject(object: { [k: string]: any }): UserInfo;

    /**
     * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
     * @param message UserInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a VideoInfo. */
export interface IVideoInfo {

    /** VideoInfo url */
    url?: (string|null);
}

/** Represents a VideoInfo. */
export class VideoInfo implements IVideoInfo {

    /**
     * Constructs a new VideoInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVideoInfo);

    /** VideoInfo url. */
    public url: string;

    /**
     * Creates a new VideoInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VideoInfo instance
     */
    public static create(properties?: IVideoInfo): VideoInfo;

    /**
     * Encodes the specified VideoInfo message. Does not implicitly {@link VideoInfo.verify|verify} messages.
     * @param message VideoInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVideoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VideoInfo message, length delimited. Does not implicitly {@link VideoInfo.verify|verify} messages.
     * @param message VideoInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVideoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VideoInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VideoInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VideoInfo;

    /**
     * Decodes a VideoInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VideoInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VideoInfo;

    /**
     * Verifies a VideoInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VideoInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VideoInfo
     */
    public static fromObject(object: { [k: string]: any }): VideoInfo;

    /**
     * Creates a plain object from a VideoInfo message. Also converts values to other types if specified.
     * @param message VideoInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VideoInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VideoInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RoomInfo. */
export interface IRoomInfo {

    /** RoomInfo id */
    id?: (string|null);

    /** RoomInfo userList */
    userList?: (IUserList|null);
}

/** Represents a RoomInfo. */
export class RoomInfo implements IRoomInfo {

    /**
     * Constructs a new RoomInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomInfo);

    /** RoomInfo id. */
    public id: string;

    /** RoomInfo userList. */
    public userList?: (IUserList|null);

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomInfo instance
     */
    public static create(properties?: IRoomInfo): RoomInfo;

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @param message RoomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @param message RoomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomInfo;

    /**
     * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomInfo;

    /**
     * Verifies a RoomInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomInfo
     */
    public static fromObject(object: { [k: string]: any }): RoomInfo;

    /**
     * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
     * @param message RoomInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Message. */
export interface IMessage {

    /** Message senderId */
    senderId?: (number|null);

    /** Message text */
    text?: (string|null);
}

/** Represents a Message. */
export class Message implements IMessage {

    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message senderId. */
    public senderId: number;

    /** Message text. */
    public text: string;

    /**
     * Creates a new Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Message instance
     */
    public static create(properties?: IMessage): Message;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Message;

    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Message
     */
    public static fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @param message Message
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Message to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

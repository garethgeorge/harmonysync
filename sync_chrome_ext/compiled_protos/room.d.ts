import * as $protobuf from "protobufjs";
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
    id?: (number|null);

    /** RoomInfo name */
    name?: (string|null);

    /** RoomInfo token */
    token?: (string|null);

    /** RoomInfo queue */
    queue?: (IVideoInfo[]|null);
}

/** Represents a RoomInfo. */
export class RoomInfo implements IRoomInfo {

    /**
     * Constructs a new RoomInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomInfo);

    /** RoomInfo id. */
    public id: number;

    /** RoomInfo name. */
    public name: string;

    /** RoomInfo token. */
    public token: string;

    /** RoomInfo queue. */
    public queue: IVideoInfo[];

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

/** Properties of a JoinRoomReq. */
export interface IJoinRoomReq {

    /** JoinRoomReq token */
    token?: (string|null);
}

/** Represents a JoinRoomReq. */
export class JoinRoomReq implements IJoinRoomReq {

    /**
     * Constructs a new JoinRoomReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IJoinRoomReq);

    /** JoinRoomReq token. */
    public token: string;

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

/** Properties of a JoinRoomResp. */
export interface IJoinRoomResp {

    /** JoinRoomResp roomInfo */
    roomInfo?: (IRoomInfo|null);
}

/** Represents a JoinRoomResp. */
export class JoinRoomResp implements IJoinRoomResp {

    /**
     * Constructs a new JoinRoomResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IJoinRoomResp);

    /** JoinRoomResp roomInfo. */
    public roomInfo?: (IRoomInfo|null);

    /**
     * Creates a new JoinRoomResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JoinRoomResp instance
     */
    public static create(properties?: IJoinRoomResp): JoinRoomResp;

    /**
     * Encodes the specified JoinRoomResp message. Does not implicitly {@link JoinRoomResp.verify|verify} messages.
     * @param message JoinRoomResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IJoinRoomResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified JoinRoomResp message, length delimited. Does not implicitly {@link JoinRoomResp.verify|verify} messages.
     * @param message JoinRoomResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IJoinRoomResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a JoinRoomResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JoinRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): JoinRoomResp;

    /**
     * Decodes a JoinRoomResp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns JoinRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): JoinRoomResp;

    /**
     * Verifies a JoinRoomResp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a JoinRoomResp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns JoinRoomResp
     */
    public static fromObject(object: { [k: string]: any }): JoinRoomResp;

    /**
     * Creates a plain object from a JoinRoomResp message. Also converts values to other types if specified.
     * @param message JoinRoomResp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: JoinRoomResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this JoinRoomResp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

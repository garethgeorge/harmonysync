/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.VideoInfo = (function() {

    /**
     * Properties of a VideoInfo.
     * @exports IVideoInfo
     * @interface IVideoInfo
     * @property {string|null} [url] VideoInfo url
     */

    /**
     * Constructs a new VideoInfo.
     * @exports VideoInfo
     * @classdesc Represents a VideoInfo.
     * @implements IVideoInfo
     * @constructor
     * @param {IVideoInfo=} [properties] Properties to set
     */
    function VideoInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VideoInfo url.
     * @member {string} url
     * @memberof VideoInfo
     * @instance
     */
    VideoInfo.prototype.url = "";

    /**
     * Creates a new VideoInfo instance using the specified properties.
     * @function create
     * @memberof VideoInfo
     * @static
     * @param {IVideoInfo=} [properties] Properties to set
     * @returns {VideoInfo} VideoInfo instance
     */
    VideoInfo.create = function create(properties) {
        return new VideoInfo(properties);
    };

    /**
     * Encodes the specified VideoInfo message. Does not implicitly {@link VideoInfo.verify|verify} messages.
     * @function encode
     * @memberof VideoInfo
     * @static
     * @param {IVideoInfo} message VideoInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VideoInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
        return writer;
    };

    /**
     * Encodes the specified VideoInfo message, length delimited. Does not implicitly {@link VideoInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VideoInfo
     * @static
     * @param {IVideoInfo} message VideoInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VideoInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VideoInfo message from the specified reader or buffer.
     * @function decode
     * @memberof VideoInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VideoInfo} VideoInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VideoInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VideoInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.url = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VideoInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VideoInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VideoInfo} VideoInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VideoInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VideoInfo message.
     * @function verify
     * @memberof VideoInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VideoInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        return null;
    };

    /**
     * Creates a VideoInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VideoInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VideoInfo} VideoInfo
     */
    VideoInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.VideoInfo)
            return object;
        var message = new $root.VideoInfo();
        if (object.url != null)
            message.url = String(object.url);
        return message;
    };

    /**
     * Creates a plain object from a VideoInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VideoInfo
     * @static
     * @param {VideoInfo} message VideoInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VideoInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.url = "";
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        return object;
    };

    /**
     * Converts this VideoInfo to JSON.
     * @function toJSON
     * @memberof VideoInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VideoInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return VideoInfo;
})();

$root.RoomInfo = (function() {

    /**
     * Properties of a RoomInfo.
     * @exports IRoomInfo
     * @interface IRoomInfo
     * @property {number|null} [id] RoomInfo id
     * @property {string|null} [name] RoomInfo name
     * @property {string|null} [token] RoomInfo token
     * @property {Array.<IVideoInfo>|null} [queue] RoomInfo queue
     */

    /**
     * Constructs a new RoomInfo.
     * @exports RoomInfo
     * @classdesc Represents a RoomInfo.
     * @implements IRoomInfo
     * @constructor
     * @param {IRoomInfo=} [properties] Properties to set
     */
    function RoomInfo(properties) {
        this.queue = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomInfo id.
     * @member {number} id
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.id = 0;

    /**
     * RoomInfo name.
     * @member {string} name
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.name = "";

    /**
     * RoomInfo token.
     * @member {string} token
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.token = "";

    /**
     * RoomInfo queue.
     * @member {Array.<IVideoInfo>} queue
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.queue = $util.emptyArray;

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @function create
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo=} [properties] Properties to set
     * @returns {RoomInfo} RoomInfo instance
     */
    RoomInfo.create = function create(properties) {
        return new RoomInfo(properties);
    };

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @function encode
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo} message RoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
        if (message.queue != null && message.queue.length)
            for (var i = 0; i < message.queue.length; ++i)
                $root.VideoInfo.encode(message.queue[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo} message RoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomInfo} RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.token = reader.string();
                break;
            case 4:
                if (!(message.queue && message.queue.length))
                    message.queue = [];
                message.queue.push($root.VideoInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomInfo} RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomInfo message.
     * @function verify
     * @memberof RoomInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        if (message.queue != null && message.hasOwnProperty("queue")) {
            if (!Array.isArray(message.queue))
                return "queue: array expected";
            for (var i = 0; i < message.queue.length; ++i) {
                var error = $root.VideoInfo.verify(message.queue[i]);
                if (error)
                    return "queue." + error;
            }
        }
        return null;
    };

    /**
     * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomInfo} RoomInfo
     */
    RoomInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomInfo)
            return object;
        var message = new $root.RoomInfo();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.name != null)
            message.name = String(object.name);
        if (object.token != null)
            message.token = String(object.token);
        if (object.queue) {
            if (!Array.isArray(object.queue))
                throw TypeError(".RoomInfo.queue: array expected");
            message.queue = [];
            for (var i = 0; i < object.queue.length; ++i) {
                if (typeof object.queue[i] !== "object")
                    throw TypeError(".RoomInfo.queue: object expected");
                message.queue[i] = $root.VideoInfo.fromObject(object.queue[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomInfo
     * @static
     * @param {RoomInfo} message RoomInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.queue = [];
        if (options.defaults) {
            object.id = 0;
            object.name = "";
            object.token = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.queue && message.queue.length) {
            object.queue = [];
            for (var j = 0; j < message.queue.length; ++j)
                object.queue[j] = $root.VideoInfo.toObject(message.queue[j], options);
        }
        return object;
    };

    /**
     * Converts this RoomInfo to JSON.
     * @function toJSON
     * @memberof RoomInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomInfo;
})();

$root.JoinRoomReq = (function() {

    /**
     * Properties of a JoinRoomReq.
     * @exports IJoinRoomReq
     * @interface IJoinRoomReq
     * @property {string|null} [token] JoinRoomReq token
     */

    /**
     * Constructs a new JoinRoomReq.
     * @exports JoinRoomReq
     * @classdesc Represents a JoinRoomReq.
     * @implements IJoinRoomReq
     * @constructor
     * @param {IJoinRoomReq=} [properties] Properties to set
     */
    function JoinRoomReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JoinRoomReq token.
     * @member {string} token
     * @memberof JoinRoomReq
     * @instance
     */
    JoinRoomReq.prototype.token = "";

    /**
     * Creates a new JoinRoomReq instance using the specified properties.
     * @function create
     * @memberof JoinRoomReq
     * @static
     * @param {IJoinRoomReq=} [properties] Properties to set
     * @returns {JoinRoomReq} JoinRoomReq instance
     */
    JoinRoomReq.create = function create(properties) {
        return new JoinRoomReq(properties);
    };

    /**
     * Encodes the specified JoinRoomReq message. Does not implicitly {@link JoinRoomReq.verify|verify} messages.
     * @function encode
     * @memberof JoinRoomReq
     * @static
     * @param {IJoinRoomReq} message JoinRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
        return writer;
    };

    /**
     * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link JoinRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JoinRoomReq
     * @static
     * @param {IJoinRoomReq} message JoinRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JoinRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof JoinRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JoinRoomReq} JoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoomReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.token = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JoinRoomReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JoinRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JoinRoomReq} JoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a JoinRoomReq message.
     * @function verify
     * @memberof JoinRoomReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    JoinRoomReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        return null;
    };

    /**
     * Creates a JoinRoomReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof JoinRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JoinRoomReq} JoinRoomReq
     */
    JoinRoomReq.fromObject = function fromObject(object) {
        if (object instanceof $root.JoinRoomReq)
            return object;
        var message = new $root.JoinRoomReq();
        if (object.token != null)
            message.token = String(object.token);
        return message;
    };

    /**
     * Creates a plain object from a JoinRoomReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JoinRoomReq
     * @static
     * @param {JoinRoomReq} message JoinRoomReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    JoinRoomReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.token = "";
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        return object;
    };

    /**
     * Converts this JoinRoomReq to JSON.
     * @function toJSON
     * @memberof JoinRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JoinRoomReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return JoinRoomReq;
})();

$root.JoinRoomResp = (function() {

    /**
     * Properties of a JoinRoomResp.
     * @exports IJoinRoomResp
     * @interface IJoinRoomResp
     * @property {IRoomInfo|null} [roomInfo] JoinRoomResp roomInfo
     */

    /**
     * Constructs a new JoinRoomResp.
     * @exports JoinRoomResp
     * @classdesc Represents a JoinRoomResp.
     * @implements IJoinRoomResp
     * @constructor
     * @param {IJoinRoomResp=} [properties] Properties to set
     */
    function JoinRoomResp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JoinRoomResp roomInfo.
     * @member {IRoomInfo|null|undefined} roomInfo
     * @memberof JoinRoomResp
     * @instance
     */
    JoinRoomResp.prototype.roomInfo = null;

    /**
     * Creates a new JoinRoomResp instance using the specified properties.
     * @function create
     * @memberof JoinRoomResp
     * @static
     * @param {IJoinRoomResp=} [properties] Properties to set
     * @returns {JoinRoomResp} JoinRoomResp instance
     */
    JoinRoomResp.create = function create(properties) {
        return new JoinRoomResp(properties);
    };

    /**
     * Encodes the specified JoinRoomResp message. Does not implicitly {@link JoinRoomResp.verify|verify} messages.
     * @function encode
     * @memberof JoinRoomResp
     * @static
     * @param {IJoinRoomResp} message JoinRoomResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomResp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
            $root.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified JoinRoomResp message, length delimited. Does not implicitly {@link JoinRoomResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JoinRoomResp
     * @static
     * @param {IJoinRoomResp} message JoinRoomResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomResp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JoinRoomResp message from the specified reader or buffer.
     * @function decode
     * @memberof JoinRoomResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JoinRoomResp} JoinRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomResp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoomResp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.roomInfo = $root.RoomInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JoinRoomResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JoinRoomResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JoinRoomResp} JoinRoomResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomResp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a JoinRoomResp message.
     * @function verify
     * @memberof JoinRoomResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    JoinRoomResp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
            var error = $root.RoomInfo.verify(message.roomInfo);
            if (error)
                return "roomInfo." + error;
        }
        return null;
    };

    /**
     * Creates a JoinRoomResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof JoinRoomResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JoinRoomResp} JoinRoomResp
     */
    JoinRoomResp.fromObject = function fromObject(object) {
        if (object instanceof $root.JoinRoomResp)
            return object;
        var message = new $root.JoinRoomResp();
        if (object.roomInfo != null) {
            if (typeof object.roomInfo !== "object")
                throw TypeError(".JoinRoomResp.roomInfo: object expected");
            message.roomInfo = $root.RoomInfo.fromObject(object.roomInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a JoinRoomResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JoinRoomResp
     * @static
     * @param {JoinRoomResp} message JoinRoomResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    JoinRoomResp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.roomInfo = null;
        if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
            object.roomInfo = $root.RoomInfo.toObject(message.roomInfo, options);
        return object;
    };

    /**
     * Converts this JoinRoomResp to JSON.
     * @function toJSON
     * @memberof JoinRoomResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JoinRoomResp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return JoinRoomResp;
})();

module.exports = $root;

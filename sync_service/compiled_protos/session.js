/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.SessionService = (function() {

    /**
     * Constructs a new SessionService service.
     * @exports SessionService
     * @classdesc Represents a SessionService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function SessionService(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (SessionService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = SessionService;

    /**
     * Creates new SessionService service using the specified rpc implementation.
     * @function create
     * @memberof SessionService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {SessionService} RPC service. Useful where requests and/or responses are streamed.
     */
    SessionService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link SessionService#getServerVersion}.
     * @memberof SessionService
     * @typedef getServerVersionCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ServerProtocolVersion} [response] ServerProtocolVersion
     */

    /**
     * Calls getServerVersion.
     * @function getServerVersion
     * @memberof SessionService
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {SessionService.getServerVersionCallback} callback Node-style callback called with the error, if any, and ServerProtocolVersion
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(SessionService.prototype.getServerVersion = function getServerVersion(request, callback) {
        return this.rpcCall(getServerVersion, $root.Empty, $root.ServerProtocolVersion, request, callback);
    }, "name", { value: "getServerVersion" });

    /**
     * Calls getServerVersion.
     * @function getServerVersion
     * @memberof SessionService
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<ServerProtocolVersion>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link SessionService#auth}.
     * @memberof SessionService
     * @typedef authCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {UserAuthResp} [response] UserAuthResp
     */

    /**
     * Calls auth.
     * @function auth
     * @memberof SessionService
     * @instance
     * @param {IUserAuthReq} request UserAuthReq message or plain object
     * @param {SessionService.authCallback} callback Node-style callback called with the error, if any, and UserAuthResp
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(SessionService.prototype.auth = function auth(request, callback) {
        return this.rpcCall(auth, $root.UserAuthReq, $root.UserAuthResp, request, callback);
    }, "name", { value: "auth" });

    /**
     * Calls auth.
     * @function auth
     * @memberof SessionService
     * @instance
     * @param {IUserAuthReq} request UserAuthReq message or plain object
     * @returns {Promise<UserAuthResp>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link SessionService#createRoom}.
     * @memberof SessionService
     * @typedef createRoomCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {RoomInfo} [response] RoomInfo
     */

    /**
     * Calls createRoom.
     * @function createRoom
     * @memberof SessionService
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {SessionService.createRoomCallback} callback Node-style callback called with the error, if any, and RoomInfo
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(SessionService.prototype.createRoom = function createRoom(request, callback) {
        return this.rpcCall(createRoom, $root.Empty, $root.RoomInfo, request, callback);
    }, "name", { value: "createRoom" });

    /**
     * Calls createRoom.
     * @function createRoom
     * @memberof SessionService
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<RoomInfo>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link SessionService#joinRoom}.
     * @memberof SessionService
     * @typedef joinRoomCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {JoinRoomResp} [response] JoinRoomResp
     */

    /**
     * Calls joinRoom.
     * @function joinRoom
     * @memberof SessionService
     * @instance
     * @param {IJoinRoomReq} request JoinRoomReq message or plain object
     * @param {SessionService.joinRoomCallback} callback Node-style callback called with the error, if any, and JoinRoomResp
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(SessionService.prototype.joinRoom = function joinRoom(request, callback) {
        return this.rpcCall(joinRoom, $root.JoinRoomReq, $root.JoinRoomResp, request, callback);
    }, "name", { value: "joinRoom" });

    /**
     * Calls joinRoom.
     * @function joinRoom
     * @memberof SessionService
     * @instance
     * @param {IJoinRoomReq} request JoinRoomReq message or plain object
     * @returns {Promise<JoinRoomResp>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link SessionService#sendMessage}.
     * @memberof SessionService
     * @typedef sendMessageCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Empty} [response] Empty
     */

    /**
     * Calls sendMessage.
     * @function sendMessage
     * @memberof SessionService
     * @instance
     * @param {ISendMessageReq} request SendMessageReq message or plain object
     * @param {SessionService.sendMessageCallback} callback Node-style callback called with the error, if any, and Empty
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(SessionService.prototype.sendMessage = function sendMessage(request, callback) {
        return this.rpcCall(sendMessage, $root.SendMessageReq, $root.Empty, request, callback);
    }, "name", { value: "sendMessage" });

    /**
     * Calls sendMessage.
     * @function sendMessage
     * @memberof SessionService
     * @instance
     * @param {ISendMessageReq} request SendMessageReq message or plain object
     * @returns {Promise<Empty>} Promise
     * @variation 2
     */

    return SessionService;
})();

$root.Empty = (function() {

    /**
     * Properties of an Empty.
     * @exports IEmpty
     * @interface IEmpty
     */

    /**
     * Constructs a new Empty.
     * @exports Empty
     * @classdesc Represents an Empty.
     * @implements IEmpty
     * @constructor
     * @param {IEmpty=} [properties] Properties to set
     */
    function Empty(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Empty instance using the specified properties.
     * @function create
     * @memberof Empty
     * @static
     * @param {IEmpty=} [properties] Properties to set
     * @returns {Empty} Empty instance
     */
    Empty.create = function create(properties) {
        return new Empty(properties);
    };

    /**
     * Encodes the specified Empty message. Does not implicitly {@link Empty.verify|verify} messages.
     * @function encode
     * @memberof Empty
     * @static
     * @param {IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Empty.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Empty
     * @static
     * @param {IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Empty.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Empty message from the specified reader or buffer.
     * @function decode
     * @memberof Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Empty.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Empty();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Empty.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Empty message.
     * @function verify
     * @memberof Empty
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Empty.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Empty
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Empty} Empty
     */
    Empty.fromObject = function fromObject(object) {
        if (object instanceof $root.Empty)
            return object;
        return new $root.Empty();
    };

    /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Empty
     * @static
     * @param {Empty} message Empty
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Empty.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Empty to JSON.
     * @function toJSON
     * @memberof Empty
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Empty.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Empty;
})();

$root.ServerProtocolVersion = (function() {

    /**
     * Properties of a ServerProtocolVersion.
     * @exports IServerProtocolVersion
     * @interface IServerProtocolVersion
     * @property {string|null} [version] ServerProtocolVersion version
     */

    /**
     * Constructs a new ServerProtocolVersion.
     * @exports ServerProtocolVersion
     * @classdesc Represents a ServerProtocolVersion.
     * @implements IServerProtocolVersion
     * @constructor
     * @param {IServerProtocolVersion=} [properties] Properties to set
     */
    function ServerProtocolVersion(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerProtocolVersion version.
     * @member {string} version
     * @memberof ServerProtocolVersion
     * @instance
     */
    ServerProtocolVersion.prototype.version = "";

    /**
     * Creates a new ServerProtocolVersion instance using the specified properties.
     * @function create
     * @memberof ServerProtocolVersion
     * @static
     * @param {IServerProtocolVersion=} [properties] Properties to set
     * @returns {ServerProtocolVersion} ServerProtocolVersion instance
     */
    ServerProtocolVersion.create = function create(properties) {
        return new ServerProtocolVersion(properties);
    };

    /**
     * Encodes the specified ServerProtocolVersion message. Does not implicitly {@link ServerProtocolVersion.verify|verify} messages.
     * @function encode
     * @memberof ServerProtocolVersion
     * @static
     * @param {IServerProtocolVersion} message ServerProtocolVersion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerProtocolVersion.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
        return writer;
    };

    /**
     * Encodes the specified ServerProtocolVersion message, length delimited. Does not implicitly {@link ServerProtocolVersion.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerProtocolVersion
     * @static
     * @param {IServerProtocolVersion} message ServerProtocolVersion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerProtocolVersion.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerProtocolVersion message from the specified reader or buffer.
     * @function decode
     * @memberof ServerProtocolVersion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerProtocolVersion} ServerProtocolVersion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerProtocolVersion.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerProtocolVersion();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.version = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerProtocolVersion message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerProtocolVersion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerProtocolVersion} ServerProtocolVersion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerProtocolVersion.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerProtocolVersion message.
     * @function verify
     * @memberof ServerProtocolVersion
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerProtocolVersion.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isString(message.version))
                return "version: string expected";
        return null;
    };

    /**
     * Creates a ServerProtocolVersion message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerProtocolVersion
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerProtocolVersion} ServerProtocolVersion
     */
    ServerProtocolVersion.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerProtocolVersion)
            return object;
        var message = new $root.ServerProtocolVersion();
        if (object.version != null)
            message.version = String(object.version);
        return message;
    };

    /**
     * Creates a plain object from a ServerProtocolVersion message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerProtocolVersion
     * @static
     * @param {ServerProtocolVersion} message ServerProtocolVersion
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerProtocolVersion.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.version = "";
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        return object;
    };

    /**
     * Converts this ServerProtocolVersion to JSON.
     * @function toJSON
     * @memberof ServerProtocolVersion
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerProtocolVersion.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerProtocolVersion;
})();

$root.UserAuthReq = (function() {

    /**
     * Properties of a UserAuthReq.
     * @exports IUserAuthReq
     * @interface IUserAuthReq
     * @property {string|null} [name] UserAuthReq name
     */

    /**
     * Constructs a new UserAuthReq.
     * @exports UserAuthReq
     * @classdesc Represents a UserAuthReq.
     * @implements IUserAuthReq
     * @constructor
     * @param {IUserAuthReq=} [properties] Properties to set
     */
    function UserAuthReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserAuthReq name.
     * @member {string} name
     * @memberof UserAuthReq
     * @instance
     */
    UserAuthReq.prototype.name = "";

    /**
     * Creates a new UserAuthReq instance using the specified properties.
     * @function create
     * @memberof UserAuthReq
     * @static
     * @param {IUserAuthReq=} [properties] Properties to set
     * @returns {UserAuthReq} UserAuthReq instance
     */
    UserAuthReq.create = function create(properties) {
        return new UserAuthReq(properties);
    };

    /**
     * Encodes the specified UserAuthReq message. Does not implicitly {@link UserAuthReq.verify|verify} messages.
     * @function encode
     * @memberof UserAuthReq
     * @static
     * @param {IUserAuthReq} message UserAuthReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserAuthReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified UserAuthReq message, length delimited. Does not implicitly {@link UserAuthReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserAuthReq
     * @static
     * @param {IUserAuthReq} message UserAuthReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserAuthReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserAuthReq message from the specified reader or buffer.
     * @function decode
     * @memberof UserAuthReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserAuthReq} UserAuthReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserAuthReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserAuthReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserAuthReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserAuthReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserAuthReq} UserAuthReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserAuthReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserAuthReq message.
     * @function verify
     * @memberof UserAuthReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserAuthReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a UserAuthReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserAuthReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserAuthReq} UserAuthReq
     */
    UserAuthReq.fromObject = function fromObject(object) {
        if (object instanceof $root.UserAuthReq)
            return object;
        var message = new $root.UserAuthReq();
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a UserAuthReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserAuthReq
     * @static
     * @param {UserAuthReq} message UserAuthReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserAuthReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this UserAuthReq to JSON.
     * @function toJSON
     * @memberof UserAuthReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserAuthReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserAuthReq;
})();

$root.UserAuthResp = (function() {

    /**
     * Properties of a UserAuthResp.
     * @exports IUserAuthResp
     * @interface IUserAuthResp
     * @property {IUserInfo|null} [userInfo] UserAuthResp userInfo
     */

    /**
     * Constructs a new UserAuthResp.
     * @exports UserAuthResp
     * @classdesc Represents a UserAuthResp.
     * @implements IUserAuthResp
     * @constructor
     * @param {IUserAuthResp=} [properties] Properties to set
     */
    function UserAuthResp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserAuthResp userInfo.
     * @member {IUserInfo|null|undefined} userInfo
     * @memberof UserAuthResp
     * @instance
     */
    UserAuthResp.prototype.userInfo = null;

    /**
     * Creates a new UserAuthResp instance using the specified properties.
     * @function create
     * @memberof UserAuthResp
     * @static
     * @param {IUserAuthResp=} [properties] Properties to set
     * @returns {UserAuthResp} UserAuthResp instance
     */
    UserAuthResp.create = function create(properties) {
        return new UserAuthResp(properties);
    };

    /**
     * Encodes the specified UserAuthResp message. Does not implicitly {@link UserAuthResp.verify|verify} messages.
     * @function encode
     * @memberof UserAuthResp
     * @static
     * @param {IUserAuthResp} message UserAuthResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserAuthResp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
            $root.UserInfo.encode(message.userInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UserAuthResp message, length delimited. Does not implicitly {@link UserAuthResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserAuthResp
     * @static
     * @param {IUserAuthResp} message UserAuthResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserAuthResp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserAuthResp message from the specified reader or buffer.
     * @function decode
     * @memberof UserAuthResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserAuthResp} UserAuthResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserAuthResp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserAuthResp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userInfo = $root.UserInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserAuthResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserAuthResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserAuthResp} UserAuthResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserAuthResp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserAuthResp message.
     * @function verify
     * @memberof UserAuthResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserAuthResp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
            var error = $root.UserInfo.verify(message.userInfo);
            if (error)
                return "userInfo." + error;
        }
        return null;
    };

    /**
     * Creates a UserAuthResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserAuthResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserAuthResp} UserAuthResp
     */
    UserAuthResp.fromObject = function fromObject(object) {
        if (object instanceof $root.UserAuthResp)
            return object;
        var message = new $root.UserAuthResp();
        if (object.userInfo != null) {
            if (typeof object.userInfo !== "object")
                throw TypeError(".UserAuthResp.userInfo: object expected");
            message.userInfo = $root.UserInfo.fromObject(object.userInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a UserAuthResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserAuthResp
     * @static
     * @param {UserAuthResp} message UserAuthResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserAuthResp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.userInfo = null;
        if (message.userInfo != null && message.hasOwnProperty("userInfo"))
            object.userInfo = $root.UserInfo.toObject(message.userInfo, options);
        return object;
    };

    /**
     * Converts this UserAuthResp to JSON.
     * @function toJSON
     * @memberof UserAuthResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserAuthResp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserAuthResp;
})();

$root.JoinRoomReq = (function() {

    /**
     * Properties of a JoinRoomReq.
     * @exports IJoinRoomReq
     * @interface IJoinRoomReq
     * @property {string|null} [id] JoinRoomReq id
     * @property {string|null} [password] JoinRoomReq password
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
     * JoinRoomReq id.
     * @member {string} id
     * @memberof JoinRoomReq
     * @instance
     */
    JoinRoomReq.prototype.id = "";

    /**
     * JoinRoomReq password.
     * @member {string} password
     * @memberof JoinRoomReq
     * @instance
     */
    JoinRoomReq.prototype.password = "";

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
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
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
                message.id = reader.string();
                break;
            case 2:
                message.password = reader.string();
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
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
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
        if (object.id != null)
            message.id = String(object.id);
        if (object.password != null)
            message.password = String(object.password);
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
        if (options.defaults) {
            object.id = "";
            object.password = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
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
     * @property {string|null} [error] JoinRoomResp error
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
     * JoinRoomResp error.
     * @member {string} error
     * @memberof JoinRoomResp
     * @instance
     */
    JoinRoomResp.prototype.error = "";

    /**
     * JoinRoomResp roomInfo.
     * @member {IRoomInfo|null|undefined} roomInfo
     * @memberof JoinRoomResp
     * @instance
     */
    JoinRoomResp.prototype.roomInfo = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * JoinRoomResp status.
     * @member {"error"|"roomInfo"|undefined} status
     * @memberof JoinRoomResp
     * @instance
     */
    Object.defineProperty(JoinRoomResp.prototype, "status", {
        get: $util.oneOfGetter($oneOfFields = ["error", "roomInfo"]),
        set: $util.oneOfSetter($oneOfFields)
    });

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
        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.error);
        if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
            $root.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                message.error = reader.string();
                break;
            case 2:
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
        var properties = {};
        if (message.error != null && message.hasOwnProperty("error")) {
            properties.status = 1;
            if (!$util.isString(message.error))
                return "error: string expected";
        }
        if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
            if (properties.status === 1)
                return "status: multiple values";
            properties.status = 1;
            {
                var error = $root.RoomInfo.verify(message.roomInfo);
                if (error)
                    return "roomInfo." + error;
            }
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
        if (object.error != null)
            message.error = String(object.error);
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
        if (message.error != null && message.hasOwnProperty("error")) {
            object.error = message.error;
            if (options.oneofs)
                object.status = "error";
        }
        if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
            object.roomInfo = $root.RoomInfo.toObject(message.roomInfo, options);
            if (options.oneofs)
                object.status = "roomInfo";
        }
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

$root.SendMessageReq = (function() {

    /**
     * Properties of a SendMessageReq.
     * @exports ISendMessageReq
     * @interface ISendMessageReq
     * @property {string|null} [text] SendMessageReq text
     */

    /**
     * Constructs a new SendMessageReq.
     * @exports SendMessageReq
     * @classdesc Represents a SendMessageReq.
     * @implements ISendMessageReq
     * @constructor
     * @param {ISendMessageReq=} [properties] Properties to set
     */
    function SendMessageReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendMessageReq text.
     * @member {string} text
     * @memberof SendMessageReq
     * @instance
     */
    SendMessageReq.prototype.text = "";

    /**
     * Creates a new SendMessageReq instance using the specified properties.
     * @function create
     * @memberof SendMessageReq
     * @static
     * @param {ISendMessageReq=} [properties] Properties to set
     * @returns {SendMessageReq} SendMessageReq instance
     */
    SendMessageReq.create = function create(properties) {
        return new SendMessageReq(properties);
    };

    /**
     * Encodes the specified SendMessageReq message. Does not implicitly {@link SendMessageReq.verify|verify} messages.
     * @function encode
     * @memberof SendMessageReq
     * @static
     * @param {ISendMessageReq} message SendMessageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMessageReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
        return writer;
    };

    /**
     * Encodes the specified SendMessageReq message, length delimited. Does not implicitly {@link SendMessageReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SendMessageReq
     * @static
     * @param {ISendMessageReq} message SendMessageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMessageReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendMessageReq message from the specified reader or buffer.
     * @function decode
     * @memberof SendMessageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SendMessageReq} SendMessageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMessageReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SendMessageReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.text = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SendMessageReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SendMessageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SendMessageReq} SendMessageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMessageReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendMessageReq message.
     * @function verify
     * @memberof SendMessageReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendMessageReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a SendMessageReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SendMessageReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SendMessageReq} SendMessageReq
     */
    SendMessageReq.fromObject = function fromObject(object) {
        if (object instanceof $root.SendMessageReq)
            return object;
        var message = new $root.SendMessageReq();
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a SendMessageReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SendMessageReq
     * @static
     * @param {SendMessageReq} message SendMessageReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendMessageReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.text = "";
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this SendMessageReq to JSON.
     * @function toJSON
     * @memberof SendMessageReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendMessageReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SendMessageReq;
})();

$root.GetUserInfoReq = (function() {

    /**
     * Properties of a GetUserInfoReq.
     * @exports IGetUserInfoReq
     * @interface IGetUserInfoReq
     * @property {number|null} [id] GetUserInfoReq id
     */

    /**
     * Constructs a new GetUserInfoReq.
     * @exports GetUserInfoReq
     * @classdesc Represents a GetUserInfoReq.
     * @implements IGetUserInfoReq
     * @constructor
     * @param {IGetUserInfoReq=} [properties] Properties to set
     */
    function GetUserInfoReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetUserInfoReq id.
     * @member {number} id
     * @memberof GetUserInfoReq
     * @instance
     */
    GetUserInfoReq.prototype.id = 0;

    /**
     * Creates a new GetUserInfoReq instance using the specified properties.
     * @function create
     * @memberof GetUserInfoReq
     * @static
     * @param {IGetUserInfoReq=} [properties] Properties to set
     * @returns {GetUserInfoReq} GetUserInfoReq instance
     */
    GetUserInfoReq.create = function create(properties) {
        return new GetUserInfoReq(properties);
    };

    /**
     * Encodes the specified GetUserInfoReq message. Does not implicitly {@link GetUserInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetUserInfoReq
     * @static
     * @param {IGetUserInfoReq} message GetUserInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUserInfoReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        return writer;
    };

    /**
     * Encodes the specified GetUserInfoReq message, length delimited. Does not implicitly {@link GetUserInfoReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetUserInfoReq
     * @static
     * @param {IGetUserInfoReq} message GetUserInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUserInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetUserInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetUserInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetUserInfoReq} GetUserInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUserInfoReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetUserInfoReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetUserInfoReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetUserInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetUserInfoReq} GetUserInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUserInfoReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetUserInfoReq message.
     * @function verify
     * @memberof GetUserInfoReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetUserInfoReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };

    /**
     * Creates a GetUserInfoReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetUserInfoReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetUserInfoReq} GetUserInfoReq
     */
    GetUserInfoReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetUserInfoReq)
            return object;
        var message = new $root.GetUserInfoReq();
        if (object.id != null)
            message.id = object.id | 0;
        return message;
    };

    /**
     * Creates a plain object from a GetUserInfoReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetUserInfoReq
     * @static
     * @param {GetUserInfoReq} message GetUserInfoReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetUserInfoReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this GetUserInfoReq to JSON.
     * @function toJSON
     * @memberof GetUserInfoReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetUserInfoReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetUserInfoReq;
})();

$root.UserList = (function() {

    /**
     * Properties of a UserList.
     * @exports IUserList
     * @interface IUserList
     * @property {Array.<IUserInfo>|null} [addedUsers] UserList addedUsers
     * @property {Array.<number>|null} [droppedUserIds] UserList droppedUserIds
     */

    /**
     * Constructs a new UserList.
     * @exports UserList
     * @classdesc Represents a UserList.
     * @implements IUserList
     * @constructor
     * @param {IUserList=} [properties] Properties to set
     */
    function UserList(properties) {
        this.addedUsers = [];
        this.droppedUserIds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserList addedUsers.
     * @member {Array.<IUserInfo>} addedUsers
     * @memberof UserList
     * @instance
     */
    UserList.prototype.addedUsers = $util.emptyArray;

    /**
     * UserList droppedUserIds.
     * @member {Array.<number>} droppedUserIds
     * @memberof UserList
     * @instance
     */
    UserList.prototype.droppedUserIds = $util.emptyArray;

    /**
     * Creates a new UserList instance using the specified properties.
     * @function create
     * @memberof UserList
     * @static
     * @param {IUserList=} [properties] Properties to set
     * @returns {UserList} UserList instance
     */
    UserList.create = function create(properties) {
        return new UserList(properties);
    };

    /**
     * Encodes the specified UserList message. Does not implicitly {@link UserList.verify|verify} messages.
     * @function encode
     * @memberof UserList
     * @static
     * @param {IUserList} message UserList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.addedUsers != null && message.addedUsers.length)
            for (var i = 0; i < message.addedUsers.length; ++i)
                $root.UserInfo.encode(message.addedUsers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.droppedUserIds != null && message.droppedUserIds.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.droppedUserIds.length; ++i)
                writer.int32(message.droppedUserIds[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified UserList message, length delimited. Does not implicitly {@link UserList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserList
     * @static
     * @param {IUserList} message UserList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserList message from the specified reader or buffer.
     * @function decode
     * @memberof UserList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserList} UserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.addedUsers && message.addedUsers.length))
                    message.addedUsers = [];
                message.addedUsers.push($root.UserInfo.decode(reader, reader.uint32()));
                break;
            case 2:
                if (!(message.droppedUserIds && message.droppedUserIds.length))
                    message.droppedUserIds = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.droppedUserIds.push(reader.int32());
                } else
                    message.droppedUserIds.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserList} UserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserList message.
     * @function verify
     * @memberof UserList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.addedUsers != null && message.hasOwnProperty("addedUsers")) {
            if (!Array.isArray(message.addedUsers))
                return "addedUsers: array expected";
            for (var i = 0; i < message.addedUsers.length; ++i) {
                var error = $root.UserInfo.verify(message.addedUsers[i]);
                if (error)
                    return "addedUsers." + error;
            }
        }
        if (message.droppedUserIds != null && message.hasOwnProperty("droppedUserIds")) {
            if (!Array.isArray(message.droppedUserIds))
                return "droppedUserIds: array expected";
            for (var i = 0; i < message.droppedUserIds.length; ++i)
                if (!$util.isInteger(message.droppedUserIds[i]))
                    return "droppedUserIds: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a UserList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserList} UserList
     */
    UserList.fromObject = function fromObject(object) {
        if (object instanceof $root.UserList)
            return object;
        var message = new $root.UserList();
        if (object.addedUsers) {
            if (!Array.isArray(object.addedUsers))
                throw TypeError(".UserList.addedUsers: array expected");
            message.addedUsers = [];
            for (var i = 0; i < object.addedUsers.length; ++i) {
                if (typeof object.addedUsers[i] !== "object")
                    throw TypeError(".UserList.addedUsers: object expected");
                message.addedUsers[i] = $root.UserInfo.fromObject(object.addedUsers[i]);
            }
        }
        if (object.droppedUserIds) {
            if (!Array.isArray(object.droppedUserIds))
                throw TypeError(".UserList.droppedUserIds: array expected");
            message.droppedUserIds = [];
            for (var i = 0; i < object.droppedUserIds.length; ++i)
                message.droppedUserIds[i] = object.droppedUserIds[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a UserList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserList
     * @static
     * @param {UserList} message UserList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.addedUsers = [];
            object.droppedUserIds = [];
        }
        if (message.addedUsers && message.addedUsers.length) {
            object.addedUsers = [];
            for (var j = 0; j < message.addedUsers.length; ++j)
                object.addedUsers[j] = $root.UserInfo.toObject(message.addedUsers[j], options);
        }
        if (message.droppedUserIds && message.droppedUserIds.length) {
            object.droppedUserIds = [];
            for (var j = 0; j < message.droppedUserIds.length; ++j)
                object.droppedUserIds[j] = message.droppedUserIds[j];
        }
        return object;
    };

    /**
     * Converts this UserList to JSON.
     * @function toJSON
     * @memberof UserList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserList;
})();

$root.UserInfo = (function() {

    /**
     * Properties of a UserInfo.
     * @exports IUserInfo
     * @interface IUserInfo
     * @property {number|null} [id] UserInfo id
     * @property {string|null} [name] UserInfo name
     */

    /**
     * Constructs a new UserInfo.
     * @exports UserInfo
     * @classdesc Represents a UserInfo.
     * @implements IUserInfo
     * @constructor
     * @param {IUserInfo=} [properties] Properties to set
     */
    function UserInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserInfo id.
     * @member {number} id
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.id = 0;

    /**
     * UserInfo name.
     * @member {string} name
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.name = "";

    /**
     * Creates a new UserInfo instance using the specified properties.
     * @function create
     * @memberof UserInfo
     * @static
     * @param {IUserInfo=} [properties] Properties to set
     * @returns {UserInfo} UserInfo instance
     */
    UserInfo.create = function create(properties) {
        return new UserInfo(properties);
    };

    /**
     * Encodes the specified UserInfo message. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @function encode
     * @memberof UserInfo
     * @static
     * @param {IUserInfo} message UserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserInfo
     * @static
     * @param {IUserInfo} message UserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof UserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserInfo} UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserInfo} UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserInfo message.
     * @function verify
     * @memberof UserInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserInfo} UserInfo
     */
    UserInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.UserInfo)
            return object;
        var message = new $root.UserInfo();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserInfo
     * @static
     * @param {UserInfo} message UserInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.name = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this UserInfo to JSON.
     * @function toJSON
     * @memberof UserInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserInfo;
})();

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
     * @property {string|null} [id] RoomInfo id
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
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomInfo id.
     * @member {string} id
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.id = "";

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
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
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
                message.id = reader.string();
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
            if (!$util.isString(message.id))
                return "id: string expected";
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
            message.id = String(object.id);
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
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
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

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {number|null} [senderId] Message senderId
     * @property {string|null} [text] Message text
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message senderId.
     * @member {number} senderId
     * @memberof Message
     * @instance
     */
    Message.prototype.senderId = 0;

    /**
     * Message text.
     * @member {string} text
     * @memberof Message
     * @instance
     */
    Message.prototype.text = "";

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.senderId);
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.senderId = reader.int32();
                break;
            case 2:
                message.text = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            if (!$util.isInteger(message.senderId))
                return "senderId: integer expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        var message = new $root.Message();
        if (object.senderId != null)
            message.senderId = object.senderId | 0;
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.senderId = 0;
            object.text = "";
        }
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            object.senderId = message.senderId;
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Message;
})();

module.exports = $root;

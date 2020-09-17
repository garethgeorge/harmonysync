/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ServerSyncService = (function() {

    /**
     * Constructs a new ServerSyncService service.
     * @exports ServerSyncService
     * @classdesc Represents a ServerSyncService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function ServerSyncService(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (ServerSyncService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ServerSyncService;

    /**
     * Creates new ServerSyncService service using the specified rpc implementation.
     * @function create
     * @memberof ServerSyncService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {ServerSyncService} RPC service. Useful where requests and/or responses are streamed.
     */
    ServerSyncService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link ServerSyncService#setSyncState}.
     * @memberof ServerSyncService
     * @typedef setSyncStateCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {SetSyncStateResp} [response] SetSyncStateResp
     */

    /**
     * Calls setSyncState.
     * @function setSyncState
     * @memberof ServerSyncService
     * @instance
     * @param {ISetSyncStateReq} request SetSyncStateReq message or plain object
     * @param {ServerSyncService.setSyncStateCallback} callback Node-style callback called with the error, if any, and SetSyncStateResp
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ServerSyncService.prototype.setSyncState = function setSyncState(request, callback) {
        return this.rpcCall(setSyncState, $root.SetSyncStateReq, $root.SetSyncStateResp, request, callback);
    }, "name", { value: "setSyncState" });

    /**
     * Calls setSyncState.
     * @function setSyncState
     * @memberof ServerSyncService
     * @instance
     * @param {ISetSyncStateReq} request SetSyncStateReq message or plain object
     * @returns {Promise<SetSyncStateResp>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ServerSyncService#requestResync}.
     * @memberof ServerSyncService
     * @typedef requestResyncCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Empty} [response] Empty
     */

    /**
     * Calls requestResync.
     * @function requestResync
     * @memberof ServerSyncService
     * @instance
     * @param {IRequestResyncReq} request RequestResyncReq message or plain object
     * @param {ServerSyncService.requestResyncCallback} callback Node-style callback called with the error, if any, and Empty
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ServerSyncService.prototype.requestResync = function requestResync(request, callback) {
        return this.rpcCall(requestResync, $root.RequestResyncReq, $root.Empty, request, callback);
    }, "name", { value: "requestResync" });

    /**
     * Calls requestResync.
     * @function requestResync
     * @memberof ServerSyncService
     * @instance
     * @param {IRequestResyncReq} request RequestResyncReq message or plain object
     * @returns {Promise<Empty>} Promise
     * @variation 2
     */

    return ServerSyncService;
})();

$root.ClientSyncService = (function() {

    /**
     * Constructs a new ClientSyncService service.
     * @exports ClientSyncService
     * @classdesc Represents a ClientSyncService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function ClientSyncService(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (ClientSyncService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ClientSyncService;

    /**
     * Creates new ClientSyncService service using the specified rpc implementation.
     * @function create
     * @memberof ClientSyncService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {ClientSyncService} RPC service. Useful where requests and/or responses are streamed.
     */
    ClientSyncService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link ClientSyncService#setSyncState}.
     * @memberof ClientSyncService
     * @typedef setSyncStateCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Empty} [response] Empty
     */

    /**
     * Calls setSyncState.
     * @function setSyncState
     * @memberof ClientSyncService
     * @instance
     * @param {ISyncState} request SyncState message or plain object
     * @param {ClientSyncService.setSyncStateCallback} callback Node-style callback called with the error, if any, and Empty
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ClientSyncService.prototype.setSyncState = function setSyncState(request, callback) {
        return this.rpcCall(setSyncState, $root.SyncState, $root.Empty, request, callback);
    }, "name", { value: "setSyncState" });

    /**
     * Calls setSyncState.
     * @function setSyncState
     * @memberof ClientSyncService
     * @instance
     * @param {ISyncState} request SyncState message or plain object
     * @returns {Promise<Empty>} Promise
     * @variation 2
     */

    return ClientSyncService;
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

$root.SyncState = (function() {

    /**
     * Properties of a SyncState.
     * @exports ISyncState
     * @interface ISyncState
     * @property {number|null} [seqNo] SyncState seqNo
     * @property {boolean|null} [playing] SyncState playing
     * @property {number|null} [lastSyncTime] SyncState lastSyncTime
     * @property {number|null} [lastSyncPosition] SyncState lastSyncPosition
     */

    /**
     * Constructs a new SyncState.
     * @exports SyncState
     * @classdesc Represents a SyncState.
     * @implements ISyncState
     * @constructor
     * @param {ISyncState=} [properties] Properties to set
     */
    function SyncState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SyncState seqNo.
     * @member {number} seqNo
     * @memberof SyncState
     * @instance
     */
    SyncState.prototype.seqNo = 0;

    /**
     * SyncState playing.
     * @member {boolean} playing
     * @memberof SyncState
     * @instance
     */
    SyncState.prototype.playing = false;

    /**
     * SyncState lastSyncTime.
     * @member {number} lastSyncTime
     * @memberof SyncState
     * @instance
     */
    SyncState.prototype.lastSyncTime = 0;

    /**
     * SyncState lastSyncPosition.
     * @member {number} lastSyncPosition
     * @memberof SyncState
     * @instance
     */
    SyncState.prototype.lastSyncPosition = 0;

    /**
     * Creates a new SyncState instance using the specified properties.
     * @function create
     * @memberof SyncState
     * @static
     * @param {ISyncState=} [properties] Properties to set
     * @returns {SyncState} SyncState instance
     */
    SyncState.create = function create(properties) {
        return new SyncState(properties);
    };

    /**
     * Encodes the specified SyncState message. Does not implicitly {@link SyncState.verify|verify} messages.
     * @function encode
     * @memberof SyncState
     * @static
     * @param {ISyncState} message SyncState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SyncState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.seqNo != null && Object.hasOwnProperty.call(message, "seqNo"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seqNo);
        if (message.playing != null && Object.hasOwnProperty.call(message, "playing"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.playing);
        if (message.lastSyncTime != null && Object.hasOwnProperty.call(message, "lastSyncTime"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.lastSyncTime);
        if (message.lastSyncPosition != null && Object.hasOwnProperty.call(message, "lastSyncPosition"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.lastSyncPosition);
        return writer;
    };

    /**
     * Encodes the specified SyncState message, length delimited. Does not implicitly {@link SyncState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SyncState
     * @static
     * @param {ISyncState} message SyncState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SyncState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SyncState message from the specified reader or buffer.
     * @function decode
     * @memberof SyncState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SyncState} SyncState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SyncState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.seqNo = reader.int32();
                break;
            case 2:
                message.playing = reader.bool();
                break;
            case 3:
                message.lastSyncTime = reader.int64();
                break;
            case 4:
                message.lastSyncPosition = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SyncState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SyncState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SyncState} SyncState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SyncState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SyncState message.
     * @function verify
     * @memberof SyncState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SyncState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.seqNo != null && message.hasOwnProperty("seqNo"))
            if (!$util.isInteger(message.seqNo))
                return "seqNo: integer expected";
        if (message.playing != null && message.hasOwnProperty("playing"))
            if (typeof message.playing !== "boolean")
                return "playing: boolean expected";
        if (message.lastSyncTime != null && message.hasOwnProperty("lastSyncTime"))
            if (!$util.isInteger(message.lastSyncTime) && !(message.lastSyncTime && $util.isInteger(message.lastSyncTime.low) && $util.isInteger(message.lastSyncTime.high)))
                return "lastSyncTime: integer|Long expected";
        if (message.lastSyncPosition != null && message.hasOwnProperty("lastSyncPosition"))
            if (typeof message.lastSyncPosition !== "number")
                return "lastSyncPosition: number expected";
        return null;
    };

    /**
     * Creates a SyncState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SyncState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SyncState} SyncState
     */
    SyncState.fromObject = function fromObject(object) {
        if (object instanceof $root.SyncState)
            return object;
        var message = new $root.SyncState();
        if (object.seqNo != null)
            message.seqNo = object.seqNo | 0;
        if (object.playing != null)
            message.playing = Boolean(object.playing);
        if (object.lastSyncTime != null)
            if ($util.Long)
                (message.lastSyncTime = $util.Long.fromValue(object.lastSyncTime)).unsigned = false;
            else if (typeof object.lastSyncTime === "string")
                message.lastSyncTime = parseInt(object.lastSyncTime, 10);
            else if (typeof object.lastSyncTime === "number")
                message.lastSyncTime = object.lastSyncTime;
            else if (typeof object.lastSyncTime === "object")
                message.lastSyncTime = new $util.LongBits(object.lastSyncTime.low >>> 0, object.lastSyncTime.high >>> 0).toNumber();
        if (object.lastSyncPosition != null)
            message.lastSyncPosition = Number(object.lastSyncPosition);
        return message;
    };

    /**
     * Creates a plain object from a SyncState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SyncState
     * @static
     * @param {SyncState} message SyncState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SyncState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.seqNo = 0;
            object.playing = false;
            object.lastSyncTime = 0;
            object.lastSyncPosition = 0;
        }
        if (message.seqNo != null && message.hasOwnProperty("seqNo"))
            object.seqNo = message.seqNo;
        if (message.playing != null && message.hasOwnProperty("playing"))
            object.playing = message.playing;
        if (message.lastSyncTime != null && message.hasOwnProperty("lastSyncTime"))
            if (typeof message.lastSyncTime === "number")
                object.lastSyncTime = options.longs === String ? String(message.lastSyncTime) : message.lastSyncTime;
            else
                object.lastSyncTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastSyncTime) : options.longs === Number ? new $util.LongBits(message.lastSyncTime.low >>> 0, message.lastSyncTime.high >>> 0).toNumber() : message.lastSyncTime;
        if (message.lastSyncPosition != null && message.hasOwnProperty("lastSyncPosition"))
            object.lastSyncPosition = options.json && !isFinite(message.lastSyncPosition) ? String(message.lastSyncPosition) : message.lastSyncPosition;
        return object;
    };

    /**
     * Converts this SyncState to JSON.
     * @function toJSON
     * @memberof SyncState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SyncState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SyncState;
})();

$root.SetSyncStateReq = (function() {

    /**
     * Properties of a SetSyncStateReq.
     * @exports ISetSyncStateReq
     * @interface ISetSyncStateReq
     * @property {ISyncState|null} [newSyncState] SetSyncStateReq newSyncState
     */

    /**
     * Constructs a new SetSyncStateReq.
     * @exports SetSyncStateReq
     * @classdesc Represents a SetSyncStateReq.
     * @implements ISetSyncStateReq
     * @constructor
     * @param {ISetSyncStateReq=} [properties] Properties to set
     */
    function SetSyncStateReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetSyncStateReq newSyncState.
     * @member {ISyncState|null|undefined} newSyncState
     * @memberof SetSyncStateReq
     * @instance
     */
    SetSyncStateReq.prototype.newSyncState = null;

    /**
     * Creates a new SetSyncStateReq instance using the specified properties.
     * @function create
     * @memberof SetSyncStateReq
     * @static
     * @param {ISetSyncStateReq=} [properties] Properties to set
     * @returns {SetSyncStateReq} SetSyncStateReq instance
     */
    SetSyncStateReq.create = function create(properties) {
        return new SetSyncStateReq(properties);
    };

    /**
     * Encodes the specified SetSyncStateReq message. Does not implicitly {@link SetSyncStateReq.verify|verify} messages.
     * @function encode
     * @memberof SetSyncStateReq
     * @static
     * @param {ISetSyncStateReq} message SetSyncStateReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetSyncStateReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.newSyncState != null && Object.hasOwnProperty.call(message, "newSyncState"))
            $root.SyncState.encode(message.newSyncState, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SetSyncStateReq message, length delimited. Does not implicitly {@link SetSyncStateReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetSyncStateReq
     * @static
     * @param {ISetSyncStateReq} message SetSyncStateReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetSyncStateReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetSyncStateReq message from the specified reader or buffer.
     * @function decode
     * @memberof SetSyncStateReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetSyncStateReq} SetSyncStateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetSyncStateReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetSyncStateReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.newSyncState = $root.SyncState.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetSyncStateReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetSyncStateReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetSyncStateReq} SetSyncStateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetSyncStateReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetSyncStateReq message.
     * @function verify
     * @memberof SetSyncStateReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetSyncStateReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.newSyncState != null && message.hasOwnProperty("newSyncState")) {
            var error = $root.SyncState.verify(message.newSyncState);
            if (error)
                return "newSyncState." + error;
        }
        return null;
    };

    /**
     * Creates a SetSyncStateReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetSyncStateReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetSyncStateReq} SetSyncStateReq
     */
    SetSyncStateReq.fromObject = function fromObject(object) {
        if (object instanceof $root.SetSyncStateReq)
            return object;
        var message = new $root.SetSyncStateReq();
        if (object.newSyncState != null) {
            if (typeof object.newSyncState !== "object")
                throw TypeError(".SetSyncStateReq.newSyncState: object expected");
            message.newSyncState = $root.SyncState.fromObject(object.newSyncState);
        }
        return message;
    };

    /**
     * Creates a plain object from a SetSyncStateReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetSyncStateReq
     * @static
     * @param {SetSyncStateReq} message SetSyncStateReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetSyncStateReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.newSyncState = null;
        if (message.newSyncState != null && message.hasOwnProperty("newSyncState"))
            object.newSyncState = $root.SyncState.toObject(message.newSyncState, options);
        return object;
    };

    /**
     * Converts this SetSyncStateReq to JSON.
     * @function toJSON
     * @memberof SetSyncStateReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetSyncStateReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetSyncStateReq;
})();

$root.SetSyncStateResp = (function() {

    /**
     * Properties of a SetSyncStateResp.
     * @exports ISetSyncStateResp
     * @interface ISetSyncStateResp
     * @property {SetSyncStateResp.Status|null} [status] SetSyncStateResp status
     */

    /**
     * Constructs a new SetSyncStateResp.
     * @exports SetSyncStateResp
     * @classdesc Represents a SetSyncStateResp.
     * @implements ISetSyncStateResp
     * @constructor
     * @param {ISetSyncStateResp=} [properties] Properties to set
     */
    function SetSyncStateResp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetSyncStateResp status.
     * @member {SetSyncStateResp.Status} status
     * @memberof SetSyncStateResp
     * @instance
     */
    SetSyncStateResp.prototype.status = 0;

    /**
     * Creates a new SetSyncStateResp instance using the specified properties.
     * @function create
     * @memberof SetSyncStateResp
     * @static
     * @param {ISetSyncStateResp=} [properties] Properties to set
     * @returns {SetSyncStateResp} SetSyncStateResp instance
     */
    SetSyncStateResp.create = function create(properties) {
        return new SetSyncStateResp(properties);
    };

    /**
     * Encodes the specified SetSyncStateResp message. Does not implicitly {@link SetSyncStateResp.verify|verify} messages.
     * @function encode
     * @memberof SetSyncStateResp
     * @static
     * @param {ISetSyncStateResp} message SetSyncStateResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetSyncStateResp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
        return writer;
    };

    /**
     * Encodes the specified SetSyncStateResp message, length delimited. Does not implicitly {@link SetSyncStateResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetSyncStateResp
     * @static
     * @param {ISetSyncStateResp} message SetSyncStateResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetSyncStateResp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetSyncStateResp message from the specified reader or buffer.
     * @function decode
     * @memberof SetSyncStateResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetSyncStateResp} SetSyncStateResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetSyncStateResp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetSyncStateResp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.status = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetSyncStateResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetSyncStateResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetSyncStateResp} SetSyncStateResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetSyncStateResp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetSyncStateResp message.
     * @function verify
     * @memberof SetSyncStateResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetSyncStateResp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            switch (message.status) {
            default:
                return "status: enum value expected";
            case 0:
            case 1:
                break;
            }
        return null;
    };

    /**
     * Creates a SetSyncStateResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetSyncStateResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetSyncStateResp} SetSyncStateResp
     */
    SetSyncStateResp.fromObject = function fromObject(object) {
        if (object instanceof $root.SetSyncStateResp)
            return object;
        var message = new $root.SetSyncStateResp();
        switch (object.status) {
        case "REJECT":
        case 0:
            message.status = 0;
            break;
        case "ACCEPT":
        case 1:
            message.status = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a SetSyncStateResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetSyncStateResp
     * @static
     * @param {SetSyncStateResp} message SetSyncStateResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetSyncStateResp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = options.enums === String ? "REJECT" : 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = options.enums === String ? $root.SetSyncStateResp.Status[message.status] : message.status;
        return object;
    };

    /**
     * Converts this SetSyncStateResp to JSON.
     * @function toJSON
     * @memberof SetSyncStateResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetSyncStateResp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Status enum.
     * @name SetSyncStateResp.Status
     * @enum {number}
     * @property {number} REJECT=0 REJECT value
     * @property {number} ACCEPT=1 ACCEPT value
     */
    SetSyncStateResp.Status = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "REJECT"] = 0;
        values[valuesById[1] = "ACCEPT"] = 1;
        return values;
    })();

    return SetSyncStateResp;
})();

$root.RequestResyncReq = (function() {

    /**
     * Properties of a RequestResyncReq.
     * @exports IRequestResyncReq
     * @interface IRequestResyncReq
     * @property {number|null} [clientLatestSeqNo] RequestResyncReq clientLatestSeqNo
     */

    /**
     * Constructs a new RequestResyncReq.
     * @exports RequestResyncReq
     * @classdesc Represents a RequestResyncReq.
     * @implements IRequestResyncReq
     * @constructor
     * @param {IRequestResyncReq=} [properties] Properties to set
     */
    function RequestResyncReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestResyncReq clientLatestSeqNo.
     * @member {number} clientLatestSeqNo
     * @memberof RequestResyncReq
     * @instance
     */
    RequestResyncReq.prototype.clientLatestSeqNo = 0;

    /**
     * Creates a new RequestResyncReq instance using the specified properties.
     * @function create
     * @memberof RequestResyncReq
     * @static
     * @param {IRequestResyncReq=} [properties] Properties to set
     * @returns {RequestResyncReq} RequestResyncReq instance
     */
    RequestResyncReq.create = function create(properties) {
        return new RequestResyncReq(properties);
    };

    /**
     * Encodes the specified RequestResyncReq message. Does not implicitly {@link RequestResyncReq.verify|verify} messages.
     * @function encode
     * @memberof RequestResyncReq
     * @static
     * @param {IRequestResyncReq} message RequestResyncReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestResyncReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.clientLatestSeqNo != null && Object.hasOwnProperty.call(message, "clientLatestSeqNo"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.clientLatestSeqNo);
        return writer;
    };

    /**
     * Encodes the specified RequestResyncReq message, length delimited. Does not implicitly {@link RequestResyncReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestResyncReq
     * @static
     * @param {IRequestResyncReq} message RequestResyncReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestResyncReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestResyncReq message from the specified reader or buffer.
     * @function decode
     * @memberof RequestResyncReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestResyncReq} RequestResyncReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestResyncReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestResyncReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.clientLatestSeqNo = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestResyncReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestResyncReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestResyncReq} RequestResyncReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestResyncReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestResyncReq message.
     * @function verify
     * @memberof RequestResyncReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestResyncReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.clientLatestSeqNo != null && message.hasOwnProperty("clientLatestSeqNo"))
            if (!$util.isInteger(message.clientLatestSeqNo))
                return "clientLatestSeqNo: integer expected";
        return null;
    };

    /**
     * Creates a RequestResyncReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestResyncReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestResyncReq} RequestResyncReq
     */
    RequestResyncReq.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestResyncReq)
            return object;
        var message = new $root.RequestResyncReq();
        if (object.clientLatestSeqNo != null)
            message.clientLatestSeqNo = object.clientLatestSeqNo | 0;
        return message;
    };

    /**
     * Creates a plain object from a RequestResyncReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestResyncReq
     * @static
     * @param {RequestResyncReq} message RequestResyncReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestResyncReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.clientLatestSeqNo = 0;
        if (message.clientLatestSeqNo != null && message.hasOwnProperty("clientLatestSeqNo"))
            object.clientLatestSeqNo = message.clientLatestSeqNo;
        return object;
    };

    /**
     * Converts this RequestResyncReq to JSON.
     * @function toJSON
     * @memberof RequestResyncReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestResyncReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RequestResyncReq;
})();

module.exports = $root;

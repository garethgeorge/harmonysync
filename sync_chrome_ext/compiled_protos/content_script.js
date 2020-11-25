/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ContentScript = (function() {

    /**
     * Constructs a new ContentScript service.
     * @exports ContentScript
     * @classdesc Represents a ContentScript
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function ContentScript(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (ContentScript.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ContentScript;

    /**
     * Creates new ContentScript service using the specified rpc implementation.
     * @function create
     * @memberof ContentScript
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {ContentScript} RPC service. Useful where requests and/or responses are streamed.
     */
    ContentScript.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link ContentScript#getStatus}.
     * @memberof ContentScript
     * @typedef getStatusCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Status} [response] Status
     */

    /**
     * Calls getStatus.
     * @function getStatus
     * @memberof ContentScript
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {ContentScript.getStatusCallback} callback Node-style callback called with the error, if any, and Status
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ContentScript.prototype.getStatus = function getStatus(request, callback) {
        return this.rpcCall(getStatus, $root.Empty, $root.Status, request, callback);
    }, "name", { value: "getStatus" });

    /**
     * Calls getStatus.
     * @function getStatus
     * @memberof ContentScript
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<Status>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ContentScript#joinedRoom}.
     * @memberof ContentScript
     * @typedef joinedRoomCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Empty} [response] Empty
     */

    /**
     * Calls joinedRoom.
     * @function joinedRoom
     * @memberof ContentScript
     * @instance
     * @param {IStatus} request Status message or plain object
     * @param {ContentScript.joinedRoomCallback} callback Node-style callback called with the error, if any, and Empty
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ContentScript.prototype.joinedRoom = function joinedRoom(request, callback) {
        return this.rpcCall(joinedRoom, $root.Status, $root.Empty, request, callback);
    }, "name", { value: "joinedRoom" });

    /**
     * Calls joinedRoom.
     * @function joinedRoom
     * @memberof ContentScript
     * @instance
     * @param {IStatus} request Status message or plain object
     * @returns {Promise<Empty>} Promise
     * @variation 2
     */

    return ContentScript;
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

$root.Status = (function() {

    /**
     * Properties of a Status.
     * @exports IStatus
     * @interface IStatus
     * @property {Status.State|null} [state] Status state
     * @property {string|null} [roomId] Status roomId
     */

    /**
     * Constructs a new Status.
     * @exports Status
     * @classdesc Represents a Status.
     * @implements IStatus
     * @constructor
     * @param {IStatus=} [properties] Properties to set
     */
    function Status(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Status state.
     * @member {Status.State} state
     * @memberof Status
     * @instance
     */
    Status.prototype.state = 0;

    /**
     * Status roomId.
     * @member {string} roomId
     * @memberof Status
     * @instance
     */
    Status.prototype.roomId = "";

    /**
     * Creates a new Status instance using the specified properties.
     * @function create
     * @memberof Status
     * @static
     * @param {IStatus=} [properties] Properties to set
     * @returns {Status} Status instance
     */
    Status.create = function create(properties) {
        return new Status(properties);
    };

    /**
     * Encodes the specified Status message. Does not implicitly {@link Status.verify|verify} messages.
     * @function encode
     * @memberof Status
     * @static
     * @param {IStatus} message Status message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Status.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified Status message, length delimited. Does not implicitly {@link Status.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Status
     * @static
     * @param {IStatus} message Status message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Status.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Status message from the specified reader or buffer.
     * @function decode
     * @memberof Status
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Status} Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Status.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Status();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.state = reader.int32();
                break;
            case 2:
                message.roomId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Status message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Status
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Status} Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Status.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Status message.
     * @function verify
     * @memberof Status
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Status.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
            default:
                return "state: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isString(message.roomId))
                return "roomId: string expected";
        return null;
    };

    /**
     * Creates a Status message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Status
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Status} Status
     */
    Status.fromObject = function fromObject(object) {
        if (object instanceof $root.Status)
            return object;
        var message = new $root.Status();
        switch (object.state) {
        case "NOT_INJECTED":
        case 0:
            message.state = 0;
            break;
        case "INJECTED":
        case 1:
            message.state = 1;
            break;
        case "INJECTION_FAILED":
        case 2:
            message.state = 2;
            break;
        }
        if (object.roomId != null)
            message.roomId = String(object.roomId);
        return message;
    };

    /**
     * Creates a plain object from a Status message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Status
     * @static
     * @param {Status} message Status
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Status.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.state = options.enums === String ? "NOT_INJECTED" : 0;
            object.roomId = "";
        }
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = options.enums === String ? $root.Status.State[message.state] : message.state;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            object.roomId = message.roomId;
        return object;
    };

    /**
     * Converts this Status to JSON.
     * @function toJSON
     * @memberof Status
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Status.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * State enum.
     * @name Status.State
     * @enum {number}
     * @property {number} NOT_INJECTED=0 NOT_INJECTED value
     * @property {number} INJECTED=1 INJECTED value
     * @property {number} INJECTION_FAILED=2 INJECTION_FAILED value
     */
    Status.State = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NOT_INJECTED"] = 0;
        values[valuesById[1] = "INJECTED"] = 1;
        values[valuesById[2] = "INJECTION_FAILED"] = 2;
        return values;
    })();

    return Status;
})();

module.exports = $root;

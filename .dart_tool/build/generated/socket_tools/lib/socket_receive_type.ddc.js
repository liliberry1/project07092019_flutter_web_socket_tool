define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const socket_receive_type = Object.create(dart.library);
  const _name$ = dart.privateName(socket_receive_type, "_name");
  socket_receive_type.SocketReceiveType = class SocketReceiveType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (socket_receive_type.SocketReceiveType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = socket_receive_type.SocketReceiveType.prototype;
  dart.addTypeTests(socket_receive_type.SocketReceiveType);
  dart.setLibraryUri(socket_receive_type.SocketReceiveType, "package:socket_tools/socket_receive_type.dart");
  dart.setFieldSignature(socket_receive_type.SocketReceiveType, () => ({
    __proto__: dart.getFields(socket_receive_type.SocketReceiveType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(socket_receive_type.SocketReceiveType, ['toString']);
  socket_receive_type.SocketReceiveType.CONNECT = dart.const(new socket_receive_type.SocketReceiveType.new(0, "SocketReceiveType.CONNECT"));
  socket_receive_type.SocketReceiveType.RECONNECT = dart.const(new socket_receive_type.SocketReceiveType.new(1, "SocketReceiveType.RECONNECT"));
  socket_receive_type.SocketReceiveType.ONLINE = dart.const(new socket_receive_type.SocketReceiveType.new(2, "SocketReceiveType.ONLINE"));
  socket_receive_type.SocketReceiveType.OUT_ROOM = dart.const(new socket_receive_type.SocketReceiveType.new(3, "SocketReceiveType.OUT_ROOM"));
  socket_receive_type.SocketReceiveType.INVITE = dart.const(new socket_receive_type.SocketReceiveType.new(4, "SocketReceiveType.INVITE"));
  socket_receive_type.SocketReceiveType.ANSWER_INVITE = dart.const(new socket_receive_type.SocketReceiveType.new(5, "SocketReceiveType.ANSWER_INVITE"));
  socket_receive_type.SocketReceiveType.START_GAME = dart.const(new socket_receive_type.SocketReceiveType.new(6, "SocketReceiveType.START_GAME"));
  socket_receive_type.SocketReceiveType.ROOM_INFO = dart.const(new socket_receive_type.SocketReceiveType.new(7, "SocketReceiveType.ROOM_INFO"));
  socket_receive_type.SocketReceiveType.ROOM_NOTI = dart.const(new socket_receive_type.SocketReceiveType.new(8, "SocketReceiveType.ROOM_NOTI"));
  socket_receive_type.SocketReceiveType.GET_LIST_ROOM = dart.const(new socket_receive_type.SocketReceiveType.new(9, "SocketReceiveType.GET_LIST_ROOM"));
  socket_receive_type.SocketReceiveType.LIST_PLAYER = dart.const(new socket_receive_type.SocketReceiveType.new(10, "SocketReceiveType.LIST_PLAYER"));
  socket_receive_type.SocketReceiveType.GET_QUESTION_PACKAGE = dart.const(new socket_receive_type.SocketReceiveType.new(11, "SocketReceiveType.GET_QUESTION_PACKAGE"));
  socket_receive_type.SocketReceiveType.ERROR = dart.const(new socket_receive_type.SocketReceiveType.new(12, "SocketReceiveType.ERROR"));
  socket_receive_type.SocketReceiveType.values = dart.constList([socket_receive_type.SocketReceiveType.CONNECT, socket_receive_type.SocketReceiveType.RECONNECT, socket_receive_type.SocketReceiveType.ONLINE, socket_receive_type.SocketReceiveType.OUT_ROOM, socket_receive_type.SocketReceiveType.INVITE, socket_receive_type.SocketReceiveType.ANSWER_INVITE, socket_receive_type.SocketReceiveType.START_GAME, socket_receive_type.SocketReceiveType.ROOM_INFO, socket_receive_type.SocketReceiveType.ROOM_NOTI, socket_receive_type.SocketReceiveType.GET_LIST_ROOM, socket_receive_type.SocketReceiveType.LIST_PLAYER, socket_receive_type.SocketReceiveType.GET_QUESTION_PACKAGE, socket_receive_type.SocketReceiveType.ERROR], socket_receive_type.SocketReceiveType);
  socket_receive_type.parseToSocketReceiveType = function(opts) {
    let type = opts && 'type' in opts ? opts.type : null;
    switch (type) {
      case "CONNECT":
      {
        return socket_receive_type.SocketReceiveType.CONNECT;
      }
      case "RECONNECT":
      {
        return socket_receive_type.SocketReceiveType.CONNECT;
      }
      case "ONLINE":
      {
        return socket_receive_type.SocketReceiveType.ONLINE;
      }
      case "OUT_ROOM":
      {
        return socket_receive_type.SocketReceiveType.OUT_ROOM;
      }
      case "INVITE":
      {
        return socket_receive_type.SocketReceiveType.INVITE;
      }
      case "ANSWER_INVITE":
      {
        return socket_receive_type.SocketReceiveType.ANSWER_INVITE;
      }
      case "START_GAME":
      {
        return socket_receive_type.SocketReceiveType.START_GAME;
      }
      case "ROOM_INFO":
      {
        return socket_receive_type.SocketReceiveType.ROOM_INFO;
      }
      case "ROOM_NOTI":
      {
        return socket_receive_type.SocketReceiveType.ROOM_NOTI;
      }
      case "ERROR":
      {
        return socket_receive_type.SocketReceiveType.ERROR;
      }
      case "GET_LIST_ROOM":
      {
        return socket_receive_type.SocketReceiveType.GET_LIST_ROOM;
      }
      case "LIST_PLAYER":
      {
        return socket_receive_type.SocketReceiveType.LIST_PLAYER;
      }
      case "GET_QUESTION_PACKAGE":
      {
        return socket_receive_type.SocketReceiveType.GET_QUESTION_PACKAGE;
      }
    }
  };
  dart.trackLibraries("packages/socket_tools/socket_receive_type", {
    "package:socket_tools/socket_receive_type.dart": socket_receive_type
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/socket_tools/socket_receive_type.dart"],"names":[],"mappings":";;;;;;;;;;IAcA;;+DAdK;;;;EAcL;;;;;;;;;;;;;;;;;;;;;;;;QAEmD;AACjD,YAAQ,IAAI;UACL;;AACH,cAAyB;;UACtB;;AACH,cAAyB;;UACtB;;AACH,cAAyB;;UACtB;;AACH,cAAyB;;UACtB;;AACH,cAAyB;;UACtB;;AACH,cAAyB;;UACtB;;AACH,cAAyB;;UACtB;;AACH,cAAyB;;UACtB;;AACH,cAAyB;;UACtB;;AACH,cAAyB;;UACtB;;AACH,cAAyB;;UACtB;;AACH,cAAyB;;UACtB;;AACH,cAAyB;;;EAE/B","file":"socket_receive_type.ddc.js"}');
  // Exports:
  return {
    socket_receive_type: socket_receive_type
  };
});

//# sourceMappingURL=socket_receive_type.ddc.js.map

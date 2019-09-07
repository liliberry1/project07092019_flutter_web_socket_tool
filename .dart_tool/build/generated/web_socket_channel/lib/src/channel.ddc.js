define(['dart_sdk', 'packages/crypto/crypto', 'packages/stream_channel/stream_channel', 'packages/async/async'], function(dart_sdk, crypto, stream_channel, async) {
  'use strict';
  const core = dart_sdk.core;
  const async$ = dart_sdk.async;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__sha1 = crypto.src__sha1;
  const stream_channel$ = stream_channel.stream_channel;
  const src__delegate__stream_sink = async.src__delegate__stream_sink;
  const src__copy__io_sink = Object.create(dart.library);
  const src__copy__bytes_builder = Object.create(dart.library);
  const src__channel = Object.create(dart.library);
  const src__copy__web_socket_impl = Object.create(dart.library);
  const src__copy__web_socket = Object.create(dart.library);
  const src__exception = Object.create(dart.library);
  const $length = dartx.length;
  const $setRange = dartx.setRange;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $buffer = dartx.buffer;
  const $rightShift = dartx['>>'];
  const $add = dartx.add;
  const $clear = dartx.clear;
  const $codeUnits = dartx.codeUnits;
  const $truncate = dartx.truncate;
  const $isNotEmpty = dartx.isNotEmpty;
  const $sublist = dartx.sublist;
  const $addAll = dartx.addAll;
  const $forEach = dartx.forEach;
  const $remove = dartx.remove;
  const $toString = dartx.toString;
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async$.Future, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let JSArrayOfUint8List = () => (JSArrayOfUint8List = dart.constFn(_interceptors.JSArray$(typed_data.Uint8List)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamOfListOfint = () => (StreamOfListOfint = dart.constFn(async$.Stream$(ListOfint())))();
  let EventSinkTo_WebSocketProtocolTransformer = () => (EventSinkTo_WebSocketProtocolTransformer = dart.constFn(dart.fnType(src__copy__web_socket_impl._WebSocketProtocolTransformer, [async$.EventSink])))();
  let EventSinkOfListOfint = () => (EventSinkOfListOfint = dart.constFn(async$.EventSink$(ListOfint())))();
  let EventSinkOfListOfintTo_WebSocketOutgoingTransformer = () => (EventSinkOfListOfintTo_WebSocketOutgoingTransformer = dart.constFn(dart.fnType(src__copy__web_socket_impl._WebSocketOutgoingTransformer, [EventSinkOfListOfint()])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ListOfintToNull = () => (ListOfintToNull = dart.constFn(dart.fnType(core.Null, [ListOfint()])))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let CompleterOfWebSocketImpl = () => (CompleterOfWebSocketImpl = dart.constFn(async$.Completer$(src__copy__web_socket_impl.WebSocketImpl)))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let dynamicToWebSocketImpl = () => (dynamicToWebSocketImpl = dart.constFn(dart.fnType(src__copy__web_socket_impl.WebSocketImpl, [dart.dynamic])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async$.Future, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicToMap = () => (dynamicToMap = dart.constFn(dart.fnType(core.Map, [dart.dynamic])))();
  let LinkedMapOfint$WebSocketImpl = () => (LinkedMapOfint$WebSocketImpl = dart.constFn(_js_helper.LinkedMap$(core.int, src__copy__web_socket_impl.WebSocketImpl)))();
  const _doneCompleter = dart.privateName(src__copy__io_sink, "_doneCompleter");
  const _controllerInstance = dart.privateName(src__copy__io_sink, "_controllerInstance");
  const _controllerCompleter = dart.privateName(src__copy__io_sink, "_controllerCompleter");
  const _isClosed = dart.privateName(src__copy__io_sink, "_isClosed");
  const _isBound = dart.privateName(src__copy__io_sink, "_isBound");
  const _hasError = dart.privateName(src__copy__io_sink, "_hasError");
  const _target$ = dart.privateName(src__copy__io_sink, "_target");
  const _controller = dart.privateName(src__copy__io_sink, "_controller");
  const _closeTarget = dart.privateName(src__copy__io_sink, "_closeTarget");
  const _completeDoneValue = dart.privateName(src__copy__io_sink, "_completeDoneValue");
  const _completeDoneError = dart.privateName(src__copy__io_sink, "_completeDoneError");
  const _is_StreamSinkImpl_default = Symbol('_is_StreamSinkImpl_default');
  src__copy__io_sink.StreamSinkImpl$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async$.Stream$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async$.StreamController$(T)))();
    class StreamSinkImpl extends core.Object {
      add(data) {
        T._check(data);
        if (dart.test(this[_isClosed])) {
          return;
        }
        this[_controller].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_isClosed])) {
          return;
        }
        this[_controller].addError(error, stackTrace);
      }
      addStream(stream) {
        let t0;
        StreamOfT()._check(stream);
        if (dart.test(this[_isBound])) {
          dart.throw(new core.StateError.new("StreamSink is already bound to a stream"));
        }
        if (dart.test(this[_hasError])) return this.done;
        this[_isBound] = true;
        let future = this[_controllerCompleter] == null ? this[_target$].addStream(stream) : this[_controllerCompleter].future.then(dart.dynamic, dart.fn(_ => this[_target$].addStream(stream), dynamicToFuture()));
        t0 = this[_controllerInstance];
        t0 == null ? null : t0.close();
        return future.whenComplete(dart.fn(() => {
          this[_isBound] = false;
        }, VoidToNull()));
      }
      flush() {
        if (dart.test(this[_isBound])) {
          dart.throw(new core.StateError.new("StreamSink is bound to a stream"));
        }
        if (this[_controllerInstance] == null) return async$.Future.value(this);
        this[_isBound] = true;
        let future = this[_controllerCompleter].future;
        this[_controllerInstance].close();
        return future.whenComplete(dart.fn(() => {
          this[_isBound] = false;
        }, VoidToNull()));
      }
      close() {
        if (dart.test(this[_isBound])) {
          dart.throw(new core.StateError.new("StreamSink is bound to a stream"));
        }
        if (!dart.test(this[_isClosed])) {
          this[_isClosed] = true;
          if (this[_controllerInstance] != null) {
            this[_controllerInstance].close();
          } else {
            this[_closeTarget]();
          }
        }
        return this.done;
      }
      [_closeTarget]() {
        this[_target$].close().then(dart.void, dart.bind(this, _completeDoneValue), {onError: dart.bind(this, _completeDoneError)});
      }
      get done() {
        return this[_doneCompleter].future;
      }
      [_completeDoneValue](value) {
        if (!dart.test(this[_doneCompleter].isCompleted)) {
          this[_doneCompleter].complete(value);
        }
      }
      [_completeDoneError](error, stackTrace) {
        if (!dart.test(this[_doneCompleter].isCompleted)) {
          this[_hasError] = true;
          this[_doneCompleter].completeError(error, stackTrace);
        }
      }
      get [_controller]() {
        if (dart.test(this[_isBound])) {
          dart.throw(new core.StateError.new("StreamSink is bound to a stream"));
        }
        if (dart.test(this[_isClosed])) {
          dart.throw(new core.StateError.new("StreamSink is closed"));
        }
        if (this[_controllerInstance] == null) {
          this[_controllerInstance] = StreamControllerOfT().new({sync: true});
          this[_controllerCompleter] = async$.Completer.new();
          this[_target$].addStream(this[_controller].stream).then(dart.dynamic, dart.fn(_ => {
            if (dart.test(this[_isBound])) {
              this[_controllerCompleter].complete(this);
              this[_controllerCompleter] = null;
              this[_controllerInstance] = null;
            } else {
              this[_closeTarget]();
            }
          }, dynamicToNull()), {onError: dart.fn((error, stackTrace) => {
              if (dart.test(this[_isBound])) {
                this[_controllerCompleter].completeError(error, core.StackTrace._check(stackTrace));
                this[_controllerCompleter] = null;
                this[_controllerInstance] = null;
              } else {
                this[_completeDoneError](error, core.StackTrace._check(stackTrace));
              }
            }, dynamicAnddynamicToNull())});
        }
        return this[_controllerInstance];
      }
    }
    (StreamSinkImpl.new = function(_target) {
      this[_doneCompleter] = async$.Completer.new();
      this[_controllerInstance] = null;
      this[_controllerCompleter] = null;
      this[_isClosed] = false;
      this[_isBound] = false;
      this[_hasError] = false;
      this[_target$] = _target;
      ;
    }).prototype = StreamSinkImpl.prototype;
    dart.addTypeTests(StreamSinkImpl);
    StreamSinkImpl.prototype[_is_StreamSinkImpl_default] = true;
    StreamSinkImpl[dart.implements] = () => [async$.StreamSink$(T)];
    dart.setMethodSignature(StreamSinkImpl, () => ({
      __proto__: dart.getMethods(StreamSinkImpl.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async$.Future, [core.Object]),
      flush: dart.fnType(async$.Future, []),
      close: dart.fnType(async$.Future, []),
      [_closeTarget]: dart.fnType(dart.void, []),
      [_completeDoneValue]: dart.fnType(dart.void, [dart.dynamic]),
      [_completeDoneError]: dart.fnType(dart.void, [dart.dynamic, core.StackTrace])
    }));
    dart.setGetterSignature(StreamSinkImpl, () => ({
      __proto__: dart.getGetters(StreamSinkImpl.__proto__),
      done: async$.Future,
      [_controller]: async$.StreamController$(T)
    }));
    dart.setLibraryUri(StreamSinkImpl, "package:web_socket_channel/src/copy/io_sink.dart");
    dart.setFieldSignature(StreamSinkImpl, () => ({
      __proto__: dart.getFields(StreamSinkImpl.__proto__),
      [_target$]: dart.finalFieldType(async$.StreamConsumer$(T)),
      [_doneCompleter]: dart.finalFieldType(async$.Completer),
      [_controllerInstance]: dart.fieldType(async$.StreamController$(T)),
      [_controllerCompleter]: dart.fieldType(async$.Completer),
      [_isClosed]: dart.fieldType(core.bool),
      [_isBound]: dart.fieldType(core.bool),
      [_hasError]: dart.fieldType(core.bool)
    }));
    return StreamSinkImpl;
  });
  src__copy__io_sink.StreamSinkImpl = src__copy__io_sink.StreamSinkImpl$();
  dart.addTypeTests(src__copy__io_sink.StreamSinkImpl, _is_StreamSinkImpl_default);
  src__copy__bytes_builder.BytesBuilder = class BytesBuilder extends core.Object {
    static new(opts) {
      let copy = opts && 'copy' in opts ? opts.copy : true;
      if (dart.test(copy)) {
        return new src__copy__bytes_builder._CopyingBytesBuilder.new();
      } else {
        return new src__copy__bytes_builder._BytesBuilder.new();
      }
    }
  };
  (src__copy__bytes_builder.BytesBuilder[dart.mixinNew] = function() {
  }).prototype = src__copy__bytes_builder.BytesBuilder.prototype;
  dart.addTypeTests(src__copy__bytes_builder.BytesBuilder);
  dart.setLibraryUri(src__copy__bytes_builder.BytesBuilder, "package:web_socket_channel/src/copy/bytes_builder.dart");
  const _length = dart.privateName(src__copy__bytes_builder, "_length");
  const _buffer = dart.privateName(src__copy__bytes_builder, "_buffer");
  const _grow = dart.privateName(src__copy__bytes_builder, "_grow");
  src__copy__bytes_builder._CopyingBytesBuilder = class _CopyingBytesBuilder extends core.Object {
    add(bytes) {
      let bytesLength = bytes[$length];
      if (bytesLength === 0) return;
      let required = dart.notNull(this[_length]) + dart.notNull(bytesLength);
      if (dart.notNull(this[_buffer][$length]) < required) {
        this[_grow](required);
      }
      if (!(dart.notNull(this[_buffer][$length]) >= required)) dart.assertFailed(null, "org-dartlang-app:///packages/web_socket_channel/src/copy/bytes_builder.dart", 91, 12, "_buffer.length >= required");
      if (typed_data.Uint8List.is(bytes)) {
        this[_buffer][$setRange](this[_length], required, bytes);
      } else {
        for (let i = 0; i < dart.notNull(bytesLength); i = i + 1) {
          this[_buffer][$_set](dart.notNull(this[_length]) + i, bytes[$_get](i));
        }
      }
      this[_length] = required;
    }
    addByte(byte) {
      if (this[_buffer][$length] == this[_length]) {
        this[_grow](this[_length]);
      }
      if (!(dart.notNull(this[_buffer][$length]) > dart.notNull(this[_length]))) dart.assertFailed(null, "org-dartlang-app:///packages/web_socket_channel/src/copy/bytes_builder.dart", 108, 12, "_buffer.length > _length");
      this[_buffer][$_set](this[_length], byte);
      this[_length] = dart.notNull(this[_length]) + 1;
    }
    [_grow](required) {
      let newSize = dart.notNull(required) * 2;
      if (dart.notNull(newSize) < dart.notNull(src__copy__bytes_builder._CopyingBytesBuilder._INIT_SIZE)) {
        newSize = src__copy__bytes_builder._CopyingBytesBuilder._INIT_SIZE;
      } else {
        newSize = src__copy__bytes_builder._CopyingBytesBuilder._pow2roundup(newSize);
      }
      let newBuffer = _native_typed_data.NativeUint8List.new(newSize);
      newBuffer[$setRange](0, this[_buffer][$length], this[_buffer]);
      this[_buffer] = newBuffer;
    }
    takeBytes() {
      if (this[_length] === 0) return src__copy__bytes_builder._CopyingBytesBuilder._emptyList;
      let buffer = typed_data.Uint8List.view(this[_buffer][$buffer], 0, this[_length]);
      this.clear();
      return buffer;
    }
    toBytes() {
      if (this[_length] === 0) return src__copy__bytes_builder._CopyingBytesBuilder._emptyList;
      return _native_typed_data.NativeUint8List.fromList(typed_data.Uint8List.view(this[_buffer][$buffer], 0, this[_length]));
    }
    get length() {
      return this[_length];
    }
    get isEmpty() {
      return this[_length] === 0;
    }
    get isNotEmpty() {
      return this[_length] !== 0;
    }
    clear() {
      this[_length] = 0;
      this[_buffer] = src__copy__bytes_builder._CopyingBytesBuilder._emptyList;
    }
    static _pow2roundup(x) {
      if (!(dart.notNull(x) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/web_socket_channel/src/copy/bytes_builder.dart", 151, 12, "x > 0");
      x = dart.notNull(x) - 1;
      x = (dart.notNull(x) | x[$rightShift](1)) >>> 0;
      x = (dart.notNull(x) | x[$rightShift](2)) >>> 0;
      x = (dart.notNull(x) | x[$rightShift](4)) >>> 0;
      x = (dart.notNull(x) | x[$rightShift](8)) >>> 0;
      x = (dart.notNull(x) | x[$rightShift](16)) >>> 0;
      return dart.notNull(x) + 1;
    }
  };
  (src__copy__bytes_builder._CopyingBytesBuilder.new = function(initialCapacity) {
    if (initialCapacity === void 0) initialCapacity = 0;
    this[_length] = 0;
    this[_buffer] = dart.notNull(initialCapacity) <= 0 ? src__copy__bytes_builder._CopyingBytesBuilder._emptyList : _native_typed_data.NativeUint8List.new(src__copy__bytes_builder._CopyingBytesBuilder._pow2roundup(initialCapacity));
    ;
  }).prototype = src__copy__bytes_builder._CopyingBytesBuilder.prototype;
  dart.addTypeTests(src__copy__bytes_builder._CopyingBytesBuilder);
  src__copy__bytes_builder._CopyingBytesBuilder[dart.implements] = () => [src__copy__bytes_builder.BytesBuilder];
  dart.setMethodSignature(src__copy__bytes_builder._CopyingBytesBuilder, () => ({
    __proto__: dart.getMethods(src__copy__bytes_builder._CopyingBytesBuilder.__proto__),
    add: dart.fnType(dart.void, [core.List$(core.int)]),
    addByte: dart.fnType(dart.void, [core.int]),
    [_grow]: dart.fnType(dart.void, [core.int]),
    takeBytes: dart.fnType(typed_data.Uint8List, []),
    toBytes: dart.fnType(typed_data.Uint8List, []),
    clear: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__copy__bytes_builder._CopyingBytesBuilder, () => ({
    __proto__: dart.getGetters(src__copy__bytes_builder._CopyingBytesBuilder.__proto__),
    length: core.int,
    isEmpty: core.bool,
    isNotEmpty: core.bool
  }));
  dart.setLibraryUri(src__copy__bytes_builder._CopyingBytesBuilder, "package:web_socket_channel/src/copy/bytes_builder.dart");
  dart.setFieldSignature(src__copy__bytes_builder._CopyingBytesBuilder, () => ({
    __proto__: dart.getFields(src__copy__bytes_builder._CopyingBytesBuilder.__proto__),
    [_length]: dart.fieldType(core.int),
    [_buffer]: dart.fieldType(typed_data.Uint8List)
  }));
  dart.defineLazy(src__copy__bytes_builder._CopyingBytesBuilder, {
    /*src__copy__bytes_builder._CopyingBytesBuilder._INIT_SIZE*/get _INIT_SIZE() {
      return 1024;
    },
    /*src__copy__bytes_builder._CopyingBytesBuilder._emptyList*/get _emptyList() {
      return _native_typed_data.NativeUint8List.new(0);
    }
  });
  const _chunks = dart.privateName(src__copy__bytes_builder, "_chunks");
  src__copy__bytes_builder._BytesBuilder = class _BytesBuilder extends core.Object {
    add(bytes) {
      let typedBytes = null;
      if (typed_data.Uint8List.is(bytes)) {
        typedBytes = bytes;
      } else {
        typedBytes = _native_typed_data.NativeUint8List.fromList(bytes);
      }
      this[_chunks][$add](typedBytes);
      this[_length] = dart.notNull(this[_length]) + dart.notNull(typedBytes[$length]);
    }
    addByte(byte) {
      let t0;
      this[_chunks][$add]((t0 = _native_typed_data.NativeUint8List.new(1), t0[$_set](0, byte), t0));
      this[_length] = dart.notNull(this[_length]) + 1;
    }
    takeBytes() {
      if (this[_length] === 0) return src__copy__bytes_builder._CopyingBytesBuilder._emptyList;
      if (this[_chunks][$length] === 1) {
        let buffer = this[_chunks][$_get](0);
        this.clear();
        return buffer;
      }
      let buffer = _native_typed_data.NativeUint8List.new(this[_length]);
      let offset = 0;
      for (let chunk of this[_chunks]) {
        buffer[$setRange](offset, offset + dart.notNull(chunk[$length]), chunk);
        offset = offset + dart.notNull(chunk[$length]);
      }
      this.clear();
      return buffer;
    }
    toBytes() {
      if (this[_length] === 0) return src__copy__bytes_builder._CopyingBytesBuilder._emptyList;
      let buffer = _native_typed_data.NativeUint8List.new(this[_length]);
      let offset = 0;
      for (let chunk of this[_chunks]) {
        buffer[$setRange](offset, offset + dart.notNull(chunk[$length]), chunk);
        offset = offset + dart.notNull(chunk[$length]);
      }
      return buffer;
    }
    get length() {
      return this[_length];
    }
    get isEmpty() {
      return this[_length] === 0;
    }
    get isNotEmpty() {
      return this[_length] !== 0;
    }
    clear() {
      this[_length] = 0;
      this[_chunks][$clear]();
    }
  };
  (src__copy__bytes_builder._BytesBuilder.new = function() {
    this[_length] = 0;
    this[_chunks] = JSArrayOfUint8List().of([]);
    ;
  }).prototype = src__copy__bytes_builder._BytesBuilder.prototype;
  dart.addTypeTests(src__copy__bytes_builder._BytesBuilder);
  src__copy__bytes_builder._BytesBuilder[dart.implements] = () => [src__copy__bytes_builder.BytesBuilder];
  dart.setMethodSignature(src__copy__bytes_builder._BytesBuilder, () => ({
    __proto__: dart.getMethods(src__copy__bytes_builder._BytesBuilder.__proto__),
    add: dart.fnType(dart.void, [core.List$(core.int)]),
    addByte: dart.fnType(dart.void, [core.int]),
    takeBytes: dart.fnType(typed_data.Uint8List, []),
    toBytes: dart.fnType(typed_data.Uint8List, []),
    clear: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__copy__bytes_builder._BytesBuilder, () => ({
    __proto__: dart.getGetters(src__copy__bytes_builder._BytesBuilder.__proto__),
    length: core.int,
    isEmpty: core.bool,
    isNotEmpty: core.bool
  }));
  dart.setLibraryUri(src__copy__bytes_builder._BytesBuilder, "package:web_socket_channel/src/copy/bytes_builder.dart");
  dart.setFieldSignature(src__copy__bytes_builder._BytesBuilder, () => ({
    __proto__: dart.getFields(src__copy__bytes_builder._BytesBuilder.__proto__),
    [_length]: dart.fieldType(core.int),
    [_chunks]: dart.finalFieldType(core.List$(typed_data.Uint8List))
  }));
  const _webSocket = dart.privateName(src__channel, "_webSocket");
  src__channel.WebSocketChannel = class WebSocketChannel extends stream_channel$.StreamChannelMixin {
    get protocol() {
      return this[_webSocket].protocol;
    }
    get closeCode() {
      return this[_webSocket].closeCode;
    }
    get closeReason() {
      return this[_webSocket].closeReason;
    }
    get stream() {
      return new async$.StreamView.new(this[_webSocket]);
    }
    get sink() {
      return new src__channel.WebSocketSink.__(this[_webSocket]);
    }
    static signKey(key) {
      return convert.base64.encode(src__sha1.sha1.convert((dart.notNull(key) + dart.notNull(src__copy__web_socket_impl.webSocketGUID))[$codeUnits]).bytes);
    }
  };
  (src__channel.WebSocketChannel.new = function(channel, opts) {
    let t0;
    let protocol = opts && 'protocol' in opts ? opts.protocol : null;
    let pingInterval = opts && 'pingInterval' in opts ? opts.pingInterval : null;
    let serverSide = opts && 'serverSide' in opts ? opts.serverSide : true;
    this[_webSocket] = (t0 = new src__copy__web_socket_impl.WebSocketImpl.fromSocket(channel.stream, channel.sink, protocol, serverSide), t0.pingInterval = pingInterval, t0);
    ;
  }).prototype = src__channel.WebSocketChannel.prototype;
  dart.addTypeTests(src__channel.WebSocketChannel);
  dart.setGetterSignature(src__channel.WebSocketChannel, () => ({
    __proto__: dart.getGetters(src__channel.WebSocketChannel.__proto__),
    protocol: core.String,
    closeCode: core.int,
    closeReason: core.String,
    stream: async$.Stream,
    sink: src__channel.WebSocketSink
  }));
  dart.setLibraryUri(src__channel.WebSocketChannel, "package:web_socket_channel/src/channel.dart");
  dart.setFieldSignature(src__channel.WebSocketChannel, () => ({
    __proto__: dart.getFields(src__channel.WebSocketChannel.__proto__),
    [_webSocket]: dart.finalFieldType(src__copy__web_socket_impl.WebSocketImpl)
  }));
  src__channel.WebSocketSink = class WebSocketSink extends src__delegate__stream_sink.DelegatingStreamSink {
    close(closeCode, closeReason) {
      if (closeCode === void 0) closeCode = null;
      if (closeReason === void 0) closeReason = null;
      return this[_webSocket].close(closeCode, closeReason);
    }
  };
  (src__channel.WebSocketSink.__ = function(webSocket) {
    this[_webSocket] = webSocket;
    src__channel.WebSocketSink.__proto__.new.call(this, webSocket);
    ;
  }).prototype = src__channel.WebSocketSink.prototype;
  dart.addTypeTests(src__channel.WebSocketSink);
  dart.setMethodSignature(src__channel.WebSocketSink, () => ({
    __proto__: dart.getMethods(src__channel.WebSocketSink.__proto__),
    close: dart.fnType(async$.Future, [], [core.int, core.String])
  }));
  dart.setLibraryUri(src__channel.WebSocketSink, "package:web_socket_channel/src/channel.dart");
  dart.setFieldSignature(src__channel.WebSocketSink, () => ({
    __proto__: dart.getFields(src__channel.WebSocketSink.__proto__),
    [_webSocket]: dart.finalFieldType(src__copy__web_socket_impl.WebSocketImpl)
  }));
  src__copy__web_socket_impl._WebSocketMessageType = class _WebSocketMessageType extends core.Object {};
  (src__copy__web_socket_impl._WebSocketMessageType.new = function() {
    ;
  }).prototype = src__copy__web_socket_impl._WebSocketMessageType.prototype;
  dart.addTypeTests(src__copy__web_socket_impl._WebSocketMessageType);
  dart.setLibraryUri(src__copy__web_socket_impl._WebSocketMessageType, "package:web_socket_channel/src/copy/web_socket_impl.dart");
  dart.defineLazy(src__copy__web_socket_impl._WebSocketMessageType, {
    /*src__copy__web_socket_impl._WebSocketMessageType.NONE*/get NONE() {
      return 0;
    },
    /*src__copy__web_socket_impl._WebSocketMessageType.TEXT*/get TEXT() {
      return 1;
    },
    /*src__copy__web_socket_impl._WebSocketMessageType.BINARY*/get BINARY() {
      return 2;
    }
  });
  src__copy__web_socket_impl._WebSocketOpcode = class _WebSocketOpcode extends core.Object {};
  (src__copy__web_socket_impl._WebSocketOpcode.new = function() {
    ;
  }).prototype = src__copy__web_socket_impl._WebSocketOpcode.prototype;
  dart.addTypeTests(src__copy__web_socket_impl._WebSocketOpcode);
  dart.setLibraryUri(src__copy__web_socket_impl._WebSocketOpcode, "package:web_socket_channel/src/copy/web_socket_impl.dart");
  dart.defineLazy(src__copy__web_socket_impl._WebSocketOpcode, {
    /*src__copy__web_socket_impl._WebSocketOpcode.CONTINUATION*/get CONTINUATION() {
      return 0;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.TEXT*/get TEXT() {
      return 1;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.BINARY*/get BINARY() {
      return 2;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.RESERVED_3*/get RESERVED_3() {
      return 3;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.RESERVED_4*/get RESERVED_4() {
      return 4;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.RESERVED_5*/get RESERVED_5() {
      return 5;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.RESERVED_6*/get RESERVED_6() {
      return 6;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.RESERVED_7*/get RESERVED_7() {
      return 7;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.CLOSE*/get CLOSE() {
      return 8;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.PING*/get PING() {
      return 9;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.PONG*/get PONG() {
      return 10;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.RESERVED_B*/get RESERVED_B() {
      return 11;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.RESERVED_C*/get RESERVED_C() {
      return 12;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.RESERVED_D*/get RESERVED_D() {
      return 13;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.RESERVED_E*/get RESERVED_E() {
      return 14;
    },
    /*src__copy__web_socket_impl._WebSocketOpcode.RESERVED_F*/get RESERVED_F() {
      return 15;
    }
  });
  const _state = dart.privateName(src__copy__web_socket_impl, "_state");
  const _fin = dart.privateName(src__copy__web_socket_impl, "_fin");
  const _opcode = dart.privateName(src__copy__web_socket_impl, "_opcode");
  const _len = dart.privateName(src__copy__web_socket_impl, "_len");
  const _masked = dart.privateName(src__copy__web_socket_impl, "_masked");
  const _remainingLenBytes = dart.privateName(src__copy__web_socket_impl, "_remainingLenBytes");
  const _remainingMaskingKeyBytes = dart.privateName(src__copy__web_socket_impl, "_remainingMaskingKeyBytes");
  const _remainingPayloadBytes = dart.privateName(src__copy__web_socket_impl, "_remainingPayloadBytes");
  const _unmaskingIndex = dart.privateName(src__copy__web_socket_impl, "_unmaskingIndex");
  const _currentMessageType = dart.privateName(src__copy__web_socket_impl, "_currentMessageType");
  const _eventSink = dart.privateName(src__copy__web_socket_impl, "_eventSink");
  const _maskingBytes = dart.privateName(src__copy__web_socket_impl, "_maskingBytes");
  const _payload = dart.privateName(src__copy__web_socket_impl, "_payload");
  const _serverSide$ = dart.privateName(src__copy__web_socket_impl, "_serverSide");
  const _isControlFrame = dart.privateName(src__copy__web_socket_impl, "_isControlFrame");
  const _lengthDone = dart.privateName(src__copy__web_socket_impl, "_lengthDone");
  const _maskDone = dart.privateName(src__copy__web_socket_impl, "_maskDone");
  const _unmask = dart.privateName(src__copy__web_socket_impl, "_unmask");
  const _controlFrameEnd = dart.privateName(src__copy__web_socket_impl, "_controlFrameEnd");
  const _messageFrameEnd = dart.privateName(src__copy__web_socket_impl, "_messageFrameEnd");
  const _startPayload = dart.privateName(src__copy__web_socket_impl, "_startPayload");
  const _prepareForNextFrame = dart.privateName(src__copy__web_socket_impl, "_prepareForNextFrame");
  src__copy__web_socket_impl._WebSocketProtocolTransformer = class _WebSocketProtocolTransformer extends async$.StreamTransformerBase$(core.List$(core.int), dart.dynamic) {
    bind(stream) {
      StreamOfListOfint()._check(stream);
      return async$.Stream.eventTransformed(stream, dart.fn(eventSink => {
        if (this[_eventSink] != null) {
          dart.throw(new core.StateError.new("WebSocket transformer already used."));
        }
        this[_eventSink] = eventSink;
        return this;
      }, EventSinkTo_WebSocketProtocolTransformer()));
    }
    addError(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      this[_eventSink].addError(error, stackTrace);
    }
    close() {
      this[_eventSink].close();
    }
    add(bytes) {
      let t0;
      ListOfint()._check(bytes);
      let buffer = typed_data.Uint8List.is(bytes) ? bytes : _native_typed_data.NativeUint8List.fromList(bytes);
      let index = 0;
      let lastIndex = buffer[$length];
      if (this[_state] == src__copy__web_socket_impl._WebSocketProtocolTransformer.CLOSED) {
        dart.throw(new src__exception.WebSocketChannelException.new("Data on closed connection"));
      }
      if (this[_state] == src__copy__web_socket_impl._WebSocketProtocolTransformer.FAILURE) {
        dart.throw(new src__exception.WebSocketChannelException.new("Data on failed connection"));
      }
      while (index < dart.notNull(lastIndex) && this[_state] != src__copy__web_socket_impl._WebSocketProtocolTransformer.CLOSED && this[_state] != src__copy__web_socket_impl._WebSocketProtocolTransformer.FAILURE) {
        let byte = buffer[$_get](index);
        if (dart.notNull(this[_state]) <= dart.notNull(src__copy__web_socket_impl._WebSocketProtocolTransformer.LEN_REST)) {
          if (this[_state] == src__copy__web_socket_impl._WebSocketProtocolTransformer.START) {
            this[_fin] = (dart.notNull(byte) & dart.notNull(src__copy__web_socket_impl._WebSocketProtocolTransformer.FIN)) !== 0;
            if ((dart.notNull(byte) & (dart.notNull(src__copy__web_socket_impl._WebSocketProtocolTransformer.RSV2) | dart.notNull(src__copy__web_socket_impl._WebSocketProtocolTransformer.RSV3)) >>> 0) !== 0) {
              dart.throw(new src__exception.WebSocketChannelException.new("Protocol error"));
            }
            this[_opcode] = (dart.notNull(byte) & dart.notNull(src__copy__web_socket_impl._WebSocketProtocolTransformer.OPCODE)) >>> 0;
            if (dart.notNull(this[_opcode]) <= dart.notNull(src__copy__web_socket_impl._WebSocketOpcode.BINARY)) {
              if (this[_opcode] == src__copy__web_socket_impl._WebSocketOpcode.CONTINUATION) {
                if (this[_currentMessageType] == src__copy__web_socket_impl._WebSocketMessageType.NONE) {
                  dart.throw(new src__exception.WebSocketChannelException.new("Protocol error"));
                }
              } else {
                if (!(this[_opcode] == src__copy__web_socket_impl._WebSocketOpcode.TEXT || this[_opcode] == src__copy__web_socket_impl._WebSocketOpcode.BINARY)) dart.assertFailed(null, "org-dartlang-app:///packages/web_socket_channel/src/copy/web_socket_impl.dart", 148, 22, "_opcode == _WebSocketOpcode.TEXT ||\n                  _opcode == _WebSocketOpcode.BINARY");
                if (this[_currentMessageType] != src__copy__web_socket_impl._WebSocketMessageType.NONE) {
                  dart.throw(new src__exception.WebSocketChannelException.new("Protocol error"));
                }
                this[_currentMessageType] = this[_opcode];
              }
            } else if (dart.notNull(this[_opcode]) >= dart.notNull(src__copy__web_socket_impl._WebSocketOpcode.CLOSE) && dart.notNull(this[_opcode]) <= dart.notNull(src__copy__web_socket_impl._WebSocketOpcode.PONG)) {
              if (!dart.test(this[_fin])) dart.throw(new src__exception.WebSocketChannelException.new("Protocol error"));
            } else {
              dart.throw(new src__exception.WebSocketChannelException.new("Protocol error"));
            }
            this[_state] = src__copy__web_socket_impl._WebSocketProtocolTransformer.LEN_FIRST;
          } else if (this[_state] == src__copy__web_socket_impl._WebSocketProtocolTransformer.LEN_FIRST) {
            this[_masked] = (dart.notNull(byte) & 128) !== 0;
            this[_len] = dart.notNull(byte) & 127;
            if (dart.test(this[_isControlFrame]()) && dart.notNull(this[_len]) > 125) {
              dart.throw(new src__exception.WebSocketChannelException.new("Protocol error"));
            }
            if (this[_len] === 126) {
              this[_len] = 0;
              this[_remainingLenBytes] = 2;
              this[_state] = src__copy__web_socket_impl._WebSocketProtocolTransformer.LEN_REST;
            } else if (this[_len] === 127) {
              this[_len] = 0;
              this[_remainingLenBytes] = 8;
              this[_state] = src__copy__web_socket_impl._WebSocketProtocolTransformer.LEN_REST;
            } else {
              if (!(dart.notNull(this[_len]) < 126)) dart.assertFailed(null, "org-dartlang-app:///packages/web_socket_channel/src/copy/web_socket_impl.dart", 178, 20, "_len < 126");
              this[_lengthDone]();
            }
          } else {
            if (!(this[_state] == src__copy__web_socket_impl._WebSocketProtocolTransformer.LEN_REST)) dart.assertFailed(null, "org-dartlang-app:///packages/web_socket_channel/src/copy/web_socket_impl.dart", 182, 18, "_state == LEN_REST");
            this[_len] = (dart.notNull(this[_len]) << 8 | dart.notNull(byte)) >>> 0;
            this[_remainingLenBytes] = dart.notNull(this[_remainingLenBytes]) - 1;
            if (this[_remainingLenBytes] === 0) {
              this[_lengthDone]();
            }
          }
        } else {
          if (this[_state] == src__copy__web_socket_impl._WebSocketProtocolTransformer.MASK) {
            this[_maskingBytes][$_set](4 - dart.notNull((t0 = this[_remainingMaskingKeyBytes], this[_remainingMaskingKeyBytes] = dart.notNull(t0) - 1, t0)), byte);
            if (this[_remainingMaskingKeyBytes] === 0) {
              this[_maskDone]();
            }
          } else {
            if (!(this[_state] == src__copy__web_socket_impl._WebSocketProtocolTransformer.PAYLOAD)) dart.assertFailed(null, "org-dartlang-app:///packages/web_socket_channel/src/copy/web_socket_impl.dart", 196, 18, "_state == PAYLOAD");
            let payloadLength = math.min(core.int, dart.notNull(lastIndex) - index, this[_remainingPayloadBytes]);
            this[_remainingPayloadBytes] = dart.notNull(this[_remainingPayloadBytes]) - payloadLength;
            if (dart.test(this[_masked])) {
              this[_unmask](index, payloadLength, buffer);
            }
            this[_payload].add(typed_data.Uint8List.view(buffer[$buffer], index, payloadLength));
            index = index + payloadLength;
            if (dart.test(this[_isControlFrame]())) {
              if (this[_remainingPayloadBytes] === 0) this[_controlFrameEnd]();
            } else {
              if (this[_currentMessageType] != src__copy__web_socket_impl._WebSocketMessageType.TEXT && this[_currentMessageType] != src__copy__web_socket_impl._WebSocketMessageType.BINARY) {
                dart.throw(new src__exception.WebSocketChannelException.new("Protocol error"));
              }
              if (this[_remainingPayloadBytes] === 0) this[_messageFrameEnd]();
            }
            index = index - 1;
          }
        }
        index = index + 1;
      }
    }
    [_unmask](index, length, buffer) {
      let t2, t1, t0, t1$, t0$, t2$, t1$0, t0$0;
      let BLOCK_SIZE = 16;
      if (dart.notNull(length) >= BLOCK_SIZE) {
        let startOffset = BLOCK_SIZE - (dart.notNull(index) & 15);
        let end = dart.notNull(index) + startOffset;
        for (let i = index; dart.notNull(i) < end; i = dart.notNull(i) + 1) {
          t0 = buffer;
          t1 = i;
          t0[$_set](t1, (dart.notNull(t0[$_get](t1)) ^ dart.notNull(core.int._check(this[_maskingBytes][$_get](dart.notNull((t2 = this[_unmaskingIndex], this[_unmaskingIndex] = dart.notNull(t2) + 1, t2)) & 3)))) >>> 0);
        }
        index = dart.notNull(index) + startOffset;
        length = dart.notNull(length) - startOffset;
        let blockCount = (dart.notNull(length) / BLOCK_SIZE)[$truncate]();
        if (blockCount > 0) {
          let mask = 0;
          for (let i = 3; i >= 0; i = i - 1) {
            mask = (mask << 8 | dart.notNull(core.int._check(this[_maskingBytes][$_get](dart.notNull(this[_unmaskingIndex]) + i & 3)))) >>> 0;
          }
          let blockMask = new _native_typed_data.NativeInt32x4.new(mask, mask, mask, mask);
          let blockBuffer = typed_data.Int32x4List.view(buffer[$buffer], index, blockCount);
          for (let i = 0; i < dart.notNull(blockBuffer[$length]); i = i + 1) {
            t0$ = blockBuffer;
            t1$ = i;
            t0$[$_set](t1$, t0$[$_get](t1$)['^'](blockMask));
          }
          let bytes = blockCount * BLOCK_SIZE;
          index = dart.notNull(index) + bytes;
          length = dart.notNull(length) - bytes;
        }
      }
      let end = dart.notNull(index) + dart.notNull(length);
      for (let i = index; dart.notNull(i) < end; i = dart.notNull(i) + 1) {
        t0$0 = buffer;
        t1$0 = i;
        t0$0[$_set](t1$0, (dart.notNull(t0$0[$_get](t1$0)) ^ dart.notNull(core.int._check(this[_maskingBytes][$_get](dart.notNull((t2$ = this[_unmaskingIndex], this[_unmaskingIndex] = dart.notNull(t2$) + 1, t2$)) & 3)))) >>> 0);
      }
    }
    [_lengthDone]() {
      if (dart.test(this[_masked])) {
        if (!dart.test(this[_serverSide$])) {
          dart.throw(new src__exception.WebSocketChannelException.new("Received masked frame from server"));
        }
        this[_state] = src__copy__web_socket_impl._WebSocketProtocolTransformer.MASK;
      } else {
        if (dart.test(this[_serverSide$])) {
          dart.throw(new src__exception.WebSocketChannelException.new("Received unmasked frame from client"));
        }
        this[_remainingPayloadBytes] = this[_len];
        this[_startPayload]();
      }
    }
    [_maskDone]() {
      this[_remainingPayloadBytes] = this[_len];
      this[_startPayload]();
    }
    [_startPayload]() {
      if (this[_remainingPayloadBytes] === 0) {
        if (dart.test(this[_isControlFrame]())) {
          switch (this[_opcode]) {
            case src__copy__web_socket_impl._WebSocketOpcode.CLOSE:
            {
              this[_state] = src__copy__web_socket_impl._WebSocketProtocolTransformer.CLOSED;
              this[_eventSink].close();
              break;
            }
            case src__copy__web_socket_impl._WebSocketOpcode.PING:
            {
              this[_eventSink].add(new src__copy__web_socket_impl._WebSocketPing.new());
              break;
            }
            case src__copy__web_socket_impl._WebSocketOpcode.PONG:
            {
              this[_eventSink].add(new src__copy__web_socket_impl._WebSocketPong.new());
              break;
            }
          }
          this[_prepareForNextFrame]();
        } else {
          this[_messageFrameEnd]();
        }
      } else {
        this[_state] = src__copy__web_socket_impl._WebSocketProtocolTransformer.PAYLOAD;
      }
    }
    [_messageFrameEnd]() {
      if (dart.test(this[_fin])) {
        let bytes = this[_payload].takeBytes();
        switch (this[_currentMessageType]) {
          case src__copy__web_socket_impl._WebSocketMessageType.TEXT:
          {
            this[_eventSink].add(convert.utf8.decode(bytes));
            break;
          }
          case src__copy__web_socket_impl._WebSocketMessageType.BINARY:
          {
            this[_eventSink].add(bytes);
            break;
          }
        }
        this[_currentMessageType] = src__copy__web_socket_impl._WebSocketMessageType.NONE;
      }
      this[_prepareForNextFrame]();
    }
    [_controlFrameEnd]() {
      switch (this[_opcode]) {
        case src__copy__web_socket_impl._WebSocketOpcode.CLOSE:
        {
          this.closeCode = src__copy__web_socket.WebSocketStatus.NO_STATUS_RECEIVED;
          let payload = this[_payload].takeBytes();
          if (dart.test(payload[$isNotEmpty])) {
            if (payload[$length] === 1) {
              dart.throw(new src__exception.WebSocketChannelException.new("Protocol error"));
            }
            this.closeCode = (dart.notNull(payload[$_get](0)) << 8 | dart.notNull(payload[$_get](1))) >>> 0;
            if (this.closeCode == src__copy__web_socket.WebSocketStatus.NO_STATUS_RECEIVED) {
              dart.throw(new src__exception.WebSocketChannelException.new("Protocol error"));
            }
            if (dart.notNull(payload[$length]) > 2) {
              this.closeReason = convert.utf8.decode(payload[$sublist](2));
            }
          }
          this[_state] = src__copy__web_socket_impl._WebSocketProtocolTransformer.CLOSED;
          this[_eventSink].close();
          break;
        }
        case src__copy__web_socket_impl._WebSocketOpcode.PING:
        {
          this[_eventSink].add(new src__copy__web_socket_impl._WebSocketPing.new(this[_payload].takeBytes()));
          break;
        }
        case src__copy__web_socket_impl._WebSocketOpcode.PONG:
        {
          this[_eventSink].add(new src__copy__web_socket_impl._WebSocketPong.new(this[_payload].takeBytes()));
          break;
        }
      }
      this[_prepareForNextFrame]();
    }
    [_isControlFrame]() {
      return this[_opcode] == src__copy__web_socket_impl._WebSocketOpcode.CLOSE || this[_opcode] == src__copy__web_socket_impl._WebSocketOpcode.PING || this[_opcode] == src__copy__web_socket_impl._WebSocketOpcode.PONG;
    }
    [_prepareForNextFrame]() {
      if (this[_state] != src__copy__web_socket_impl._WebSocketProtocolTransformer.CLOSED && this[_state] != src__copy__web_socket_impl._WebSocketProtocolTransformer.FAILURE) this[_state] = src__copy__web_socket_impl._WebSocketProtocolTransformer.START;
      this[_fin] = false;
      this[_opcode] = -1;
      this[_len] = -1;
      this[_remainingLenBytes] = -1;
      this[_remainingMaskingKeyBytes] = 4;
      this[_remainingPayloadBytes] = -1;
      this[_unmaskingIndex] = 0;
    }
  };
  (src__copy__web_socket_impl._WebSocketProtocolTransformer.new = function(_serverSide) {
    if (_serverSide === void 0) _serverSide = false;
    this[_state] = src__copy__web_socket_impl._WebSocketProtocolTransformer.START;
    this[_fin] = false;
    this[_opcode] = -1;
    this[_len] = -1;
    this[_masked] = false;
    this[_remainingLenBytes] = -1;
    this[_remainingMaskingKeyBytes] = 4;
    this[_remainingPayloadBytes] = -1;
    this[_unmaskingIndex] = 0;
    this[_currentMessageType] = src__copy__web_socket_impl._WebSocketMessageType.NONE;
    this.closeCode = src__copy__web_socket.WebSocketStatus.NO_STATUS_RECEIVED;
    this.closeReason = "";
    this[_eventSink] = null;
    this[_maskingBytes] = core.List.new(4);
    this[_payload] = src__copy__bytes_builder.BytesBuilder.new({copy: false});
    this[_serverSide$] = _serverSide;
    src__copy__web_socket_impl._WebSocketProtocolTransformer.__proto__.new.call(this);
    ;
  }).prototype = src__copy__web_socket_impl._WebSocketProtocolTransformer.prototype;
  dart.addTypeTests(src__copy__web_socket_impl._WebSocketProtocolTransformer);
  src__copy__web_socket_impl._WebSocketProtocolTransformer[dart.implements] = () => [async$.EventSink$(core.List$(core.int))];
  dart.setMethodSignature(src__copy__web_socket_impl._WebSocketProtocolTransformer, () => ({
    __proto__: dart.getMethods(src__copy__web_socket_impl._WebSocketProtocolTransformer.__proto__),
    bind: dart.fnType(async$.Stream, [core.Object]),
    addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
    close: dart.fnType(dart.void, []),
    add: dart.fnType(dart.void, [core.Object]),
    [_unmask]: dart.fnType(dart.void, [core.int, core.int, typed_data.Uint8List]),
    [_lengthDone]: dart.fnType(dart.void, []),
    [_maskDone]: dart.fnType(dart.void, []),
    [_startPayload]: dart.fnType(dart.void, []),
    [_messageFrameEnd]: dart.fnType(dart.void, []),
    [_controlFrameEnd]: dart.fnType(dart.void, []),
    [_isControlFrame]: dart.fnType(core.bool, []),
    [_prepareForNextFrame]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__copy__web_socket_impl._WebSocketProtocolTransformer, "package:web_socket_channel/src/copy/web_socket_impl.dart");
  dart.setFieldSignature(src__copy__web_socket_impl._WebSocketProtocolTransformer, () => ({
    __proto__: dart.getFields(src__copy__web_socket_impl._WebSocketProtocolTransformer.__proto__),
    [_state]: dart.fieldType(core.int),
    [_fin]: dart.fieldType(core.bool),
    [_opcode]: dart.fieldType(core.int),
    [_len]: dart.fieldType(core.int),
    [_masked]: dart.fieldType(core.bool),
    [_remainingLenBytes]: dart.fieldType(core.int),
    [_remainingMaskingKeyBytes]: dart.fieldType(core.int),
    [_remainingPayloadBytes]: dart.fieldType(core.int),
    [_unmaskingIndex]: dart.fieldType(core.int),
    [_currentMessageType]: dart.fieldType(core.int),
    closeCode: dart.fieldType(core.int),
    closeReason: dart.fieldType(core.String),
    [_eventSink]: dart.fieldType(async$.EventSink),
    [_serverSide$]: dart.finalFieldType(core.bool),
    [_maskingBytes]: dart.finalFieldType(core.List),
    [_payload]: dart.finalFieldType(src__copy__bytes_builder.BytesBuilder)
  }));
  dart.defineLazy(src__copy__web_socket_impl._WebSocketProtocolTransformer, {
    /*src__copy__web_socket_impl._WebSocketProtocolTransformer.START*/get START() {
      return 0;
    },
    /*src__copy__web_socket_impl._WebSocketProtocolTransformer.LEN_FIRST*/get LEN_FIRST() {
      return 1;
    },
    /*src__copy__web_socket_impl._WebSocketProtocolTransformer.LEN_REST*/get LEN_REST() {
      return 2;
    },
    /*src__copy__web_socket_impl._WebSocketProtocolTransformer.MASK*/get MASK() {
      return 3;
    },
    /*src__copy__web_socket_impl._WebSocketProtocolTransformer.PAYLOAD*/get PAYLOAD() {
      return 4;
    },
    /*src__copy__web_socket_impl._WebSocketProtocolTransformer.CLOSED*/get CLOSED() {
      return 5;
    },
    /*src__copy__web_socket_impl._WebSocketProtocolTransformer.FAILURE*/get FAILURE() {
      return 6;
    },
    /*src__copy__web_socket_impl._WebSocketProtocolTransformer.FIN*/get FIN() {
      return 128;
    },
    /*src__copy__web_socket_impl._WebSocketProtocolTransformer.RSV1*/get RSV1() {
      return 64;
    },
    /*src__copy__web_socket_impl._WebSocketProtocolTransformer.RSV2*/get RSV2() {
      return 32;
    },
    /*src__copy__web_socket_impl._WebSocketProtocolTransformer.RSV3*/get RSV3() {
      return 16;
    },
    /*src__copy__web_socket_impl._WebSocketProtocolTransformer.OPCODE*/get OPCODE() {
      return 15;
    }
  });
  src__copy__web_socket_impl._WebSocketPing = class _WebSocketPing extends core.Object {};
  (src__copy__web_socket_impl._WebSocketPing.new = function(payload) {
    if (payload === void 0) payload = null;
    this.payload = payload;
    ;
  }).prototype = src__copy__web_socket_impl._WebSocketPing.prototype;
  dart.addTypeTests(src__copy__web_socket_impl._WebSocketPing);
  dart.setLibraryUri(src__copy__web_socket_impl._WebSocketPing, "package:web_socket_channel/src/copy/web_socket_impl.dart");
  dart.setFieldSignature(src__copy__web_socket_impl._WebSocketPing, () => ({
    __proto__: dart.getFields(src__copy__web_socket_impl._WebSocketPing.__proto__),
    payload: dart.finalFieldType(core.List$(core.int))
  }));
  src__copy__web_socket_impl._WebSocketPong = class _WebSocketPong extends core.Object {};
  (src__copy__web_socket_impl._WebSocketPong.new = function(payload) {
    if (payload === void 0) payload = null;
    this.payload = payload;
    ;
  }).prototype = src__copy__web_socket_impl._WebSocketPong.prototype;
  dart.addTypeTests(src__copy__web_socket_impl._WebSocketPong);
  dart.setLibraryUri(src__copy__web_socket_impl._WebSocketPong, "package:web_socket_channel/src/copy/web_socket_impl.dart");
  dart.setFieldSignature(src__copy__web_socket_impl._WebSocketPong, () => ({
    __proto__: dart.getFields(src__copy__web_socket_impl._WebSocketPong.__proto__),
    payload: dart.finalFieldType(core.List$(core.int))
  }));
  const _outCloseCode = dart.privateName(src__copy__web_socket_impl, "_outCloseCode");
  const _outCloseReason = dart.privateName(src__copy__web_socket_impl, "_outCloseReason");
  src__copy__web_socket_impl._WebSocketOutgoingTransformer = class _WebSocketOutgoingTransformer extends async$.StreamTransformerBase$(dart.dynamic, core.List$(core.int)) {
    bind(stream) {
      async$.Stream._check(stream);
      return StreamOfListOfint().eventTransformed(stream, dart.fn(eventSink => {
        if (this[_eventSink] != null) {
          dart.throw(new core.StateError.new("WebSocket transformer already used"));
        }
        this[_eventSink] = eventSink;
        return this;
      }, EventSinkOfListOfintTo_WebSocketOutgoingTransformer()));
    }
    add(message) {
      if (src__copy__web_socket_impl._WebSocketPong.is(message)) {
        this.addFrame(src__copy__web_socket_impl._WebSocketOpcode.PONG, message.payload);
        return;
      }
      if (src__copy__web_socket_impl._WebSocketPing.is(message)) {
        this.addFrame(src__copy__web_socket_impl._WebSocketOpcode.PING, message.payload);
        return;
      }
      let data = null;
      let opcode = null;
      if (message != null) {
        if (typeof message == 'string') {
          opcode = src__copy__web_socket_impl._WebSocketOpcode.TEXT;
          data = convert.utf8.encode(message);
        } else if (ListOfint().is(message)) {
          opcode = src__copy__web_socket_impl._WebSocketOpcode.BINARY;
          data = message;
        } else {
          dart.throw(new core.ArgumentError.new(message));
        }
      } else {
        opcode = src__copy__web_socket_impl._WebSocketOpcode.TEXT;
      }
      this.addFrame(opcode, data);
    }
    addError(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      this[_eventSink].addError(error, stackTrace);
    }
    close() {
      let code = this.webSocket[_outCloseCode];
      let reason = this.webSocket[_outCloseReason];
      let data = null;
      if (code != null) {
        data = JSArrayOfint().of([]);
        data[$add](dart.notNull(code) >> 8 & 255);
        data[$add](dart.notNull(code) & 255);
        if (reason != null) {
          data[$addAll](convert.utf8.encode(reason));
        }
      }
      this.addFrame(src__copy__web_socket_impl._WebSocketOpcode.CLOSE, data);
      this[_eventSink].close();
    }
    addFrame(opcode, data) {
      src__copy__web_socket_impl._WebSocketOutgoingTransformer.createFrame(opcode, data, this.webSocket[_serverSide$], false)[$forEach](dart.fn(e => {
        this[_eventSink].add(e);
      }, ListOfintToNull()));
    }
    static createFrame(opcode, data, serverSide, compressed) {
      let t0, t0$, t0$0, t0$1, t1, t0$2, t1$, t0$3, t1$0, t0$4;
      let mask = !dart.test(serverSide);
      let dataLength = data == null ? 0 : data[$length];
      let headerSize = mask ? 6 : 2;
      if (dart.notNull(dataLength) > 65535) {
        headerSize = headerSize + 8;
      } else if (dart.notNull(dataLength) > 125) {
        headerSize = headerSize + 2;
      }
      let header = _native_typed_data.NativeUint8List.new(headerSize);
      let index = 0;
      let hoc = (dart.notNull(src__copy__web_socket_impl._WebSocketProtocolTransformer.FIN) | dart.notNull(dart.test(compressed) ? src__copy__web_socket_impl._WebSocketProtocolTransformer.RSV1 : 0) | (dart.notNull(opcode) & dart.notNull(src__copy__web_socket_impl._WebSocketProtocolTransformer.OPCODE)) >>> 0) >>> 0;
      header[$_set]((t0 = index, index = t0 + 1, t0), hoc);
      let lengthBytes = 1;
      if (dart.notNull(dataLength) > 65535) {
        header[$_set]((t0$ = index, index = t0$ + 1, t0$), 127);
        lengthBytes = 8;
      } else if (dart.notNull(dataLength) > 125) {
        header[$_set]((t0$0 = index, index = t0$0 + 1, t0$0), 126);
        lengthBytes = 2;
      }
      for (let i = 0; i < lengthBytes; i = i + 1) {
        header[$_set]((t0$1 = index, index = t0$1 + 1, t0$1), dataLength[$rightShift]((lengthBytes - 1 - i) * 8) & 255);
      }
      if (mask) {
        t0$2 = header;
        t1 = 1;
        t0$2[$_set](t1, (dart.notNull(t0$2[$_get](t1)) | 1 << 7) >>> 0);
        let maskBytes = JSArrayOfint().of([src__copy__web_socket_impl._random.nextInt(256), src__copy__web_socket_impl._random.nextInt(256), src__copy__web_socket_impl._random.nextInt(256), src__copy__web_socket_impl._random.nextInt(256)]);
        header[$setRange](index, index + 4, maskBytes);
        index = index + 4;
        if (data != null) {
          let list = null;
          if (opcode == src__copy__web_socket_impl._WebSocketOpcode.TEXT && typed_data.Uint8List.is(data)) {
            list = data;
          } else {
            if (typed_data.Uint8List.is(data)) {
              list = _native_typed_data.NativeUint8List.fromList(data);
            } else {
              list = _native_typed_data.NativeUint8List.new(data[$length]);
              for (let i = 0; i < dart.notNull(data[$length]); i = i + 1) {
                if (dart.notNull(data[$_get](i)) < 0 || 255 < dart.notNull(data[$_get](i))) {
                  dart.throw(new core.ArgumentError.new("List element is not a byte value " + "(value " + dart.str(data[$_get](i)) + " at index " + dart.str(i) + ")"));
                }
                list[$_set](i, data[$_get](i));
              }
            }
          }
          let BLOCK_SIZE = 16;
          let blockCount = (dart.notNull(list[$length]) / BLOCK_SIZE)[$truncate]();
          if (blockCount > 0) {
            let mask = 0;
            for (let i = 3; i >= 0; i = i - 1) {
              mask = (mask << 8 | dart.notNull(maskBytes[$_get](i))) >>> 0;
            }
            let blockMask = new _native_typed_data.NativeInt32x4.new(mask, mask, mask, mask);
            let blockBuffer = typed_data.Int32x4List.view(list[$buffer], 0, blockCount);
            for (let i = 0; i < dart.notNull(blockBuffer[$length]); i = i + 1) {
              t0$3 = blockBuffer;
              t1$ = i;
              t0$3[$_set](t1$, t0$3[$_get](t1$)['^'](blockMask));
            }
          }
          for (let i = blockCount * BLOCK_SIZE; i < dart.notNull(list[$length]); i = i + 1) {
            t0$4 = list;
            t1$0 = i;
            t0$4[$_set](t1$0, (dart.notNull(t0$4[$_get](t1$0)) ^ dart.notNull(maskBytes[$_get](i & 3))) >>> 0);
          }
          data = list;
        }
      }
      if (!(index === headerSize)) dart.assertFailed(null, "org-dartlang-app:///packages/web_socket_channel/src/copy/web_socket_impl.dart", 551, 12, "index == headerSize");
      if (data == null) {
        return JSArrayOfListOfint().of([header]);
      } else {
        return JSArrayOfListOfint().of([header, data]);
      }
    }
  };
  (src__copy__web_socket_impl._WebSocketOutgoingTransformer.new = function(webSocket) {
    this[_eventSink] = null;
    this.webSocket = webSocket;
    src__copy__web_socket_impl._WebSocketOutgoingTransformer.__proto__.new.call(this);
    ;
  }).prototype = src__copy__web_socket_impl._WebSocketOutgoingTransformer.prototype;
  dart.addTypeTests(src__copy__web_socket_impl._WebSocketOutgoingTransformer);
  src__copy__web_socket_impl._WebSocketOutgoingTransformer[dart.implements] = () => [async$.EventSink];
  dart.setMethodSignature(src__copy__web_socket_impl._WebSocketOutgoingTransformer, () => ({
    __proto__: dart.getMethods(src__copy__web_socket_impl._WebSocketOutgoingTransformer.__proto__),
    bind: dart.fnType(async$.Stream$(core.List$(core.int)), [core.Object]),
    add: dart.fnType(dart.void, [core.Object]),
    addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
    close: dart.fnType(dart.void, []),
    addFrame: dart.fnType(dart.void, [core.int, core.List$(core.int)])
  }));
  dart.setLibraryUri(src__copy__web_socket_impl._WebSocketOutgoingTransformer, "package:web_socket_channel/src/copy/web_socket_impl.dart");
  dart.setFieldSignature(src__copy__web_socket_impl._WebSocketOutgoingTransformer, () => ({
    __proto__: dart.getFields(src__copy__web_socket_impl._WebSocketOutgoingTransformer.__proto__),
    webSocket: dart.finalFieldType(src__copy__web_socket_impl.WebSocketImpl),
    [_eventSink]: dart.fieldType(async$.EventSink$(core.List$(core.int)))
  }));
  const _controller$ = dart.privateName(src__copy__web_socket_impl, "_controller");
  const _subscription = dart.privateName(src__copy__web_socket_impl, "_subscription");
  const _issuedPause = dart.privateName(src__copy__web_socket_impl, "_issuedPause");
  const _closed = dart.privateName(src__copy__web_socket_impl, "_closed");
  const _closeCompleter = dart.privateName(src__copy__web_socket_impl, "_closeCompleter");
  const _completer = dart.privateName(src__copy__web_socket_impl, "_completer");
  const _onListen = dart.privateName(src__copy__web_socket_impl, "_onListen");
  const _onPause = dart.privateName(src__copy__web_socket_impl, "_onPause");
  const _onResume = dart.privateName(src__copy__web_socket_impl, "_onResume");
  const _cancel = dart.privateName(src__copy__web_socket_impl, "_cancel");
  const _done = dart.privateName(src__copy__web_socket_impl, "_done");
  const _ensureController = dart.privateName(src__copy__web_socket_impl, "_ensureController");
  src__copy__web_socket_impl._WebSocketConsumer = class _WebSocketConsumer extends core.Object {
    [_onListen]() {
      if (this[_subscription] != null) {
        this[_subscription].cancel();
      }
    }
    [_onPause]() {
      if (this[_subscription] != null) {
        this[_subscription].pause();
      } else {
        this[_issuedPause] = true;
      }
    }
    [_onResume]() {
      if (this[_subscription] != null) {
        this[_subscription].resume();
      } else {
        this[_issuedPause] = false;
      }
    }
    [_cancel]() {
      if (this[_subscription] != null) {
        let subscription = this[_subscription];
        this[_subscription] = null;
        subscription.cancel();
      }
    }
    [_ensureController]() {
      if (this[_controller$] != null) return;
      this[_controller$] = async$.StreamController.new({sync: true, onPause: dart.bind(this, _onPause), onResume: dart.bind(this, _onResume), onCancel: dart.bind(this, _onListen)});
      let stream = new src__copy__web_socket_impl._WebSocketOutgoingTransformer.new(this.webSocket).bind(this[_controller$].stream);
      this.sink.addStream(stream).then(dart.dynamic, dart.fn(_ => {
        this[_done]();
        this[_closeCompleter].complete(this.webSocket);
      }, dynamicToNull()), {onError: dart.fn((error, stackTrace) => {
          this[_closed] = true;
          this[_cancel]();
          if (core.ArgumentError.is(error)) {
            if (!dart.test(this[_done](error, stackTrace))) {
              this[_closeCompleter].completeError(error, stackTrace);
            }
          } else {
            this[_done]();
            this[_closeCompleter].complete(this.webSocket);
          }
        }, dynamicAndStackTraceToNull())});
    }
    [_done](error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      if (this[_completer] == null) return false;
      if (error != null) {
        this[_completer].completeError(error, stackTrace);
      } else {
        this[_completer].complete(this.webSocket);
      }
      this[_completer] = null;
      return true;
    }
    addStream(stream) {
      async$.Stream._check(stream);
      if (dart.test(this[_closed])) {
        stream.listen(null).cancel();
        return async$.Future.value(this.webSocket);
      }
      this[_ensureController]();
      this[_completer] = async$.Completer.new();
      this[_subscription] = stream.listen(dart.fn(data => {
        this[_controller$].add(data);
      }, dynamicToNull()), {onDone: dart.bind(this, _done), onError: dart.bind(this, _done), cancelOnError: true});
      if (dart.test(this[_issuedPause])) {
        this[_subscription].pause();
        this[_issuedPause] = false;
      }
      return this[_completer].future;
    }
    close() {
      this[_ensureController]();
      const closeSocket = () => {
        return this.sink.close().catchError(dart.fn(_ => {
        }, dynamicToNull())).then(dart.dynamic, dart.fn(_ => this.webSocket, dynamicToWebSocketImpl()));
      };
      dart.fn(closeSocket, VoidToFuture());
      this[_controller$].close();
      return this[_closeCompleter].future.then(dart.dynamic, dart.fn(_ => closeSocket(), dynamicToFuture()));
    }
    add(data) {
      if (dart.test(this[_closed])) return;
      this[_ensureController]();
      this[_controller$].add(data);
    }
    closeSocket() {
      this[_closed] = true;
      this[_cancel]();
      this.close();
    }
  };
  (src__copy__web_socket_impl._WebSocketConsumer.new = function(webSocket, sink) {
    this[_controller$] = null;
    this[_subscription] = null;
    this[_issuedPause] = false;
    this[_closed] = false;
    this[_closeCompleter] = CompleterOfWebSocketImpl().new();
    this[_completer] = null;
    this.webSocket = webSocket;
    this.sink = sink;
    ;
  }).prototype = src__copy__web_socket_impl._WebSocketConsumer.prototype;
  dart.addTypeTests(src__copy__web_socket_impl._WebSocketConsumer);
  src__copy__web_socket_impl._WebSocketConsumer[dart.implements] = () => [async$.StreamConsumer];
  dart.setMethodSignature(src__copy__web_socket_impl._WebSocketConsumer, () => ({
    __proto__: dart.getMethods(src__copy__web_socket_impl._WebSocketConsumer.__proto__),
    [_onListen]: dart.fnType(dart.void, []),
    [_onPause]: dart.fnType(dart.void, []),
    [_onResume]: dart.fnType(dart.void, []),
    [_cancel]: dart.fnType(dart.void, []),
    [_ensureController]: dart.fnType(dart.dynamic, []),
    [_done]: dart.fnType(core.bool, [], [dart.dynamic, core.StackTrace]),
    addStream: dart.fnType(async$.Future, [core.Object]),
    close: dart.fnType(async$.Future, []),
    add: dart.fnType(dart.void, [dart.dynamic]),
    closeSocket: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__copy__web_socket_impl._WebSocketConsumer, "package:web_socket_channel/src/copy/web_socket_impl.dart");
  dart.setFieldSignature(src__copy__web_socket_impl._WebSocketConsumer, () => ({
    __proto__: dart.getFields(src__copy__web_socket_impl._WebSocketConsumer.__proto__),
    webSocket: dart.finalFieldType(src__copy__web_socket_impl.WebSocketImpl),
    sink: dart.finalFieldType(async$.StreamSink$(core.List$(core.int))),
    [_controller$]: dart.fieldType(async$.StreamController),
    [_subscription]: dart.fieldType(async$.StreamSubscription),
    [_issuedPause]: dart.fieldType(core.bool),
    [_closed]: dart.fieldType(core.bool),
    [_closeCompleter]: dart.finalFieldType(async$.Completer),
    [_completer]: dart.fieldType(async$.Completer)
  }));
  const _sink = dart.privateName(src__copy__web_socket_impl, "_sink");
  const _readyState = dart.privateName(src__copy__web_socket_impl, "_readyState");
  const _writeClosed = dart.privateName(src__copy__web_socket_impl, "_writeClosed");
  const _closeCode = dart.privateName(src__copy__web_socket_impl, "_closeCode");
  const _closeReason = dart.privateName(src__copy__web_socket_impl, "_closeReason");
  const _pingInterval = dart.privateName(src__copy__web_socket_impl, "_pingInterval");
  const _pingTimer = dart.privateName(src__copy__web_socket_impl, "_pingTimer");
  const _consumer = dart.privateName(src__copy__web_socket_impl, "_consumer");
  const _closeTimer = dart.privateName(src__copy__web_socket_impl, "_closeTimer");
  const _close = dart.privateName(src__copy__web_socket_impl, "_close");
  const _serviceId = dart.privateName(src__copy__web_socket_impl, "_serviceId");
  let const$;
  const __serviceId = dart.privateName(src__copy__web_socket_impl, "__serviceId");
  src__copy__web_socket_impl._ServiceObject = class _ServiceObject extends core.Object {
    get [_serviceId]() {
      let t0;
      if (this[__serviceId] === 0) this[__serviceId] = (t0 = src__copy__web_socket_impl._nextServiceId, src__copy__web_socket_impl._nextServiceId = dart.notNull(t0) + 1, t0);
      return this[__serviceId];
    }
  };
  (src__copy__web_socket_impl._ServiceObject.new = function() {
    this[__serviceId] = 0;
    ;
  }).prototype = src__copy__web_socket_impl._ServiceObject.prototype;
  dart.addTypeTests(src__copy__web_socket_impl._ServiceObject);
  dart.setGetterSignature(src__copy__web_socket_impl._ServiceObject, () => ({
    __proto__: dart.getGetters(src__copy__web_socket_impl._ServiceObject.__proto__),
    [_serviceId]: core.int
  }));
  dart.setLibraryUri(src__copy__web_socket_impl._ServiceObject, "package:web_socket_channel/src/copy/web_socket_impl.dart");
  dart.setFieldSignature(src__copy__web_socket_impl._ServiceObject, () => ({
    __proto__: dart.getFields(src__copy__web_socket_impl._ServiceObject.__proto__),
    [__serviceId]: dart.fieldType(core.int)
  }));
  const Stream__ServiceObject$ = class Stream__ServiceObject extends async$.Stream {};
  (Stream__ServiceObject$.new = function() {
    src__copy__web_socket_impl._ServiceObject.new.call(this);
    Stream__ServiceObject$.__proto__.new.call(this);
  }).prototype = Stream__ServiceObject$.prototype;
  (Stream__ServiceObject$._internal = function() {
    src__copy__web_socket_impl._ServiceObject.new.call(this);
    Stream__ServiceObject$.__proto__._internal.call(this);
  }).prototype = Stream__ServiceObject$.prototype;
  dart.applyMixin(Stream__ServiceObject$, src__copy__web_socket_impl._ServiceObject);
  src__copy__web_socket_impl.WebSocketImpl = class WebSocketImpl extends Stream__ServiceObject$ {
    get protocol() {
      return this[protocol$];
    }
    set protocol(value) {
      super.protocol = value;
    }
    listen(onData, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
      return this[_controller$].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
    }
    get pingInterval() {
      return this[_pingInterval];
    }
    set pingInterval(interval) {
      if (dart.test(this[_writeClosed])) return;
      if (this[_pingTimer] != null) this[_pingTimer].cancel();
      this[_pingInterval] = interval;
      if (this[_pingInterval] == null) return;
      this[_pingTimer] = async$.Timer.new(this[_pingInterval], dart.fn(() => {
        if (dart.test(this[_writeClosed])) return;
        this[_consumer].add(new src__copy__web_socket_impl._WebSocketPing.new());
        this[_pingTimer] = async$.Timer.new(this[_pingInterval], dart.fn(() => {
          this[_close](src__copy__web_socket.WebSocketStatus.GOING_AWAY);
        }, VoidToNull()));
      }, VoidToNull()));
    }
    get readyState() {
      return this[_readyState];
    }
    get extensions() {
      return null;
    }
    get closeCode() {
      return this[_closeCode];
    }
    get closeReason() {
      return this[_closeReason];
    }
    add(data) {
      this[_sink].add(data);
    }
    addError(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      this[_sink].addError(error, stackTrace);
    }
    addStream(stream) {
      async$.Stream._check(stream);
      return this[_sink].addStream(stream);
    }
    get done() {
      return this[_sink].done;
    }
    close(code, reason) {
      if (code === void 0) code = null;
      if (reason === void 0) reason = null;
      if (dart.test(src__copy__web_socket_impl.WebSocketImpl._isReservedStatusCode(code))) {
        dart.throw(new src__exception.WebSocketChannelException.new("Reserved status code " + dart.str(code)));
      }
      if (this[_outCloseCode] == null) {
        this[_outCloseCode] = code;
        this[_outCloseReason] = reason;
      }
      if (!dart.test(this[_controller$].isClosed)) {
        if (!dart.test(this[_controller$].hasListener) && this[_subscription] != null) {
          this[_controller$].stream.drain(dart.dynamic).catchError(dart.fn(_ => new _js_helper.LinkedMap.new(), dynamicToMap()));
        }
        if (this[_closeTimer] == null) {
          this[_closeTimer] = async$.Timer.new(const$ || (const$ = dart.const(new core.Duration.new({seconds: 5}))), dart.fn(() => {
            this[_closeCode] = this[_outCloseCode];
            this[_closeReason] = this[_outCloseReason];
            if (this[_subscription] != null) this[_subscription].cancel();
            this[_controller$].close();
            src__copy__web_socket_impl.WebSocketImpl._webSockets[$remove](this[_serviceId]);
          }, VoidToNull()));
        }
      }
      return this[_sink].close();
    }
    [_close](code, reason) {
      if (code === void 0) code = null;
      if (reason === void 0) reason = null;
      if (dart.test(this[_writeClosed])) return;
      if (this[_outCloseCode] == null) {
        this[_outCloseCode] = code;
        this[_outCloseReason] = reason;
      }
      this[_writeClosed] = true;
      this[_consumer].closeSocket();
      src__copy__web_socket_impl.WebSocketImpl._webSockets[$remove](this[_serviceId]);
    }
    static _isReservedStatusCode(code) {
      return code != null && (dart.notNull(code) < dart.notNull(src__copy__web_socket.WebSocketStatus.NORMAL_CLOSURE) || code == src__copy__web_socket.WebSocketStatus.RESERVED_1004 || code == src__copy__web_socket.WebSocketStatus.NO_STATUS_RECEIVED || code == src__copy__web_socket.WebSocketStatus.ABNORMAL_CLOSURE || dart.notNull(code) > dart.notNull(src__copy__web_socket.WebSocketStatus.INTERNAL_SERVER_ERROR) && dart.notNull(code) < dart.notNull(src__copy__web_socket.WebSocketStatus.RESERVED_1015) || dart.notNull(code) >= dart.notNull(src__copy__web_socket.WebSocketStatus.RESERVED_1015) && dart.notNull(code) < 3000);
    }
  };
  (src__copy__web_socket_impl.WebSocketImpl.fromSocket = function(stream, sink, protocol, _serverSide) {
    if (_serverSide === void 0) _serverSide = false;
    this[_controller$] = null;
    this[_subscription] = null;
    this[_sink] = null;
    this[_readyState] = src__copy__web_socket.WebSocket.CONNECTING;
    this[_writeClosed] = false;
    this[_closeCode] = null;
    this[_closeReason] = null;
    this[_pingInterval] = null;
    this[_pingTimer] = null;
    this[_consumer] = null;
    this[_outCloseCode] = null;
    this[_outCloseReason] = null;
    this[_closeTimer] = null;
    this[protocol$] = protocol;
    this[_serverSide$] = _serverSide;
    src__copy__web_socket_impl.WebSocketImpl.__proto__.new.call(this);
    this[_consumer] = new src__copy__web_socket_impl._WebSocketConsumer.new(this, sink);
    this[_sink] = new src__copy__io_sink.StreamSinkImpl.new(this[_consumer]);
    this[_readyState] = src__copy__web_socket.WebSocket.OPEN;
    let transformer = new src__copy__web_socket_impl._WebSocketProtocolTransformer.new(this[_serverSide$]);
    this[_subscription] = transformer.bind(stream).listen(dart.fn(data => {
      if (src__copy__web_socket_impl._WebSocketPing.is(data)) {
        if (!dart.test(this[_writeClosed])) this[_consumer].add(new src__copy__web_socket_impl._WebSocketPong.new(data.payload));
      } else if (src__copy__web_socket_impl._WebSocketPong.is(data)) {
        this.pingInterval = this[_pingInterval];
      } else {
        this[_controller$].add(data);
      }
    }, dynamicToNull()), {onError: dart.fn((error, stackTrace) => {
        if (this[_closeTimer] != null) this[_closeTimer].cancel();
        if (core.FormatException.is(error)) {
          this[_close](src__copy__web_socket.WebSocketStatus.INVALID_FRAME_PAYLOAD_DATA);
        } else {
          this[_close](src__copy__web_socket.WebSocketStatus.PROTOCOL_ERROR);
        }
        this[_closeCode] = this[_outCloseCode];
        this[_closeReason] = this[_outCloseReason];
        this[_controller$].close();
      }, dynamicAnddynamicToNull()), onDone: dart.fn(() => {
        if (this[_closeTimer] != null) this[_closeTimer].cancel();
        if (this[_readyState] == src__copy__web_socket.WebSocket.OPEN) {
          this[_readyState] = src__copy__web_socket.WebSocket.CLOSING;
          if (!dart.test(src__copy__web_socket_impl.WebSocketImpl._isReservedStatusCode(transformer.closeCode))) {
            this[_close](transformer.closeCode, transformer.closeReason);
          } else {
            this[_close]();
          }
          this[_readyState] = src__copy__web_socket.WebSocket.CLOSED;
        }
        this[_closeCode] = transformer.closeCode;
        this[_closeReason] = transformer.closeReason;
        this[_controller$].close();
      }, VoidToNull()), cancelOnError: true});
    this[_subscription].pause();
    this[_controller$] = async$.StreamController.new({sync: true, onListen: dart.fn(() => this[_subscription].resume(), VoidTovoid()), onCancel: dart.fn(() => {
        this[_subscription].cancel();
        this[_subscription] = null;
      }, VoidToNull()), onPause: dart.bind(this[_subscription], 'pause'), onResume: dart.bind(this[_subscription], 'resume')});
    src__copy__web_socket_impl.WebSocketImpl._webSockets[$_set](this[_serviceId], this);
  }).prototype = src__copy__web_socket_impl.WebSocketImpl.prototype;
  dart.addTypeTests(src__copy__web_socket_impl.WebSocketImpl);
  const protocol$ = Symbol("WebSocketImpl.protocol");
  src__copy__web_socket_impl.WebSocketImpl[dart.implements] = () => [async$.StreamSink];
  dart.setMethodSignature(src__copy__web_socket_impl.WebSocketImpl, () => ({
    __proto__: dart.getMethods(src__copy__web_socket_impl.WebSocketImpl.__proto__),
    listen: dart.fnType(async$.StreamSubscription, [dart.fnType(dart.void, [dart.dynamic])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}),
    add: dart.fnType(dart.void, [core.Object]),
    addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
    addStream: dart.fnType(async$.Future, [core.Object]),
    close: dart.fnType(async$.Future, [], [core.int, core.String]),
    [_close]: dart.fnType(dart.void, [], [core.int, core.String])
  }));
  dart.setGetterSignature(src__copy__web_socket_impl.WebSocketImpl, () => ({
    __proto__: dart.getGetters(src__copy__web_socket_impl.WebSocketImpl.__proto__),
    pingInterval: core.Duration,
    readyState: core.int,
    extensions: core.String,
    closeCode: core.int,
    closeReason: core.String,
    done: async$.Future
  }));
  dart.setSetterSignature(src__copy__web_socket_impl.WebSocketImpl, () => ({
    __proto__: dart.getSetters(src__copy__web_socket_impl.WebSocketImpl.__proto__),
    pingInterval: core.Duration
  }));
  dart.setLibraryUri(src__copy__web_socket_impl.WebSocketImpl, "package:web_socket_channel/src/copy/web_socket_impl.dart");
  dart.setFieldSignature(src__copy__web_socket_impl.WebSocketImpl, () => ({
    __proto__: dart.getFields(src__copy__web_socket_impl.WebSocketImpl.__proto__),
    protocol: dart.finalFieldType(core.String),
    [_controller$]: dart.fieldType(async$.StreamController),
    [_subscription]: dart.fieldType(async$.StreamSubscription),
    [_sink]: dart.fieldType(async$.StreamSink),
    [_serverSide$]: dart.finalFieldType(core.bool),
    [_readyState]: dart.fieldType(core.int),
    [_writeClosed]: dart.fieldType(core.bool),
    [_closeCode]: dart.fieldType(core.int),
    [_closeReason]: dart.fieldType(core.String),
    [_pingInterval]: dart.fieldType(core.Duration),
    [_pingTimer]: dart.fieldType(async$.Timer),
    [_consumer]: dart.fieldType(src__copy__web_socket_impl._WebSocketConsumer),
    [_outCloseCode]: dart.fieldType(core.int),
    [_outCloseReason]: dart.fieldType(core.String),
    [_closeTimer]: dart.fieldType(async$.Timer)
  }));
  dart.defineLazy(src__copy__web_socket_impl.WebSocketImpl, {
    /*src__copy__web_socket_impl.WebSocketImpl._webSockets*/get _webSockets() {
      return new (LinkedMapOfint$WebSocketImpl()).new();
    },
    /*src__copy__web_socket_impl.WebSocketImpl.DEFAULT_WINDOW_BITS*/get DEFAULT_WINDOW_BITS() {
      return 15;
    },
    /*src__copy__web_socket_impl.WebSocketImpl.PER_MESSAGE_DEFLATE*/get PER_MESSAGE_DEFLATE() {
      return "permessage-deflate";
    }
  });
  dart.defineLazy(src__copy__web_socket_impl, {
    /*src__copy__web_socket_impl.webSocketGUID*/get webSocketGUID() {
      return "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
    },
    /*src__copy__web_socket_impl._random*/get _random() {
      return math.Random.new();
    },
    /*src__copy__web_socket_impl._nextServiceId*/get _nextServiceId() {
      return 1;
    },
    set _nextServiceId(_) {}
  });
  src__copy__web_socket.WebSocketStatus = class WebSocketStatus extends core.Object {};
  (src__copy__web_socket.WebSocketStatus.new = function() {
    ;
  }).prototype = src__copy__web_socket.WebSocketStatus.prototype;
  dart.addTypeTests(src__copy__web_socket.WebSocketStatus);
  dart.setLibraryUri(src__copy__web_socket.WebSocketStatus, "package:web_socket_channel/src/copy/web_socket.dart");
  dart.defineLazy(src__copy__web_socket.WebSocketStatus, {
    /*src__copy__web_socket.WebSocketStatus.NORMAL_CLOSURE*/get NORMAL_CLOSURE() {
      return 1000;
    },
    /*src__copy__web_socket.WebSocketStatus.GOING_AWAY*/get GOING_AWAY() {
      return 1001;
    },
    /*src__copy__web_socket.WebSocketStatus.PROTOCOL_ERROR*/get PROTOCOL_ERROR() {
      return 1002;
    },
    /*src__copy__web_socket.WebSocketStatus.UNSUPPORTED_DATA*/get UNSUPPORTED_DATA() {
      return 1003;
    },
    /*src__copy__web_socket.WebSocketStatus.RESERVED_1004*/get RESERVED_1004() {
      return 1004;
    },
    /*src__copy__web_socket.WebSocketStatus.NO_STATUS_RECEIVED*/get NO_STATUS_RECEIVED() {
      return 1005;
    },
    /*src__copy__web_socket.WebSocketStatus.ABNORMAL_CLOSURE*/get ABNORMAL_CLOSURE() {
      return 1006;
    },
    /*src__copy__web_socket.WebSocketStatus.INVALID_FRAME_PAYLOAD_DATA*/get INVALID_FRAME_PAYLOAD_DATA() {
      return 1007;
    },
    /*src__copy__web_socket.WebSocketStatus.POLICY_VIOLATION*/get POLICY_VIOLATION() {
      return 1008;
    },
    /*src__copy__web_socket.WebSocketStatus.MESSAGE_TOO_BIG*/get MESSAGE_TOO_BIG() {
      return 1009;
    },
    /*src__copy__web_socket.WebSocketStatus.MISSING_MANDATORY_EXTENSION*/get MISSING_MANDATORY_EXTENSION() {
      return 1010;
    },
    /*src__copy__web_socket.WebSocketStatus.INTERNAL_SERVER_ERROR*/get INTERNAL_SERVER_ERROR() {
      return 1011;
    },
    /*src__copy__web_socket.WebSocketStatus.RESERVED_1015*/get RESERVED_1015() {
      return 1015;
    }
  });
  src__copy__web_socket.WebSocket = class WebSocket extends core.Object {};
  (src__copy__web_socket.WebSocket.new = function() {
    ;
  }).prototype = src__copy__web_socket.WebSocket.prototype;
  dart.addTypeTests(src__copy__web_socket.WebSocket);
  dart.setLibraryUri(src__copy__web_socket.WebSocket, "package:web_socket_channel/src/copy/web_socket.dart");
  dart.defineLazy(src__copy__web_socket.WebSocket, {
    /*src__copy__web_socket.WebSocket.CONNECTING*/get CONNECTING() {
      return 0;
    },
    /*src__copy__web_socket.WebSocket.OPEN*/get OPEN() {
      return 1;
    },
    /*src__copy__web_socket.WebSocket.CLOSING*/get CLOSING() {
      return 2;
    },
    /*src__copy__web_socket.WebSocket.CLOSED*/get CLOSED() {
      return 3;
    }
  });
  src__exception.WebSocketChannelException = class WebSocketChannelException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get inner() {
      return this[inner$];
    }
    set inner(value) {
      super.inner = value;
    }
    toString() {
      return this.message == null ? "WebSocketChannelException" : "WebSocketChannelException: " + dart.str(this.message);
    }
  };
  (src__exception.WebSocketChannelException.new = function(message) {
    if (message === void 0) message = null;
    this[message$] = message;
    this[inner$] = null;
    ;
  }).prototype = src__exception.WebSocketChannelException.prototype;
  (src__exception.WebSocketChannelException.from = function(inner) {
    this[message$] = dart.toString(inner);
    this[inner$] = inner;
    ;
  }).prototype = src__exception.WebSocketChannelException.prototype;
  dart.addTypeTests(src__exception.WebSocketChannelException);
  const message$ = Symbol("WebSocketChannelException.message");
  const inner$ = Symbol("WebSocketChannelException.inner");
  src__exception.WebSocketChannelException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(src__exception.WebSocketChannelException, "package:web_socket_channel/src/exception.dart");
  dart.setFieldSignature(src__exception.WebSocketChannelException, () => ({
    __proto__: dart.getFields(src__exception.WebSocketChannelException.__proto__),
    message: dart.finalFieldType(core.String),
    inner: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(src__exception.WebSocketChannelException, ['toString']);
  dart.trackLibraries("packages/web_socket_channel/src/channel", {
    "package:web_socket_channel/src/copy/io_sink.dart": src__copy__io_sink,
    "package:web_socket_channel/src/copy/bytes_builder.dart": src__copy__bytes_builder,
    "package:web_socket_channel/src/channel.dart": src__channel,
    "package:web_socket_channel/src/copy/web_socket_impl.dart": src__copy__web_socket_impl,
    "package:web_socket_channel/src/copy/web_socket.dart": src__copy__web_socket,
    "package:web_socket_channel/src/exception.dart": src__exception
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/web_socket_channel/src/copy/io_sink.dart","org-dartlang-app:///packages/web_socket_channel/src/copy/bytes_builder.dart","org-dartlang-app:///packages/web_socket_channel/src/channel.dart","org-dartlang-app:///packages/web_socket_channel/src/copy/web_socket_impl.dart","org-dartlang-app:///packages/web_socket_channel/src/copy/web_socket.dart","org-dartlang-app:///packages/web_socket_channel/src/exception.dart"],"names":[],"mappings":"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","file":"channel.ddc.js"}');
  // Exports:
  return {
    src__copy__io_sink: src__copy__io_sink,
    src__copy__bytes_builder: src__copy__bytes_builder,
    src__channel: src__channel,
    src__copy__web_socket_impl: src__copy__web_socket_impl,
    src__copy__web_socket: src__copy__web_socket,
    src__exception: src__exception
  };
});

//# sourceMappingURL=channel.ddc.js.map

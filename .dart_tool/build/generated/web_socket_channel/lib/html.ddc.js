define(['dart_sdk', 'packages/stream_channel/stream_channel', 'packages/web_socket_channel/src/channel', 'packages/async/async'], function(dart_sdk, stream_channel, channel, async) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const typed_data = dart_sdk.typed_data;
  const _js_helper = dart_sdk._js_helper;
  const async$ = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__stream_channel_controller = stream_channel.src__stream_channel_controller;
  const stream_channel$ = stream_channel.stream_channel;
  const src__exception = channel.src__exception;
  const src__copy__web_socket_impl = channel.src__copy__web_socket_impl;
  const src__channel = channel.src__channel;
  const src__delegate__stream_sink = async.src__delegate__stream_sink;
  const html$ = Object.create(dart.library);
  const $toString = dartx.toString;
  const $onOpen = dartx.onOpen;
  const $onError = dartx.onError;
  const $onMessage = dartx.onMessage;
  const $data = dartx.data;
  const $onClose = dartx.onClose;
  const $noSuchMethod = dartx.noSuchMethod;
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let MessageEventToNull = () => (MessageEventToNull = dart.constFn(dart.fnType(core.Null, [html.MessageEvent])))();
  let CloseEventToNull = () => (CloseEventToNull = dart.constFn(dart.fnType(core.Null, [html.CloseEvent])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _closeCode = dart.privateName(html$, "_closeCode");
  const _closeReason = dart.privateName(html$, "_closeReason");
  const _localCloseCode = dart.privateName(html$, "_localCloseCode");
  const _localCloseReason = dart.privateName(html$, "_localCloseReason");
  const _controller = dart.privateName(html$, "_controller");
  const _sink = dart.privateName(html$, "_sink");
  const _webSocket$ = dart.privateName(html$, "_webSocket");
  const _listen = dart.privateName(html$, "_listen");
  let const$;
  const _webSocket = dart.privateName(src__channel, "_webSocket");
  html$.HtmlWebSocketChannel = class HtmlWebSocketChannel extends stream_channel$.StreamChannelMixin {
    get protocol() {
      return this[_webSocket$].protocol;
    }
    get closeCode() {
      return this[_closeCode];
    }
    get closeReason() {
      return this[_closeReason];
    }
    get bufferedAmount() {
      return this[_webSocket$].bufferedAmount;
    }
    get stream() {
      return this[_controller].foreign.stream;
    }
    get sink() {
      return this[_sink];
    }
    [_listen]() {
      this[_controller].local.stream.listen(dart.fn(message => this[_webSocket$].send(message), dynamicTovoid()), {onDone: dart.fn(() => {
          if (this[_localCloseCode] != null && this[_localCloseReason] != null) {
            this[_webSocket$].close(this[_localCloseCode], this[_localCloseReason]);
          } else if (this[_localCloseCode] != null) {
            this[_webSocket$].close(this[_localCloseCode]);
          } else {
            this[_webSocket$].close();
          }
        }, VoidToNull())});
    }
    get [_webSocket]() {
      return src__copy__web_socket_impl.WebSocketImpl._check(this[$noSuchMethod](new core._Invocation.getter(const$ || (const$ = dart.const(new _js_helper.PrivateSymbol.new('_webSocket', _webSocket$))))));
    }
  };
  (html$.HtmlWebSocketChannel.connect = function(url, opts) {
    let t1, t0;
    let protocols = opts && 'protocols' in opts ? opts.protocols : null;
    let binaryType = opts && 'binaryType' in opts ? opts.binaryType : null;
    html$.HtmlWebSocketChannel.new.call(this, (t0 = html.WebSocket.new(dart.toString(url), protocols), t0.binaryType = (t1 = binaryType, t1 == null ? html$.BinaryType.list : t1).value, t0));
  }).prototype = html$.HtmlWebSocketChannel.prototype;
  (html$.HtmlWebSocketChannel.new = function(_webSocket) {
    this[_closeCode] = null;
    this[_closeReason] = null;
    this[_localCloseCode] = null;
    this[_localCloseReason] = null;
    this[_controller] = new src__stream_channel_controller.StreamChannelController.new({sync: true, allowForeignErrors: false});
    this[_sink] = null;
    this[_webSocket$] = _webSocket;
    this[_sink] = new html$._HtmlWebSocketSink.new(this);
    if (this[_webSocket$].readyState == html.WebSocket.OPEN) {
      this[_listen]();
    } else {
      this[_webSocket$][$onOpen].first.then(dart.dynamic, dart.fn(_ => {
        this[_listen]();
      }, EventToNull()));
    }
    this[_webSocket$][$onError].first.then(dart.dynamic, dart.fn(_ => {
      this[_controller].local.sink.addError(new src__exception.WebSocketChannelException.new("WebSocket connection failed."));
      this[_controller].local.sink.close();
    }, EventToNull()));
    this[_webSocket$][$onMessage].listen(dart.fn(event => {
      let data = event[$data];
      if (typed_data.ByteBuffer.is(data)) data = dart.dsend(data, 'asUint8List', []);
      this[_controller].local.sink.add(data);
    }, MessageEventToNull()));
    this[_webSocket$][$onClose].first.then(dart.dynamic, dart.fn(event => {
      this[_closeCode] = event.code;
      this[_closeReason] = event.reason;
      this[_controller].local.sink.close();
    }, CloseEventToNull()));
  }).prototype = html$.HtmlWebSocketChannel.prototype;
  dart.addTypeTests(html$.HtmlWebSocketChannel);
  html$.HtmlWebSocketChannel[dart.implements] = () => [src__channel.WebSocketChannel];
  dart.setMethodSignature(html$.HtmlWebSocketChannel, () => ({
    __proto__: dart.getMethods(html$.HtmlWebSocketChannel.__proto__),
    [_listen]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(html$.HtmlWebSocketChannel, () => ({
    __proto__: dart.getGetters(html$.HtmlWebSocketChannel.__proto__),
    protocol: core.String,
    closeCode: core.int,
    closeReason: core.String,
    bufferedAmount: core.int,
    stream: async$.Stream,
    sink: src__channel.WebSocketSink,
    [_webSocket]: src__copy__web_socket_impl.WebSocketImpl
  }));
  dart.setLibraryUri(html$.HtmlWebSocketChannel, "package:web_socket_channel/html.dart");
  dart.setFieldSignature(html$.HtmlWebSocketChannel, () => ({
    __proto__: dart.getFields(html$.HtmlWebSocketChannel.__proto__),
    [_webSocket$]: dart.finalFieldType(html.WebSocket),
    [_closeCode]: dart.fieldType(core.int),
    [_closeReason]: dart.fieldType(core.String),
    [_localCloseCode]: dart.fieldType(core.int),
    [_localCloseReason]: dart.fieldType(core.String),
    [_controller]: dart.finalFieldType(src__stream_channel_controller.StreamChannelController),
    [_sink]: dart.fieldType(src__channel.WebSocketSink)
  }));
  const _channel = dart.privateName(html$, "_channel");
  let const$0;
  html$._HtmlWebSocketSink = class _HtmlWebSocketSink extends src__delegate__stream_sink.DelegatingStreamSink {
    close(closeCode, closeReason) {
      if (closeCode === void 0) closeCode = null;
      if (closeReason === void 0) closeReason = null;
      this[_channel][_localCloseCode] = closeCode;
      this[_channel][_localCloseReason] = closeReason;
      return super.close();
    }
    get [_webSocket]() {
      return src__copy__web_socket_impl.WebSocketImpl._check(this[$noSuchMethod](new core._Invocation.getter(const$0 || (const$0 = dart.const(new _js_helper.PrivateSymbol.new('_webSocket', _webSocket$))))));
    }
  };
  (html$._HtmlWebSocketSink.new = function(channel) {
    this[_channel] = channel;
    html$._HtmlWebSocketSink.__proto__.new.call(this, channel[_controller].foreign.sink);
    ;
  }).prototype = html$._HtmlWebSocketSink.prototype;
  dart.addTypeTests(html$._HtmlWebSocketSink);
  html$._HtmlWebSocketSink[dart.implements] = () => [src__channel.WebSocketSink];
  dart.setMethodSignature(html$._HtmlWebSocketSink, () => ({
    __proto__: dart.getMethods(html$._HtmlWebSocketSink.__proto__),
    close: dart.fnType(async$.Future, [], [core.int, core.String])
  }));
  dart.setGetterSignature(html$._HtmlWebSocketSink, () => ({
    __proto__: dart.getGetters(html$._HtmlWebSocketSink.__proto__),
    [_webSocket]: src__copy__web_socket_impl.WebSocketImpl
  }));
  dart.setLibraryUri(html$._HtmlWebSocketSink, "package:web_socket_channel/html.dart");
  dart.setFieldSignature(html$._HtmlWebSocketSink, () => ({
    __proto__: dart.getFields(html$._HtmlWebSocketSink.__proto__),
    [_channel]: dart.finalFieldType(html$.HtmlWebSocketChannel)
  }));
  html$.BinaryType = class BinaryType extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    toString() {
      return this.name;
    }
  };
  (html$.BinaryType.__ = function(name, value) {
    this[name$] = name;
    this[value$] = value;
    ;
  }).prototype = html$.BinaryType.prototype;
  dart.addTypeTests(html$.BinaryType);
  const name$ = Symbol("BinaryType.name");
  const value$ = Symbol("BinaryType.value");
  dart.setLibraryUri(html$.BinaryType, "package:web_socket_channel/html.dart");
  dart.setFieldSignature(html$.BinaryType, () => ({
    __proto__: dart.getFields(html$.BinaryType.__proto__),
    name: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(html$.BinaryType, ['toString']);
  dart.defineLazy(html$.BinaryType, {
    /*html$.BinaryType.blob*/get blob() {
      return dart.const(new html$.BinaryType.__("blob", "blob"));
    },
    /*html$.BinaryType.list*/get list() {
      return dart.const(new html$.BinaryType.__("list", "arraybuffer"));
    }
  });
  dart.trackLibraries("packages/web_socket_channel/html", {
    "package:web_socket_channel/html.dart": html$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/web_socket_channel/html.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsByB,YAAA,AAAW;IAAQ;;AAErB;IAAU;;AAGL;IAAY;;AAKZ,YAAA,AAAW;IAAc;;AAc9B,YAAA,AAAY,AAAQ;IAAM;;AAIrB;IAAK;;MA0D7B,AAAY,AAAM,AAAO,sCAAO,QAAC,WAAY,AAAW,uBAAK,OAAO,8BACxD;AAIV,cAAI,yBAAmB,QAAQ,2BAAqB;YAClD,AAAW,wBAAM,uBAAiB;gBAC7B,KAAI,yBAAmB;YAC5B,AAAW,wBAAM;;YAEjB,AAAW;;;IAGjB;;;;;iDAzD6B;;QACP;QAAsB;oDACjC,mBAAc,cAAJ,GAAG,GAAa,SAAS,GACpC,gBAA6C,CAApB,KAAX,UAAU,QAAC,OAAc;EAAY;6CAGnC;IA7CtB;IAGG;IAUH;IAMG;IAGD,oBACF,sEAA8B,0BAA0B;IAG9C;IAmBY;IACxB,cAAQ,iCAAmB;AAE3B,QAAI,AAAW,AAAW,gCAAa;MACrC;;MAIA,AAAW,AAAO,AAAM,oDAAK,QAAC;QAC5B;;;IAMJ,AAAW,AAAQ,AAAM,qDAAK,QAAC;MAC7B,AAAY,AAAM,AACb,sCAAS,iDAA0B;MACxC,AAAY,AAAM,AAAK;;IAGzB,AAAW,AAAU,qCAAO,QAAC;AACvB,iBAAO,AAAM,KAAD;AAChB,UAAS,yBAAL,IAAI,GAAgB,OAAY,WAAL,IAAI;MACnC,AAAY,AAAM,AAAK,iCAAI,IAAI;;IAKjC,AAAW,AAAQ,AAAM,qDAAK,QAAC;MAC7B,mBAAa,AAAM,KAAD;MAClB,qBAAe,AAAM,KAAD;MACpB,AAAY,AAAM,AAAK;;EAE3B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA6BkB,WAAkB;;;MAClC,AAAS,kCAAkB,SAAS;MACpC,AAAS,oCAAoB,WAAW;AACxC,YAAa;IACf;;;;;2CARwC;IACzB,iBAAE,OAAO;AAClB,sDAAM,AAAQ,AAAY,AAAQ,OAArB;;EAA0B;;;;;;;;;;;;;;;;;IAmBhC;;;;;;IAGA;;;;;;;AAIQ;IAAI;;kCAFD,MAAW;IAAX;IAAW;;EAAM;;;;;;;;;;;;MAX5B,qBAAI;YAAc,oCAAE,QAAQ;;MAG5B,qBAAI;YAAc,oCAAE,QAAQ","file":"html.ddc.js"}');
  // Exports:
  return {
    html: html$
  };
});

//# sourceMappingURL=html.ddc.js.map

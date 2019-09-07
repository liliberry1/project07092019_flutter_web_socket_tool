define(['dart_sdk', 'packages/async/async'], function(dart_sdk, async) {
  'use strict';
  const core = dart_sdk.core;
  const async$ = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__single_subscription_transformer = async.src__single_subscription_transformer;
  const src__stream_sink_transformer = async.src__stream_sink_transformer;
  const src__delegate__stream = async.src__delegate__stream;
  const src__delegate__stream_sink = async.src__delegate__stream_sink;
  const src__stream_sink_transformer__stream_transformer_wrapper = async.src__stream_sink_transformer__stream_transformer_wrapper;
  const src__stream_completer = async.src__stream_completer;
  const src__stream_sink_completer = async.src__stream_sink_completer;
  const src__null_stream_sink = async.src__null_stream_sink;
  const src__async_memoizer = async.src__async_memoizer;
  const src__guarantee_channel = Object.create(dart.library);
  const stream_channel = Object.create(dart.library);
  const src__stream_channel_transformer = Object.create(dart.library);
  const src__stream_channel_controller = Object.create(dart.library);
  const src__stream_channel_completer = Object.create(dart.library);
  const src__multi_channel = Object.create(dart.library);
  const src__json_document_transformer = Object.create(dart.library);
  const src__disconnector = Object.create(dart.library);
  const src__delegating_stream_channel = Object.create(dart.library);
  const src__close_guarantee_channel = Object.create(dart.library);
  const $_set = dartx._set;
  const $putIfAbsent = dartx.putIfAbsent;
  const $_get = dartx._get;
  const $containsKey = dartx.containsKey;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $values = dartx.values;
  const $clear = dartx.clear;
  const $noSuchMethod = dartx.noSuchMethod;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $add = dartx.add;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async$.Future$(dart.void)))();
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let StreamChannelOfString = () => (StreamChannelOfString = dart.constFn(stream_channel.StreamChannel$(core.String)))();
  let ObjectAndObjectToObject = () => (ObjectAndObjectToObject = dart.constFn(dart.fnType(core.Object, [core.Object, core.Object])))();
  let String__Todynamic = () => (String__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [core.String], {reviver: ObjectAndObjectToObject()})))();
  let StreamSinkTransformerOfObject$String = () => (StreamSinkTransformerOfObject$String = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(core.Object, core.String)))();
  let EventSinkOfString = () => (EventSinkOfString = dart.constFn(async$.EventSink$(core.String)))();
  let ObjectAndEventSinkOfStringToNull = () => (ObjectAndEventSinkOfStringToNull = dart.constFn(dart.fnType(core.Null, [core.Object, EventSinkOfString()])))();
  let StreamChannelOfObject = () => (StreamChannelOfObject = dart.constFn(stream_channel.StreamChannel$(core.Object)))();
  let StreamTransformerOfString$Object = () => (StreamTransformerOfString$Object = dart.constFn(async$.StreamTransformer$(core.String, core.Object)))();
  let ListOfvoid = () => (ListOfvoid = dart.constFn(core.List$(dart.void)))();
  let FutureOfListOfvoid = () => (FutureOfListOfvoid = dart.constFn(async$.Future$(ListOfvoid())))();
  let VoidToFutureOfListOfvoid = () => (VoidToFutureOfListOfvoid = dart.constFn(dart.fnType(FutureOfListOfvoid(), [])))();
  const _sink = dart.privateName(src__guarantee_channel, "_sink");
  const _streamController = dart.privateName(src__guarantee_channel, "_streamController");
  const _subscription = dart.privateName(src__guarantee_channel, "_subscription");
  const _disconnected = dart.privateName(src__guarantee_channel, "_disconnected");
  const _onStreamDisconnected = dart.privateName(src__guarantee_channel, "_onStreamDisconnected");
  const _onSinkDisconnected = dart.privateName(src__guarantee_channel, "_onSinkDisconnected");
  const _is_StreamChannelMixin_default = Symbol('_is_StreamChannelMixin_default');
  stream_channel.StreamChannelMixin$ = dart.generic(T => {
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async$.StreamTransformer$(T, T)))();
    let StreamSinkTransformerOfT$T = () => (StreamSinkTransformerOfT$T = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(T, T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async$.Stream$(T)))();
    let StreamOfTToStreamOfT = () => (StreamOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [StreamOfT()])))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async$.StreamSink$(T)))();
    let StreamSinkOfTToStreamSinkOfT = () => (StreamSinkOfTToStreamSinkOfT = dart.constFn(dart.fnType(StreamSinkOfT(), [StreamSinkOfT()])))();
    class StreamChannelMixin extends core.Object {
      pipe(other) {
        StreamChannelOfT()._check(other);
        this.stream.pipe(other.sink);
        other.stream.pipe(this.sink);
      }
      transform(S, transformer) {
        src__stream_channel_transformer.StreamChannelTransformer$(S, T)._check(transformer);
        return transformer.bind(this);
      }
      transformStream(transformer) {
        StreamTransformerOfT$T()._check(transformer);
        return this.changeStream(dart.bind(transformer, 'bind'));
      }
      transformSink(transformer) {
        StreamSinkTransformerOfT$T()._check(transformer);
        return this.changeSink(dart.bind(transformer, 'bind'));
      }
      changeStream(change) {
        StreamOfTToStreamOfT()._check(change);
        return StreamChannelOfT().withCloseGuarantee(change(this.stream), this.sink);
      }
      changeSink(change) {
        StreamSinkOfTToStreamSinkOfT()._check(change);
        return StreamChannelOfT().withCloseGuarantee(this.stream, change(this.sink));
      }
      cast(S) {
        return stream_channel.StreamChannel$(S).new(src__delegate__stream.DelegatingStream.typed(S, this.stream), src__delegate__stream_sink.DelegatingStreamSink.typed(S, this.sink));
      }
    }
    (StreamChannelMixin.new = function() {
      ;
    }).prototype = StreamChannelMixin.prototype;
    dart.addTypeTests(StreamChannelMixin);
    StreamChannelMixin.prototype[_is_StreamChannelMixin_default] = true;
    StreamChannelMixin[dart.implements] = () => [stream_channel.StreamChannel$(T)];
    dart.setMethodSignature(StreamChannelMixin, () => ({
      __proto__: dart.getMethods(StreamChannelMixin.__proto__),
      pipe: dart.fnType(dart.void, [core.Object]),
      transform: dart.gFnType(S => [stream_channel.StreamChannel$(S), [core.Object]]),
      transformStream: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      transformSink: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      changeStream: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      changeSink: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      cast: dart.gFnType(S => [stream_channel.StreamChannel$(S), []])
    }));
    dart.setLibraryUri(StreamChannelMixin, "package:stream_channel/stream_channel.dart");
    return StreamChannelMixin;
  });
  stream_channel.StreamChannelMixin = stream_channel.StreamChannelMixin$();
  dart.addTypeTests(stream_channel.StreamChannelMixin, _is_StreamChannelMixin_default);
  const _is_GuaranteeChannel_default = Symbol('_is_GuaranteeChannel_default');
  src__guarantee_channel.GuaranteeChannel$ = dart.generic(T => {
    let _GuaranteeSinkOfT = () => (_GuaranteeSinkOfT = dart.constFn(src__guarantee_channel._GuaranteeSink$(T)))();
    let SingleSubscriptionTransformerOfT$T = () => (SingleSubscriptionTransformerOfT$T = dart.constFn(src__single_subscription_transformer.SingleSubscriptionTransformer$(T, T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async$.StreamController$(T)))();
    class GuaranteeChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[_streamController].stream;
      }
      get sink() {
        return this[_sink];
      }
      [_onSinkDisconnected]() {
        this[_disconnected] = true;
        if (this[_subscription] != null) this[_subscription].cancel();
        this[_streamController].close();
      }
    }
    (GuaranteeChannel.new = function(innerStream, innerSink, opts) {
      let allowSinkErrors = opts && 'allowSinkErrors' in opts ? opts.allowSinkErrors : true;
      this[_sink] = null;
      this[_streamController] = null;
      this[_subscription] = null;
      this[_disconnected] = false;
      this[_sink] = new (_GuaranteeSinkOfT()).new(innerSink, this, {allowErrors: allowSinkErrors});
      if (dart.test(innerStream.isBroadcast)) {
        innerStream = innerStream.transform(T, new (SingleSubscriptionTransformerOfT$T()).new());
      }
      this[_streamController] = StreamControllerOfT().new({onListen: dart.fn(() => {
          if (dart.test(this[_disconnected])) return;
          this[_subscription] = innerStream.listen(dart.bind(this[_streamController], 'add'), {onError: dart.bind(this[_streamController], 'addError'), onDone: dart.fn(() => {
              this[_sink][_onStreamDisconnected]();
              this[_streamController].close();
            }, VoidToNull())});
        }, VoidToNull()), sync: true});
    }).prototype = GuaranteeChannel.prototype;
    dart.addTypeTests(GuaranteeChannel);
    GuaranteeChannel.prototype[_is_GuaranteeChannel_default] = true;
    dart.setMethodSignature(GuaranteeChannel, () => ({
      __proto__: dart.getMethods(GuaranteeChannel.__proto__),
      [_onSinkDisconnected]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(GuaranteeChannel, () => ({
      __proto__: dart.getGetters(GuaranteeChannel.__proto__),
      stream: async$.Stream$(T),
      sink: async$.StreamSink$(T)
    }));
    dart.setLibraryUri(GuaranteeChannel, "package:stream_channel/src/guarantee_channel.dart");
    dart.setFieldSignature(GuaranteeChannel, () => ({
      __proto__: dart.getFields(GuaranteeChannel.__proto__),
      [_sink]: dart.fieldType(src__guarantee_channel._GuaranteeSink$(T)),
      [_streamController]: dart.fieldType(async$.StreamController$(T)),
      [_subscription]: dart.fieldType(async$.StreamSubscription$(T)),
      [_disconnected]: dart.fieldType(core.bool)
    }));
    return GuaranteeChannel;
  });
  src__guarantee_channel.GuaranteeChannel = src__guarantee_channel.GuaranteeChannel$();
  dart.addTypeTests(src__guarantee_channel.GuaranteeChannel, _is_GuaranteeChannel_default);
  const _doneCompleter = dart.privateName(src__guarantee_channel, "_doneCompleter");
  const _closed = dart.privateName(src__guarantee_channel, "_closed");
  const _addStreamSubscription = dart.privateName(src__guarantee_channel, "_addStreamSubscription");
  const _addStreamCompleter = dart.privateName(src__guarantee_channel, "_addStreamCompleter");
  const _inner$ = dart.privateName(src__guarantee_channel, "_inner");
  const _channel$ = dart.privateName(src__guarantee_channel, "_channel");
  const _allowErrors = dart.privateName(src__guarantee_channel, "_allowErrors");
  const _inAddStream = dart.privateName(src__guarantee_channel, "_inAddStream");
  const _addError = dart.privateName(src__guarantee_channel, "_addError");
  const _is__GuaranteeSink_default = Symbol('_is__GuaranteeSink_default');
  src__guarantee_channel._GuaranteeSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async$.Stream$(T)))();
    class _GuaranteeSink extends core.Object {
      get done() {
        return this[_doneCompleter].future;
      }
      get [_inAddStream]() {
        return this[_addStreamSubscription] != null;
      }
      add(data) {
        T._check(data);
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_disconnected])) return;
        this[_inner$].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_disconnected])) return;
        this[_addError](error, stackTrace);
      }
      [_addError](error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_allowErrors])) {
          this[_inner$].addError(error, stackTrace);
          return;
        }
        this[_doneCompleter].completeError(error, stackTrace);
        this[_onStreamDisconnected]();
        this[_channel$][_onSinkDisconnected]();
        this[_inner$].close().catchError(dart.fn(_ => {
        }, dynamicToNull()));
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add stream after closing."));
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot add stream while adding stream."));
        }
        if (dart.test(this[_disconnected])) return FutureOfvoid().value();
        this[_addStreamCompleter] = async$.Completer.sync();
        this[_addStreamSubscription] = stream.listen(dart.bind(this[_inner$], 'add'), {onError: dart.bind(this, _addError), onDone: dart.bind(this[_addStreamCompleter], 'complete')});
        return this[_addStreamCompleter].future.then(dart.void, dart.fn(_ => {
          this[_addStreamCompleter] = null;
          this[_addStreamSubscription] = null;
        }, dynamicToNull()));
      }
      close() {
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot close sink while adding stream."));
        }
        if (dart.test(this[_closed])) return this.done;
        this[_closed] = true;
        if (!dart.test(this[_disconnected])) {
          this[_channel$][_onSinkDisconnected]();
          this[_doneCompleter].complete(this[_inner$].close());
        }
        return this.done;
      }
      [_onStreamDisconnected]() {
        this[_disconnected] = true;
        if (!dart.test(this[_doneCompleter].isCompleted)) this[_doneCompleter].complete();
        if (!dart.test(this[_inAddStream])) return;
        this[_addStreamCompleter].complete(this[_addStreamSubscription].cancel());
        this[_addStreamCompleter] = null;
        this[_addStreamSubscription] = null;
      }
    }
    (_GuaranteeSink.new = function(_inner, _channel, opts) {
      let allowErrors = opts && 'allowErrors' in opts ? opts.allowErrors : true;
      this[_doneCompleter] = async$.Completer.new();
      this[_disconnected] = false;
      this[_closed] = false;
      this[_addStreamSubscription] = null;
      this[_addStreamCompleter] = null;
      this[_inner$] = _inner;
      this[_channel$] = _channel;
      this[_allowErrors] = allowErrors;
      ;
    }).prototype = _GuaranteeSink.prototype;
    dart.addTypeTests(_GuaranteeSink);
    _GuaranteeSink.prototype[_is__GuaranteeSink_default] = true;
    _GuaranteeSink[dart.implements] = () => [async$.StreamSink$(T)];
    dart.setMethodSignature(_GuaranteeSink, () => ({
      __proto__: dart.getMethods(_GuaranteeSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      [_addError]: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace]),
      addStream: dart.fnType(async$.Future$(dart.void), [core.Object]),
      close: dart.fnType(async$.Future$(dart.void), []),
      [_onStreamDisconnected]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_GuaranteeSink, () => ({
      __proto__: dart.getGetters(_GuaranteeSink.__proto__),
      done: async$.Future$(dart.void),
      [_inAddStream]: core.bool
    }));
    dart.setLibraryUri(_GuaranteeSink, "package:stream_channel/src/guarantee_channel.dart");
    dart.setFieldSignature(_GuaranteeSink, () => ({
      __proto__: dart.getFields(_GuaranteeSink.__proto__),
      [_inner$]: dart.finalFieldType(async$.StreamSink$(T)),
      [_channel$]: dart.finalFieldType(src__guarantee_channel.GuaranteeChannel$(T)),
      [_doneCompleter]: dart.finalFieldType(async$.Completer),
      [_disconnected]: dart.fieldType(core.bool),
      [_closed]: dart.fieldType(core.bool),
      [_addStreamSubscription]: dart.fieldType(async$.StreamSubscription$(T)),
      [_addStreamCompleter]: dart.fieldType(async$.Completer),
      [_allowErrors]: dart.finalFieldType(core.bool)
    }));
    return _GuaranteeSink;
  });
  src__guarantee_channel._GuaranteeSink = src__guarantee_channel._GuaranteeSink$();
  dart.addTypeTests(src__guarantee_channel._GuaranteeSink, _is__GuaranteeSink_default);
  const _is_StreamChannel_default = Symbol('_is_StreamChannel_default');
  stream_channel.StreamChannel$ = dart.generic(T => {
    class StreamChannel extends core.Object {
      static new(stream, sink) {
        return new (stream_channel._StreamChannel$(T)).new(stream, sink);
      }
      static withGuarantees(stream, sink, opts) {
        let allowSinkErrors = opts && 'allowSinkErrors' in opts ? opts.allowSinkErrors : true;
        return new (src__guarantee_channel.GuaranteeChannel$(T)).new(stream, sink, {allowSinkErrors: allowSinkErrors});
      }
      static withCloseGuarantee(stream, sink) {
        return new (src__close_guarantee_channel.CloseGuaranteeChannel$(T)).new(stream, sink);
      }
    }
    (StreamChannel[dart.mixinNew] = function() {
    }).prototype = StreamChannel.prototype;
    dart.addTypeTests(StreamChannel);
    StreamChannel.prototype[_is_StreamChannel_default] = true;
    dart.setLibraryUri(StreamChannel, "package:stream_channel/stream_channel.dart");
    return StreamChannel;
  });
  stream_channel.StreamChannel = stream_channel.StreamChannel$();
  dart.addTypeTests(stream_channel.StreamChannel, _is_StreamChannel_default);
  const _is__StreamChannel_default = Symbol('_is__StreamChannel_default');
  stream_channel._StreamChannel$ = dart.generic(T => {
    class _StreamChannel extends stream_channel.StreamChannelMixin$(T) {}
    (_StreamChannel.new = function(stream, sink) {
      this.stream = stream;
      this.sink = sink;
      ;
    }).prototype = _StreamChannel.prototype;
    dart.addTypeTests(_StreamChannel);
    _StreamChannel.prototype[_is__StreamChannel_default] = true;
    dart.setLibraryUri(_StreamChannel, "package:stream_channel/stream_channel.dart");
    dart.setFieldSignature(_StreamChannel, () => ({
      __proto__: dart.getFields(_StreamChannel.__proto__),
      stream: dart.finalFieldType(async$.Stream$(T)),
      sink: dart.finalFieldType(async$.StreamSink$(T))
    }));
    return _StreamChannel;
  });
  stream_channel._StreamChannel = stream_channel._StreamChannel$();
  dart.addTypeTests(stream_channel._StreamChannel, _is__StreamChannel_default);
  const _streamTransformer$ = dart.privateName(src__stream_channel_transformer, "_streamTransformer");
  const _sinkTransformer$ = dart.privateName(src__stream_channel_transformer, "_sinkTransformer");
  const _is_StreamChannelTransformer_default = Symbol('_is_StreamChannelTransformer_default');
  src__stream_channel_transformer.StreamChannelTransformer$ = dart.generic((S, T) => {
    let StreamTransformerWrapperOfS$T = () => (StreamTransformerWrapperOfS$T = dart.constFn(src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper$(S, T)))();
    let StreamChannelOfS = () => (StreamChannelOfS = dart.constFn(stream_channel.StreamChannel$(S)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    class StreamChannelTransformer extends core.Object {
      bind(channel) {
        StreamChannelOfT()._check(channel);
        return StreamChannelOfS().withCloseGuarantee(channel.stream.transform(S, this[_streamTransformer$]), this[_sinkTransformer$].bind(channel.sink));
      }
    }
    (StreamChannelTransformer.new = function(_streamTransformer, _sinkTransformer) {
      this[_streamTransformer$] = _streamTransformer;
      this[_sinkTransformer$] = _sinkTransformer;
      ;
    }).prototype = StreamChannelTransformer.prototype;
    (StreamChannelTransformer.fromCodec = function(codec) {
      StreamChannelTransformer.new.call(this, codec.decoder, new (StreamTransformerWrapperOfS$T()).new(codec.encoder));
    }).prototype = StreamChannelTransformer.prototype;
    dart.addTypeTests(StreamChannelTransformer);
    StreamChannelTransformer.prototype[_is_StreamChannelTransformer_default] = true;
    dart.setMethodSignature(StreamChannelTransformer, () => ({
      __proto__: dart.getMethods(StreamChannelTransformer.__proto__),
      bind: dart.fnType(stream_channel.StreamChannel$(S), [core.Object])
    }));
    dart.setLibraryUri(StreamChannelTransformer, "package:stream_channel/src/stream_channel_transformer.dart");
    dart.setFieldSignature(StreamChannelTransformer, () => ({
      __proto__: dart.getFields(StreamChannelTransformer.__proto__),
      [_streamTransformer$]: dart.finalFieldType(async$.StreamTransformer$(T, S)),
      [_sinkTransformer$]: dart.finalFieldType(src__stream_sink_transformer.StreamSinkTransformer$(S, T))
    }));
    return StreamChannelTransformer;
  });
  src__stream_channel_transformer.StreamChannelTransformer = src__stream_channel_transformer.StreamChannelTransformer$();
  dart.addTypeTests(src__stream_channel_transformer.StreamChannelTransformer, _is_StreamChannelTransformer_default);
  const _local = dart.privateName(src__stream_channel_controller, "_local");
  const _foreign = dart.privateName(src__stream_channel_controller, "_foreign");
  const _is_StreamChannelController_default = Symbol('_is_StreamChannelController_default');
  src__stream_channel_controller.StreamChannelController$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async$.StreamController$(T)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    class StreamChannelController extends core.Object {
      get local() {
        return this[_local];
      }
      get foreign() {
        return this[_foreign];
      }
    }
    (StreamChannelController.new = function(opts) {
      let allowForeignErrors = opts && 'allowForeignErrors' in opts ? opts.allowForeignErrors : true;
      let sync = opts && 'sync' in opts ? opts.sync : false;
      this[_local] = null;
      this[_foreign] = null;
      let localToForeignController = StreamControllerOfT().new({sync: sync});
      let foreignToLocalController = StreamControllerOfT().new({sync: sync});
      this[_local] = StreamChannelOfT().withGuarantees(foreignToLocalController.stream, localToForeignController.sink);
      this[_foreign] = StreamChannelOfT().withGuarantees(localToForeignController.stream, foreignToLocalController.sink, {allowSinkErrors: allowForeignErrors});
    }).prototype = StreamChannelController.prototype;
    dart.addTypeTests(StreamChannelController);
    StreamChannelController.prototype[_is_StreamChannelController_default] = true;
    dart.setGetterSignature(StreamChannelController, () => ({
      __proto__: dart.getGetters(StreamChannelController.__proto__),
      local: stream_channel.StreamChannel$(T),
      foreign: stream_channel.StreamChannel$(T)
    }));
    dart.setLibraryUri(StreamChannelController, "package:stream_channel/src/stream_channel_controller.dart");
    dart.setFieldSignature(StreamChannelController, () => ({
      __proto__: dart.getFields(StreamChannelController.__proto__),
      [_local]: dart.fieldType(stream_channel.StreamChannel$(T)),
      [_foreign]: dart.fieldType(stream_channel.StreamChannel$(T))
    }));
    return StreamChannelController;
  });
  src__stream_channel_controller.StreamChannelController = src__stream_channel_controller.StreamChannelController$();
  dart.addTypeTests(src__stream_channel_controller.StreamChannelController, _is_StreamChannelController_default);
  const _streamCompleter = dart.privateName(src__stream_channel_completer, "_streamCompleter");
  const _sinkCompleter = dart.privateName(src__stream_channel_completer, "_sinkCompleter");
  const _channel = dart.privateName(src__stream_channel_completer, "_channel");
  const _set = dart.privateName(src__stream_channel_completer, "_set");
  const _is_StreamChannelCompleter_default = Symbol('_is_StreamChannelCompleter_default');
  src__stream_channel_completer.StreamChannelCompleter$ = dart.generic(T => {
    let StreamCompleterOfT = () => (StreamCompleterOfT = dart.constFn(src__stream_completer.StreamCompleter$(T)))();
    let StreamSinkCompleterOfT = () => (StreamSinkCompleterOfT = dart.constFn(src__stream_sink_completer.StreamSinkCompleter$(T)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    let NullStreamSinkOfT = () => (NullStreamSinkOfT = dart.constFn(src__null_stream_sink.NullStreamSink$(T)))();
    class StreamChannelCompleter extends core.Object {
      get channel() {
        return this[_channel];
      }
      static fromFuture(channelFuture) {
        let completer = new src__stream_channel_completer.StreamChannelCompleter.new();
        channelFuture.then(dart.void, dart.bind(completer, 'setChannel'), {onError: dart.bind(completer, 'setError')});
        return completer.channel;
      }
      setChannel(channel) {
        StreamChannelOfT()._check(channel);
        if (dart.test(this[_set])) dart.throw(new core.StateError.new("The channel has already been set."));
        this[_set] = true;
        this[_streamCompleter].setSourceStream(channel.stream);
        this[_sinkCompleter].setDestinationSink(channel.sink);
      }
      setError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_set])) dart.throw(new core.StateError.new("The channel has already been set."));
        this[_set] = true;
        this[_streamCompleter].setError(error, stackTrace);
        this[_sinkCompleter].setDestinationSink(new (NullStreamSinkOfT()).new());
      }
    }
    (StreamChannelCompleter.new = function() {
      this[_streamCompleter] = new (StreamCompleterOfT()).new();
      this[_sinkCompleter] = new (StreamSinkCompleterOfT()).new();
      this[_channel] = null;
      this[_set] = false;
      this[_channel] = StreamChannelOfT().new(this[_streamCompleter].stream, this[_sinkCompleter].sink);
    }).prototype = StreamChannelCompleter.prototype;
    dart.addTypeTests(StreamChannelCompleter);
    StreamChannelCompleter.prototype[_is_StreamChannelCompleter_default] = true;
    dart.setMethodSignature(StreamChannelCompleter, () => ({
      __proto__: dart.getMethods(StreamChannelCompleter.__proto__),
      setChannel: dart.fnType(dart.void, [core.Object]),
      setError: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace])
    }));
    dart.setGetterSignature(StreamChannelCompleter, () => ({
      __proto__: dart.getGetters(StreamChannelCompleter.__proto__),
      channel: stream_channel.StreamChannel$(T)
    }));
    dart.setLibraryUri(StreamChannelCompleter, "package:stream_channel/src/stream_channel_completer.dart");
    dart.setFieldSignature(StreamChannelCompleter, () => ({
      __proto__: dart.getFields(StreamChannelCompleter.__proto__),
      [_streamCompleter]: dart.finalFieldType(src__stream_completer.StreamCompleter$(T)),
      [_sinkCompleter]: dart.finalFieldType(src__stream_sink_completer.StreamSinkCompleter$(T)),
      [_channel]: dart.fieldType(stream_channel.StreamChannel$(T)),
      [_set]: dart.fieldType(core.bool)
    }));
    return StreamChannelCompleter;
  });
  src__stream_channel_completer.StreamChannelCompleter = src__stream_channel_completer.StreamChannelCompleter$();
  dart.addTypeTests(src__stream_channel_completer.StreamChannelCompleter, _is_StreamChannelCompleter_default);
  const _is_MultiChannel_default = Symbol('_is_MultiChannel_default');
  src__multi_channel.MultiChannel$ = dart.generic(T => {
    class MultiChannel extends core.Object {
      static new(inner) {
        return new (src__multi_channel._MultiChannel$(T)).new(inner);
      }
    }
    (MultiChannel[dart.mixinNew] = function() {
    }).prototype = MultiChannel.prototype;
    dart.addTypeTests(MultiChannel);
    MultiChannel.prototype[_is_MultiChannel_default] = true;
    MultiChannel[dart.implements] = () => [stream_channel.StreamChannel$(T)];
    dart.setLibraryUri(MultiChannel, "package:stream_channel/src/multi_channel.dart");
    return MultiChannel;
  });
  src__multi_channel.MultiChannel = src__multi_channel.MultiChannel$();
  dart.addTypeTests(src__multi_channel.MultiChannel, _is_MultiChannel_default);
  const _innerStreamSubscription = dart.privateName(src__multi_channel, "_innerStreamSubscription");
  const _mainController = dart.privateName(src__multi_channel, "_mainController");
  const _controllers = dart.privateName(src__multi_channel, "_controllers");
  const _pendingIds = dart.privateName(src__multi_channel, "_pendingIds");
  const _closedIds = dart.privateName(src__multi_channel, "_closedIds");
  const _nextId = dart.privateName(src__multi_channel, "_nextId");
  const _inner$0 = dart.privateName(src__multi_channel, "_inner");
  const _closeChannel = dart.privateName(src__multi_channel, "_closeChannel");
  const _closeInnerChannel = dart.privateName(src__multi_channel, "_closeInnerChannel");
  const _is__MultiChannel_default = Symbol('_is__MultiChannel_default');
  src__multi_channel._MultiChannel$ = dart.generic(T => {
    let StreamChannelControllerOfT = () => (StreamChannelControllerOfT = dart.constFn(src__stream_channel_controller.StreamChannelController$(T)))();
    let IdentityMapOfint$StreamChannelControllerOfT = () => (IdentityMapOfint$StreamChannelControllerOfT = dart.constFn(_js_helper.IdentityMap$(core.int, StreamChannelControllerOfT())))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let VoidToStreamChannelControllerOfT = () => (VoidToStreamChannelControllerOfT = dart.constFn(dart.fnType(StreamChannelControllerOfT(), [])))();
    let VirtualChannelOfT = () => (VirtualChannelOfT = dart.constFn(src__multi_channel.VirtualChannel$(T)))();
    let _EmptyStreamOfT = () => (_EmptyStreamOfT = dart.constFn(async$._EmptyStream$(T)))();
    let NullStreamSinkOfT = () => (NullStreamSinkOfT = dart.constFn(src__null_stream_sink.NullStreamSink$(T)))();
    class _MultiChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[_mainController].foreign.stream;
      }
      get sink() {
        return this[_mainController].foreign.sink;
      }
      virtualChannel(id) {
        if (id === void 0) id = null;
        let inputId = null;
        let outputId = null;
        if (id != null) {
          inputId = id;
          outputId = dart.notNull(id) + 1;
        } else {
          inputId = dart.notNull(this[_nextId]) + 1;
          outputId = this[_nextId];
          this[_nextId] = dart.notNull(this[_nextId]) + 2;
        }
        if (this[_inner$0] == null) {
          return new (VirtualChannelOfT()).__(this, inputId, new (_EmptyStreamOfT()).new(), new (NullStreamSinkOfT()).new());
        }
        let controller = null;
        if (dart.test(this[_pendingIds].remove(inputId))) {
          controller = this[_controllers][$_get](inputId);
        } else if (dart.test(this[_controllers][$containsKey](inputId)) || dart.test(this[_closedIds].contains(inputId))) {
          dart.throw(new core.ArgumentError.new("A virtual channel with id " + dart.str(id) + " already exists."));
        } else {
          controller = new (StreamChannelControllerOfT()).new({sync: true});
          this[_controllers][$_set](inputId, controller);
        }
        controller.local.stream.listen(dart.fn(message => this[_inner$0].sink.add(JSArrayOfObject().of([outputId, message])), TTovoid()), {onDone: dart.fn(() => this[_closeChannel](inputId, outputId), VoidTovoid())});
        return new (VirtualChannelOfT()).__(this, outputId, controller.foreign.stream, controller.foreign.sink);
      }
      [_closeChannel](inputId, outputId) {
        this[_closedIds].add(inputId);
        let controller = this[_controllers][$remove](inputId);
        controller.local.sink.close();
        if (this[_inner$0] == null) return;
        this[_inner$0].sink.add(JSArrayOfint().of([outputId]));
        if (dart.test(this[_controllers][$isEmpty])) this[_closeInnerChannel]();
      }
      [_closeInnerChannel]() {
        this[_inner$0].sink.close();
        this[_innerStreamSubscription].cancel();
        this[_inner$0] = null;
        for (let controller of core.List.from(this[_controllers][$values])) {
          dart.dsend(dart.dload(dart.dload(controller, 'local'), 'sink'), 'close', []);
        }
        this[_controllers][$clear]();
      }
    }
    (_MultiChannel.new = function(_inner) {
      this[_innerStreamSubscription] = null;
      this[_mainController] = new (StreamChannelControllerOfT()).new({sync: true});
      this[_controllers] = new (IdentityMapOfint$StreamChannelControllerOfT()).new();
      this[_pendingIds] = new (_IdentityHashSetOfint()).new();
      this[_closedIds] = new (_IdentityHashSetOfint()).new();
      this[_nextId] = 1;
      this[_inner$0] = _inner;
      this[_controllers][$_set](0, this[_mainController]);
      this[_mainController].local.stream.listen(dart.fn(message => this[_inner$0].sink.add(JSArrayOfObject().of([0, message])), TTovoid()), {onDone: dart.fn(() => this[_closeChannel](0, 0), VoidTovoid())});
      this[_innerStreamSubscription] = this[_inner$0].stream.listen(dart.fn(message => {
        let id = dart.dsend(message, '_get', [0]);
        if (dart.test(this[_closedIds].contains(id))) return;
        let controller = this[_controllers][$putIfAbsent](core.int._check(id), dart.fn(() => {
          this[_pendingIds].add(core.int._check(id));
          return new (StreamChannelControllerOfT()).new({sync: true});
        }, VoidToStreamChannelControllerOfT()));
        if (dart.dtest(dart.dsend(dart.dload(message, 'length'), '>', [1]))) {
          controller.local.sink.add(T._check(dart.dsend(message, '_get', [1])));
        } else {
          controller.local.sink.close();
        }
      }, dynamicToNull()), {onDone: dart.bind(this, _closeInnerChannel), onError: dart.bind(this[_mainController].local.sink, 'addError')});
    }).prototype = _MultiChannel.prototype;
    dart.addTypeTests(_MultiChannel);
    _MultiChannel.prototype[_is__MultiChannel_default] = true;
    _MultiChannel[dart.implements] = () => [src__multi_channel.MultiChannel$(T)];
    dart.setMethodSignature(_MultiChannel, () => ({
      __proto__: dart.getMethods(_MultiChannel.__proto__),
      virtualChannel: dart.fnType(src__multi_channel.VirtualChannel$(T), [], [core.int]),
      [_closeChannel]: dart.fnType(dart.void, [core.int, core.int]),
      [_closeInnerChannel]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_MultiChannel, () => ({
      __proto__: dart.getGetters(_MultiChannel.__proto__),
      stream: async$.Stream$(T),
      sink: async$.StreamSink$(T)
    }));
    dart.setLibraryUri(_MultiChannel, "package:stream_channel/src/multi_channel.dart");
    dart.setFieldSignature(_MultiChannel, () => ({
      __proto__: dart.getFields(_MultiChannel.__proto__),
      [_inner$0]: dart.fieldType(stream_channel.StreamChannel),
      [_innerStreamSubscription]: dart.fieldType(async$.StreamSubscription),
      [_mainController]: dart.finalFieldType(src__stream_channel_controller.StreamChannelController$(T)),
      [_controllers]: dart.finalFieldType(core.Map$(core.int, src__stream_channel_controller.StreamChannelController$(T))),
      [_pendingIds]: dart.finalFieldType(core.Set$(core.int)),
      [_closedIds]: dart.finalFieldType(core.Set$(core.int)),
      [_nextId]: dart.fieldType(core.int)
    }));
    return _MultiChannel;
  });
  src__multi_channel._MultiChannel = src__multi_channel._MultiChannel$();
  dart.addTypeTests(src__multi_channel._MultiChannel, _is__MultiChannel_default);
  const _parent$ = dart.privateName(src__multi_channel, "_parent");
  const _is_VirtualChannel_default = Symbol('_is_VirtualChannel_default');
  src__multi_channel.VirtualChannel$ = dart.generic(T => {
    class VirtualChannel extends stream_channel.StreamChannelMixin$(T) {
      get id() {
        return this[id$];
      }
      set id(value) {
        super.id = value;
      }
      get stream() {
        return this[stream$];
      }
      set stream(value) {
        super.stream = value;
      }
      get sink() {
        return this[sink$];
      }
      set sink(value) {
        super.sink = value;
      }
      virtualChannel(id) {
        if (id === void 0) id = null;
        return this[_parent$].virtualChannel(id);
      }
    }
    (VirtualChannel.__ = function(_parent, id, stream, sink) {
      this[_parent$] = _parent;
      this[id$] = id;
      this[stream$] = stream;
      this[sink$] = sink;
      ;
    }).prototype = VirtualChannel.prototype;
    dart.addTypeTests(VirtualChannel);
    VirtualChannel.prototype[_is_VirtualChannel_default] = true;
    const id$ = Symbol("VirtualChannel.id");
    const stream$ = Symbol("VirtualChannel.stream");
    const sink$ = Symbol("VirtualChannel.sink");
    VirtualChannel[dart.implements] = () => [src__multi_channel.MultiChannel$(T)];
    dart.setMethodSignature(VirtualChannel, () => ({
      __proto__: dart.getMethods(VirtualChannel.__proto__),
      virtualChannel: dart.fnType(src__multi_channel.VirtualChannel$(T), [], [core.int])
    }));
    dart.setLibraryUri(VirtualChannel, "package:stream_channel/src/multi_channel.dart");
    dart.setFieldSignature(VirtualChannel, () => ({
      __proto__: dart.getFields(VirtualChannel.__proto__),
      [_parent$]: dart.finalFieldType(src__multi_channel.MultiChannel$(T)),
      id: dart.finalFieldType(core.int),
      stream: dart.finalFieldType(async$.Stream$(T)),
      sink: dart.finalFieldType(async$.StreamSink$(T))
    }));
    return VirtualChannel;
  });
  src__multi_channel.VirtualChannel = src__multi_channel.VirtualChannel$();
  dart.addTypeTests(src__multi_channel.VirtualChannel, _is_VirtualChannel_default);
  const _sinkTransformer = dart.privateName(src__json_document_transformer, "_sinkTransformer");
  let const$;
  const _streamTransformer = dart.privateName(src__json_document_transformer, "_streamTransformer");
  let const$0;
  src__json_document_transformer._JsonDocument = class _JsonDocument extends core.Object {
    bind(channel) {
      StreamChannelOfString()._check(channel);
      let stream = channel.stream.map(dart.dynamic, dart.fn(convert.jsonDecode, String__Todynamic()));
      let sink = StreamSinkTransformerOfObject$String().fromHandlers({handleData: dart.fn((data, sink) => {
          sink.add(convert.jsonEncode(data));
        }, ObjectAndEventSinkOfStringToNull())}).bind(channel.sink);
      return StreamChannelOfObject().withCloseGuarantee(stream, sink);
    }
    get [_sinkTransformer$]() {
      return StreamSinkTransformerOfObject$String()._check(this[$noSuchMethod](new core._Invocation.getter(const$ || (const$ = dart.const(new _js_helper.PrivateSymbol.new('_sinkTransformer', _sinkTransformer))))));
    }
    get [_streamTransformer$]() {
      return StreamTransformerOfString$Object()._check(this[$noSuchMethod](new core._Invocation.getter(const$0 || (const$0 = dart.const(new _js_helper.PrivateSymbol.new('_streamTransformer', _streamTransformer))))));
    }
  };
  (src__json_document_transformer._JsonDocument.new = function() {
    ;
  }).prototype = src__json_document_transformer._JsonDocument.prototype;
  dart.addTypeTests(src__json_document_transformer._JsonDocument);
  src__json_document_transformer._JsonDocument[dart.implements] = () => [src__stream_channel_transformer.StreamChannelTransformer$(core.Object, core.String)];
  dart.setMethodSignature(src__json_document_transformer._JsonDocument, () => ({
    __proto__: dart.getMethods(src__json_document_transformer._JsonDocument.__proto__),
    bind: dart.fnType(stream_channel.StreamChannel$(core.Object), [core.Object])
  }));
  dart.setGetterSignature(src__json_document_transformer._JsonDocument, () => ({
    __proto__: dart.getGetters(src__json_document_transformer._JsonDocument.__proto__),
    [_sinkTransformer$]: src__stream_sink_transformer.StreamSinkTransformer$(core.Object, core.String),
    [_streamTransformer$]: async$.StreamTransformer$(core.String, core.Object)
  }));
  dart.setLibraryUri(src__json_document_transformer._JsonDocument, "package:stream_channel/src/json_document_transformer.dart");
  dart.defineLazy(src__json_document_transformer, {
    /*src__json_document_transformer.jsonDocument*/get jsonDocument() {
      return dart.const(new src__json_document_transformer._JsonDocument.new());
    }
  });
  const _sinks = dart.privateName(src__disconnector, "_sinks");
  const _disconnectMemo = dart.privateName(src__disconnector, "_disconnectMemo");
  const _disconnect = dart.privateName(src__disconnector, "_disconnect");
  const _sinkTransformer$0 = dart.privateName(src__disconnector, "_sinkTransformer");
  let const$1;
  const _streamTransformer$0 = dart.privateName(src__disconnector, "_streamTransformer");
  let const$2;
  const _is_Disconnector_default = Symbol('_is_Disconnector_default');
  src__disconnector.Disconnector$ = dart.generic(T => {
    let _DisconnectorSinkOfT = () => (_DisconnectorSinkOfT = dart.constFn(src__disconnector._DisconnectorSink$(T)))();
    let JSArrayOf_DisconnectorSinkOfT = () => (JSArrayOf_DisconnectorSinkOfT = dart.constFn(_interceptors.JSArray$(_DisconnectorSinkOfT())))();
    let _DisconnectorSinkOfTToFutureOfvoid = () => (_DisconnectorSinkOfTToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [_DisconnectorSinkOfT()])))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async$.StreamSink$(T)))();
    let StreamSinkOfTTo_DisconnectorSinkOfT = () => (StreamSinkOfTTo_DisconnectorSinkOfT = dart.constFn(dart.fnType(_DisconnectorSinkOfT(), [StreamSinkOfT()])))();
    let StreamSinkTransformerOfT$T = () => (StreamSinkTransformerOfT$T = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(T, T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async$.StreamTransformer$(T, T)))();
    class Disconnector extends core.Object {
      get isDisconnected() {
        return this[_disconnectMemo].hasRun;
      }
      disconnect() {
        return this[_disconnectMemo].runOnce(dart.fn(() => {
          let futures = this[_sinks][$map](FutureOfvoid(), dart.fn(sink => sink[_disconnect](), _DisconnectorSinkOfTToFutureOfvoid()))[$toList]();
          this[_sinks][$clear]();
          return async$.Future.wait(dart.void, futures, {eagerError: true});
        }, VoidToFutureOfListOfvoid()));
      }
      bind(channel) {
        StreamChannelOfT()._check(channel);
        return channel.changeSink(dart.fn(innerSink => {
          let sink = new (_DisconnectorSinkOfT()).new(innerSink);
          if (dart.test(this.isDisconnected)) {
            sink[_disconnect]().catchError(dart.fn(_ => {
            }, dynamicToNull()));
          } else {
            this[_sinks][$add](sink);
          }
          return sink;
        }, StreamSinkOfTTo_DisconnectorSinkOfT()));
      }
      get [_sinkTransformer$]() {
        return StreamSinkTransformerOfT$T()._check(this[$noSuchMethod](new core._Invocation.getter(const$1 || (const$1 = dart.const(new _js_helper.PrivateSymbol.new('_sinkTransformer', _sinkTransformer$0))))));
      }
      get [_streamTransformer$]() {
        return StreamTransformerOfT$T()._check(this[$noSuchMethod](new core._Invocation.getter(const$2 || (const$2 = dart.const(new _js_helper.PrivateSymbol.new('_streamTransformer', _streamTransformer$0))))));
      }
    }
    (Disconnector.new = function() {
      this[_sinks] = JSArrayOf_DisconnectorSinkOfT().of([]);
      this[_disconnectMemo] = new src__async_memoizer.AsyncMemoizer.new();
      ;
    }).prototype = Disconnector.prototype;
    dart.addTypeTests(Disconnector);
    Disconnector.prototype[_is_Disconnector_default] = true;
    Disconnector[dart.implements] = () => [src__stream_channel_transformer.StreamChannelTransformer$(T, T)];
    dart.setMethodSignature(Disconnector, () => ({
      __proto__: dart.getMethods(Disconnector.__proto__),
      disconnect: dart.fnType(async$.Future$(dart.void), []),
      bind: dart.fnType(stream_channel.StreamChannel$(T), [core.Object])
    }));
    dart.setGetterSignature(Disconnector, () => ({
      __proto__: dart.getGetters(Disconnector.__proto__),
      isDisconnected: core.bool,
      [_sinkTransformer$]: src__stream_sink_transformer.StreamSinkTransformer$(T, T),
      [_streamTransformer$]: async$.StreamTransformer$(T, T)
    }));
    dart.setLibraryUri(Disconnector, "package:stream_channel/src/disconnector.dart");
    dart.setFieldSignature(Disconnector, () => ({
      __proto__: dart.getFields(Disconnector.__proto__),
      [_sinks]: dart.finalFieldType(core.List$(src__disconnector._DisconnectorSink$(T))),
      [_disconnectMemo]: dart.finalFieldType(src__async_memoizer.AsyncMemoizer)
    }));
    return Disconnector;
  });
  src__disconnector.Disconnector = src__disconnector.Disconnector$();
  dart.addTypeTests(src__disconnector.Disconnector, _is_Disconnector_default);
  const _isDisconnected = dart.privateName(src__disconnector, "_isDisconnected");
  const _closed$ = dart.privateName(src__disconnector, "_closed");
  const _addStreamSubscription$ = dart.privateName(src__disconnector, "_addStreamSubscription");
  const _addStreamCompleter$ = dart.privateName(src__disconnector, "_addStreamCompleter");
  const _inner$1 = dart.privateName(src__disconnector, "_inner");
  const _inAddStream$ = dart.privateName(src__disconnector, "_inAddStream");
  const _is__DisconnectorSink_default = Symbol('_is__DisconnectorSink_default');
  src__disconnector._DisconnectorSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async$.Stream$(T)))();
    class _DisconnectorSink extends core.Object {
      get done() {
        return this[_inner$1].done;
      }
      get [_inAddStream$]() {
        return this[_addStreamSubscription$] != null;
      }
      add(data) {
        T._check(data);
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_isDisconnected])) return;
        this[_inner$1].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_isDisconnected])) return;
        this[_inner$1].addError(error, stackTrace);
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("Cannot add stream after closing."));
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot add stream while adding stream."));
        }
        if (dart.test(this[_isDisconnected])) return FutureOfvoid().value();
        this[_addStreamCompleter$] = async$.Completer.sync();
        this[_addStreamSubscription$] = stream.listen(dart.bind(this[_inner$1], 'add'), {onError: dart.bind(this[_inner$1], 'addError'), onDone: dart.bind(this[_addStreamCompleter$], 'complete')});
        return this[_addStreamCompleter$].future.then(dart.void, dart.fn(_ => {
          this[_addStreamCompleter$] = null;
          this[_addStreamSubscription$] = null;
        }, dynamicToNull()));
      }
      close() {
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot close sink while adding stream."));
        }
        this[_closed$] = true;
        return this[_inner$1].close();
      }
      [_disconnect]() {
        this[_isDisconnected] = true;
        let future = this[_inner$1].close();
        if (dart.test(this[_inAddStream$])) {
          this[_addStreamCompleter$].complete(this[_addStreamSubscription$].cancel());
          this[_addStreamCompleter$] = null;
          this[_addStreamSubscription$] = null;
        }
        return future;
      }
    }
    (_DisconnectorSink.new = function(_inner) {
      this[_isDisconnected] = false;
      this[_closed$] = false;
      this[_addStreamSubscription$] = null;
      this[_addStreamCompleter$] = null;
      this[_inner$1] = _inner;
      ;
    }).prototype = _DisconnectorSink.prototype;
    dart.addTypeTests(_DisconnectorSink);
    _DisconnectorSink.prototype[_is__DisconnectorSink_default] = true;
    _DisconnectorSink[dart.implements] = () => [async$.StreamSink$(T)];
    dart.setMethodSignature(_DisconnectorSink, () => ({
      __proto__: dart.getMethods(_DisconnectorSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async$.Future$(dart.void), [core.Object]),
      close: dart.fnType(async$.Future$(dart.void), []),
      [_disconnect]: dart.fnType(async$.Future$(dart.void), [])
    }));
    dart.setGetterSignature(_DisconnectorSink, () => ({
      __proto__: dart.getGetters(_DisconnectorSink.__proto__),
      done: async$.Future$(dart.void),
      [_inAddStream$]: core.bool
    }));
    dart.setLibraryUri(_DisconnectorSink, "package:stream_channel/src/disconnector.dart");
    dart.setFieldSignature(_DisconnectorSink, () => ({
      __proto__: dart.getFields(_DisconnectorSink.__proto__),
      [_inner$1]: dart.finalFieldType(async$.StreamSink$(T)),
      [_isDisconnected]: dart.fieldType(core.bool),
      [_closed$]: dart.fieldType(core.bool),
      [_addStreamSubscription$]: dart.fieldType(async$.StreamSubscription$(T)),
      [_addStreamCompleter$]: dart.fieldType(async$.Completer)
    }));
    return _DisconnectorSink;
  });
  src__disconnector._DisconnectorSink = src__disconnector._DisconnectorSink$();
  dart.addTypeTests(src__disconnector._DisconnectorSink, _is__DisconnectorSink_default);
  const _inner$2 = dart.privateName(src__delegating_stream_channel, "_inner");
  const _is_DelegatingStreamChannel_default = Symbol('_is_DelegatingStreamChannel_default');
  src__delegating_stream_channel.DelegatingStreamChannel$ = dart.generic(T => {
    class DelegatingStreamChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[_inner$2].stream;
      }
      get sink() {
        return this[_inner$2].sink;
      }
    }
    (DelegatingStreamChannel.new = function(_inner) {
      this[_inner$2] = _inner;
      ;
    }).prototype = DelegatingStreamChannel.prototype;
    dart.addTypeTests(DelegatingStreamChannel);
    DelegatingStreamChannel.prototype[_is_DelegatingStreamChannel_default] = true;
    dart.setGetterSignature(DelegatingStreamChannel, () => ({
      __proto__: dart.getGetters(DelegatingStreamChannel.__proto__),
      stream: async$.Stream$(T),
      sink: async$.StreamSink$(T)
    }));
    dart.setLibraryUri(DelegatingStreamChannel, "package:stream_channel/src/delegating_stream_channel.dart");
    dart.setFieldSignature(DelegatingStreamChannel, () => ({
      __proto__: dart.getFields(DelegatingStreamChannel.__proto__),
      [_inner$2]: dart.finalFieldType(stream_channel.StreamChannel$(T))
    }));
    return DelegatingStreamChannel;
  });
  src__delegating_stream_channel.DelegatingStreamChannel = src__delegating_stream_channel.DelegatingStreamChannel$();
  dart.addTypeTests(src__delegating_stream_channel.DelegatingStreamChannel, _is_DelegatingStreamChannel_default);
  const _stream = dart.privateName(src__close_guarantee_channel, "_stream");
  const _sink$ = dart.privateName(src__close_guarantee_channel, "_sink");
  const _disconnected$ = dart.privateName(src__close_guarantee_channel, "_disconnected");
  const _subscription$ = dart.privateName(src__close_guarantee_channel, "_subscription");
  const _is_CloseGuaranteeChannel_default = Symbol('_is_CloseGuaranteeChannel_default');
  src__close_guarantee_channel.CloseGuaranteeChannel$ = dart.generic(T => {
    let _CloseGuaranteeSinkOfT = () => (_CloseGuaranteeSinkOfT = dart.constFn(src__close_guarantee_channel._CloseGuaranteeSink$(T)))();
    let _CloseGuaranteeStreamOfT = () => (_CloseGuaranteeStreamOfT = dart.constFn(src__close_guarantee_channel._CloseGuaranteeStream$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async$.StreamSubscription$(T)))();
    class CloseGuaranteeChannel extends stream_channel.StreamChannelMixin$(T) {
      get [_subscription$]() {
        return this[_subscription];
      }
      set [_subscription$](value) {
        this[_subscription] = StreamSubscriptionOfT()._check(value);
      }
      get stream() {
        return this[_stream];
      }
      get sink() {
        return this[_sink$];
      }
    }
    (CloseGuaranteeChannel.new = function(innerStream, innerSink) {
      this[_stream] = null;
      this[_sink$] = null;
      this[_subscription] = null;
      this[_disconnected$] = false;
      this[_sink$] = new (_CloseGuaranteeSinkOfT()).new(innerSink, this);
      this[_stream] = new (_CloseGuaranteeStreamOfT()).new(innerStream, this);
    }).prototype = CloseGuaranteeChannel.prototype;
    dart.addTypeTests(CloseGuaranteeChannel);
    CloseGuaranteeChannel.prototype[_is_CloseGuaranteeChannel_default] = true;
    const _subscription = Symbol("CloseGuaranteeChannel._subscription");
    dart.setGetterSignature(CloseGuaranteeChannel, () => ({
      __proto__: dart.getGetters(CloseGuaranteeChannel.__proto__),
      stream: async$.Stream$(T),
      sink: async$.StreamSink$(T)
    }));
    dart.setLibraryUri(CloseGuaranteeChannel, "package:stream_channel/src/close_guarantee_channel.dart");
    dart.setFieldSignature(CloseGuaranteeChannel, () => ({
      __proto__: dart.getFields(CloseGuaranteeChannel.__proto__),
      [_stream]: dart.fieldType(src__close_guarantee_channel._CloseGuaranteeStream$(T)),
      [_sink$]: dart.fieldType(src__close_guarantee_channel._CloseGuaranteeSink$(T)),
      [_subscription$]: dart.fieldType(async$.StreamSubscription$(T)),
      [_disconnected$]: dart.fieldType(core.bool)
    }));
    return CloseGuaranteeChannel;
  });
  src__close_guarantee_channel.CloseGuaranteeChannel = src__close_guarantee_channel.CloseGuaranteeChannel$();
  dart.addTypeTests(src__close_guarantee_channel.CloseGuaranteeChannel, _is_CloseGuaranteeChannel_default);
  const _inner$3 = dart.privateName(src__close_guarantee_channel, "_inner");
  const _channel$0 = dart.privateName(src__close_guarantee_channel, "_channel");
  const _is__CloseGuaranteeStream_default = Symbol('_is__CloseGuaranteeStream_default');
  src__close_guarantee_channel._CloseGuaranteeStream$ = dart.generic(T => {
    class _CloseGuaranteeStream extends async$.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (dart.test(this[_channel$0][_disconnected$])) {
          onData = null;
          onError = null;
        }
        let subscription = this[_inner$3].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
        if (!dart.test(this[_channel$0][_disconnected$])) {
          this[_channel$0][_subscription$] = subscription;
        }
        return subscription;
      }
    }
    (_CloseGuaranteeStream.new = function(_inner, _channel) {
      this[_inner$3] = _inner;
      this[_channel$0] = _channel;
      _CloseGuaranteeStream.__proto__.new.call(this);
      ;
    }).prototype = _CloseGuaranteeStream.prototype;
    dart.addTypeTests(_CloseGuaranteeStream);
    _CloseGuaranteeStream.prototype[_is__CloseGuaranteeStream_default] = true;
    dart.setMethodSignature(_CloseGuaranteeStream, () => ({
      __proto__: dart.getMethods(_CloseGuaranteeStream.__proto__),
      listen: dart.fnType(async$.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(_CloseGuaranteeStream, "package:stream_channel/src/close_guarantee_channel.dart");
    dart.setFieldSignature(_CloseGuaranteeStream, () => ({
      __proto__: dart.getFields(_CloseGuaranteeStream.__proto__),
      [_inner$3]: dart.finalFieldType(async$.Stream$(T)),
      [_channel$0]: dart.finalFieldType(src__close_guarantee_channel.CloseGuaranteeChannel$(T))
    }));
    return _CloseGuaranteeStream;
  });
  src__close_guarantee_channel._CloseGuaranteeStream = src__close_guarantee_channel._CloseGuaranteeStream$();
  dart.addTypeTests(src__close_guarantee_channel._CloseGuaranteeStream, _is__CloseGuaranteeStream_default);
  const _is__CloseGuaranteeSink_default = Symbol('_is__CloseGuaranteeSink_default');
  src__close_guarantee_channel._CloseGuaranteeSink$ = dart.generic(T => {
    class _CloseGuaranteeSink extends src__delegate__stream_sink.DelegatingStreamSink$(T) {
      close() {
        let done = super.close();
        this[_channel$0][_disconnected$] = true;
        if (this[_channel$0][_subscription$] != null) {
          this[_channel$0][_subscription$].onData(null);
          this[_channel$0][_subscription$].onError(null);
        }
        return done;
      }
    }
    (_CloseGuaranteeSink.new = function(inner, _channel) {
      this[_channel$0] = _channel;
      _CloseGuaranteeSink.__proto__.new.call(this, inner);
      ;
    }).prototype = _CloseGuaranteeSink.prototype;
    dart.addTypeTests(_CloseGuaranteeSink);
    _CloseGuaranteeSink.prototype[_is__CloseGuaranteeSink_default] = true;
    dart.setMethodSignature(_CloseGuaranteeSink, () => ({
      __proto__: dart.getMethods(_CloseGuaranteeSink.__proto__),
      close: dart.fnType(async$.Future$(dart.void), [])
    }));
    dart.setLibraryUri(_CloseGuaranteeSink, "package:stream_channel/src/close_guarantee_channel.dart");
    dart.setFieldSignature(_CloseGuaranteeSink, () => ({
      __proto__: dart.getFields(_CloseGuaranteeSink.__proto__),
      [_channel$0]: dart.finalFieldType(src__close_guarantee_channel.CloseGuaranteeChannel$(T))
    }));
    return _CloseGuaranteeSink;
  });
  src__close_guarantee_channel._CloseGuaranteeSink = src__close_guarantee_channel._CloseGuaranteeSink$();
  dart.addTypeTests(src__close_guarantee_channel._CloseGuaranteeSink, _is__CloseGuaranteeSink_default);
  dart.trackLibraries("packages/stream_channel/stream_channel", {
    "package:stream_channel/src/guarantee_channel.dart": src__guarantee_channel,
    "package:stream_channel/stream_channel.dart": stream_channel,
    "package:stream_channel/src/stream_channel_transformer.dart": src__stream_channel_transformer,
    "package:stream_channel/src/stream_channel_controller.dart": src__stream_channel_controller,
    "package:stream_channel/src/stream_channel_completer.dart": src__stream_channel_completer,
    "package:stream_channel/src/multi_channel.dart": src__multi_channel,
    "package:stream_channel/src/json_document_transformer.dart": src__json_document_transformer,
    "package:stream_channel/src/disconnector.dart": src__disconnector,
    "package:stream_channel/src/delegating_stream_channel.dart": src__delegating_stream_channel,
    "package:stream_channel/src/close_guarantee_channel.dart": src__close_guarantee_channel
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/stream_channel/stream_channel.dart","org-dartlang-app:///packages/stream_channel/src/guarantee_channel.dart","org-dartlang-app:///packages/stream_channel/src/stream_channel_transformer.dart","org-dartlang-app:///packages/stream_channel/src/stream_channel_controller.dart","org-dartlang-app:///packages/stream_channel/src/stream_channel_completer.dart","org-dartlang-app:///packages/stream_channel/src/multi_channel.dart","org-dartlang-app:///packages/stream_channel/src/json_document_transformer.dart","org-dartlang-app:///packages/stream_channel/src/disconnector.dart","org-dartlang-app:///packages/stream_channel/src/delegating_stream_channel.dart","org-dartlang-app:///packages/stream_channel/src/close_guarantee_channel.dart"],"names":[],"mappings":"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","file":"stream_channel.ddc.js"}');
  // Exports:
  return {
    src__guarantee_channel: src__guarantee_channel,
    stream_channel: stream_channel,
    src__stream_channel_transformer: src__stream_channel_transformer,
    src__stream_channel_controller: src__stream_channel_controller,
    src__stream_channel_completer: src__stream_channel_completer,
    src__multi_channel: src__multi_channel,
    src__json_document_transformer: src__json_document_transformer,
    src__disconnector: src__disconnector,
    src__delegating_stream_channel: src__delegating_stream_channel,
    src__close_guarantee_channel: src__close_guarantee_channel
  };
});

//# sourceMappingURL=stream_channel.ddc.js.map

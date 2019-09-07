define(['dart_sdk', 'packages/collection/collection'], function(dart_sdk, collection) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const collection$ = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__queue_list = collection.src__queue_list;
  const src__stream_subscription_transformer = Object.create(dart.library);
  const src__async_memoizer = Object.create(dart.library);
  const src__delegate__future = Object.create(dart.library);
  const src__delegate__stream_consumer = Object.create(dart.library);
  const src__stream_sink_completer = Object.create(dart.library);
  const src__null_stream_sink = Object.create(dart.library);
  const src__result__future = Object.create(dart.library);
  const src__result__result = Object.create(dart.library);
  const src__stream_sink_transformer = Object.create(dart.library);
  const src__stream_sink_transformer__typed = Object.create(dart.library);
  const src__delegate__stream_sink = Object.create(dart.library);
  const src__stream_sink_transformer__stream_transformer_wrapper = Object.create(dart.library);
  const src__stream_sink_transformer__handler_transformer = Object.create(dart.library);
  const src__result__value = Object.create(dart.library);
  const src__result__error = Object.create(dart.library);
  const src__result__release_transformer = Object.create(dart.library);
  const src__result__release_sink = Object.create(dart.library);
  const src__result__capture_transformer = Object.create(dart.library);
  const src__result__capture_sink = Object.create(dart.library);
  const src__delegate__stream_subscription = Object.create(dart.library);
  const src__typed__stream_subscription = Object.create(dart.library);
  const src__utils = Object.create(dart.library);
  const src__stream_completer = Object.create(dart.library);
  const async$ = Object.create(dart.library);
  const src__typed_stream_transformer = Object.create(dart.library);
  const src__delegate__stream = Object.create(dart.library);
  const src__subscription_stream = Object.create(dart.library);
  const src__stream_zip = Object.create(dart.library);
  const src__stream_splitter = Object.create(dart.library);
  const src__future_group = Object.create(dart.library);
  const src__stream_queue = Object.create(dart.library);
  const src__cancelable_operation = Object.create(dart.library);
  const src__stream_group = Object.create(dart.library);
  const src__single_subscription_transformer = Object.create(dart.library);
  const src__restartable_timer = Object.create(dart.library);
  const src__lazy_stream = Object.create(dart.library);
  const src__delegate__sink = Object.create(dart.library);
  const src__delegate__event_sink = Object.create(dart.library);
  const src__byte_collector = Object.create(dart.library);
  const src__async_cache = Object.create(dart.library);
  const $length = dartx.length;
  const $add = dartx.add;
  const $_set = dartx._set;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $_get = dartx._get;
  const $isEmpty = dartx.isEmpty;
  const $clear = dartx.clear;
  const $every = dartx.every;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $elementAt = dartx.elementAt;
  const $forEach = dartx.forEach;
  const $putIfAbsent = dartx.putIfAbsent;
  const $remove = dartx.remove;
  const $values = dartx.values;
  const $map = dartx.map;
  const $where = dartx.where;
  const $toList = dartx.toList;
  const $setRange = dartx.setRange;
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicAnddynamicToErrorResult = () => (dynamicAnddynamicToErrorResult = dart.constFn(dart.fnType(src__result__error.ErrorResult, [dart.dynamic, dart.dynamic])))();
  let CaptureStreamTransformerOfObject = () => (CaptureStreamTransformerOfObject = dart.constFn(src__result__capture_transformer.CaptureStreamTransformer$(core.Object)))();
  let ReleaseStreamTransformerOfObject = () => (ReleaseStreamTransformerOfObject = dart.constFn(src__result__release_transformer.ReleaseStreamTransformer$(core.Object)))();
  let ResultOfObject = () => (ResultOfObject = dart.constFn(src__result__result.Result$(core.Object)))();
  let StreamTransformerWrapperOfObject$ResultOfObject = () => (StreamTransformerWrapperOfObject$ResultOfObject = dart.constFn(src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper$(core.Object, ResultOfObject())))();
  let StreamTransformerWrapperOfResultOfObject$Object = () => (StreamTransformerWrapperOfResultOfObject$Object = dart.constFn(src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper$(ResultOfObject(), core.Object)))();
  let EventSinkTovoid = () => (EventSinkTovoid = dart.constFn(dart.fnType(dart.void, [async.EventSink])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  let EventSinkOfResult = () => (EventSinkOfResult = dart.constFn(async.EventSink$(src__result__result.Result)))();
  let EventSinkToEventSinkOfResult = () => (EventSinkToEventSinkOfResult = dart.constFn(dart.fnType(EventSinkOfResult(), [async.EventSink])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let ObjectAndStackTraceTovoid = () => (ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let ListQueueOf_EventRequest = () => (ListQueueOf_EventRequest = dart.constFn(collection$.ListQueue$(src__stream_queue._EventRequest)))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let _HashSetOfStreamQueue = () => (_HashSetOfStreamQueue = dart.constFn(collection$._HashSet$(src__stream_queue.StreamQueue)))();
  let CompleterOfint = () => (CompleterOfint = dart.constFn(async.Completer$(core.int)))();
  let CompleterOfbool = () => (CompleterOfbool = dart.constFn(async.Completer$(core.bool)))();
  let VoidToFutureOr = () => (VoidToFutureOr = dart.constFn(dart.fnType(async.FutureOr, [])))();
  let FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  let FutureOfUint8List = () => (FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamSubscriptionOfListOfint = () => (StreamSubscriptionOfListOfint = dart.constFn(async.StreamSubscription$(ListOfint())))();
  let StreamSubscriptionOfListOfintAndFutureOfUint8ListToFutureOfUint8List = () => (StreamSubscriptionOfListOfintAndFutureOfUint8ListToFutureOfUint8List = dart.constFn(dart.fnType(FutureOfUint8List(), [StreamSubscriptionOfListOfint(), FutureOfUint8List()])))();
  let CancelableOperationOfUint8List = () => (CancelableOperationOfUint8List = dart.constFn(src__cancelable_operation.CancelableOperation$(typed_data.Uint8List)))();
  let StreamSubscriptionOfListOfintAndFutureOfUint8ListToCancelableOperationOfUint8List = () => (StreamSubscriptionOfListOfintAndFutureOfUint8ListToCancelableOperationOfUint8List = dart.constFn(dart.fnType(CancelableOperationOfUint8List(), [StreamSubscriptionOfListOfint(), FutureOfUint8List()])))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let CompleterOfUint8List = () => (CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))();
  let ListOfintToNull = () => (ListOfintToNull = dart.constFn(dart.fnType(core.Null, [ListOfint()])))();
  const _cancelMemoizer = dart.privateName(src__stream_subscription_transformer, "_cancelMemoizer");
  const _inner$ = dart.privateName(src__stream_subscription_transformer, "_inner");
  const _handleCancel$ = dart.privateName(src__stream_subscription_transformer, "_handleCancel");
  const _handlePause$ = dart.privateName(src__stream_subscription_transformer, "_handlePause");
  const _handleResume$ = dart.privateName(src__stream_subscription_transformer, "_handleResume");
  const _is__TransformedSubscription_default = Symbol('_is__TransformedSubscription_default');
  src__stream_subscription_transformer._TransformedSubscription$ = dart.generic(T => {
    class _TransformedSubscription extends core.Object {
      get isPaused() {
        let t0, t0$;
        t0$ = (t0 = this[_inner$], t0 == null ? null : t0.isPaused);
        return t0$ == null ? false : t0$;
      }
      onData(handleData) {
        let t0;
        t0 = this[_inner$];
        t0 == null ? null : t0.onData(handleData);
      }
      onError(handleError) {
        let t0;
        t0 = this[_inner$];
        t0 == null ? null : t0.onError(handleError);
      }
      onDone(handleDone) {
        let t0;
        t0 = this[_inner$];
        t0 == null ? null : t0.onDone(handleDone);
      }
      cancel() {
        return this[_cancelMemoizer].runOnce(dart.fn(() => {
          let inner = this[_inner$];
          this[_inner$].onData(null);
          this[_inner$].onDone(null);
          this[_inner$].onError(dart.fn((_, __) => {
          }, dynamicAnddynamicToNull()));
          this[_inner$] = null;
          return this[_handleCancel$](inner);
        }, VoidToFuture()));
      }
      pause(resumeFuture) {
        if (resumeFuture === void 0) resumeFuture = null;
        if (dart.test(this[_cancelMemoizer].hasRun)) return;
        if (resumeFuture != null) resumeFuture.whenComplete(dart.bind(this, 'resume'));
        this[_handlePause$](this[_inner$]);
      }
      resume() {
        if (dart.test(this[_cancelMemoizer].hasRun)) return;
        this[_handleResume$](this[_inner$]);
      }
      asFuture(E, futureValue) {
        let t0, t0$;
        if (futureValue === void 0) futureValue = null;
        t0$ = (t0 = this[_inner$], t0 == null ? null : t0.asFuture(E, futureValue));
        return t0$ == null ? async.Completer$(E).new().future : t0$;
      }
    }
    (_TransformedSubscription.new = function(_inner, _handleCancel, _handlePause, _handleResume) {
      this[_cancelMemoizer] = new src__async_memoizer.AsyncMemoizer.new();
      this[_inner$] = _inner;
      this[_handleCancel$] = _handleCancel;
      this[_handlePause$] = _handlePause;
      this[_handleResume$] = _handleResume;
      ;
    }).prototype = _TransformedSubscription.prototype;
    _TransformedSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(_TransformedSubscription);
    _TransformedSubscription.prototype[_is__TransformedSubscription_default] = true;
    _TransformedSubscription[dart.implements] = () => [async.StreamSubscription$(T)];
    dart.setMethodSignature(_TransformedSubscription, () => ({
      __proto__: dart.getMethods(_TransformedSubscription.__proto__),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      cancel: dart.fnType(async.Future, []),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]])
    }));
    dart.setGetterSignature(_TransformedSubscription, () => ({
      __proto__: dart.getGetters(_TransformedSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setLibraryUri(_TransformedSubscription, "package:async/src/stream_subscription_transformer.dart");
    dart.setFieldSignature(_TransformedSubscription, () => ({
      __proto__: dart.getFields(_TransformedSubscription.__proto__),
      [_inner$]: dart.fieldType(async.StreamSubscription$(T)),
      [_handleCancel$]: dart.finalFieldType(dart.fnType(async.Future, [async.StreamSubscription$(T)])),
      [_handlePause$]: dart.finalFieldType(dart.fnType(dart.void, [async.StreamSubscription$(T)])),
      [_handleResume$]: dart.finalFieldType(dart.fnType(dart.void, [async.StreamSubscription$(T)])),
      [_cancelMemoizer]: dart.finalFieldType(src__async_memoizer.AsyncMemoizer)
    }));
    return _TransformedSubscription;
  });
  src__stream_subscription_transformer._TransformedSubscription = src__stream_subscription_transformer._TransformedSubscription$();
  dart.addTypeTests(src__stream_subscription_transformer._TransformedSubscription, _is__TransformedSubscription_default);
  src__stream_subscription_transformer.subscriptionTransformer = function(T, opts) {
    let handleCancel = opts && 'handleCancel' in opts ? opts.handleCancel : null;
    let handlePause = opts && 'handlePause' in opts ? opts.handlePause : null;
    let handleResume = opts && 'handleResume' in opts ? opts.handleResume : null;
    return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((stream, cancelOnError) => {
      let t0, t0$, t0$0;
      return new (src__stream_subscription_transformer._TransformedSubscription$(T)).new(stream.listen(null, {cancelOnError: cancelOnError}), (t0 = handleCancel, t0 == null ? dart.fn(inner => inner.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])) : t0), (t0$ = handlePause, t0$ == null ? dart.fn(inner => {
        inner.pause();
      }, dart.fnType(core.Null, [async.StreamSubscription$(T)])) : t0$), (t0$0 = handleResume, t0$0 == null ? dart.fn(inner => {
        inner.resume();
      }, dart.fnType(core.Null, [async.StreamSubscription$(T)])) : t0$0));
    }, dart.fnType(src__stream_subscription_transformer._TransformedSubscription$(T), [async.Stream$(T), core.bool])));
  };
  const _completer = dart.privateName(src__async_memoizer, "_completer");
  const _is_AsyncMemoizer_default = Symbol('_is_AsyncMemoizer_default');
  src__async_memoizer.AsyncMemoizer$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class AsyncMemoizer extends core.Object {
      get future() {
        return this[_completer].future;
      }
      get hasRun() {
        return this[_completer].isCompleted;
      }
      runOnce(computation) {
        VoidToFutureOrOfT()._check(computation);
        if (!dart.test(this.hasRun)) this[_completer].complete(FutureOfT().sync(computation));
        return this.future;
      }
    }
    (AsyncMemoizer.new = function() {
      this[_completer] = CompleterOfT().new();
      ;
    }).prototype = AsyncMemoizer.prototype;
    dart.addTypeTests(AsyncMemoizer);
    AsyncMemoizer.prototype[_is_AsyncMemoizer_default] = true;
    dart.setMethodSignature(AsyncMemoizer, () => ({
      __proto__: dart.getMethods(AsyncMemoizer.__proto__),
      runOnce: dart.fnType(async.Future$(T), [core.Object])
    }));
    dart.setGetterSignature(AsyncMemoizer, () => ({
      __proto__: dart.getGetters(AsyncMemoizer.__proto__),
      future: async.Future$(T),
      hasRun: core.bool
    }));
    dart.setLibraryUri(AsyncMemoizer, "package:async/src/async_memoizer.dart");
    dart.setFieldSignature(AsyncMemoizer, () => ({
      __proto__: dart.getFields(AsyncMemoizer.__proto__),
      [_completer]: dart.finalFieldType(async.Completer$(T))
    }));
    return AsyncMemoizer;
  });
  src__async_memoizer.AsyncMemoizer = src__async_memoizer.AsyncMemoizer$();
  dart.addTypeTests(src__async_memoizer.AsyncMemoizer, _is_AsyncMemoizer_default);
  const _future$ = dart.privateName(src__delegate__future, "_future");
  const _is_DelegatingFuture_default = Symbol('_is_DelegatingFuture_default');
  src__delegate__future.DelegatingFuture$ = dart.generic(T => {
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    class DelegatingFuture extends core.Object {
      static typed(T, future) {
        return async.Future$(T).is(future) ? future : future.then(T, dart.fn(v => T.as(v), dart.fnType(T, [dart.dynamic])));
      }
      asStream() {
        return this[_future$].asStream();
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this[_future$].catchError(onError, {test: test});
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return this[_future$].then(S, onValue, {onError: onError});
      }
      whenComplete(action) {
        return this[_future$].whenComplete(action);
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidTodynamic()._check(onTimeout);
        return this[_future$].timeout(timeLimit, {onTimeout: VoidToFutureOrOfT()._check(onTimeout)});
      }
    }
    (DelegatingFuture.new = function(_future) {
      this[_future$] = _future;
      ;
    }).prototype = DelegatingFuture.prototype;
    DelegatingFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(DelegatingFuture);
    DelegatingFuture.prototype[_is_DelegatingFuture_default] = true;
    DelegatingFuture[dart.implements] = () => [async.Future$(T)];
    dart.setMethodSignature(DelegatingFuture, () => ({
      __proto__: dart.getMethods(DelegatingFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [core.Object])}),
      then: dart.gFnType(S => [async.Future$(S), [dart.fnType(async.FutureOr$(S), [T])], {onError: core.Function}]),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.dynamic, [])]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: core.Object})
    }));
    dart.setLibraryUri(DelegatingFuture, "package:async/src/delegate/future.dart");
    dart.setFieldSignature(DelegatingFuture, () => ({
      __proto__: dart.getFields(DelegatingFuture.__proto__),
      [_future$]: dart.finalFieldType(async.Future$(T))
    }));
    return DelegatingFuture;
  });
  src__delegate__future.DelegatingFuture = src__delegate__future.DelegatingFuture$();
  dart.addTypeTests(src__delegate__future.DelegatingFuture, _is_DelegatingFuture_default);
  const _consumer$ = dart.privateName(src__delegate__stream_consumer, "_consumer");
  const _is_DelegatingStreamConsumer_default = Symbol('_is_DelegatingStreamConsumer_default');
  src__delegate__stream_consumer.DelegatingStreamConsumer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DelegatingStreamConsumer extends core.Object {
      static typed(T, consumer) {
        return async.StreamConsumer$(T).is(consumer) ? consumer : new (src__delegate__stream_consumer.DelegatingStreamConsumer$(T)).__(consumer);
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        return this[_consumer$].addStream(stream);
      }
      close() {
        return this[_consumer$].close();
      }
    }
    (DelegatingStreamConsumer.new = function(consumer) {
      this[_consumer$] = consumer;
      ;
    }).prototype = DelegatingStreamConsumer.prototype;
    (DelegatingStreamConsumer.__ = function(_consumer) {
      this[_consumer$] = _consumer;
      ;
    }).prototype = DelegatingStreamConsumer.prototype;
    dart.addTypeTests(DelegatingStreamConsumer);
    DelegatingStreamConsumer.prototype[_is_DelegatingStreamConsumer_default] = true;
    DelegatingStreamConsumer[dart.implements] = () => [async.StreamConsumer$(T)];
    dart.setMethodSignature(DelegatingStreamConsumer, () => ({
      __proto__: dart.getMethods(DelegatingStreamConsumer.__proto__),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setLibraryUri(DelegatingStreamConsumer, "package:async/src/delegate/stream_consumer.dart");
    dart.setFieldSignature(DelegatingStreamConsumer, () => ({
      __proto__: dart.getFields(DelegatingStreamConsumer.__proto__),
      [_consumer$]: dart.finalFieldType(async.StreamConsumer)
    }));
    return DelegatingStreamConsumer;
  });
  src__delegate__stream_consumer.DelegatingStreamConsumer = src__delegate__stream_consumer.DelegatingStreamConsumer$();
  dart.addTypeTests(src__delegate__stream_consumer.DelegatingStreamConsumer, _is_DelegatingStreamConsumer_default);
  const _sink = dart.privateName(src__stream_sink_completer, "_sink");
  const _destinationSink = dart.privateName(src__stream_sink_completer, "_destinationSink");
  const _setDestinationSink = dart.privateName(src__stream_sink_completer, "_setDestinationSink");
  const _is_StreamSinkCompleter_default = Symbol('_is_StreamSinkCompleter_default');
  src__stream_sink_completer.StreamSinkCompleter$ = dart.generic(T => {
    let _CompleterSinkOfT = () => (_CompleterSinkOfT = dart.constFn(src__stream_sink_completer._CompleterSink$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    let NullStreamSinkOfT = () => (NullStreamSinkOfT = dart.constFn(src__null_stream_sink.NullStreamSink$(T)))();
    class StreamSinkCompleter extends core.Object {
      get sink() {
        return this[sink];
      }
      set sink(value) {
        super.sink = value;
      }
      get [_sink]() {
        return _CompleterSinkOfT()._check(this.sink);
      }
      static fromFuture(T, sinkFuture) {
        let completer = new (src__stream_sink_completer.StreamSinkCompleter$(T)).new();
        sinkFuture.then(dart.void, dart.bind(completer, 'setDestinationSink'), {onError: dart.bind(completer, 'setError')});
        return completer.sink;
      }
      setDestinationSink(destinationSink) {
        StreamSinkOfT()._check(destinationSink);
        if (this[_sink][_destinationSink] != null) {
          dart.throw(new core.StateError.new("Destination sink already set"));
        }
        this[_sink][_setDestinationSink](destinationSink);
      }
      setError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this.setDestinationSink(new (NullStreamSinkOfT()).error(error, stackTrace));
      }
    }
    (StreamSinkCompleter.new = function() {
      this[sink] = new (_CompleterSinkOfT()).new();
      ;
    }).prototype = StreamSinkCompleter.prototype;
    dart.addTypeTests(StreamSinkCompleter);
    StreamSinkCompleter.prototype[_is_StreamSinkCompleter_default] = true;
    const sink = Symbol("StreamSinkCompleter.sink");
    dart.setMethodSignature(StreamSinkCompleter, () => ({
      __proto__: dart.getMethods(StreamSinkCompleter.__proto__),
      setDestinationSink: dart.fnType(dart.void, [core.Object]),
      setError: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace])
    }));
    dart.setGetterSignature(StreamSinkCompleter, () => ({
      __proto__: dart.getGetters(StreamSinkCompleter.__proto__),
      [_sink]: src__stream_sink_completer._CompleterSink$(T)
    }));
    dart.setLibraryUri(StreamSinkCompleter, "package:async/src/stream_sink_completer.dart");
    dart.setFieldSignature(StreamSinkCompleter, () => ({
      __proto__: dart.getFields(StreamSinkCompleter.__proto__),
      sink: dart.finalFieldType(async.StreamSink$(T))
    }));
    return StreamSinkCompleter;
  });
  src__stream_sink_completer.StreamSinkCompleter = src__stream_sink_completer.StreamSinkCompleter$();
  dart.addTypeTests(src__stream_sink_completer.StreamSinkCompleter, _is_StreamSinkCompleter_default);
  const _controller = dart.privateName(src__stream_sink_completer, "_controller");
  const _doneCompleter = dart.privateName(src__stream_sink_completer, "_doneCompleter");
  const _canSendDirectly = dart.privateName(src__stream_sink_completer, "_canSendDirectly");
  const _ensureController = dart.privateName(src__stream_sink_completer, "_ensureController");
  const _is__CompleterSink_default = Symbol('_is__CompleterSink_default');
  src__stream_sink_completer._CompleterSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class _CompleterSink extends core.Object {
      get [_canSendDirectly]() {
        return this[_controller] == null && this[_destinationSink] != null;
      }
      get done() {
        if (this[_doneCompleter] != null) return this[_doneCompleter].future;
        if (this[_destinationSink] == null) {
          this[_doneCompleter] = async.Completer.sync();
          return this[_doneCompleter].future;
        }
        return this[_destinationSink].done;
      }
      add(event) {
        T._check(event);
        if (dart.test(this[_canSendDirectly])) {
          this[_destinationSink].add(event);
        } else {
          this[_ensureController]();
          this[_controller].add(event);
        }
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_canSendDirectly])) {
          this[_destinationSink].addError(error, stackTrace);
        } else {
          this[_ensureController]();
          this[_controller].addError(error, stackTrace);
        }
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_canSendDirectly])) return this[_destinationSink].addStream(stream);
        this[_ensureController]();
        return this[_controller].addStream(stream, {cancelOnError: false});
      }
      close() {
        if (dart.test(this[_canSendDirectly])) {
          this[_destinationSink].close();
        } else {
          this[_ensureController]();
          this[_controller].close();
        }
        return this.done;
      }
      [_ensureController]() {
        if (this[_controller] == null) this[_controller] = StreamControllerOfT().new({sync: true});
      }
      [_setDestinationSink](sink) {
        StreamSinkOfT()._check(sink);
        if (!(this[_destinationSink] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_sink_completer.dart", 157, 12, "_destinationSink == null");
        this[_destinationSink] = sink;
        if (this[_controller] != null) {
          sink.addStream(this[_controller].stream).whenComplete(dart.bind(sink, 'close')).catchError(dart.fn(_ => {
          }, dynamicToNull()));
        }
        if (this[_doneCompleter] != null) {
          this[_doneCompleter].complete(sink.done);
        }
      }
    }
    (_CompleterSink.new = function() {
      this[_controller] = null;
      this[_doneCompleter] = null;
      this[_destinationSink] = null;
      ;
    }).prototype = _CompleterSink.prototype;
    dart.addTypeTests(_CompleterSink);
    _CompleterSink.prototype[_is__CompleterSink_default] = true;
    _CompleterSink[dart.implements] = () => [async.StreamSink$(T)];
    dart.setMethodSignature(_CompleterSink, () => ({
      __proto__: dart.getMethods(_CompleterSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, []),
      [_ensureController]: dart.fnType(dart.void, []),
      [_setDestinationSink]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(_CompleterSink, () => ({
      __proto__: dart.getGetters(_CompleterSink.__proto__),
      [_canSendDirectly]: core.bool,
      done: async.Future
    }));
    dart.setLibraryUri(_CompleterSink, "package:async/src/stream_sink_completer.dart");
    dart.setFieldSignature(_CompleterSink, () => ({
      __proto__: dart.getFields(_CompleterSink.__proto__),
      [_controller]: dart.fieldType(async.StreamController$(T)),
      [_doneCompleter]: dart.fieldType(async.Completer),
      [_destinationSink]: dart.fieldType(async.StreamSink$(T))
    }));
    return _CompleterSink;
  });
  src__stream_sink_completer._CompleterSink = src__stream_sink_completer._CompleterSink$();
  dart.addTypeTests(src__stream_sink_completer._CompleterSink, _is__CompleterSink_default);
  const _closed = dart.privateName(src__null_stream_sink, "_closed");
  const _addingStream = dart.privateName(src__null_stream_sink, "_addingStream");
  const _checkEventAllowed = dart.privateName(src__null_stream_sink, "_checkEventAllowed");
  const _is_NullStreamSink_default = Symbol('_is_NullStreamSink_default');
  src__null_stream_sink.NullStreamSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class NullStreamSink extends core.Object {
      get done() {
        return this[done$];
      }
      set done(value) {
        super.done = value;
      }
      add(data) {
        T._check(data);
        this[_checkEventAllowed]();
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_checkEventAllowed]();
      }
      addStream(stream) {
        let t0;
        StreamOfT()._check(stream);
        this[_checkEventAllowed]();
        this[_addingStream] = true;
        let future = (t0 = stream.listen(null).cancel(), t0 == null ? async.Future.value() : t0);
        return future.whenComplete(dart.fn(() => {
          this[_addingStream] = false;
        }, VoidToNull()));
      }
      [_checkEventAllowed]() {
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add to a closed sink."));
        if (dart.test(this[_addingStream])) {
          dart.throw(new core.StateError.new("Cannot add to a sink while adding a stream."));
        }
      }
      close() {
        this[_closed] = true;
        return this.done;
      }
    }
    (NullStreamSink.new = function(opts) {
      let t0;
      let done = opts && 'done' in opts ? opts.done : null;
      this[_closed] = false;
      this[_addingStream] = false;
      this[done$] = (t0 = done, t0 == null ? async.Future.value() : t0);
      ;
    }).prototype = NullStreamSink.prototype;
    (NullStreamSink.error = function(error, stackTrace) {
      let t0;
      if (stackTrace === void 0) stackTrace = null;
      this[_closed] = false;
      this[_addingStream] = false;
      this[done$] = (t0 = async.Future.error(error, stackTrace), t0.catchError(dart.fn(_ => {
      }, dynamicToNull())), t0);
      ;
    }).prototype = NullStreamSink.prototype;
    dart.addTypeTests(NullStreamSink);
    NullStreamSink.prototype[_is_NullStreamSink_default] = true;
    const done$ = Symbol("NullStreamSink.done");
    NullStreamSink[dart.implements] = () => [async.StreamSink$(T)];
    dart.setMethodSignature(NullStreamSink, () => ({
      __proto__: dart.getMethods(NullStreamSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      [_checkEventAllowed]: dart.fnType(dart.void, []),
      close: dart.fnType(async.Future, [])
    }));
    dart.setLibraryUri(NullStreamSink, "package:async/src/null_stream_sink.dart");
    dart.setFieldSignature(NullStreamSink, () => ({
      __proto__: dart.getFields(NullStreamSink.__proto__),
      done: dart.finalFieldType(async.Future),
      [_closed]: dart.fieldType(core.bool),
      [_addingStream]: dart.fieldType(core.bool)
    }));
    return NullStreamSink;
  });
  src__null_stream_sink.NullStreamSink = src__null_stream_sink.NullStreamSink$();
  dart.addTypeTests(src__null_stream_sink.NullStreamSink, _is_NullStreamSink_default);
  const _result = dart.privateName(src__result__future, "_result");
  const _is_ResultFuture_default = Symbol('_is_ResultFuture_default');
  src__result__future.ResultFuture$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let ResultOfTToNull = () => (ResultOfTToNull = dart.constFn(dart.fnType(core.Null, [ResultOfT()])))();
    class ResultFuture extends src__delegate__future.DelegatingFuture$(T) {
      get isComplete() {
        return this.result != null;
      }
      get result() {
        return this[_result];
      }
    }
    (ResultFuture.new = function(future) {
      this[_result] = null;
      ResultFuture.__proto__.new.call(this, future);
      src__result__result.Result.capture(T, future).then(dart.dynamic, dart.fn(result => {
        this[_result] = result;
      }, ResultOfTToNull()));
    }).prototype = ResultFuture.prototype;
    dart.addTypeTests(ResultFuture);
    ResultFuture.prototype[_is_ResultFuture_default] = true;
    dart.setGetterSignature(ResultFuture, () => ({
      __proto__: dart.getGetters(ResultFuture.__proto__),
      isComplete: core.bool,
      result: src__result__result.Result$(T)
    }));
    dart.setLibraryUri(ResultFuture, "package:async/src/result/future.dart");
    dart.setFieldSignature(ResultFuture, () => ({
      __proto__: dart.getFields(ResultFuture.__proto__),
      [_result]: dart.fieldType(src__result__result.Result$(T))
    }));
    return ResultFuture;
  });
  src__result__future.ResultFuture = src__result__future.ResultFuture$();
  dart.addTypeTests(src__result__future.ResultFuture, _is_ResultFuture_default);
  const _is_Result_default = Symbol('_is_Result_default');
  src__result__result.Result$ = dart.generic(T => {
    class Result extends core.Object {
      static new(computation) {
        try {
          return new (src__result__value.ValueResult$(T)).new(computation());
        } catch (e$) {
          let e = dart.getThrown(e$);
          let s = dart.stackTrace(e$);
          return new src__result__error.ErrorResult.new(e, s);
        }
      }
      static error(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        return new src__result__error.ErrorResult.new(error, stackTrace);
      }
      static capture(T, future) {
        return future.then(src__result__result.Result$(T), dart.fn(value => new (src__result__value.ValueResult$(T)).new(value), dart.fnType(src__result__value.ValueResult$(T), [T])), {onError: dart.fn((error, stackTrace) => new src__result__error.ErrorResult.new(error, core.StackTrace._check(stackTrace)), dynamicAnddynamicToErrorResult())});
      }
      static captureAll(T, elements) {
        let results = _interceptors.JSArray$(src__result__result.Result$(T)).of([]);
        let pending = 0;
        let completer = null;
        for (let element of elements) {
          if (async.Future$(T).is(element)) {
            let i = results[$length];
            results[$add](null);
            pending = pending + 1;
            src__result__result.Result.capture(T, element).then(dart.dynamic, dart.fn(result => {
              results[$_set](i, result);
              if ((pending = pending - 1) === 0) {
                completer.complete(results);
              }
            }, dart.fnType(core.Null, [src__result__result.Result$(T)])));
          } else {
            results[$add](new (src__result__value.ValueResult$(T)).new(T._check(element)));
          }
        }
        if (pending === 0) {
          return async.Future$(core.List$(src__result__result.Result$(T))).value(results);
        }
        completer = async.Completer$(core.List$(src__result__result.Result$(T))).new();
        return completer.future;
      }
      static release(T, future) {
        return future.then(T, dart.fn(result => result.asFuture, dart.fnType(async.Future$(T), [src__result__result.Result$(T)])));
      }
      static captureStream(T, source) {
        return source.transform(src__result__result.Result$(T), new (src__result__capture_transformer.CaptureStreamTransformer$(T)).new());
      }
      static releaseStream(T, source) {
        return source.transform(T, new (src__result__release_transformer.ReleaseStreamTransformer$(T)).new());
      }
      static releaseSink(T, sink) {
        return new (src__result__release_sink.ReleaseSink$(T)).new(sink);
      }
      static captureSink(T, sink) {
        return new (src__result__capture_sink.CaptureSink$(T)).new(sink);
      }
      static flatten(T, result) {
        if (dart.test(result.isValue)) return result.asValue.value;
        return result.asError;
      }
      static flattenAll(T, results) {
        let values = _interceptors.JSArray$(T).of([]);
        for (let result of results) {
          if (dart.test(result.isValue)) {
            values[$add](result.asValue.value);
          } else {
            return result.asError;
          }
        }
        return new (src__result__value.ValueResult$(core.List$(T))).new(values);
      }
    }
    (Result[dart.mixinNew] = function() {
    }).prototype = Result.prototype;
    dart.addTypeTests(Result);
    Result.prototype[_is_Result_default] = true;
    dart.setLibraryUri(Result, "package:async/src/result/result.dart");
    return Result;
  });
  src__result__result.Result = src__result__result.Result$();
  dart.defineLazy(src__result__result.Result, {
    /*src__result__result.Result.captureStreamTransformer*/get captureStreamTransformer() {
      return dart.const(new (CaptureStreamTransformerOfObject()).new());
    },
    /*src__result__result.Result.releaseStreamTransformer*/get releaseStreamTransformer() {
      return dart.const(new (ReleaseStreamTransformerOfObject()).new());
    },
    /*src__result__result.Result.captureSinkTransformer*/get captureSinkTransformer() {
      return dart.const(new (StreamTransformerWrapperOfObject$ResultOfObject()).new(dart.const(new (CaptureStreamTransformerOfObject()).new())));
    },
    /*src__result__result.Result.releaseSinkTransformer*/get releaseSinkTransformer() {
      return dart.const(new (StreamTransformerWrapperOfResultOfObject$Object()).new(dart.const(new (ReleaseStreamTransformerOfObject()).new())));
    }
  });
  dart.addTypeTests(src__result__result.Result, _is_Result_default);
  const _is_StreamSinkTransformer_default = Symbol('_is_StreamSinkTransformer_default');
  src__stream_sink_transformer.StreamSinkTransformer$ = dart.generic((S, T) => {
    class StreamSinkTransformer extends core.Object {
      static fromHandlers(opts) {
        let handleData = opts && 'handleData' in opts ? opts.handleData : null;
        let handleError = opts && 'handleError' in opts ? opts.handleError : null;
        let handleDone = opts && 'handleDone' in opts ? opts.handleDone : null;
        return new (src__stream_sink_transformer__handler_transformer.HandlerTransformer$(S, T)).new(handleData, handleError, handleDone);
      }
      static typed(S, T, transformer) {
        return src__stream_sink_transformer.StreamSinkTransformer$(S, T).is(transformer) ? transformer : new (src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer$(S, T)).new(transformer);
      }
    }
    (StreamSinkTransformer[dart.mixinNew] = function() {
    }).prototype = StreamSinkTransformer.prototype;
    dart.addTypeTests(StreamSinkTransformer);
    StreamSinkTransformer.prototype[_is_StreamSinkTransformer_default] = true;
    dart.setLibraryUri(StreamSinkTransformer, "package:async/src/stream_sink_transformer.dart");
    return StreamSinkTransformer;
  });
  src__stream_sink_transformer.StreamSinkTransformer = src__stream_sink_transformer.StreamSinkTransformer$();
  dart.addTypeTests(src__stream_sink_transformer.StreamSinkTransformer, _is_StreamSinkTransformer_default);
  const _inner$0 = dart.privateName(src__stream_sink_transformer__typed, "_inner");
  const _is_TypeSafeStreamSinkTransformer_default = Symbol('_is_TypeSafeStreamSinkTransformer_default');
  src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer$ = dart.generic((S, T) => {
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class TypeSafeStreamSinkTransformer extends core.Object {
      bind(sink) {
        StreamSinkOfT()._check(sink);
        return src__delegate__stream_sink.DelegatingStreamSink.typed(S, this[_inner$0].bind(sink));
      }
    }
    (TypeSafeStreamSinkTransformer.new = function(_inner) {
      this[_inner$0] = _inner;
      ;
    }).prototype = TypeSafeStreamSinkTransformer.prototype;
    dart.addTypeTests(TypeSafeStreamSinkTransformer);
    TypeSafeStreamSinkTransformer.prototype[_is_TypeSafeStreamSinkTransformer_default] = true;
    TypeSafeStreamSinkTransformer[dart.implements] = () => [src__stream_sink_transformer.StreamSinkTransformer$(S, T)];
    dart.setMethodSignature(TypeSafeStreamSinkTransformer, () => ({
      __proto__: dart.getMethods(TypeSafeStreamSinkTransformer.__proto__),
      bind: dart.fnType(async.StreamSink$(S), [core.Object])
    }));
    dart.setLibraryUri(TypeSafeStreamSinkTransformer, "package:async/src/stream_sink_transformer/typed.dart");
    dart.setFieldSignature(TypeSafeStreamSinkTransformer, () => ({
      __proto__: dart.getFields(TypeSafeStreamSinkTransformer.__proto__),
      [_inner$0]: dart.finalFieldType(src__stream_sink_transformer.StreamSinkTransformer)
    }));
    return TypeSafeStreamSinkTransformer;
  });
  src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer = src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer$();
  dart.addTypeTests(src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer, _is_TypeSafeStreamSinkTransformer_default);
  const _sink$ = dart.privateName(src__delegate__stream_sink, "_sink");
  const _is_DelegatingStreamSink_default = Symbol('_is_DelegatingStreamSink_default');
  src__delegate__stream_sink.DelegatingStreamSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DelegatingStreamSink extends core.Object {
      get done() {
        return this[_sink$].done;
      }
      static typed(T, sink) {
        return async.StreamSink$(T).is(sink) ? sink : new (src__delegate__stream_sink.DelegatingStreamSink$(T)).__(sink);
      }
      add(data) {
        T._check(data);
        this[_sink$].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_sink$].addError(error, stackTrace);
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        return this[_sink$].addStream(stream);
      }
      close() {
        return this[_sink$].close();
      }
    }
    (DelegatingStreamSink.new = function(sink) {
      this[_sink$] = sink;
      ;
    }).prototype = DelegatingStreamSink.prototype;
    (DelegatingStreamSink.__ = function(_sink) {
      this[_sink$] = _sink;
      ;
    }).prototype = DelegatingStreamSink.prototype;
    dart.addTypeTests(DelegatingStreamSink);
    DelegatingStreamSink.prototype[_is_DelegatingStreamSink_default] = true;
    DelegatingStreamSink[dart.implements] = () => [async.StreamSink$(T)];
    dart.setMethodSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getMethods(DelegatingStreamSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getGetters(DelegatingStreamSink.__proto__),
      done: async.Future
    }));
    dart.setLibraryUri(DelegatingStreamSink, "package:async/src/delegate/stream_sink.dart");
    dart.setFieldSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getFields(DelegatingStreamSink.__proto__),
      [_sink$]: dart.finalFieldType(async.StreamSink)
    }));
    return DelegatingStreamSink;
  });
  src__delegate__stream_sink.DelegatingStreamSink = src__delegate__stream_sink.DelegatingStreamSink$();
  dart.addTypeTests(src__delegate__stream_sink.DelegatingStreamSink, _is_DelegatingStreamSink_default);
  const _transformer$ = dart.privateName(src__stream_sink_transformer__stream_transformer_wrapper, "_transformer");
  const _is_StreamTransformerWrapper_default = Symbol('_is_StreamTransformerWrapper_default');
  src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper$ = dart.generic((S, T) => {
    let _StreamTransformerWrapperSinkOfS$T = () => (_StreamTransformerWrapperSinkOfS$T = dart.constFn(src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink$(S, T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class StreamTransformerWrapper extends core.Object {
      bind(sink) {
        StreamSinkOfT()._check(sink);
        return new (_StreamTransformerWrapperSinkOfS$T()).new(this[_transformer$], sink);
      }
    }
    (StreamTransformerWrapper.new = function(_transformer) {
      this[_transformer$] = _transformer;
      ;
    }).prototype = StreamTransformerWrapper.prototype;
    dart.addTypeTests(StreamTransformerWrapper);
    StreamTransformerWrapper.prototype[_is_StreamTransformerWrapper_default] = true;
    StreamTransformerWrapper[dart.implements] = () => [src__stream_sink_transformer.StreamSinkTransformer$(S, T)];
    dart.setMethodSignature(StreamTransformerWrapper, () => ({
      __proto__: dart.getMethods(StreamTransformerWrapper.__proto__),
      bind: dart.fnType(async.StreamSink$(S), [core.Object])
    }));
    dart.setLibraryUri(StreamTransformerWrapper, "package:async/src/stream_sink_transformer/stream_transformer_wrapper.dart");
    dart.setFieldSignature(StreamTransformerWrapper, () => ({
      __proto__: dart.getFields(StreamTransformerWrapper.__proto__),
      [_transformer$]: dart.finalFieldType(async.StreamTransformer$(S, T))
    }));
    return StreamTransformerWrapper;
  });
  src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper = src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper$();
  dart.addTypeTests(src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper, _is_StreamTransformerWrapper_default);
  const _controller$ = dart.privateName(src__stream_sink_transformer__stream_transformer_wrapper, "_controller");
  const _inner$1 = dart.privateName(src__stream_sink_transformer__stream_transformer_wrapper, "_inner");
  const _is__StreamTransformerWrapperSink_default = Symbol('_is__StreamTransformerWrapperSink_default');
  src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink$ = dart.generic((S, T) => {
    let StreamControllerOfS = () => (StreamControllerOfS = dart.constFn(async.StreamController$(S)))();
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class _StreamTransformerWrapperSink extends core.Object {
      get done() {
        return this[_inner$1].done;
      }
      add(event) {
        S._check(event);
        this[_controller$].add(event);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_controller$].addError(error, stackTrace);
      }
      addStream(stream) {
        StreamOfS()._check(stream);
        return this[_controller$].addStream(stream);
      }
      close() {
        this[_controller$].close();
        return this[_inner$1].done;
      }
    }
    (_StreamTransformerWrapperSink.new = function(transformer, _inner) {
      this[_controller$] = StreamControllerOfS().new({sync: true});
      this[_inner$1] = _inner;
      this[_controller$].stream.transform(T, transformer).listen(dart.bind(this[_inner$1], 'add'), {onError: dart.bind(this[_inner$1], 'addError'), onDone: dart.fn(() => {
          this[_inner$1].close().catchError(dart.fn(_ => {
          }, dynamicToNull()));
        }, VoidToNull())});
    }).prototype = _StreamTransformerWrapperSink.prototype;
    dart.addTypeTests(_StreamTransformerWrapperSink);
    _StreamTransformerWrapperSink.prototype[_is__StreamTransformerWrapperSink_default] = true;
    _StreamTransformerWrapperSink[dart.implements] = () => [async.StreamSink$(S)];
    dart.setMethodSignature(_StreamTransformerWrapperSink, () => ({
      __proto__: dart.getMethods(_StreamTransformerWrapperSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(_StreamTransformerWrapperSink, () => ({
      __proto__: dart.getGetters(_StreamTransformerWrapperSink.__proto__),
      done: async.Future
    }));
    dart.setLibraryUri(_StreamTransformerWrapperSink, "package:async/src/stream_sink_transformer/stream_transformer_wrapper.dart");
    dart.setFieldSignature(_StreamTransformerWrapperSink, () => ({
      __proto__: dart.getFields(_StreamTransformerWrapperSink.__proto__),
      [_controller$]: dart.finalFieldType(async.StreamController$(S)),
      [_inner$1]: dart.finalFieldType(async.StreamSink$(T))
    }));
    return _StreamTransformerWrapperSink;
  });
  src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink = src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink$();
  dart.addTypeTests(src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink, _is__StreamTransformerWrapperSink_default);
  const _handleData$ = dart.privateName(src__stream_sink_transformer__handler_transformer, "_handleData");
  const _handleError$ = dart.privateName(src__stream_sink_transformer__handler_transformer, "_handleError");
  const _handleDone$ = dart.privateName(src__stream_sink_transformer__handler_transformer, "_handleDone");
  const _is_HandlerTransformer_default = Symbol('_is_HandlerTransformer_default');
  src__stream_sink_transformer__handler_transformer.HandlerTransformer$ = dart.generic((S, T) => {
    let _HandlerSinkOfS$T = () => (_HandlerSinkOfS$T = dart.constFn(src__stream_sink_transformer__handler_transformer._HandlerSink$(S, T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class HandlerTransformer extends core.Object {
      bind(sink) {
        StreamSinkOfT()._check(sink);
        return new (_HandlerSinkOfS$T()).new(this, sink);
      }
    }
    (HandlerTransformer.new = function(_handleData, _handleError, _handleDone) {
      this[_handleData$] = _handleData;
      this[_handleError$] = _handleError;
      this[_handleDone$] = _handleDone;
      ;
    }).prototype = HandlerTransformer.prototype;
    dart.addTypeTests(HandlerTransformer);
    HandlerTransformer.prototype[_is_HandlerTransformer_default] = true;
    HandlerTransformer[dart.implements] = () => [src__stream_sink_transformer.StreamSinkTransformer$(S, T)];
    dart.setMethodSignature(HandlerTransformer, () => ({
      __proto__: dart.getMethods(HandlerTransformer.__proto__),
      bind: dart.fnType(async.StreamSink$(S), [core.Object])
    }));
    dart.setLibraryUri(HandlerTransformer, "package:async/src/stream_sink_transformer/handler_transformer.dart");
    dart.setFieldSignature(HandlerTransformer, () => ({
      __proto__: dart.getFields(HandlerTransformer.__proto__),
      [_handleData$]: dart.finalFieldType(dart.fnType(dart.void, [S, async.EventSink$(T)])),
      [_handleError$]: dart.finalFieldType(dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(T)])),
      [_handleDone$]: dart.finalFieldType(dart.fnType(dart.void, [async.EventSink$(T)]))
    }));
    return HandlerTransformer;
  });
  src__stream_sink_transformer__handler_transformer.HandlerTransformer = src__stream_sink_transformer__handler_transformer.HandlerTransformer$();
  dart.addTypeTests(src__stream_sink_transformer__handler_transformer.HandlerTransformer, _is_HandlerTransformer_default);
  const _transformer$0 = dart.privateName(src__stream_sink_transformer__handler_transformer, "_transformer");
  const _inner = dart.privateName(src__stream_sink_transformer__handler_transformer, "_inner");
  const _safeCloseInner = dart.privateName(src__stream_sink_transformer__handler_transformer, "_safeCloseInner");
  const _is__HandlerSink_default = Symbol('_is__HandlerSink_default');
  src__stream_sink_transformer__handler_transformer._HandlerSink$ = dart.generic((S, T) => {
    let SAndEventSinkOfTTovoid = () => (SAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [S, EventSinkOfT()])))();
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let _StreamHandlerTransformerOfS$T = () => (_StreamHandlerTransformerOfS$T = dart.constFn(async._StreamHandlerTransformer$(S, T)))();
    let _SafeCloseSinkOfT = () => (_SafeCloseSinkOfT = dart.constFn(src__stream_sink_transformer__handler_transformer._SafeCloseSink$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let ObjectAndStackTraceAndEventSinkOfTTovoid = () => (ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, EventSinkOfT()])))();
    let EventSinkOfTTovoid = () => (EventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [EventSinkOfT()])))();
    class _HandlerSink extends core.Object {
      get done() {
        return this[_inner].done;
      }
      add(event) {
        S._check(event);
        if (SAndEventSinkOfTTovoid()._check(this[_transformer$0][_handleData$]) == null) {
          this[_inner].add(T.as(event));
        } else {
          SAndEventSinkOfTTovoid()._check(this[_transformer$0][_handleData$])(event, this[_safeCloseInner]);
        }
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (ObjectAndStackTraceAndEventSinkOfTTovoid()._check(this[_transformer$0][_handleError$]) == null) {
          this[_inner].addError(error, stackTrace);
        } else {
          ObjectAndStackTraceAndEventSinkOfTTovoid()._check(this[_transformer$0][_handleError$])(error, stackTrace, this[_safeCloseInner]);
        }
      }
      addStream(stream) {
        StreamOfS()._check(stream);
        return this[_inner].addStream(stream.transform(T, new (_StreamHandlerTransformerOfS$T()).new({handleData: SAndEventSinkOfTTovoid()._check(this[_transformer$0][_handleData$]), handleError: ObjectAndStackTraceAndEventSinkOfTTovoid()._check(this[_transformer$0][_handleError$]), handleDone: dart.fn(src__stream_sink_transformer__handler_transformer._closeSink, EventSinkTovoid())})));
      }
      close() {
        if (EventSinkOfTTovoid()._check(this[_transformer$0][_handleDone$]) == null) return this[_inner].close();
        EventSinkOfTTovoid()._check(this[_transformer$0][_handleDone$])(this[_safeCloseInner]);
        return this[_inner].done;
      }
    }
    (_HandlerSink.new = function(_transformer, inner) {
      this[_transformer$0] = _transformer;
      this[_inner] = inner;
      this[_safeCloseInner] = new (_SafeCloseSinkOfT()).new(inner);
      ;
    }).prototype = _HandlerSink.prototype;
    dart.addTypeTests(_HandlerSink);
    _HandlerSink.prototype[_is__HandlerSink_default] = true;
    _HandlerSink[dart.implements] = () => [async.StreamSink$(S)];
    dart.setMethodSignature(_HandlerSink, () => ({
      __proto__: dart.getMethods(_HandlerSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(_HandlerSink, () => ({
      __proto__: dart.getGetters(_HandlerSink.__proto__),
      done: async.Future
    }));
    dart.setLibraryUri(_HandlerSink, "package:async/src/stream_sink_transformer/handler_transformer.dart");
    dart.setFieldSignature(_HandlerSink, () => ({
      __proto__: dart.getFields(_HandlerSink.__proto__),
      [_transformer$0]: dart.finalFieldType(src__stream_sink_transformer__handler_transformer.HandlerTransformer$(S, T)),
      [_inner]: dart.finalFieldType(async.StreamSink$(T)),
      [_safeCloseInner]: dart.finalFieldType(async.StreamSink$(T))
    }));
    return _HandlerSink;
  });
  src__stream_sink_transformer__handler_transformer._HandlerSink = src__stream_sink_transformer__handler_transformer._HandlerSink$();
  dart.addTypeTests(src__stream_sink_transformer__handler_transformer._HandlerSink, _is__HandlerSink_default);
  const _is__SafeCloseSink_default = Symbol('_is__SafeCloseSink_default');
  src__stream_sink_transformer__handler_transformer._SafeCloseSink$ = dart.generic(T => {
    class _SafeCloseSink extends src__delegate__stream_sink.DelegatingStreamSink$(T) {
      close() {
        return super.close().catchError(dart.fn(_ => {
        }, dynamicToNull()));
      }
    }
    (_SafeCloseSink.new = function(inner) {
      _SafeCloseSink.__proto__.new.call(this, inner);
      ;
    }).prototype = _SafeCloseSink.prototype;
    dart.addTypeTests(_SafeCloseSink);
    _SafeCloseSink.prototype[_is__SafeCloseSink_default] = true;
    dart.setLibraryUri(_SafeCloseSink, "package:async/src/stream_sink_transformer/handler_transformer.dart");
    return _SafeCloseSink;
  });
  src__stream_sink_transformer__handler_transformer._SafeCloseSink = src__stream_sink_transformer__handler_transformer._SafeCloseSink$();
  dart.addTypeTests(src__stream_sink_transformer__handler_transformer._SafeCloseSink, _is__SafeCloseSink_default);
  src__stream_sink_transformer__handler_transformer._closeSink = function(sink) {
    sink.close();
  };
  const _is_ValueResult_default = Symbol('_is_ValueResult_default');
  src__result__value.ValueResult$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class ValueResult extends core.Object {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get isValue() {
        return true;
      }
      get isError() {
        return false;
      }
      get asValue() {
        return this;
      }
      get asError() {
        return null;
      }
      complete(completer) {
        CompleterOfT()._check(completer);
        completer.complete(this.value);
      }
      addTo(sink) {
        EventSinkOfT()._check(sink);
        sink.add(this.value);
      }
      get asFuture() {
        return FutureOfT().value(this.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.value)) ^ 842997089) >>> 0;
      }
      _equals(other) {
        if (other == null) return false;
        return src__result__value.ValueResult.is(other) && dart.equals(this.value, other.value);
      }
    }
    (ValueResult.new = function(value) {
      this[value$] = value;
      ;
    }).prototype = ValueResult.prototype;
    dart.addTypeTests(ValueResult);
    ValueResult.prototype[_is_ValueResult_default] = true;
    const value$ = Symbol("ValueResult.value");
    ValueResult[dart.implements] = () => [src__result__result.Result$(T)];
    dart.setMethodSignature(ValueResult, () => ({
      __proto__: dart.getMethods(ValueResult.__proto__),
      complete: dart.fnType(dart.void, [core.Object]),
      addTo: dart.fnType(dart.void, [core.Object]),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(ValueResult, () => ({
      __proto__: dart.getGetters(ValueResult.__proto__),
      isValue: core.bool,
      isError: core.bool,
      asValue: src__result__value.ValueResult$(T),
      asError: src__result__error.ErrorResult,
      asFuture: async.Future$(T)
    }));
    dart.setLibraryUri(ValueResult, "package:async/src/result/value.dart");
    dart.setFieldSignature(ValueResult, () => ({
      __proto__: dart.getFields(ValueResult.__proto__),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(ValueResult, ['_equals']);
    dart.defineExtensionAccessors(ValueResult, ['hashCode']);
    return ValueResult;
  });
  src__result__value.ValueResult = src__result__value.ValueResult$();
  dart.addTypeTests(src__result__value.ValueResult, _is_ValueResult_default);
  src__result__error.ErrorResult = class ErrorResult extends core.Object {
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get stackTrace() {
      return this[stackTrace$];
    }
    set stackTrace(value) {
      super.stackTrace = value;
    }
    get isValue() {
      return false;
    }
    get isError() {
      return true;
    }
    get asValue() {
      return null;
    }
    get asError() {
      return this;
    }
    complete(completer) {
      async.Completer._check(completer);
      completer.completeError(this.error, this.stackTrace);
    }
    addTo(sink) {
      async.EventSink._check(sink);
      sink.addError(this.error, this.stackTrace);
    }
    get asFuture() {
      return FutureOfNull().error(this.error, this.stackTrace);
    }
    handle(errorHandler) {
      if (dynamicAnddynamicTodynamic().is(errorHandler)) {
        errorHandler(this.error, this.stackTrace);
      } else {
        dart.dcall(errorHandler, [this.error]);
      }
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stackTrace)) ^ 492929599) >>> 0;
    }
    _equals(other) {
      if (other == null) return false;
      return src__result__error.ErrorResult.is(other) && dart.equals(this.error, other.error) && dart.equals(this.stackTrace, other.stackTrace);
    }
  };
  (src__result__error.ErrorResult.new = function(error, stackTrace) {
    this[error$] = error;
    this[stackTrace$] = stackTrace;
    ;
  }).prototype = src__result__error.ErrorResult.prototype;
  dart.addTypeTests(src__result__error.ErrorResult);
  const error$ = Symbol("ErrorResult.error");
  const stackTrace$ = Symbol("ErrorResult.stackTrace");
  src__result__error.ErrorResult[dart.implements] = () => [src__result__result.Result$(core.Null)];
  dart.setMethodSignature(src__result__error.ErrorResult, () => ({
    __proto__: dart.getMethods(src__result__error.ErrorResult.__proto__),
    complete: dart.fnType(dart.void, [core.Object]),
    addTo: dart.fnType(dart.void, [core.Object]),
    handle: dart.fnType(dart.void, [core.Function]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(src__result__error.ErrorResult, () => ({
    __proto__: dart.getGetters(src__result__error.ErrorResult.__proto__),
    isValue: core.bool,
    isError: core.bool,
    asValue: src__result__value.ValueResult$(core.Null),
    asError: src__result__error.ErrorResult,
    asFuture: async.Future$(core.Null)
  }));
  dart.setLibraryUri(src__result__error.ErrorResult, "package:async/src/result/error.dart");
  dart.setFieldSignature(src__result__error.ErrorResult, () => ({
    __proto__: dart.getFields(src__result__error.ErrorResult.__proto__),
    error: dart.finalFieldType(core.Object),
    stackTrace: dart.finalFieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(src__result__error.ErrorResult, ['_equals']);
  dart.defineExtensionAccessors(src__result__error.ErrorResult, ['hashCode']);
  const _is_ReleaseStreamTransformer_default = Symbol('_is_ReleaseStreamTransformer_default');
  src__result__release_transformer.ReleaseStreamTransformer$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let StreamOfResultOfT = () => (StreamOfResultOfT = dart.constFn(async.Stream$(ResultOfT())))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ReleaseStreamTransformer extends async.StreamTransformerBase$(src__result__result.Result$(T), T) {
      bind(source) {
        StreamOfResultOfT()._check(source);
        return StreamOfT().eventTransformed(source, dart.fn(src__result__release_transformer.ReleaseStreamTransformer._createSink, EventSinkToEventSinkOfResult()));
      }
      static _createSink(sink) {
        return new src__result__release_sink.ReleaseSink.new(sink);
      }
    }
    (ReleaseStreamTransformer.new = function() {
      ReleaseStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = ReleaseStreamTransformer.prototype;
    dart.addTypeTests(ReleaseStreamTransformer);
    ReleaseStreamTransformer.prototype[_is_ReleaseStreamTransformer_default] = true;
    dart.setMethodSignature(ReleaseStreamTransformer, () => ({
      __proto__: dart.getMethods(ReleaseStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(ReleaseStreamTransformer, "package:async/src/result/release_transformer.dart");
    return ReleaseStreamTransformer;
  });
  src__result__release_transformer.ReleaseStreamTransformer = src__result__release_transformer.ReleaseStreamTransformer$();
  dart.addTypeTests(src__result__release_transformer.ReleaseStreamTransformer, _is_ReleaseStreamTransformer_default);
  const _sink$0 = dart.privateName(src__result__release_sink, "_sink");
  const _is_ReleaseSink_default = Symbol('_is_ReleaseSink_default');
  src__result__release_sink.ReleaseSink$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    class ReleaseSink extends core.Object {
      add(result) {
        ResultOfT()._check(result);
        result.addTo(EventSinkOfT()._check(this[_sink$0]));
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_sink$0].addError(error, stackTrace);
      }
      close() {
        this[_sink$0].close();
      }
    }
    (ReleaseSink.new = function(sink) {
      this[_sink$0] = sink;
      ;
    }).prototype = ReleaseSink.prototype;
    dart.addTypeTests(ReleaseSink);
    ReleaseSink.prototype[_is_ReleaseSink_default] = true;
    ReleaseSink[dart.implements] = () => [async.EventSink$(src__result__result.Result$(T))];
    dart.setMethodSignature(ReleaseSink, () => ({
      __proto__: dart.getMethods(ReleaseSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ReleaseSink, "package:async/src/result/release_sink.dart");
    dart.setFieldSignature(ReleaseSink, () => ({
      __proto__: dart.getFields(ReleaseSink.__proto__),
      [_sink$0]: dart.finalFieldType(async.EventSink)
    }));
    return ReleaseSink;
  });
  src__result__release_sink.ReleaseSink = src__result__release_sink.ReleaseSink$();
  dart.addTypeTests(src__result__release_sink.ReleaseSink, _is_ReleaseSink_default);
  const _is_CaptureStreamTransformer_default = Symbol('_is_CaptureStreamTransformer_default');
  src__result__capture_transformer.CaptureStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let StreamOfResultOfT = () => (StreamOfResultOfT = dart.constFn(async.Stream$(ResultOfT())))();
    let CaptureSinkOfT = () => (CaptureSinkOfT = dart.constFn(src__result__capture_sink.CaptureSink$(T)))();
    let EventSinkOfResultOfT = () => (EventSinkOfResultOfT = dart.constFn(async.EventSink$(ResultOfT())))();
    let EventSinkOfResultOfTToCaptureSinkOfT = () => (EventSinkOfResultOfTToCaptureSinkOfT = dart.constFn(dart.fnType(CaptureSinkOfT(), [EventSinkOfResultOfT()])))();
    class CaptureStreamTransformer extends async.StreamTransformerBase$(T, src__result__result.Result$(T)) {
      bind(source) {
        StreamOfT()._check(source);
        return StreamOfResultOfT().eventTransformed(source, dart.fn(sink => new (CaptureSinkOfT()).new(sink), EventSinkOfResultOfTToCaptureSinkOfT()));
      }
    }
    (CaptureStreamTransformer.new = function() {
      CaptureStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = CaptureStreamTransformer.prototype;
    dart.addTypeTests(CaptureStreamTransformer);
    CaptureStreamTransformer.prototype[_is_CaptureStreamTransformer_default] = true;
    dart.setMethodSignature(CaptureStreamTransformer, () => ({
      __proto__: dart.getMethods(CaptureStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(src__result__result.Result$(T)), [core.Object])
    }));
    dart.setLibraryUri(CaptureStreamTransformer, "package:async/src/result/capture_transformer.dart");
    return CaptureStreamTransformer;
  });
  src__result__capture_transformer.CaptureStreamTransformer = src__result__capture_transformer.CaptureStreamTransformer$();
  dart.addTypeTests(src__result__capture_transformer.CaptureStreamTransformer, _is_CaptureStreamTransformer_default);
  const _sink$1 = dart.privateName(src__result__capture_sink, "_sink");
  const _is_CaptureSink_default = Symbol('_is_CaptureSink_default');
  src__result__capture_sink.CaptureSink$ = dart.generic(T => {
    let ValueResultOfT = () => (ValueResultOfT = dart.constFn(src__result__value.ValueResult$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    class CaptureSink extends core.Object {
      add(value) {
        T._check(value);
        this[_sink$1].add(new (ValueResultOfT()).new(value));
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_sink$1].add(ResultOfT().error(error, stackTrace));
      }
      close() {
        this[_sink$1].close();
      }
    }
    (CaptureSink.new = function(sink) {
      this[_sink$1] = sink;
      ;
    }).prototype = CaptureSink.prototype;
    dart.addTypeTests(CaptureSink);
    CaptureSink.prototype[_is_CaptureSink_default] = true;
    CaptureSink[dart.implements] = () => [async.EventSink$(T)];
    dart.setMethodSignature(CaptureSink, () => ({
      __proto__: dart.getMethods(CaptureSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(CaptureSink, "package:async/src/result/capture_sink.dart");
    dart.setFieldSignature(CaptureSink, () => ({
      __proto__: dart.getFields(CaptureSink.__proto__),
      [_sink$1]: dart.finalFieldType(async.EventSink$(src__result__result.Result$(T)))
    }));
    return CaptureSink;
  });
  src__result__capture_sink.CaptureSink = src__result__capture_sink.CaptureSink$();
  dart.addTypeTests(src__result__capture_sink.CaptureSink, _is_CaptureSink_default);
  const _source = dart.privateName(src__delegate__stream_subscription, "_source");
  const _is_DelegatingStreamSubscription_default = Symbol('_is_DelegatingStreamSubscription_default');
  src__delegate__stream_subscription.DelegatingStreamSubscription$ = dart.generic(T => {
    class DelegatingStreamSubscription extends core.Object {
      static typed(T, subscription) {
        return async.StreamSubscription$(T).is(subscription) ? subscription : new (src__typed__stream_subscription.TypeSafeStreamSubscription$(T)).new(subscription);
      }
      onData(handleData) {
        this[_source].onData(handleData);
      }
      onError(handleError) {
        this[_source].onError(handleError);
      }
      onDone(handleDone) {
        this[_source].onDone(handleDone);
      }
      pause(resumeFuture) {
        if (resumeFuture === void 0) resumeFuture = null;
        this[_source].pause(resumeFuture);
      }
      resume() {
        this[_source].resume();
      }
      cancel() {
        return this[_source].cancel();
      }
      asFuture(E, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return this[_source].asFuture(E, futureValue);
      }
      get isPaused() {
        return this[_source].isPaused;
      }
    }
    (DelegatingStreamSubscription.new = function(sourceSubscription) {
      this[_source] = sourceSubscription;
      ;
    }).prototype = DelegatingStreamSubscription.prototype;
    DelegatingStreamSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(DelegatingStreamSubscription);
    DelegatingStreamSubscription.prototype[_is_DelegatingStreamSubscription_default] = true;
    DelegatingStreamSubscription[dart.implements] = () => [async.StreamSubscription$(T)];
    dart.setMethodSignature(DelegatingStreamSubscription, () => ({
      __proto__: dart.getMethods(DelegatingStreamSubscription.__proto__),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]])
    }));
    dart.setGetterSignature(DelegatingStreamSubscription, () => ({
      __proto__: dart.getGetters(DelegatingStreamSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setLibraryUri(DelegatingStreamSubscription, "package:async/src/delegate/stream_subscription.dart");
    dart.setFieldSignature(DelegatingStreamSubscription, () => ({
      __proto__: dart.getFields(DelegatingStreamSubscription.__proto__),
      [_source]: dart.finalFieldType(async.StreamSubscription$(T))
    }));
    return DelegatingStreamSubscription;
  });
  src__delegate__stream_subscription.DelegatingStreamSubscription = src__delegate__stream_subscription.DelegatingStreamSubscription$();
  dart.addTypeTests(src__delegate__stream_subscription.DelegatingStreamSubscription, _is_DelegatingStreamSubscription_default);
  const _subscription$ = dart.privateName(src__typed__stream_subscription, "_subscription");
  const _is_TypeSafeStreamSubscription_default = Symbol('_is_TypeSafeStreamSubscription_default');
  src__typed__stream_subscription.TypeSafeStreamSubscription$ = dart.generic(T => {
    class TypeSafeStreamSubscription extends core.Object {
      get isPaused() {
        return this[_subscription$].isPaused;
      }
      onData(handleData) {
        this[_subscription$].onData(dart.fn(data => handleData(T.as(data)), dynamicTovoid()));
      }
      onError(handleError) {
        this[_subscription$].onError(handleError);
      }
      onDone(handleDone) {
        this[_subscription$].onDone(handleDone);
      }
      pause(resumeFuture) {
        if (resumeFuture === void 0) resumeFuture = null;
        this[_subscription$].pause(resumeFuture);
      }
      resume() {
        this[_subscription$].resume();
      }
      cancel() {
        return this[_subscription$].cancel();
      }
      asFuture(E, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return this[_subscription$].asFuture(E, futureValue);
      }
    }
    (TypeSafeStreamSubscription.new = function(_subscription) {
      this[_subscription$] = _subscription;
      ;
    }).prototype = TypeSafeStreamSubscription.prototype;
    TypeSafeStreamSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(TypeSafeStreamSubscription);
    TypeSafeStreamSubscription.prototype[_is_TypeSafeStreamSubscription_default] = true;
    TypeSafeStreamSubscription[dart.implements] = () => [async.StreamSubscription$(T)];
    dart.setMethodSignature(TypeSafeStreamSubscription, () => ({
      __proto__: dart.getMethods(TypeSafeStreamSubscription.__proto__),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]])
    }));
    dart.setGetterSignature(TypeSafeStreamSubscription, () => ({
      __proto__: dart.getGetters(TypeSafeStreamSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setLibraryUri(TypeSafeStreamSubscription, "package:async/src/typed/stream_subscription.dart");
    dart.setFieldSignature(TypeSafeStreamSubscription, () => ({
      __proto__: dart.getFields(TypeSafeStreamSubscription.__proto__),
      [_subscription$]: dart.finalFieldType(async.StreamSubscription)
    }));
    return TypeSafeStreamSubscription;
  });
  src__typed__stream_subscription.TypeSafeStreamSubscription = src__typed__stream_subscription.TypeSafeStreamSubscription$();
  dart.addTypeTests(src__typed__stream_subscription.TypeSafeStreamSubscription, _is_TypeSafeStreamSubscription_default);
  const _stream = dart.privateName(src__stream_completer, "_stream");
  const _isSourceStreamSet = dart.privateName(src__stream_completer, "_isSourceStreamSet");
  const _setSourceStream = dart.privateName(src__stream_completer, "_setSourceStream");
  const _setEmpty = dart.privateName(src__stream_completer, "_setEmpty");
  const _is_StreamCompleter_default = Symbol('_is_StreamCompleter_default');
  src__stream_completer.StreamCompleter$ = dart.generic(T => {
    let _CompleterStreamOfT = () => (_CompleterStreamOfT = dart.constFn(src__stream_completer._CompleterStream$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class StreamCompleter extends core.Object {
      static fromFuture(T, streamFuture) {
        let completer = new (src__stream_completer.StreamCompleter$(T)).new();
        streamFuture.then(dart.void, dart.bind(completer, 'setSourceStream'), {onError: dart.bind(completer, 'setError')});
        return completer.stream;
      }
      get stream() {
        return this[_stream];
      }
      setSourceStream(sourceStream) {
        StreamOfT()._check(sourceStream);
        if (dart.test(this[_stream][_isSourceStreamSet])) {
          dart.throw(new core.StateError.new("Source stream already set"));
        }
        this[_stream][_setSourceStream](sourceStream);
      }
      setEmpty() {
        if (dart.test(this[_stream][_isSourceStreamSet])) {
          dart.throw(new core.StateError.new("Source stream already set"));
        }
        this[_stream][_setEmpty]();
      }
      setError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this.setSourceStream(StreamOfT().fromFuture(FutureOfT().error(error, stackTrace)));
      }
    }
    (StreamCompleter.new = function() {
      this[_stream] = new (_CompleterStreamOfT()).new();
      ;
    }).prototype = StreamCompleter.prototype;
    dart.addTypeTests(StreamCompleter);
    StreamCompleter.prototype[_is_StreamCompleter_default] = true;
    dart.setMethodSignature(StreamCompleter, () => ({
      __proto__: dart.getMethods(StreamCompleter.__proto__),
      setSourceStream: dart.fnType(dart.void, [core.Object]),
      setEmpty: dart.fnType(dart.void, []),
      setError: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace])
    }));
    dart.setGetterSignature(StreamCompleter, () => ({
      __proto__: dart.getGetters(StreamCompleter.__proto__),
      stream: async.Stream$(T)
    }));
    dart.setLibraryUri(StreamCompleter, "package:async/src/stream_completer.dart");
    dart.setFieldSignature(StreamCompleter, () => ({
      __proto__: dart.getFields(StreamCompleter.__proto__),
      [_stream]: dart.finalFieldType(src__stream_completer._CompleterStream$(T))
    }));
    return StreamCompleter;
  });
  src__stream_completer.StreamCompleter = src__stream_completer.StreamCompleter$();
  dart.addTypeTests(src__stream_completer.StreamCompleter, _is_StreamCompleter_default);
  const _controller$0 = dart.privateName(src__stream_completer, "_controller");
  const _sourceStream = dart.privateName(src__stream_completer, "_sourceStream");
  const _createController = dart.privateName(src__stream_completer, "_createController");
  const _linkStreamToController = dart.privateName(src__stream_completer, "_linkStreamToController");
  const _is__CompleterStream_default = Symbol('_is__CompleterStream_default');
  src__stream_completer._CompleterStream$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class _CompleterStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_controller$0] == null) {
          if (this[_sourceStream] != null && !dart.test(this[_sourceStream].isBroadcast)) {
            return this[_sourceStream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
          }
          this[_createController]();
          if (this[_sourceStream] != null) {
            this[_linkStreamToController]();
          }
        }
        return this[_controller$0].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      get [_isSourceStreamSet]() {
        return this[_sourceStream] != null;
      }
      [_setSourceStream](sourceStream) {
        StreamOfT()._check(sourceStream);
        if (!(this[_sourceStream] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_completer.dart", 149, 12, "_sourceStream == null");
        this[_sourceStream] = sourceStream;
        if (this[_controller$0] != null) {
          this[_linkStreamToController]();
        }
      }
      [_linkStreamToController]() {
        if (!(this[_controller$0] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_completer.dart", 159, 12, "_controller != null");
        if (!(this[_sourceStream] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_completer.dart", 160, 12, "_sourceStream != null");
        this[_controller$0].addStream(this[_sourceStream], {cancelOnError: false}).whenComplete(dart.bind(this[_controller$0], 'close'));
      }
      [_setEmpty]() {
        if (!(this[_sourceStream] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_completer.dart", 171, 12, "_sourceStream == null");
        if (this[_controller$0] == null) {
          this[_createController]();
        }
        this[_sourceStream] = this[_controller$0].stream;
        this[_controller$0].close();
      }
      [_createController]() {
        if (!(this[_controller$0] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_completer.dart", 181, 12, "_controller == null");
        this[_controller$0] = StreamControllerOfT().new({sync: true});
      }
    }
    (_CompleterStream.new = function() {
      this[_controller$0] = null;
      this[_sourceStream] = null;
      _CompleterStream.__proto__.new.call(this);
      ;
    }).prototype = _CompleterStream.prototype;
    dart.addTypeTests(_CompleterStream);
    _CompleterStream.prototype[_is__CompleterStream_default] = true;
    dart.setMethodSignature(_CompleterStream, () => ({
      __proto__: dart.getMethods(_CompleterStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.dynamic, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}),
      [_setSourceStream]: dart.fnType(dart.void, [core.Object]),
      [_linkStreamToController]: dart.fnType(dart.void, []),
      [_setEmpty]: dart.fnType(dart.void, []),
      [_createController]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_CompleterStream, () => ({
      __proto__: dart.getGetters(_CompleterStream.__proto__),
      [_isSourceStreamSet]: core.bool
    }));
    dart.setLibraryUri(_CompleterStream, "package:async/src/stream_completer.dart");
    dart.setFieldSignature(_CompleterStream, () => ({
      __proto__: dart.getFields(_CompleterStream.__proto__),
      [_controller$0]: dart.fieldType(async.StreamController$(T)),
      [_sourceStream]: dart.fieldType(async.Stream$(T))
    }));
    return _CompleterStream;
  });
  src__stream_completer._CompleterStream = src__stream_completer._CompleterStream$();
  dart.addTypeTests(src__stream_completer._CompleterStream, _is__CompleterStream_default);
  const _inner$2 = dart.privateName(src__typed_stream_transformer, "_inner");
  const _is__TypeSafeStreamTransformer_default = Symbol('_is__TypeSafeStreamTransformer_default');
  src__typed_stream_transformer._TypeSafeStreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class _TypeSafeStreamTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        return src__delegate__stream.DelegatingStream.typed(T, this[_inner$2].bind(stream));
      }
    }
    (_TypeSafeStreamTransformer.new = function(_inner) {
      this[_inner$2] = _inner;
      _TypeSafeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = _TypeSafeStreamTransformer.prototype;
    dart.addTypeTests(_TypeSafeStreamTransformer);
    _TypeSafeStreamTransformer.prototype[_is__TypeSafeStreamTransformer_default] = true;
    dart.setMethodSignature(_TypeSafeStreamTransformer, () => ({
      __proto__: dart.getMethods(_TypeSafeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(_TypeSafeStreamTransformer, "package:async/src/typed_stream_transformer.dart");
    dart.setFieldSignature(_TypeSafeStreamTransformer, () => ({
      __proto__: dart.getFields(_TypeSafeStreamTransformer.__proto__),
      [_inner$2]: dart.finalFieldType(async.StreamTransformer)
    }));
    return _TypeSafeStreamTransformer;
  });
  src__typed_stream_transformer._TypeSafeStreamTransformer = src__typed_stream_transformer._TypeSafeStreamTransformer$();
  dart.addTypeTests(src__typed_stream_transformer._TypeSafeStreamTransformer, _is__TypeSafeStreamTransformer_default);
  src__typed_stream_transformer.typedStreamTransformer = function(S, T, transformer) {
    return async.StreamTransformer$(S, T).is(transformer) ? transformer : new (src__typed_stream_transformer._TypeSafeStreamTransformer$(S, T)).new(transformer);
  };
  const _is_DelegatingStream_default = Symbol('_is_DelegatingStream_default');
  src__delegate__stream.DelegatingStream$ = dart.generic(T => {
    class DelegatingStream extends async.StreamView$(T) {
      static typed(T, stream) {
        return stream.cast(T);
      }
    }
    (DelegatingStream.new = function(stream) {
      DelegatingStream.__proto__.new.call(this, stream);
      ;
    }).prototype = DelegatingStream.prototype;
    dart.addTypeTests(DelegatingStream);
    DelegatingStream.prototype[_is_DelegatingStream_default] = true;
    dart.setLibraryUri(DelegatingStream, "package:async/src/delegate/stream.dart");
    return DelegatingStream;
  });
  src__delegate__stream.DelegatingStream = src__delegate__stream.DelegatingStream$();
  dart.addTypeTests(src__delegate__stream.DelegatingStream, _is_DelegatingStream_default);
  const _source$ = dart.privateName(src__subscription_stream, "_source");
  const _is_SubscriptionStream_default = Symbol('_is_SubscriptionStream_default');
  src__subscription_stream.SubscriptionStream$ = dart.generic(T => {
    let _CancelOnErrorSubscriptionWrapperOfT = () => (_CancelOnErrorSubscriptionWrapperOfT = dart.constFn(src__subscription_stream._CancelOnErrorSubscriptionWrapper$(T)))();
    class SubscriptionStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_source$] == null) {
          dart.throw(new core.StateError.new("Stream has already been listened to."));
        }
        cancelOnError = true[$_equals](cancelOnError);
        let subscription = this[_source$];
        this[_source$] = null;
        let result = dart.test(cancelOnError) ? new (_CancelOnErrorSubscriptionWrapperOfT()).new(subscription) : subscription;
        result.onData(onData);
        result.onError(onError);
        result.onDone(onDone);
        subscription.resume();
        return result;
      }
    }
    (SubscriptionStream.new = function(subscription) {
      this[_source$] = subscription;
      SubscriptionStream.__proto__.new.call(this);
      this[_source$].pause();
      this[_source$].onData(null);
      this[_source$].onError(null);
      this[_source$].onDone(null);
    }).prototype = SubscriptionStream.prototype;
    dart.addTypeTests(SubscriptionStream);
    SubscriptionStream.prototype[_is_SubscriptionStream_default] = true;
    dart.setMethodSignature(SubscriptionStream, () => ({
      __proto__: dart.getMethods(SubscriptionStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(SubscriptionStream, "package:async/src/subscription_stream.dart");
    dart.setFieldSignature(SubscriptionStream, () => ({
      __proto__: dart.getFields(SubscriptionStream.__proto__),
      [_source$]: dart.fieldType(async.StreamSubscription$(T))
    }));
    return SubscriptionStream;
  });
  src__subscription_stream.SubscriptionStream = src__subscription_stream.SubscriptionStream$();
  dart.addTypeTests(src__subscription_stream.SubscriptionStream, _is_SubscriptionStream_default);
  const _is__CancelOnErrorSubscriptionWrapper_default = Symbol('_is__CancelOnErrorSubscriptionWrapper_default');
  src__subscription_stream._CancelOnErrorSubscriptionWrapper$ = dart.generic(T => {
    class _CancelOnErrorSubscriptionWrapper extends src__delegate__stream_subscription.DelegatingStreamSubscription$(T) {
      onError(handleError) {
        super.onError(dart.fn((error, stackTrace) => {
          let cancelFuture = super.cancel();
          if (cancelFuture != null) {
            cancelFuture.whenComplete(dart.fn(() => {
              if (dynamicAnddynamicTodynamic().is(handleError)) {
                handleError(error, stackTrace);
              } else {
                dart.dcall(handleError, [error]);
              }
            }, VoidToNull()));
          } else {
            if (dynamicAnddynamicTodynamic().is(handleError)) {
              handleError(error, stackTrace);
            } else {
              dart.dcall(handleError, [error]);
            }
          }
        }, dynamicAndStackTraceToNull()));
      }
    }
    (_CancelOnErrorSubscriptionWrapper.new = function(subscription) {
      _CancelOnErrorSubscriptionWrapper.__proto__.new.call(this, subscription);
      ;
    }).prototype = _CancelOnErrorSubscriptionWrapper.prototype;
    dart.addTypeTests(_CancelOnErrorSubscriptionWrapper);
    _CancelOnErrorSubscriptionWrapper.prototype[_is__CancelOnErrorSubscriptionWrapper_default] = true;
    dart.setLibraryUri(_CancelOnErrorSubscriptionWrapper, "package:async/src/subscription_stream.dart");
    return _CancelOnErrorSubscriptionWrapper;
  });
  src__subscription_stream._CancelOnErrorSubscriptionWrapper = src__subscription_stream._CancelOnErrorSubscriptionWrapper$();
  dart.addTypeTests(src__subscription_stream._CancelOnErrorSubscriptionWrapper, _is__CancelOnErrorSubscriptionWrapper_default);
  const _streams = dart.privateName(src__stream_zip, "_streams");
  const _is_StreamZip_default = Symbol('_is_StreamZip_default');
  src__stream_zip.StreamZip$ = dart.generic(T => {
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let JSArrayOfStreamSubscriptionOfT = () => (JSArrayOfStreamSubscriptionOfT = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfT())))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let intAndTTovoid = () => (intAndTTovoid = dart.constFn(dart.fnType(dart.void, [core.int, T])))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let StreamControllerOfListOfT = () => (StreamControllerOfListOfT = dart.constFn(async.StreamController$(ListOfT())))();
    class StreamZip extends async.Stream$(core.List$(T)) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        cancelOnError = true === cancelOnError;
        let subscriptions = JSArrayOfStreamSubscriptionOfT().of([]);
        let controller = null;
        let current = null;
        let dataCount = 0;
        function handleData(index, data) {
          current[$_set](index, data);
          dataCount = dataCount + 1;
          if (dataCount === subscriptions[$length]) {
            let data = current;
            current = ListOfT().new(subscriptions[$length]);
            dataCount = 0;
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i = i + 1) {
              if (i !== index) subscriptions[$_get](i).resume();
            }
            controller.add(data);
          } else {
            subscriptions[$_get](index).pause();
          }
        }
        dart.fn(handleData, intAndTTovoid());
        function handleError(error, stackTrace) {
          controller.addError(error, stackTrace);
        }
        dart.fn(handleError, ObjectAndStackTraceTovoid());
        function handleErrorCancel(error, stackTrace) {
          for (let i = 0; i < dart.notNull(subscriptions[$length]); i = i + 1) {
            subscriptions[$_get](i).cancel();
          }
          controller.addError(error, stackTrace);
        }
        dart.fn(handleErrorCancel, ObjectAndStackTraceTovoid());
        function handleDone() {
          for (let i = 0; i < dart.notNull(subscriptions[$length]); i = i + 1) {
            subscriptions[$_get](i).cancel();
          }
          controller.close();
        }
        dart.fn(handleDone, VoidTovoid());
        try {
          for (let stream of this[_streams]) {
            let index = subscriptions[$length];
            subscriptions[$add](stream.listen(dart.fn(data => {
              handleData(index, data);
            }, TToNull()), {onError: dart.test(cancelOnError) ? handleError : handleErrorCancel, onDone: handleDone, cancelOnError: cancelOnError}));
          }
        } catch (e$) {
          let e = dart.getThrown(e$);
          for (let i = dart.notNull(subscriptions[$length]) - 1; i >= 0; i = i - 1) {
            subscriptions[$_get](i).cancel();
          }
          dart.rethrow(e$);
        }
        current = ListOfT().new(subscriptions[$length]);
        controller = StreamControllerOfListOfT().new({onPause: dart.fn(() => {
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i = i + 1) {
              subscriptions[$_get](i).pause();
            }
          }, VoidToNull()), onResume: dart.fn(() => {
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i = i + 1) {
              subscriptions[$_get](i).resume();
            }
          }, VoidToNull()), onCancel: dart.fn(() => {
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i = i + 1) {
              subscriptions[$_get](i).cancel();
            }
          }, VoidToNull())});
        if (dart.test(subscriptions[$isEmpty])) {
          controller.close();
        }
        return controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (StreamZip.new = function(streams) {
      this[_streams] = streams;
      StreamZip.__proto__.new.call(this);
      ;
    }).prototype = StreamZip.prototype;
    dart.addTypeTests(StreamZip);
    StreamZip.prototype[_is_StreamZip_default] = true;
    dart.setMethodSignature(StreamZip, () => ({
      __proto__: dart.getMethods(StreamZip.__proto__),
      listen: dart.fnType(async.StreamSubscription$(core.List$(T)), [dart.fnType(dart.void, [core.List$(T)])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(StreamZip, "package:async/src/stream_zip.dart");
    dart.setFieldSignature(StreamZip, () => ({
      __proto__: dart.getFields(StreamZip.__proto__),
      [_streams]: dart.finalFieldType(core.Iterable$(async.Stream$(T)))
    }));
    return StreamZip;
  });
  src__stream_zip.StreamZip = src__stream_zip.StreamZip$();
  dart.addTypeTests(src__stream_zip.StreamZip, _is_StreamZip_default);
  const _subscription = dart.privateName(src__stream_splitter, "_subscription");
  const _buffer = dart.privateName(src__stream_splitter, "_buffer");
  const _controllers = dart.privateName(src__stream_splitter, "_controllers");
  const _closeGroup = dart.privateName(src__stream_splitter, "_closeGroup");
  const _isDone = dart.privateName(src__stream_splitter, "_isDone");
  const _isClosed = dart.privateName(src__stream_splitter, "_isClosed");
  const _stream$ = dart.privateName(src__stream_splitter, "_stream");
  const _onListen = dart.privateName(src__stream_splitter, "_onListen");
  const _onPause = dart.privateName(src__stream_splitter, "_onPause");
  const _onResume = dart.privateName(src__stream_splitter, "_onResume");
  const _onCancel = dart.privateName(src__stream_splitter, "_onCancel");
  const _cancelSubscription = dart.privateName(src__stream_splitter, "_cancelSubscription");
  const _onData = dart.privateName(src__stream_splitter, "_onData");
  const _onError = dart.privateName(src__stream_splitter, "_onError");
  const _onDone = dart.privateName(src__stream_splitter, "_onDone");
  const _is_StreamSplitter_default = Symbol('_is_StreamSplitter_default');
  src__stream_splitter.StreamSplitter$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let JSArrayOfResultOfT = () => (JSArrayOfResultOfT = dart.constFn(_interceptors.JSArray$(ResultOfT())))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let _HashSetOfStreamControllerOfT = () => (_HashSetOfStreamControllerOfT = dart.constFn(collection$._HashSet$(StreamControllerOfT())))();
    let StreamControllerOfTTobool = () => (StreamControllerOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamControllerOfT()])))();
    let ValueResultOfT = () => (ValueResultOfT = dart.constFn(src__result__value.ValueResult$(T)))();
    class StreamSplitter extends core.Object {
      static splitFrom(T, stream, count) {
        if (count === void 0) count = null;
        if (count == null) count = 2;
        let splitter = new (src__stream_splitter.StreamSplitter$(T)).new(stream);
        let streams = core.List$(async.Stream$(T)).generate(count, dart.fn(_ => splitter.split(), dart.fnType(async.Stream$(T), [core.int])));
        splitter.close();
        return streams;
      }
      split() {
        if (dart.test(this[_isClosed])) {
          dart.throw(new core.StateError.new("Can't call split() on a closed StreamSplitter."));
        }
        let controller = StreamControllerOfT().new({onListen: dart.bind(this, _onListen), onPause: dart.bind(this, _onPause), onResume: dart.bind(this, _onResume)});
        controller.onCancel = dart.fn(() => this[_onCancel](controller), VoidTovoid());
        for (let result of this[_buffer]) {
          result.addTo(controller);
        }
        if (dart.test(this[_isDone])) {
          this[_closeGroup].add(controller.close());
        } else {
          this[_controllers].add(controller);
        }
        return controller.stream;
      }
      close() {
        if (dart.test(this[_isClosed])) return this[_closeGroup].future;
        this[_isClosed] = true;
        this[_buffer][$clear]();
        if (dart.test(this[_controllers][$isEmpty])) this[_cancelSubscription]();
        return this[_closeGroup].future;
      }
      [_cancelSubscription]() {
        if (!dart.test(this[_controllers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_splitter.dart", 125, 12, "_controllers.isEmpty");
        if (!dart.test(this[_isClosed])) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_splitter.dart", 126, 12, "_isClosed");
        let future = null;
        if (this[_subscription] != null) future = this[_subscription].cancel();
        if (future != null) this[_closeGroup].add(future);
        this[_closeGroup].close();
      }
      [_onListen]() {
        if (dart.test(this[_isDone])) return;
        if (this[_subscription] != null) {
          this[_subscription].resume();
        } else {
          this[_subscription] = this[_stream$].listen(dart.bind(this, _onData), {onError: dart.bind(this, _onError), onDone: dart.bind(this, _onDone)});
        }
      }
      [_onPause]() {
        if (!dart.test(this[_controllers][$every](dart.fn(controller => controller.isPaused, StreamControllerOfTTobool())))) return;
        this[_subscription].pause();
      }
      [_onResume]() {
        this[_subscription].resume();
      }
      [_onCancel](controller) {
        this[_controllers].remove(controller);
        if (dart.test(this[_controllers][$isNotEmpty])) return;
        if (dart.test(this[_isClosed])) {
          this[_cancelSubscription]();
        } else {
          this[_subscription].pause();
        }
      }
      [_onData](data) {
        T._check(data);
        if (!dart.test(this[_isClosed])) this[_buffer][$add](new (ValueResultOfT()).new(data));
        for (let controller of this[_controllers]) {
          controller.add(data);
        }
      }
      [_onError](error, stackTrace) {
        if (!dart.test(this[_isClosed])) this[_buffer][$add](ResultOfT().error(error, stackTrace));
        for (let controller of this[_controllers]) {
          controller.addError(error, stackTrace);
        }
      }
      [_onDone]() {
        this[_isDone] = true;
        for (let controller of this[_controllers]) {
          this[_closeGroup].add(controller.close());
        }
      }
    }
    (StreamSplitter.new = function(_stream) {
      this[_subscription] = null;
      this[_buffer] = JSArrayOfResultOfT().of([]);
      this[_controllers] = new (_HashSetOfStreamControllerOfT()).new();
      this[_closeGroup] = new src__future_group.FutureGroup.new();
      this[_isDone] = false;
      this[_isClosed] = false;
      this[_stream$] = _stream;
      ;
    }).prototype = StreamSplitter.prototype;
    dart.addTypeTests(StreamSplitter);
    StreamSplitter.prototype[_is_StreamSplitter_default] = true;
    dart.setMethodSignature(StreamSplitter, () => ({
      __proto__: dart.getMethods(StreamSplitter.__proto__),
      split: dart.fnType(async.Stream$(T), []),
      close: dart.fnType(async.Future, []),
      [_cancelSubscription]: dart.fnType(dart.void, []),
      [_onListen]: dart.fnType(dart.void, []),
      [_onPause]: dart.fnType(dart.void, []),
      [_onResume]: dart.fnType(dart.void, []),
      [_onCancel]: dart.fnType(dart.void, [async.StreamController]),
      [_onData]: dart.fnType(dart.void, [core.Object]),
      [_onError]: dart.fnType(dart.void, [core.Object, core.StackTrace]),
      [_onDone]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(StreamSplitter, "package:async/src/stream_splitter.dart");
    dart.setFieldSignature(StreamSplitter, () => ({
      __proto__: dart.getFields(StreamSplitter.__proto__),
      [_stream$]: dart.finalFieldType(async.Stream$(T)),
      [_subscription]: dart.fieldType(async.StreamSubscription$(T)),
      [_buffer]: dart.finalFieldType(core.List$(src__result__result.Result$(T))),
      [_controllers]: dart.finalFieldType(core.Set$(async.StreamController$(T))),
      [_closeGroup]: dart.finalFieldType(src__future_group.FutureGroup),
      [_isDone]: dart.fieldType(core.bool),
      [_isClosed]: dart.fieldType(core.bool)
    }));
    return StreamSplitter;
  });
  src__stream_splitter.StreamSplitter = src__stream_splitter.StreamSplitter$();
  dart.addTypeTests(src__stream_splitter.StreamSplitter, _is_StreamSplitter_default);
  const _pending = dart.privateName(src__future_group, "_pending");
  const _closed$ = dart.privateName(src__future_group, "_closed");
  const _completer$ = dart.privateName(src__future_group, "_completer");
  const _onIdleController = dart.privateName(src__future_group, "_onIdleController");
  const _values = dart.privateName(src__future_group, "_values");
  const _is_FutureGroup_default = Symbol('_is_FutureGroup_default');
  src__future_group.FutureGroup$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let CompleterOfListOfT = () => (CompleterOfListOfT = dart.constFn(async.Completer$(ListOfT())))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class FutureGroup extends core.Object {
      get future() {
        return this[_completer$].future;
      }
      get isIdle() {
        return this[_pending] === 0;
      }
      get onIdle() {
        if (this[_onIdleController] == null) {
          this[_onIdleController] = async.StreamController.broadcast({sync: true});
        }
        return this[_onIdleController].stream;
      }
      add(task) {
        FutureOfT()._check(task);
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("The FutureGroup is closed."));
        let index = this[_values][$length];
        this[_values][$add](null);
        this[_pending] = dart.notNull(this[_pending]) + 1;
        task.then(dart.dynamic, dart.fn(value => {
          if (dart.test(this[_completer$].isCompleted)) return null;
          this[_pending] = dart.notNull(this[_pending]) - 1;
          this[_values][$_set](index, value);
          if (this[_pending] !== 0) return null;
          if (this[_onIdleController] != null) this[_onIdleController].add(null);
          if (!dart.test(this[_closed$])) return null;
          if (this[_onIdleController] != null) this[_onIdleController].close();
          this[_completer$].complete(this[_values]);
        }, TToNull())).catchError(dart.fn((error, stackTrace) => {
          if (dart.test(this[_completer$].isCompleted)) return null;
          this[_completer$].completeError(error, core.StackTrace._check(stackTrace));
        }, dynamicAnddynamicToNull()));
      }
      close() {
        this[_closed$] = true;
        if (this[_pending] !== 0) return;
        if (dart.test(this[_completer$].isCompleted)) return;
        this[_completer$].complete(this[_values]);
      }
    }
    (FutureGroup.new = function() {
      this[_pending] = 0;
      this[_closed$] = false;
      this[_completer$] = CompleterOfListOfT().new();
      this[_onIdleController] = null;
      this[_values] = JSArrayOfT().of([]);
      ;
    }).prototype = FutureGroup.prototype;
    dart.addTypeTests(FutureGroup);
    FutureGroup.prototype[_is_FutureGroup_default] = true;
    FutureGroup[dart.implements] = () => [core.Sink$(async.Future$(T))];
    dart.setMethodSignature(FutureGroup, () => ({
      __proto__: dart.getMethods(FutureGroup.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(FutureGroup, () => ({
      __proto__: dart.getGetters(FutureGroup.__proto__),
      future: async.Future$(core.List$(T)),
      isIdle: core.bool,
      onIdle: async.Stream
    }));
    dart.setLibraryUri(FutureGroup, "package:async/src/future_group.dart");
    dart.setFieldSignature(FutureGroup, () => ({
      __proto__: dart.getFields(FutureGroup.__proto__),
      [_pending]: dart.fieldType(core.int),
      [_closed$]: dart.fieldType(core.bool),
      [_completer$]: dart.finalFieldType(async.Completer$(core.List$(T))),
      [_onIdleController]: dart.fieldType(async.StreamController),
      [_values]: dart.finalFieldType(core.List$(T))
    }));
    return FutureGroup;
  });
  src__future_group.FutureGroup = src__future_group.FutureGroup$();
  dart.addTypeTests(src__future_group.FutureGroup, _is_FutureGroup_default);
  const _subscription$0 = dart.privateName(src__stream_queue, "_subscription");
  const _isDone$ = dart.privateName(src__stream_queue, "_isDone");
  const _isClosed$ = dart.privateName(src__stream_queue, "_isClosed");
  const _eventsReceived = dart.privateName(src__stream_queue, "_eventsReceived");
  const _eventQueue = dart.privateName(src__stream_queue, "_eventQueue");
  const _requestQueue = dart.privateName(src__stream_queue, "_requestQueue");
  const _source$0 = dart.privateName(src__stream_queue, "_source");
  const _addRequest = dart.privateName(src__stream_queue, "_addRequest");
  const _failClosed = dart.privateName(src__stream_queue, "_failClosed");
  const _cancel = dart.privateName(src__stream_queue, "_cancel");
  const _pause = dart.privateName(src__stream_queue, "_pause");
  const _updateRequests = dart.privateName(src__stream_queue, "_updateRequests");
  const _extractStream = dart.privateName(src__stream_queue, "_extractStream");
  const _addResult = dart.privateName(src__stream_queue, "_addResult");
  const _close = dart.privateName(src__stream_queue, "_close");
  const _ensureListening = dart.privateName(src__stream_queue, "_ensureListening");
  const _is_StreamQueue_default = Symbol('_is_StreamQueue_default');
  src__stream_queue.StreamQueue$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _HasNextRequestOfT = () => (_HasNextRequestOfT = dart.constFn(src__stream_queue._HasNextRequest$(T)))();
    let _LookAheadRequestOfT = () => (_LookAheadRequestOfT = dart.constFn(src__stream_queue._LookAheadRequest$(T)))();
    let _NextRequestOfT = () => (_NextRequestOfT = dart.constFn(src__stream_queue._NextRequest$(T)))();
    let _PeekRequestOfT = () => (_PeekRequestOfT = dart.constFn(src__stream_queue._PeekRequest$(T)))();
    let _RestRequestOfT = () => (_RestRequestOfT = dart.constFn(src__stream_queue._RestRequest$(T)))();
    let _SkipRequestOfT = () => (_SkipRequestOfT = dart.constFn(src__stream_queue._SkipRequest$(T)))();
    let _TakeRequestOfT = () => (_TakeRequestOfT = dart.constFn(src__stream_queue._TakeRequest$(T)))();
    let _TransactionRequestOfT = () => (_TransactionRequestOfT = dart.constFn(src__stream_queue._TransactionRequest$(T)))();
    let _CancelRequestOfT = () => (_CancelRequestOfT = dart.constFn(src__stream_queue._CancelRequest$(T)))();
    let _EmptyStreamOfT = () => (_EmptyStreamOfT = dart.constFn(async._EmptyStream$(T)))();
    let SubscriptionStreamOfT = () => (SubscriptionStreamOfT = dart.constFn(src__subscription_stream.SubscriptionStream$(T)))();
    let ValueResultOfT = () => (ValueResultOfT = dart.constFn(src__result__value.ValueResult$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class StreamQueue extends core.Object {
      get eventsDispatched() {
        return dart.notNull(this[_eventsReceived]) - dart.notNull(this[_eventQueue].length);
      }
      static new(source) {
        return new (src__stream_queue.StreamQueue$(T)).__(source);
      }
      get hasNext() {
        if (!dart.test(this[_isClosed$])) {
          let hasNextRequest = new (_HasNextRequestOfT()).new();
          this[_addRequest](hasNextRequest);
          return hasNextRequest.future;
        }
        dart.throw(this[_failClosed]());
      }
      lookAhead(count) {
        if (dart.notNull(count) < 0) dart.throw(new core.RangeError.range(count, 0, null, "count"));
        if (!dart.test(this[_isClosed$])) {
          let request = new (_LookAheadRequestOfT()).new(count);
          this[_addRequest](request);
          return request.future;
        }
        dart.throw(this[_failClosed]());
      }
      get next() {
        if (!dart.test(this[_isClosed$])) {
          let nextRequest = new (_NextRequestOfT()).new();
          this[_addRequest](nextRequest);
          return nextRequest.future;
        }
        dart.throw(this[_failClosed]());
      }
      get peek() {
        if (!dart.test(this[_isClosed$])) {
          let nextRequest = new (_PeekRequestOfT()).new();
          this[_addRequest](nextRequest);
          return nextRequest.future;
        }
        dart.throw(this[_failClosed]());
      }
      get rest() {
        if (dart.test(this[_isClosed$])) {
          dart.throw(this[_failClosed]());
        }
        let request = new (_RestRequestOfT()).new(this);
        this[_isClosed$] = true;
        this[_addRequest](request);
        return request.stream;
      }
      skip(count) {
        if (dart.notNull(count) < 0) dart.throw(new core.RangeError.range(count, 0, null, "count"));
        if (!dart.test(this[_isClosed$])) {
          let request = new (_SkipRequestOfT()).new(count);
          this[_addRequest](request);
          return request.future;
        }
        dart.throw(this[_failClosed]());
      }
      take(count) {
        if (dart.notNull(count) < 0) dart.throw(new core.RangeError.range(count, 0, null, "count"));
        if (!dart.test(this[_isClosed$])) {
          let request = new (_TakeRequestOfT()).new(count);
          this[_addRequest](request);
          return request.future;
        }
        dart.throw(this[_failClosed]());
      }
      startTransaction() {
        if (dart.test(this[_isClosed$])) dart.throw(this[_failClosed]());
        let request = new (_TransactionRequestOfT()).new(this);
        this[_addRequest](request);
        return request.transaction;
      }
      withTransaction(callback) {
        let transaction = this.startTransaction();
        let queue = transaction.newQueue();
        return callback(queue).then(core.bool, dart.fn(result => {
          if (dart.test(result)) {
            transaction.commit(queue);
          } else {
            transaction.reject();
          }
          return result;
        }, boolTobool()), {onError: dart.fn(error => {
            transaction.commit(queue);
            dart.throw(error);
          }, dynamicToNull())});
      }
      cancelable(S, callback) {
        let transaction = this.startTransaction();
        let completer = new (src__cancelable_operation.CancelableCompleter$(S)).new({onCancel: dart.fn(() => {
            transaction.reject();
          }, VoidToNull())});
        let queue = transaction.newQueue();
        completer.complete(callback(queue).whenComplete(dart.fn(() => {
          if (!dart.test(completer.isCanceled)) transaction.commit(queue);
        }, VoidToNull())));
        return completer.operation;
      }
      cancel(opts) {
        let immediate = opts && 'immediate' in opts ? opts.immediate : false;
        if (dart.test(this[_isClosed$])) dart.throw(this[_failClosed]());
        this[_isClosed$] = true;
        if (!dart.test(immediate)) {
          let request = new (_CancelRequestOfT()).new(this);
          this[_addRequest](request);
          return request.future;
        }
        if (dart.test(this[_isDone$]) && dart.test(this[_eventQueue][$isEmpty])) return async.Future.value();
        return this[_cancel]();
      }
      [_updateRequests]() {
        while (dart.test(this[_requestQueue][$isNotEmpty])) {
          if (dart.test(this[_requestQueue][$first].update(this[_eventQueue], this[_isDone$]))) {
            this[_requestQueue].removeFirst();
          } else {
            return;
          }
        }
        if (!dart.test(this[_isDone$])) {
          this[_pause]();
        }
      }
      [_extractStream]() {
        if (!dart.test(this[_isClosed$])) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_queue.dart", 445, 12, "_isClosed");
        if (dart.test(this[_isDone$])) {
          return new (_EmptyStreamOfT()).new();
        }
        this[_isDone$] = true;
        if (this[_subscription$0] == null) {
          return this[_source$0];
        }
        let subscription = this[_subscription$0];
        this[_subscription$0] = null;
        let wasPaused = subscription.isPaused;
        let result = new (SubscriptionStreamOfT()).new(subscription);
        if (dart.test(wasPaused)) subscription.resume();
        return result;
      }
      [_pause]() {
        this[_subscription$0].pause();
      }
      [_ensureListening]() {
        if (dart.test(this[_isDone$])) return;
        if (this[_subscription$0] == null) {
          this[_subscription$0] = this[_source$0].listen(dart.fn(data => {
            this[_addResult](new (ValueResultOfT()).new(data));
          }, TToNull()), {onError: dart.fn((error, stackTrace) => {
              this[_addResult](ResultOfT().error(error, stackTrace));
            }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
              this[_subscription$0] = null;
              this[_close]();
            }, VoidToNull())});
        } else {
          this[_subscription$0].resume();
        }
      }
      [_cancel]() {
        if (dart.test(this[_isDone$])) return null;
        this[_subscription$0] == null ? this[_subscription$0] = this[_source$0].listen(null) : null;
        let future = this[_subscription$0].cancel();
        this[_close]();
        return future;
      }
      [_addResult](result) {
        this[_eventsReceived] = dart.notNull(this[_eventsReceived]) + 1;
        this[_eventQueue].add(result);
        this[_updateRequests]();
      }
      [_close]() {
        this[_isDone$] = true;
        this[_updateRequests]();
      }
      [_failClosed]() {
        return new core.StateError.new("Already cancelled");
      }
      [_addRequest](request) {
        if (dart.test(this[_requestQueue][$isEmpty])) {
          if (dart.test(request.update(this[_eventQueue], this[_isDone$]))) return;
          this[_ensureListening]();
        }
        this[_requestQueue].add(request);
      }
    }
    (StreamQueue.__ = function(_source) {
      this[_subscription$0] = null;
      this[_isDone$] = false;
      this[_isClosed$] = false;
      this[_eventsReceived] = 0;
      this[_eventQueue] = new (QueueListOfResultOfT()).new();
      this[_requestQueue] = new (ListQueueOf_EventRequest()).new();
      this[_source$0] = _source;
      ;
    }).prototype = StreamQueue.prototype;
    dart.addTypeTests(StreamQueue);
    StreamQueue.prototype[_is_StreamQueue_default] = true;
    dart.setMethodSignature(StreamQueue, () => ({
      __proto__: dart.getMethods(StreamQueue.__proto__),
      lookAhead: dart.fnType(async.Future$(core.List$(T)), [core.int]),
      skip: dart.fnType(async.Future$(core.int), [core.int]),
      take: dart.fnType(async.Future$(core.List$(T)), [core.int]),
      startTransaction: dart.fnType(src__stream_queue.StreamQueueTransaction$(T), []),
      withTransaction: dart.fnType(async.Future$(core.bool), [dart.fnType(async.Future$(core.bool), [src__stream_queue.StreamQueue$(T)])]),
      cancelable: dart.gFnType(S => [src__cancelable_operation.CancelableOperation$(S), [dart.fnType(async.Future$(S), [src__stream_queue.StreamQueue$(T)])]]),
      cancel: dart.fnType(async.Future, [], {immediate: core.bool}),
      [_updateRequests]: dart.fnType(dart.void, []),
      [_extractStream]: dart.fnType(async.Stream$(T), []),
      [_pause]: dart.fnType(dart.void, []),
      [_ensureListening]: dart.fnType(dart.void, []),
      [_cancel]: dart.fnType(async.Future, []),
      [_addResult]: dart.fnType(dart.void, [src__result__result.Result$(T)]),
      [_close]: dart.fnType(dart.void, []),
      [_failClosed]: dart.fnType(core.Error, []),
      [_addRequest]: dart.fnType(dart.void, [src__stream_queue._EventRequest$(T)])
    }));
    dart.setGetterSignature(StreamQueue, () => ({
      __proto__: dart.getGetters(StreamQueue.__proto__),
      eventsDispatched: core.int,
      hasNext: async.Future$(core.bool),
      next: async.Future$(T),
      peek: async.Future$(T),
      rest: async.Stream$(T)
    }));
    dart.setLibraryUri(StreamQueue, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(StreamQueue, () => ({
      __proto__: dart.getFields(StreamQueue.__proto__),
      [_source$0]: dart.finalFieldType(async.Stream$(T)),
      [_subscription$0]: dart.fieldType(async.StreamSubscription$(T)),
      [_isDone$]: dart.fieldType(core.bool),
      [_isClosed$]: dart.fieldType(core.bool),
      [_eventsReceived]: dart.fieldType(core.int),
      [_eventQueue]: dart.finalFieldType(src__queue_list.QueueList$(src__result__result.Result$(T))),
      [_requestQueue]: dart.finalFieldType(collection$.Queue$(src__stream_queue._EventRequest))
    }));
    return StreamQueue;
  });
  src__stream_queue.StreamQueue = src__stream_queue.StreamQueue$();
  dart.addTypeTests(src__stream_queue.StreamQueue, _is_StreamQueue_default);
  const _queues = dart.privateName(src__stream_queue, "_queues");
  const _committed = dart.privateName(src__stream_queue, "_committed");
  const _rejected = dart.privateName(src__stream_queue, "_rejected");
  const _parent$ = dart.privateName(src__stream_queue, "_parent");
  const _splitter = dart.privateName(src__stream_queue, "_splitter");
  const _assertActive = dart.privateName(src__stream_queue, "_assertActive");
  const _done = dart.privateName(src__stream_queue, "_done");
  const _is_StreamQueueTransaction_default = Symbol('_is_StreamQueueTransaction_default');
  src__stream_queue.StreamQueueTransaction$ = dart.generic(T => {
    let StreamSplitterOfT = () => (StreamSplitterOfT = dart.constFn(src__stream_splitter.StreamSplitter$(T)))();
    let StreamQueueOfT = () => (StreamQueueOfT = dart.constFn(src__stream_queue.StreamQueue$(T)))();
    class StreamQueueTransaction extends core.Object {
      newQueue() {
        let queue = StreamQueueOfT().new(this[_splitter].split());
        this[_queues].add(queue);
        return queue;
      }
      commit(queue) {
        StreamQueueOfT()._check(queue);
        this[_assertActive]();
        if (!dart.test(this[_queues].contains(queue))) {
          dart.throw(new core.ArgumentError.new("Queue doesn't belong to this transaction."));
        } else if (dart.test(queue[_requestQueue][$isNotEmpty])) {
          dart.throw(new core.StateError.new("A queue with pending requests can't be committed."));
        }
        this[_committed] = true;
        for (let j = 0; j < dart.notNull(queue.eventsDispatched); j = j + 1) {
          this[_parent$][_eventQueue].removeFirst();
        }
        this[_done]();
      }
      reject() {
        this[_assertActive]();
        this[_rejected] = true;
        this[_done]();
      }
      [_done]() {
        this[_splitter].close();
        for (let queue of this[_queues]) {
          queue[_cancel]();
        }
        let currentRequest = this[_parent$][_requestQueue][$first];
        if (src__stream_queue._TransactionRequest.is(currentRequest) && dart.equals(currentRequest.transaction, this)) {
          this[_parent$][_requestQueue].removeFirst();
          this[_parent$][_updateRequests]();
        }
      }
      [_assertActive]() {
        if (dart.test(this[_committed])) {
          dart.throw(new core.StateError.new("This transaction has already been accepted."));
        } else if (dart.test(this[_rejected])) {
          dart.throw(new core.StateError.new("This transaction has already been rejected."));
        }
      }
    }
    (StreamQueueTransaction.__ = function(_parent, source) {
      this[_queues] = new (_HashSetOfStreamQueue()).new();
      this[_committed] = false;
      this[_rejected] = false;
      this[_parent$] = _parent;
      this[_splitter] = new (StreamSplitterOfT()).new(source);
      ;
    }).prototype = StreamQueueTransaction.prototype;
    dart.addTypeTests(StreamQueueTransaction);
    StreamQueueTransaction.prototype[_is_StreamQueueTransaction_default] = true;
    dart.setMethodSignature(StreamQueueTransaction, () => ({
      __proto__: dart.getMethods(StreamQueueTransaction.__proto__),
      newQueue: dart.fnType(src__stream_queue.StreamQueue$(T), []),
      commit: dart.fnType(dart.void, [core.Object]),
      reject: dart.fnType(dart.void, []),
      [_done]: dart.fnType(dart.void, []),
      [_assertActive]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(StreamQueueTransaction, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(StreamQueueTransaction, () => ({
      __proto__: dart.getFields(StreamQueueTransaction.__proto__),
      [_parent$]: dart.finalFieldType(src__stream_queue.StreamQueue$(T)),
      [_splitter]: dart.finalFieldType(src__stream_splitter.StreamSplitter$(T)),
      [_queues]: dart.finalFieldType(core.Set$(src__stream_queue.StreamQueue)),
      [_committed]: dart.fieldType(core.bool),
      [_rejected]: dart.fieldType(core.bool)
    }));
    return StreamQueueTransaction;
  });
  src__stream_queue.StreamQueueTransaction = src__stream_queue.StreamQueueTransaction$();
  dart.addTypeTests(src__stream_queue.StreamQueueTransaction, _is_StreamQueueTransaction_default);
  const _is__EventRequest_default = Symbol('_is__EventRequest_default');
  src__stream_queue._EventRequest$ = dart.generic(T => {
    class _EventRequest extends core.Object {}
    (_EventRequest.new = function() {
      ;
    }).prototype = _EventRequest.prototype;
    dart.addTypeTests(_EventRequest);
    _EventRequest.prototype[_is__EventRequest_default] = true;
    dart.setLibraryUri(_EventRequest, "package:async/src/stream_queue.dart");
    return _EventRequest;
  });
  src__stream_queue._EventRequest = src__stream_queue._EventRequest$();
  dart.addTypeTests(src__stream_queue._EventRequest, _is__EventRequest_default);
  const _completer$0 = dart.privateName(src__stream_queue, "_completer");
  const _is__NextRequest_default = Symbol('_is__NextRequest_default');
  src__stream_queue._NextRequest$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    class _NextRequest extends core.Object {
      get future() {
        return this[_completer$0].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events[$isNotEmpty])) {
          events.removeFirst().complete(this[_completer$0]);
          return true;
        }
        if (dart.test(isDone)) {
          this[_completer$0].completeError(new core.StateError.new("No elements"), core.StackTrace.current);
          return true;
        }
        return false;
      }
    }
    (_NextRequest.new = function() {
      this[_completer$0] = CompleterOfT().new();
      ;
    }).prototype = _NextRequest.prototype;
    dart.addTypeTests(_NextRequest);
    _NextRequest.prototype[_is__NextRequest_default] = true;
    _NextRequest[dart.implements] = () => [src__stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_NextRequest, () => ({
      __proto__: dart.getMethods(_NextRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_NextRequest, () => ({
      __proto__: dart.getGetters(_NextRequest.__proto__),
      future: async.Future$(T)
    }));
    dart.setLibraryUri(_NextRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_NextRequest, () => ({
      __proto__: dart.getFields(_NextRequest.__proto__),
      [_completer$0]: dart.finalFieldType(async.Completer$(T))
    }));
    return _NextRequest;
  });
  src__stream_queue._NextRequest = src__stream_queue._NextRequest$();
  dart.addTypeTests(src__stream_queue._NextRequest, _is__NextRequest_default);
  const _is__PeekRequest_default = Symbol('_is__PeekRequest_default');
  src__stream_queue._PeekRequest$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    class _PeekRequest extends core.Object {
      get future() {
        return this[_completer$0].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events[$isNotEmpty])) {
          events[$first].complete(this[_completer$0]);
          return true;
        }
        if (dart.test(isDone)) {
          this[_completer$0].completeError(new core.StateError.new("No elements"), core.StackTrace.current);
          return true;
        }
        return false;
      }
    }
    (_PeekRequest.new = function() {
      this[_completer$0] = CompleterOfT().new();
      ;
    }).prototype = _PeekRequest.prototype;
    dart.addTypeTests(_PeekRequest);
    _PeekRequest.prototype[_is__PeekRequest_default] = true;
    _PeekRequest[dart.implements] = () => [src__stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_PeekRequest, () => ({
      __proto__: dart.getMethods(_PeekRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_PeekRequest, () => ({
      __proto__: dart.getGetters(_PeekRequest.__proto__),
      future: async.Future$(T)
    }));
    dart.setLibraryUri(_PeekRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_PeekRequest, () => ({
      __proto__: dart.getFields(_PeekRequest.__proto__),
      [_completer$0]: dart.finalFieldType(async.Completer$(T))
    }));
    return _PeekRequest;
  });
  src__stream_queue._PeekRequest = src__stream_queue._PeekRequest$();
  dart.addTypeTests(src__stream_queue._PeekRequest, _is__PeekRequest_default);
  const _eventsToSkip$ = dart.privateName(src__stream_queue, "_eventsToSkip");
  const _is__SkipRequest_default = Symbol('_is__SkipRequest_default');
  src__stream_queue._SkipRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    class _SkipRequest extends core.Object {
      get future() {
        return this[_completer$0].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_eventsToSkip$]) > 0) {
          if (dart.test(events[$isEmpty])) {
            if (dart.test(isDone)) break;
            return false;
          }
          this[_eventsToSkip$] = dart.notNull(this[_eventsToSkip$]) - 1;
          let event = events.removeFirst();
          if (dart.test(event.isError)) {
            this[_completer$0].completeError(event.asError.error, event.asError.stackTrace);
            return true;
          }
        }
        this[_completer$0].complete(this[_eventsToSkip$]);
        return true;
      }
    }
    (_SkipRequest.new = function(_eventsToSkip) {
      this[_completer$0] = CompleterOfint().new();
      this[_eventsToSkip$] = _eventsToSkip;
      ;
    }).prototype = _SkipRequest.prototype;
    dart.addTypeTests(_SkipRequest);
    _SkipRequest.prototype[_is__SkipRequest_default] = true;
    _SkipRequest[dart.implements] = () => [src__stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_SkipRequest, () => ({
      __proto__: dart.getMethods(_SkipRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_SkipRequest, () => ({
      __proto__: dart.getGetters(_SkipRequest.__proto__),
      future: async.Future$(core.int)
    }));
    dart.setLibraryUri(_SkipRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_SkipRequest, () => ({
      __proto__: dart.getFields(_SkipRequest.__proto__),
      [_completer$0]: dart.finalFieldType(async.Completer$(core.int)),
      [_eventsToSkip$]: dart.fieldType(core.int)
    }));
    return _SkipRequest;
  });
  src__stream_queue._SkipRequest = src__stream_queue._SkipRequest$();
  dart.addTypeTests(src__stream_queue._SkipRequest, _is__SkipRequest_default);
  const _list = dart.privateName(src__stream_queue, "_list");
  const _eventsToTake$ = dart.privateName(src__stream_queue, "_eventsToTake");
  const _is__ListRequest_default = Symbol('_is__ListRequest_default');
  src__stream_queue._ListRequest$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let CompleterOfListOfT = () => (CompleterOfListOfT = dart.constFn(async.Completer$(ListOfT())))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    class _ListRequest extends core.Object {
      get future() {
        return this[_completer$0].future;
      }
    }
    (_ListRequest.new = function(_eventsToTake) {
      this[_completer$0] = CompleterOfListOfT().new();
      this[_list] = JSArrayOfT().of([]);
      this[_eventsToTake$] = _eventsToTake;
      ;
    }).prototype = _ListRequest.prototype;
    dart.addTypeTests(_ListRequest);
    _ListRequest.prototype[_is__ListRequest_default] = true;
    _ListRequest[dart.implements] = () => [src__stream_queue._EventRequest$(T)];
    dart.setGetterSignature(_ListRequest, () => ({
      __proto__: dart.getGetters(_ListRequest.__proto__),
      future: async.Future$(core.List$(T))
    }));
    dart.setLibraryUri(_ListRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_ListRequest, () => ({
      __proto__: dart.getFields(_ListRequest.__proto__),
      [_completer$0]: dart.finalFieldType(async.Completer$(core.List$(T))),
      [_list]: dart.finalFieldType(core.List$(T)),
      [_eventsToTake$]: dart.finalFieldType(core.int)
    }));
    return _ListRequest;
  });
  src__stream_queue._ListRequest = src__stream_queue._ListRequest$();
  dart.addTypeTests(src__stream_queue._ListRequest, _is__ListRequest_default);
  const _is__TakeRequest_default = Symbol('_is__TakeRequest_default');
  src__stream_queue._TakeRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    class _TakeRequest extends src__stream_queue._ListRequest$(T) {
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_list][$length]) < dart.notNull(this[_eventsToTake$])) {
          if (dart.test(events[$isEmpty])) {
            if (dart.test(isDone)) break;
            return false;
          }
          let event = events.removeFirst();
          if (dart.test(event.isError)) {
            event.asError.complete(this[_completer$0]);
            return true;
          }
          this[_list][$add](event.asValue.value);
        }
        this[_completer$0].complete(this[_list]);
        return true;
      }
    }
    (_TakeRequest.new = function(eventsToTake) {
      _TakeRequest.__proto__.new.call(this, eventsToTake);
      ;
    }).prototype = _TakeRequest.prototype;
    dart.addTypeTests(_TakeRequest);
    _TakeRequest.prototype[_is__TakeRequest_default] = true;
    dart.setMethodSignature(_TakeRequest, () => ({
      __proto__: dart.getMethods(_TakeRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setLibraryUri(_TakeRequest, "package:async/src/stream_queue.dart");
    return _TakeRequest;
  });
  src__stream_queue._TakeRequest = src__stream_queue._TakeRequest$();
  dart.addTypeTests(src__stream_queue._TakeRequest, _is__TakeRequest_default);
  const _is__LookAheadRequest_default = Symbol('_is__LookAheadRequest_default');
  src__stream_queue._LookAheadRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    class _LookAheadRequest extends src__stream_queue._ListRequest$(T) {
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_list][$length]) < dart.notNull(this[_eventsToTake$])) {
          if (events.length == this[_list][$length]) {
            if (dart.test(isDone)) break;
            return false;
          }
          let event = events[$elementAt](this[_list][$length]);
          if (dart.test(event.isError)) {
            event.asError.complete(this[_completer$0]);
            return true;
          }
          this[_list][$add](event.asValue.value);
        }
        this[_completer$0].complete(this[_list]);
        return true;
      }
    }
    (_LookAheadRequest.new = function(eventsToTake) {
      _LookAheadRequest.__proto__.new.call(this, eventsToTake);
      ;
    }).prototype = _LookAheadRequest.prototype;
    dart.addTypeTests(_LookAheadRequest);
    _LookAheadRequest.prototype[_is__LookAheadRequest_default] = true;
    dart.setMethodSignature(_LookAheadRequest, () => ({
      __proto__: dart.getMethods(_LookAheadRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setLibraryUri(_LookAheadRequest, "package:async/src/stream_queue.dart");
    return _LookAheadRequest;
  });
  src__stream_queue._LookAheadRequest = src__stream_queue._LookAheadRequest$();
  dart.addTypeTests(src__stream_queue._LookAheadRequest, _is__LookAheadRequest_default);
  const _streamQueue$ = dart.privateName(src__stream_queue, "_streamQueue");
  const _is__CancelRequest_default = Symbol('_is__CancelRequest_default');
  src__stream_queue._CancelRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    class _CancelRequest extends core.Object {
      get future() {
        return this[_completer$0].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(this[_streamQueue$][_isDone$])) {
          this[_completer$0].complete();
        } else {
          this[_streamQueue$][_ensureListening]();
          this[_completer$0].complete(this[_streamQueue$][_extractStream]().listen(null).cancel());
        }
        return true;
      }
    }
    (_CancelRequest.new = function(_streamQueue) {
      this[_completer$0] = async.Completer.new();
      this[_streamQueue$] = _streamQueue;
      ;
    }).prototype = _CancelRequest.prototype;
    dart.addTypeTests(_CancelRequest);
    _CancelRequest.prototype[_is__CancelRequest_default] = true;
    _CancelRequest[dart.implements] = () => [src__stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_CancelRequest, () => ({
      __proto__: dart.getMethods(_CancelRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_CancelRequest, () => ({
      __proto__: dart.getGetters(_CancelRequest.__proto__),
      future: async.Future
    }));
    dart.setLibraryUri(_CancelRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_CancelRequest, () => ({
      __proto__: dart.getFields(_CancelRequest.__proto__),
      [_completer$0]: dart.finalFieldType(async.Completer),
      [_streamQueue$]: dart.finalFieldType(src__stream_queue.StreamQueue)
    }));
    return _CancelRequest;
  });
  src__stream_queue._CancelRequest = src__stream_queue._CancelRequest$();
  dart.addTypeTests(src__stream_queue._CancelRequest, _is__CancelRequest_default);
  const _is__RestRequest_default = Symbol('_is__RestRequest_default');
  src__stream_queue._RestRequest$ = dart.generic(T => {
    let StreamCompleterOfT = () => (StreamCompleterOfT = dart.constFn(src__stream_completer.StreamCompleter$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class _RestRequest extends core.Object {
      get stream() {
        return this[_completer$0].stream;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events[$isEmpty])) {
          if (dart.test(this[_streamQueue$][_isDone$])) {
            this[_completer$0].setEmpty();
          } else {
            this[_completer$0].setSourceStream(this[_streamQueue$][_extractStream]());
          }
        } else {
          let controller = StreamControllerOfT().new();
          for (let event of events) {
            event.addTo(controller);
          }
          controller.addStream(this[_streamQueue$][_extractStream](), {cancelOnError: false}).whenComplete(dart.bind(controller, 'close'));
          this[_completer$0].setSourceStream(controller.stream);
        }
        return true;
      }
    }
    (_RestRequest.new = function(_streamQueue) {
      this[_completer$0] = new (StreamCompleterOfT()).new();
      this[_streamQueue$] = _streamQueue;
      ;
    }).prototype = _RestRequest.prototype;
    dart.addTypeTests(_RestRequest);
    _RestRequest.prototype[_is__RestRequest_default] = true;
    _RestRequest[dart.implements] = () => [src__stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_RestRequest, () => ({
      __proto__: dart.getMethods(_RestRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_RestRequest, () => ({
      __proto__: dart.getGetters(_RestRequest.__proto__),
      stream: async.Stream$(T)
    }));
    dart.setLibraryUri(_RestRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_RestRequest, () => ({
      __proto__: dart.getFields(_RestRequest.__proto__),
      [_completer$0]: dart.finalFieldType(src__stream_completer.StreamCompleter$(T)),
      [_streamQueue$]: dart.finalFieldType(src__stream_queue.StreamQueue$(T))
    }));
    return _RestRequest;
  });
  src__stream_queue._RestRequest = src__stream_queue._RestRequest$();
  dart.addTypeTests(src__stream_queue._RestRequest, _is__RestRequest_default);
  const _is__HasNextRequest_default = Symbol('_is__HasNextRequest_default');
  src__stream_queue._HasNextRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    class _HasNextRequest extends core.Object {
      get future() {
        return this[_completer$0].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events[$isNotEmpty])) {
          this[_completer$0].complete(true);
          return true;
        }
        if (dart.test(isDone)) {
          this[_completer$0].complete(false);
          return true;
        }
        return false;
      }
    }
    (_HasNextRequest.new = function() {
      this[_completer$0] = CompleterOfbool().new();
      ;
    }).prototype = _HasNextRequest.prototype;
    dart.addTypeTests(_HasNextRequest);
    _HasNextRequest.prototype[_is__HasNextRequest_default] = true;
    _HasNextRequest[dart.implements] = () => [src__stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_HasNextRequest, () => ({
      __proto__: dart.getMethods(_HasNextRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_HasNextRequest, () => ({
      __proto__: dart.getGetters(_HasNextRequest.__proto__),
      future: async.Future$(core.bool)
    }));
    dart.setLibraryUri(_HasNextRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_HasNextRequest, () => ({
      __proto__: dart.getFields(_HasNextRequest.__proto__),
      [_completer$0]: dart.finalFieldType(async.Completer$(core.bool))
    }));
    return _HasNextRequest;
  });
  src__stream_queue._HasNextRequest = src__stream_queue._HasNextRequest$();
  dart.addTypeTests(src__stream_queue._HasNextRequest, _is__HasNextRequest_default);
  const _transaction = dart.privateName(src__stream_queue, "_transaction");
  const _controller$1 = dart.privateName(src__stream_queue, "_controller");
  const _eventsSent = dart.privateName(src__stream_queue, "_eventsSent");
  const _is__TransactionRequest_default = Symbol('_is__TransactionRequest_default');
  src__stream_queue._TransactionRequest$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamQueueTransactionOfT = () => (StreamQueueTransactionOfT = dart.constFn(src__stream_queue.StreamQueueTransaction$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    class _TransactionRequest extends core.Object {
      get transaction() {
        return this[_transaction];
      }
      update(events, isDone) {
        let t2;
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_eventsSent]) < dart.notNull(events.length)) {
          events._get((t2 = this[_eventsSent], this[_eventsSent] = dart.notNull(t2) + 1, t2)).addTo(this[_controller$1]);
        }
        if (dart.test(isDone) && !dart.test(this[_controller$1].isClosed)) this[_controller$1].close();
        return dart.test(this.transaction[_committed]) || dart.test(this[_transaction][_rejected]);
      }
    }
    (_TransactionRequest.new = function(parent) {
      this[_transaction] = null;
      this[_controller$1] = StreamControllerOfT().new({sync: true});
      this[_eventsSent] = 0;
      this[_transaction] = new (StreamQueueTransactionOfT()).__(parent, this[_controller$1].stream);
    }).prototype = _TransactionRequest.prototype;
    dart.addTypeTests(_TransactionRequest);
    _TransactionRequest.prototype[_is__TransactionRequest_default] = true;
    _TransactionRequest[dart.implements] = () => [src__stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_TransactionRequest, () => ({
      __proto__: dart.getMethods(_TransactionRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_TransactionRequest, () => ({
      __proto__: dart.getGetters(_TransactionRequest.__proto__),
      transaction: src__stream_queue.StreamQueueTransaction$(T)
    }));
    dart.setLibraryUri(_TransactionRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_TransactionRequest, () => ({
      __proto__: dart.getFields(_TransactionRequest.__proto__),
      [_transaction]: dart.fieldType(src__stream_queue.StreamQueueTransaction$(T)),
      [_controller$1]: dart.finalFieldType(async.StreamController$(T)),
      [_eventsSent]: dart.fieldType(core.int)
    }));
    return _TransactionRequest;
  });
  src__stream_queue._TransactionRequest = src__stream_queue._TransactionRequest$();
  dart.addTypeTests(src__stream_queue._TransactionRequest, _is__TransactionRequest_default);
  const _completer$1 = dart.privateName(src__cancelable_operation, "_completer");
  const _inner$3 = dart.privateName(src__cancelable_operation, "_inner");
  const _cancel$ = dart.privateName(src__cancelable_operation, "_cancel");
  const _cancelMemo = dart.privateName(src__cancelable_operation, "_cancelMemo");
  const _is_CancelableOperation_default = Symbol('_is_CancelableOperation_default');
  src__cancelable_operation.CancelableOperation$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class CancelableOperation extends core.Object {
      static fromFuture(inner, opts) {
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let completer = new (src__cancelable_operation.CancelableCompleter$(T)).new({onCancel: onCancel});
        completer.complete(inner);
        return completer.operation;
      }
      get value() {
        return this[_completer$1][_inner$3].future;
      }
      asStream() {
        let controller = StreamControllerOfT().new({sync: true, onCancel: dart.bind(this[_completer$1], _cancel$)});
        this.value.then(dart.dynamic, dart.fn(value => {
          controller.add(value);
          controller.close();
        }, TToNull()), {onError: dart.fn((error, stackTrace) => {
            controller.addError(error, core.StackTrace._check(stackTrace));
            controller.close();
          }, dynamicAnddynamicToNull())});
        return controller.stream;
      }
      valueOrCancellation(cancellationValue) {
        if (cancellationValue === void 0) cancellationValue = null;
        T._check(cancellationValue);
        let completer = CompleterOfT().sync();
        this.value.then(dart.void, dart.fn(result => completer.complete(result), TTovoid()), {onError: dart.bind(completer, 'completeError')});
        this[_completer$1][_cancelMemo].future.then(dart.dynamic, dart.fn(_ => {
          completer.complete(cancellationValue);
        }, dynamicToNull()), {onError: dart.bind(completer, 'completeError')});
        return completer.future;
      }
      then(R, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let propagateCancel = opts && 'propagateCancel' in opts ? opts.propagateCancel : false;
        let completer = new (src__cancelable_operation.CancelableCompleter$(R)).new({onCancel: dart.test(propagateCancel) ? dart.bind(this, 'cancel') : null});
        this.valueOrCancellation().then(dart.dynamic, dart.fn(result => {
          if (!dart.test(completer.isCanceled)) {
            if (dart.test(this.isCompleted)) {
              completer.complete(async.Future$(R).sync(dart.fn(() => onValue(result), dart.fnType(async.FutureOr$(R), []))));
            } else if (onCancel != null) {
              completer.complete(async.Future$(R).sync(onCancel));
            } else {
              completer[_cancel$]();
            }
          }
        }, TToNull()), {onError: dart.fn((error, stackTrace) => {
            if (!dart.test(completer.isCanceled)) {
              if (onError != null) {
                completer.complete(async.Future$(R).sync(dart.fn(() => onError(error, core.StackTrace._check(stackTrace)), dart.fnType(async.FutureOr$(R), []))));
              } else {
                completer.completeError(error, core.StackTrace._check(stackTrace));
              }
            }
          }, dynamicAnddynamicToNull())});
        return completer.operation;
      }
      cancel() {
        return this[_completer$1][_cancel$]();
      }
      get isCanceled() {
        return this[_completer$1].isCanceled;
      }
      get isCompleted() {
        return this[_completer$1].isCompleted;
      }
    }
    (CancelableOperation.__ = function(_completer) {
      this[_completer$1] = _completer;
      ;
    }).prototype = CancelableOperation.prototype;
    dart.addTypeTests(CancelableOperation);
    CancelableOperation.prototype[_is_CancelableOperation_default] = true;
    dart.setMethodSignature(CancelableOperation, () => ({
      __proto__: dart.getMethods(CancelableOperation.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      valueOrCancellation: dart.fnType(async.Future$(T), [], [core.Object]),
      then: dart.gFnType(R => [src__cancelable_operation.CancelableOperation$(R), [dart.fnType(async.FutureOr$(R), [T])], {onCancel: dart.fnType(async.FutureOr$(R), []), onError: dart.fnType(async.FutureOr$(R), [core.Object, core.StackTrace]), propagateCancel: core.bool}]),
      cancel: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(CancelableOperation, () => ({
      __proto__: dart.getGetters(CancelableOperation.__proto__),
      value: async.Future$(T),
      isCanceled: core.bool,
      isCompleted: core.bool
    }));
    dart.setLibraryUri(CancelableOperation, "package:async/src/cancelable_operation.dart");
    dart.setFieldSignature(CancelableOperation, () => ({
      __proto__: dart.getFields(CancelableOperation.__proto__),
      [_completer$1]: dart.finalFieldType(src__cancelable_operation.CancelableCompleter$(T))
    }));
    return CancelableOperation;
  });
  src__cancelable_operation.CancelableOperation = src__cancelable_operation.CancelableOperation$();
  dart.addTypeTests(src__cancelable_operation.CancelableOperation, _is_CancelableOperation_default);
  const _operation = dart.privateName(src__cancelable_operation, "_operation");
  const _isCompleted = dart.privateName(src__cancelable_operation, "_isCompleted");
  const _isCanceled = dart.privateName(src__cancelable_operation, "_isCanceled");
  const _onCancel$ = dart.privateName(src__cancelable_operation, "_onCancel");
  const _is_CancelableCompleter_default = Symbol('_is_CancelableCompleter_default');
  src__cancelable_operation.CancelableCompleter$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let CancelableOperationOfT = () => (CancelableOperationOfT = dart.constFn(src__cancelable_operation.CancelableOperation$(T)))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    class CancelableCompleter extends core.Object {
      get operation() {
        return this[_operation];
      }
      get isCompleted() {
        return this[_isCompleted];
      }
      get isCanceled() {
        return this[_isCanceled];
      }
      complete(value) {
        if (value === void 0) value = null;
        if (dart.test(this[_isCompleted])) dart.throw(new core.StateError.new("Operation already completed"));
        this[_isCompleted] = true;
        if (!async.Future.is(value)) {
          if (dart.test(this[_isCanceled])) return;
          this[_inner$3].complete(FutureOrOfT()._check(value));
          return;
        }
        if (dart.test(this[_isCanceled])) {
          dart.dsend(value, 'catchError', [dart.fn(_ => {
            }, dynamicToNull())]);
          return;
        }
        dart.dsend(value, 'then', [dart.fn(result => {
            if (dart.test(this[_isCanceled])) return;
            this[_inner$3].complete(FutureOrOfT()._check(result));
          }, dynamicToNull())], {onError: dart.fn((error, stackTrace) => {
            if (dart.test(this[_isCanceled])) return;
            this[_inner$3].completeError(error, core.StackTrace._check(stackTrace));
          }, dynamicAnddynamicToNull())});
      }
      completeError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_isCompleted])) dart.throw(new core.StateError.new("Operation already completed"));
        this[_isCompleted] = true;
        if (dart.test(this[_isCanceled])) return;
        this[_inner$3].completeError(error, stackTrace);
      }
      [_cancel$]() {
        if (dart.test(this[_inner$3].isCompleted)) return async.Future.value();
        return this[_cancelMemo].runOnce(dart.fn(() => {
          this[_isCanceled] = true;
          if (this[_onCancel$] != null) return this[_onCancel$]();
        }, VoidToFutureOr()));
      }
    }
    (CancelableCompleter.new = function(opts) {
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      this[_operation] = null;
      this[_isCompleted] = false;
      this[_isCanceled] = false;
      this[_cancelMemo] = new src__async_memoizer.AsyncMemoizer.new();
      this[_onCancel$] = onCancel;
      this[_inner$3] = CompleterOfT().new();
      this[_operation] = new (CancelableOperationOfT()).__(this);
    }).prototype = CancelableCompleter.prototype;
    dart.addTypeTests(CancelableCompleter);
    CancelableCompleter.prototype[_is_CancelableCompleter_default] = true;
    dart.setMethodSignature(CancelableCompleter, () => ({
      __proto__: dart.getMethods(CancelableCompleter.__proto__),
      complete: dart.fnType(dart.void, [], [dart.dynamic]),
      completeError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      [_cancel$]: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(CancelableCompleter, () => ({
      __proto__: dart.getGetters(CancelableCompleter.__proto__),
      operation: src__cancelable_operation.CancelableOperation$(T),
      isCompleted: core.bool,
      isCanceled: core.bool
    }));
    dart.setLibraryUri(CancelableCompleter, "package:async/src/cancelable_operation.dart");
    dart.setFieldSignature(CancelableCompleter, () => ({
      __proto__: dart.getFields(CancelableCompleter.__proto__),
      [_inner$3]: dart.finalFieldType(async.Completer$(T)),
      [_onCancel$]: dart.finalFieldType(dart.fnType(async.FutureOr, [])),
      [_operation]: dart.fieldType(src__cancelable_operation.CancelableOperation$(T)),
      [_isCompleted]: dart.fieldType(core.bool),
      [_isCanceled]: dart.fieldType(core.bool),
      [_cancelMemo]: dart.finalFieldType(src__async_memoizer.AsyncMemoizer)
    }));
    return CancelableCompleter;
  });
  src__cancelable_operation.CancelableCompleter = src__cancelable_operation.CancelableCompleter$();
  dart.addTypeTests(src__cancelable_operation.CancelableCompleter, _is_CancelableCompleter_default);
  const _controller$2 = dart.privateName(src__stream_group, "_controller");
  const _closed$0 = dart.privateName(src__stream_group, "_closed");
  const _state = dart.privateName(src__stream_group, "_state");
  const _subscriptions = dart.privateName(src__stream_group, "_subscriptions");
  const _onListen$ = dart.privateName(src__stream_group, "_onListen");
  const _onPause$ = dart.privateName(src__stream_group, "_onPause");
  const _onResume$ = dart.privateName(src__stream_group, "_onResume");
  const _onCancel$0 = dart.privateName(src__stream_group, "_onCancel");
  const _onCancelBroadcast = dart.privateName(src__stream_group, "_onCancelBroadcast");
  const _listenToStream = dart.privateName(src__stream_group, "_listenToStream");
  const _is_StreamGroup_default = Symbol('_is_StreamGroup_default');
  src__stream_group.StreamGroup$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let LinkedMapOfStreamOfT$StreamSubscriptionOfT = () => (LinkedMapOfStreamOfT$StreamSubscriptionOfT = dart.constFn(_js_helper.LinkedMap$(StreamOfT(), StreamSubscriptionOfT())))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let VoidToStreamSubscriptionOfT = () => (VoidToStreamSubscriptionOfT = dart.constFn(dart.fnType(StreamSubscriptionOfT(), [])))();
    let StreamOfTAndStreamSubscriptionOfTToNull = () => (StreamOfTAndStreamSubscriptionOfTToNull = dart.constFn(dart.fnType(core.Null, [StreamOfT(), StreamSubscriptionOfT()])))();
    let StreamSubscriptionOfTToFuture = () => (StreamSubscriptionOfTToFuture = dart.constFn(dart.fnType(async.Future, [StreamSubscriptionOfT()])))();
    class StreamGroup extends core.Object {
      get stream() {
        return this[_controller$2].stream;
      }
      static merge(T, streams) {
        let group = new (src__stream_group.StreamGroup$(T)).new();
        streams[$forEach](dart.bind(group, 'add'));
        group.close();
        return group.stream;
      }
      add(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_closed$0])) {
          dart.throw(new core.StateError.new("Can't add a Stream to a closed StreamGroup."));
        }
        if (dart.equals(this[_state], src__stream_group._StreamGroupState.dormant)) {
          this[_subscriptions][$putIfAbsent](stream, dart.fn(() => null, VoidToNull()));
        } else if (dart.equals(this[_state], src__stream_group._StreamGroupState.canceled)) {
          return stream.listen(null).cancel();
        } else {
          this[_subscriptions][$putIfAbsent](stream, dart.fn(() => this[_listenToStream](stream), VoidToStreamSubscriptionOfT()));
        }
        return null;
      }
      remove(stream) {
        StreamOfT()._check(stream);
        let subscription = this[_subscriptions][$remove](stream);
        let future = subscription == null ? null : subscription.cancel();
        if (dart.test(this[_closed$0]) && dart.test(this[_subscriptions][$isEmpty])) this[_controller$2].close();
        return future;
      }
      [_onListen$]() {
        this[_state] = src__stream_group._StreamGroupState.listening;
        this[_subscriptions][$forEach](dart.fn((stream, subscription) => {
          if (subscription != null) return;
          this[_subscriptions][$_set](stream, this[_listenToStream](stream));
        }, StreamOfTAndStreamSubscriptionOfTToNull()));
      }
      [_onPause$]() {
        this[_state] = src__stream_group._StreamGroupState.paused;
        for (let subscription of this[_subscriptions][$values]) {
          subscription.pause();
        }
      }
      [_onResume$]() {
        this[_state] = src__stream_group._StreamGroupState.listening;
        for (let subscription of this[_subscriptions][$values]) {
          subscription.resume();
        }
      }
      [_onCancel$0]() {
        this[_state] = src__stream_group._StreamGroupState.canceled;
        let futures = this[_subscriptions][$values][$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionOfTToFuture()))[$where](dart.fn(future => future != null, FutureTobool()))[$toList]();
        this[_subscriptions][$clear]();
        return dart.test(futures[$isEmpty]) ? null : async.Future.wait(dart.dynamic, futures);
      }
      [_onCancelBroadcast]() {
        this[_state] = src__stream_group._StreamGroupState.dormant;
        this[_subscriptions][$forEach](dart.fn((stream, subscription) => {
          if (!dart.test(stream.isBroadcast)) return;
          subscription.cancel();
          this[_subscriptions][$_set](stream, null);
        }, StreamOfTAndStreamSubscriptionOfTToNull()));
      }
      [_listenToStream](stream) {
        let subscription = stream.listen(dart.bind(this[_controller$2], 'add'), {onError: dart.bind(this[_controller$2], 'addError'), onDone: dart.fn(() => this.remove(stream), VoidToFuture())});
        if (dart.equals(this[_state], src__stream_group._StreamGroupState.paused)) subscription.pause();
        return subscription;
      }
      close() {
        if (dart.test(this[_closed$0])) return this[_controller$2].done;
        this[_closed$0] = true;
        if (dart.test(this[_subscriptions][$isEmpty])) this[_controller$2].close();
        return this[_controller$2].done;
      }
    }
    (StreamGroup.new = function() {
      this[_controller$2] = null;
      this[_closed$0] = false;
      this[_state] = src__stream_group._StreamGroupState.dormant;
      this[_subscriptions] = new (LinkedMapOfStreamOfT$StreamSubscriptionOfT()).new();
      this[_controller$2] = StreamControllerOfT().new({onListen: dart.bind(this, _onListen$), onPause: dart.bind(this, _onPause$), onResume: dart.bind(this, _onResume$), onCancel: dart.bind(this, _onCancel$0), sync: true});
    }).prototype = StreamGroup.prototype;
    (StreamGroup.broadcast = function() {
      this[_controller$2] = null;
      this[_closed$0] = false;
      this[_state] = src__stream_group._StreamGroupState.dormant;
      this[_subscriptions] = new (LinkedMapOfStreamOfT$StreamSubscriptionOfT()).new();
      this[_controller$2] = StreamControllerOfT().broadcast({onListen: dart.bind(this, _onListen$), onCancel: dart.bind(this, _onCancelBroadcast), sync: true});
    }).prototype = StreamGroup.prototype;
    dart.addTypeTests(StreamGroup);
    StreamGroup.prototype[_is_StreamGroup_default] = true;
    StreamGroup[dart.implements] = () => [core.Sink$(async.Stream$(T))];
    dart.setMethodSignature(StreamGroup, () => ({
      __proto__: dart.getMethods(StreamGroup.__proto__),
      add: dart.fnType(async.Future, [core.Object]),
      remove: dart.fnType(async.Future, [core.Object]),
      [_onListen$]: dart.fnType(dart.void, []),
      [_onPause$]: dart.fnType(dart.void, []),
      [_onResume$]: dart.fnType(dart.void, []),
      [_onCancel$0]: dart.fnType(async.Future, []),
      [_onCancelBroadcast]: dart.fnType(dart.void, []),
      [_listenToStream]: dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(StreamGroup, () => ({
      __proto__: dart.getGetters(StreamGroup.__proto__),
      stream: async.Stream$(T)
    }));
    dart.setLibraryUri(StreamGroup, "package:async/src/stream_group.dart");
    dart.setFieldSignature(StreamGroup, () => ({
      __proto__: dart.getFields(StreamGroup.__proto__),
      [_controller$2]: dart.fieldType(async.StreamController$(T)),
      [_closed$0]: dart.fieldType(core.bool),
      [_state]: dart.fieldType(src__stream_group._StreamGroupState),
      [_subscriptions]: dart.finalFieldType(core.Map$(async.Stream$(T), async.StreamSubscription$(T)))
    }));
    return StreamGroup;
  });
  src__stream_group.StreamGroup = src__stream_group.StreamGroup$();
  dart.addTypeTests(src__stream_group.StreamGroup, _is_StreamGroup_default);
  src__stream_group._StreamGroupState = class _StreamGroupState extends core.Object {
    toString() {
      return this.name;
    }
  };
  (src__stream_group._StreamGroupState.new = function(name) {
    this.name = name;
    ;
  }).prototype = src__stream_group._StreamGroupState.prototype;
  dart.addTypeTests(src__stream_group._StreamGroupState);
  dart.setLibraryUri(src__stream_group._StreamGroupState, "package:async/src/stream_group.dart");
  dart.setFieldSignature(src__stream_group._StreamGroupState, () => ({
    __proto__: dart.getFields(src__stream_group._StreamGroupState.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__stream_group._StreamGroupState, ['toString']);
  dart.defineLazy(src__stream_group._StreamGroupState, {
    /*src__stream_group._StreamGroupState.dormant*/get dormant() {
      return dart.const(new src__stream_group._StreamGroupState.new("dormant"));
    },
    /*src__stream_group._StreamGroupState.listening*/get listening() {
      return dart.const(new src__stream_group._StreamGroupState.new("listening"));
    },
    /*src__stream_group._StreamGroupState.paused*/get paused() {
      return dart.const(new src__stream_group._StreamGroupState.new("paused"));
    },
    /*src__stream_group._StreamGroupState.canceled*/get canceled() {
      return dart.const(new src__stream_group._StreamGroupState.new("canceled"));
    }
  });
  const _is_SingleSubscriptionTransformer_default = Symbol('_is_SingleSubscriptionTransformer_default');
  src__single_subscription_transformer.SingleSubscriptionTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let SToNull = () => (SToNull = dart.constFn(dart.fnType(core.Null, [S])))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class SingleSubscriptionTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        let subscription = null;
        let controller = StreamControllerOfT().new({sync: true, onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
        subscription = stream.listen(dart.fn(value => {
          try {
            controller.add(T.as(value));
          } catch (e) {
            let error = dart.getThrown(e);
            let stackTrace = dart.stackTrace(e);
            if (core.CastError.is(error)) {
              controller.addError(error, stackTrace);
            } else
              throw e;
          }
        }, SToNull()), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close')});
        return controller.stream;
      }
    }
    (SingleSubscriptionTransformer.new = function() {
      SingleSubscriptionTransformer.__proto__.new.call(this);
      ;
    }).prototype = SingleSubscriptionTransformer.prototype;
    dart.addTypeTests(SingleSubscriptionTransformer);
    SingleSubscriptionTransformer.prototype[_is_SingleSubscriptionTransformer_default] = true;
    dart.setMethodSignature(SingleSubscriptionTransformer, () => ({
      __proto__: dart.getMethods(SingleSubscriptionTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(SingleSubscriptionTransformer, "package:async/src/single_subscription_transformer.dart");
    return SingleSubscriptionTransformer;
  });
  src__single_subscription_transformer.SingleSubscriptionTransformer = src__single_subscription_transformer.SingleSubscriptionTransformer$();
  dart.addTypeTests(src__single_subscription_transformer.SingleSubscriptionTransformer, _is_SingleSubscriptionTransformer_default);
  const _duration$ = dart.privateName(src__restartable_timer, "_duration");
  const _callback$ = dart.privateName(src__restartable_timer, "_callback");
  const _timer = dart.privateName(src__restartable_timer, "_timer");
  src__restartable_timer.RestartableTimer = class RestartableTimer extends core.Object {
    get isActive() {
      return this[_timer].isActive;
    }
    reset() {
      this[_timer].cancel();
      this[_timer] = async.Timer.new(this[_duration$], this[_callback$]);
    }
    cancel() {
      this[_timer].cancel();
    }
    get tick() {
      return this[_timer].tick;
    }
  };
  (src__restartable_timer.RestartableTimer.new = function(_duration, _callback) {
    this[_duration$] = _duration;
    this[_callback$] = _callback;
    this[_timer] = async.Timer.new(_duration, _callback);
    ;
  }).prototype = src__restartable_timer.RestartableTimer.prototype;
  dart.addTypeTests(src__restartable_timer.RestartableTimer);
  src__restartable_timer.RestartableTimer[dart.implements] = () => [async.Timer];
  dart.setMethodSignature(src__restartable_timer.RestartableTimer, () => ({
    __proto__: dart.getMethods(src__restartable_timer.RestartableTimer.__proto__),
    reset: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__restartable_timer.RestartableTimer, () => ({
    __proto__: dart.getGetters(src__restartable_timer.RestartableTimer.__proto__),
    isActive: core.bool,
    tick: core.int
  }));
  dart.setLibraryUri(src__restartable_timer.RestartableTimer, "package:async/src/restartable_timer.dart");
  dart.setFieldSignature(src__restartable_timer.RestartableTimer, () => ({
    __proto__: dart.getFields(src__restartable_timer.RestartableTimer.__proto__),
    [_duration$]: dart.finalFieldType(core.Duration),
    [_callback$]: dart.finalFieldType(dart.fnType(dart.dynamic, [])),
    [_timer]: dart.fieldType(async.Timer)
  }));
  const _callback = dart.privateName(src__lazy_stream, "_callback");
  const _is_LazyStream_default = Symbol('_is_LazyStream_default');
  src__lazy_stream.LazyStream$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let FutureOfStreamOfT = () => (FutureOfStreamOfT = dart.constFn(async.Future$(StreamOfT())))();
    let StreamOfTToStreamOfT = () => (StreamOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [StreamOfT()])))();
    class LazyStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_callback] == null) {
          dart.throw(new core.StateError.new("Stream has already been listened to."));
        }
        let callback = this[_callback];
        this[_callback] = null;
        let result = callback();
        let stream = null;
        if (FutureOfStreamOfT().is(result)) {
          stream = src__stream_completer.StreamCompleter.fromFuture(T, result.then(StreamOfT(), dart.fn(stream => src__delegate__stream.DelegatingStream.typed(T, stream), StreamOfTToStreamOfT())));
        } else {
          stream = src__delegate__stream.DelegatingStream.typed(T, async.Stream.as(result));
        }
        return stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (LazyStream.new = function(callback) {
      this[_callback] = callback;
      LazyStream.__proto__.new.call(this);
      if (this[_callback] == null) dart.throw(new core.ArgumentError.notNull("callback"));
    }).prototype = LazyStream.prototype;
    dart.addTypeTests(LazyStream);
    LazyStream.prototype[_is_LazyStream_default] = true;
    dart.setMethodSignature(LazyStream, () => ({
      __proto__: dart.getMethods(LazyStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(LazyStream, "package:async/src/lazy_stream.dart");
    dart.setFieldSignature(LazyStream, () => ({
      __proto__: dart.getFields(LazyStream.__proto__),
      [_callback]: dart.fieldType(dart.fnType(async.FutureOr$(async.Stream$(T)), []))
    }));
    return LazyStream;
  });
  src__lazy_stream.LazyStream = src__lazy_stream.LazyStream$();
  dart.addTypeTests(src__lazy_stream.LazyStream, _is_LazyStream_default);
  const _sink$2 = dart.privateName(src__delegate__sink, "_sink");
  const _is_DelegatingSink_default = Symbol('_is_DelegatingSink_default');
  src__delegate__sink.DelegatingSink$ = dart.generic(T => {
    class DelegatingSink extends core.Object {
      static typed(T, sink) {
        return core.Sink$(T).is(sink) ? sink : new (src__delegate__sink.DelegatingSink$(T)).__(sink);
      }
      add(data) {
        T._check(data);
        this[_sink$2].add(data);
      }
      close() {
        this[_sink$2].close();
      }
    }
    (DelegatingSink.new = function(sink) {
      this[_sink$2] = sink;
      ;
    }).prototype = DelegatingSink.prototype;
    (DelegatingSink.__ = function(_sink) {
      this[_sink$2] = _sink;
      ;
    }).prototype = DelegatingSink.prototype;
    dart.addTypeTests(DelegatingSink);
    DelegatingSink.prototype[_is_DelegatingSink_default] = true;
    DelegatingSink[dart.implements] = () => [core.Sink$(T)];
    dart.setMethodSignature(DelegatingSink, () => ({
      __proto__: dart.getMethods(DelegatingSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(DelegatingSink, "package:async/src/delegate/sink.dart");
    dart.setFieldSignature(DelegatingSink, () => ({
      __proto__: dart.getFields(DelegatingSink.__proto__),
      [_sink$2]: dart.finalFieldType(core.Sink)
    }));
    return DelegatingSink;
  });
  src__delegate__sink.DelegatingSink = src__delegate__sink.DelegatingSink$();
  dart.addTypeTests(src__delegate__sink.DelegatingSink, _is_DelegatingSink_default);
  const _sink$3 = dart.privateName(src__delegate__event_sink, "_sink");
  const _is_DelegatingEventSink_default = Symbol('_is_DelegatingEventSink_default');
  src__delegate__event_sink.DelegatingEventSink$ = dart.generic(T => {
    class DelegatingEventSink extends core.Object {
      static typed(T, sink) {
        return async.EventSink$(T).is(sink) ? sink : new (src__delegate__event_sink.DelegatingEventSink$(T)).__(sink);
      }
      add(data) {
        T._check(data);
        this[_sink$3].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_sink$3].addError(error, stackTrace);
      }
      close() {
        this[_sink$3].close();
      }
    }
    (DelegatingEventSink.new = function(sink) {
      this[_sink$3] = sink;
      ;
    }).prototype = DelegatingEventSink.prototype;
    (DelegatingEventSink.__ = function(_sink) {
      this[_sink$3] = _sink;
      ;
    }).prototype = DelegatingEventSink.prototype;
    dart.addTypeTests(DelegatingEventSink);
    DelegatingEventSink.prototype[_is_DelegatingEventSink_default] = true;
    DelegatingEventSink[dart.implements] = () => [async.EventSink$(T)];
    dart.setMethodSignature(DelegatingEventSink, () => ({
      __proto__: dart.getMethods(DelegatingEventSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(DelegatingEventSink, "package:async/src/delegate/event_sink.dart");
    dart.setFieldSignature(DelegatingEventSink, () => ({
      __proto__: dart.getFields(DelegatingEventSink.__proto__),
      [_sink$3]: dart.finalFieldType(async.EventSink)
    }));
    return DelegatingEventSink;
  });
  src__delegate__event_sink.DelegatingEventSink = src__delegate__event_sink.DelegatingEventSink$();
  dart.addTypeTests(src__delegate__event_sink.DelegatingEventSink, _is_DelegatingEventSink_default);
  src__byte_collector.collectBytes = function(source) {
    return src__byte_collector._collectBytes(FutureOfUint8List(), source, dart.fn((_, result) => result, StreamSubscriptionOfListOfintAndFutureOfUint8ListToFutureOfUint8List()));
  };
  src__byte_collector.collectBytesCancelable = function(source) {
    return src__byte_collector._collectBytes(CancelableOperationOfUint8List(), source, dart.fn((subscription, result) => CancelableOperationOfUint8List().fromFuture(result, {onCancel: dart.bind(subscription, 'cancel')}), StreamSubscriptionOfListOfintAndFutureOfUint8ListToCancelableOperationOfUint8List()));
  };
  src__byte_collector._collectBytes = function(T, source, result) {
    let byteLists = JSArrayOfListOfint().of([]);
    let length = 0;
    let completer = CompleterOfUint8List().sync();
    let subscription = source.listen(dart.fn(bytes => {
      byteLists[$add](bytes);
      length = length + dart.notNull(bytes[$length]);
    }, ListOfintToNull()), {onError: dart.bind(completer, 'completeError'), onDone: dart.fn(() => {
        completer.complete(src__byte_collector._collect(length, byteLists));
      }, VoidToNull()), cancelOnError: true});
    return result(subscription, completer.future);
  };
  src__byte_collector._collect = function(length, byteLists) {
    let result = _native_typed_data.NativeUint8List.new(length);
    let i = 0;
    for (let byteList of byteLists) {
      let end = i + dart.notNull(byteList[$length]);
      result[$setRange](i, end, byteList);
      i = end;
    }
    return result;
  };
  const _cachedStreamSplitter = dart.privateName(src__async_cache, "_cachedStreamSplitter");
  const _cachedValueFuture = dart.privateName(src__async_cache, "_cachedValueFuture");
  const _stale = dart.privateName(src__async_cache, "_stale");
  const _duration$0 = dart.privateName(src__async_cache, "_duration");
  const _startStaleTimer = dart.privateName(src__async_cache, "_startStaleTimer");
  const _is_AsyncCache_default = Symbol('_is_AsyncCache_default');
  src__async_cache.AsyncCache$ = dart.generic(T => {
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let VoidToFutureOfT = () => (VoidToFutureOfT = dart.constFn(dart.fnType(FutureOfT(), [])))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let VoidToStreamOfT = () => (VoidToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [])))();
    let StreamSplitterOfT = () => (StreamSplitterOfT = dart.constFn(src__stream_splitter.StreamSplitter$(T)))();
    let _StreamHandlerTransformerOfT$T = () => (_StreamHandlerTransformerOfT$T = dart.constFn(async._StreamHandlerTransformer$(T, T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let EventSinkOfTToNull = () => (EventSinkOfTToNull = dart.constFn(dart.fnType(core.Null, [EventSinkOfT()])))();
    class AsyncCache extends core.Object {
      static ephemeral() {
        return new (src__async_cache.AsyncCache$(T)).new(core.Duration.zero);
      }
      fetch(callback) {
        VoidToFutureOfT()._check(callback);
        return async.async(T, (function* fetch() {
          if (this[_cachedStreamSplitter] != null) {
            dart.throw(new core.StateError.new("Previously used to cache via `fetchStream`"));
          }
          if (this[_cachedValueFuture] == null) {
            this[_cachedValueFuture] = callback();
            yield this[_cachedValueFuture];
            this[_startStaleTimer]();
          }
          return this[_cachedValueFuture];
        }).bind(this));
      }
      fetchStream(callback) {
        VoidToStreamOfT()._check(callback);
        if (this[_cachedValueFuture] != null) {
          dart.throw(new core.StateError.new("Previously used to cache via `fetch`"));
        }
        if (this[_cachedStreamSplitter] == null) {
          this[_cachedStreamSplitter] = new (StreamSplitterOfT()).new(callback().transform(T, new (_StreamHandlerTransformerOfT$T()).new({handleDone: dart.fn(sink => {
              this[_startStaleTimer]();
              sink.close();
            }, EventSinkOfTToNull())})));
        }
        return this[_cachedStreamSplitter].split();
      }
      invalidate() {
        let t3, t3$;
        this[_cachedValueFuture] = null;
        t3 = this[_cachedStreamSplitter];
        t3 == null ? null : t3.close();
        this[_cachedStreamSplitter] = null;
        t3$ = this[_stale];
        t3$ == null ? null : t3$.cancel();
        this[_stale] = null;
      }
      [_startStaleTimer]() {
        this[_stale] = async.Timer.new(this[_duration$0], dart.bind(this, 'invalidate'));
      }
    }
    (AsyncCache.new = function(_duration) {
      this[_cachedStreamSplitter] = null;
      this[_cachedValueFuture] = null;
      this[_stale] = null;
      this[_duration$0] = _duration;
      ;
    }).prototype = AsyncCache.prototype;
    dart.addTypeTests(AsyncCache);
    AsyncCache.prototype[_is_AsyncCache_default] = true;
    dart.setMethodSignature(AsyncCache, () => ({
      __proto__: dart.getMethods(AsyncCache.__proto__),
      fetch: dart.fnType(async.Future$(T), [core.Object]),
      fetchStream: dart.fnType(async.Stream$(T), [core.Object]),
      invalidate: dart.fnType(dart.void, []),
      [_startStaleTimer]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(AsyncCache, "package:async/src/async_cache.dart");
    dart.setFieldSignature(AsyncCache, () => ({
      __proto__: dart.getFields(AsyncCache.__proto__),
      [_duration$0]: dart.finalFieldType(core.Duration),
      [_cachedStreamSplitter]: dart.fieldType(src__stream_splitter.StreamSplitter$(T)),
      [_cachedValueFuture]: dart.fieldType(async.Future$(T)),
      [_stale]: dart.fieldType(async.Timer)
    }));
    return AsyncCache;
  });
  src__async_cache.AsyncCache = src__async_cache.AsyncCache$();
  dart.addTypeTests(src__async_cache.AsyncCache, _is_AsyncCache_default);
  dart.trackLibraries("packages/async/async", {
    "package:async/src/stream_subscription_transformer.dart": src__stream_subscription_transformer,
    "package:async/src/async_memoizer.dart": src__async_memoizer,
    "package:async/src/delegate/future.dart": src__delegate__future,
    "package:async/src/delegate/stream_consumer.dart": src__delegate__stream_consumer,
    "package:async/src/stream_sink_completer.dart": src__stream_sink_completer,
    "package:async/src/null_stream_sink.dart": src__null_stream_sink,
    "package:async/src/result/future.dart": src__result__future,
    "package:async/src/result/result.dart": src__result__result,
    "package:async/src/stream_sink_transformer.dart": src__stream_sink_transformer,
    "package:async/src/stream_sink_transformer/typed.dart": src__stream_sink_transformer__typed,
    "package:async/src/delegate/stream_sink.dart": src__delegate__stream_sink,
    "package:async/src/stream_sink_transformer/stream_transformer_wrapper.dart": src__stream_sink_transformer__stream_transformer_wrapper,
    "package:async/src/stream_sink_transformer/handler_transformer.dart": src__stream_sink_transformer__handler_transformer,
    "package:async/src/result/value.dart": src__result__value,
    "package:async/src/result/error.dart": src__result__error,
    "package:async/src/result/release_transformer.dart": src__result__release_transformer,
    "package:async/src/result/release_sink.dart": src__result__release_sink,
    "package:async/src/result/capture_transformer.dart": src__result__capture_transformer,
    "package:async/src/result/capture_sink.dart": src__result__capture_sink,
    "package:async/src/delegate/stream_subscription.dart": src__delegate__stream_subscription,
    "package:async/src/typed/stream_subscription.dart": src__typed__stream_subscription,
    "package:async/src/utils.dart": src__utils,
    "package:async/src/stream_completer.dart": src__stream_completer,
    "package:async/async.dart": async$,
    "package:async/src/typed_stream_transformer.dart": src__typed_stream_transformer,
    "package:async/src/delegate/stream.dart": src__delegate__stream,
    "package:async/src/subscription_stream.dart": src__subscription_stream,
    "package:async/src/stream_zip.dart": src__stream_zip,
    "package:async/src/stream_splitter.dart": src__stream_splitter,
    "package:async/src/future_group.dart": src__future_group,
    "package:async/src/stream_queue.dart": src__stream_queue,
    "package:async/src/cancelable_operation.dart": src__cancelable_operation,
    "package:async/src/stream_group.dart": src__stream_group,
    "package:async/src/single_subscription_transformer.dart": src__single_subscription_transformer,
    "package:async/src/restartable_timer.dart": src__restartable_timer,
    "package:async/src/lazy_stream.dart": src__lazy_stream,
    "package:async/src/delegate/sink.dart": src__delegate__sink,
    "package:async/src/delegate/event_sink.dart": src__delegate__event_sink,
    "package:async/src/byte_collector.dart": src__byte_collector,
    "package:async/src/async_cache.dart": src__async_cache
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/async/src/stream_subscription_transformer.dart","org-dartlang-app:///packages/async/src/async_memoizer.dart","org-dartlang-app:///packages/async/src/delegate/future.dart","org-dartlang-app:///packages/async/src/delegate/stream_consumer.dart","org-dartlang-app:///packages/async/src/stream_sink_completer.dart","org-dartlang-app:///packages/async/src/null_stream_sink.dart","org-dartlang-app:///packages/async/src/result/future.dart","org-dartlang-app:///packages/async/src/result/result.dart","org-dartlang-app:///packages/async/src/stream_sink_transformer.dart","org-dartlang-app:///packages/async/src/stream_sink_transformer/typed.dart","org-dartlang-app:///packages/async/src/delegate/stream_sink.dart","org-dartlang-app:///packages/async/src/stream_sink_transformer/stream_transformer_wrapper.dart","org-dartlang-app:///packages/async/src/stream_sink_transformer/handler_transformer.dart","org-dartlang-app:///packages/async/src/result/value.dart","org-dartlang-app:///packages/async/src/result/error.dart","org-dartlang-app:///packages/async/src/result/release_transformer.dart","org-dartlang-app:///packages/async/src/result/release_sink.dart","org-dartlang-app:///packages/async/src/result/capture_transformer.dart","org-dartlang-app:///packages/async/src/result/capture_sink.dart","org-dartlang-app:///packages/async/src/delegate/stream_subscription.dart","org-dartlang-app:///packages/async/src/typed/stream_subscription.dart","org-dartlang-app:///packages/async/src/stream_completer.dart","org-dartlang-app:///packages/async/src/typed_stream_transformer.dart","org-dartlang-app:///packages/async/src/delegate/stream.dart","org-dartlang-app:///packages/async/src/subscription_stream.dart","org-dartlang-app:///packages/async/src/stream_zip.dart","org-dartlang-app:///packages/async/src/stream_splitter.dart","org-dartlang-app:///packages/async/src/future_group.dart","org-dartlang-app:///packages/async/src/stream_queue.dart","org-dartlang-app:///packages/async/src/cancelable_operation.dart","org-dartlang-app:///packages/async/src/stream_group.dart","org-dartlang-app:///packages/async/src/single_subscription_transformer.dart","org-dartlang-app:///packages/async/src/restartable_timer.dart","org-dartlang-app:///packages/async/src/lazy_stream.dart","org-dartlang-app:///packages/async/src/delegate/sink.dart","org-dartlang-app:///packages/async/src/delegate/event_sink.dart","org-dartlang-app:///packages/async/src/byte_collector.dart","org-dartlang-app:///packages/async/src/async_cache.dart"],"names":[],"mappings":"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","file":"async.ddc.js"}');
  // Exports:
  return {
    src__stream_subscription_transformer: src__stream_subscription_transformer,
    src__async_memoizer: src__async_memoizer,
    src__delegate__future: src__delegate__future,
    src__delegate__stream_consumer: src__delegate__stream_consumer,
    src__stream_sink_completer: src__stream_sink_completer,
    src__null_stream_sink: src__null_stream_sink,
    src__result__future: src__result__future,
    src__result__result: src__result__result,
    src__stream_sink_transformer: src__stream_sink_transformer,
    src__stream_sink_transformer__typed: src__stream_sink_transformer__typed,
    src__delegate__stream_sink: src__delegate__stream_sink,
    src__stream_sink_transformer__stream_transformer_wrapper: src__stream_sink_transformer__stream_transformer_wrapper,
    src__stream_sink_transformer__handler_transformer: src__stream_sink_transformer__handler_transformer,
    src__result__value: src__result__value,
    src__result__error: src__result__error,
    src__result__release_transformer: src__result__release_transformer,
    src__result__release_sink: src__result__release_sink,
    src__result__capture_transformer: src__result__capture_transformer,
    src__result__capture_sink: src__result__capture_sink,
    src__delegate__stream_subscription: src__delegate__stream_subscription,
    src__typed__stream_subscription: src__typed__stream_subscription,
    src__utils: src__utils,
    src__stream_completer: src__stream_completer,
    async: async$,
    src__typed_stream_transformer: src__typed_stream_transformer,
    src__delegate__stream: src__delegate__stream,
    src__subscription_stream: src__subscription_stream,
    src__stream_zip: src__stream_zip,
    src__stream_splitter: src__stream_splitter,
    src__future_group: src__future_group,
    src__stream_queue: src__stream_queue,
    src__cancelable_operation: src__cancelable_operation,
    src__stream_group: src__stream_group,
    src__single_subscription_transformer: src__single_subscription_transformer,
    src__restartable_timer: src__restartable_timer,
    src__lazy_stream: src__lazy_stream,
    src__delegate__sink: src__delegate__sink,
    src__delegate__event_sink: src__delegate__event_sink,
    src__byte_collector: src__byte_collector,
    src__async_cache: src__async_cache
  };
});

//# sourceMappingURL=async.ddc.js.map

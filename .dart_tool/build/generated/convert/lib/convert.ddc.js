define(['dart_sdk', 'packages/charcode/ascii', 'packages/typed_data/typed_buffers'], function(dart_sdk, ascii, typed_buffers) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ascii$ = ascii.ascii;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const src__hex__decoder = Object.create(dart.library);
  const src__utils = Object.create(dart.library);
  const src__byte_accumulator_sink = Object.create(dart.library);
  const src__hex__encoder = Object.create(dart.library);
  const convert$ = Object.create(dart.library);
  const src__string_accumulator_sink = Object.create(dart.library);
  const src__percent = Object.create(dart.library);
  const src__percent__decoder = Object.create(dart.library);
  const src__percent__encoder = Object.create(dart.library);
  const src__identity_codec = Object.create(dart.library);
  const src__hex = Object.create(dart.library);
  const src__accumulator_sink = Object.create(dart.library);
  const $isEven = dartx.isEven;
  const $truncate = dartx.truncate;
  const $codeUnits = dartx.codeUnits;
  const $_set = dartx._set;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $toRadixString = dartx.toRadixString;
  const $padLeft = dartx.padLeft;
  const $clear = dartx.clear;
  const $abs = dartx.abs;
  const $substring = dartx.substring;
  const $asUint8List = dartx.asUint8List;
  const $add = dartx.add;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfListOfint = () => (SinkOfListOfint = dart.constFn(core.Sink$(ListOfint())))();
  let SinkOfString = () => (SinkOfString = dart.constFn(core.Sink$(core.String)))();
  src__hex__decoder.HexDecoder = class HexDecoder extends convert.Converter$(core.String, core.List$(core.int)) {
    convert(string) {
      core.String._check(string);
      if (!string.length[$isEven]) {
        dart.throw(new core.FormatException.new("Invalid input length, must be even.", string, string.length));
      }
      let bytes = _native_typed_data.NativeUint8List.new((string.length / 2)[$truncate]());
      src__hex__decoder._decode(string[$codeUnits], 0, string.length, bytes, 0);
      return bytes;
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new src__hex__decoder._HexDecoderSink.new(sink);
    }
  };
  (src__hex__decoder.HexDecoder.__ = function() {
    src__hex__decoder.HexDecoder.__proto__.new.call(this);
    ;
  }).prototype = src__hex__decoder.HexDecoder.prototype;
  dart.addTypeTests(src__hex__decoder.HexDecoder);
  dart.setMethodSignature(src__hex__decoder.HexDecoder, () => ({
    __proto__: dart.getMethods(src__hex__decoder.HexDecoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.StringConversionSink, [core.Object])
  }));
  dart.setLibraryUri(src__hex__decoder.HexDecoder, "package:convert/src/hex/decoder.dart");
  const _lastDigit = dart.privateName(src__hex__decoder, "_lastDigit");
  const _sink$ = dart.privateName(src__hex__decoder, "_sink");
  const _close = dart.privateName(src__hex__decoder, "_close");
  src__hex__decoder._HexDecoderSink = class _HexDecoderSink extends convert.StringConversionSinkBase {
    addSlice(string, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, string.length);
      if (start == end) {
        if (dart.test(isLast)) this[_close](string, end);
        return;
      }
      let codeUnits = string[$codeUnits];
      let bytes = null;
      let bytesStart = null;
      if (this[_lastDigit] == null) {
        bytes = _native_typed_data.NativeUint8List.new(((dart.notNull(end) - dart.notNull(start)) / 2)[$truncate]());
        bytesStart = 0;
      } else {
        let hexPairs = ((dart.notNull(end) - dart.notNull(start) - 1) / 2)[$truncate]();
        bytes = _native_typed_data.NativeUint8List.new(1 + hexPairs);
        bytes[$_set](0, dart.notNull(this[_lastDigit]) + dart.notNull(src__utils.digitForCodeUnit(codeUnits, start)));
        start = dart.notNull(start) + 1;
        bytesStart = 1;
      }
      this[_lastDigit] = src__hex__decoder._decode(codeUnits, start, end, bytes, bytesStart);
      this[_sink$].add(bytes);
      if (dart.test(isLast)) this[_close](string, end);
    }
    asUtf8Sink(allowMalformed) {
      return new src__hex__decoder._HexDecoderByteSink.new(this[_sink$]);
    }
    close() {
      return this[_close]();
    }
    [_close](string, index) {
      if (string === void 0) string = null;
      if (index === void 0) index = null;
      if (this[_lastDigit] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", string, index));
      }
      this[_sink$].close();
    }
  };
  (src__hex__decoder._HexDecoderSink.new = function(_sink) {
    this[_lastDigit] = null;
    this[_sink$] = _sink;
    ;
  }).prototype = src__hex__decoder._HexDecoderSink.prototype;
  dart.addTypeTests(src__hex__decoder._HexDecoderSink);
  dart.setMethodSignature(src__hex__decoder._HexDecoderSink, () => ({
    __proto__: dart.getMethods(src__hex__decoder._HexDecoderSink.__proto__),
    addSlice: dart.fnType(dart.void, [core.String, core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [core.String, core.int])
  }));
  dart.setLibraryUri(src__hex__decoder._HexDecoderSink, "package:convert/src/hex/decoder.dart");
  dart.setFieldSignature(src__hex__decoder._HexDecoderSink, () => ({
    __proto__: dart.getFields(src__hex__decoder._HexDecoderSink.__proto__),
    [_sink$]: dart.finalFieldType(core.Sink$(core.List$(core.int))),
    [_lastDigit]: dart.fieldType(core.int)
  }));
  src__hex__decoder._HexDecoderByteSink = class _HexDecoderByteSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      return this.addSlice(chunk, 0, chunk[$length], false);
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      if (start == end) {
        if (dart.test(isLast)) this[_close](chunk, end);
        return;
      }
      let bytes = null;
      let bytesStart = null;
      if (this[_lastDigit] == null) {
        bytes = _native_typed_data.NativeUint8List.new(((dart.notNull(end) - dart.notNull(start)) / 2)[$truncate]());
        bytesStart = 0;
      } else {
        let hexPairs = ((dart.notNull(end) - dart.notNull(start) - 1) / 2)[$truncate]();
        bytes = _native_typed_data.NativeUint8List.new(1 + hexPairs);
        bytes[$_set](0, dart.notNull(this[_lastDigit]) + dart.notNull(src__utils.digitForCodeUnit(chunk, start)));
        start = dart.notNull(start) + 1;
        bytesStart = 1;
      }
      this[_lastDigit] = src__hex__decoder._decode(chunk, start, end, bytes, bytesStart);
      this[_sink$].add(bytes);
      if (dart.test(isLast)) this[_close](chunk, end);
    }
    close() {
      return this[_close]();
    }
    [_close](chunk, index) {
      if (chunk === void 0) chunk = null;
      if (index === void 0) index = null;
      if (this[_lastDigit] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", chunk, index));
      }
      this[_sink$].close();
    }
  };
  (src__hex__decoder._HexDecoderByteSink.new = function(_sink) {
    this[_lastDigit] = null;
    this[_sink$] = _sink;
    src__hex__decoder._HexDecoderByteSink.__proto__.new.call(this);
    ;
  }).prototype = src__hex__decoder._HexDecoderByteSink.prototype;
  dart.addTypeTests(src__hex__decoder._HexDecoderByteSink);
  dart.setMethodSignature(src__hex__decoder._HexDecoderByteSink, () => ({
    __proto__: dart.getMethods(src__hex__decoder._HexDecoderByteSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [core.List$(core.int), core.int])
  }));
  dart.setLibraryUri(src__hex__decoder._HexDecoderByteSink, "package:convert/src/hex/decoder.dart");
  dart.setFieldSignature(src__hex__decoder._HexDecoderByteSink, () => ({
    __proto__: dart.getFields(src__hex__decoder._HexDecoderByteSink.__proto__),
    [_sink$]: dart.finalFieldType(core.Sink$(core.List$(core.int))),
    [_lastDigit]: dart.fieldType(core.int)
  }));
  src__hex__decoder._decode = function(codeUnits, sourceStart, sourceEnd, destination, destinationStart) {
    let t0;
    let destinationIndex = destinationStart;
    for (let i = sourceStart; dart.notNull(i) < dart.notNull(sourceEnd) - 1; i = dart.notNull(i) + 2) {
      let firstDigit = src__utils.digitForCodeUnit(codeUnits, i);
      let secondDigit = src__utils.digitForCodeUnit(codeUnits, dart.notNull(i) + 1);
      destination[$_set]((t0 = destinationIndex, destinationIndex = dart.notNull(t0) + 1, t0), 16 * dart.notNull(firstDigit) + dart.notNull(secondDigit));
    }
    if ((dart.notNull(sourceEnd) - dart.notNull(sourceStart))[$isEven]) return null;
    return 16 * dart.notNull(src__utils.digitForCodeUnit(codeUnits, dart.notNull(sourceEnd) - 1));
  };
  dart.defineLazy(src__hex__decoder, {
    /*src__hex__decoder.hexDecoder*/get hexDecoder() {
      return dart.const(new src__hex__decoder.HexDecoder.__());
    }
  });
  src__utils.digitForCodeUnit = function(codeUnits, index) {
    let codeUnit = codeUnits[$_get](index);
    let digit = (dart.notNull(ascii$.$0) ^ dart.notNull(codeUnit)) >>> 0;
    if (digit <= 9) {
      if (digit >= 0) return digit;
    } else {
      let letter = (32 | dart.notNull(codeUnit)) >>> 0;
      if (dart.notNull(ascii$.$a) <= letter && letter <= dart.notNull(ascii$.$f)) return letter - dart.notNull(ascii$.$a) + 10;
    }
    dart.throw(new core.FormatException.new("Invalid hexadecimal code unit " + "U+" + codeUnit[$toRadixString](16)[$padLeft](4, "0") + ".", codeUnits, index));
  };
  const _buffer = dart.privateName(src__byte_accumulator_sink, "_buffer");
  const _isClosed = dart.privateName(src__byte_accumulator_sink, "_isClosed");
  src__byte_accumulator_sink.ByteAccumulatorSink = class ByteAccumulatorSink extends convert.ByteConversionSinkBase {
    get bytes() {
      return typed_data.Uint8List.view(this[_buffer].buffer, 0, this[_buffer].length);
    }
    get isClosed() {
      return this[_isClosed];
    }
    clear() {
      this[_buffer][$clear]();
    }
    add(bytes) {
      ListOfint()._check(bytes);
      if (dart.test(this[_isClosed])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer].addAll(bytes);
    }
    addSlice(chunk, start, end, isLast) {
      if (dart.test(this[_isClosed])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer].addAll(chunk, start, end);
      if (dart.test(isLast)) this[_isClosed] = true;
    }
    close() {
      this[_isClosed] = true;
    }
  };
  (src__byte_accumulator_sink.ByteAccumulatorSink.new = function() {
    this[_buffer] = new typed_buffers$.Uint8Buffer.new();
    this[_isClosed] = false;
    src__byte_accumulator_sink.ByteAccumulatorSink.__proto__.new.call(this);
    ;
  }).prototype = src__byte_accumulator_sink.ByteAccumulatorSink.prototype;
  dart.addTypeTests(src__byte_accumulator_sink.ByteAccumulatorSink);
  dart.setMethodSignature(src__byte_accumulator_sink.ByteAccumulatorSink, () => ({
    __proto__: dart.getMethods(src__byte_accumulator_sink.ByteAccumulatorSink.__proto__),
    clear: dart.fnType(dart.void, []),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__byte_accumulator_sink.ByteAccumulatorSink, () => ({
    __proto__: dart.getGetters(src__byte_accumulator_sink.ByteAccumulatorSink.__proto__),
    bytes: typed_data.Uint8List,
    isClosed: core.bool
  }));
  dart.setLibraryUri(src__byte_accumulator_sink.ByteAccumulatorSink, "package:convert/src/byte_accumulator_sink.dart");
  dart.setFieldSignature(src__byte_accumulator_sink.ByteAccumulatorSink, () => ({
    __proto__: dart.getFields(src__byte_accumulator_sink.ByteAccumulatorSink.__proto__),
    [_buffer]: dart.finalFieldType(typed_buffers$.Uint8Buffer),
    [_isClosed]: dart.fieldType(core.bool)
  }));
  src__hex__encoder.HexEncoder = class HexEncoder extends convert.Converter$(core.List$(core.int), core.String) {
    convert(bytes) {
      ListOfint()._check(bytes);
      return src__hex__encoder._convert(bytes, 0, bytes[$length]);
    }
    startChunkedConversion(sink) {
      SinkOfString()._check(sink);
      return new src__hex__encoder._HexEncoderSink.new(sink);
    }
  };
  (src__hex__encoder.HexEncoder.__ = function() {
    src__hex__encoder.HexEncoder.__proto__.new.call(this);
    ;
  }).prototype = src__hex__encoder.HexEncoder.prototype;
  dart.addTypeTests(src__hex__encoder.HexEncoder);
  dart.setMethodSignature(src__hex__encoder.HexEncoder, () => ({
    __proto__: dart.getMethods(src__hex__encoder.HexEncoder.__proto__),
    convert: dart.fnType(core.String, [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  dart.setLibraryUri(src__hex__encoder.HexEncoder, "package:convert/src/hex/encoder.dart");
  const _sink$0 = dart.privateName(src__hex__encoder, "_sink");
  src__hex__encoder._HexEncoderSink = class _HexEncoderSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      this[_sink$0].add(src__hex__encoder._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink$0].add(src__hex__encoder._convert(chunk, start, end));
      if (dart.test(isLast)) this[_sink$0].close();
    }
    close() {
      this[_sink$0].close();
    }
  };
  (src__hex__encoder._HexEncoderSink.new = function(_sink) {
    this[_sink$0] = _sink;
    src__hex__encoder._HexEncoderSink.__proto__.new.call(this);
    ;
  }).prototype = src__hex__encoder._HexEncoderSink.prototype;
  dart.addTypeTests(src__hex__encoder._HexEncoderSink);
  dart.setMethodSignature(src__hex__encoder._HexEncoderSink, () => ({
    __proto__: dart.getMethods(src__hex__encoder._HexEncoderSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__hex__encoder._HexEncoderSink, "package:convert/src/hex/encoder.dart");
  dart.setFieldSignature(src__hex__encoder._HexEncoderSink, () => ({
    __proto__: dart.getFields(src__hex__encoder._HexEncoderSink.__proto__),
    [_sink$0]: dart.finalFieldType(core.Sink$(core.String))
  }));
  src__hex__encoder._convert = function(bytes, start, end) {
    let t0, t0$;
    let buffer = _native_typed_data.NativeUint8List.new((dart.notNull(end) - dart.notNull(start)) * 2);
    let bufferIndex = 0;
    let byteOr = 0;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      byteOr = (byteOr | dart.notNull(byte)) >>> 0;
      buffer[$_set]((t0 = bufferIndex, bufferIndex = t0 + 1, t0), src__hex__encoder._codeUnitForDigit((dart.notNull(byte) & 240) >> 4));
      buffer[$_set]((t0$ = bufferIndex, bufferIndex = t0$ + 1, t0$), src__hex__encoder._codeUnitForDigit(dart.notNull(byte) & 15));
    }
    if (byteOr >= 0 && byteOr <= 255) return core.String.fromCharCodes(buffer);
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      if (dart.notNull(byte) >= 0 && dart.notNull(byte) <= 255) continue;
      dart.throw(new core.FormatException.new("Invalid byte " + (dart.notNull(byte) < 0 ? "-" : "") + "0x" + byte[$abs]()[$toRadixString](16) + ".", bytes, i));
    }
    dart.throw("unreachable");
  };
  src__hex__encoder._codeUnitForDigit = function(digit) {
    return dart.notNull(digit) < 10 ? dart.notNull(digit) + dart.notNull(ascii$.$0) : dart.notNull(digit) + dart.notNull(ascii$.$a) - 10;
  };
  dart.defineLazy(src__hex__encoder, {
    /*src__hex__encoder.hexEncoder*/get hexEncoder() {
      return dart.const(new src__hex__encoder.HexEncoder.__());
    }
  });
  const _buffer$ = dart.privateName(src__string_accumulator_sink, "_buffer");
  const _isClosed$ = dart.privateName(src__string_accumulator_sink, "_isClosed");
  src__string_accumulator_sink.StringAccumulatorSink = class StringAccumulatorSink extends convert.StringConversionSinkBase {
    get string() {
      return dart.toString(this[_buffer$]);
    }
    get isClosed() {
      return this[_isClosed$];
    }
    clear() {
      this[_buffer$].clear();
    }
    add(chunk) {
      core.String._check(chunk);
      if (dart.test(this[_isClosed$])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer$].write(chunk);
    }
    addSlice(chunk, start, end, isLast) {
      if (dart.test(this[_isClosed$])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer$].write(chunk[$substring](start, end));
      if (dart.test(isLast)) this[_isClosed$] = true;
    }
    close() {
      this[_isClosed$] = true;
    }
  };
  (src__string_accumulator_sink.StringAccumulatorSink.new = function() {
    this[_buffer$] = new core.StringBuffer.new();
    this[_isClosed$] = false;
    ;
  }).prototype = src__string_accumulator_sink.StringAccumulatorSink.prototype;
  dart.addTypeTests(src__string_accumulator_sink.StringAccumulatorSink);
  dart.setMethodSignature(src__string_accumulator_sink.StringAccumulatorSink, () => ({
    __proto__: dart.getMethods(src__string_accumulator_sink.StringAccumulatorSink.__proto__),
    clear: dart.fnType(dart.void, []),
    addSlice: dart.fnType(dart.void, [core.String, core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__string_accumulator_sink.StringAccumulatorSink, () => ({
    __proto__: dart.getGetters(src__string_accumulator_sink.StringAccumulatorSink.__proto__),
    string: core.String,
    isClosed: core.bool
  }));
  dart.setLibraryUri(src__string_accumulator_sink.StringAccumulatorSink, "package:convert/src/string_accumulator_sink.dart");
  dart.setFieldSignature(src__string_accumulator_sink.StringAccumulatorSink, () => ({
    __proto__: dart.getFields(src__string_accumulator_sink.StringAccumulatorSink.__proto__),
    [_buffer$]: dart.finalFieldType(core.StringBuffer),
    [_isClosed$]: dart.fieldType(core.bool)
  }));
  src__percent.PercentCodec = class PercentCodec extends convert.Codec$(core.List$(core.int), core.String) {
    get encoder() {
      return src__percent__encoder.percentEncoder;
    }
    get decoder() {
      return src__percent__decoder.percentDecoder;
    }
  };
  (src__percent.PercentCodec.__ = function() {
    src__percent.PercentCodec.__proto__.new.call(this);
    ;
  }).prototype = src__percent.PercentCodec.prototype;
  dart.addTypeTests(src__percent.PercentCodec);
  dart.setGetterSignature(src__percent.PercentCodec, () => ({
    __proto__: dart.getGetters(src__percent.PercentCodec.__proto__),
    encoder: src__percent__encoder.PercentEncoder,
    decoder: src__percent__decoder.PercentDecoder
  }));
  dart.setLibraryUri(src__percent.PercentCodec, "package:convert/src/percent.dart");
  dart.defineLazy(src__percent, {
    /*src__percent.percent*/get percent() {
      return dart.const(new src__percent.PercentCodec.__());
    }
  });
  src__percent__decoder.PercentDecoder = class PercentDecoder extends convert.Converter$(core.String, core.List$(core.int)) {
    convert(string) {
      core.String._check(string);
      let buffer = new typed_buffers$.Uint8Buffer.new();
      let lastDigit = src__percent__decoder._decode(string[$codeUnits], 0, string.length, buffer);
      if (lastDigit != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", string, string.length));
      }
      return buffer.buffer[$asUint8List](0, buffer.length);
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new src__percent__decoder._PercentDecoderSink.new(sink);
    }
  };
  (src__percent__decoder.PercentDecoder.__ = function() {
    src__percent__decoder.PercentDecoder.__proto__.new.call(this);
    ;
  }).prototype = src__percent__decoder.PercentDecoder.prototype;
  dart.addTypeTests(src__percent__decoder.PercentDecoder);
  dart.setMethodSignature(src__percent__decoder.PercentDecoder, () => ({
    __proto__: dart.getMethods(src__percent__decoder.PercentDecoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.StringConversionSink, [core.Object])
  }));
  dart.setLibraryUri(src__percent__decoder.PercentDecoder, "package:convert/src/percent/decoder.dart");
  const _lastDigit$ = dart.privateName(src__percent__decoder, "_lastDigit");
  const _sink$1 = dart.privateName(src__percent__decoder, "_sink");
  const _close$ = dart.privateName(src__percent__decoder, "_close");
  src__percent__decoder._PercentDecoderSink = class _PercentDecoderSink extends convert.StringConversionSinkBase {
    addSlice(string, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, string.length);
      if (start == end) {
        if (dart.test(isLast)) this[_close$](string, end);
        return;
      }
      let buffer = new typed_buffers$.Uint8Buffer.new();
      let codeUnits = string[$codeUnits];
      if (this[_lastDigit$] == src__percent__decoder._lastPercent) {
        this[_lastDigit$] = 16 * dart.notNull(src__utils.digitForCodeUnit(codeUnits, start));
        start = dart.notNull(start) + 1;
        if (start == end) {
          if (dart.test(isLast)) this[_close$](string, end);
          return;
        }
      }
      if (this[_lastDigit$] != null) {
        buffer.add(dart.notNull(this[_lastDigit$]) + dart.notNull(src__utils.digitForCodeUnit(codeUnits, start)));
        start = dart.notNull(start) + 1;
      }
      this[_lastDigit$] = src__percent__decoder._decode(codeUnits, start, end, buffer);
      this[_sink$1].add(buffer.buffer[$asUint8List](0, buffer.length));
      if (dart.test(isLast)) this[_close$](string, end);
    }
    asUtf8Sink(allowMalformed) {
      return new src__percent__decoder._PercentDecoderByteSink.new(this[_sink$1]);
    }
    close() {
      return this[_close$]();
    }
    [_close$](string, index) {
      if (string === void 0) string = null;
      if (index === void 0) index = null;
      if (this[_lastDigit$] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", string, index));
      }
      this[_sink$1].close();
    }
  };
  (src__percent__decoder._PercentDecoderSink.new = function(_sink) {
    this[_lastDigit$] = null;
    this[_sink$1] = _sink;
    ;
  }).prototype = src__percent__decoder._PercentDecoderSink.prototype;
  dart.addTypeTests(src__percent__decoder._PercentDecoderSink);
  dart.setMethodSignature(src__percent__decoder._PercentDecoderSink, () => ({
    __proto__: dart.getMethods(src__percent__decoder._PercentDecoderSink.__proto__),
    addSlice: dart.fnType(dart.void, [core.String, core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, []),
    [_close$]: dart.fnType(dart.void, [], [core.String, core.int])
  }));
  dart.setLibraryUri(src__percent__decoder._PercentDecoderSink, "package:convert/src/percent/decoder.dart");
  dart.setFieldSignature(src__percent__decoder._PercentDecoderSink, () => ({
    __proto__: dart.getFields(src__percent__decoder._PercentDecoderSink.__proto__),
    [_sink$1]: dart.finalFieldType(core.Sink$(core.List$(core.int))),
    [_lastDigit$]: dart.fieldType(core.int)
  }));
  src__percent__decoder._PercentDecoderByteSink = class _PercentDecoderByteSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      return this.addSlice(chunk, 0, chunk[$length], false);
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      if (start == end) {
        if (dart.test(isLast)) this[_close$](chunk, end);
        return;
      }
      let buffer = new typed_buffers$.Uint8Buffer.new();
      if (this[_lastDigit$] == src__percent__decoder._lastPercent) {
        this[_lastDigit$] = 16 * dart.notNull(src__utils.digitForCodeUnit(chunk, start));
        start = dart.notNull(start) + 1;
        if (start == end) {
          if (dart.test(isLast)) this[_close$](chunk, end);
          return;
        }
      }
      if (this[_lastDigit$] != null) {
        buffer.add(dart.notNull(this[_lastDigit$]) + dart.notNull(src__utils.digitForCodeUnit(chunk, start)));
        start = dart.notNull(start) + 1;
      }
      this[_lastDigit$] = src__percent__decoder._decode(chunk, start, end, buffer);
      this[_sink$1].add(buffer.buffer[$asUint8List](0, buffer.length));
      if (dart.test(isLast)) this[_close$](chunk, end);
    }
    close() {
      return this[_close$]();
    }
    [_close$](chunk, index) {
      if (chunk === void 0) chunk = null;
      if (index === void 0) index = null;
      if (this[_lastDigit$] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", chunk, index));
      }
      this[_sink$1].close();
    }
  };
  (src__percent__decoder._PercentDecoderByteSink.new = function(_sink) {
    this[_lastDigit$] = null;
    this[_sink$1] = _sink;
    src__percent__decoder._PercentDecoderByteSink.__proto__.new.call(this);
    ;
  }).prototype = src__percent__decoder._PercentDecoderByteSink.prototype;
  dart.addTypeTests(src__percent__decoder._PercentDecoderByteSink);
  dart.setMethodSignature(src__percent__decoder._PercentDecoderByteSink, () => ({
    __proto__: dart.getMethods(src__percent__decoder._PercentDecoderByteSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, []),
    [_close$]: dart.fnType(dart.void, [], [core.List$(core.int), core.int])
  }));
  dart.setLibraryUri(src__percent__decoder._PercentDecoderByteSink, "package:convert/src/percent/decoder.dart");
  dart.setFieldSignature(src__percent__decoder._PercentDecoderByteSink, () => ({
    __proto__: dart.getFields(src__percent__decoder._PercentDecoderByteSink.__proto__),
    [_sink$1]: dart.finalFieldType(core.Sink$(core.List$(core.int))),
    [_lastDigit$]: dart.fieldType(core.int)
  }));
  src__percent__decoder._decode = function(codeUnits, start, end, buffer) {
    let codeUnitOr = 0;
    let sliceStart = start;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let codeUnit = codeUnits[$_get](i);
      if (codeUnits[$_get](i) != ascii$.$percent) {
        codeUnitOr = (codeUnitOr | dart.notNull(codeUnit)) >>> 0;
        continue;
      }
      if (dart.notNull(i) > dart.notNull(sliceStart)) {
        src__percent__decoder._checkForInvalidCodeUnit(codeUnitOr, codeUnits, sliceStart, i);
        buffer.addAll(codeUnits, sliceStart, i);
      }
      i = dart.notNull(i) + 1;
      if (dart.notNull(i) >= dart.notNull(end)) return src__percent__decoder._lastPercent;
      let firstDigit = src__utils.digitForCodeUnit(codeUnits, i);
      i = dart.notNull(i) + 1;
      if (dart.notNull(i) >= dart.notNull(end)) return 16 * dart.notNull(firstDigit);
      let secondDigit = src__utils.digitForCodeUnit(codeUnits, i);
      buffer.add(16 * dart.notNull(firstDigit) + dart.notNull(secondDigit));
      sliceStart = dart.notNull(i) + 1;
    }
    if (dart.notNull(end) > dart.notNull(sliceStart)) {
      src__percent__decoder._checkForInvalidCodeUnit(codeUnitOr, codeUnits, sliceStart, end);
      if (start == sliceStart) {
        buffer.addAll(codeUnits);
      } else {
        buffer.addAll(codeUnits, sliceStart, end);
      }
    }
    return null;
  };
  src__percent__decoder._checkForInvalidCodeUnit = function(codeUnitOr, codeUnits, start, end) {
    if (dart.notNull(codeUnitOr) >= 0 && dart.notNull(codeUnitOr) <= 127) return;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let codeUnit = codeUnits[$_get](i);
      if (dart.notNull(codeUnit) >= 0 && dart.notNull(codeUnit) <= 127) continue;
      dart.throw(new core.FormatException.new("Non-ASCII code unit " + "U+" + codeUnit[$toRadixString](16)[$padLeft](4, "0"), codeUnits, i));
    }
  };
  dart.defineLazy(src__percent__decoder, {
    /*src__percent__decoder.percentDecoder*/get percentDecoder() {
      return dart.const(new src__percent__decoder.PercentDecoder.__());
    },
    /*src__percent__decoder._lastPercent*/get _lastPercent() {
      return -1;
    }
  });
  src__percent__encoder.PercentEncoder = class PercentEncoder extends convert.Converter$(core.List$(core.int), core.String) {
    convert(bytes) {
      ListOfint()._check(bytes);
      return src__percent__encoder._convert(bytes, 0, bytes[$length]);
    }
    startChunkedConversion(sink) {
      SinkOfString()._check(sink);
      return new src__percent__encoder._PercentEncoderSink.new(sink);
    }
  };
  (src__percent__encoder.PercentEncoder.__ = function() {
    src__percent__encoder.PercentEncoder.__proto__.new.call(this);
    ;
  }).prototype = src__percent__encoder.PercentEncoder.prototype;
  dart.addTypeTests(src__percent__encoder.PercentEncoder);
  dart.setMethodSignature(src__percent__encoder.PercentEncoder, () => ({
    __proto__: dart.getMethods(src__percent__encoder.PercentEncoder.__proto__),
    convert: dart.fnType(core.String, [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  dart.setLibraryUri(src__percent__encoder.PercentEncoder, "package:convert/src/percent/encoder.dart");
  const _sink$2 = dart.privateName(src__percent__encoder, "_sink");
  src__percent__encoder._PercentEncoderSink = class _PercentEncoderSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      this[_sink$2].add(src__percent__encoder._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink$2].add(src__percent__encoder._convert(chunk, start, end));
      if (dart.test(isLast)) this[_sink$2].close();
    }
    close() {
      this[_sink$2].close();
    }
  };
  (src__percent__encoder._PercentEncoderSink.new = function(_sink) {
    this[_sink$2] = _sink;
    src__percent__encoder._PercentEncoderSink.__proto__.new.call(this);
    ;
  }).prototype = src__percent__encoder._PercentEncoderSink.prototype;
  dart.addTypeTests(src__percent__encoder._PercentEncoderSink);
  dart.setMethodSignature(src__percent__encoder._PercentEncoderSink, () => ({
    __proto__: dart.getMethods(src__percent__encoder._PercentEncoderSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__percent__encoder._PercentEncoderSink, "package:convert/src/percent/encoder.dart");
  dart.setFieldSignature(src__percent__encoder._PercentEncoderSink, () => ({
    __proto__: dart.getFields(src__percent__encoder._PercentEncoderSink.__proto__),
    [_sink$2]: dart.finalFieldType(core.Sink$(core.String))
  }));
  src__percent__encoder._convert = function(bytes, start, end) {
    let buffer = new core.StringBuffer.new();
    let byteOr = 0;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      byteOr = (byteOr | dart.notNull(byte)) >>> 0;
      let letter = (32 | dart.notNull(byte)) >>> 0;
      if (letter >= dart.notNull(ascii$.$a) && letter <= dart.notNull(ascii$.$z) || dart.notNull(byte) >= dart.notNull(ascii$.$0) && dart.notNull(byte) <= dart.notNull(ascii$.$9) || byte == ascii$.$dash || byte == ascii$.$dot || byte == ascii$.$underscore || byte == ascii$.$tilde) {
        buffer.writeCharCode(byte);
        continue;
      }
      buffer.writeCharCode(ascii$.$percent);
      buffer.writeCharCode(src__percent__encoder._codeUnitForDigit((dart.notNull(byte) & 240) >> 4));
      buffer.writeCharCode(src__percent__encoder._codeUnitForDigit(dart.notNull(byte) & 15));
    }
    if (byteOr >= 0 && byteOr <= 255) return buffer.toString();
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      if (dart.notNull(byte) >= 0 && dart.notNull(byte) <= 255) continue;
      dart.throw(new core.FormatException.new("Invalid byte " + (dart.notNull(byte) < 0 ? "-" : "") + "0x" + byte[$abs]()[$toRadixString](16) + ".", bytes, i));
    }
    dart.throw("unreachable");
  };
  src__percent__encoder._codeUnitForDigit = function(digit) {
    return dart.notNull(digit) < 10 ? dart.notNull(digit) + dart.notNull(ascii$.$0) : dart.notNull(digit) + dart.notNull(ascii$.$A) - 10;
  };
  dart.defineLazy(src__percent__encoder, {
    /*src__percent__encoder.percentEncoder*/get percentEncoder() {
      return dart.const(new src__percent__encoder.PercentEncoder.__());
    }
  });
  const _is__IdentityConverter_default = Symbol('_is__IdentityConverter_default');
  src__identity_codec._IdentityConverter$ = dart.generic(T => {
    class _IdentityConverter extends convert.Converter$(T, T) {
      convert(input) {
        T._check(input);
        return input;
      }
    }
    (_IdentityConverter.new = function() {
      _IdentityConverter.__proto__.new.call(this);
      ;
    }).prototype = _IdentityConverter.prototype;
    dart.addTypeTests(_IdentityConverter);
    _IdentityConverter.prototype[_is__IdentityConverter_default] = true;
    dart.setMethodSignature(_IdentityConverter, () => ({
      __proto__: dart.getMethods(_IdentityConverter.__proto__),
      convert: dart.fnType(T, [core.Object])
    }));
    dart.setLibraryUri(_IdentityConverter, "package:convert/src/identity_codec.dart");
    return _IdentityConverter;
  });
  src__identity_codec._IdentityConverter = src__identity_codec._IdentityConverter$();
  dart.addTypeTests(src__identity_codec._IdentityConverter, _is__IdentityConverter_default);
  const _is_IdentityCodec_default = Symbol('_is_IdentityCodec_default');
  src__identity_codec.IdentityCodec$ = dart.generic(T => {
    let _IdentityConverterOfT = () => (_IdentityConverterOfT = dart.constFn(src__identity_codec._IdentityConverter$(T)))();
    class IdentityCodec extends convert.Codec$(T, T) {
      get decoder() {
        return new (_IdentityConverterOfT()).new();
      }
      get encoder() {
        return new (_IdentityConverterOfT()).new();
      }
      fuse(R, other) {
        convert.Codec$(T, R)._check(other);
        return other;
      }
    }
    (IdentityCodec.new = function() {
      IdentityCodec.__proto__.new.call(this);
      ;
    }).prototype = IdentityCodec.prototype;
    dart.addTypeTests(IdentityCodec);
    IdentityCodec.prototype[_is_IdentityCodec_default] = true;
    dart.setGetterSignature(IdentityCodec, () => ({
      __proto__: dart.getGetters(IdentityCodec.__proto__),
      decoder: convert.Converter$(T, T),
      encoder: convert.Converter$(T, T)
    }));
    dart.setLibraryUri(IdentityCodec, "package:convert/src/identity_codec.dart");
    return IdentityCodec;
  });
  src__identity_codec.IdentityCodec = src__identity_codec.IdentityCodec$();
  dart.addTypeTests(src__identity_codec.IdentityCodec, _is_IdentityCodec_default);
  src__hex.HexCodec = class HexCodec extends convert.Codec$(core.List$(core.int), core.String) {
    get encoder() {
      return src__hex__encoder.hexEncoder;
    }
    get decoder() {
      return src__hex__decoder.hexDecoder;
    }
  };
  (src__hex.HexCodec.__ = function() {
    src__hex.HexCodec.__proto__.new.call(this);
    ;
  }).prototype = src__hex.HexCodec.prototype;
  dart.addTypeTests(src__hex.HexCodec);
  dart.setGetterSignature(src__hex.HexCodec, () => ({
    __proto__: dart.getGetters(src__hex.HexCodec.__proto__),
    encoder: src__hex__encoder.HexEncoder,
    decoder: src__hex__decoder.HexDecoder
  }));
  dart.setLibraryUri(src__hex.HexCodec, "package:convert/src/hex.dart");
  dart.defineLazy(src__hex, {
    /*src__hex.hex*/get hex() {
      return dart.const(new src__hex.HexCodec.__());
    }
  });
  const _events = dart.privateName(src__accumulator_sink, "_events");
  const _isClosed$0 = dart.privateName(src__accumulator_sink, "_isClosed");
  const _is_AccumulatorSink_default = Symbol('_is_AccumulatorSink_default');
  src__accumulator_sink.AccumulatorSink$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let UnmodifiableListViewOfT = () => (UnmodifiableListViewOfT = dart.constFn(collection.UnmodifiableListView$(T)))();
    class AccumulatorSink extends core.Object {
      get events() {
        return new (UnmodifiableListViewOfT()).new(this[_events]);
      }
      get isClosed() {
        return this[_isClosed$0];
      }
      clear() {
        this[_events][$clear]();
      }
      add(event) {
        T._check(event);
        if (dart.test(this[_isClosed$0])) {
          dart.throw(new core.StateError.new("Can't add to a closed sink."));
        }
        this[_events][$add](event);
      }
      close() {
        this[_isClosed$0] = true;
      }
    }
    (AccumulatorSink.new = function() {
      this[_events] = JSArrayOfT().of([]);
      this[_isClosed$0] = false;
      ;
    }).prototype = AccumulatorSink.prototype;
    dart.addTypeTests(AccumulatorSink);
    AccumulatorSink.prototype[_is_AccumulatorSink_default] = true;
    AccumulatorSink[dart.implements] = () => [core.Sink$(T)];
    dart.setMethodSignature(AccumulatorSink, () => ({
      __proto__: dart.getMethods(AccumulatorSink.__proto__),
      clear: dart.fnType(dart.void, []),
      add: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(AccumulatorSink, () => ({
      __proto__: dart.getGetters(AccumulatorSink.__proto__),
      events: core.List$(T),
      isClosed: core.bool
    }));
    dart.setLibraryUri(AccumulatorSink, "package:convert/src/accumulator_sink.dart");
    dart.setFieldSignature(AccumulatorSink, () => ({
      __proto__: dart.getFields(AccumulatorSink.__proto__),
      [_events]: dart.finalFieldType(core.List$(T)),
      [_isClosed$0]: dart.fieldType(core.bool)
    }));
    return AccumulatorSink;
  });
  src__accumulator_sink.AccumulatorSink = src__accumulator_sink.AccumulatorSink$();
  dart.addTypeTests(src__accumulator_sink.AccumulatorSink, _is_AccumulatorSink_default);
  dart.trackLibraries("packages/convert/convert", {
    "package:convert/src/hex/decoder.dart": src__hex__decoder,
    "package:convert/src/utils.dart": src__utils,
    "package:convert/src/byte_accumulator_sink.dart": src__byte_accumulator_sink,
    "package:convert/src/hex/encoder.dart": src__hex__encoder,
    "package:convert/convert.dart": convert$,
    "package:convert/src/string_accumulator_sink.dart": src__string_accumulator_sink,
    "package:convert/src/percent.dart": src__percent,
    "package:convert/src/percent/decoder.dart": src__percent__decoder,
    "package:convert/src/percent/encoder.dart": src__percent__encoder,
    "package:convert/src/identity_codec.dart": src__identity_codec,
    "package:convert/src/hex.dart": src__hex,
    "package:convert/src/accumulator_sink.dart": src__accumulator_sink
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/convert/src/hex/decoder.dart","org-dartlang-app:///packages/convert/src/utils.dart","org-dartlang-app:///packages/convert/src/byte_accumulator_sink.dart","org-dartlang-app:///packages/convert/src/hex/encoder.dart","org-dartlang-app:///packages/convert/src/string_accumulator_sink.dart","org-dartlang-app:///packages/convert/src/percent.dart","org-dartlang-app:///packages/convert/src/percent/decoder.dart","org-dartlang-app:///packages/convert/src/percent/encoder.dart","org-dartlang-app:///packages/convert/src/identity_codec.dart","org-dartlang-app:///packages/convert/src/hex.dart","org-dartlang-app:///packages/convert/src/accumulator_sink.dart"],"names":[],"mappings":"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","file":"convert.ddc.js"}');
  // Exports:
  return {
    src__hex__decoder: src__hex__decoder,
    src__utils: src__utils,
    src__byte_accumulator_sink: src__byte_accumulator_sink,
    src__hex__encoder: src__hex__encoder,
    convert: convert$,
    src__string_accumulator_sink: src__string_accumulator_sink,
    src__percent: src__percent,
    src__percent__decoder: src__percent__decoder,
    src__percent__encoder: src__percent__encoder,
    src__identity_codec: src__identity_codec,
    src__hex: src__hex,
    src__accumulator_sink: src__accumulator_sink
  };
});

//# sourceMappingURL=convert.ddc.js.map

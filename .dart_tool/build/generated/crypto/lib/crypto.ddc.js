define(['dart_sdk', 'packages/collection/src/comparators', 'packages/convert/convert', 'packages/typed_data/typed_buffers'], function(dart_sdk, comparators, convert, typed_buffers) {
  'use strict';
  const core = dart_sdk.core;
  const convert$ = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__equality = comparators.src__equality;
  const src__hex = convert.src__hex;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const crypto = Object.create(dart.library);
  const src__sha512 = Object.create(dart.library);
  const src__utils = Object.create(dart.library);
  const src__sha512_slowsinks = Object.create(dart.library);
  const src__hash_sink = Object.create(dart.library);
  const src__digest = Object.create(dart.library);
  const src__hash = Object.create(dart.library);
  const src__digest_sink = Object.create(dart.library);
  const src__sha256 = Object.create(dart.library);
  const src__sha1 = Object.create(dart.library);
  const src__md5 = Object.create(dart.library);
  const src__hmac = Object.create(dart.library);
  const $_equals = dartx._equals;
  const $leftShift = dartx['<<'];
  const $rightShift = dartx['>>'];
  const $buffer = dartx.buffer;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $length = dartx.length;
  const $setRange = dartx.setRange;
  const $isEmpty = dartx.isEmpty;
  const $asUint8List = dartx.asUint8List;
  const $lengthInBytes = dartx.lengthInBytes;
  const $asByteData = dartx.asByteData;
  const $setUint32 = dartx.setUint32;
  const $truncate = dartx.truncate;
  const $getUint32 = dartx.getUint32;
  const $removeRange = dartx.removeRange;
  const $asUint32List = dartx.asUint32List;
  const $modulo = dartx['%'];
  let SinkOfDigest = () => (SinkOfDigest = dart.constFn(core.Sink$(src__digest.Digest)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let const$;
  let const$0;
  src__digest.Digest = class Digest extends core.Object {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    _equals(other) {
      if (other == null) return false;
      return src__digest.Digest.is(other) && dart.test((const$ || (const$ = dart.const(new src__equality.ListEquality.new()))).equals(this.bytes, other.bytes));
    }
    get hashCode() {
      return (const$0 || (const$0 = dart.const(new src__equality.ListEquality.new()))).hash(this.bytes);
    }
    toString() {
      return src__hex.hex.encode(this.bytes);
    }
  };
  (src__digest.Digest.new = function(bytes) {
    this[bytes$] = bytes;
    ;
  }).prototype = src__digest.Digest.prototype;
  dart.addTypeTests(src__digest.Digest);
  const bytes$ = Symbol("Digest.bytes");
  dart.setMethodSignature(src__digest.Digest, () => ({
    __proto__: dart.getMethods(src__digest.Digest.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(src__digest.Digest, "package:crypto/src/digest.dart");
  dart.setFieldSignature(src__digest.Digest, () => ({
    __proto__: dart.getFields(src__digest.Digest.__proto__),
    bytes: dart.finalFieldType(core.List$(core.int))
  }));
  dart.defineExtensionMethods(src__digest.Digest, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__digest.Digest, ['hashCode']);
  src__hash.Hash = class Hash extends convert$.Converter$(core.List$(core.int), src__digest.Digest) {
    convert(data) {
      ListOfint()._check(data);
      let innerSink = new src__digest_sink.DigestSink.new();
      let outerSink = this.startChunkedConversion(innerSink);
      outerSink.add(data);
      outerSink.close();
      return innerSink.value;
    }
  };
  (src__hash.Hash.new = function() {
    src__hash.Hash.__proto__.new.call(this);
    ;
  }).prototype = src__hash.Hash.prototype;
  dart.addTypeTests(src__hash.Hash);
  dart.setMethodSignature(src__hash.Hash, () => ({
    __proto__: dart.getMethods(src__hash.Hash.__proto__),
    convert: dart.fnType(src__digest.Digest, [core.Object]),
    startChunkedConversion: dart.fnType(convert$.ByteConversionSink, [core.Object])
  }));
  dart.setLibraryUri(src__hash.Hash, "package:crypto/src/hash.dart");
  src__sha512.Sha384 = class Sha384 extends src__hash.Hash {
    get blockSize() {
      return this[blockSize];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    newInstance() {
      return new src__sha512.Sha384.__();
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return new convert$._ByteAdapterSink.new(new src__sha512_slowsinks.Sha384Sink.new(sink));
    }
  };
  (src__sha512.Sha384.__ = function() {
    this[blockSize] = 32 * dart.notNull(src__utils.bytesPerWord);
    src__sha512.Sha384.__proto__.new.call(this);
    ;
  }).prototype = src__sha512.Sha384.prototype;
  dart.addTypeTests(src__sha512.Sha384);
  const blockSize = Symbol("Sha384.blockSize");
  dart.setMethodSignature(src__sha512.Sha384, () => ({
    __proto__: dart.getMethods(src__sha512.Sha384.__proto__),
    newInstance: dart.fnType(src__sha512.Sha384, []),
    startChunkedConversion: dart.fnType(convert$.ByteConversionSink, [core.Object])
  }));
  dart.setLibraryUri(src__sha512.Sha384, "package:crypto/src/sha512.dart");
  dart.setFieldSignature(src__sha512.Sha384, () => ({
    __proto__: dart.getFields(src__sha512.Sha384.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  src__sha512.Sha512 = class Sha512 extends src__sha512.Sha384 {
    newInstance() {
      return new src__sha512.Sha512.__();
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return new convert$._ByteAdapterSink.new(new src__sha512_slowsinks.Sha512Sink.new(sink));
    }
  };
  (src__sha512.Sha512.__ = function() {
    src__sha512.Sha512.__proto__.__.call(this);
    ;
  }).prototype = src__sha512.Sha512.prototype;
  dart.addTypeTests(src__sha512.Sha512);
  dart.setMethodSignature(src__sha512.Sha512, () => ({
    __proto__: dart.getMethods(src__sha512.Sha512.__proto__),
    newInstance: dart.fnType(src__sha512.Sha512, [])
  }));
  dart.setLibraryUri(src__sha512.Sha512, "package:crypto/src/sha512.dart");
  dart.defineLazy(src__sha512, {
    /*src__sha512.sha384*/get sha384() {
      return new src__sha512.Sha384.__();
    },
    /*src__sha512.sha512*/get sha512() {
      return new src__sha512.Sha512.__();
    }
  });
  src__utils.add32 = function(x, y) {
    return (dart.notNull(x) + dart.notNull(y) & dart.notNull(src__utils.mask32)) >>> 0;
  };
  src__utils.rotl32 = function(val, shift) {
    let modShift = dart.notNull(shift) & 31;
    return (val[$leftShift](modShift) & dart.notNull(src__utils.mask32) | ((dart.notNull(val) & dart.notNull(src__utils.mask32)) >>> 0)[$rightShift](32 - modShift)) >>> 0;
  };
  dart.defineLazy(src__utils, {
    /*src__utils.mask32*/get mask32() {
      return 4294967295;
    },
    /*src__utils.bitsPerByte*/get bitsPerByte() {
      return 8;
    },
    /*src__utils.bytesPerWord*/get bytesPerWord() {
      return 4;
    }
  });
  const _extended = dart.privateName(src__sha512_slowsinks, "_extended");
  const _nums = dart.privateName(src__sha512_slowsinks, "_nums");
  const _digest$ = dart.privateName(src__sha512_slowsinks, "_digest");
  const _shr = dart.privateName(src__sha512_slowsinks, "_shr");
  const _shl = dart.privateName(src__sha512_slowsinks, "_shl");
  const _or = dart.privateName(src__sha512_slowsinks, "_or");
  const _xor = dart.privateName(src__sha512_slowsinks, "_xor");
  const _add = dart.privateName(src__sha512_slowsinks, "_add");
  const _addTo2 = dart.privateName(src__sha512_slowsinks, "_addTo2");
  const _rotr = dart.privateName(src__sha512_slowsinks, "_rotr");
  const _bsig0 = dart.privateName(src__sha512_slowsinks, "_bsig0");
  const _bsig1 = dart.privateName(src__sha512_slowsinks, "_bsig1");
  const _ssig0 = dart.privateName(src__sha512_slowsinks, "_ssig0");
  const _ssig1 = dart.privateName(src__sha512_slowsinks, "_ssig1");
  const _ch = dart.privateName(src__sha512_slowsinks, "_ch");
  const _maj = dart.privateName(src__sha512_slowsinks, "_maj");
  const _lengthInBytes = dart.privateName(src__hash_sink, "_lengthInBytes");
  const _pendingData = dart.privateName(src__hash_sink, "_pendingData");
  const _isClosed = dart.privateName(src__hash_sink, "_isClosed");
  const _sink$ = dart.privateName(src__hash_sink, "_sink");
  const _endian = dart.privateName(src__hash_sink, "_endian");
  const _currentChunk = dart.privateName(src__hash_sink, "_currentChunk");
  const _iterate = dart.privateName(src__hash_sink, "_iterate");
  const _finalizeData = dart.privateName(src__hash_sink, "_finalizeData");
  const _byteDigest = dart.privateName(src__hash_sink, "_byteDigest");
  const _roundUp = dart.privateName(src__hash_sink, "_roundUp");
  src__hash_sink.HashSink = class HashSink extends core.Object {
    add(data) {
      ListOfint()._check(data);
      if (dart.test(this[_isClosed])) dart.throw(new core.StateError.new("Hash.add() called after close()."));
      this[_lengthInBytes] = dart.notNull(this[_lengthInBytes]) + dart.notNull(data[$length]);
      this[_pendingData].addAll(data);
      this[_iterate]();
    }
    close() {
      if (dart.test(this[_isClosed])) return;
      this[_isClosed] = true;
      this[_finalizeData]();
      this[_iterate]();
      if (!dart.test(this[_pendingData][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/crypto/src/hash_sink.dart", 77, 12, "_pendingData.isEmpty");
      this[_sink$].add(new src__digest.Digest.new(this[_byteDigest]()));
      this[_sink$].close();
    }
    [_byteDigest]() {
      if (dart.equals(this[_endian], typed_data.Endian.host)) return this.digest[$buffer][$asUint8List]();
      let byteDigest = _native_typed_data.NativeUint8List.new(this.digest[$lengthInBytes]);
      let byteData = byteDigest[$buffer][$asByteData]();
      for (let i = 0; i < dart.notNull(this.digest[$length]); i = i + 1) {
        byteData[$setUint32](i * dart.notNull(src__utils.bytesPerWord), this.digest[$_get](i));
      }
      return byteDigest;
    }
    [_iterate]() {
      let pendingDataBytes = this[_pendingData].buffer[$asByteData]();
      let pendingDataChunks = (dart.notNull(this[_pendingData].length) / dart.notNull(this[_currentChunk][$lengthInBytes]))[$truncate]();
      for (let i = 0; i < pendingDataChunks; i = i + 1) {
        for (let j = 0; j < dart.notNull(this[_currentChunk][$length]); j = j + 1) {
          this[_currentChunk][$_set](j, pendingDataBytes[$getUint32](i * dart.notNull(this[_currentChunk][$lengthInBytes]) + j * dart.notNull(src__utils.bytesPerWord), this[_endian]));
        }
        this.updateHash(this[_currentChunk]);
      }
      this[_pendingData][$removeRange](0, pendingDataChunks * dart.notNull(this[_currentChunk][$lengthInBytes]));
    }
    [_finalizeData]() {
      this[_pendingData].add(128);
      let contentsLength = dart.notNull(this[_lengthInBytes]) + 9;
      let finalizedLength = this[_roundUp](contentsLength, this[_currentChunk][$lengthInBytes]);
      for (let i = 0; i < dart.notNull(finalizedLength) - contentsLength; i = i + 1) {
        this[_pendingData].add(0);
      }
      if (dart.notNull(this[_lengthInBytes]) > dart.notNull(src__hash_sink.HashSink._maxMessageLengthInBytes)) {
        dart.throw(new core.UnsupportedError.new("Hashing is unsupported for messages with more than 2^53 bits."));
      }
      let lengthInBits = dart.notNull(this[_lengthInBytes]) * dart.notNull(src__utils.bitsPerByte);
      let offset = this[_pendingData].length;
      this[_pendingData].addAll(_native_typed_data.NativeUint8List.new(8));
      let byteData = this[_pendingData].buffer[$asByteData]();
      let highBits = lengthInBits[$rightShift](32);
      let lowBits = (lengthInBits & dart.notNull(src__utils.mask32)) >>> 0;
      if (dart.equals(this[_endian], typed_data.Endian.big)) {
        byteData[$setUint32](offset, highBits, this[_endian]);
        byteData[$setUint32](dart.notNull(offset) + dart.notNull(src__utils.bytesPerWord), lowBits, this[_endian]);
      } else {
        byteData[$setUint32](offset, lowBits, this[_endian]);
        byteData[$setUint32](dart.notNull(offset) + dart.notNull(src__utils.bytesPerWord), highBits, this[_endian]);
      }
    }
    [_roundUp](val, n) {
      return (dart.notNull(val) + dart.notNull(n) - 1 & -dart.notNull(n)) >>> 0;
    }
  };
  (src__hash_sink.HashSink.new = function(_sink, chunkSizeInWords, opts) {
    let endian = opts && 'endian' in opts ? opts.endian : typed_data.Endian.big;
    this[_lengthInBytes] = 0;
    this[_pendingData] = new typed_buffers$.Uint8Buffer.new();
    this[_isClosed] = false;
    this[_sink$] = _sink;
    this[_endian] = endian;
    this[_currentChunk] = _native_typed_data.NativeUint32List.new(chunkSizeInWords);
    ;
  }).prototype = src__hash_sink.HashSink.prototype;
  dart.addTypeTests(src__hash_sink.HashSink);
  src__hash_sink.HashSink[dart.implements] = () => [core.Sink$(core.List$(core.int))];
  dart.setMethodSignature(src__hash_sink.HashSink, () => ({
    __proto__: dart.getMethods(src__hash_sink.HashSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, []),
    [_byteDigest]: dart.fnType(typed_data.Uint8List, []),
    [_iterate]: dart.fnType(dart.void, []),
    [_finalizeData]: dart.fnType(dart.void, []),
    [_roundUp]: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.setLibraryUri(src__hash_sink.HashSink, "package:crypto/src/hash_sink.dart");
  dart.setFieldSignature(src__hash_sink.HashSink, () => ({
    __proto__: dart.getFields(src__hash_sink.HashSink.__proto__),
    [_sink$]: dart.finalFieldType(core.Sink$(src__digest.Digest)),
    [_endian]: dart.finalFieldType(typed_data.Endian),
    [_currentChunk]: dart.finalFieldType(typed_data.Uint32List),
    [_lengthInBytes]: dart.fieldType(core.int),
    [_pendingData]: dart.finalFieldType(typed_buffers$.Uint8Buffer),
    [_isClosed]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__hash_sink.HashSink, {
    /*src__hash_sink.HashSink._maxMessageLengthInBytes*/get _maxMessageLengthInBytes() {
      return 1125899906842623;
    }
  });
  src__sha512_slowsinks._Sha64BitSink = class _Sha64BitSink extends src__hash_sink.HashSink {
    get digest() {
      return typed_data.Uint32List.view(this[_digest$][$buffer], 0, this.digestBytes);
    }
    [_shr](bits, word, offset, ret, offsetR) {
      ret[$_set](0 + dart.notNull(offsetR), dart.notNull(bits) < 32 && dart.notNull(bits) >= 0 ? word[$_get](0 + dart.notNull(offset))[$rightShift](bits) : 0);
      ret[$_set](1 + dart.notNull(offsetR), dart.notNull(bits) > 32 ? word[$_get](0 + dart.notNull(offset))[$rightShift](dart.notNull(bits) - 32) : bits === 32 ? word[$_get](0 + dart.notNull(offset)) : dart.notNull(bits) >= 0 ? (word[$_get](0 + dart.notNull(offset))[$leftShift](32 - dart.notNull(bits)) | word[$_get](1 + dart.notNull(offset))[$rightShift](bits)) >>> 0 : 0);
    }
    [_shl](bits, word, offset, ret, offsetR) {
      ret[$_set](0 + dart.notNull(offsetR), dart.notNull(bits) > 32 ? word[$_get](1 + dart.notNull(offset))[$leftShift](dart.notNull(bits) - 32) : bits === 32 ? word[$_get](1 + dart.notNull(offset)) : dart.notNull(bits) >= 0 ? (word[$_get](0 + dart.notNull(offset))[$leftShift](bits) | word[$_get](1 + dart.notNull(offset))[$rightShift](32 - dart.notNull(bits))) >>> 0 : 0);
      ret[$_set](1 + dart.notNull(offsetR), dart.notNull(bits) < 32 && dart.notNull(bits) >= 0 ? word[$_get](1 + dart.notNull(offset))[$leftShift](bits) : 0);
    }
    [_or](word1, offset1, word2, offset2, ret, offsetR) {
      ret[$_set](0 + dart.notNull(offsetR), (dart.notNull(word1[$_get](0 + dart.notNull(offset1))) | dart.notNull(word2[$_get](0 + dart.notNull(offset2)))) >>> 0);
      ret[$_set](1 + dart.notNull(offsetR), (dart.notNull(word1[$_get](1 + dart.notNull(offset1))) | dart.notNull(word2[$_get](1 + dart.notNull(offset2)))) >>> 0);
    }
    [_xor](word1, offset1, word2, offset2, ret, offsetR) {
      ret[$_set](0 + dart.notNull(offsetR), (dart.notNull(word1[$_get](0 + dart.notNull(offset1))) ^ dart.notNull(word2[$_get](0 + dart.notNull(offset2)))) >>> 0);
      ret[$_set](1 + dart.notNull(offsetR), (dart.notNull(word1[$_get](1 + dart.notNull(offset1))) ^ dart.notNull(word2[$_get](1 + dart.notNull(offset2)))) >>> 0);
    }
    [_add](word1, offset1, word2, offset2, ret, offsetR) {
      ret[$_set](1 + dart.notNull(offsetR), dart.notNull(word1[$_get](1 + dart.notNull(offset1))) + dart.notNull(word2[$_get](1 + dart.notNull(offset2))));
      ret[$_set](0 + dart.notNull(offsetR), dart.notNull(word1[$_get](0 + dart.notNull(offset1))) + dart.notNull(word2[$_get](0 + dart.notNull(offset2))) + (dart.notNull(ret[$_get](1 + dart.notNull(offsetR))) < dart.notNull(word1[$_get](1 + dart.notNull(offset1))) ? 1 : 0));
    }
    [_addTo2](word1, offset1, word2, offset2) {
      let t1, t0, t1$, t0$;
      let _addTemp = null;
      _addTemp = word1[$_get](1 + dart.notNull(offset1));
      t0 = word1;
      t1 = 1 + dart.notNull(offset1);
      t0[$_set](t1, dart.notNull(t0[$_get](t1)) + dart.notNull(word2[$_get](1 + dart.notNull(offset2))));
      t0$ = word1;
      t1$ = 0 + dart.notNull(offset1);
      t0$[$_set](t1$, dart.notNull(t0$[$_get](t1$)) + (dart.notNull(word2[$_get](0 + dart.notNull(offset2))) + (dart.notNull(word1[$_get](1 + dart.notNull(offset1))) < dart.notNull(_addTemp) ? 1 : 0)));
    }
    [_rotr](bits, word, offset, ret, offsetR) {
      this[_shr](bits, word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._rotrIndex1);
      this[_shl](64 - dart.notNull(bits), word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._rotrIndex2);
      this[_or](this[_nums], src__sha512_slowsinks._Sha64BitSink._rotrIndex1, this[_nums], src__sha512_slowsinks._Sha64BitSink._rotrIndex2, ret, offsetR);
    }
    [_bsig0](word, offset, ret, offsetR) {
      this[_rotr](28, word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex1);
      this[_rotr](34, word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex2);
      this[_rotr](39, word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex3);
      this[_xor](this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex2, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex3, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex4);
      this[_xor](this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex1, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex4, ret, offsetR);
    }
    [_bsig1](word, offset, ret, offsetR) {
      this[_rotr](14, word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex1);
      this[_rotr](18, word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex2);
      this[_rotr](41, word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex3);
      this[_xor](this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex2, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex3, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex4);
      this[_xor](this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex1, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex4, ret, offsetR);
    }
    [_ssig0](word, offset, ret, offsetR) {
      this[_rotr](1, word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex1);
      this[_rotr](8, word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex2);
      this[_shr](7, word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex3);
      this[_xor](this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex2, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex3, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex4);
      this[_xor](this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex1, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex4, ret, offsetR);
    }
    [_ssig1](word, offset, ret, offsetR) {
      this[_rotr](19, word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex1);
      this[_rotr](61, word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex2);
      this[_shr](6, word, offset, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex3);
      this[_xor](this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex2, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex3, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex4);
      this[_xor](this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex1, this[_nums], src__sha512_slowsinks._Sha64BitSink._sigIndex4, ret, offsetR);
    }
    [_ch](x, offsetX, y, offsetY, z, offsetZ, ret, offsetR) {
      ret[$_set](0 + dart.notNull(offsetR), (dart.notNull(x[$_get](0 + dart.notNull(offsetX))) & (dart.notNull(y[$_get](0 + dart.notNull(offsetY))) ^ dart.notNull(z[$_get](0 + dart.notNull(offsetZ)))) >>> 0 ^ dart.notNull(z[$_get](0 + dart.notNull(offsetZ)))) >>> 0);
      ret[$_set](1 + dart.notNull(offsetR), (dart.notNull(x[$_get](1 + dart.notNull(offsetX))) & (dart.notNull(y[$_get](1 + dart.notNull(offsetY))) ^ dart.notNull(z[$_get](1 + dart.notNull(offsetZ)))) >>> 0 ^ dart.notNull(z[$_get](1 + dart.notNull(offsetZ)))) >>> 0);
    }
    [_maj](x, offsetX, y, offsetY, z, offsetZ, ret, offsetR) {
      ret[$_set](0 + dart.notNull(offsetR), (dart.notNull(x[$_get](0 + dart.notNull(offsetX))) & (dart.notNull(y[$_get](0 + dart.notNull(offsetY))) | dart.notNull(z[$_get](0 + dart.notNull(offsetZ)))) >>> 0 | (dart.notNull(y[$_get](0 + dart.notNull(offsetY))) & dart.notNull(z[$_get](0 + dart.notNull(offsetZ)))) >>> 0) >>> 0);
      ret[$_set](1 + dart.notNull(offsetR), (dart.notNull(x[$_get](1 + dart.notNull(offsetX))) & (dart.notNull(y[$_get](1 + dart.notNull(offsetY))) | dart.notNull(z[$_get](1 + dart.notNull(offsetZ)))) >>> 0 | (dart.notNull(y[$_get](1 + dart.notNull(offsetY))) & dart.notNull(z[$_get](1 + dart.notNull(offsetZ)))) >>> 0) >>> 0);
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 32)) dart.assertFailed(null, "org-dartlang-app:///packages/crypto/src/sha512_slowsinks.dart", 210, 12, "chunk.length == 32");
      for (let i = 0; i < 32; i = i + 1) {
        this[_extended][$_set](i, chunk[$_get](i));
      }
      for (let i = 32; i < 160; i = i + 2) {
        this[_ssig1](this[_extended], i - 2 * 2, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp1);
        this[_add](this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp1, this[_extended], i - 7 * 2, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp2);
        this[_ssig0](this[_extended], i - 15 * 2, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp1);
        this[_add](this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp1, this[_extended], i - 16 * 2, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp3);
        this[_add](this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp2, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp3, this[_extended], i);
      }
      this[_nums][$setRange](src__sha512_slowsinks._Sha64BitSink._aIndex, dart.notNull(src__sha512_slowsinks._Sha64BitSink._hIndex) + 2, this[_digest$]);
      for (let i = 0; i < 160; i = i + 2) {
        this[_bsig1](this[_nums], src__sha512_slowsinks._Sha64BitSink._eIndex, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp1);
        this[_add](this[_nums], src__sha512_slowsinks._Sha64BitSink._hIndex, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp1, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp2);
        this[_ch](this[_nums], src__sha512_slowsinks._Sha64BitSink._eIndex, this[_nums], src__sha512_slowsinks._Sha64BitSink._fIndex, this[_nums], src__sha512_slowsinks._Sha64BitSink._gIndex, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp3);
        this[_add](this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp2, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp3, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp4);
        this[_add](src__sha512_slowsinks._noise32, i, this[_extended], i, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp5);
        this[_add](this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp4, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp5, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp1);
        this[_bsig0](this[_nums], src__sha512_slowsinks._Sha64BitSink._aIndex, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp3);
        this[_maj](this[_nums], src__sha512_slowsinks._Sha64BitSink._aIndex, this[_nums], src__sha512_slowsinks._Sha64BitSink._bIndex, this[_nums], src__sha512_slowsinks._Sha64BitSink._cIndex, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp4);
        this[_add](this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp3, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp4, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp2);
        this[_nums][$_set](src__sha512_slowsinks._Sha64BitSink._hIndex, this[_nums][$_get](src__sha512_slowsinks._Sha64BitSink._gIndex));
        this[_nums][$_set](dart.notNull(src__sha512_slowsinks._Sha64BitSink._hIndex) + 1, this[_nums][$_get](dart.notNull(src__sha512_slowsinks._Sha64BitSink._gIndex) + 1));
        this[_nums][$_set](src__sha512_slowsinks._Sha64BitSink._gIndex, this[_nums][$_get](src__sha512_slowsinks._Sha64BitSink._fIndex));
        this[_nums][$_set](dart.notNull(src__sha512_slowsinks._Sha64BitSink._gIndex) + 1, this[_nums][$_get](dart.notNull(src__sha512_slowsinks._Sha64BitSink._fIndex) + 1));
        this[_nums][$_set](src__sha512_slowsinks._Sha64BitSink._fIndex, this[_nums][$_get](src__sha512_slowsinks._Sha64BitSink._eIndex));
        this[_nums][$_set](dart.notNull(src__sha512_slowsinks._Sha64BitSink._fIndex) + 1, this[_nums][$_get](dart.notNull(src__sha512_slowsinks._Sha64BitSink._eIndex) + 1));
        this[_add](this[_nums], src__sha512_slowsinks._Sha64BitSink._dIndex, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp1, this[_nums], src__sha512_slowsinks._Sha64BitSink._eIndex);
        this[_nums][$_set](src__sha512_slowsinks._Sha64BitSink._dIndex, this[_nums][$_get](src__sha512_slowsinks._Sha64BitSink._cIndex));
        this[_nums][$_set](dart.notNull(src__sha512_slowsinks._Sha64BitSink._dIndex) + 1, this[_nums][$_get](dart.notNull(src__sha512_slowsinks._Sha64BitSink._cIndex) + 1));
        this[_nums][$_set](src__sha512_slowsinks._Sha64BitSink._cIndex, this[_nums][$_get](src__sha512_slowsinks._Sha64BitSink._bIndex));
        this[_nums][$_set](dart.notNull(src__sha512_slowsinks._Sha64BitSink._cIndex) + 1, this[_nums][$_get](dart.notNull(src__sha512_slowsinks._Sha64BitSink._bIndex) + 1));
        this[_nums][$_set](src__sha512_slowsinks._Sha64BitSink._bIndex, this[_nums][$_get](src__sha512_slowsinks._Sha64BitSink._aIndex));
        this[_nums][$_set](dart.notNull(src__sha512_slowsinks._Sha64BitSink._bIndex) + 1, this[_nums][$_get](dart.notNull(src__sha512_slowsinks._Sha64BitSink._aIndex) + 1));
        this[_add](this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp1, this[_nums], src__sha512_slowsinks._Sha64BitSink._tmp2, this[_nums], src__sha512_slowsinks._Sha64BitSink._aIndex);
      }
      this[_addTo2](this[_digest$], 0, this[_nums], src__sha512_slowsinks._Sha64BitSink._aIndex);
      this[_addTo2](this[_digest$], 2, this[_nums], src__sha512_slowsinks._Sha64BitSink._bIndex);
      this[_addTo2](this[_digest$], 4, this[_nums], src__sha512_slowsinks._Sha64BitSink._cIndex);
      this[_addTo2](this[_digest$], 6, this[_nums], src__sha512_slowsinks._Sha64BitSink._dIndex);
      this[_addTo2](this[_digest$], 8, this[_nums], src__sha512_slowsinks._Sha64BitSink._eIndex);
      this[_addTo2](this[_digest$], 10, this[_nums], src__sha512_slowsinks._Sha64BitSink._fIndex);
      this[_addTo2](this[_digest$], 12, this[_nums], src__sha512_slowsinks._Sha64BitSink._gIndex);
      this[_addTo2](this[_digest$], 14, this[_nums], src__sha512_slowsinks._Sha64BitSink._hIndex);
    }
  };
  (src__sha512_slowsinks._Sha64BitSink.new = function(sink, _digest) {
    this[_extended] = _native_typed_data.NativeUint32List.new(160);
    this[_nums] = _native_typed_data.NativeUint32List.new(12 + 16 + 10);
    this[_digest$] = _digest;
    src__sha512_slowsinks._Sha64BitSink.__proto__.new.call(this, sink, 32);
    ;
  }).prototype = src__sha512_slowsinks._Sha64BitSink.prototype;
  dart.addTypeTests(src__sha512_slowsinks._Sha64BitSink);
  dart.setMethodSignature(src__sha512_slowsinks._Sha64BitSink, () => ({
    __proto__: dart.getMethods(src__sha512_slowsinks._Sha64BitSink.__proto__),
    [_shr]: dart.fnType(dart.dynamic, [core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_shl]: dart.fnType(dart.dynamic, [core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_or]: dart.fnType(dart.dynamic, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_xor]: dart.fnType(dart.dynamic, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_add]: dart.fnType(dart.dynamic, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_addTo2]: dart.fnType(dart.dynamic, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_rotr]: dart.fnType(dart.dynamic, [core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_bsig0]: dart.fnType(dart.dynamic, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_bsig1]: dart.fnType(dart.dynamic, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_ssig0]: dart.fnType(dart.dynamic, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_ssig1]: dart.fnType(dart.dynamic, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_ch]: dart.fnType(dart.dynamic, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_maj]: dart.fnType(dart.dynamic, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setGetterSignature(src__sha512_slowsinks._Sha64BitSink, () => ({
    __proto__: dart.getGetters(src__sha512_slowsinks._Sha64BitSink.__proto__),
    digest: typed_data.Uint32List
  }));
  dart.setLibraryUri(src__sha512_slowsinks._Sha64BitSink, "package:crypto/src/sha512_slowsinks.dart");
  dart.setFieldSignature(src__sha512_slowsinks._Sha64BitSink, () => ({
    __proto__: dart.getFields(src__sha512_slowsinks._Sha64BitSink.__proto__),
    [_digest$]: dart.finalFieldType(typed_data.Uint32List),
    [_extended]: dart.finalFieldType(typed_data.Uint32List),
    [_nums]: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.defineLazy(src__sha512_slowsinks._Sha64BitSink, {
    /*src__sha512_slowsinks._Sha64BitSink._rotrIndex1*/get _rotrIndex1() {
      return 0;
    },
    /*src__sha512_slowsinks._Sha64BitSink._rotrIndex2*/get _rotrIndex2() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._rotrIndex1) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._sigIndex1*/get _sigIndex1() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._rotrIndex2) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._sigIndex2*/get _sigIndex2() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._sigIndex1) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._sigIndex3*/get _sigIndex3() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._sigIndex2) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._sigIndex4*/get _sigIndex4() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._sigIndex3) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._aIndex*/get _aIndex() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._sigIndex4) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._bIndex*/get _bIndex() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._aIndex) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._cIndex*/get _cIndex() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._bIndex) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._dIndex*/get _dIndex() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._cIndex) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._eIndex*/get _eIndex() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._dIndex) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._fIndex*/get _fIndex() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._eIndex) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._gIndex*/get _gIndex() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._fIndex) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._hIndex*/get _hIndex() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._gIndex) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._tmp1*/get _tmp1() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._hIndex) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._tmp2*/get _tmp2() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._tmp1) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._tmp3*/get _tmp3() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._tmp2) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._tmp4*/get _tmp4() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._tmp3) + 2;
    },
    /*src__sha512_slowsinks._Sha64BitSink._tmp5*/get _tmp5() {
      return dart.notNull(src__sha512_slowsinks._Sha64BitSink._tmp4) + 2;
    }
  });
  src__sha512_slowsinks.Sha384Sink = class Sha384Sink extends src__sha512_slowsinks._Sha64BitSink {
    get digestBytes() {
      return this[digestBytes];
    }
    set digestBytes(value) {
      super.digestBytes = value;
    }
  };
  (src__sha512_slowsinks.Sha384Sink.new = function(sink) {
    this[digestBytes] = 12;
    src__sha512_slowsinks.Sha384Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(JSArrayOfint().of([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428])));
    ;
  }).prototype = src__sha512_slowsinks.Sha384Sink.prototype;
  dart.addTypeTests(src__sha512_slowsinks.Sha384Sink);
  const digestBytes = Symbol("Sha384Sink.digestBytes");
  dart.setLibraryUri(src__sha512_slowsinks.Sha384Sink, "package:crypto/src/sha512_slowsinks.dart");
  dart.setFieldSignature(src__sha512_slowsinks.Sha384Sink, () => ({
    __proto__: dart.getFields(src__sha512_slowsinks.Sha384Sink.__proto__),
    digestBytes: dart.finalFieldType(core.int)
  }));
  src__sha512_slowsinks.Sha512Sink = class Sha512Sink extends src__sha512_slowsinks._Sha64BitSink {
    get digestBytes() {
      return this[digestBytes$];
    }
    set digestBytes(value) {
      super.digestBytes = value;
    }
  };
  (src__sha512_slowsinks.Sha512Sink.new = function(sink) {
    this[digestBytes$] = 16;
    src__sha512_slowsinks.Sha512Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(JSArrayOfint().of([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209])));
    ;
  }).prototype = src__sha512_slowsinks.Sha512Sink.prototype;
  dart.addTypeTests(src__sha512_slowsinks.Sha512Sink);
  const digestBytes$ = Symbol("Sha512Sink.digestBytes");
  dart.setLibraryUri(src__sha512_slowsinks.Sha512Sink, "package:crypto/src/sha512_slowsinks.dart");
  dart.setFieldSignature(src__sha512_slowsinks.Sha512Sink, () => ({
    __proto__: dart.getFields(src__sha512_slowsinks.Sha512Sink.__proto__),
    digestBytes: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__sha512_slowsinks, {
    /*src__sha512_slowsinks._noise32*/get _noise32() {
      return _native_typed_data.NativeUint32List.fromList(JSArrayOfint().of([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]));
    }
  });
  const _value = dart.privateName(src__digest_sink, "_value");
  src__digest_sink.DigestSink = class DigestSink extends core.Sink$(src__digest.Digest) {
    get value() {
      if (!(this[_value] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/crypto/src/digest_sink.dart", 11, 12, "_value != null");
      return this[_value];
    }
    add(value) {
      src__digest.Digest._check(value);
      if (!(this[_value] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/crypto/src/digest_sink.dart", 22, 12, "_value == null");
      this[_value] = value;
    }
    close() {
      if (!(this[_value] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/crypto/src/digest_sink.dart", 28, 12, "_value != null");
    }
  };
  (src__digest_sink.DigestSink.new = function() {
    this[_value] = null;
    ;
  }).prototype = src__digest_sink.DigestSink.prototype;
  dart.addTypeTests(src__digest_sink.DigestSink);
  dart.setMethodSignature(src__digest_sink.DigestSink, () => ({
    __proto__: dart.getMethods(src__digest_sink.DigestSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__digest_sink.DigestSink, () => ({
    __proto__: dart.getGetters(src__digest_sink.DigestSink.__proto__),
    value: src__digest.Digest
  }));
  dart.setLibraryUri(src__digest_sink.DigestSink, "package:crypto/src/digest_sink.dart");
  dart.setFieldSignature(src__digest_sink.DigestSink, () => ({
    __proto__: dart.getFields(src__digest_sink.DigestSink.__proto__),
    [_value]: dart.fieldType(src__digest.Digest)
  }));
  src__sha256.Sha256 = class Sha256 extends src__hash.Hash {
    get blockSize() {
      return this[blockSize$];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    newInstance() {
      return new src__sha256.Sha256.__();
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return new convert$._ByteAdapterSink.new(new src__sha256._Sha256Sink.new(sink));
    }
  };
  (src__sha256.Sha256.__ = function() {
    this[blockSize$] = 16 * dart.notNull(src__utils.bytesPerWord);
    src__sha256.Sha256.__proto__.new.call(this);
    ;
  }).prototype = src__sha256.Sha256.prototype;
  dart.addTypeTests(src__sha256.Sha256);
  const blockSize$ = Symbol("Sha256.blockSize");
  dart.setMethodSignature(src__sha256.Sha256, () => ({
    __proto__: dart.getMethods(src__sha256.Sha256.__proto__),
    newInstance: dart.fnType(src__sha256.Sha256, []),
    startChunkedConversion: dart.fnType(convert$.ByteConversionSink, [core.Object])
  }));
  dart.setLibraryUri(src__sha256.Sha256, "package:crypto/src/sha256.dart");
  dart.setFieldSignature(src__sha256.Sha256, () => ({
    __proto__: dart.getFields(src__sha256.Sha256.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  src__sha256.Sha224 = class Sha224 extends src__hash.Hash {
    get blockSize() {
      return this[blockSize$0];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    newInstance() {
      return new src__sha256.Sha224.__();
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return new convert$._ByteAdapterSink.new(new src__sha256._Sha224Sink.new(sink));
    }
  };
  (src__sha256.Sha224.__ = function() {
    this[blockSize$0] = 16 * dart.notNull(src__utils.bytesPerWord);
    src__sha256.Sha224.__proto__.new.call(this);
    ;
  }).prototype = src__sha256.Sha224.prototype;
  dart.addTypeTests(src__sha256.Sha224);
  const blockSize$0 = Symbol("Sha224.blockSize");
  dart.setMethodSignature(src__sha256.Sha224, () => ({
    __proto__: dart.getMethods(src__sha256.Sha224.__proto__),
    newInstance: dart.fnType(src__sha256.Sha224, []),
    startChunkedConversion: dart.fnType(convert$.ByteConversionSink, [core.Object])
  }));
  dart.setLibraryUri(src__sha256.Sha224, "package:crypto/src/sha256.dart");
  dart.setFieldSignature(src__sha256.Sha224, () => ({
    __proto__: dart.getFields(src__sha256.Sha224.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  const _extended$ = dart.privateName(src__sha256, "_extended");
  const _digest$0 = dart.privateName(src__sha256, "_digest");
  const _rotr32 = dart.privateName(src__sha256, "_rotr32");
  const _ch$ = dart.privateName(src__sha256, "_ch");
  const _maj$ = dart.privateName(src__sha256, "_maj");
  const _bsig0$ = dart.privateName(src__sha256, "_bsig0");
  const _bsig1$ = dart.privateName(src__sha256, "_bsig1");
  const _ssig0$ = dart.privateName(src__sha256, "_ssig0");
  const _ssig1$ = dart.privateName(src__sha256, "_ssig1");
  src__sha256._Sha32BitSink = class _Sha32BitSink extends src__hash_sink.HashSink {
    [_rotr32](n, x) {
      return (x[$rightShift](n) | (x[$leftShift](32 - dart.notNull(n)) & dart.notNull(src__utils.mask32)) >>> 0) >>> 0;
    }
    [_ch$](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) ^ (~dart.notNull(x) & dart.notNull(src__utils.mask32) & dart.notNull(z)) >>> 0) >>> 0;
    }
    [_maj$](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) ^ (dart.notNull(x) & dart.notNull(z)) >>> 0 ^ (dart.notNull(y) & dart.notNull(z)) >>> 0) >>> 0;
    }
    [_bsig0$](x) {
      return (dart.notNull(this[_rotr32](2, x)) ^ dart.notNull(this[_rotr32](13, x)) ^ dart.notNull(this[_rotr32](22, x))) >>> 0;
    }
    [_bsig1$](x) {
      return (dart.notNull(this[_rotr32](6, x)) ^ dart.notNull(this[_rotr32](11, x)) ^ dart.notNull(this[_rotr32](25, x))) >>> 0;
    }
    [_ssig0$](x) {
      return (dart.notNull(this[_rotr32](7, x)) ^ dart.notNull(this[_rotr32](18, x)) ^ x[$rightShift](3)) >>> 0;
    }
    [_ssig1$](x) {
      return (dart.notNull(this[_rotr32](17, x)) ^ dart.notNull(this[_rotr32](19, x)) ^ x[$rightShift](10)) >>> 0;
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed(null, "org-dartlang-app:///packages/crypto/src/sha256.dart", 104, 12, "chunk.length == 16");
      for (let i = 0; i < 16; i = i + 1) {
        this[_extended$][$_set](i, chunk[$_get](i));
      }
      for (let i = 16; i < 64; i = i + 1) {
        this[_extended$][$_set](i, src__utils.add32(src__utils.add32(this[_ssig1$](this[_extended$][$_get](i - 2)), this[_extended$][$_get](i - 7)), src__utils.add32(this[_ssig0$](this[_extended$][$_get](i - 15)), this[_extended$][$_get](i - 16))));
      }
      let a = this[_digest$0][$_get](0);
      let b = this[_digest$0][$_get](1);
      let c = this[_digest$0][$_get](2);
      let d = this[_digest$0][$_get](3);
      let e = this[_digest$0][$_get](4);
      let f = this[_digest$0][$_get](5);
      let g = this[_digest$0][$_get](6);
      let h = this[_digest$0][$_get](7);
      for (let i = 0; i < 64; i = i + 1) {
        let temp1 = src__utils.add32(src__utils.add32(h, this[_bsig1$](e)), src__utils.add32(this[_ch$](e, f, g), src__utils.add32(src__sha256._noise[$_get](i), this[_extended$][$_get](i))));
        let temp2 = src__utils.add32(this[_bsig0$](a), this[_maj$](a, b, c));
        h = g;
        g = f;
        f = e;
        e = src__utils.add32(d, temp1);
        d = c;
        c = b;
        b = a;
        a = src__utils.add32(temp1, temp2);
      }
      this[_digest$0][$_set](0, src__utils.add32(a, this[_digest$0][$_get](0)));
      this[_digest$0][$_set](1, src__utils.add32(b, this[_digest$0][$_get](1)));
      this[_digest$0][$_set](2, src__utils.add32(c, this[_digest$0][$_get](2)));
      this[_digest$0][$_set](3, src__utils.add32(d, this[_digest$0][$_get](3)));
      this[_digest$0][$_set](4, src__utils.add32(e, this[_digest$0][$_get](4)));
      this[_digest$0][$_set](5, src__utils.add32(f, this[_digest$0][$_get](5)));
      this[_digest$0][$_set](6, src__utils.add32(g, this[_digest$0][$_get](6)));
      this[_digest$0][$_set](7, src__utils.add32(h, this[_digest$0][$_get](7)));
    }
  };
  (src__sha256._Sha32BitSink.new = function(sink, _digest) {
    this[_extended$] = _native_typed_data.NativeUint32List.new(64);
    this[_digest$0] = _digest;
    src__sha256._Sha32BitSink.__proto__.new.call(this, sink, 16);
    ;
  }).prototype = src__sha256._Sha32BitSink.prototype;
  dart.addTypeTests(src__sha256._Sha32BitSink);
  dart.setMethodSignature(src__sha256._Sha32BitSink, () => ({
    __proto__: dart.getMethods(src__sha256._Sha32BitSink.__proto__),
    [_rotr32]: dart.fnType(core.int, [core.int, core.int]),
    [_ch$]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_maj$]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_bsig0$]: dart.fnType(core.int, [core.int]),
    [_bsig1$]: dart.fnType(core.int, [core.int]),
    [_ssig0$]: dart.fnType(core.int, [core.int]),
    [_ssig1$]: dart.fnType(core.int, [core.int]),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setLibraryUri(src__sha256._Sha32BitSink, "package:crypto/src/sha256.dart");
  dart.setFieldSignature(src__sha256._Sha32BitSink, () => ({
    __proto__: dart.getFields(src__sha256._Sha32BitSink.__proto__),
    [_digest$0]: dart.finalFieldType(typed_data.Uint32List),
    [_extended$]: dart.finalFieldType(typed_data.Uint32List)
  }));
  src__sha256._Sha256Sink = class _Sha256Sink extends src__sha256._Sha32BitSink {
    get digest() {
      return this[_digest$0];
    }
  };
  (src__sha256._Sha256Sink.new = function(sink) {
    src__sha256._Sha256Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(JSArrayOfint().of([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])));
    ;
  }).prototype = src__sha256._Sha256Sink.prototype;
  dart.addTypeTests(src__sha256._Sha256Sink);
  dart.setGetterSignature(src__sha256._Sha256Sink, () => ({
    __proto__: dart.getGetters(src__sha256._Sha256Sink.__proto__),
    digest: typed_data.Uint32List
  }));
  dart.setLibraryUri(src__sha256._Sha256Sink, "package:crypto/src/sha256.dart");
  src__sha256._Sha224Sink = class _Sha224Sink extends src__sha256._Sha32BitSink {
    get digest() {
      return this[_digest$0][$buffer][$asUint32List](0, 7);
    }
  };
  (src__sha256._Sha224Sink.new = function(sink) {
    src__sha256._Sha224Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(JSArrayOfint().of([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])));
    ;
  }).prototype = src__sha256._Sha224Sink.prototype;
  dart.addTypeTests(src__sha256._Sha224Sink);
  dart.setGetterSignature(src__sha256._Sha224Sink, () => ({
    __proto__: dart.getGetters(src__sha256._Sha224Sink.__proto__),
    digest: typed_data.Uint32List
  }));
  dart.setLibraryUri(src__sha256._Sha224Sink, "package:crypto/src/sha256.dart");
  dart.defineLazy(src__sha256, {
    /*src__sha256.sha256*/get sha256() {
      return new src__sha256.Sha256.__();
    },
    /*src__sha256.sha224*/get sha224() {
      return new src__sha256.Sha224.__();
    },
    /*src__sha256._noise*/get _noise() {
      return dart.constList([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], core.int);
    }
  });
  src__sha1.Sha1 = class Sha1 extends src__hash.Hash {
    get blockSize() {
      return this[blockSize$1];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return new convert$._ByteAdapterSink.new(new src__sha1._Sha1Sink.new(sink));
    }
  };
  (src__sha1.Sha1.__ = function() {
    this[blockSize$1] = 16 * dart.notNull(src__utils.bytesPerWord);
    src__sha1.Sha1.__proto__.new.call(this);
    ;
  }).prototype = src__sha1.Sha1.prototype;
  dart.addTypeTests(src__sha1.Sha1);
  const blockSize$1 = Symbol("Sha1.blockSize");
  dart.setMethodSignature(src__sha1.Sha1, () => ({
    __proto__: dart.getMethods(src__sha1.Sha1.__proto__),
    startChunkedConversion: dart.fnType(convert$.ByteConversionSink, [core.Object])
  }));
  dart.setLibraryUri(src__sha1.Sha1, "package:crypto/src/sha1.dart");
  dart.setFieldSignature(src__sha1.Sha1, () => ({
    __proto__: dart.getFields(src__sha1.Sha1.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  const _extended$0 = dart.privateName(src__sha1, "_extended");
  src__sha1._Sha1Sink = class _Sha1Sink extends src__hash_sink.HashSink {
    get digest() {
      return this[digest];
    }
    set digest(value) {
      super.digest = value;
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed(null, "org-dartlang-app:///packages/crypto/src/sha1.dart", 60, 12, "chunk.length == 16");
      let a = this.digest[$_get](0);
      let b = this.digest[$_get](1);
      let c = this.digest[$_get](2);
      let d = this.digest[$_get](3);
      let e = this.digest[$_get](4);
      for (let i = 0; i < 80; i = i + 1) {
        if (i < 16) {
          this[_extended$0][$_set](i, chunk[$_get](i));
        } else {
          this[_extended$0][$_set](i, src__utils.rotl32((dart.notNull(this[_extended$0][$_get](i - 3)) ^ dart.notNull(this[_extended$0][$_get](i - 8)) ^ dart.notNull(this[_extended$0][$_get](i - 14)) ^ dart.notNull(this[_extended$0][$_get](i - 16))) >>> 0, 1));
        }
        let newA = src__utils.add32(src__utils.add32(src__utils.rotl32(a, 5), e), this[_extended$0][$_get](i));
        if (i < 20) {
          newA = src__utils.add32(src__utils.add32(newA, (dart.notNull(b) & dart.notNull(c) | (~dart.notNull(b) & dart.notNull(d)) >>> 0) >>> 0), 1518500249);
        } else if (i < 40) {
          newA = src__utils.add32(src__utils.add32(newA, (dart.notNull(b) ^ dart.notNull(c) ^ dart.notNull(d)) >>> 0), 1859775393);
        } else if (i < 60) {
          newA = src__utils.add32(src__utils.add32(newA, (dart.notNull(b) & dart.notNull(c) | (dart.notNull(b) & dart.notNull(d)) >>> 0 | (dart.notNull(c) & dart.notNull(d)) >>> 0) >>> 0), 2400959708);
        } else {
          newA = src__utils.add32(src__utils.add32(newA, (dart.notNull(b) ^ dart.notNull(c) ^ dart.notNull(d)) >>> 0), 3395469782);
        }
        e = d;
        d = c;
        c = src__utils.rotl32(b, 30);
        b = a;
        a = (dart.notNull(newA) & dart.notNull(src__utils.mask32)) >>> 0;
      }
      this.digest[$_set](0, src__utils.add32(a, this.digest[$_get](0)));
      this.digest[$_set](1, src__utils.add32(b, this.digest[$_get](1)));
      this.digest[$_set](2, src__utils.add32(c, this.digest[$_get](2)));
      this.digest[$_set](3, src__utils.add32(d, this.digest[$_get](3)));
      this.digest[$_set](4, src__utils.add32(e, this.digest[$_get](4)));
    }
  };
  (src__sha1._Sha1Sink.new = function(sink) {
    this[digest] = _native_typed_data.NativeUint32List.new(5);
    this[_extended$0] = _native_typed_data.NativeUint32List.new(80);
    src__sha1._Sha1Sink.__proto__.new.call(this, sink, 16);
    this.digest[$_set](0, 1732584193);
    this.digest[$_set](1, 4023233417);
    this.digest[$_set](2, 2562383102);
    this.digest[$_set](3, 271733878);
    this.digest[$_set](4, 3285377520);
  }).prototype = src__sha1._Sha1Sink.prototype;
  dart.addTypeTests(src__sha1._Sha1Sink);
  const digest = Symbol("_Sha1Sink.digest");
  dart.setMethodSignature(src__sha1._Sha1Sink, () => ({
    __proto__: dart.getMethods(src__sha1._Sha1Sink.__proto__),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setLibraryUri(src__sha1._Sha1Sink, "package:crypto/src/sha1.dart");
  dart.setFieldSignature(src__sha1._Sha1Sink, () => ({
    __proto__: dart.getFields(src__sha1._Sha1Sink.__proto__),
    digest: dart.finalFieldType(typed_data.Uint32List),
    [_extended$0]: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.defineLazy(src__sha1, {
    /*src__sha1.sha1*/get sha1() {
      return new src__sha1.Sha1.__();
    }
  });
  src__md5.MD5 = class MD5 extends src__hash.Hash {
    get blockSize() {
      return this[blockSize$2];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return new convert$._ByteAdapterSink.new(new src__md5._MD5Sink.new(sink));
    }
  };
  (src__md5.MD5.__ = function() {
    this[blockSize$2] = 16 * dart.notNull(src__utils.bytesPerWord);
    src__md5.MD5.__proto__.new.call(this);
    ;
  }).prototype = src__md5.MD5.prototype;
  dart.addTypeTests(src__md5.MD5);
  const blockSize$2 = Symbol("MD5.blockSize");
  dart.setMethodSignature(src__md5.MD5, () => ({
    __proto__: dart.getMethods(src__md5.MD5.__proto__),
    startChunkedConversion: dart.fnType(convert$.ByteConversionSink, [core.Object])
  }));
  dart.setLibraryUri(src__md5.MD5, "package:crypto/src/md5.dart");
  dart.setFieldSignature(src__md5.MD5, () => ({
    __proto__: dart.getFields(src__md5.MD5.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  src__md5._MD5Sink = class _MD5Sink extends src__hash_sink.HashSink {
    get digest() {
      return this[digest$];
    }
    set digest(value) {
      super.digest = value;
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed(null, "org-dartlang-app:///packages/crypto/src/md5.dart", 84, 12, "chunk.length == 16");
      let a = this.digest[$_get](0);
      let b = this.digest[$_get](1);
      let c = this.digest[$_get](2);
      let d = this.digest[$_get](3);
      let e = null;
      let f = null;
      for (let i = 0; i < 64; i = i + 1) {
        if (i < 16) {
          e = (dart.notNull(b) & dart.notNull(c) | (~dart.notNull(b) & dart.notNull(src__utils.mask32) & dart.notNull(d)) >>> 0) >>> 0;
          f = i;
        } else if (i < 32) {
          e = (dart.notNull(d) & dart.notNull(b) | (~dart.notNull(d) & dart.notNull(src__utils.mask32) & dart.notNull(c)) >>> 0) >>> 0;
          f = (5 * i + 1)[$modulo](16);
        } else if (i < 48) {
          e = (dart.notNull(b) ^ dart.notNull(c) ^ dart.notNull(d)) >>> 0;
          f = (3 * i + 5)[$modulo](16);
        } else {
          e = (dart.notNull(c) ^ (dart.notNull(b) | (~dart.notNull(d) & dart.notNull(src__utils.mask32)) >>> 0) >>> 0) >>> 0;
          f = (7 * i)[$modulo](16);
        }
        let temp = d;
        d = c;
        c = b;
        b = src__utils.add32(b, src__utils.rotl32(src__utils.add32(src__utils.add32(a, e), src__utils.add32(src__md5._noise[$_get](i), chunk[$_get](f))), src__md5._shiftAmounts[$_get](i)));
        a = temp;
      }
      this.digest[$_set](0, src__utils.add32(a, this.digest[$_get](0)));
      this.digest[$_set](1, src__utils.add32(b, this.digest[$_get](1)));
      this.digest[$_set](2, src__utils.add32(c, this.digest[$_get](2)));
      this.digest[$_set](3, src__utils.add32(d, this.digest[$_get](3)));
    }
  };
  (src__md5._MD5Sink.new = function(sink) {
    this[digest$] = _native_typed_data.NativeUint32List.new(4);
    src__md5._MD5Sink.__proto__.new.call(this, sink, 16, {endian: typed_data.Endian.little});
    this.digest[$_set](0, 1732584193);
    this.digest[$_set](1, 4023233417);
    this.digest[$_set](2, 2562383102);
    this.digest[$_set](3, 271733878);
  }).prototype = src__md5._MD5Sink.prototype;
  dart.addTypeTests(src__md5._MD5Sink);
  const digest$ = Symbol("_MD5Sink.digest");
  dart.setMethodSignature(src__md5._MD5Sink, () => ({
    __proto__: dart.getMethods(src__md5._MD5Sink.__proto__),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setLibraryUri(src__md5._MD5Sink, "package:crypto/src/md5.dart");
  dart.setFieldSignature(src__md5._MD5Sink, () => ({
    __proto__: dart.getFields(src__md5._MD5Sink.__proto__),
    digest: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.defineLazy(src__md5, {
    /*src__md5.md5*/get md5() {
      return new src__md5.MD5.__();
    },
    /*src__md5._noise*/get _noise() {
      return dart.constList([3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690, 4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745], core.int);
    },
    /*src__md5._shiftAmounts*/get _shiftAmounts() {
      return dart.constList([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21], core.int);
    }
  });
  const _hash = dart.privateName(src__hmac, "_hash");
  const _key = dart.privateName(src__hmac, "_key");
  src__hmac.Hmac = class Hmac extends convert$.Converter$(core.List$(core.int), src__digest.Digest) {
    convert(data) {
      ListOfint()._check(data);
      let innerSink = new src__digest_sink.DigestSink.new();
      let outerSink = this.startChunkedConversion(innerSink);
      outerSink.add(data);
      outerSink.close();
      return innerSink.value;
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return new src__hmac._HmacSink.new(sink, this[_hash], this[_key]);
    }
  };
  (src__hmac.Hmac.new = function(hash, key) {
    this[_hash] = hash;
    this[_key] = _native_typed_data.NativeUint8List.new(hash.blockSize);
    src__hmac.Hmac.__proto__.new.call(this);
    if (dart.notNull(key[$length]) > dart.notNull(this[_hash].blockSize)) key = this[_hash].convert(key).bytes;
    this[_key][$setRange](0, key[$length], key);
  }).prototype = src__hmac.Hmac.prototype;
  dart.addTypeTests(src__hmac.Hmac);
  dart.setMethodSignature(src__hmac.Hmac, () => ({
    __proto__: dart.getMethods(src__hmac.Hmac.__proto__),
    convert: dart.fnType(src__digest.Digest, [core.Object]),
    startChunkedConversion: dart.fnType(convert$.ByteConversionSink, [core.Object])
  }));
  dart.setLibraryUri(src__hmac.Hmac, "package:crypto/src/hmac.dart");
  dart.setFieldSignature(src__hmac.Hmac, () => ({
    __proto__: dart.getFields(src__hmac.Hmac.__proto__),
    [_hash]: dart.finalFieldType(src__hash.Hash),
    [_key]: dart.finalFieldType(typed_data.Uint8List)
  }));
  const _innerResultSink = dart.privateName(src__hmac, "_innerResultSink");
  const _innerSink = dart.privateName(src__hmac, "_innerSink");
  const _isClosed$ = dart.privateName(src__hmac, "_isClosed");
  const _outerSink = dart.privateName(src__hmac, "_outerSink");
  src__hmac._HmacSink = class _HmacSink extends convert$.ByteConversionSink {
    add(data) {
      ListOfint()._check(data);
      if (dart.test(this[_isClosed$])) dart.throw(new core.StateError.new("HMAC is closed"));
      this[_innerSink].add(data);
    }
    addSlice(data, start, end, isLast) {
      if (dart.test(this[_isClosed$])) dart.throw(new core.StateError.new("HMAC is closed"));
      this[_innerSink].addSlice(data, start, end, isLast);
    }
    close() {
      if (dart.test(this[_isClosed$])) return;
      this[_isClosed$] = true;
      this[_innerSink].close();
      this[_outerSink].add(this[_innerResultSink].value.bytes);
      this[_outerSink].close();
    }
  };
  (src__hmac._HmacSink.new = function(sink, hash, key) {
    this[_innerResultSink] = new src__digest_sink.DigestSink.new();
    this[_innerSink] = null;
    this[_isClosed$] = false;
    this[_outerSink] = hash.startChunkedConversion(sink);
    src__hmac._HmacSink.__proto__.new.call(this);
    this[_innerSink] = hash.startChunkedConversion(this[_innerResultSink]);
    let padding = _native_typed_data.NativeUint8List.new(key[$length]);
    for (let i = 0; i < dart.notNull(padding[$length]); i = i + 1) {
      padding[$_set](i, (92 ^ dart.notNull(key[$_get](i))) >>> 0);
    }
    this[_outerSink].add(padding);
    for (let i = 0; i < dart.notNull(padding[$length]); i = i + 1) {
      padding[$_set](i, (54 ^ dart.notNull(key[$_get](i))) >>> 0);
    }
    this[_innerSink].add(padding);
  }).prototype = src__hmac._HmacSink.prototype;
  dart.addTypeTests(src__hmac._HmacSink);
  dart.setMethodSignature(src__hmac._HmacSink, () => ({
    __proto__: dart.getMethods(src__hmac._HmacSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    addSlice: dart.fnType(dart.void, [core.List$(core.int), core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__hmac._HmacSink, "package:crypto/src/hmac.dart");
  dart.setFieldSignature(src__hmac._HmacSink, () => ({
    __proto__: dart.getFields(src__hmac._HmacSink.__proto__),
    [_outerSink]: dart.finalFieldType(convert$.ByteConversionSink),
    [_innerResultSink]: dart.finalFieldType(src__digest_sink.DigestSink),
    [_innerSink]: dart.fieldType(convert$.ByteConversionSink),
    [_isClosed$]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/crypto/crypto", {
    "package:crypto/crypto.dart": crypto,
    "package:crypto/src/sha512.dart": src__sha512,
    "package:crypto/src/utils.dart": src__utils,
    "package:crypto/src/sha512_slowsinks.dart": src__sha512_slowsinks,
    "package:crypto/src/hash_sink.dart": src__hash_sink,
    "package:crypto/src/digest.dart": src__digest,
    "package:crypto/src/hash.dart": src__hash,
    "package:crypto/src/digest_sink.dart": src__digest_sink,
    "package:crypto/src/sha256.dart": src__sha256,
    "package:crypto/src/sha1.dart": src__sha1,
    "package:crypto/src/md5.dart": src__md5,
    "package:crypto/src/hmac.dart": src__hmac
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/crypto/src/digest.dart","org-dartlang-app:///packages/crypto/src/hash.dart","org-dartlang-app:///packages/crypto/src/sha512.dart","org-dartlang-app:///packages/crypto/src/utils.dart","org-dartlang-app:///packages/crypto/src/hash_sink.dart","org-dartlang-app:///packages/crypto/src/sha512_slowsinks.dart","org-dartlang-app:///packages/crypto/src/digest_sink.dart","org-dartlang-app:///packages/crypto/src/sha256.dart","org-dartlang-app:///packages/crypto/src/sha1.dart","org-dartlang-app:///packages/crypto/src/md5.dart","org-dartlang-app:///packages/crypto/src/hmac.dart"],"names":[],"mappings":"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","file":"crypto.ddc.js"}');
  // Exports:
  return {
    crypto: crypto,
    src__sha512: src__sha512,
    src__utils: src__utils,
    src__sha512_slowsinks: src__sha512_slowsinks,
    src__hash_sink: src__hash_sink,
    src__digest: src__digest,
    src__hash: src__hash,
    src__digest_sink: src__digest_sink,
    src__sha256: src__sha256,
    src__sha1: src__sha1,
    src__md5: src__md5,
    src__hmac: src__hmac
  };
});

//# sourceMappingURL=crypto.ddc.js.map

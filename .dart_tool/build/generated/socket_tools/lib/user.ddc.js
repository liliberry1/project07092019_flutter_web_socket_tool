define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const user = Object.create(dart.library);
  user.User = class User extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
  };
  (user.User.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let name = opts && 'name' in opts ? opts.name : null;
    this[id$] = id;
    this[name$] = name;
    ;
  }).prototype = user.User.prototype;
  dart.addTypeTests(user.User);
  const id$ = Symbol("User.id");
  const name$ = Symbol("User.name");
  dart.setLibraryUri(user.User, "package:socket_tools/user.dart");
  dart.setFieldSignature(user.User, () => ({
    __proto__: dart.getFields(user.User.__proto__),
    id: dart.fieldType(core.int),
    name: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/socket_tools/user", {
    "package:socket_tools/user.dart": user
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/socket_tools/user.dart"],"names":[],"mappings":";;;;;;;IAGM;;;;;;IACG;;;;;;;;QACI;QAAS;IAAT;IAAS;;EAAM","file":"user.ddc.js"}');
  // Exports:
  return {
    user: user
  };
});

//# sourceMappingURL=user.ddc.js.map

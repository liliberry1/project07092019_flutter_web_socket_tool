define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material'], function(dart_sdk, animation, material) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__material__flat_button = material.src__material__flat_button;
  const text_button = Object.create(dart.library);
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  text_button.TextButton = class TextButton extends src__widgets__framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      this[text$] = value;
    }
    get onClick() {
      return this[onClick$];
    }
    set onClick(value) {
      this[onClick$] = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({child: new src__material__flat_button.FlatButton.new({onPressed: this.onClick, child: new src__widgets__text.Text.new(this.text, {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 16, file: "org-dartlang-app:///packages/socket_tools/text_button.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 21, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 14, file: "org-dartlang-app:///packages/socket_tools/text_button.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 9, name: "onPressed"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 12, file: "org-dartlang-app:///packages/socket_tools/text_button.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (text_button.TextButton.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let onClick = opts && 'onClick' in opts ? opts.onClick : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[onClick$] = onClick;
    text_button.TextButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_button.TextButton.prototype;
  dart.addTypeTests(text_button.TextButton);
  const text$ = Symbol("TextButton.text");
  const onClick$ = Symbol("TextButton.onClick");
  dart.setMethodSignature(text_button.TextButton, () => ({
    __proto__: dart.getMethods(text_button.TextButton.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(text_button.TextButton, "package:socket_tools/text_button.dart");
  dart.setFieldSignature(text_button.TextButton, () => ({
    __proto__: dart.getFields(text_button.TextButton.__proto__),
    text: dart.fieldType(core.String),
    onClick: dart.fieldType(dart.fnType(dart.void, []))
  }));
  dart.trackLibraries("packages/socket_tools/text_button", {
    "package:socket_tools/text_button.dart": text_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/socket_tools/text_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;IAGS;;;;;;IACM;;;;;;UAKa;AACxB,YAAO,mDACE,0DACM,qBACJ,gCAAK;IAGlB;;;QAViB;QAAW;;IAAX;IAAW;AAA5B;;EAAqC","file":"text_button.ddc.js"}');
  // Exports:
  return {
    text_button: text_button
  };
});

//# sourceMappingURL=text_button.ddc.js.map

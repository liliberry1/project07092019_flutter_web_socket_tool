define(['dart_sdk', 'packages/flutter_web/animation', 'packages/socket_tools/user', 'packages/flutter_web_ui/ui', 'packages/flutter_web/material', 'packages/socket_tools/text_button', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, user, ui, material, text_button, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__text = animation.src__widgets__text;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const user$ = user.user;
  const ui$ = ui.ui;
  const src__material__scaffold = material.src__material__scaffold;
  const text_button$ = text_button.text_button;
  const src__painting__alignment = animation$.src__painting__alignment;
  const user_item = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  user_item.UserItem = class UserItem extends src__widgets__framework.StatefulWidget {
    get user() {
      return this[user$0];
    }
    set user(value) {
      this[user$0] = value;
    }
    createState() {
      return new user_item._UserItemState.new();
    }
  };
  (user_item.UserItem.new = function(user, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[user$0] = user;
    user_item.UserItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = user_item.UserItem.prototype;
  dart.addTypeTests(user_item.UserItem);
  const user$0 = Symbol("UserItem.user");
  dart.setMethodSignature(user_item.UserItem, () => ({
    __proto__: dart.getMethods(user_item.UserItem.__proto__),
    createState: dart.fnType(user_item._UserItemState, [])
  }));
  dart.setLibraryUri(user_item.UserItem, "package:socket_tools/user_item.dart");
  dart.setFieldSignature(user_item.UserItem, () => ({
    __proto__: dart.getFields(user_item.UserItem.__proto__),
    user: dart.fieldType(user$.User)
  }));
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
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  let const$81;
  let const$82;
  let const$83;
  let const$84;
  let const$85;
  user_item._UserItemState = class _UserItemState extends src__widgets__framework.State$(user_item.UserItem) {
    randomColor() {
      let random = math.Random.new();
      return new ui$.Color.fromARGB(100, random.nextInt(255), random.nextInt(255), random.nextInt(255));
    }
    build(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      return new src__material__scaffold.Scaffold.new({body: new src__widgets__container.Container.new({color: this.randomColor(), height: dart.notNull(size.height) / 2, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({flex: 1, child: new src__widgets__container.Container.new({height: dart.notNull(size.height) / 2, child: new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new text_button$.TextButton.new({text: "CONNECT", onClick: dart.fn(() => {
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 23, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 25, name: "text"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 25, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "ONLINE", onClick: dart.fn(() => {
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 23, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 25, name: "text"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 25, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "GET ROOMS", onClick: dart.fn(() => {
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 23, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 25, name: "text"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 25, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "JOIN ROOM", onClick: dart.fn(() => {
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 23, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 25, name: "text"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 25, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "OUT ROOM", onClick: dart.fn(() => {
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 23, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 25, name: "text"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 25, name: "onClick"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 26, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 21, name: "mainAxisAlignment"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 24, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 22, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 17, name: "height"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 13, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$32 || (const$32 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 15, name: "flex"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 4, child: new src__widgets__container.Container.new({height: dart.notNull(size.height) / 2, child: new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new src__widgets__container.Container.new({child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({child: new src__widgets__text.Text.new(this.widget.user.name, {$creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 38, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 55, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 29, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$38 || (const$38 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 31, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({child: new src__widgets__text.Text.new("User ID: " + dart.str(this.widget.user.id), {$creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 38, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 71, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 29, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$44 || (const$44 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 31, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 25, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$48 || (const$48 = dart.constList([const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 27, name: "mainAxisAlignment"}))), const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 27, name: "children"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.all(12.0), alignment: src__painting__alignment.Alignment.topLeft, child: new src__widgets__text.Text.new("This is log", {$creationLocationd_0dea112b090073317d4: const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 34, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$51 || (const$51 = dart.constList([const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 39, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 25, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$56 || (const$56 = dart.constList([const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 27, name: "margin"}))), const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 27, name: "alignment"}))), const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 28, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$59 || (const$59 = dart.constList([const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 23, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 26, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$62 || (const$62 = dart.constList([const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 24, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$65 || (const$65 = dart.constList([const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 22, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$69 || (const$69 = dart.constList([const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 17, name: "height"}))), const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 13, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$73 || (const$73 = dart.constList([const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 15, name: "flex"}))), const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 16, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$76 || (const$76 = dart.constList([const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 13, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$81 || (const$81 = dart.constList([const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 9, name: "color"}))), const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 9, name: "height"}))), const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 12, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$84 || (const$84 = dart.constList([const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (user_item._UserItemState.new = function() {
    user_item._UserItemState.__proto__.new.call(this);
    ;
  }).prototype = user_item._UserItemState.prototype;
  dart.addTypeTests(user_item._UserItemState);
  dart.setMethodSignature(user_item._UserItemState, () => ({
    __proto__: dart.getMethods(user_item._UserItemState.__proto__),
    randomColor: dart.fnType(ui$.Color, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(user_item._UserItemState, "package:socket_tools/user_item.dart");
  dart.trackLibraries("packages/socket_tools/user_item", {
    "package:socket_tools/user_item.dart": user_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/socket_tools/user_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAQO;;;;;;;AAK2B;IAAgB;;qCAHlC;;;AAAd;;EAAmB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQV,mBAAS;AAChB,YAAa,wBACT,KAAK,AAAO,MAAD,SAAS,MAAM,AAAO,MAAD,SAAS,MAAM,AAAO,MAAD,SAAS;IACpE;UAG0B;AACnB,iBAAkB,AAAY,wCAAT,OAAO;AACjC,YAAO,iDACC,kDACG,4BACa,aAAZ,AAAK,IAAD,WAAU,UACf,2CACa,sBAChB,4CACQ,UACC,mDACe,aAAZ,AAAK,IAAD,WAAU,UACf,6EACE,uDACgC,wDACnB,sBAChB,uCACQ,oBACG;mmBAEX,uCACQ,mBACG;qmBAEX,uCACQ,sBACG;umBAEX,uCACQ,sBACG;6mBAEX,uCACQ,qBACG;gwFAOrB,4CACQ,UACC,mDACe,aAAZ,AAAK,IAAD,WAAU,UACf,6EACE,kDACE,8CACa,sBAChB,oDACuC,8DACnB,sBAChB,kDACS,gCAAK,AAAO,AAAK,25BAE1B,kDACS,gCAAK,AAA4B,uBAAhB,AAAO,AAAK,2+CAI1C,mDACqB,8CAAI,kBACF,mDACd,gCAAK;IAYpC;;;;;EACF","file":"user_item.ddc.js"}');
  // Exports:
  return {
    user_item: user_item
  };
});

//# sourceMappingURL=user_item.ddc.js.map

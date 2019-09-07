define(['dart_sdk', 'packages/flutter_web/animation', 'packages/socket_tools/user', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/socket_tools/user_item'], function(dart_sdk, animation, user, material, animation$, user_item) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__basic = animation.src__widgets__basic;
  const user$ = user.user;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__colors = material.src__material__colors;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__alignment = animation$.src__painting__alignment;
  const user_item$ = user_item.user_item;
  const socket_page = Object.create(dart.library);
  const $_get = dartx._get;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  socket_page.SocketPage = class SocketPage extends src__widgets__framework.StatefulWidget {
    get socketAddress() {
      return this[socketAddress$];
    }
    set socketAddress(value) {
      super.socketAddress = value;
    }
    get users() {
      return this[users$];
    }
    set users(value) {
      super.users = value;
    }
    createState() {
      return new socket_page._SocketPageState.new();
    }
  };
  (socket_page.SocketPage.new = function(opts) {
    let socketAddress = opts && 'socketAddress' in opts ? opts.socketAddress : null;
    let users = opts && 'users' in opts ? opts.users : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[socketAddress$] = socketAddress;
    this[users$] = users;
    socket_page.SocketPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = socket_page.SocketPage.prototype;
  dart.addTypeTests(socket_page.SocketPage);
  const socketAddress$ = Symbol("SocketPage.socketAddress");
  const users$ = Symbol("SocketPage.users");
  dart.setMethodSignature(socket_page.SocketPage, () => ({
    __proto__: dart.getMethods(socket_page.SocketPage.__proto__),
    createState: dart.fnType(socket_page._SocketPageState, [])
  }));
  dart.setLibraryUri(socket_page.SocketPage, "package:socket_tools/socket_page.dart");
  dart.setFieldSignature(socket_page.SocketPage, () => ({
    __proto__: dart.getFields(socket_page.SocketPage.__proto__),
    socketAddress: dart.finalFieldType(core.String),
    users: dart.finalFieldType(core.List$(user$.User))
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
  socket_page._SocketPageState = class _SocketPageState extends src__widgets__framework.State$(socket_page.SocketPage) {
    initState() {
      super.initState();
    }
    build(context) {
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new("Da Lat Co Work", {style: new src__painting__text_style.TextStyle.new({fontSize: 26.0, color: src__material__colors.Colors.white}), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 18, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 13, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 13, name: "style"})))], src__widgets__widget_inspector._Location))})))}), centerTitle: true, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 17, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 11, name: "title"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 11, name: "centerTitle"})))], src__widgets__widget_inspector._Location))})))}), body: new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.center, child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({flex: 1, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({flex: 1, child: new user_item$.UserItem.new(this.widget.users[$_get](0), {$creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 47, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 68, name: "user"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 23, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 32, name: "flex"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 40, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 1, child: new user_item$.UserItem.new(this.widget.users[$_get](1), {$creationLocationd_0dea112b090073317d4: const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 47, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$15 || (const$15 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 68, name: "user"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 23, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 32, name: "flex"}))), const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 40, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 26, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 17, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$26 || (const$26 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 19, name: "flex"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 1, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({flex: 1, child: new user_item$.UserItem.new(this.widget.users[$_get](2), {$creationLocationd_0dea112b090073317d4: const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 47, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$29 || (const$29 = dart.constList([const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 68, name: "user"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 23, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$33 || (const$33 = dart.constList([const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 32, name: "flex"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 40, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 1, child: new user_item$.UserItem.new(this.widget.users[$_get](3), {$creationLocationd_0dea112b090073317d4: const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 47, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$36 || (const$36 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 68, name: "user"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 23, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$40 || (const$40 = dart.constList([const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 32, name: "flex"}))), const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 40, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 26, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$43 || (const$43 = dart.constList([const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 17, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 19, name: "flex"}))), const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 20, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$50 || (const$50 = dart.constList([const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 15, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$54 || (const$54 = dart.constList([const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 13, name: "alignment"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 12, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$58 || (const$58 = dart.constList([const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 9, name: "appBar"}))), const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 9, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (socket_page._SocketPageState.new = function() {
    socket_page._SocketPageState.__proto__.new.call(this);
    ;
  }).prototype = socket_page._SocketPageState.prototype;
  dart.addTypeTests(socket_page._SocketPageState);
  dart.setMethodSignature(socket_page._SocketPageState, () => ({
    __proto__: dart.getMethods(socket_page._SocketPageState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(socket_page._SocketPageState, "package:socket_tools/socket_page.dart");
  dart.trackLibraries("packages/socket_tools/socket_page", {
    "package:socket_tools/socket_page.dart": socket_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/socket_tools/socket_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;IAOe;;;;;;IACI;;;;;;;AAMf,YAAO;IACT;;;QALiB;QAAoB;;IAApB;IAAoB;AAArC;;EAA4C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAWpC;IACR;UAG0B;AACxB,YAAO,mDACK,8CACC,gCACL,0BACO,uDAAoB,aAAkB,0mBAElC,4kBAET,sDACmB,kDACd,8CACa,sBAChB,4CACQ,UACC,2CACa,sBAChB,4CAAe,UAAS,4BAAS,AAAO,AAAK,yBAAC,mgCAC9C,4CAAe,UAAS,4BAAS,AAAO,AAAK,yBAAC,mhEAIpD,4CACQ,UACC,2CACa,sBAChB,4CAAe,UAAS,4BAAS,AAAO,AAAK,yBAAC,ygCAC9C,4CAAe,UAAS,4BAAS,AAAO,AAAK,yBAAC;IAMlE;;;;;EACF","file":"socket_page.ddc.js"}');
  // Exports:
  return {
    socket_page: socket_page
  };
});

//# sourceMappingURL=socket_page.ddc.js.map

define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/socket_tools/socket_page', 'packages/socket_tools/user'], function(dart_sdk, animation, material, animation$, ui, socket_page, user) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__editable_text = animation.src__widgets__editable_text;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__services__text_input = animation.src__services__text_input;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__colors = material.src__material__colors;
  const src__material__text_field = material.src__material__text_field;
  const src__material__input_decorator = material.src__material__input_decorator;
  const src__material__input_border = material.src__material__input_border;
  const src__material__flat_button = material.src__material__flat_button;
  const src__material__page = material.src__material__page;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const ui$ = ui.ui;
  const socket_page$ = socket_page.socket_page;
  const user$ = user.user;
  const home_page = Object.create(dart.library);
  const $substring = dartx.substring;
  const $trim = dartx.trim;
  const $_get = dartx._get;
  const $add = dartx.add;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfUser = () => (ListOfUser = dart.constFn(core.List$(user$.User)))();
  let BuildContextToSocketPage = () => (BuildContextToSocketPage = dart.constFn(dart.fnType(socket_page$.SocketPage, [src__widgets__framework.BuildContext])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfUser = () => (JSArrayOfUser = dart.constFn(_interceptors.JSArray$(user$.User)))();
  home_page.HomePage = class HomePage extends src__widgets__framework.StatefulWidget {
    createState() {
      return new home_page._HomePageState.new();
    }
  };
  (home_page.HomePage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home_page.HomePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_page.HomePage.prototype;
  dart.addTypeTests(home_page.HomePage);
  dart.setMethodSignature(home_page.HomePage, () => ({
    __proto__: dart.getMethods(home_page.HomePage.__proto__),
    createState: dart.fnType(home_page._HomePageState, [])
  }));
  dart.setLibraryUri(home_page.HomePage, "package:socket_tools/home_page.dart");
  dart.defineLazy(home_page.HomePage, {
    /*home_page.HomePage.SERVER_ADDRESS*/get SERVER_ADDRESS() {
      return null;
    },
    set SERVER_ADDRESS(_) {}
  });
  const _isInvalidText = dart.privateName(home_page, "_isInvalidText");
  const _isInvalidNumber = dart.privateName(home_page, "_isInvalidNumber");
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
  let const$86;
  let const$87;
  let const$88;
  let const$89;
  let const$90;
  let const$91;
  let const$92;
  let const$93;
  let const$94;
  let const$95;
  let const$96;
  let const$97;
  let const$98;
  let const$99;
  let const$100;
  let const$101;
  home_page._HomePageState = class _HomePageState extends src__widgets__framework.State$(home_page.HomePage) {
    build(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new("Da Lat Co Work", {style: new src__painting__text_style.TextStyle.new({fontSize: 26.0, color: src__material__colors.Colors.white}), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 16, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 11, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 11, name: "style"})))], src__widgets__widget_inspector._Location))})))}), centerTitle: true, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 15, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 9, name: "title"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 9, name: "centerTitle"})))], src__widgets__widget_inspector._Location))})))}), body: new src__widgets__container.Container.new({child: new src__widgets__basic.Center.new({child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("Socket Tool", {style: new src__painting__text_style.TextStyle.new({fontSize: 32.0, color: src__material__colors.Colors.black}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 15, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 17, name: "data"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 17, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.only({top: 32.0}), width: dart.notNull(size.width) / 2, child: new src__material__text_field.TextField.new({controller: this.socketController, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "Web socket address", errorText: !dart.test(this[_isInvalidText]) ? "WebSocket addredd must start with ws://" : null, border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 24, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 19, name: "controller"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 19, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 15, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 17, name: "margin"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 17, name: "width"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({child: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 32.0}), width: dart.notNull(size.width) / 8, child: new src__material__text_field.TextField.new({keyboardType: src__services__text_input.TextInputType.number, controller: this.userId1, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "User ID 1", border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 30, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 25, name: "keyboardType"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 25, name: "controller"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 25, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 21, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 23, name: "margin"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 23, name: "width"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 32.0}), width: dart.notNull(size.width) / 8, child: new src__material__text_field.TextField.new({keyboardType: src__services__text_input.TextInputType.number, controller: this.userId2, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "User ID 2", border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 30, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$33 || (const$33 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 25, name: "keyboardType"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 25, name: "controller"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 25, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 21, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$38 || (const$38 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 23, name: "margin"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 23, name: "width"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 32.0}), width: dart.notNull(size.width) / 8, child: new src__material__text_field.TextField.new({keyboardType: src__services__text_input.TextInputType.number, controller: this.userId3, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "User ID 3", border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 30, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$43 || (const$43 = dart.constList([const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 25, name: "keyboardType"}))), const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 25, name: "controller"}))), const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 25, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 21, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$48 || (const$48 = dart.constList([const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 23, name: "margin"}))), const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 23, name: "width"}))), const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 32.0}), width: dart.notNull(size.width) / 8, child: new src__material__text_field.TextField.new({keyboardType: src__services__text_input.TextInputType.number, controller: this.userId4, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "User ID 4", border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 30, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$53 || (const$53 = dart.constList([const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 25, name: "keyboardType"}))), const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 109, column: 25, name: "controller"}))), const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 25, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 21, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$58 || (const$58 = dart.constList([const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 23, name: "margin"}))), const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 23, name: "width"}))), const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 24, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$62 || (const$62 = dart.constList([const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 19, name: "mainAxisAlignment"}))), const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 19, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 15, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$65 || (const$65 = dart.constList([const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 12.0, horizontal: 16.0}), child: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 12.0, horizontal: 16.0}), decoration: new src__painting__box_decoration.BoxDecoration.new({color: src__material__colors.Colors.black, borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))}), child: new src__material__flat_button.FlatButton.new({onPressed: dart.fn(() => {
                        this.checkInvalid(this.socketController.text);
                      }, VoidToNull()), child: new src__widgets__text.Text.new("Get Started", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontSize: 32.0}), $creationLocationd_0dea112b090073317d4: const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 132, column: 28, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$69 || (const$69 = dart.constList([const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 133, column: 23, name: "data"}))), const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 134, column: 23, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 26, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$73 || (const$73 = dart.constList([const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 21, name: "onPressed"}))), const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 132, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 24, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$78 || (const$78 = dart.constList([const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 124, column: 19, name: "padding"}))), const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 19, name: "decoration"}))), const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 121, column: 15, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$82 || (const$82 = dart.constList([const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 17, name: "padding"}))), const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$87 || (const$87 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 18, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$86 || (const$86 = dart.constList([const$84 || (const$84 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 13, name: "mainAxisAlignment"}))), const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$90 || (const$90 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 16, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$89 || (const$89 = dart.constList([const$88 || (const$88 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 13, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$92 || (const$92 = dart.constList([const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 12, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$96 || (const$96 = dart.constList([const$94 || (const$94 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 7, name: "appBar"}))), const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
    invalidSocketAddress(socketAddress) {
      let prefix = socketAddress[$substring](0, 5);
      return this.socketPrefix === prefix;
    }
    checkMaxUser(numberOfUser) {
      return dart.notNull(numberOfUser) <= 4;
    }
    checkInvalid(socketAddress) {
      this.setState(dart.fn(() => {
        this[_isInvalidText] = this.invalidSocketAddress(socketAddress);
      }, VoidToNull()));
      if (dart.test(this[_isInvalidNumber]) && dart.test(this[_isInvalidText])) {
        home_page.HomePage.SERVER_ADDRESS = socketAddress;
        src__widgets__navigator.Navigator.push(dart.dynamic, this.context, new src__material__page.MaterialPageRoute.new({builder: dart.fn(context => new socket_page$.SocketPage.new({socketAddress: socketAddress, users: ListOfUser()._check(this.createListUser()), $creationLocationd_0dea112b090073317d4: const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 165, column: 37, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$100 || (const$100 = dart.constList([const$98 || (const$98 = dart.const(new src__widgets__widget_inspector._Location.new({line: 166, column: 21, name: "socketAddress"}))), const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 167, column: 21, name: "users"})))], src__widgets__widget_inspector._Location))})))}), BuildContextToSocketPage())}));
      }
    }
    createListUser() {
      try {
        let id1 = core.int.parse(this.userId1.text[$trim]());
        let id2 = core.int.parse(this.userId2.text[$trim]());
        let id3 = core.int.parse(this.userId3.text[$trim]());
        let id4 = core.int.parse(this.userId4.text[$trim]());
        let ids = JSArrayOfint().of([id1, id2, id3, id4]);
        let user = JSArrayOfUser().of([]);
        for (let i = 0; i < 4; i = i + 1) {
          user[$add](new user$.User.new({id: ids[$_get](i), name: "Machine " + dart.str(i)}));
        }
        return user;
      } catch (e$) {
        let e = dart.getThrown(e$);
      }
    }
  };
  (home_page._HomePageState.new = function() {
    this.socketController = new src__widgets__editable_text.TextEditingController.new();
    this.numberUserController = new src__widgets__editable_text.TextEditingController.new();
    this.userId1 = new src__widgets__editable_text.TextEditingController.new();
    this.userId2 = new src__widgets__editable_text.TextEditingController.new();
    this.userId3 = new src__widgets__editable_text.TextEditingController.new();
    this.userId4 = new src__widgets__editable_text.TextEditingController.new();
    this.socketPrefix = "ws://";
    this[_isInvalidText] = true;
    this[_isInvalidNumber] = true;
    home_page._HomePageState.__proto__.new.call(this);
    ;
  }).prototype = home_page._HomePageState.prototype;
  dart.addTypeTests(home_page._HomePageState);
  dart.setMethodSignature(home_page._HomePageState, () => ({
    __proto__: dart.getMethods(home_page._HomePageState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    invalidSocketAddress: dart.fnType(core.bool, [core.String]),
    checkMaxUser: dart.fnType(core.bool, [core.int]),
    checkInvalid: dart.fnType(dart.dynamic, [core.String]),
    createListUser: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(home_page._HomePageState, "package:socket_tools/home_page.dart");
  dart.setFieldSignature(home_page._HomePageState, () => ({
    __proto__: dart.getFields(home_page._HomePageState.__proto__),
    socketController: dart.fieldType(src__widgets__editable_text.TextEditingController),
    numberUserController: dart.fieldType(src__widgets__editable_text.TextEditingController),
    userId1: dart.fieldType(src__widgets__editable_text.TextEditingController),
    userId2: dart.fieldType(src__widgets__editable_text.TextEditingController),
    userId3: dart.fieldType(src__widgets__editable_text.TextEditingController),
    userId4: dart.fieldType(src__widgets__editable_text.TextEditingController),
    socketPrefix: dart.finalFieldType(core.String),
    [_isInvalidText]: dart.fieldType(core.bool),
    [_isInvalidNumber]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/socket_tools/home_page", {
    "package:socket_tools/home_page.dart": home_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/socket_tools/home_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AASkC;IAAgB;;;;;;EAClD;;;;;;;;MAHgB,iCAAc;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAiBF;AACnB,iBAAkB,AAAY,wCAAT,OAAO;AACjC,YAAO,mDACG,8CACC,gCACL,0BACO,uDAAoB,aAAkB,wmBAElC,wkBAET,kDACG,2CACE,uDACgC,yDACnB,sBAChB,gCACE,uBACO,uDAAoB,aAAkB,+lBAE/C,mDACqB,qDAAU,eACX,aAAX,AAAK,IAAD,UAAS,UACb,yDACO,mCACA,kEACE,iCACC,WAAC,wBACN,4CACA,cACE,sEACuB,kDAAW,wBAAS,qxCAG3D,kDACS,oDACgC,8DACnB,sBAChB,mDACqB,+DAAoB,eACrB,aAAX,AAAK,IAAD,UAAS,UACb,2DACuB,4DAChB,0BACA,kEACA,qBACF,sEAEa,kDAAW,wBAAS,05CAI/C,mDACqB,+DAAoB,eACrB,aAAX,AAAK,IAAD,UAAS,UACb,2DACuB,4DAChB,0BACA,kEACA,qBACF,sEAEa,kDAAW,wBAAS,05CAI/C,mDACqB,+DAAoB,eACrB,aAAX,AAAK,IAAD,UAAS,UACb,2DACuB,4DAChB,0BACA,kEACA,qBACF,sEAEa,kDAAW,wBAAS,05CAI/C,mDACqB,+DAAoB,eACrB,aAAX,AAAK,IAAD,UAAS,UACb,2DACuB,4DAChB,0BACA,kEACA,qBACF,sEAEa,kDAAW,wBAAS,q7EAOrD,oDACsB,+DAAoB,kBAAgB,eACjD,oDACe,+DAAoB,kBAAgB,oBAC5C,4DACM,kDACa,kDAAW,wBAAS,iBAC5C,0DACM;wBACT,kBAAa,AAAiB;+CAEzB,gCACL,uBACO,oDAAwB,8CAAiB;IAUpE;yBAEiC;AACxB,mBAAS,AAAc,aAAD,aAAW,GAAG;AAC3C,YAAO,AAAa,uBAAG,MAAM;IAC/B;iBAEsB;AACpB,YAAoB,cAAb,YAAY,KAAI;IACzB;iBAEoB;MAClB,cAAS;QACP,uBAAiB,0BAAqB,aAAa;;AAGrD,oBAAI,qCAAoB;QACb,oCAAiB,aAAa;QAC7B,qDACN,cACA,wDACa,QAAC,WAAY,gDACD,aAAa,6BACrB;;IAGzB;;;AAIQ,kBAAU,eAAM,AAAQ,AAAK;AAC7B,kBAAU,eAAM,AAAQ,AAAK;AAC7B,kBAAU,eAAM,AAAQ,AAAK;AAC7B,kBAAU,eAAM,AAAQ,AAAK;AACvB,kBAAM,mBAAC,GAAG,EAAE,GAAG,EAAE,GAAG,EAAE,GAAG;AAExB,mBAAO;AAClB,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;UACtB,AAAK,IAAD,OAAK,wBAAS,AAAG,GAAA,QAAC,CAAC,SAAS,AAAY,sBAAF,CAAC;;AAE7C,cAAO,KAAI;;YACJ;;IACX;;;IA5KsB,wBAAmB;IACnB,4BAAuB;IACvB,eAAU;IACV,eAAU;IACV,eAAU;IACV,eAAU;IACnB,oBAAe;IACvB,uBAAiB;IACjB,yBAAmB;;;EAqK1B","file":"home_page.ddc.js"}');
  // Exports:
  return {
    home_page: home_page
  };
});

//# sourceMappingURL=home_page.ddc.js.map

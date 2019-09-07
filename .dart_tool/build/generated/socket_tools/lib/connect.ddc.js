define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/socket_tools/user', 'packages/socket_tools/text_button', 'packages/flutter_web/src/foundation/assertions', 'packages/web_socket_channel/html'], function(dart_sdk, animation, material, animation$, ui, user, text_button, assertions, html) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__editable_text = animation.src__widgets__editable_text;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__services__text_input = animation.src__services__text_input;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__widgets__image = animation.src__widgets__image;
  const src__painting__box_border = animation.src__painting__box_border;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__colors = material.src__material__colors;
  const src__material__text_form_field = material.src__material__text_form_field;
  const src__material__input_decorator = material.src__material__input_decorator;
  const src__material__input_border = material.src__material__input_border;
  const src__material__flat_button = material.src__material__flat_button;
  const src__material__text_field = material.src__material__text_field;
  const src__material__page = material.src__material__page;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const ui$ = ui.ui;
  const user$ = user.user;
  const text_button$ = text_button.text_button;
  const src__foundation__observer_list = assertions.src__foundation__observer_list;
  const html$ = html.html;
  const home_page = Object.create(dart.library);
  const socket_page = Object.create(dart.library);
  const user_item = Object.create(dart.library);
  const connect = Object.create(dart.library);
  const websocket = Object.create(dart.library);
  const $substring = dartx.substring;
  const $trim = dartx.trim;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let ListOfUser = () => (ListOfUser = dart.constFn(core.List$(user$.User)))();
  let BuildContextToSocketPage = () => (BuildContextToSocketPage = dart.constFn(dart.fnType(socket_page.SocketPage, [src__widgets__framework.BuildContext])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfUser = () => (JSArrayOfUser = dart.constFn(_interceptors.JSArray$(user$.User)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ObserverListOfFunction = () => (ObserverListOfFunction = dart.constFn(src__foundation__observer_list.ObserverList$(core.Function)))();
  let FunctionToNull = () => (FunctionToNull = dart.constFn(dart.fnType(core.Null, [core.Function])))();
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
  let const$102;
  let const$103;
  let const$104;
  let const$105;
  let const$106;
  let const$107;
  let const$108;
  let const$109;
  let const$110;
  let const$111;
  let const$112;
  let const$113;
  let const$114;
  let const$115;
  let const$116;
  let const$117;
  let const$118;
  let const$119;
  let const$120;
  let const$121;
  let const$122;
  let const$123;
  let const$124;
  let const$125;
  let const$126;
  let const$127;
  let const$128;
  let const$129;
  let const$130;
  let const$131;
  let const$132;
  let const$133;
  let const$134;
  let const$135;
  let const$136;
  let const$137;
  let const$138;
  let const$139;
  let const$140;
  let const$141;
  let const$142;
  let const$143;
  let const$144;
  let const$145;
  let const$146;
  let const$147;
  let const$148;
  let const$149;
  let const$150;
  let const$151;
  let const$152;
  let const$153;
  home_page._HomePageState = class _HomePageState extends src__widgets__framework.State$(home_page.HomePage) {
    build(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      this.socketController.text = "ws://egame-ws.herokuapp.com/sockets";
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new("Da Lat Co Work", {style: new src__painting__text_style.TextStyle.new({fontSize: 26.0, color: src__material__colors.Colors.white}), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 16, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 11, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 11, name: "style"})))], src__widgets__widget_inspector._Location))})))}), centerTitle: true, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 15, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 9, name: "title"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 9, name: "centerTitle"})))], src__widgets__widget_inspector._Location))})))}), body: new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.center, height: size.height, child: new src__widgets__basic.Center.new({child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("Socket Tools", {style: new src__painting__text_style.TextStyle.new({fontSize: 32.0, color: src__material__colors.Colors.black}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 17, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 19, name: "data"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.only({top: 32.0}), width: dart.notNull(size.width) / 2, child: new src__material__text_form_field.TextFormField.new({controller: this.socketController, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "Web socket address", errorText: !dart.test(this[_isInvalidText]) ? "WebSocket addredd must start with ws://" : null, border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 26, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 21, name: "controller"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 21, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 17, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 19, name: "margin"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 19, name: "width"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), this.buildFiled(context), new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 12.0, horizontal: 16.0}), child: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 12.0, horizontal: 16.0}), decoration: new src__painting__box_decoration.BoxDecoration.new({color: src__material__colors.Colors.black, borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))}), child: new src__material__flat_button.FlatButton.new({onPressed: dart.fn(() => {
                          this.checkInvalid(this.socketController.text);
                        }, VoidToNull()), child: new src__widgets__text.Text.new("Get Started", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontSize: 32.0}), $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 30, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 25, name: "data"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 25, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 28, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$26 || (const$26 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 23, name: "onPressed"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 26, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 21, name: "padding"}))), const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 21, name: "decoration"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 17, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 19, name: "padding"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 20, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 15, name: "mainAxisAlignment"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 18, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$42 || (const$42 = dart.constList([const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 16, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 11, name: "alignment"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 11, name: "height"}))), const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 13, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$50 || (const$50 = dart.constList([const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 12, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$54 || (const$54 = dart.constList([const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 7, name: "appBar"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
    buildFiled(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      if (dart.notNull(size.width) <= 800) {
        return this.buildSmallFiledID(context);
      } else {
        return this.buildBigFiledID(context);
      }
    }
    buildBigFiledID(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      return new src__widgets__container.Container.new({child: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 32.0}), width: dart.notNull(size.width) / 8, child: new src__material__text_field.TextField.new({keyboardType: src__services__text_input.TextInputType.number, controller: this.userId1, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "User ID 1", border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 20, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$59 || (const$59 = dart.constList([const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 15, name: "keyboardType"}))), const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 15, name: "controller"}))), const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 109, column: 15, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 11, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$64 || (const$64 = dart.constList([const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 13, name: "margin"}))), const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 13, name: "width"}))), const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 32.0}), width: dart.notNull(size.width) / 8, child: new src__material__text_field.TextField.new({keyboardType: src__services__text_input.TextInputType.number, controller: this.userId2, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "User ID 2", border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 119, column: 20, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$69 || (const$69 = dart.constList([const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 120, column: 15, name: "keyboardType"}))), const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 121, column: 15, name: "controller"}))), const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 15, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 11, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$74 || (const$74 = dart.constList([const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 13, name: "margin"}))), const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 118, column: 13, name: "width"}))), const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 119, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 32.0}), width: dart.notNull(size.width) / 8, child: new src__material__text_field.TextField.new({keyboardType: src__services__text_input.TextInputType.number, controller: this.userId3, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "User ID 3", border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 132, column: 20, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$79 || (const$79 = dart.constList([const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 133, column: 15, name: "keyboardType"}))), const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 134, column: 15, name: "controller"}))), const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 15, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 11, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$84 || (const$84 = dart.constList([const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 130, column: 13, name: "margin"}))), const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 13, name: "width"}))), const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 132, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 32.0}), width: dart.notNull(size.width) / 8, child: new src__material__text_field.TextField.new({keyboardType: src__services__text_input.TextInputType.number, controller: this.userId4, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "User ID 4", border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$90 || (const$90 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 20, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$89 || (const$89 = dart.constList([const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 146, column: 15, name: "keyboardType"}))), const$87 || (const$87 = dart.const(new src__widgets__widget_inspector._Location.new({line: 147, column: 15, name: "controller"}))), const$88 || (const$88 = dart.const(new src__widgets__widget_inspector._Location.new({line: 148, column: 15, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 142, column: 11, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$94 || (const$94 = dart.constList([const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 13, name: "margin"}))), const$92 || (const$92 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 13, name: "width"}))), const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 14, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$98 || (const$98 = dart.constList([const$96 || (const$96 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 9, name: "mainAxisAlignment"}))), const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$102 || (const$102 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 12, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$101 || (const$101 = dart.constList([const$100 || (const$100 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    buildSmallFiledID(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      return new src__widgets__container.Container.new({child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 12.0}), width: dart.notNull(size.width) / 2, child: new src__material__text_field.TextField.new({keyboardType: src__services__text_input.TextInputType.number, controller: this.userId1, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "User ID 1", border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 169, column: 20, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$106 || (const$106 = dart.constList([const$103 || (const$103 = dart.const(new src__widgets__widget_inspector._Location.new({line: 170, column: 15, name: "keyboardType"}))), const$104 || (const$104 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 15, name: "controller"}))), const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 172, column: 15, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$112 || (const$112 = dart.const(new src__widgets__widget_inspector._Location.new({line: 166, column: 11, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$111 || (const$111 = dart.constList([const$108 || (const$108 = dart.const(new src__widgets__widget_inspector._Location.new({line: 167, column: 13, name: "margin"}))), const$109 || (const$109 = dart.const(new src__widgets__widget_inspector._Location.new({line: 168, column: 13, name: "width"}))), const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 169, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 12.0}), width: dart.notNull(size.width) / 2, child: new src__material__text_field.TextField.new({keyboardType: src__services__text_input.TextInputType.number, controller: this.userId2, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "User ID 2", border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$117 || (const$117 = dart.const(new src__widgets__widget_inspector._Location.new({line: 182, column: 20, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$116 || (const$116 = dart.constList([const$113 || (const$113 = dart.const(new src__widgets__widget_inspector._Location.new({line: 183, column: 15, name: "keyboardType"}))), const$114 || (const$114 = dart.const(new src__widgets__widget_inspector._Location.new({line: 184, column: 15, name: "controller"}))), const$115 || (const$115 = dart.const(new src__widgets__widget_inspector._Location.new({line: 185, column: 15, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$122 || (const$122 = dart.const(new src__widgets__widget_inspector._Location.new({line: 179, column: 11, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$121 || (const$121 = dart.constList([const$118 || (const$118 = dart.const(new src__widgets__widget_inspector._Location.new({line: 180, column: 13, name: "margin"}))), const$119 || (const$119 = dart.const(new src__widgets__widget_inspector._Location.new({line: 181, column: 13, name: "width"}))), const$120 || (const$120 = dart.const(new src__widgets__widget_inspector._Location.new({line: 182, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 12.0}), width: dart.notNull(size.width) / 2, child: new src__material__text_field.TextField.new({keyboardType: src__services__text_input.TextInputType.number, controller: this.userId3, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "User ID 3", border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$127 || (const$127 = dart.const(new src__widgets__widget_inspector._Location.new({line: 195, column: 20, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$126 || (const$126 = dart.constList([const$123 || (const$123 = dart.const(new src__widgets__widget_inspector._Location.new({line: 196, column: 15, name: "keyboardType"}))), const$124 || (const$124 = dart.const(new src__widgets__widget_inspector._Location.new({line: 197, column: 15, name: "controller"}))), const$125 || (const$125 = dart.const(new src__widgets__widget_inspector._Location.new({line: 198, column: 15, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$132 || (const$132 = dart.const(new src__widgets__widget_inspector._Location.new({line: 192, column: 11, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$131 || (const$131 = dart.constList([const$128 || (const$128 = dart.const(new src__widgets__widget_inspector._Location.new({line: 193, column: 13, name: "margin"}))), const$129 || (const$129 = dart.const(new src__widgets__widget_inspector._Location.new({line: 194, column: 13, name: "width"}))), const$130 || (const$130 = dart.const(new src__widgets__widget_inspector._Location.new({line: 195, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 12.0}), width: dart.notNull(size.width) / 2, child: new src__material__text_field.TextField.new({keyboardType: src__services__text_input.TextInputType.number, controller: this.userId4, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "User ID 4", border: new src__material__input_border.OutlineInputBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(45.0))})}), $creationLocationd_0dea112b090073317d4: const$137 || (const$137 = dart.const(new src__widgets__widget_inspector._Location.new({line: 208, column: 20, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$136 || (const$136 = dart.constList([const$133 || (const$133 = dart.const(new src__widgets__widget_inspector._Location.new({line: 209, column: 15, name: "keyboardType"}))), const$134 || (const$134 = dart.const(new src__widgets__widget_inspector._Location.new({line: 210, column: 15, name: "controller"}))), const$135 || (const$135 = dart.const(new src__widgets__widget_inspector._Location.new({line: 211, column: 15, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$142 || (const$142 = dart.const(new src__widgets__widget_inspector._Location.new({line: 205, column: 11, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$141 || (const$141 = dart.constList([const$138 || (const$138 = dart.const(new src__widgets__widget_inspector._Location.new({line: 206, column: 13, name: "margin"}))), const$139 || (const$139 = dart.const(new src__widgets__widget_inspector._Location.new({line: 207, column: 13, name: "width"}))), const$140 || (const$140 = dart.const(new src__widgets__widget_inspector._Location.new({line: 208, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$146 || (const$146 = dart.const(new src__widgets__widget_inspector._Location.new({line: 163, column: 14, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$145 || (const$145 = dart.constList([const$143 || (const$143 = dart.const(new src__widgets__widget_inspector._Location.new({line: 164, column: 9, name: "mainAxisAlignment"}))), const$144 || (const$144 = dart.const(new src__widgets__widget_inspector._Location.new({line: 165, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$149 || (const$149 = dart.const(new src__widgets__widget_inspector._Location.new({line: 162, column: 12, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$148 || (const$148 = dart.constList([const$147 || (const$147 = dart.const(new src__widgets__widget_inspector._Location.new({line: 163, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
        src__widgets__navigator.Navigator.push(dart.dynamic, this.context, new src__material__page.MaterialPageRoute.new({builder: dart.fn(context => new socket_page.SocketPage.new({socketAddress: socketAddress, users: ListOfUser()._check(this.createListUser()), $creationLocationd_0dea112b090073317d4: const$153 || (const$153 = dart.const(new src__widgets__widget_inspector._Location.new({line: 242, column: 37, file: "org-dartlang-app:///packages/socket_tools/home_page.dart", parameterLocations: const$152 || (const$152 = dart.constList([const$150 || (const$150 = dart.const(new src__widgets__widget_inspector._Location.new({line: 243, column: 21, name: "socketAddress"}))), const$151 || (const$151 = dart.const(new src__widgets__widget_inspector._Location.new({line: 244, column: 21, name: "users"})))], src__widgets__widget_inspector._Location))})))}), BuildContextToSocketPage())}));
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
    buildFiled: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    buildBigFiledID: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    buildSmallFiledID: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
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
  let const$154;
  let const$155;
  let const$156;
  let const$157;
  let const$158;
  let const$159;
  let const$160;
  let const$161;
  let const$162;
  let const$163;
  let const$164;
  let const$165;
  let const$166;
  let const$167;
  let const$168;
  let const$169;
  let const$170;
  let const$171;
  let const$172;
  let const$173;
  let const$174;
  let const$175;
  let const$176;
  let const$177;
  let const$178;
  let const$179;
  let const$180;
  let const$181;
  let const$182;
  let const$183;
  let const$184;
  let const$185;
  let const$186;
  let const$187;
  let const$188;
  let const$189;
  let const$190;
  let const$191;
  let const$192;
  let const$193;
  let const$194;
  let const$195;
  let const$196;
  let const$197;
  let const$198;
  let const$199;
  let const$200;
  let const$201;
  let const$202;
  let const$203;
  let const$204;
  let const$205;
  let const$206;
  let const$207;
  let const$208;
  let const$209;
  let const$210;
  let const$211;
  let const$212;
  let const$213;
  let const$214;
  let const$215;
  let const$216;
  let const$217;
  let const$218;
  let const$219;
  let const$220;
  let const$221;
  let const$222;
  let const$223;
  let const$224;
  let const$225;
  let const$226;
  let const$227;
  let const$228;
  let const$229;
  let const$230;
  let const$231;
  let const$232;
  let const$233;
  let const$234;
  let const$235;
  let const$236;
  let const$237;
  let const$238;
  let const$239;
  let const$240;
  let const$241;
  let const$242;
  let const$243;
  let const$244;
  let const$245;
  let const$246;
  let const$247;
  let const$248;
  let const$249;
  let const$250;
  let const$251;
  let const$252;
  let const$253;
  let const$254;
  let const$255;
  let const$256;
  let const$257;
  let const$258;
  let const$259;
  let const$260;
  let const$261;
  socket_page._SocketPageState = class _SocketPageState extends src__widgets__framework.State$(socket_page.SocketPage) {
    initState() {
      super.initState();
    }
    build(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new("Da Lat Co Work", {style: new src__painting__text_style.TextStyle.new({fontSize: 26.0, color: src__material__colors.Colors.white}), $creationLocationd_0dea112b090073317d4: const$157 || (const$157 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 18, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$156 || (const$156 = dart.constList([const$154 || (const$154 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 13, name: "data"}))), const$155 || (const$155 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 13, name: "style"})))], src__widgets__widget_inspector._Location))})))}), leading: new src__material__flat_button.FlatButton.new({child: new src__widgets__image.Image.network("https://image.flaticon.com/icons/svg/271/271218.svg", {$creationLocationd_0dea112b090073317d4: const$160 || (const$160 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 26, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$159 || (const$159 = dart.constList([const$158 || (const$158 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 17, name: "src"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
              src__widgets__navigator.Navigator.pop(core.Object, context);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$164 || (const$164 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 20, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$163 || (const$163 = dart.constList([const$161 || (const$161 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 13, name: "child"}))), const$162 || (const$162 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 13, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), centerTitle: true, $creationLocationd_0dea112b090073317d4: const$169 || (const$169 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 17, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$168 || (const$168 = dart.constList([const$165 || (const$165 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 11, name: "title"}))), const$166 || (const$166 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 11, name: "leading"}))), const$167 || (const$167 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 11, name: "centerTitle"})))], src__widgets__widget_inspector._Location))})))}), body: this.buildBody(context, size), $creationLocationd_0dea112b090073317d4: const$173 || (const$173 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 12, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$172 || (const$172 = dart.constList([const$170 || (const$170 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 9, name: "appBar"}))), const$171 || (const$171 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 9, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
    buildBody(context, size) {
      return new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: dart.notNull(size.width) <= 800 ? this.buildSmallPage(context) : this.buildBigPage(context), $creationLocationd_0dea112b090073317d4: const$176 || (const$176 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 12, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$175 || (const$175 = dart.constList([const$174 || (const$174 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    buildBigPage(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      return new src__widgets__container.Container.new({height: size.height, alignment: src__painting__alignment.Alignment.center, child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({flex: 1, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({flex: 1, child: new user_item.UserItem.new(this.widget.users[$_get](0), {$creationLocationd_0dea112b090073317d4: const$179 || (const$179 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 44, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$178 || (const$178 = dart.constList([const$177 || (const$177 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 65, name: "user"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$183 || (const$183 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 19, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$182 || (const$182 = dart.constList([const$180 || (const$180 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 28, name: "flex"}))), const$181 || (const$181 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 37, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 1, child: new user_item.UserItem.new(this.widget.users[$_get](1), {$creationLocationd_0dea112b090073317d4: const$186 || (const$186 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 44, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$185 || (const$185 = dart.constList([const$184 || (const$184 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 65, name: "user"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$190 || (const$190 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 19, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$189 || (const$189 = dart.constList([const$187 || (const$187 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 28, name: "flex"}))), const$188 || (const$188 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 37, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$193 || (const$193 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 22, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$192 || (const$192 = dart.constList([const$191 || (const$191 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$197 || (const$197 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 13, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$196 || (const$196 = dart.constList([const$194 || (const$194 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 15, name: "flex"}))), const$195 || (const$195 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 1, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({flex: 1, child: new user_item.UserItem.new(this.widget.users[$_get](2), {$creationLocationd_0dea112b090073317d4: const$200 || (const$200 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 44, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$199 || (const$199 = dart.constList([const$198 || (const$198 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 65, name: "user"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$204 || (const$204 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 19, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$203 || (const$203 = dart.constList([const$201 || (const$201 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 28, name: "flex"}))), const$202 || (const$202 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 37, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 1, child: new user_item.UserItem.new(this.widget.users[$_get](3), {$creationLocationd_0dea112b090073317d4: const$207 || (const$207 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 44, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$206 || (const$206 = dart.constList([const$205 || (const$205 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 65, name: "user"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$211 || (const$211 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 19, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$210 || (const$210 = dart.constList([const$208 || (const$208 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 28, name: "flex"}))), const$209 || (const$209 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 37, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$214 || (const$214 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 22, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$213 || (const$213 = dart.constList([const$212 || (const$212 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$218 || (const$218 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 13, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$217 || (const$217 = dart.constList([const$215 || (const$215 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 15, name: "flex"}))), const$216 || (const$216 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$221 || (const$221 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 16, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$220 || (const$220 = dart.constList([const$219 || (const$219 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$226 || (const$226 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 12, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$225 || (const$225 = dart.constList([const$222 || (const$222 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 7, name: "height"}))), const$223 || (const$223 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 9, name: "alignment"}))), const$224 || (const$224 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    buildSmallPage(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      return new src__widgets__container.Container.new({height: size.height, child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({flex: 1, child: new user_item.UserItem.new(this.widget.users[$_get](0), {$creationLocationd_0dea112b090073317d4: const$229 || (const$229 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 36, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$228 || (const$228 = dart.constList([const$227 || (const$227 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 57, name: "user"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$233 || (const$233 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 11, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$232 || (const$232 = dart.constList([const$230 || (const$230 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 20, name: "flex"}))), const$231 || (const$231 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 1, child: new user_item.UserItem.new(this.widget.users[$_get](1), {$creationLocationd_0dea112b090073317d4: const$236 || (const$236 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 36, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$235 || (const$235 = dart.constList([const$234 || (const$234 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 57, name: "user"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$240 || (const$240 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 11, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$239 || (const$239 = dart.constList([const$237 || (const$237 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 20, name: "flex"}))), const$238 || (const$238 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 1, child: new user_item.UserItem.new(this.widget.users[$_get](2), {$creationLocationd_0dea112b090073317d4: const$243 || (const$243 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 36, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$242 || (const$242 = dart.constList([const$241 || (const$241 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 57, name: "user"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$247 || (const$247 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 11, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$246 || (const$246 = dart.constList([const$244 || (const$244 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 20, name: "flex"}))), const$245 || (const$245 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 1, child: new user_item.UserItem.new(this.widget.users[$_get](3), {$creationLocationd_0dea112b090073317d4: const$250 || (const$250 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 36, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$249 || (const$249 = dart.constList([const$248 || (const$248 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 57, name: "user"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$254 || (const$254 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 11, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$253 || (const$253 = dart.constList([const$251 || (const$251 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 20, name: "flex"}))), const$252 || (const$252 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$257 || (const$257 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 14, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$256 || (const$256 = dart.constList([const$255 || (const$255 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$261 || (const$261 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 12, file: "org-dartlang-app:///packages/socket_tools/socket_page.dart", parameterLocations: const$260 || (const$260 = dart.constList([const$258 || (const$258 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 7, name: "height"}))), const$259 || (const$259 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (socket_page._SocketPageState.new = function() {
    socket_page._SocketPageState.__proto__.new.call(this);
    ;
  }).prototype = socket_page._SocketPageState.prototype;
  dart.addTypeTests(socket_page._SocketPageState);
  dart.setMethodSignature(socket_page._SocketPageState, () => ({
    __proto__: dart.getMethods(socket_page._SocketPageState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    buildBody: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, ui$.Size]),
    buildBigPage: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    buildSmallPage: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(socket_page._SocketPageState, "package:socket_tools/socket_page.dart");
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
  let const$262;
  let const$263;
  let const$264;
  let const$265;
  let const$266;
  let const$267;
  let const$268;
  let const$269;
  let const$270;
  let const$271;
  let const$272;
  let const$273;
  let const$274;
  let const$275;
  let const$276;
  let const$277;
  let const$278;
  let const$279;
  let const$280;
  let const$281;
  let const$282;
  let const$283;
  let const$284;
  let const$285;
  let const$286;
  let const$287;
  let const$288;
  let const$289;
  let const$290;
  let const$291;
  let const$292;
  let const$293;
  let const$294;
  let const$295;
  let const$296;
  let const$297;
  let const$298;
  let const$299;
  let const$300;
  let const$301;
  let const$302;
  let const$303;
  let const$304;
  let const$305;
  let const$306;
  let const$307;
  let const$308;
  let const$309;
  let const$310;
  let const$311;
  let const$312;
  let const$313;
  let const$314;
  let const$315;
  let const$316;
  let const$317;
  let const$318;
  let const$319;
  let const$320;
  let const$321;
  let const$322;
  let const$323;
  let const$324;
  let const$325;
  let const$326;
  let const$327;
  let const$328;
  let const$329;
  let const$330;
  let const$331;
  let const$332;
  let const$333;
  let const$334;
  let const$335;
  let const$336;
  let const$337;
  let const$338;
  let const$339;
  let const$340;
  let const$341;
  let const$342;
  let const$343;
  let const$344;
  let const$345;
  let const$346;
  let const$347;
  let const$348;
  let const$349;
  let const$350;
  let const$351;
  let const$352;
  let const$353;
  let const$354;
  let const$355;
  let const$356;
  let const$357;
  let const$358;
  let const$359;
  let const$360;
  let const$361;
  let const$362;
  let const$363;
  let const$364;
  let const$365;
  let const$366;
  let const$367;
  let const$368;
  let const$369;
  let const$370;
  let const$371;
  let const$372;
  let const$373;
  let const$374;
  let const$375;
  let const$376;
  let const$377;
  let const$378;
  let const$379;
  let const$380;
  let const$381;
  let const$382;
  let const$383;
  let const$384;
  let const$385;
  let const$386;
  let const$387;
  let const$388;
  let const$389;
  let const$390;
  let const$391;
  let const$392;
  let const$393;
  let const$394;
  let const$395;
  let const$396;
  let const$397;
  let const$398;
  let const$399;
  let const$400;
  let const$401;
  let const$402;
  let const$403;
  let const$404;
  let const$405;
  let const$406;
  let const$407;
  let const$408;
  let const$409;
  let const$410;
  let const$411;
  let const$412;
  let const$413;
  let const$414;
  let const$415;
  let const$416;
  let const$417;
  let const$418;
  let const$419;
  let const$420;
  let const$421;
  let const$422;
  let const$423;
  let const$424;
  let const$425;
  let const$426;
  let const$427;
  let const$428;
  let const$429;
  let const$430;
  let const$431;
  let const$432;
  let const$433;
  let const$434;
  let const$435;
  let const$436;
  let const$437;
  let const$438;
  let const$439;
  let const$440;
  let const$441;
  let const$442;
  let const$443;
  let const$444;
  let const$445;
  let const$446;
  let const$447;
  let const$448;
  let const$449;
  let const$450;
  let const$451;
  let const$452;
  let const$453;
  let const$454;
  let const$455;
  let const$456;
  let const$457;
  let const$458;
  let const$459;
  let const$460;
  let const$461;
  let const$462;
  let const$463;
  let const$464;
  let const$465;
  let const$466;
  let const$467;
  let const$468;
  let const$469;
  let const$470;
  let const$471;
  let const$472;
  let const$473;
  let const$474;
  let const$475;
  let const$476;
  let const$477;
  let const$478;
  let const$479;
  let const$480;
  let const$481;
  let const$482;
  let const$483;
  let const$484;
  let const$485;
  let const$486;
  let const$487;
  user_item._UserItemState = class _UserItemState extends src__widgets__framework.State$(user_item.UserItem) {
    randomColor() {
      let random = math.Random.new();
      return new ui$.Color.fromARGB(100, random.nextInt(255), random.nextInt(255), random.nextInt(255));
    }
    addCallBack() {
      this.connect.addCallbackType(dart.fn(json => {
        this.setState(dart.fn(() => {
          this.log = dart.notNull(this.log) + ("\n\n " + dart.str(json));
        }, VoidToNull()));
      }, dynamicToNull()));
    }
    initState() {
      this.addCallBack();
      super.initState();
    }
    build(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      return new src__material__scaffold.Scaffold.new({body: this.buildBody(context, size), $creationLocationd_0dea112b090073317d4: const$264 || (const$264 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 12, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$263 || (const$263 = dart.constList([const$262 || (const$262 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
    buildBody(context, size) {
      if (dart.notNull(size.width) < 800) {
        return this.buildSmallPage(context);
      } else {
        return this.buildBigPage(context);
      }
    }
    buildBigPage(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      return new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.center, height: dart.notNull(size.height) / 2, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({flex: 1, child: new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.center, decoration: new src__painting__box_decoration.BoxDecoration.new({border: src__painting__box_border.Border.all({color: src__material__colors.Colors.grey, width: 1.0})}), height: dart.notNull(size.height) / 2, child: new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new text_button$.TextButton.new({text: "CLEAR", onClick: dart.fn(() => {
                          this.setState(dart.fn(() => {
                            this.log = "";
                          }, VoidToNull()));
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$268 || (const$268 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$267 || (const$267 = dart.constList([const$265 || (const$265 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 23, name: "text"}))), const$266 || (const$266 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "ONLINE", onClick: dart.fn(() => {
                          this.connect.online(this.widget.user.id, this.widget.user.name, "avatarUrl");
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$272 || (const$272 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$271 || (const$271 = dart.constList([const$269 || (const$269 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 23, name: "text"}))), const$270 || (const$270 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "CREATE ROOM", onClick: dart.fn(() => {
                          this.connect.createRoom();
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$276 || (const$276 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$275 || (const$275 = dart.constList([const$273 || (const$273 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 23, name: "text"}))), const$274 || (const$274 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "GET ROOMS", onClick: dart.fn(() => {
                          this.connect.getListRoom();
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$280 || (const$280 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$279 || (const$279 = dart.constList([const$277 || (const$277 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 23, name: "text"}))), const$278 || (const$278 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.center, margin: new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: 8.0}), child: new src__material__text_form_field.TextFormField.new({textAlign: ui$.TextAlign.center, controller: this.idRoomController, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "ID ROOM"}), $creationLocationd_0dea112b090073317d4: const$285 || (const$285 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 30, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$284 || (const$284 = dart.constList([const$281 || (const$281 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 25, name: "textAlign"}))), const$282 || (const$282 = dart.const(new src__widgets__widget_inspector._Location.new({line: 109, column: 25, name: "controller"}))), const$283 || (const$283 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 25, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$290 || (const$290 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$289 || (const$289 = dart.constList([const$286 || (const$286 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 23, name: "alignment"}))), const$287 || (const$287 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 23, name: "margin"}))), const$288 || (const$288 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "JOIN ROOM", onClick: dart.fn(() => {
                          let id = core.int.parse(this.idRoomController.text);
                          this.connect.joinRoomByRoomID(id);
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$294 || (const$294 = dart.const(new src__widgets__widget_inspector._Location.new({line: 115, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$293 || (const$293 = dart.constList([const$291 || (const$291 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 23, name: "text"}))), const$292 || (const$292 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "READY", onClick: dart.fn(() => {
                          this.connect.ready();
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$298 || (const$298 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$297 || (const$297 = dart.constList([const$295 || (const$295 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 23, name: "text"}))), const$296 || (const$296 = dart.const(new src__widgets__widget_inspector._Location.new({line: 124, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "OUT ROOM", onClick: dart.fn(() => {
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$302 || (const$302 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$301 || (const$301 = dart.constList([const$299 || (const$299 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 23, name: "text"}))), const$300 || (const$300 = dart.const(new src__widgets__widget_inspector._Location.new({line: 130, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$306 || (const$306 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 24, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$305 || (const$305 = dart.constList([const$303 || (const$303 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 19, name: "mainAxisAlignment"}))), const$304 || (const$304 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 19, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$309 || (const$309 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 22, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$308 || (const$308 = dart.constList([const$307 || (const$307 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$315 || (const$315 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 20, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$314 || (const$314 = dart.constList([const$310 || (const$310 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 15, name: "alignment"}))), const$311 || (const$311 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 15, name: "decoration"}))), const$312 || (const$312 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 15, name: "height"}))), const$313 || (const$313 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$319 || (const$319 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 11, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$318 || (const$318 = dart.constList([const$316 || (const$316 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 13, name: "flex"}))), const$317 || (const$317 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 4, child: new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({border: src__painting__box_border.Border.all({color: src__material__colors.Colors.grey, width: 1.0})}), height: dart.notNull(size.height) / 2, child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({color: this.randomColor(), child: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({child: new src__widgets__text.Text.new(this.widget.user.name, {style: new src__painting__text_style.TextStyle.new({fontSize: 22.0}), $creationLocationd_0dea112b090073317d4: const$323 || (const$323 = dart.const(new src__widgets__widget_inspector._Location.new({line: 151, column: 34, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$322 || (const$322 = dart.constList([const$320 || (const$320 = dart.const(new src__widgets__widget_inspector._Location.new({line: 152, column: 41, name: "data"}))), const$321 || (const$321 = dart.const(new src__widgets__widget_inspector._Location.new({line: 153, column: 29, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$326 || (const$326 = dart.const(new src__widgets__widget_inspector._Location.new({line: 150, column: 25, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$325 || (const$325 = dart.constList([const$324 || (const$324 = dart.const(new src__widgets__widget_inspector._Location.new({line: 151, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({child: new src__widgets__text.Text.new("User ID: " + dart.str(this.widget.user.id), {style: new src__painting__text_style.TextStyle.new({fontSize: 22.0}), $creationLocationd_0dea112b090073317d4: const$330 || (const$330 = dart.const(new src__widgets__widget_inspector._Location.new({line: 159, column: 34, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$329 || (const$329 = dart.constList([const$327 || (const$327 = dart.const(new src__widgets__widget_inspector._Location.new({line: 160, column: 57, name: "data"}))), const$328 || (const$328 = dart.const(new src__widgets__widget_inspector._Location.new({line: 161, column: 29, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$333 || (const$333 = dart.const(new src__widgets__widget_inspector._Location.new({line: 158, column: 25, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$332 || (const$332 = dart.constList([const$331 || (const$331 = dart.const(new src__widgets__widget_inspector._Location.new({line: 159, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$337 || (const$337 = dart.const(new src__widgets__widget_inspector._Location.new({line: 147, column: 28, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$336 || (const$336 = dart.constList([const$334 || (const$334 = dart.const(new src__widgets__widget_inspector._Location.new({line: 148, column: 23, name: "mainAxisAlignment"}))), const$335 || (const$335 = dart.const(new src__widgets__widget_inspector._Location.new({line: 149, column: 23, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$341 || (const$341 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 19, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$340 || (const$340 = dart.constList([const$338 || (const$338 = dart.const(new src__widgets__widget_inspector._Location.new({line: 146, column: 21, name: "color"}))), const$339 || (const$339 = dart.const(new src__widgets__widget_inspector._Location.new({line: 147, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.all(12.0), alignment: src__painting__alignment.Alignment.topLeft, child: new src__widgets__text.Text.new(this.log, {style: new src__painting__text_style.TextStyle.new({height: 1.0}), $creationLocationd_0dea112b090073317d4: const$345 || (const$345 = dart.const(new src__widgets__widget_inspector._Location.new({line: 172, column: 32, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$344 || (const$344 = dart.constList([const$342 || (const$342 = dart.const(new src__widgets__widget_inspector._Location.new({line: 173, column: 27, name: "data"}))), const$343 || (const$343 = dart.const(new src__widgets__widget_inspector._Location.new({line: 174, column: 27, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$350 || (const$350 = dart.const(new src__widgets__widget_inspector._Location.new({line: 169, column: 30, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$349 || (const$349 = dart.constList([const$346 || (const$346 = dart.const(new src__widgets__widget_inspector._Location.new({line: 170, column: 25, name: "margin"}))), const$347 || (const$347 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 25, name: "alignment"}))), const$348 || (const$348 = dart.const(new src__widgets__widget_inspector._Location.new({line: 172, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$353 || (const$353 = dart.const(new src__widgets__widget_inspector._Location.new({line: 168, column: 28, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$352 || (const$352 = dart.constList([const$351 || (const$351 = dart.const(new src__widgets__widget_inspector._Location.new({line: 169, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$356 || (const$356 = dart.const(new src__widgets__widget_inspector._Location.new({line: 167, column: 19, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$355 || (const$355 = dart.constList([const$354 || (const$354 = dart.const(new src__widgets__widget_inspector._Location.new({line: 168, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$359 || (const$359 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 22, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$358 || (const$358 = dart.constList([const$357 || (const$357 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$364 || (const$364 = dart.const(new src__widgets__widget_inspector._Location.new({line: 139, column: 20, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$363 || (const$363 = dart.constList([const$360 || (const$360 = dart.const(new src__widgets__widget_inspector._Location.new({line: 140, column: 15, name: "decoration"}))), const$361 || (const$361 = dart.const(new src__widgets__widget_inspector._Location.new({line: 142, column: 15, name: "height"}))), const$362 || (const$362 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$368 || (const$368 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 11, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$367 || (const$367 = dart.constList([const$365 || (const$365 = dart.const(new src__widgets__widget_inspector._Location.new({line: 138, column: 13, name: "flex"}))), const$366 || (const$366 = dart.const(new src__widgets__widget_inspector._Location.new({line: 139, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$371 || (const$371 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 14, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$370 || (const$370 = dart.constList([const$369 || (const$369 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$376 || (const$376 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 12, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$375 || (const$375 = dart.constList([const$372 || (const$372 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 7, name: "alignment"}))), const$373 || (const$373 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 7, name: "height"}))), const$374 || (const$374 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    buildSmallPage(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      return new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.center, height: dart.notNull(size.height) / 2, child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({flex: 2, child: new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.center, decoration: new src__painting__box_decoration.BoxDecoration.new({border: src__painting__box_border.Border.all({color: src__material__colors.Colors.grey, width: 1.0})}), height: dart.notNull(size.height) / 2, child: new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new src__widgets__basic.Wrap.new({children: JSArrayOfWidget().of([new text_button$.TextButton.new({text: "CLEAR", onClick: dart.fn(() => {
                          this.setState(dart.fn(() => {
                            this.log = "";
                          }, VoidToNull()));
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$380 || (const$380 = dart.const(new src__widgets__widget_inspector._Location.new({line: 205, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$379 || (const$379 = dart.constList([const$377 || (const$377 = dart.const(new src__widgets__widget_inspector._Location.new({line: 206, column: 23, name: "text"}))), const$378 || (const$378 = dart.const(new src__widgets__widget_inspector._Location.new({line: 207, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "ONLINE", onClick: dart.fn(() => {
                          this.connect.online(this.widget.user.id, this.widget.user.name, "avatarUrl");
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$384 || (const$384 = dart.const(new src__widgets__widget_inspector._Location.new({line: 213, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$383 || (const$383 = dart.constList([const$381 || (const$381 = dart.const(new src__widgets__widget_inspector._Location.new({line: 214, column: 23, name: "text"}))), const$382 || (const$382 = dart.const(new src__widgets__widget_inspector._Location.new({line: 215, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "CREATE ROOM", onClick: dart.fn(() => {
                          this.connect.createRoom();
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$388 || (const$388 = dart.const(new src__widgets__widget_inspector._Location.new({line: 220, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$387 || (const$387 = dart.constList([const$385 || (const$385 = dart.const(new src__widgets__widget_inspector._Location.new({line: 221, column: 23, name: "text"}))), const$386 || (const$386 = dart.const(new src__widgets__widget_inspector._Location.new({line: 222, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "GET ROOMS", onClick: dart.fn(() => {
                          this.connect.getListRoom();
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$392 || (const$392 = dart.const(new src__widgets__widget_inspector._Location.new({line: 226, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$391 || (const$391 = dart.constList([const$389 || (const$389 = dart.const(new src__widgets__widget_inspector._Location.new({line: 227, column: 23, name: "text"}))), const$390 || (const$390 = dart.const(new src__widgets__widget_inspector._Location.new({line: 228, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.center, margin: new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: 8.0}), child: new src__material__text_form_field.TextFormField.new({textAlign: ui$.TextAlign.center, controller: this.idRoomController, decoration: new src__material__input_decorator.InputDecoration.new({hintText: "ID ROOM"}), $creationLocationd_0dea112b090073317d4: const$397 || (const$397 = dart.const(new src__widgets__widget_inspector._Location.new({line: 235, column: 30, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$396 || (const$396 = dart.constList([const$393 || (const$393 = dart.const(new src__widgets__widget_inspector._Location.new({line: 236, column: 25, name: "textAlign"}))), const$394 || (const$394 = dart.const(new src__widgets__widget_inspector._Location.new({line: 237, column: 25, name: "controller"}))), const$395 || (const$395 = dart.const(new src__widgets__widget_inspector._Location.new({line: 238, column: 25, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$402 || (const$402 = dart.const(new src__widgets__widget_inspector._Location.new({line: 232, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$401 || (const$401 = dart.constList([const$398 || (const$398 = dart.const(new src__widgets__widget_inspector._Location.new({line: 233, column: 23, name: "alignment"}))), const$399 || (const$399 = dart.const(new src__widgets__widget_inspector._Location.new({line: 234, column: 23, name: "margin"}))), const$400 || (const$400 = dart.const(new src__widgets__widget_inspector._Location.new({line: 235, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "JOIN ROOM", onClick: dart.fn(() => {
                          let id = core.int.parse(this.idRoomController.text);
                          this.connect.joinRoomByRoomID(id);
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$406 || (const$406 = dart.const(new src__widgets__widget_inspector._Location.new({line: 243, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$405 || (const$405 = dart.constList([const$403 || (const$403 = dart.const(new src__widgets__widget_inspector._Location.new({line: 244, column: 23, name: "text"}))), const$404 || (const$404 = dart.const(new src__widgets__widget_inspector._Location.new({line: 245, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "READY", onClick: dart.fn(() => {
                          this.connect.ready();
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$410 || (const$410 = dart.const(new src__widgets__widget_inspector._Location.new({line: 250, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$409 || (const$409 = dart.constList([const$407 || (const$407 = dart.const(new src__widgets__widget_inspector._Location.new({line: 251, column: 23, name: "text"}))), const$408 || (const$408 = dart.const(new src__widgets__widget_inspector._Location.new({line: 252, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))}), new text_button$.TextButton.new({text: "OUT ROOM", onClick: dart.fn(() => {
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$414 || (const$414 = dart.const(new src__widgets__widget_inspector._Location.new({line: 256, column: 21, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$413 || (const$413 = dart.constList([const$411 || (const$411 = dart.const(new src__widgets__widget_inspector._Location.new({line: 257, column: 23, name: "text"}))), const$412 || (const$412 = dart.const(new src__widgets__widget_inspector._Location.new({line: 258, column: 23, name: "onClick"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$417 || (const$417 = dart.const(new src__widgets__widget_inspector._Location.new({line: 203, column: 24, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$416 || (const$416 = dart.constList([const$415 || (const$415 = dart.const(new src__widgets__widget_inspector._Location.new({line: 204, column: 19, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$420 || (const$420 = dart.const(new src__widgets__widget_inspector._Location.new({line: 202, column: 22, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$419 || (const$419 = dart.constList([const$418 || (const$418 = dart.const(new src__widgets__widget_inspector._Location.new({line: 203, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$426 || (const$426 = dart.const(new src__widgets__widget_inspector._Location.new({line: 197, column: 20, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$425 || (const$425 = dart.constList([const$421 || (const$421 = dart.const(new src__widgets__widget_inspector._Location.new({line: 198, column: 15, name: "alignment"}))), const$422 || (const$422 = dart.const(new src__widgets__widget_inspector._Location.new({line: 199, column: 15, name: "decoration"}))), const$423 || (const$423 = dart.const(new src__widgets__widget_inspector._Location.new({line: 201, column: 15, name: "height"}))), const$424 || (const$424 = dart.const(new src__widgets__widget_inspector._Location.new({line: 202, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$430 || (const$430 = dart.const(new src__widgets__widget_inspector._Location.new({line: 195, column: 11, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$429 || (const$429 = dart.constList([const$427 || (const$427 = dart.const(new src__widgets__widget_inspector._Location.new({line: 196, column: 13, name: "flex"}))), const$428 || (const$428 = dart.const(new src__widgets__widget_inspector._Location.new({line: 197, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 4, child: new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({border: src__painting__box_border.Border.all({color: src__material__colors.Colors.grey, width: 1.0})}), height: dart.notNull(size.height) / 2, child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({color: this.randomColor(), child: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({child: new src__widgets__text.Text.new(this.widget.user.name, {style: new src__painting__text_style.TextStyle.new({fontSize: 22.0}), $creationLocationd_0dea112b090073317d4: const$434 || (const$434 = dart.const(new src__widgets__widget_inspector._Location.new({line: 279, column: 34, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$433 || (const$433 = dart.constList([const$431 || (const$431 = dart.const(new src__widgets__widget_inspector._Location.new({line: 280, column: 41, name: "data"}))), const$432 || (const$432 = dart.const(new src__widgets__widget_inspector._Location.new({line: 281, column: 29, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$437 || (const$437 = dart.const(new src__widgets__widget_inspector._Location.new({line: 278, column: 25, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$436 || (const$436 = dart.constList([const$435 || (const$435 = dart.const(new src__widgets__widget_inspector._Location.new({line: 279, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({child: new src__widgets__text.Text.new("User ID: " + dart.str(this.widget.user.id), {style: new src__painting__text_style.TextStyle.new({fontSize: 22.0}), $creationLocationd_0dea112b090073317d4: const$441 || (const$441 = dart.const(new src__widgets__widget_inspector._Location.new({line: 287, column: 34, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$440 || (const$440 = dart.constList([const$438 || (const$438 = dart.const(new src__widgets__widget_inspector._Location.new({line: 288, column: 57, name: "data"}))), const$439 || (const$439 = dart.const(new src__widgets__widget_inspector._Location.new({line: 289, column: 29, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$444 || (const$444 = dart.const(new src__widgets__widget_inspector._Location.new({line: 286, column: 25, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$443 || (const$443 = dart.constList([const$442 || (const$442 = dart.const(new src__widgets__widget_inspector._Location.new({line: 287, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$448 || (const$448 = dart.const(new src__widgets__widget_inspector._Location.new({line: 275, column: 28, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$447 || (const$447 = dart.constList([const$445 || (const$445 = dart.const(new src__widgets__widget_inspector._Location.new({line: 276, column: 23, name: "mainAxisAlignment"}))), const$446 || (const$446 = dart.const(new src__widgets__widget_inspector._Location.new({line: 277, column: 23, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$452 || (const$452 = dart.const(new src__widgets__widget_inspector._Location.new({line: 273, column: 19, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$451 || (const$451 = dart.constList([const$449 || (const$449 = dart.const(new src__widgets__widget_inspector._Location.new({line: 274, column: 21, name: "color"}))), const$450 || (const$450 = dart.const(new src__widgets__widget_inspector._Location.new({line: 275, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.all(12.0), alignment: src__painting__alignment.Alignment.topLeft, child: new src__widgets__text.Text.new(this.log, {style: new src__painting__text_style.TextStyle.new({height: 1.0}), $creationLocationd_0dea112b090073317d4: const$456 || (const$456 = dart.const(new src__widgets__widget_inspector._Location.new({line: 300, column: 32, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$455 || (const$455 = dart.constList([const$453 || (const$453 = dart.const(new src__widgets__widget_inspector._Location.new({line: 301, column: 27, name: "data"}))), const$454 || (const$454 = dart.const(new src__widgets__widget_inspector._Location.new({line: 302, column: 27, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$461 || (const$461 = dart.const(new src__widgets__widget_inspector._Location.new({line: 297, column: 30, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$460 || (const$460 = dart.constList([const$457 || (const$457 = dart.const(new src__widgets__widget_inspector._Location.new({line: 298, column: 25, name: "margin"}))), const$458 || (const$458 = dart.const(new src__widgets__widget_inspector._Location.new({line: 299, column: 25, name: "alignment"}))), const$459 || (const$459 = dart.const(new src__widgets__widget_inspector._Location.new({line: 300, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$464 || (const$464 = dart.const(new src__widgets__widget_inspector._Location.new({line: 296, column: 28, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$463 || (const$463 = dart.constList([const$462 || (const$462 = dart.const(new src__widgets__widget_inspector._Location.new({line: 297, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$467 || (const$467 = dart.const(new src__widgets__widget_inspector._Location.new({line: 295, column: 19, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$466 || (const$466 = dart.constList([const$465 || (const$465 = dart.const(new src__widgets__widget_inspector._Location.new({line: 296, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$470 || (const$470 = dart.const(new src__widgets__widget_inspector._Location.new({line: 271, column: 22, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$469 || (const$469 = dart.constList([const$468 || (const$468 = dart.const(new src__widgets__widget_inspector._Location.new({line: 272, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$475 || (const$475 = dart.const(new src__widgets__widget_inspector._Location.new({line: 267, column: 20, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$474 || (const$474 = dart.constList([const$471 || (const$471 = dart.const(new src__widgets__widget_inspector._Location.new({line: 268, column: 15, name: "decoration"}))), const$472 || (const$472 = dart.const(new src__widgets__widget_inspector._Location.new({line: 270, column: 15, name: "height"}))), const$473 || (const$473 = dart.const(new src__widgets__widget_inspector._Location.new({line: 271, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$479 || (const$479 = dart.const(new src__widgets__widget_inspector._Location.new({line: 265, column: 11, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$478 || (const$478 = dart.constList([const$476 || (const$476 = dart.const(new src__widgets__widget_inspector._Location.new({line: 266, column: 13, name: "flex"}))), const$477 || (const$477 = dart.const(new src__widgets__widget_inspector._Location.new({line: 267, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$482 || (const$482 = dart.const(new src__widgets__widget_inspector._Location.new({line: 193, column: 14, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$481 || (const$481 = dart.constList([const$480 || (const$480 = dart.const(new src__widgets__widget_inspector._Location.new({line: 194, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$487 || (const$487 = dart.const(new src__widgets__widget_inspector._Location.new({line: 190, column: 12, file: "org-dartlang-app:///packages/socket_tools/user_item.dart", parameterLocations: const$486 || (const$486 = dart.constList([const$483 || (const$483 = dart.const(new src__widgets__widget_inspector._Location.new({line: 191, column: 7, name: "alignment"}))), const$484 || (const$484 = dart.const(new src__widgets__widget_inspector._Location.new({line: 192, column: 7, name: "height"}))), const$485 || (const$485 = dart.const(new src__widgets__widget_inspector._Location.new({line: 193, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (user_item._UserItemState.new = function() {
    this.connect = new connect.Connect.new();
    this.log = "This is log";
    this.idRoomController = new src__widgets__editable_text.TextEditingController.new();
    user_item._UserItemState.__proto__.new.call(this);
    ;
  }).prototype = user_item._UserItemState.prototype;
  dart.addTypeTests(user_item._UserItemState);
  dart.setMethodSignature(user_item._UserItemState, () => ({
    __proto__: dart.getMethods(user_item._UserItemState.__proto__),
    randomColor: dart.fnType(ui$.Color, []),
    addCallBack: dart.fnType(dart.dynamic, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    buildBody: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, ui$.Size]),
    buildBigPage: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    buildSmallPage: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(user_item._UserItemState, "package:socket_tools/user_item.dart");
  dart.setFieldSignature(user_item._UserItemState, () => ({
    __proto__: dart.getFields(user_item._UserItemState.__proto__),
    connect: dart.fieldType(connect.Connect),
    log: dart.fieldType(core.String),
    idRoomController: dart.fieldType(src__widgets__editable_text.TextEditingController)
  }));
  const _isOnline = dart.privateName(connect, "_isOnline");
  const _callbacks = dart.privateName(connect, "_callbacks");
  const _errorCallback = dart.privateName(connect, "_errorCallback");
  const _onMessageReceiver = dart.privateName(connect, "_onMessageReceiver");
  connect.Connect = class Connect extends core.Object {
    get webSocket() {
      return this[webSocket];
    }
    set webSocket(value) {
      this[webSocket] = value;
    }
    setErrorCallback(callback) {
      this[_errorCallback] = callback;
    }
    addCallbackType(callback) {
      this[_callbacks] = callback;
    }
    [_onMessageReceiver](serverMessage) {
      try {
        let message = core.Map._check(convert.jsonDecode(core.String._check(serverMessage)));
        dart.dsend(this, _callbacks, [message[$_get]("message")]);
        return;
      } catch (e$) {
        let e = dart.getThrown(e$);
        core.print("error :" + dart.str(serverMessage));
        if (this[_errorCallback] != null) {
          dart.dsend(this, _errorCallback, [serverMessage]);
        }
      }
    }
    getListRoom() {
      core.print("call GET_LIST_ROOM");
      let params = new (IdentityMapOfString$dynamic()).from(["type", "GET_LIST_ROOM"]);
      this.webSocket.send(params);
    }
    online(id, name, avatarUrl) {
      let params = new (IdentityMapOfString$dynamic()).from(["type", "ONLINE", "userId", id, "name", name, "avatarUrl", avatarUrl]);
      this.webSocket.send(params);
    }
    outRoom() {
      core.print("call OUT_ROOM");
      let params = new (IdentityMapOfString$dynamic()).from(["type", "OUT_ROOM"]);
      this.webSocket.send(params);
    }
    createRoom() {
      let params = new (IdentityMapOfString$dynamic()).from(["type", "CREATE_ROOM"]);
      core.print("local call create room");
      this.webSocket.send(params);
    }
    joinRoomByRoomID(roomID) {
      core.print("local call join room by room id");
      let params = new (IdentityMapOfString$dynamic()).from(["type", "JOIN_ROOM", "roomId", roomID]);
      this.webSocket.send(params);
    }
    downloadQuestionPackage() {
      core.print("local call downloadQuestionPackage");
      let params = new (IdentityMapOfString$dynamic()).from(["type", "GET_QUESTION_PACKAGE"]);
      this.webSocket.send(params);
    }
    startGame() {
      core.print("local call start game");
      let params = new (IdentityMapOfString$dynamic()).from(["type", "START_GAME"]);
      this.webSocket.send(params);
    }
    answerGame(answer, isCorrect, score) {
      core.print("local call answer game");
      let params = new (IdentityMapOfString$dynamic()).from(["type", answer, "type_answer", false, "score", score]);
      this.webSocket.send(params);
    }
    endGame() {
      core.print("local call end game");
      let params = new (IdentityMapOfString$dynamic()).from(["type", "END_GAME"]);
      this.webSocket.send(params);
    }
    ready() {
      core.print("local call ready");
      let params = new (IdentityMapOfString$dynamic()).from(["type", "READY"]);
      this.webSocket.send(params);
    }
    invitePlayer(userId) {
      core.print("local call invite player");
      let params = new (IdentityMapOfString$dynamic()).from(["type", "INVITE_PLAYER", "userId", userId]);
      this.webSocket.send(params);
    }
    answerInvitePlayer(isAccept, roomID) {
      core.print("local call answer invite game");
      let params = new (IdentityMapOfString$dynamic()).from(["type", "ANSWER_INVITE", "answer", isAccept, "room" + "Id", roomID]);
      this.webSocket.send(params);
    }
    answerQuestion(isCorrect, score) {
      let params = new (IdentityMapOfString$dynamic()).from(["type", "ANSWER_QUESTION", "type_answer", isCorrect, "score", score]);
      this.webSocket.send(params);
    }
  };
  (connect.Connect.new = function() {
    this[webSocket] = new websocket.WebSocket.new();
    this[_isOnline] = false;
    this[_callbacks] = null;
    this[_errorCallback] = null;
    this.webSocket.initCommunication();
    this.webSocket.addListener(dart.bind(this, _onMessageReceiver));
  }).prototype = connect.Connect.prototype;
  dart.addTypeTests(connect.Connect);
  const webSocket = Symbol("Connect.webSocket");
  dart.setMethodSignature(connect.Connect, () => ({
    __proto__: dart.getMethods(connect.Connect.__proto__),
    setErrorCallback: dart.fnType(dart.dynamic, [core.Function]),
    addCallbackType: dart.fnType(dart.dynamic, [core.Function]),
    [_onMessageReceiver]: dart.fnType(dart.dynamic, [dart.dynamic]),
    getListRoom: dart.fnType(dart.dynamic, []),
    online: dart.fnType(dart.dynamic, [core.int, core.String, core.String]),
    outRoom: dart.fnType(dart.dynamic, []),
    createRoom: dart.fnType(dart.dynamic, []),
    joinRoomByRoomID: dart.fnType(dart.dynamic, [core.int]),
    downloadQuestionPackage: dart.fnType(dart.dynamic, []),
    startGame: dart.fnType(dart.dynamic, []),
    answerGame: dart.fnType(dart.dynamic, [core.String, core.bool, core.int]),
    endGame: dart.fnType(dart.dynamic, []),
    ready: dart.fnType(dart.dynamic, []),
    invitePlayer: dart.fnType(dart.dynamic, [core.int]),
    answerInvitePlayer: dart.fnType(dart.dynamic, [core.bool, core.int]),
    answerQuestion: dart.fnType(dart.dynamic, [core.bool, core.int])
  }));
  dart.setLibraryUri(connect.Connect, "package:socket_tools/connect.dart");
  dart.setFieldSignature(connect.Connect, () => ({
    __proto__: dart.getFields(connect.Connect.__proto__),
    webSocket: dart.fieldType(websocket.WebSocket),
    [_isOnline]: dart.fieldType(core.bool),
    [_callbacks]: dart.fieldType(core.Function),
    [_errorCallback]: dart.fieldType(core.Function)
  }));
  const _channel = dart.privateName(websocket, "_channel");
  const _isOn = dart.privateName(websocket, "_isOn");
  const _listener = dart.privateName(websocket, "_listener");
  const _onReceptionOfMessageFormServer = dart.privateName(websocket, "_onReceptionOfMessageFormServer");
  websocket.WebSocket = class WebSocket extends core.Object {
    initCommunication() {
      return async.async(dart.dynamic, (function* initCommunication() {
        this.reset();
        try {
          this[_channel] = new html$.HtmlWebSocketChannel.connect(home_page.HomePage.SERVER_ADDRESS);
          this[_channel].stream.listen(dart.bind(this, _onReceptionOfMessageFormServer), {onDone: dart.fn(() => {
              core.print("Websocket disconnect");
            }, VoidToNull())});
        } catch (e$) {
          let e = dart.getThrown(e$);
          this.reset();
        }
      }).bind(this));
    }
    reset() {
      if (this[_channel] != null) {
        if (this[_channel].sink != null) {
          this[_channel].sink.close();
          this[_isOn] = false;
        }
      }
    }
    send(params) {
      if (this[_channel] != null) {
        if (this[_channel].sink != null && dart.test(this[_isOn])) {
          this[_channel].sink.add(convert.jsonEncode(params));
        }
      }
    }
    addListener(callback) {
      this[_listener].add(callback);
    }
    removeListener(callback) {
      this[_listener].remove(callback);
    }
    [_onReceptionOfMessageFormServer](message) {
      this[_isOn] = true;
      this[_listener][$forEach](dart.fn(callback => {
        dart.dcall(callback, [message]);
      }, FunctionToNull()));
    }
  };
  (websocket.WebSocket.new = function() {
    this[_channel] = null;
    this[_isOn] = false;
    this[_listener] = new (ObserverListOfFunction()).new();
    ;
  }).prototype = websocket.WebSocket.prototype;
  dart.addTypeTests(websocket.WebSocket);
  dart.setMethodSignature(websocket.WebSocket, () => ({
    __proto__: dart.getMethods(websocket.WebSocket.__proto__),
    initCommunication: dart.fnType(dart.dynamic, []),
    reset: dart.fnType(dart.dynamic, []),
    send: dart.fnType(dart.dynamic, [core.Map$(core.String, dart.dynamic)]),
    addListener: dart.fnType(dart.dynamic, [core.Function]),
    removeListener: dart.fnType(dart.dynamic, [core.Function]),
    [_onReceptionOfMessageFormServer]: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setLibraryUri(websocket.WebSocket, "package:socket_tools/websocket.dart");
  dart.setFieldSignature(websocket.WebSocket, () => ({
    __proto__: dart.getFields(websocket.WebSocket.__proto__),
    [_channel]: dart.fieldType(html$.HtmlWebSocketChannel),
    [_isOn]: dart.fieldType(core.bool),
    [_listener]: dart.fieldType(src__foundation__observer_list.ObserverList$(core.Function))
  }));
  dart.trackLibraries("packages/socket_tools/connect", {
    "package:socket_tools/home_page.dart": home_page,
    "package:socket_tools/socket_page.dart": socket_page,
    "package:socket_tools/user_item.dart": user_item,
    "package:socket_tools/connect.dart": connect,
    "package:socket_tools/websocket.dart": websocket
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/socket_tools/home_page.dart","org-dartlang-app:///packages/socket_tools/socket_page.dart","org-dartlang-app:///packages/socket_tools/user_item.dart","org-dartlang-app:///packages/socket_tools/connect.dart","org-dartlang-app:///packages/socket_tools/websocket.dart"],"names":[],"mappings":"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","file":"connect.ddc.js"}');
  // Exports:
  return {
    home_page: home_page,
    socket_page: socket_page,
    user_item: user_item,
    connect: connect,
    websocket: websocket
  };
});

//# sourceMappingURL=connect.ddc.js.map

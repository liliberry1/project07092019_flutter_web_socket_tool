import 'dart:convert';

import 'package:flutter_web/foundation.dart';
import 'package:socket_tools/home_page.dart';
import 'package:web_socket_channel/html.dart';


class WebSocket{

  HtmlWebSocketChannel _channel;
  bool _isOn = false;

  ObserverList<Function> _listener = ObserverList();

  initCommunication() async {
    reset();
    try{
      _channel = HtmlWebSocketChannel.connect(HomePage.SERVER_ADDRESS);
      _channel.stream.listen(_onReceptionOfMessageFormServer,onDone: (){
        print("Websocket disconnect");
      });
    }catch(e){
      reset();
    }
  }

  reset() {
    if (_channel != null) {
      if (_channel.sink != null) {
        _channel.sink.close();
        _isOn = false;
      }
    }
  }

  send(Map<String, dynamic> params) {
    if (_channel != null) {
      if (_channel.sink != null && _isOn) {
        _channel.sink.add(jsonEncode(params));
      }
    }
  }

  addListener(Function callback) {
    _listener.add(callback);
  }

  removeListener(Function callback) {
    _listener.remove(callback);
  }

  _onReceptionOfMessageFormServer(message) {
    _isOn = true;
    _listener.forEach((Function callback) {
      callback(message);
    });
  }


}
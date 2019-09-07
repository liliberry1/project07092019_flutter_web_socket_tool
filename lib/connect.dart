import 'dart:convert';

import 'package:socket_tools/socket_receive_type.dart';
import 'package:socket_tools/websocket.dart';

class Connect {
  WebSocket webSocket = WebSocket();

  Connect() {
    webSocket.initCommunication();
    webSocket.addListener(_onMessageReceiver);
  }

  bool _isOnline = false;
  Function _callbacks;
  Function _errorCallback;

  setErrorCallback(Function callback) {
    _errorCallback = callback;
  }

  addCallbackType(Function callback) {
    _callbacks = callback;
  }

  _onMessageReceiver(serverMessage) {
    try {
      Map message = jsonDecode(serverMessage);
      _callbacks(message['message']);

      return;
    } catch (e) {
      print("error :${serverMessage}");
      if (_errorCallback != null) {
        _errorCallback(serverMessage);
      }
    }
  }

  //region --Call WebSocket

  getListRoom() {
    print("call GET_LIST_ROOM");
    Map<String, dynamic> params = {'type': 'GET_LIST_ROOM'};
    webSocket.send(params);
  }

  online(int id, String name, String avatarUrl) {
    Map<String, dynamic> params = {
      'type': 'ONLINE',
      'userId': id,
      'name': name,
      'avatarUrl': avatarUrl
    };
    webSocket.send(params);
  }

  outRoom() {
    print("call OUT_ROOM");
    Map<String, dynamic> params = {'type': 'OUT_ROOM'};
    webSocket.send(params);
  }

  createRoom() {
    Map<String, dynamic> params = {'type': 'CREATE_ROOM'};
    print("local call create room");
    webSocket.send(params);
  }

  joinRoomByRoomID(int roomID) {
    print("local call join room by room id");
    Map<String, dynamic> params = {'type': 'JOIN_ROOM', 'roomId': roomID};
    webSocket.send(params);
  }

  downloadQuestionPackage() {
    print("local call downloadQuestionPackage");
    Map<String, dynamic> params = {'type': 'GET_QUESTION_PACKAGE'};
    webSocket.send(params);
  }

  startGame() {
    print("local call start game");
    Map<String, dynamic> params = {'type': 'START_GAME'};
    webSocket.send(params);
  }

  answerGame(String answer, bool isCorrect, int score) {
    print("local call answer game");
    Map<String, dynamic> params = {
      'type': answer,
      'type_answer': false,
      'score': score
    };
    webSocket.send(params);
  }

  endGame() {
    print("local call end game");
    Map<String, dynamic> params = {'type': 'END_GAME'};
    webSocket.send(params);
  }

  ready() {
    print("local call ready");
    Map<String, dynamic> params = {'type': 'READY'};
    webSocket.send(params);
  }

  invitePlayer(int userId) {
    print("local call invite player");
    Map<String, dynamic> params = {'type': 'INVITE_PLAYER', 'userId': userId};
    webSocket.send(params);
  }

  answerInvitePlayer(bool isAccept, int roomID) {
    print("local call answer invite game");
    Map<String, dynamic> params = {
      'type': 'ANSWER_INVITE',
      'answer': isAccept,
      'room'
          'Id': roomID
    };
    webSocket.send(params);
  }

  answerQuestion(bool isCorrect, int score) {
    Map<String, dynamic> params = {
      "type": "ANSWER_QUESTION",
      "type_answer": isCorrect,
      "score": score
    };
    webSocket.send(params);
  }
//endregion

}

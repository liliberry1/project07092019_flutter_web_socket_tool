enum SocketReceiveType {
  CONNECT,
  RECONNECT,
  ONLINE,
  OUT_ROOM,
  INVITE,
  ANSWER_INVITE,
  START_GAME,
  ROOM_INFO,
  ROOM_NOTI,
  GET_LIST_ROOM,
  LIST_PLAYER,
  GET_QUESTION_PACKAGE,
  ERROR
}

SocketReceiveType parseToSocketReceiveType({String type}) {
  switch (type) {
    case "CONNECT":
      return SocketReceiveType.CONNECT;
    case "RECONNECT":
      return SocketReceiveType.CONNECT;
    case "ONLINE":
      return SocketReceiveType.ONLINE;
    case "OUT_ROOM":
      return SocketReceiveType.OUT_ROOM;
    case "INVITE":
      return SocketReceiveType.INVITE;
    case "ANSWER_INVITE":
      return SocketReceiveType.ANSWER_INVITE;
    case "START_GAME":
      return SocketReceiveType.START_GAME;
    case "ROOM_INFO":
      return SocketReceiveType.ROOM_INFO;
    case "ROOM_NOTI":
      return SocketReceiveType.ROOM_NOTI;
    case "ERROR":
      return SocketReceiveType.ERROR;
    case "GET_LIST_ROOM":
      return SocketReceiveType.GET_LIST_ROOM;
    case "LIST_PLAYER":
      return SocketReceiveType.LIST_PLAYER;
    case "GET_QUESTION_PACKAGE":
      return SocketReceiveType.GET_QUESTION_PACKAGE;
  }
}

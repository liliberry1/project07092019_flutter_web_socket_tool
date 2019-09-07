import 'dart:math';

import 'package:flutter_web/cupertino.dart';
import 'package:flutter_web/material.dart';
import 'package:socket_tools/connect.dart';
import 'package:socket_tools/text_button.dart';
import 'package:socket_tools/user.dart';

class UserItem extends StatefulWidget {
  User user;

  UserItem(this.user);

  @override
  _UserItemState createState() => _UserItemState();
}

class _UserItemState extends State<UserItem> {
  Connect connect = Connect();
  String log = "This is log";
  TextEditingController idRoomController = TextEditingController();

  Color randomColor() {
    Random random = Random();
    return Color.fromARGB(
        100, random.nextInt(255), random.nextInt(255), random.nextInt(255));
  }

  addCallBack() {
    connect.addCallbackType((json) {
      setState(() {
        log += "\n\n $json";
      });
    });
  }

  @override
  void initState() {
    addCallBack();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      body: buildBody(context, size),
    );
  }

  Widget buildBody(BuildContext context, Size size){
    if(size.width < 800){
      return buildSmallPage(context);
    }else{
      return buildBigPage(context);
    }
  }

  Widget buildBigPage(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      alignment: Alignment.center,
      height: size.height / 2,
      child: Row(
        children: <Widget>[
          Expanded(
            flex: 1,
            child: Container(
              alignment: Alignment.center,
              decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey, width: 1)),
              height: size.height / 2,
              child: SingleChildScrollView(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    TextButton(
                      text: 'CLEAR',
                      onClick: () {
                        setState(() {
                          log = "";
                        });
                      },
                    ),
                    TextButton(
                      text: 'ONLINE',
                      onClick: () {
                        connect.online(
                            widget.user.id, widget.user.name, "avatarUrl");
                      },
                    ),
                    TextButton(
                      text: "CREATE ROOM",
                      onClick: () {
                        connect.createRoom();
                      },
                    ),
                    TextButton(
                      text: 'GET ROOMS',
                      onClick: () {
                        connect.getListRoom();
                      },
                    ),
                    Container(
                      alignment: Alignment.center,
                      margin: EdgeInsets.symmetric(horizontal: 8),
                      child: TextFormField(
                        textAlign: TextAlign.center,
                        controller: idRoomController,
                        decoration: InputDecoration(
                          hintText: "ID ROOM",
                        ),
                      ),
                    ),
                    TextButton(
                      text: 'JOIN ROOM',
                      onClick: () {
                        int id = int.parse(idRoomController.text);
                        connect.joinRoomByRoomID(id);
                      },
                    ),
                    TextButton(
                      text: 'READY',
                      onClick: () {
                        connect.ready();
                      },
                    ),
                    TextButton(
                      text: 'OUT ROOM',
                      onClick: () {},
                    ),
                  ],
                ),
              ),
            ),
          ),
          Expanded(
            flex: 4,
            child: Container(
              decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey, width: 1)),
              height: size.height / 2,
              child: Column(
                children: <Widget>[
                  Container(
                    color: randomColor(),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: <Widget>[
                        Container(
                          child: Text(
                            widget.user.name,
                            style: TextStyle(
                              fontSize: 22,
                            ),
                          ),
                        ),
                        Container(
                          child: Text(
                            "User ID: ${widget.user.id}",
                            style: TextStyle(fontSize: 22),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    child: SingleChildScrollView(
                      child: Container(
                        margin: EdgeInsets.all(12),
                        alignment: Alignment.topLeft,
                        child: Text(
                          log,
                          style: TextStyle(height: 1),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget buildSmallPage(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      alignment: Alignment.center,
      height: size.height / 2,
      child: Column(
        children: <Widget>[
          Expanded(
            flex: 2,
            child: Container(
              alignment: Alignment.center,
              decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey, width: 1)),
              height: size.height / 2,
              child: SingleChildScrollView(
                child: Wrap(
                  children: <Widget>[
                    TextButton(
                      text: 'CLEAR',
                      onClick: () {
                        setState(() {
                          log = "";
                        });
                      },
                    ),
                    TextButton(
                      text: 'ONLINE',
                      onClick: () {
                        connect.online(
                            widget.user.id, widget.user.name, "avatarUrl");
                      },
                    ),
                    TextButton(
                      text: "CREATE ROOM",
                      onClick: () {
                        connect.createRoom();
                      },
                    ),
                    TextButton(
                      text: 'GET ROOMS',
                      onClick: () {
                        connect.getListRoom();
                      },
                    ),
                    Container(
                      alignment: Alignment.center,
                      margin: EdgeInsets.symmetric(horizontal: 8),
                      child: TextFormField(
                        textAlign: TextAlign.center,
                        controller: idRoomController,
                        decoration: InputDecoration(
                          hintText: "ID ROOM",
                        ),
                      ),
                    ),
                    TextButton(
                      text: 'JOIN ROOM',
                      onClick: () {
                        int id = int.parse(idRoomController.text);
                        connect.joinRoomByRoomID(id);
                      },
                    ),
                    TextButton(
                      text: 'READY',
                      onClick: () {
                        connect.ready();
                      },
                    ),
                    TextButton(
                      text: 'OUT ROOM',
                      onClick: () {},
                    ),
                  ],
                ),
              ),
            ),
          ),
          Expanded(
            flex: 4,
            child: Container(
              decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey, width: 1)),
              height: size.height / 2,
              child: Column(
                children: <Widget>[
                  Container(
                    color: randomColor(),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: <Widget>[
                        Container(
                          child: Text(
                            widget.user.name,
                            style: TextStyle(
                              fontSize: 22,
                            ),
                          ),
                        ),
                        Container(
                          child: Text(
                            "User ID: ${widget.user.id}",
                            style: TextStyle(fontSize: 22),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    child: SingleChildScrollView(
                      child: Container(
                        margin: EdgeInsets.all(12),
                        alignment: Alignment.topLeft,
                        child: Text(
                          log,
                          style: TextStyle(height: 1),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

import 'dart:math';

import 'package:flutter_web/material.dart';
import 'package:socket_tools/user.dart';
import 'package:socket_tools/user_item.dart';

class SocketPage extends StatefulWidget {
  final String socketAddress;
  final List<User> users;

  SocketPage({this.socketAddress, this.users});

  @override
  _SocketPageState createState() {
    return _SocketPageState();
  }
}

class _SocketPageState extends State<SocketPage> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
        appBar: AppBar(
          title: Text(
            "Da Lat Co Work",
            style: TextStyle(fontSize: 26, color: Colors.white),
          ),
          leading: FlatButton(
            child: Image.network(
                "https://image.flaticon.com/icons/svg/271/271218.svg"),
            onPressed: () {
              Navigator.pop(context);
            },
          ),
          centerTitle: true,
        ),
        body: buildBody(context, size));
  }

  Widget buildBody(BuildContext context, Size size) {
    return SingleChildScrollView(
      child: size.width<=800?buildSmallPage(context):buildBigPage(context),
    );
  }

  Widget buildBigPage(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      height: size.height,
        alignment: Alignment.center,
        child: Column(
          children: <Widget>[
            Expanded(
              flex: 1,
              child: Row(
                children: <Widget>[
                  Expanded(flex: 1, child: UserItem(widget.users[0])),
                  Expanded(flex: 1, child: UserItem(widget.users[1])),
                ],
              ),
            ),
            Expanded(
              flex: 1,
              child: Row(
                children: <Widget>[
                  Expanded(flex: 1, child: UserItem(widget.users[2])),
                  Expanded(flex: 1, child: UserItem(widget.users[3])),
                ],
              ),
            )
          ],
        ));
  }

  Widget buildSmallPage(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      height: size.height,
      child: Column(
        children: <Widget>[
          Expanded(flex: 1, child: UserItem(widget.users[0])),
          Expanded(flex: 1, child: UserItem(widget.users[1])),
          Expanded(flex: 1, child: UserItem(widget.users[2])),
          Expanded(flex: 1, child: UserItem(widget.users[3])),
        ],
      ),
    );
  }
}

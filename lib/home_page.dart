import 'package:flutter_web/material.dart';
import 'package:socket_tools/user.dart';
import 'socket_page.dart';

class HomePage extends StatefulWidget {
  static String SERVER_ADDRESS;

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  TextEditingController socketController = TextEditingController();
  TextEditingController numberUserController = TextEditingController();
  TextEditingController userId1 = TextEditingController();
  TextEditingController userId2 = TextEditingController();
  TextEditingController userId3 = TextEditingController();
  TextEditingController userId4 = TextEditingController();
  final String socketPrefix = "ws://";
  bool _isInvalidText = true;
  bool _isInvalidNumber = true;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    socketController.text = "ws://egame-ws.herokuapp.com/sockets";
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Da Lat Co Work",
          style: TextStyle(fontSize: 26, color: Colors.white),
        ),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Container(
          alignment: Alignment.center,
          height: size.height,
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  "Socket Tools",
                  style: TextStyle(fontSize: 32, color: Colors.black),
                ),
                Container(
                  margin: EdgeInsets.only(top: 32),
                  width: size.width / 2,
                  child: TextFormField(
                    controller: socketController,
                    decoration: InputDecoration(
                        hintText: "Web socket address",
                        errorText: !_isInvalidText
                            ? "WebSocket addredd must start with ws://"
                            : null,
                        border: OutlineInputBorder(
                            borderRadius: BorderRadius.all(Radius.circular(45)))),
                  ),
                ),
                buildFiled(context),
                Container(
                  padding: EdgeInsets.symmetric(vertical: 12, horizontal: 16),
                  child: Container(
                    padding: EdgeInsets.symmetric(vertical: 12, horizontal: 16),
                    decoration: BoxDecoration(
                        color: Colors.black,
                        borderRadius: BorderRadius.all(Radius.circular(45))),
                    child: FlatButton(
                      onPressed: () {
                        checkInvalid(socketController.text);
                      },
                      child: Text(
                        "Get Started",
                        style: TextStyle(color: Colors.white, fontSize: 32),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget buildFiled(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    if (size.width <= 800) {
      return buildSmallFiledID(context);
    } else {
      return buildBigFiledID(context);
    }
  }

  Widget buildBigFiledID(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Container(
            margin: EdgeInsets.symmetric(vertical: 32),
            width: size.width / 8,
            child: TextField(
              keyboardType: TextInputType.number,
              controller: userId1,
              decoration: InputDecoration(
                hintText: "User ID 1",
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(45))),
              ),
            ),
          ),
          Container(
            margin: EdgeInsets.symmetric(vertical: 32),
            width: size.width / 8,
            child: TextField(
              keyboardType: TextInputType.number,
              controller: userId2,
              decoration: InputDecoration(
                hintText: "User ID 2",
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(45))),
              ),
            ),
          ),
          Container(
            margin: EdgeInsets.symmetric(vertical: 32),
            width: size.width / 8,
            child: TextField(
              keyboardType: TextInputType.number,
              controller: userId3,
              decoration: InputDecoration(
                hintText: "User ID 3",
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(45))),
              ),
            ),
          ),
          Container(
            margin: EdgeInsets.symmetric(vertical: 32),
            width: size.width / 8,
            child: TextField(
              keyboardType: TextInputType.number,
              controller: userId4,
              decoration: InputDecoration(
                hintText: "User ID 4",
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(45))),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget buildSmallFiledID(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Container(
            margin: EdgeInsets.symmetric(vertical: 12),
            width: size.width /2,
            child: TextField(
              keyboardType: TextInputType.number,
              controller: userId1,
              decoration: InputDecoration(
                hintText: "User ID 1",
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(45))),
              ),
            ),
          ),
          Container(
            margin: EdgeInsets.symmetric(vertical: 12),
            width: size.width / 2,
            child: TextField(
              keyboardType: TextInputType.number,
              controller: userId2,
              decoration: InputDecoration(
                hintText: "User ID 2",
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(45))),
              ),
            ),
          ),
          Container(
            margin: EdgeInsets.symmetric(vertical: 12),
            width: size.width / 2,
            child: TextField(
              keyboardType: TextInputType.number,
              controller: userId3,
              decoration: InputDecoration(
                hintText: "User ID 3",
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(45))),
              ),
            ),
          ),
          Container(
            margin: EdgeInsets.symmetric(vertical: 12),
            width: size.width / 2,
            child: TextField(
              keyboardType: TextInputType.number,
              controller: userId4,
              decoration: InputDecoration(
                hintText: "User ID 4",
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(45))),
              ),
            ),
          ),
        ],
      ),
    );
  }

  bool invalidSocketAddress(String socketAddress) {
    String prefix = socketAddress.substring(0, 5);
    return socketPrefix == prefix;
  }

  bool checkMaxUser(int numberOfUser) {
    return numberOfUser <= 4;
  }

  checkInvalid(String socketAddress) {
    setState(() {
      _isInvalidText = invalidSocketAddress(socketAddress);
    });

    if (_isInvalidNumber && _isInvalidText) {
      HomePage.SERVER_ADDRESS = socketAddress;
      Navigator.push(
          context,
          MaterialPageRoute(
              builder: (context) => SocketPage(
                    socketAddress: socketAddress,
                    users: createListUser(),
                  )));
    }
  }

  createListUser() {
    try {
      int id1 = int.parse(userId1.text.trim());
      int id2 = int.parse(userId2.text.trim());
      int id3 = int.parse(userId3.text.trim());
      int id4 = int.parse(userId4.text.trim());
      List<int> ids = [id1, id2, id3, id4];

      List<User> user = List();
      for (int i = 0; i < 4; i++) {
        user.add(User(id: ids[i], name: "Machine $i"));
      }
      return user;
    } catch (e) {}
  }
}

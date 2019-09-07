import 'package:flutter_web/material.dart';

class TextButton extends StatelessWidget {
  String text;
  VoidCallback onClick;

  TextButton({this.text, this.onClick});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: FlatButton(
        onPressed: onClick,
        child: Text(text),
      ),
    );
  }
}

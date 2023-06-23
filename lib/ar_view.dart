import 'package:flutter/material.dart';

class ArView extends StatelessWidget {
  const ArView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("AR View")),
      body: const Center(
        child: Text("AR View"),
      ),
    );
  }
}

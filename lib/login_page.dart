import 'package:flutter/material.dart';
import 'package:paye_ton_kawa/products_page.dart';
import 'package:paye_ton_kawa/qrcode_scanner.dart';

import 'models/boxes.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  void initState() {
    super.initState();

    final token = box.get("jwt_token");
    if (token != null) {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const ProductsPage()),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blue,
      body: Center(
        child: Column(
          children: [
            const SizedBox(height: 70),
            Container(
              width: 170,
              height: 170,
              padding: const EdgeInsets.all(30),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(500),
              ),
              child: const Center(
                  child: Image(image: AssetImage("images/logo.png"))),
            ),
            const SizedBox(height: 20),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 40),
              child: const Text(
                "Pour vous connecter, veuillez scanner le QR Code que vous avez reçu par mail.",
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
                textAlign: TextAlign.center,
              ),
            ),
            const SizedBox(height: 20),
            const Image(image: AssetImage("images/qr_code.png")),
            InkWell(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => const QRCodeScanner()),
                );
              },
              child: Container(
                decoration: BoxDecoration(
                  border: Border.all(
                    color: Colors.white,
                    width: 1.0,
                  ),
                  borderRadius: BorderRadius.circular(5),
                ),
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 15, vertical: 10),
                  child: IntrinsicWidth(
                    child: Row(
                      children: const [
                        Icon(
                          Icons.qr_code, // Replace with the desired icon
                          color: Colors.white,
                        ),
                        SizedBox(width: 5), // Add a SizedBox for spacing
                        Text(
                          "Scanner QR Code",
                          style: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

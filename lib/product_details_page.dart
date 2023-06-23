import 'package:flutter/material.dart';
import 'package:paye_ton_kawa/models/product.dart';

class ProductDetailsPage extends StatelessWidget {
  final Product product;
  const ProductDetailsPage({Key? key, required this.product}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Text('Product Details Page'),
    );
  }
}

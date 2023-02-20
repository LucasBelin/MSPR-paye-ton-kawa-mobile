import React from "react"
import { SafeAreaView, StyleSheet, Text } from "react-native"
import { Product } from "../schemas/ProductSchemas"

export default function ProductDetails({ route }: any) {
  const product: Product = route.params.product
  return (
    <SafeAreaView>
      <Text>ProductDetails</Text>
      <Text>{product.id}</Text>
      <Text>{product.name}</Text>
      <Text>{product.stock}</Text>
      <Text>{product.details.color}</Text>
      <Text>{product.details.price}</Text>
      <Text>{product.details.description}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "rgb(243, 244, 246)",
    elevation: 3,
    shadowColor: "#171717",
  },
})

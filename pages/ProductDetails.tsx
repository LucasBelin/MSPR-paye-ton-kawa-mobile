import { AntDesign, Feather, Ionicons } from "@expo/vector-icons"
import React from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Product } from "../schemas/ProductSchemas"
import { invertColor, isCSSColor } from "../utils/colors-utils"

export default function ProductDetails({ route }: any) {
  const product: Product = route.params.product
  const color = isCSSColor(product.details.color) ? invertColor(product.details.color) : "white"

  return (
    <SafeAreaView>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 28, textAlign: "center", marginVertical: 30 }}>
        {product.name}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginBottom: 30 }}>
        <View
          style={{
            backgroundColor: isCSSColor(product.details.color) ? product.details.color : "#000",
            borderRadius: 18,
            paddingVertical: 10,
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons name="color-palette-sharp" size={24} color={color} />
          <Text
            style={{
              color: color,
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            {product.details.color}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#ff8360",
            borderRadius: 18,
            paddingVertical: 10,
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Feather name="package" size={24} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            {product.stock}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#7dce82",
            borderRadius: 18,
            paddingVertical: 10,
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <AntDesign name="tag" size={24} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            {parseInt(product.details.price).toFixed(2)}€
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          textAlign: "center",
          paddingHorizontal: 20,
        }}
      >
        {product.details.description}
      </Text>
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

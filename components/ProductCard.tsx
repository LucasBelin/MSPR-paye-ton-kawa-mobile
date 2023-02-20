import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"
import { NavigationProp } from "@react-navigation/native"
import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { Product } from "../schemas/ProductSchemas"

export default function ProductCard({ product, navigation }: { product: Product; navigation: NavigationProp<any> }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.property}>Name</Text>
        <Text style={styles.value}>{product.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.property}>Stock</Text>
        <Text style={styles.value}>{product.stock}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.property}>Price</Text>
        <Text style={styles.value}>{parseInt(product.details.price).toFixed(2)} €</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.property}>Color</Text>
        <Text style={styles.value}>{product.details.color}</Text>
      </View>
      <View style={styles.buttons}>
        <View>
          <Pressable
            style={styles.navigationButton}
            onPress={() => navigation.navigate("Product", { product: product })}
          >
            <Text style={styles.navigationText}>View details</Text>
            <AntDesign name="right" size={14} color="white" />
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.ar} onPress={() => console.log("AR")}>
            <MaterialCommunityIcons name="augmented-reality" size={26} color="rgb(59, 130, 246)" />
            <View style={styles.whiteCircle}></View>
          </Pressable>
        </View>
      </View>
    </View>
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
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(209, 213, 219)",
    paddingVertical: 5,
  },
  property: {
    flexGrow: 1,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  value: {
    fontSize: 12,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  navigationButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "rgb(59, 130, 246)",
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  navigationText: {
    textTransform: "uppercase",
    color: "white",
    marginRight: 5,
    fontSize: 12,
  },
  ar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    justifySelf: "flex-end",
    position: "relative",
    backgroundColor: "rgb(59, 130, 246)",
    borderRadius: 5,
  },
  whiteCircle: {
    width: 17,
    height: 17,
    backgroundColor: "white",
    position: "absolute",
    borderRadius: 0,
    top: 5,
    right: 5,
    zIndex: -1,
  },
})

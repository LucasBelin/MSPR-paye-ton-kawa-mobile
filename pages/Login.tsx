import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { Image, Pressable, StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/logo.png")} style={{ width: 150, height: 150 }} />
      </View>
      <View style={styles.qrContainer}>
        <View style={styles.scan}>
          <View style={{ position: "absolute", width: 200, height: 220, backgroundColor: "rgb(59, 130, 246)" }}></View>
          <View style={{}}></View>
        </View>
        <TouchableHighlight>
          <Pressable
            style={styles.button}
            android_ripple={{
              color: "white",
              borderless: false,
              radius: 200,
            }}
          >
            <Ionicons name="qr-code-outline" size={24} color="white" />
            <Text style={{ color: "white", marginLeft: 10, fontSize: 18 }}>Scan QR code</Text>
          </Pressable>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "white",
  },
  qrContainer: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 100,
    backgroundColor: "rgb(59, 130, 246)",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  scan: {
    position: "absolute",
    backgroundColor: "transparent",
    borderWidth: 3,
    borderColor: "white",
    width: 250,
    height: 250,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "transparent",
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    backgroundColor: "white",
    width: 250,
    height: 250,
    borderRadius: 500,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
})

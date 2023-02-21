import { Ionicons } from "@expo/vector-icons"
import { BarCodeScanner } from "expo-barcode-scanner"
import React, { useState } from "react"
import { Image, Pressable, StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import RandomQRCode from "../components/RandomQRCode"

export default function Login() {
  const [hasPermission, setHasPermission] = useState(false)
  const [scanning, setScanning] = useState(false)
  const [scanned, setScanned] = useState(false)
  const [permissionResponse, setPermissionResponse] = BarCodeScanner.usePermissions()

  async function getCameraPermission() {
    const { status } = await BarCodeScanner.requestPermissionsAsync()
    setHasPermission(status === "granted")
  }

  async function startScanning() {
    await getCameraPermission()
    if (hasPermission) setScanning(true)
  }

  function handleBarCodeScanned({ type, data }: any) {
    setScanned(true)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        padding: 30,
      }}
    >
      <View style={styles.logo}>
        <Image source={require("../assets/logo.png")} style={{ width: 150, height: 150 }} />
      </View>
      <Text
        style={{
          color: "white",
          marginBottom: 80,
          textAlign: "center",
          fontSize: 18,
          fontFamily: "sans-serif-medium",
        }}
      >
        To login please scan the QR Code you received in your email.
      </Text>
      <View>
        <View style={styles.topLeft}></View>
        <View style={styles.topRight}></View>
        <View style={styles.bottomLeft}></View>
        <View style={styles.bottomRight}></View>
        <RandomQRCode />
      </View>
      <TouchableHighlight>
        <Pressable
          style={styles.button}
          android_ripple={{
            color: "white",
            borderless: false,
            radius: 200,
          }}
          onPress={() => startScanning()}
        >
          <Ionicons name="qr-code-outline" size={24} color="white" />
          <Text style={{ color: "white", marginLeft: 10, fontSize: 18 }}>Scan QR Code</Text>
        </Pressable>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 80,
  },
  logo: {
    backgroundColor: "white",
    width: 200,
    height: 200,
    borderRadius: 500,
    paddingBottom: 30,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  topLeft: {
    position: "absolute",
    top: -40,
    left: -40,
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    borderColor: "white",
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 5,
  },
  topRight: {
    position: "absolute",
    top: -40,
    right: -40,
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    borderColor: "white",
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderTopRightRadius: 5,
  },
  bottomLeft: {
    position: "absolute",
    bottom: -40,
    left: -40,
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    borderColor: "white",
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderBottomLeftRadius: 5,
  },
  bottomRight: {
    position: "absolute",
    bottom: -40,
    right: -40,
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    borderColor: "white",
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderBottomRightRadius: 5,
  },
})

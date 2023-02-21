import QRCode from "react-native-qrcode-svg"

export default function RandomQRCode() {
  function generateRandomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  return <QRCode value={generateRandomString()} size={200} color="white" backgroundColor="transparent" />
}

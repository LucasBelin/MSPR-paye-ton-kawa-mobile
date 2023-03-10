import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeToken = async (jwt: string) => {
  try {
    await AsyncStorage.setItem("token", jwt)
  } catch (e) {
    alert("Failed to save authentication token, please close the app and try again.")
  }
}

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem("token")
    return value
  } catch (e) {
    alert("Failed to get authentication token, please close the app and try again.")
  }
}

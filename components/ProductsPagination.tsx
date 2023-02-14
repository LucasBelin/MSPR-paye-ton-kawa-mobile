import { AntDesign } from "@expo/vector-icons"
import {
  Dimensions,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputEndEditingEventData,
  View,
} from "react-native"

type PaginationProps = {
  page: number
  setPage: (page: number) => void
  productsPerPage: number
  setProductsPerPage: (productsPerPage: number) => void
  maxPage: number
  nbProducts: number
}

export default function ProductsPagination({
  page,
  setPage,
  productsPerPage,
  setProductsPerPage,
  maxPage,
  nbProducts,
}: PaginationProps) {
  function handleNextPage() {
    if (page < nbProducts / productsPerPage) setPage(page + 1)
  }

  function handlePreviousPage() {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  function handleProductsPerPageChange(e: NativeSyntheticEvent<TextInputEndEditingEventData>) {
    const value = e.nativeEvent.text
    setPage(1)

    if (isNaN(parseInt(value)) || parseInt(value) < 1) {
      setProductsPerPage(1)
      return
    }
    if (parseInt(value) > nbProducts) {
      setProductsPerPage(nbProducts)
      return
    }
    setProductsPerPage(parseInt(value))
  }

  return (
    <View style={styles.header}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", marginRight: 10 }}>
        <Text style={{ color: "white", marginRight: 5 }}>Products shown</Text>
        <TextInput
          defaultValue={productsPerPage.toString()}
          keyboardType="numeric"
          style={styles.input}
          onEndEditing={handleProductsPerPageChange}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable
          onPress={() => setPage(1)}
          style={{ marginRight: 10, backgroundColor: "rgba(243, 244, 246, 0.2)", padding: 1, borderRadius: 3 }}
        >
          <AntDesign name="doubleleft" size={24} color="white" />
        </Pressable>
        <Pressable
          onPress={handlePreviousPage}
          style={{ marginRight: 10, backgroundColor: "rgba(243, 244, 246, 0.2)", padding: 1, borderRadius: 3 }}
        >
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
        <Pressable style={{ marginRight: 10 }}>
          <Text style={{ color: "white", fontSize: 18 }}>
            {page}/{maxPage}
          </Text>
        </Pressable>
        <Pressable
          onPress={handleNextPage}
          style={{ marginRight: 10, backgroundColor: "rgba(243, 244, 246, 0.2)", padding: 1, borderRadius: 3 }}
        >
          <AntDesign name="right" size={24} color="white" />
        </Pressable>
        <Pressable
          onPress={() => setPage(maxPage)}
          style={{ marginRight: 10, backgroundColor: "rgba(243, 244, 246, 0.2)", padding: 1, borderRadius: 3 }}
        >
          <AntDesign name="doubleright" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  spinner: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [
      {
        translateY: -27,
      },
    ],
  },
  spinnerText: {
    fontSize: 18,
    color: "rgb(59, 130, 246)",
    fontWeight: "bold",
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgb(59, 130, 246)",
    padding: 5,
    paddingTop: 45,
    paddingBottom: 15,
  },
  input: {
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
    color: "white",
    padding: 0,
    width: 50,
    textAlign: "center",
  },
})

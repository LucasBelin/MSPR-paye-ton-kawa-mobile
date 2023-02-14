import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { ActivityIndicator, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import ProductCard from "../components/ProductCard"
import ProductsPagination from "../components/ProductsPagination"
import { Product, ProductsResponseSchema } from "../schemas/ProductSchemas"

export default function Products({ navigation }: any) {
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(4)

  const { isLoading, isError, isSuccess } = useQuery(["products"], async () => {
    const res = await axios.get("https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products")
    ProductsResponseSchema.safeParse(res.data)
    setProducts(res.data)
    return res.data
  })

  const indexOfLastProduct = page * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct)
  const maxPage = Math.ceil(products.length / productsPerPage)

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={styles.spinner}>
          <ActivityIndicator size={54} color="rgb(59, 130, 246)" animating={isLoading} />
          <Text style={styles.spinnerText}>Loading products ...</Text>
        </View>
      )}
      {isSuccess && (
        <SafeAreaView style={{ flex: 1 }}>
          <ProductsPagination
            page={page}
            setPage={setPage}
            maxPage={maxPage}
            productsPerPage={productsPerPage}
            setProductsPerPage={setProductsPerPage}
            nbProducts={products.length}
          />
          <ScrollView style={{ padding: 5 }}>
            {currentProducts.map(product => (
              <ProductCard key={product.id} product={product} navigation={navigation} />
            ))}
          </ScrollView>
        </SafeAreaView>
      )}
    </SafeAreaView>
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
    padding: 10,
    paddingTop: 45,
    paddingBottom: 15,
  },
  inputLabel: {
    position: "absolute",
    zIndex: 1,
    top: -10,
    left: 10,
    paddingHorizontal: 5,
    backgroundColor: "rgb(59, 130, 246)",
    color: "white",
  },
  input: {
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
    color: "white",
    padding: 5,
    width: 150,
  },
})

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Login from "./pages/Login"
import ProductDetails from "./pages/ProductDetails"
import Products from "./pages/Products"

const Stack = createNativeStackNavigator()

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: "rgb(59, 130, 246)",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "white",
            },
          }}
        >
          <Stack.Screen name="Login" component={Login} options={{ header: props => null }} />
          <Stack.Screen
            name="Products"
            component={Products}
            options={{
              header: props => null,
            }}
          />
          <Stack.Screen name="Product" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
}

export default App

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./data/screens/ProductsDetailsScreen";
import ProductsScreen from "./data/screens/ProductsScreen";
import ShoppingCart from "./data/screens/ShoppingCart";
import { Pressable, Text } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "gray" } }}
      >
        <stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("shopping-Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="Shopping-cart" size={18} color="red" />
                <Text
                  style={{ color: "white", marginLeft: 5, fontWeight: "500" }}
                >
                  4
                </Text>
              </Pressable>
            ),
          })}
        />
        <stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <stack.Screen name="shopping-Cart" component={ShoppingCart} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

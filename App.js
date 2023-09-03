import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProductsScreen from "./src/data/screens/ProductsScreen";
import ProductDetailsScreen from "./src/data/screens/ProductsDetailsScreen";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      <ProductDetailsScreen />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, FlatList } from "react-native";
import ProductsScreen from "./src/data/screens/ProductsScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <ProductsScreen />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});

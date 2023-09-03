import { View, Image, FlatList, StyleSheet } from "react-native";
import products from "../products";

const ProductsScreen = () => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsScreen;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});

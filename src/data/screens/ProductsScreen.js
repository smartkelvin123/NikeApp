import { View, Image, FlatList, StyleSheet, Pressable } from "react-native";
import products from "../products";
// import { useNavigation } from "@react-navigation/native";

const ProductsScreen = ({ navigation }) => {
  // const navigation = useNavigation()     not destruction
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("ProductDetails")}
            style={styles.itemContainer}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
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

import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import cart from "../../data/cart";
import CartListItem from "../../component/CartListItem";

const ShoppingCartTotals = () => {
  <View style={styles.totalContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>$320.0 US$$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>delivery</Text>
      <Text style={styles.text}>10,000 US$$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text> style={styles.textBold}$620.0 US$$</Text>
    </View>
  </View>;
};

const ShoppingCart = () => {
  return (
    <View>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout </Text>
      </Pressable>
    </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalContainer: {
    padding: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    margin: 20,
    borderColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  textBold: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "500",
  },
  button: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useContext } from "react";
import { Link, router } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { UpdateItemContext } from "../context/UpdateItemContext";

export default function ProductListItem({ item, handleDelete }) {
  const { setProduct, product } = useContext(UpdateItemContext);
  return (
    <View style={styles.productItem}>
      <View>
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.productPrice}>Preço: R$ {item.productPrice}</Text>
        {/* <Text>id: {item.ID}</Text> */}
      </View>
      <View style={styles.rowContainer}>
        <Pressable onPress={handleDelete}>
          <FontAwesome5 name="trash-alt" size={24} color="#000" />
        </Pressable>
        <Link href={"/update/product"} onPress={() => setProduct(item)}>
          <FontAwesome5 name="pen-alt" size={24} color="#000" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  productItem: {
    padding: 12,
    backgroundColor: "#f8f8f8",
    marginVertical: 8,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 16,
    color: "gray",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
});

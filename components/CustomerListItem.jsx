import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useContext } from "react";

export default function CustomerListItem({ item, handleDelete }) {
  return (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.customerName}</Text>
      <Text style={styles.productPrice}>Endereçoo: {item.customerAddress}</Text>
      <Text>id: {item.ID}</Text>
      <Pressable onPress={handleDelete}>
        <Text>Deletar</Text>
      </Pressable>
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
  },
  productName: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 16,
    color: "gray",
  },
});

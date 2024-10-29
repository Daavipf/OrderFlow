import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useIsFocused } from "@react-navigation/native";
import ListItem from "../../components/ProductListItem";

export default function Home() {
  return (
    <View>
      <Text>Página principal:</Text>
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

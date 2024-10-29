import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useIsFocused } from "@react-navigation/native";
import ListItem from "../../components/ListItem";

export default function Home() {
  const { getItems, deleteItem } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function fetchData() {
      const data = await getItems("Products");
      setProducts(data);
    }

    if (isFocused) {
      fetchData();
    }
  }, [getItems, isFocused]);

  async function handleDeleteItem(item) {
    //console.log(item);
    const data = await deleteItem("Products", item.ID);
    setProducts(data);
    alert("Produto Removido");
  }

  return (
    <View>
      <Text>Página principal:</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ListItem item={item} handleDelete={() => handleDeleteItem(item)} />
        )}
        ListEmptyComponent={<Text>Nenhum produto cadastrado.</Text>}
      />
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

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Button,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useIsFocused } from "@react-navigation/native";
import ProductListItem from "../../components/ProductListItem";
import { Link } from "expo-router";

export default function Products() {
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
    <View style={styles.container}>
      <Link href="/InsertProducts" asChild>
        <Pressable style={styles.addButton}>
          <Text style={styles.text}>Adicionar +</Text>
        </Pressable>
      </Link>
      <Text>Todos Cadastrados:</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductListItem
            item={item}
            handleDelete={() => handleDeleteItem(item)}
          />
        )}
        ListEmptyComponent={<Text>Nenhum produto cadastrado.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
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
  addButton: {
    alignSelf: "flex-end",
    backgroundColor: "#0891b2",
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 8,
  },
  text: {
    color: "#FFF",
  },
});

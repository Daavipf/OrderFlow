import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useIsFocused } from "@react-navigation/native";
import CustomerListItem from "../../components/CustomerListItem";
import { Link } from "expo-router";

export default function Customers() {
  const { getItems, deleteItem } = useContext(AppContext);
  const [customers, setCustomers] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function fetchData() {
      const data = await getItems("Customers");
      setCustomers(data);
    }

    if (isFocused) {
      fetchData();
    }
  }, [getItems, isFocused]);

  async function handleDeleteItem(item) {
    //console.log(item);
    const data = await deleteItem("Customers", item.ID);
    setCustomers(data);
    alert("Cliente Removido");
  }

  return (
    <View>
      <Link href="/InsertCustomers">
        <Text>Cadastrar +</Text>
      </Link>
      <Text>Clientes:</Text>
      <FlatList
        data={customers}
        renderItem={({ item }) => (
          <CustomerListItem
            item={item}
            handleDelete={() => handleDeleteItem(item)}
          />
        )}
        ListEmptyComponent={<Text>Nenhum cliente cadastrado.</Text>}
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

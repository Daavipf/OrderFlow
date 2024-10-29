import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { useForm } from "react-hook-form";
import { AppContext } from "../../../context/AppContext";
import InputField from "../../../components/InputField";

export default function EditProduct() {
  const { id } = useLocalSearchParams();
  const { getItem, updateItem } = useContext(AppContext);
  const [product, setProduct] = useState({});
  const { control, handleSubmit } = useForm({
    defaultValues: {
      productName: product.productName,
      productPrice: product.productPrice,
    },
  });
  const onSubmit = async (data) => {
    await storeItem("Products", data);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getItem("Products", id);
      setProduct(data);
    }
    fetchData();
  }, [id, getItem]);

  return (
    <View>
      <Text>Editar Produto</Text>
      <InputField
        placeholder={"Nome"}
        control={control}
        name={"productName"}
        value={product.productName}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

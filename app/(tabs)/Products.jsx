import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AppContext } from "../../context/AppContext";

export default function Products() {
  const { storeItem } = useContext(AppContext);
  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await storeItem("Products", data);
  };

  return (
    <View>
      <Text>Cadastrar Produtos</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Nome do produto"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="productName"
      />
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Preço"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="productPrice"
      />
      <Button title="Cadastrar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

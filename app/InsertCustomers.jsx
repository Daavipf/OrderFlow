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
import { AppContext } from "../context/AppContext";
import InputField from "../components/InputField";

export default function InsertCustomers() {
  const { storeItem } = useContext(AppContext);
  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await storeItem("Customers", data);
  };

  return (
    <View>
      <Text>Cadastrar Clientes</Text>
      <InputField
        control={control}
        placeholder={"Nome do Cliente"}
        name={"customerName"}
        keyboardType={"default"}
      />
      <InputField
        control={control}
        placeholder={"Endereço do Cliente"}
        name={"customerAddress"}
        keyboardType={"default"}
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

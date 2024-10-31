import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AppContext } from "../context/AppContext";
import InputField from "../components/InputField";
import { useRouter } from "expo-router";

export default function InsertCustomers() {
  const { storeItem } = useContext(AppContext);
  const { control, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    await storeItem("Customers", data);
    router.replace("/Customers");
  };

  return (
    <View style={styles.container}>
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
      <Pressable onPress={handleSubmit(onSubmit)} style={styles.submitButton}>
        <Text style={styles.text}>Cadastrar</Text>
      </Pressable>
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  submitButton: {
    marginTop: 16,
    backgroundColor: "#0891b2",
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 8,
  },
  text: {
    color: "#FFF",
  },
});

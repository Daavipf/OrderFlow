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

export default function InsertProducts() {
  const { storeItem } = useContext(AppContext);
  const { control, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    await storeItem("Products", data);
    router.replace("/Products");
  };

  return (
    <View style={styles.container}>
      <InputField
        control={control}
        placeholder={"Nome do Produto"}
        name={"productName"}
        keyboardType={"default"}
      />
      <InputField
        control={control}
        placeholder={"Preço"}
        name={"productPrice"}
        keyboardType={"numeric"}
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

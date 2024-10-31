import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context/AppContext";
import { UpdateItemContext } from "../../context/UpdateItemContext";
import InputField from "../../components/InputField";

export default function EditProduct() {
  // const { id } = useLocalSearchParams();
  const { getItem, updateItem } = useContext(AppContext);
  const { product } = useContext(UpdateItemContext);
  const router = useRouter();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      customerName: product.customerName,
      customerAddress: product.customerAddress,
    },
  });
  const onSubmit = async (data) => {
    data["ID"] = product.ID;
    await updateItem("Customers", data);
    router.replace("/Customers");
  };

  return (
    <View style={styles.container}>
      <Text>Editar Cliente</Text>
      <InputField
        placeholder={"Nome"}
        control={control}
        name={"customerName"}
        value={product.productName}
        keyboardType={"default"}
      />
      <InputField
        placeholder={"Endereço"}
        control={control}
        name={"customerAddress"}
        value={product.customerAddress}
        keyboardType={"default"}
      />
      <Pressable onPress={handleSubmit(onSubmit)} style={styles.submitButton}>
        <Text style={styles.text}>Atualizar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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

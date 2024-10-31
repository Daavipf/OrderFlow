import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { AppProvider } from "../context/AppContext";
import { UpdateItemProvider } from "../context/UpdateItemContext";

export default function RootLayout() {
  return (
    <AppProvider>
      <UpdateItemProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="InsertProducts"
            options={{ title: "Cadastrar novo" }}
          />
          <Stack.Screen
            name="InsertCustomers"
            options={{ title: "Cadastrar novo" }}
          />
        </Stack>
      </UpdateItemProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({});

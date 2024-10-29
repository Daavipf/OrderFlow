import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

export default function InputField({
  control,
  placeholder,
  name,
  keyboardType,
  value,
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      defaultValue={value}
      render={({ field: { onChange, value } }) => (
        <TextInput
          placeholder={placeholder}
          onChangeText={onChange} // permite edição
          value={value} // valor controlado pelo Controller
          keyboardType={keyboardType}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

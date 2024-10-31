import { StyleSheet, TextInput, View, Dimensions } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const { width } = Dimensions.get("screen");

export default function InputField({
  control,
  placeholder,
  name,
  keyboardType,
  firstValue,
}) {
  return (
    <View style={styles.inputContainer}>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        defaultValue={firstValue}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder={placeholder}
            onChangeText={onChange} // permite edição
            value={value} // valor controlado pelo Controller
            keyboardType={keyboardType}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: width - 50,
    padding: 8,
    borderBottomColor: "#0006",
    borderBottomWidth: 1,
  },
});

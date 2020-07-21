import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Amount() {
  return (
    <View style={styles.container}>
      <Text>Amound</Text>
      <TextInput
        keyboardType="decimal-pad"
        style={{ backgroundColor: "red", width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
    height: 80,
    backgroundColor: "green",
    borderRadius: 15,
    flexDirection: "row",
  },
});

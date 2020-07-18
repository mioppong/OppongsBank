import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TransferComponent() {
  return (
    <View style={styles.container}>
      <Text>Transfer Co</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 200,
    backgroundColor: "red",
    borderRadius: 20,
    marginVertical: 10,
  },
});

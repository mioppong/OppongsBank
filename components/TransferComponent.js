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
    height: 100,
    backgroundColor: "red",
  },
});

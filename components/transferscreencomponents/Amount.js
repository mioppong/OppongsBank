import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Amount() {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 80,
    backgroundColor: "green",
    marginVertical: 10,
    borderRadius: 15,
  },
});

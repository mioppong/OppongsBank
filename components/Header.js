import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./Screen";

export default function Header({ title, style }) {
  return (
    <Screen style={[styles.container, style]}>
      <Text>{title}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "red",
  },
});

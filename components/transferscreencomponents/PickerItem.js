import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import { color } from "react-native-reanimated";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 120,
    height: 35,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    color: colors.third,
    textAlign: "center",
  },
});

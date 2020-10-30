import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import colors from "../../config/colors";

export default function PickerItem({ label, onPress }) {

  // i think this is the item, which is rendered in the list of items to pick
  //so this component is each item in the list of choosable items
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
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: colors.third,
    textAlign: "center",
  },
});

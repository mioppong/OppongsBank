import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ fontSize: 20, color: "red" }}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

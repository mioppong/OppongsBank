import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";
import Icon from "./Icon";

function AppButton({ style, iconSize, title, onPress, iconName }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {iconName && (
        <Icon size={iconSize} name={iconName} iconColor={colors.fourth} />
      )}
      {title && <Text style={[styles.text]}> {title} </Text>}
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: 80,
    height: 80,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,

    borderColor: colors.fifth,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: colors.fourth,
    margin: -5,
  },
});

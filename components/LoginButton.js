import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";
import Icon from "./Icon";

function LoginButton({ style, iconSize, title, onPress, iconName, iconColor }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}> {title} </Text>
      <Icon size={iconSize} name={iconName} iconColor={iconColor} />
    </TouchableOpacity>
  );
}

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: colors.primary,
    width: 150,
    height: 60,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 10,
  },

  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.third,
  },
});

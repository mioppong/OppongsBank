import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function TitleText({ title, style }) {
  //This returns, title text component, 
  //text, but big and kind acolorful i think lool
  return (
    <View>
      <Text style={[styles.titleStyles, style]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyles: {
    color: colors.third,
    fontSize: 50,
    fontWeight: "bold",
  },
});

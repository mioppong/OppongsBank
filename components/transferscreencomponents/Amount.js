import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import colors from "../../config/colors";
import { color } from "react-native-reanimated";

export default function Amount() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Amount : </Text>
      </View>

      <View style={styles.textInputContainer}>
        <TextInput keyboardType="decimal-pad" style={styles.textInput} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
    height: 70,
    borderRadius: 15,
    flexDirection: "row",
    marginVertical: 20,
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    color: colors.fourth,
  },
  textContainer: {
    justifyContent: "center",
  },
  textInput: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: colors.fifth,
    fontSize: 30,
    height: 40,
  },
  textInputContainer: {
    justifyContent: "center",
    flex: 1,
  },
});

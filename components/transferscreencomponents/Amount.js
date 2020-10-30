import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import colors from "../../config/colors";

export default function Amount(props) {
  // this component, i this is for the amount you are transfering 
  // or the amount you are depositing, or maybe its the main amount component, not sure lool
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Amount : </Text>
      </View>

      <View style={styles.textInputContainer}>
        <TextInput
          onChangeText={(event) => props.getAmount(event)}
          keyboardType="decimal-pad"
          style={styles.textInput}
        />
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
    color: colors.fourth,
    fontSize: 30,
    height: 40,
  },
  textInputContainer: {
    justifyContent: "center",
    flex: 1,
  },
});

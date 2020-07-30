import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

export default function WillHave({ date, amount }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        In <Text children={date} style={styles.dateText} /> you will have{" "}
        <Text
          children={"$-" + amount.toLocaleString()}
          style={styles.amountText}
        />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  amountText: {
    color: colors.fifth,
    fontSize: 19,
  },

  container: {
    borderColor: colors.fifth,
    borderWidth: 0.1,
    margin: 5,
    width: "100%",
    borderRadius: 4,
  },

  dateText: {
    color: colors.fifth,
    fontSize: 15,
  },

  mainText: {
    color: colors.fourth,
  },
});

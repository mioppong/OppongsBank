import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

export default function WillHave({ date, amount }) {
  //SO, FOR THE GIC SCREEN,
  //THERE IS LIKE 9 SENTENCES, WHICH SAYS HOW MUCH YOU WILL MAKE X IN Y AMOUNT OF TIME,
  //THIS COMPONENT DOES NOT CALCULATE BUT RENDERS HOW IT LOOKS
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        In <Text children={date} style={styles.dateText} /> you will have{" "}
        <Text
          children={
            "$ " +
            amount.toLocaleString(undefined, { minimumFractionDigits: 2 })
          }
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

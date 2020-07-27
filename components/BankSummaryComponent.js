import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";

//this component is right below the credit card component
//eventually we want to connect this to a backend which summarizes your account balance
export default function BankSummaryComponent({ totalHave, totalOwe }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={{ color: colors.fifth }}> You Have</Text>
        <Text style={{ textAlign: "center", margin: 10, color: colors.fourth }}>
          {totalHave}
        </Text>
      </View>

      <View style={styles.lineSeparator} />
      <View>
        <Text style={{ color: colors.fifth }}> You Owe</Text>
        <Text style={{ textAlign: "center", margin: 10, color: colors.fourth }}>
          {totalOwe}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  accountTypeContainer: {
    flex: 1,
  },

  accountTypeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.mediumGray,
    textAlign: "center",
  },
  balanceContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  balanceText: {
    fontSize: 40,
    fontWeight: "900",
    textAlign: "center",
    color: colors.fourth,
  },

  container: {
    width: 280,
    height: 100,
    padding: 20,
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.fifth,
  },
  lineSeparator: {
    width: 2,
    height: 60,
    borderRadius: 10,
    backgroundColor: colors.mediumGray,
  },
});

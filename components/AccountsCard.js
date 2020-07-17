import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function AccountsCard({ accountType, balance, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text children={accountType} style={styles.accountTypeText} />
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText} children={balance} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  accountTypeContainer: {
    flex: 1,
  },

  accountTypeText: {
    fontSize: 20,
    color: colors.fifth,
    textAlign: "center",
  },
  balanceContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  balanceText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.fourth,
  },

  container: {
    width: 180,
    height: 108,
    backgroundColor: colors.primary,
    marginTop: 20,
    borderRadius: 15,
    borderColor: colors.fifth,
    padding: 10,
    borderWidth: 1,
  },
});

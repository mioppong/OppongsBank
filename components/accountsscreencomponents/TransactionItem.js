import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../config/colors";

export default function TransactionItem({ from, to, amount }) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.fromStorage}>
          <Text style={styles.typeTitleText} children={"From: "} />
          {from}
        </Text>
        <Text style={styles.fromStorage}>
          <Text style={styles.typeTitleText} children={"To: "} />
          {to}
        </Text>

        <Text style={styles.fromStorage}>
          <Text style={styles.typeTitleText} children={"Amount: "} />
          {amount}
        </Text>
      </View>
      <View style={styles.coolLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    flex: 1,
    marginVertical: 20,
    backgroundColor: "red",
  },
  coolLine: {
    width: "80%",
    height: 1,
    backgroundColor: colors.secondary,
    alignSelf: "center",
  },
  fromStorage: {
    color: colors.fourth,
    fontWeight: "bold",
  },
  typeTitleText: {
    color: colors.third,
    fontSize: 15,
    fontWeight: "bold",
  },
});

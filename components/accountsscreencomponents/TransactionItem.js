import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../config/colors";

export default function TransactionItem({ from, to, amount, type, payee }) {
  console.log("transaction type", type);
  if (type === "TRANSFER") {
    return (
      <View>
        <View style={{ marginBottom: -20, marginTop: 30 }}>
          <Text
            children={type}
            style={{
              color: colors.fifth,
              fontWeight: "bold",
              textAlign: "center",
            }}
          />
        </View>

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
  } else if (type === "DEPOSIT") {
    return (
      <View>
        <Text> type: {type}</Text>
        <Text>to </Text>

        <Text>{to} </Text>

        <Text>amount </Text>
        <Text>{amount} </Text>
      </View>
    );
  } else if (type === "PURCHASE") {
    return (
      <View>
        <Text> type: {type}</Text>

        <Text>payee </Text>
        <Text>{payee} </Text>

        <Text>amount </Text>
        <Text>{amount} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginVertical: 10,
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

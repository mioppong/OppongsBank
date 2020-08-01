import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

export default function TransactionItem({ from, to, amount, type, payee }) {
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
            <Text style={styles.typeTitleText} children={"To : "} />
            {to}
          </Text>

          <Text style={styles.fromStorage}>
            <Text style={styles.typeTitleText} children={"Amount: "} />
            {amount}
          </Text>
        </View>
      </View>
    );
  } else if (type === "PURCHASE") {
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
            <Text style={styles.typeTitleText} children={"Payee: "} />
            {payee}
          </Text>

          <Text style={styles.fromStorage}>
            <Text style={styles.typeTitleText} children={"Amount: "} />
            {amount}
          </Text>
        </View>
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

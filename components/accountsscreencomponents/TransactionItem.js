import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import colors from "../../config/colors";

export default function TransactionItem({ from, to, amount, type, payee }) {
  amount = parseInt(amount).toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
  if (type === "TRANSFER") {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Text
            children={type}
            style={{
              color: colors.fifth,
              fontWeight: "bold",
              textAlign: "center",
            }}
          />
        </View>
        <ScrollView horizontal={true}>
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
        </ScrollView>
        <View style={styles.coolLine} />
      </View>
    );
  } else if (type === "DEPOSIT") {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Text
            children={type}
            style={{
              color: colors.fifth,
              fontWeight: "bold",
              textAlign: "center",
            }}
          />
        </View>
        <ScrollView horizontal={true}>
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
        </ScrollView>

        <View style={styles.coolLine} />
      </View>
    );
  } else if (type === "PURCHASE") {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Text
            children={type}
            style={{
              color: colors.fifth,
              fontWeight: "bold",
              textAlign: "center",
            }}
          />
        </View>

        <ScrollView horizontal={true}>
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
        </ScrollView>

        <View style={styles.coolLine} />
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
    //alignItems: "center",
    flex: 1,
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
    margin: 10,
  },
  mainContainer: {
    marginTop: 20,
  },
  typeTitleText: {
    color: colors.third,
    fontSize: 15,
    fontWeight: "bold",
  },
});

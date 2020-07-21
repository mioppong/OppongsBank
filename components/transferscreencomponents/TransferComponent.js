import React, { useState } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import colors from "../../config/colors";
import { color } from "react-native-reanimated";
import AccountPicker from "./AccountPicker";

export default function TransferComponent() {
  const [selectedAccount, setSelectedAccount] = useState("java");
  const allAccounts = [
    { label: "Checking 1", id: 1 },
    { label: "Checking 2", id: 2 },
    { label: "Savings", id: 3 },
    { label: "GIC", id: 4 },
    { label: "Credit Card", id: 5 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.transferFrom}>
        <Text style={styles.componentTitle}>Transfer From</Text>
        <View
          style={{
            marginTop: 60,
            width: "90%",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <AccountPicker
            selectedItem={selectedAccount}
            onSelectItem={(item) => setSelectedAccount(item)}
            items={allAccounts}
            placeholder="Account"
            icon="bank-transfer-out"
          />
        </View>
      </View>

      <View
        style={{
          width: 2,
          height: 90,
          backgroundColor: colors.third,
          marginTop: 80,
          borderRadius: 10,
        }}
      />

      <View style={styles.transferFrom}>
        <Text style={styles.componentTitle}>Transfer To</Text>

        <View
          style={{
            marginTop: 60,
            width: "90%",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <AccountPicker
            selectedItem={selectedAccount}
            onSelectItem={(item) => setSelectedAccount(item)}
            items={allAccounts}
            placeholder="Account"
            icon="bank-transfer-in"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  componentTitle: {
    fontSize: 20,
    color: colors.fourth,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    width: "80%",
    height: 200,
    borderRadius: 20,
    marginVertical: 10,
    flexDirection: "row",
    borderWidth: 4,
    borderColor: "green",
  },
  transferFrom: {
    width: "50%",
    height: "20%",
    marginVertical: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
  },
});

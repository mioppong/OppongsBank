import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import AccountPicker from "./AccountPicker";

export default function TransferComponent(props) {
  const [selectedAccount1, setSelectedAccount1] = useState();
  const [selectedAccount2, setSelectedAccount2] = useState();

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
        <View style={styles.containerChooseAccount}>
          <AccountPicker
            selectedItem={selectedAccount1}
            onSelectItem={(item) => {
              setSelectedAccount1(item);
              props.from(item);
            }}
            title="FROM"
            items={allAccounts}
            placeholder="Account"
            icon="bank-transfer-out"
          />
        </View>
      </View>

      <View style={styles.lineInMiddle} />

      <View style={styles.transferFrom}>
        <Text style={styles.componentTitle}>Transfer To</Text>

        <View style={styles.containerChooseAccount}>
          <AccountPicker
            title="TO"
            selectedItem={selectedAccount2}
            onSelectItem={(item) => {
              setSelectedAccount2(item);
              props.to(item);
            }}
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
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginVertical: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.fifth,
  },
  containerChooseAccount: {
    marginTop: 60,
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  lineInMiddle: {
    width: 1,
    height: 90,
    backgroundColor: colors.fifth,
    marginTop: 80,
    borderRadius: 10,
  },
  transferFrom: {
    width: "50%",
    height: "20%",
    marginVertical: 10,
    alignItems: "center",
  },
});

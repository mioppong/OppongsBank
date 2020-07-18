import React, { Component } from "react";
import { Text, StyleSheet, Button, View, ScrollView } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import AccountsCard from "../components/AccountsCard";
import BankSummaryComponent from "../components/BankSummaryComponent";

export default class HomeScreen extends Component {
  accountPressedHandler = (args) => {
    const { navigation } = this.props;
    navigation.navigate(args, { level: 1, name: "oppong" });
  };

  render() {
    return (
      <Screen style={styles.container}>
        <View style={{ marginLeft: 40 }}>
          <TitleText title="Home" />
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AccountsCard
              accountType="Checking"
              balance="20.12"
              onPress={() => this.accountPressedHandler("Accounts")}
            />

            <AccountsCard
              accountType="Checking"
              balance="20.12"
              onPress={() => this.accountPressedHandler("Accounts")}
            />
            <AccountsCard
              accountType="Checking"
              balance="20.12"
              onPress={() => this.accountPressedHandler("Accounts")}
            />
            <AccountsCard accountType="Savings" balance="290.9" />
            <AccountsCard accountType="Credit Card" balance="290.00" />
          </View>

          <View style={styles.bankSummaryContainer}>
            <BankSummaryComponent />
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  bankSummaryContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    //alignItems: "center",
  },
});

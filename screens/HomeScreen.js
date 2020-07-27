import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import AccountsCard from "../components/AccountsCard";
import BankSummaryComponent from "../components/BankSummaryComponent";
import { connect } from "react-redux";

class HomeScreen extends Component {
  accountPressedHandler = (args) => {
    const { navigation } = this.props;

    switch (args) {
      case 1:
        navigation.navigate("Accounts", {
          name: this.props.checking1.name,
          balance: this.props.checking1.balance,
          transactions: this.props.checking1.transactions,
        });
        break;
      case 2:
        navigation.navigate("Accounts", {
          name: this.props.checking2.name,
          balance: this.props.checking2.balance,
          transactions: this.props.checking2.transactions,
        });
        break;
      case 3:
        navigation.navigate("Accounts", {
          name: this.props.savings.name,
          balance: this.props.savings.balance,
          transactions: this.props.savings.transactions,
        });
        break;
    }
  };

  render() {
    //console.log(this.props.checking1);
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
              accountType="Checking 1"
              balance="20.12"
              accountNumber="1"
              onPress={() => this.accountPressedHandler(1)}
            />

            <AccountsCard
              accountType="Checking 2"
              balance="20.12"
              accountNumber="2"
              onPress={() => this.accountPressedHandler(2)}
            />
            <AccountsCard
              accountNumber="3"
              accountType="Savings"
              balance="290.9"
              onPress={() => this.accountPressedHandler(3)}
            />
            <AccountsCard
              accountType="GIC"
              balance="20.12"
              accountNumber="4"
              onPress={() => this.accountPressedHandler(4)}
            />
            <AccountsCard
              accountNumber="5"
              accountType="Credit Card"
              balance="290.00"
              onPress={() => this.accountPressedHandler(5)}
            />
          </View>

          <View style={styles.bankSummaryContainer}>
            <BankSummaryComponent />
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    checking1: state.checking1,
    checking2: state.checking2,
    savings: state.savings,
  };
};

export default connect(mapStateToProps)(HomeScreen);

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

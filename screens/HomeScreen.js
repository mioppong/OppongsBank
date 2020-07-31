import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import AccountsCard from "../components/AccountsCard";
import BankSummaryComponent from "../components/BankSummaryComponent";
import { connect } from "react-redux";

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalHave: 0,
      totalOwe: 0,
    };
  }

  accountPressedHandler = (args) => {
    const { navigation } = this.props;

    switch (args) {
      case 1:
        navigation.navigate("Accounts", {
          balance: this.props.checking1.balance,
          id: this.props.checking1.id,
          name: this.props.checking1.name,
          transactions: this.props.checking1.transactions,
        });
        break;
      case 2:
        navigation.navigate("Accounts", {
          balance: this.props.checking2.balance,
          id: this.props.checking2.id,
          name: this.props.checking2.name,
          transactions: this.props.checking2.transactions,
        });
        break;
      case 3:
        navigation.navigate("Accounts", {
          balance: this.props.savings.balance,
          id: this.props.savings.id,
          name: this.props.savings.name,
          transactions: this.props.savings.transactions,
        });
        break;

      case 4:
        navigation.navigate("GIC");
        break;
      case 5:
        navigation.navigate("Credit");
        break;
    }
  };

  componentDidMount() {
    const { navigation } = this.props;

    navigation.addListener("willFocus", () => {
      let totalHave =
        (this.props.checking1.balance > 0 ? this.props.checking1.balance : 0) +
        (this.props.checking2.balance > 0 ? this.props.checking2.balance : 0) +
        (this.props.savings.balance > 0 ? this.props.savings.balance : 0) +
        (this.props.gic.balance > 0 ? this.props.gic.balance : 0);

      let totalOwe =
        (this.props.checking1.balance < 0 ? this.props.checking1.balance : 0) +
        (this.props.checking2.balance < 0 ? this.props.checking2.balance : 0) +
        (this.props.savings.balance < 0 ? this.props.savings.balance : 0) +
        (this.props.gic.balance < 0 ? this.props.gic.balance : 0) +
        (this.props.creditcard.capacity - this.props.creditcard.balance);

      this.setState({
        totalHave: totalHave,
        totalOwe: totalOwe,
      });
    });
  }

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
              accountType="Checking 1"
              balance={this.props.checking1.balance}
              accountNumber="1"
              onPress={() => this.accountPressedHandler(1)}
            />

            <AccountsCard
              accountType="Checking 2"
              balance={this.props.checking2.balance}
              accountNumber="2"
              onPress={() => this.accountPressedHandler(2)}
            />
            <AccountsCard
              accountType="Savings"
              accountNumber="3"
              balance={this.props.savings.balance}
              onPress={() => this.accountPressedHandler(3)}
            />
            <AccountsCard
              accountType="GIC"
              balance={this.props.gic.balance}
              accountNumber="4"
              onPress={() => this.accountPressedHandler(4)}
            />
            <AccountsCard
              accountNumber="5"
              accountType="Credit Card"
              balance={this.props.creditcard.balance}
              onPress={() => this.accountPressedHandler(5)}
            />
          </View>

          <View style={styles.bankSummaryContainer}>
            <BankSummaryComponent
              totalHave={this.state.totalHave}
              totalOwe={this.state.totalOwe}
            />
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
    gic: state.gic,
    creditcard: state.creditcard,
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

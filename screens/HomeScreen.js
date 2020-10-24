import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import AccountsCard from "../components/AccountsCard";
import BankSummaryComponent from "../components/BankSummaryComponent";
import { connect } from "react-redux";
import { AdMobBanner } from "expo-ads-admob";
import config2 from '../config'

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalHave: 0,
      totalOwe: 0,
    };

    const { navigation } = this.props;

    navigation.addListener("willFocus", () => {
      
      let totalHave =
        (this.props.checking1.balance > 0 ? this.props.checking1.balance : 0) +
        (this.props.checking2.balance > 0 ? this.props.checking2.balance : 0) +
        (this.props.savings.balance > 0 ? this.props.savings.balance : 0) +
        (this.props.gic.balance > 0 ? this.props.gic.balance : 0) +
        (this.props.creditcard.balance > this.props.creditcard.capacity
          ? this.props.creditcard.balance - this.props.creditcard.capacity
          : 0);

      let totalOwe =
        (this.props.checking1.balance < 0 ? this.props.checking1.balance : 0) +
        (this.props.checking2.balance < 0 ? this.props.checking2.balance : 0) +
        (this.props.savings.balance < 0 ? this.props.savings.balance : 0) +
        (this.props.gic.balance < 0 ? this.props.gic.balance : 0) +
        (this.props.creditcard.balance < this.props.creditcard.capacity
          ? this.props.creditcard.capacity - this.props.creditcard.balance
          : 0);

      totalHave = parseInt(totalHave).toLocaleString(undefined, {
        minimumFractionDigits: 2,
      });

      totalOwe = parseInt(totalOwe).toLocaleString(undefined, {
        minimumFractionDigits: 2,
      });
      this.setState({
        totalHave: totalHave,
        totalOwe: totalOwe,
      });
    });
  }
  bannerError = (e) =>{
    console.log(e)
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


  render() {
    let formatedChecking1 = parseInt(
      this.props.checking1.balance
    ).toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });

    let formatedChecking2 = parseInt(
      this.props.checking2.balance
    ).toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });

    let formatedSavings = parseInt(this.props.savings.balance).toLocaleString(
      undefined,
      {
        minimumFractionDigits: 2,
      }
    );
    let formatedGic = parseInt(this.props.gic.balance).toLocaleString(
      undefined,
      {
        minimumFractionDigits: 2,
      }
    );
    let formatedCreditCard = parseInt(
      this.props.creditcard.balance
    ).toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });

    return (
      <Screen style={styles.container}>
        <View style={{ marginLeft: 40, flexDirection: "row" }}>
          <Image
            source={require("../assets/logo.png")}
            style={{
              width: 40,
              height: 40,
              alignSelf: "center",
              marginRight: 20,
            }}
          />
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
              balance={"$ " + formatedChecking1}
              accountNumber="1"
              onPress={() => this.accountPressedHandler(1)}
            />

            <AccountsCard
              accountType="Checking 2"
              balance={"$ " + formatedChecking2}
              accountNumber="2"
              onPress={() => this.accountPressedHandler(2)}
            />
            <AccountsCard
              accountType="Savings"
              accountNumber="3"
              balance={"$ " + formatedSavings}
              onPress={() => this.accountPressedHandler(3)}
            />
            <AccountsCard
              accountType="GIC"
              balance={"$ " + formatedGic}
              accountNumber="4"
              onPress={() => this.accountPressedHandler(4)}
            />
            <AccountsCard
              accountNumber="5"
              accountType="Credit Card"
              balance={"$ " + formatedCreditCard}
              onPress={() => this.accountPressedHandler(5)}
            />
          </View>

          <View style={styles.bankSummaryContainer}>
            <BankSummaryComponent
              totalHave={this.state.totalHave}
              totalOwe={this.state.totalOwe}
            />
          </View>
           <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={
          Platform.OS == "ios" ? config2.iosAdBanner : config2.androidAdBanner
        }
        servePersonalizedAds={false}
        onDidFailToReceiveAdWithError={(e) => this.bannerError(e)}
      />
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
  },
});

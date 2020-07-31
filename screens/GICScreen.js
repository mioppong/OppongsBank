const MONTHLY = "MONTHLY";
const ANNUALLY = "ANNUALLY";
var Finance = require("financejs");

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import TitleText from "../components/TitleText";
import CardComponent from "../components/gicscreencomponents/CardComponent";
import WillHave from "../components/gicscreencomponents/WillHave";
import TransactionComponent from "../components/accountsscreencomponents/TransactionComponent";
import { BlurView } from "expo-blur";
import AppButton from "../components/AppButton";

class GICScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interestRate: 2,
      showTransactions: false,
      showInterestRateModal: false,
      showPaidWhenModal: false,
      paidWhen: MONTHLY,
      month3: 0,
      month6: 0,
      month9: 0,
      year1: 0,
      year1month6: 0,
      year2: 0,
      year3: 0,
      year5: 0,
    };
  }

  componentDidMount() {
    const { balance } = this.props.gic;
    var finance = new Finance();

    console.log("Balance is, ", this.state.interestRate);
    let month3 = 0;
    let month6 = 0;
    let month9 = 0;
    let year1 = 0;

    let year1month6 = 0;

    let year2 = 0;
    let year3 = 0;
    let year5 = 0;

    if (this.state.paidWhen === ANNUALLY) {
      month3 = balance;
      month6 = balance;
      month9 = balance;

      year1 = finance.FV(this.state.interestRate, balance, 1);
      year1month6 = finance.FV(this.state.interestRate, balance, 1.5);
      year2 = finance.FV(this.state.interestRate, balance, 2);
      year3 = finance.FV(this.state.interestRate, balance, 3);
      year5 = finance.FV(this.state.interestRate, balance, 5);
    } else if (this.state.paidWhen === MONTHLY) {
      month3 = finance.FV(this.state.interestRate / 12, balance, 3);
      month6 = finance.FV(this.state.interestRate / 12, balance, 6);
      month9 = finance.FV(this.state.interestRate / 12, balance, 9);
      year1 = finance.FV(this.state.interestRate / 12, balance, 12);
      year1month6 = finance.FV(this.state.interestRate / 12, balance, 18);
      year2 = finance.FV(this.state.interestRate / 12, balance, 24);
      year3 = finance.FV(this.state.interestRate / 12, balance, 36);
      year5 = finance.FV(this.state.interestRate / 12, balance, 60);
    }

    this.setState({
      showTransactions: false,
      showInterestRateModal: false,
      month3: month3,
      month6: month6,
      month9: month9,
      year1: year1,
      year1month6: year1month6,
      year2: year2,
      year3: year3,
      year5: year5,
    });
    console.log(this.state.paidWhen);
  }

  paidWhenButtonHandler() {
    (this.state.paidWhen =
      this.state.paidWhen === MONTHLY ? ANNUALLY : MONTHLY),
      this.setState({
        showPaidWhenModal: true,
      });

    console.log(this.state.paidWhen);

    this.componentDidMount();
  }
  render() {
    const { params } = this.props.navigation.state;

    return (
      <Screen style={styles.container}>
        <View style={styles.headerCotainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="keyboard-backspace"
              size={70}
              iconColor={colors.fifth}
            />
          </TouchableOpacity>

          <View style={styles.insideHeaderContainer}>
            <TitleText title={this.props.gic.name} style={{ fontSize: 30 }} />

            <TitleText
              title={"account#: " + this.props.gic.id}
              style={{ fontSize: 15, color: colors.fifth }}
            />
          </View>
        </View>
        <ScrollView>
          <View style={styles.buttonContainer}>
            <CardComponent
              cardTitle="Balance"
              amount={this.props.gic.balance}
            />

            <CardComponent
              cardTitle="Interest Rate"
              amount={this.state.interestRate}
              onPress={() => this.setState({ showInterestRateModal: true })}
            />
          </View>
          <CardComponent
            cardTitle="Paid"
            style={{ alignSelf: "center" }}
            amount={this.state.paidWhen}
            onPress={() => this.paidWhenButtonHandler()}
          />

          <WillHave date="3 months" amount={this.state.month3} />
          <WillHave date="6 months" amount={this.state.month6} />
          <WillHave date="9 months" amount={this.state.month9} />
          <WillHave date="1 year" amount={this.state.year1} />
          <WillHave
            date="1 year and 6 months"
            amount={this.state.year1month6}
          />
          <WillHave date="2 years" amount={this.state.year2} />

          <WillHave date="3 years" amount={this.state.year3} />
          <WillHave date="5 years" amount={this.state.year5} />

          <AppButton
            iconName="format-list-bulleted"
            iconSize={50}
            style={{
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 30,
            }}
            onPress={() => this.setState({ showTransactions: true })}
          />
        </ScrollView>

        {/*-----------------MODAL TRANSACTIONS----------------------------------------------------------*/}
        <Modal
          transparent={true}
          visible={this.state.showTransactions}
          animationType="fade"
        >
          <View style={styles.transactionsContainer}>
            <View style={{ flex: 1 }}>
              <TitleText
                title={"Transactions: "}
                style={{ fontSize: 15, color: colors.third }}
              />
              <TransactionComponent data={this.props.gic.transactions} />
              <AppButton
                onPress={() => this.setState({ showTransactions: false })}
                iconName="close"
                iconSize={40}
                style={{ alignSelf: "center", height: 50, width: 50 }}
              />
            </View>
          </View>
        </Modal>
        {/*-----------------MODAL Interest Picker----------------------------------------------------------*/}
        <Modal
          transparent={true}
          visible={this.state.showInterestRateModal}
          animationType="fade"
        >
          <BlurView intensity={100} style={{ flex: 1 }}>
            <View style={styles.interestRateContainer}>
              <TitleText
                title={"Type Your Interest Rate: "}
                style={{ color: colors.third, textAlign: "center" }}
              />

              <View style={{ flexDirection: "row", marginVertical: 40 }}>
                <Text>Interest Rate: $ </Text>

                <TextInput
                  textContentType="telephoneNumber"
                  keyboardType="decimal-pad"
                  placeholder="example 0.75"
                  style={{ borderBottomWidth: 1, width: "50%" }}
                  onChangeText={(event) =>
                    this.setState({ interestRate: event })
                  }
                />
              </View>
              <AppButton
                onPress={() => this.setState({ showInterestRateModal: false })}
                iconName="check-bold"
                iconSize={40}
                style={{ alignSelf: "center", height: 50, width: 50 }}
              />
            </View>
          </BlurView>
        </Modal>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gic: state.gic,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (amount, to, type, payee) => {
      dispatch({
        amount: amount,
        to: to,
        type: type,
        payee: payee,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GICScreen);

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    height: "20%",
    width: "90%",
    alignSelf: "center",
  },

  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  headerCotainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "10%",
  },
  insideHeaderContainer: {
    marginLeft: 60,
  },
  transactionsContainer: {
    padding: 20,
    width: "98%",
    height: "70%",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: colors.primary,
  },

  interestRateContainer: {
    padding: 20,
    width: "98%",
    height: "70%",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
  },
});

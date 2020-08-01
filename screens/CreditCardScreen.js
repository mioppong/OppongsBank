const PURCHASE = "PURCHASE";

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import TitleText from "../components/TitleText";
import AppButton from "../components/AppButton";
import TransactionComponent from "../components/accountsscreencomponents/TransactionComponent";

class CreditCardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPurchaseModal: false,
      payee: "",
      amount: 0,
      type: PURCHASE,
      doneModal: false,
    };
  }

  purchaseModal = (value) => {
    this.setState({
      showPurchaseModal: value,
    });
  };

  handlePurchaseButton = () => {
    if (
      this.state.payee === "" ||
      this.state.amount === 0 ||
      isNaN(this.state.amount)
    ) {
    } else {
      this.state.type = PURCHASE;
      this.purchaseModal(false);

      this.props.addTransaction(
        this.state.amount,
        this.props.creditcard,
        this.state.type,
        this.state
      );

      this.doneModalHandler();
    }
  };

  doneModalHandler = () => {
    this.setState({
      doneModal: true,
    });
    setTimeout(() => {
      this.setState({
        doneModal: false,
      });
    }, 1000);
  };

  render() {
    return (
      <>
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
              <TitleText
                title={this.props.creditcard.name}
                style={{ fontSize: 30 }}
              />

              <TitleText
                title={"account#: " + this.props.creditcard.id}
                style={{ fontSize: 15, color: colors.fifth }}
              />
            </View>
          </View>

          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceTitle}>Your Capacity:</Text>
              <Text style={styles.balanceText}>
                $ {this.props.creditcard.capacity}
              </Text>
            </View>

            <View style={styles.balanceContainer}>
              <Text style={styles.balanceTitle}>Your Balance:</Text>
              <Text style={styles.balanceText}>
                $ {this.props.creditcard.balance}
              </Text>
            </View>
          </View>

          <AppButton
            title="Pay"
            iconName="contactless-payment"
            style={{
              height: 95,
              width: 95,
              margin: 10,
              borderRadius: 10,
              alignSelf: "center",
            }}
            iconSize={50}
            onPress={() => this.purchaseModal(true)}
          />

          <View style={styles.transactionsContainer}>
            <TitleText
              title={"Transactions: "}
              style={{ fontSize: 15, color: colors.third }}
            />

            <TransactionComponent data={this.props.creditcard.transactions} />
          </View>
        </Screen>

        {/*---------SHOW PURCHASE MODAL--------------------------------------------------------------------------------------------------- */}
        <Modal
          transparent={true}
          visible={this.state.showPurchaseModal}
          animationType="slide"
        >
          <View
            style={{
              flex: 0.9,
              marginTop: "30%",
              backgroundColor: colors.fifth,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              padding: 20,
            }}
          >
            <View style={styles.insideModalScreen}>
              <TitleText
                style={{ color: colors.primary, textAlign: "center" }}
                title="PAY WHO?"
              />

              <View style={{ flexDirection: "row", marginVertical: 15 }}>
                <Text
                  style={{
                    textAlignVertical: "center",
                    color: colors.primary,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                  children="Payee : "
                />
                <TextInput
                  placeholder="place of purchase"
                  placeholderTextColor={colors.mediumGray}
                  onChangeText={(event) => this.setState({ payee: event })}
                  keyboardType="default"
                  style={{
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: colors.primary,
                    color: colors.primary,
                    fontSize: 20,
                    width: "70%",
                  }}
                />
              </View>

              <View style={{ flexDirection: "row", marginVertical: 15 }}>
                <Text
                  style={{
                    textAlignVertical: "center",
                    color: colors.primary,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                  children="Amount : "
                />
                <TextInput
                  placeholder="example 76"
                  placeholderTextColor={colors.mediumGray}
                  onChangeText={(event) => this.setState({ amount: event })}
                  keyboardType="decimal-pad"
                  style={{
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: colors.primary,
                    color: colors.primary,
                    fontSize: 20,
                    width: "50%",
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <AppButton
                  iconName="close"
                  style={{
                    alignSelf: "center",
                    height: 40,
                    width: 40,
                    borderRadius: 10,
                  }}
                  onPress={() => this.purchaseModal(false)}
                  iconSize={40}
                />

                <AppButton
                  style={{
                    alignSelf: "center",
                    height: 40,
                    width: 40,
                    borderRadius: 10,
                  }}
                  onPress={() => this.handlePurchaseButton()}
                  iconSize={40}
                  iconName="check"
                />
              </View>
            </View>
          </View>
        </Modal>

        {/*---------DONE MODAL--------------------------------------------------------------------------------------------------- */}

        <Modal
          transparent={true}
          visible={this.state.doneModal}
          animationType="slide"
        >
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <AppButton
              iconName="check"
              style={{ backgroundColor: "green", alignSelf: "center" }}
            />
          </View>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    creditcard: state.creditcard,
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

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardScreen);

const styles = StyleSheet.create({
  balanceContainer: {
    width: "45%",
    height: 100,
    marginTop: "5%",
    alignSelf: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: colors.fifth,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  balanceText: {
    marginTop: 15,
    fontSize: 20,
    color: colors.fifth,
    fontWeight: "bold",
    textAlign: "center",
  },
  balanceTitle: {
    fontSize: 15,
    color: colors.third,
    fontWeight: "bold",
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
  insideModalScreen: {
    alignSelf: "center",
    width: "60%",
    height: "40%",
    borderRadius: 25,
    marginBottom: "40%",
  },
  transactionsContainer: {
    padding: 20,
    width: "100%",
    height: "100%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.fifth,
    flex: 1,
  },
});

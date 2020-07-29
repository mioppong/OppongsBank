//I MADE THIS CLASS TO SHOW ONLY THE CHECKING ACCOUNTS, AND THE SAVINGS ACCOUNT, SINCE THEY'RE SIMILAR

const TRANSFER = "TRANSFER";
const DEPOSIT = "DEPOSIT";
const PURCHASE = "PURCHASE";

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import TransactionItem from "../components/accountsscreencomponents/TransactionItem";
import AppButton from "../components/AppButton";
import Icon from "../components/Icon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";
import { connect } from "react-redux";
import TransactionComponent from "../components/accountsscreencomponents/TransactionComponent";

class AccountsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPurchaseModal: false,
      showDepositModal: false,
      payee: "",
      amount: 0,
      type: null,
    };
  }

  depositModal = (value) => {
    this.setState({
      showDepositModal: value,
    });
  };

  purchaseModal = (value) => {
    this.setState({
      showPurchaseModal: value,
    });
  };

  handleDepositButton = () => {
    this.state.type = DEPOSIT;
    this.depositModal(false);

    const { params } = this.props.navigation.state;
    this.props.addTransaction(this.state.amount, params, this.state.type);
  };

  handlePurchaseButton = () => {
    this.state.type = PURCHASE;
    this.purchaseModal(false);

    const { params } = this.props.navigation.state;
    this.props.addTransaction(
      this.state.amount,
      params,
      this.state.type,
      this.state
    );
  };

  render() {
    const { params } = this.props.navigation.state;

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
              <TitleText title={params.name} style={{ fontSize: 30 }} />

              <TitleText
                title={"account#: " + params.id}
                style={{ fontSize: 15, color: colors.fifth }}
              />
            </View>
          </View>

          <View style={styles.balanceContainer}>
            <Text style={styles.balanceTitle}>Your Balance:</Text>
            <Text style={styles.balanceText}> $ {params.balance}</Text>
          </View>

          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <AppButton
              title="Deposit"
              iconName="cash-register"
              style={{
                height: 95,
                width: 95,
                marginVertical: 10,
                borderRadius: 10,
                alignSelf: "center",
                margin: 10,
              }}
              iconSize={50}
              onPress={() => this.depositModal(true)}
            />
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
          </View>
          <View style={styles.transactionsContainer}>
            <TitleText
              title={"Transactions: "}
              style={{ fontSize: 15, color: colors.third }}
            />

            <TransactionComponent data={params.transactions} />
          </View>
        </Screen>

        {/*---------SHOW DEPOSIT MODAL--------------------------------------------------------------------------------------------------- */}
        <Modal
          visible={this.state.showDepositModal}
          animationType="fade"
          transparent={true}
        >
          <BlurView
            intensity={100}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <View style={styles.insideModalScreen}>
              <TitleText
                style={{ color: colors.primary, textAlign: "center" }}
                title="Deposit Amount"
              />

              <View style={{ flexDirection: "row", marginVertical: 15 }}></View>
              <View style={{ flexDirection: "row", marginVertical: 15 }}>
                <Text
                  style={{ textAlignVertical: "center" }}
                  children="Amount : "
                />
                <TextInput
                  placeholder="Amount"
                  onChangeText={(event) => this.setState({ amount: event })}
                  keyboardType="decimal-pad"
                  style={{
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: colors.primary,
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
                  onPress={() => this.depositModal(false)}
                  iconSize={40}
                />

                <AppButton
                  style={{
                    alignSelf: "center",
                    height: 40,
                    width: 40,
                    borderRadius: 10,
                  }}
                  onPress={this.handleDepositButton}
                  iconSize={40}
                  iconName="check"
                />
              </View>
            </View>
          </BlurView>
        </Modal>

        {/*---------SHOW PURCHASE MODAL--------------------------------------------------------------------------------------------------- */}
        <Modal
          visible={this.state.showPurchaseModal}
          animationType="fade"
          transparent={true}
        >
          <BlurView
            intensity={100}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <View style={styles.insideModalScreen}>
              <TitleText
                style={{ color: colors.primary, textAlign: "center" }}
                title="PAY WHO?"
              />

              <View style={{ flexDirection: "row", marginVertical: 15 }}>
                <Text
                  style={{ textAlignVertical: "center" }}
                  children="Payee : "
                />
                <TextInput
                  placeholder="Name"
                  onChangeText={(event) => this.setState({ payee: event })}
                  keyboardType="default"
                  style={{
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: colors.primary,
                  }}
                />
              </View>

              <View style={{ flexDirection: "row", marginVertical: 15 }}>
                <Text
                  style={{ textAlignVertical: "center" }}
                  children="Amount : "
                />
                <TextInput
                  placeholder="Amount"
                  onChangeText={(event) => this.setState({ amount: event })}
                  keyboardType="decimal-pad"
                  style={{
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: colors.primary,
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
                  onPress={this.handlePurchaseButton}
                  iconSize={40}
                  iconName="check"
                />
              </View>
            </View>
          </BlurView>
        </Modal>
      </>
    );
  }
}

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

export default connect(null, mapDispatchToProps)(AccountsScreen);

const styles = StyleSheet.create({
  balanceContainer: {
    width: "60%",
    height: 100,
    marginTop: "5%",
    alignSelf: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: colors.fifth,
    borderRadius: 10,
  },
  balanceText: {
    fontSize: 40,
    color: colors.fifth,
    alignSelf: "center",
    fontWeight: "bold",
  },
  balanceTitle: {
    fontSize: 15,
    color: colors.third,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: colors.primary,
  },
  flatListContainer: {
    backgroundColor: "red",
    flex: 1,
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

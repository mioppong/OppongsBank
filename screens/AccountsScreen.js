//I MADE THIS CLASS TO SHOW ONLY THE CHECKING ACCOUNTS, AND THE SAVINGS ACCOUNT, SINCE THEY'RE SIMILAR

const DEPOSIT = "DEPOSIT";
const PURCHASE = "PURCHASE";

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  TextInput,
  Platform,
} from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import AppButton from "../components/AppButton";
import Icon from "../components/Icon";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import TransactionComponent from "../components/accountsscreencomponents/TransactionComponent";
import { AdMobBanner } from "expo-ads-admob";
import config2 from "../config";

class AccountsScreen extends Component {
  //THIS COMONENT, IS BASICALLY,
  //THE CHECKING, SAVINGS, BECAUSE I DIDNT WANNA CREATE DIFFERENT COMPONENTS SINCE THEY BOTH HAD SIMILAR STRUCTURE
  constructor(props) {
    super(props);

    this.state = {
      showPurchaseModal: false,
      showDepositModal: false,
      doneModal: false,
      missingModal: false,

      payee: "",
      amount: 0,
      type: null,
    };
  }

  depositModal = (value) => {
    //FUNCTION THAT IS PASSED A VALUE TO SHOW OR NOT SHOW DEPOSIT MODAL
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
    if (this.state.amount === 0 || isNaN(this.state.amount)) {
      this.missingInputModal();
    } else {
      this.state.type = DEPOSIT;

      const { params } = this.props.navigation.state;
      this.props.addTransaction(this.state.amount, params, this.state.type);
      this.doneModalHandler();
      this.depositModal(false);
    }
  };

  handlePurchaseButton = () => {
    if (
      this.state.payee === "" ||
      this.state.amount === 0 ||
      isNaN(this.state.amount)
    ) {
      this.missingInputModal();
    } else {
      this.state.type = PURCHASE;
      this.purchaseModal(false);

      const { params } = this.props.navigation.state;
      this.props.addTransaction(
        this.state.amount,
        params,
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

  missingInputModal = () => {
    this.setState({
      missingModal: true,
    });
    setTimeout(() => {
      this.setState({
        missingModal: false,
      });
    }, 1000);
  };
  render() {
    const { params } = this.props.navigation.state;
    params.balance = params.balance.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });

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
            <Text minimumFontScale={0.01} style={styles.balanceText}>
              {" "}
              $ {params.balance}
            </Text>
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
          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID={
              Platform.OS == "ios"
                ? config2.iosAdBanner
                : config2.androidAdBanner
            }
            servePersonalizedAds={false}
            onDidFailToReceiveAdWithError={(e) => this.bannerError(e)}
          />
        </Screen>

        {/*---------SHOW DEPOSIT MODAL--------------------------------------------------------------------------------------------------- */}
        <Modal
          visible={this.state.showDepositModal}
          animationType="slide"
          transparent={true}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              marginTop: "30%",
              backgroundColor: colors.fifth,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              padding: 20,
            }}
          >
            <View style={styles.insideModalScreen}>
              <TitleText
                style={{
                  color: colors.primary,
                  textAlign: "center",
                }}
                title="Deposit Amount"
              />

              <View style={{ flexDirection: "row", marginVertical: 35 }}>
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
                    marginLeft: 30,
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
                    marginRight: 30,
                  }}
                  onPress={() => this.handleDepositButton()}
                  iconSize={40}
                  iconName="check"
                />
              </View>
            </View>
          </View>
        </Modal>

        {/*---------SHOW PURCHASE MODAL--------------------------------------------------------------------------------------------------- */}
        <Modal
          visible={this.state.showPurchaseModal}
          animationType="slide"
          transparent={true}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              marginTop: "30%",
              backgroundColor: colors.fifth,
              //justifyContent: "center",
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

              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 15,
                  marginTop: 30,
                }}
              >
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
                    width: "60%",
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
                  onPress={this.handlePurchaseButton}
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
          animationType="fade"
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

        {/*---------MISSING MODAL--------------------------------------------------------------------------------------------------- */}

        <Modal
          transparent={true}
          visible={this.state.missingModal}
          animationType="fade"
        >
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <AppButton
              iconName="close"
              style={{ backgroundColor: "red", alignSelf: "center" }}
            />
          </View>
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
    marginTop: 15,
    fontSize: 20,
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
    //backgroundColor: "red",
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
    width: "70%",
    height: "40%",
    borderRadius: 25,
    marginBottom: "40%",
    //backgroundColor: colors.fifth,
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

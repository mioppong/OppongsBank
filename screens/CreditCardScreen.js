import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import TitleText from "../components/TitleText";

class CreditCardScreen extends Component {
  render() {
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

        <Text> Credit Card Screen </Text>
      </Screen>
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
});

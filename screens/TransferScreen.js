import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Picker } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import TransferComponent from "../components/transferscreencomponents/TransferComponent";
import Amount from "../components/transferscreencomponents/Amount";
import AppButton from "../components/AppButton";
import AccountPicker from "../components/transferscreencomponents/AccountPicker";
import { connect } from "react-redux";

class TransferScreen extends Component {
  constructor(props) {
    super(props);

    this.from = "";
    this.to = "";
    this.amount = "";
  }

  handleTransferButton = () => {
    //console.log(this.from, this.to, this.amount);
    this.props.addTransaction(this.from, this.to, this.amount);
  };

  render() {
    return (
      <Screen style={styles.container}>
        <View
          style={{
            marginLeft: 40,
          }}
        >
          <TitleText title="Transfer" />
        </View>
        <ScrollView>
          <View style={styles.insideContainer}>
            <TransferComponent
              from={(item) => (this.from = item)}
              to={(item) => (this.to = item)}
              type="TRANSFER"
            />
            <Amount getAmount={(amount) => (this.amount = amount)} />
            <AppButton title="Transfer" onPress={this.handleTransferButton} />
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (from, to, amount) => {
      dispatch({
        type: "TRANSFER",
        from: from,
        to: to,
        amount: amount,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(TransferScreen);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  insideContainer: {
    flex: 1,
    //backgroundColor: colors.third,
    alignItems: "center",
    marginVertical: 10,
  },
});

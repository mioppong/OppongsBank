import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Picker } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import TransferComponent from "../components/transferscreencomponents/TransferComponent";
import Amount from "../components/transferscreencomponents/Amount";
import AppButton from "../components/AppButton";
import AccountPicker from "../components/transferscreencomponents/AccountPicker";

export default class TransferScreen extends Component {
  constructor(props) {
    super(props);

    this.from = "";
    this.to = "";
    this.amount = "";
  }

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
            />
            <Amount getAmount={(amount) => (this.amount = amount)} />
            <AppButton
              title="Transfer"
              onPress={() =>
                console.log(this.from.label, this.to.label, this.amount)
              }
            />
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

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

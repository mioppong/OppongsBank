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
            <TransferComponent />
            <Amount />
            <AppButton title="Transfer" />
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

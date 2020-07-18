import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import TransferComponent from "../components/TransferComponent";

export default class TransferScreen extends Component {
  render() {
    return (
      <Screen style={styles.container}>
        <View style={{ marginLeft: 40 }}>
          <TitleText title="Transfer" />
        </View>
        <ScrollView>
          <TransferComponent />
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
});

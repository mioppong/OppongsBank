import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";

export default class MoreScreen extends Component {
  render() {
    return (
      <Screen style={styles.container}>
        <TitleText title="More" />

        <ScrollView>
          <Text style={{ fontSize: 30 }}> This is the transfer screen </Text>
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: "center",
  },
});

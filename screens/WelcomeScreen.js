import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import LoginButton from "../components/LoginButton";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";

export default class WelcomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Screen style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <TitleText title="BANK OF OPPONG" />
        </View>

        <View style={styles.buttonContainer}>
          <LoginButton
            title="Login With"
            iconName="facebook"
            iconColor={colors.facebook}
          />
          <LoginButton title="Login With" iconName="google" />
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },

  mainContainer: {
    backgroundColor: colors.secondary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

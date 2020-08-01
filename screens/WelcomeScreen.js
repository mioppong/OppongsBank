import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import LoginButton from "../components/LoginButton";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import AppButton from "../components/AppButton";

export default class WelcomeScreen extends Component {
  home = (params) => {
    console.log("aye");
    const { navigation } = this.props;
    navigation.navigate("Home", { level: 1, name: "oppong" });
  };

  render() {
    return (
      <Screen style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <TitleText
            style={{ textAlign: "center", fontWeight: "900" }}
            title="Oppongs Fake"
          />
          <TitleText
            style={{ textAlign: "center", fontWeight: "900" }}
            title="Bank"
          />
        </View>

        <View style={styles.buttonContainer}>
          <AppButton
            style={{
              borderRadius: 10,
              shadowColor: "black",
              shadowOffset: { width: 2, height: 2 },
              shadowRadius: 10,
              shadowOpacity: 0.5,
              elevation: 10,
            }}
            title="Login"
            iconName="emoticon-happy-outline"
            //iconColor={colors.white}
            onPress={this.home}
          />
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
    backgroundColor: colors.primary,
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

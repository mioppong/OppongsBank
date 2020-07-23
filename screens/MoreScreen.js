import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import { Button } from "react-native";
import AppButton from "../components/AppButton";
import MoreItemComponent from "../components/morescreencomponents/MoreItemComponent";

export default class MoreScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Screen style={styles.container}>
        <View style={{ marginLeft: 40 }}>
          <TitleText title="More" />
        </View>
        <ScrollView
          style={{ backgroundColor: "" }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <MoreItemComponent title="This is Not a real Bank" />
          <MoreItemComponent title="This is Not a real Bank" />
          <MoreItemComponent />
          <MoreItemComponent />

          <AppButton
            iconName="logout"
            iconSize={50}
            onPress={() => navigation.navigate("Welcome")}
          />
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
});

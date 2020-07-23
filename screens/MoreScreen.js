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
    const stuffForMoreScreen = [
      {
        title: "This is Not a Real Bank",
        content:
          "This app was made for the purpose of teaching and young people, how to use a bank and what you can do with it, essentially education",
      },
      {
        title: "Promotiion - Jaigoh",
        content:
          "This is a promo for my boy Jaigoh, who makes music, Search SoundCloud 'Jaigoh'",
      },
      {
        title: "Promotiion - Monica Guzman",
        content:
          "This is a promo for my amiga Monica Guzman, who makes music, Search on Apple Music, SoundCloud, Spotify and Youtube 'Monica Guzman'",
      },
    ];

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
          <MoreItemComponent
            title={stuffForMoreScreen[0].title}
            content={stuffForMoreScreen[0].content}
          />

          <MoreItemComponent
            title={stuffForMoreScreen[1].title}
            content={stuffForMoreScreen[1].content}
          />

          <MoreItemComponent
            title={stuffForMoreScreen[2].title}
            content={stuffForMoreScreen[2].content}
          />

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

import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import AppButton from "../components/AppButton";
import MoreItemComponent from "../components/morescreencomponents/MoreItemComponent";
import { AdMobBanner } from "expo-ads-admob";
import config2 from '../config'



export default class MoreScreen extends Component {
  render() {
    const stuffForMoreScreen = [
      {
        title: "This is Not a Real Bank",
        content:
          "This app was made for the purpose of teaching and young people, how to use a bank and what you can do with it, essentially education",
        urlPic: "",
        urlLink: "",
      },
      {
        title: "Jaigoh",
        content:
          "This is a promo for my amigo Jaigoh. He makes amazing music, Search SoundCloud 'Jaigoh' or press the button below the image",
        urlPic:
          "https://i1.sndcdn.com/avatars-000750509287-66lj5y-t500x500.jpg",
        urlLink: "https://soundcloud.com/jaigoh",
      },
      {
        title: "Monica Guzman",
        content:
          "This is a promo for my amiga Monica Guzman, who makes music, Search on Apple Music, SoundCloud, Spotify and Youtube 'Monica Guzman' or click the button below the image'",
        urlPic:
          "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/e35/72308594_561869707949383_9188217833705983893_n.jpg?_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Tg9lxEWDiroAX9GVBzm&oh=d11ab037ebf4794b990977c88112d260&oe=5F5F2E15",
        urlLink: "https://www.instagram.com/_monicaguzman_/",
      },
    ];

    const { navigation } = this.props;
    const bannerError = (e) =>{
      console.log(e)
    }
    
    return (
      <Screen style={styles.container}>
        <View style={{ marginLeft: 40, flexDirection: "row" }}>
          <Image
            source={require("../assets/logo.png")}
            style={{
              width: 40,
              height: 40,
              alignSelf: "center",
              marginRight: 20,
            }}
          />

          <TitleText title="More" />
        </View>
        <ScrollView
          style={{ backgroundColor: "" }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <MoreItemComponent
            title={stuffForMoreScreen[1].title}
            content={stuffForMoreScreen[1].content}
            urlPic={stuffForMoreScreen[1].urlPic}
            urlLink={stuffForMoreScreen[1].urlLink}
          />

          <MoreItemComponent
            title={stuffForMoreScreen[2].title}
            content={stuffForMoreScreen[2].content}
            urlPic={stuffForMoreScreen[2].urlPic}
            urlLink={stuffForMoreScreen[2].urlLink}
          />

          <AppButton
            title="Logout"
            iconName="logout"
            style={{
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("Welcome")}
          />


        <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={
          Platform.OS == "ios" ? config2.iosAdBanner : config2.androidAdBanner
        }
        servePersonalizedAds={false}
        onDidFailToReceiveAdWithError={(e) => bannerError(e)}
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

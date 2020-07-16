import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TransferScreen from "../screens/TransferScreen";

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },

  Transfer: {
    screen: TransferScreen,
  },
};

const Tabs = createBottomTabNavigator(screens);

export default createAppContainer(Tabs);

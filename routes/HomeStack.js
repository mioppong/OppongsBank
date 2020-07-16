import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import Header from "../components/Header";
import React from "react";
import colors from "../config/colors";
import AccountsScreen from "../screens/AccountsScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import TransferScreen from "../screens/TransferScreen";
import MoreScreen from "../screens/MoreScreen";

const tabScreens = {
  Home: {
    screen: HomeScreen,
  },

  Transfer: {
    screen: TransferScreen,
  },

  More: {
    screen: MoreScreen,
  },
};
const Tabs = createBottomTabNavigator(tabScreens);

const stackScreens = {
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: Tabs,
    gesturesEnabled: false,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
};

const Nav = createStackNavigator(stackScreens);

export default createAppContainer(Nav);

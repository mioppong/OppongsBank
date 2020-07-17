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
import Icon from "../components/Icon";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const accScreens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Accounts: {
    screen: AccountsScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const insideAccounts = createStackNavigator(accScreens);

const tabScreens = {
  Home: {
    screen: insideAccounts,
    navigationOptions: {
      tabBarLabel: "Test",
      tabBarIcon: ({ tintColor }) => <Icon name="home" iconColor="blue" />,
    },
  },

  Transfer: {
    screen: TransferScreen,
  },

  More: {
    screen: MoreScreen,
  },
};
const Tabs = createBottomTabNavigator(tabScreens, {
  tabBarOptions: {
    activeTintColor: "red",
    inactiveTintColor: "blue",
  },
});

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
    Accounts: {
      screen: AccountsScreen,
    },
  },
};

const Nav = createStackNavigator(stackScreens);

export default createAppContainer(Nav);

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
import CreditCardScreen from "../screens/CreditCardScreen";
import GICScreen from "../screens/GICScreen";

import Icon from "../components/Icon";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { View } from "react-native";

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

  GIC: {
    screen: GICScreen,
  },
  Credit: {
    screen: CreditCardScreen,
  },
};

const insideAccounts = createStackNavigator(accScreens);

const tabScreens = {
  Home: {
    screen: insideAccounts,
    navigationOptions: {
      tabBarLabel: " ",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={50} iconColor={tintColor} />
      ),
    },
  },

  Transfer: {
    screen: TransferScreen,
    navigationOptions: {
      tabBarLabel: " ",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="bank-transfer" size={55} iconColor={tintColor} />
      ),
    },
  },

  More: {
    screen: MoreScreen,
    navigationOptions: {
      tabBarLabel: " ",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="dots-horizontal" size={50} iconColor={tintColor} />
      ),
    },
  },
};
const Tabs = createMaterialBottomTabNavigator(tabScreens, {
  shifting: true,
  activeColor: colors.fifth,
  barStyle: {
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderTopColor: colors.fifth,
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

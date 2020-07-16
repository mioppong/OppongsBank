import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import Header from "../components/Header";
import React from "react";
import colors from "../config/colors";
import AccountsScreen from "../screens/AccountsScreen";

const screens = {
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },

  Accounts: {
    screen: AccountsScreen,
    navigationOptions: {
      headerTitle: () => <Header title={"Home"} />,
      headerStyle: {
        backgroundColor: colors.primary,
      },
    },
  },
};

const Nav = createStackNavigator(screens);

export default createAppContainer(Nav);

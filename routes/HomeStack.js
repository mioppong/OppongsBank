import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";

const screens = {
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: HomeScreen,
  },
};

const Nav = createStackNavigator(screens);

export default createAppContainer(Nav);

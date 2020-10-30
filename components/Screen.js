import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  //THIS IS A BASIC SCREEN COMPONENT,
  //ITS BASICALLY A SAFE AREAVIEW AROUND A COMPONENT
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});

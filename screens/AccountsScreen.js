import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class AccountsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    console.log(navigation);

    return (
      <View>
        <Text> This is AccountsScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

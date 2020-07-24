import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { connect } from "react-redux";
import Screen from "../components/Screen";

class AccountsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { params } = this.props.navigation.state;
    console.log(params);

    return (
      <Screen>
        <Text> This the balance is {params.balance} </Text>

        <FlatList
          data={params.transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text>
              {item.from} from {item.to} {item.amount}
            </Text>
          )}
        />
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    checking1: state.checking1,
    checking2: state.checking2,
    savings: state.savings,
  };
};
export default AccountsScreen;

const styles = StyleSheet.create({});

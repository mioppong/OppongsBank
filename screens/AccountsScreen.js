import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import { color } from "react-native-reanimated";
import TransactionItem from "../components/accountsscreencomponents/TransactionItem";
import AppButton from "../components/AppButton";
class AccountsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <Screen style={styles.container}>
        <TitleText title={params.name} style={{ marginLeft: 40 }} />
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Your Balance:</Text>
          <Text style={styles.balanceText}> $ {params.balance}</Text>
        </View>

        <FlatList
          style={styles.transactionsContainer}
          data={params.transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionItem
              from={item.from}
              to={item.to}
              amount={item.amount}
            />
          )}
        />

        <AppButton
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
          style={{ marginVertical: 20, alignSelf: "center" }}
        />
      </Screen>
    );
  }
}

export default AccountsScreen;

const styles = StyleSheet.create({
  balanceContainer: {
    width: "60%",
    height: 100,
    marginVertical: "10%",
    alignSelf: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: colors.fifth,
    borderRadius: 10,
  },
  balanceText: {
    fontSize: 40,
    color: colors.fifth,
    alignSelf: "center",
    fontWeight: "bold",
  },
  balanceTitle: {
    fontSize: 20,
    color: colors.fourth,
  },
  container: {
    backgroundColor: colors.primary,
  },
  transactionsContainer: {
    padding: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.fifth,
  },
});

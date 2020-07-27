//I MADE THIS CLASS TO SHOW ONLY THE CHECKING ACCOUNTS, AND THE SAVINGS ACCOUNT, SINCE THEY'RE SIMILAR

import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import { color } from "react-native-reanimated";
import AppButton from "../components/AppButton";
import Icon from "../components/Icon";
import { TouchableOpacity } from "react-native-gesture-handler";
class CreditCardScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <Screen style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon name="keyboard-backspace" size={70} iconColor={colors.fifth} />
        </TouchableOpacity>

        <TitleText
          title={params.name}
          style={{ alignSelf: "center", fontSize: 30 }}
        />

        <TitleText
          title={"account#: " + params.id}
          style={{ alignSelf: "center", fontSize: 15, color: colors.fifth }}
        />

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Your Balance:</Text>
          <Text style={styles.balanceText}> $ {params.balance}</Text>
        </View>

        <View style={styles.transactionsContainer}>
          <TitleText
            title={"Transactions: "}
            style={{ fontSize: 15, color: colors.third }}
          />

          <FlatList
            //            style={styles.transactionsContainer}
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
        </View>
      </Screen>
    );
  }
}

export default CreditCardScreen;

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
    fontSize: 15,
    color: colors.third,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: colors.primary,
  },
  flatListContainer: {
    backgroundColor: "red",
    flex: 1,
  },
  transactionsContainer: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.fifth,
    flex: 1,
  },
});

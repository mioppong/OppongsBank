//I MADE THIS CLASS TO SHOW ONLY THE CHECKING ACCOUNTS, AND THE SAVINGS ACCOUNT, SINCE THEY'RE SIMILAR

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Modal,
} from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import { color } from "react-native-reanimated";
import TransactionItem from "../components/accountsscreencomponents/TransactionItem";
import AppButton from "../components/AppButton";
import Icon from "../components/Icon";
import { TouchableOpacity } from "react-native-gesture-handler";
import Camera from "../components/Camera";
class AccountsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCamera: false,
    };
  }

  activateCamera = () => {
    this.setState({
      showCamera: true,
    });
  };

  disableCamera = () => {
    this.setState({
      showCamera: false,
    });
  };

  render() {
    const { params } = this.props.navigation.state;

    return (
      <>
        <Screen style={styles.container}>
          <View style={styles.headerCotainer}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="keyboard-backspace"
                size={70}
                iconColor={colors.fifth}
              />
            </TouchableOpacity>

            <View style={styles.insideHeaderContainer}>
              <TitleText title={params.name} style={{ fontSize: 30 }} />

              <TitleText
                title={"account#: " + params.id}
                style={{ fontSize: 15, color: colors.fifth }}
              />
            </View>
          </View>

          <View style={styles.balanceContainer}>
            <Text style={styles.balanceTitle}>Your Balance:</Text>
            <Text style={styles.balanceText}> $ {params.balance}</Text>
          </View>

          <AppButton
            title="Deposit"
            iconName="camera"
            style={{
              height: 95,
              width: 95,
              marginVertical: 10,
              borderRadius: 10,
              alignSelf: "center",
            }}
            iconSize={50}
            onPress={this.activateCamera}
          />

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

        <Modal
          visible={this.state.showCamera}
          animationType="slide"
          transparent={true}
        >
          <Camera
            takePic={
              <AppButton
                iconName="camera"
                style={{ height: 60, width: 60 }}
                iconSize={50}
                onPress={() => console.log("take a pic")}
              />
            }
          >
            <AppButton
              iconName="close"
              style={{ height: 60, width: 60 }}
              iconSize={40}
              onPress={this.disableCamera}
            />
          </Camera>
        </Modal>
      </>
    );
  }
}

export default AccountsScreen;

const styles = StyleSheet.create({
  balanceContainer: {
    width: "60%",
    height: 100,
    marginTop: "5%",
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
  headerCotainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "10%",
  },
  insideHeaderContainer: {
    marginLeft: 60,
  },
  transactionsContainer: {
    padding: 20,
    width: "100%",
    height: "100%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.fifth,
    flex: 1,
  },
});

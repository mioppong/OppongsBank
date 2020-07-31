import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Picker,
  Image,
  Modal,
} from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import TitleText from "../components/TitleText";
import TransferComponent from "../components/transferscreencomponents/TransferComponent";
import Amount from "../components/transferscreencomponents/Amount";
import AppButton from "../components/AppButton";
import AccountPicker from "../components/transferscreencomponents/AccountPicker";
import { connect } from "react-redux";

class TransferScreen extends Component {
  constructor(props) {
    super(props);

    this.from = "";
    this.to = "";
    this.amount = "";

    this.state = {
      doneModal: false,
      missingModal: false,
    };
  }

  handleTransferButton = () => {
    //here if we get an input from user not valid, and they press transfer, we gice an X on the Screen
    if (
      this.from === "" ||
      this.to === "" ||
      this.amount === "" ||
      isNaN(this.amount) ||
      this.from.id === this.to.id
    ) {
      console.log("missing something");
      this.missingInputModal();
    } else {
      this.doneModalHandler();
      this.props.addTransaction(this.from, this.to, this.amount);
    }
  };

  doneModalHandler = () => {
    this.setState({
      doneModal: true,
    });
    setTimeout(() => {
      this.setState({
        doneModal: false,
      });
    }, 1000);
  };

  missingInputModal = () => {
    this.setState({
      missingModal: true,
    });
    setTimeout(() => {
      this.setState({
        missingModal: false,
      });
    }, 1000);
  };

  render() {
    return (
      <>
        <Screen style={styles.container}>
          <View
            style={{
              marginLeft: 40,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../assets/logo.png")}
              style={{
                width: 40,
                height: 40,
                alignSelf: "center",
                marginRight: 20,
              }}
            />

            <TitleText title="Transfer" />
          </View>
          <ScrollView>
            <View style={styles.insideContainer}>
              <TransferComponent
                from={(item) => (this.from = item)}
                to={(item) => (this.to = item)}
                type="DEPOSIT"
              />
              <Amount getAmount={(amount) => (this.amount = amount)} />
              <AppButton
                title="Transfer"
                onPress={this.handleTransferButton}
                style={{ borderRadius: 10 }}
                iconName="bank-transfer"
                iconSize={45}
              />
            </View>
          </ScrollView>
        </Screen>

        {/*---------DONE MODAL--------------------------------------------------------------------------------------------------- */}

        <Modal
          transparent={true}
          visible={this.state.doneModal}
          animationType="fade"
        >
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <AppButton
              iconName="check"
              style={{ backgroundColor: "green", alignSelf: "center" }}
            />
          </View>
        </Modal>

        {/*---------MISSING MODAL--------------------------------------------------------------------------------------------------- */}

        <Modal
          transparent={true}
          visible={this.state.missingModal}
          animationType="fade"
        >
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <AppButton
              iconName="close"
              style={{ backgroundColor: "red", alignSelf: "center" }}
            />
          </View>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (from, to, amount) => {
      dispatch({
        type: "TRANSFER",
        from: from,
        to: to,
        amount: amount,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(TransferScreen);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  insideContainer: {
    flex: 1,
    //backgroundColor: colors.third,
    alignItems: "center",
    marginVertical: 10,
  },
});

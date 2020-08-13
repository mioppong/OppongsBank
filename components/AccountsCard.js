import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import colors from "../config/colors";
import AppButton from "./AppButton";
import { TitleText } from "./TitleText";
export default function AccountsCard({
  accountType,
  balance,
  onPress,
  accountNumber,
}) {
  const explainEachBank = [
    "",
    "A checking account is a deposit account held at a financial institution that allows withdrawals and deposits. Also called demand accounts or transactional accounts, checking accounts are very liquid and can be accessed using checks, automated teller machines, and electronic debits, among other methods. A checking account differs from other bank accounts in that it often allows for numerous withdrawals and unlimited deposits, whereas savings accounts sometimes limit both.",
    "A checking account is a deposit account held at a financial institution that allows withdrawals and deposits. Also called demand accounts or transactional accounts, checking accounts are very liquid and can be accessed using checks, automated teller machines, and electronic debits, among other methods. A checking account differs from other bank accounts in that it often allows for numerous withdrawals and unlimited deposits, whereas savings accounts sometimes limit both.",
    "Savings accounts have some limitations on how often you can withdraw funds, but generally offer exceptional flexibility that’s ideal for building an emergency fund, saving for a short-term goal like buying a car or going on vacation, or simply sweeping surplus cash you don’t need in your checking account so it can earn more interest elsewhere.",
    "When you buy a GIC, you are agreeing to lend the bank or financial institution your money for a specified number of months or for up to 5 years. In exchange, your money will earn interest. The longer the term, the more interest you earn. At the end of the term, you get the entire amount you deposited plus the interest.",
    "A credit card is a thin rectangular piece of plastic or metal issued by a bank or financial services company, that allows cardholders to borrow funds with which to pay for goods and services with merchants that accept cards for payment. Credit cards impose the condition that cardholders pay back the borrowed money, plus any applicable interest, as well as any additional agreed-upon charges, either in full by the billing date or over time. ",
  ];

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <View>
            <Text children={accountType} style={styles.accountTypeText} />
            <Text
              style={{
                textAlign: "center",
                color: colors.fourth,
                fontSize: 12,
              }}
            >
              account # - {accountNumber}{" "}
            </Text>
          </View>

          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText} children={balance} />
          </View>
        </TouchableOpacity>

        <AppButton
          style={styles.explanationButton}
          iconName="chat"
          onPress={() => setModalVisible(true)}
        />
      </View>
      {/*---------SHOW EXPLANATION MODAL--------------------------------------------------------------------------------------------------- */}

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{
            width: "100%",
            height: "100%",
            marginTop: "30%",
            backgroundColor: colors.fifth,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            padding: 20,
          }}
        >
          <AppButton
            style={styles.explanationButton}
            iconName="close"
            onPress={() => setModalVisible(false)}
            style={{
              alignSelf: "center",
              width: 40,
              height: 40,
              marginVertical: 10,
            }}
          />

          <Text
            style={{
              fontSize: 40,
              marginVertical: 10,
              fontWeight: "bold",
              color: colors.primary,
            }}
          >
            {accountType}
          </Text>

          <Text style={styles.explanationTextStyle}>
            {" "}
            {explainEachBank[accountNumber]}{" "}
          </Text>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  accountTypeContainer: {
    flex: 1,
  },

  accountTypeText: {
    fontSize: 20,
    color: colors.fifth,
    textAlign: "center",
  },
  balanceContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  balanceText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.fourth,
  },

  container: {
    width: "100%",
    height: 110,
    backgroundColor: colors.primary,
    marginTop: 20,
    borderRadius: 15,
    borderColor: colors.fifth,
    padding: 10,
    borderWidth: 1,
  },
  explanationButton: {
    marginLeft: 15,
    marginTop: 20,
    width: 40,
    height: 40,
    borderWidth: 0,
  },
  explanationTextStyle: {
    fontSize: 20,
    textAlign: "justify",
  },
  mainContainer: {
    width: "50%",
    flexDirection: "row",
  },
});

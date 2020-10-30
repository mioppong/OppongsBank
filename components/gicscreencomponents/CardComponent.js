import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import TitleText from "../TitleText";

export default function CardComponent({ cardTitle, amount, onPress, style }) {
  //SO FOR THE CARDS ON THE MAIN SCREEN, THESE ARE THE CARDS RENDERED
  //THE 2 TYPES OF CARDS, ONE I USE IN IN THE GIC, (INTEREST RATE), AND THE ONES ON THE HOME SCREEN
  if (cardTitle === "Interest Rate") {
    return (
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <TitleText title={cardTitle} style={styles.cardTitle} />
        <Text style={styles.amountText}>{amount + " %"}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <TitleText title={cardTitle} style={styles.cardTitle} />
        <Text style={styles.amountText}>{"$  " + amount}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  amountText: {
    marginTop: 10,
    fontSize: 15,
    color: colors.fourth,
    textAlign: "center",
  },
  cardTitle: {
    fontSize: 20,
  },
  container: {
    width: 150,
    height: 90,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    borderColor: colors.fifth,
    margin: 10,
  },
});

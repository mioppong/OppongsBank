import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import colors from "../../config/colors";
import { color } from "react-native-reanimated";

export default function TransferComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.transferFrom}>
        <Text style={styles.componentTitle}>Transfer From</Text>
        <View
          style={{
            marginTop: 30,
            width: 50,
            height: 50,
            backgroundColor: colors.secondary,
          }}
        ></View>
      </View>

      <View
        style={{
          width: 2,
          height: 90,
          backgroundColor: colors.third,
          marginTop: 50,
          borderRadius: 10,
        }}
      />

      <View style={styles.transferFrom}>
        <Text style={styles.componentTitle}>Transfer To</Text>
        <View
          style={{
            marginTop: 30,
            width: 50,
            height: 50,
            backgroundColor: colors.secondary,
          }}
        ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  componentTitle: {
    fontSize: 20,
    color: colors.fourth,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    width: "80%",
    height: 200,
    backgroundColor: "red",
    borderRadius: 20,
    marginVertical: 10,
    flexDirection: "row",
  },
  transferFrom: {
    width: "50%",
    height: "20%",
    marginVertical: 10,
    alignItems: "center",
  },
});

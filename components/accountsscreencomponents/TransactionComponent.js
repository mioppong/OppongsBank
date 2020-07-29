import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import TransactionItem from "./TransactionItem";

export default function TransactionComponent({ data }) {
  return (
    <View>
      <Text> </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TransactionItem
            from={item.from}
            to={item.to}
            amount={item.amount}
            type={item.type}
            payee={item.payee}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

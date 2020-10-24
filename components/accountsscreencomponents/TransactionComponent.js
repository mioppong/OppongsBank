import React from "react";
import {  View, FlatList } from "react-native";
import TransactionItem from "./TransactionItem";

export default function TransactionComponent({ data, style }) {
  //this function returns a list
  //TAKES AN ARRAY OF TRANSACTIONS, AND GIVES YOU A TRANSACTION TYPE SHIT

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={style}
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


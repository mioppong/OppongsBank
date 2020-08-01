import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import AppButton from "../AppButton";
import colors from "../../config/colors";

export default function MoreItemComponent({ title, content }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.containerOnMoreScreen}
      >
        <Text style={{ color: colors.fourth, fontSize: 20 }}>{title}</Text>
      </TouchableOpacity>

      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View style={styles.insideModal}>
          <Text style={styles.maintContentText}>{content}</Text>
        </View>

        <AppButton
          iconName="close"
          style={{ backgroundColor: colors.fifth, alignSelf: "center" }}
          onPress={() => setModalVisible(false)}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  containerOnMoreScreen: {
    width: "70%",
    backgroundColor: colors.primary,
    marginVertical: 10,
    height: 50,
    justifyContent: "center",
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.fifth,
  },
  insideModal: {
    width: 200,
    height: 300,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    marginTop: "30%",
    marginBottom: 15,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 10,
    padding: 10,
    alignSelf: "center",
  },
  maintContentText: {
    color: colors.fourth,
    fontSize: 20,
    textTransform: "capitalize",
  },

  modalTransparentBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

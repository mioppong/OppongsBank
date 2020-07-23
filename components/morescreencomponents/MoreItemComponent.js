import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import AppButton from "../AppButton";
import colors from "../../config/colors";
import { color } from "react-native-reanimated";

export default function MoreItemComponent({ title, body }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.containerOnMoreScreen}
      >
        <Text style={{ color: colors.fourth, fontSize: 20 }}>{title}</Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <BlurView intensity={50} style={styles.modalTransparentBackground}>
          <View style={styles.insideBlurView}></View>

          <AppButton
            iconName="close"
            style={{ backgroundColor: colors.fifth }}
            onPress={() => setModalVisible(false)}
          />
        </BlurView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  containerOnMoreScreen: {
    width: "60%",
    backgroundColor: colors.primary,
    marginVertical: 10,
    height: 50,
    justifyContent: "center",
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.fifth,
  },
  insideBlurView: {
    width: 200,
    height: 300,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 10,
  },

  modalTransparentBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import Icon from "../Icon";
import colors from "../../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import Screen from "../Screen";

export default function AccountPicker({
  icon,
  children,
  iconSize,
  placeholder,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <Icon name={icon} iconSize={iconSize} />
          <Text style={{ flex: 1 }}>{placeholder}</Text>
          <Icon name="chevron-down" iconSize={30} />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="fade">
        <Screen>
          <View style={{ backgroundColor: "red" }}>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    borderRadius: 15,

    backgroundColor: colors.mediumGray,
  },
});

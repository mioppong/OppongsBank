import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import Icon from "../Icon";
import colors from "../../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import Screen from "../Screen";
import PickerItem from "./PickerItem";

export default function AccountPicker({
  icon,
  items,
  iconSize,
  placeholder,
  onSelectItem,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <Icon name={icon} iconSize={iconSize} />
          <Text style={{ flex: 1 }}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <Icon name="chevron-down" iconSize={30} />
        </View>
      </TouchableWithoutFeedback>

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalTransparentBackground}>
          <View style={styles.insideScreenModal}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <PickerItem
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
            <Button
              title="Close"
              style={{ backgroundColor: "blue" }}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
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
  insideScreenModal: {
    width: "80%",
    height: 400,
    borderRadius: 10,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  modalTransparentBackground: {
    backgroundColor: "#1113333a",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

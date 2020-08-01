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
import PickerItem from "./PickerItem";
import { BlurView } from "expo-blur";
import AppButton from "../AppButton";

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
          <Icon name={icon} iconColor={colors.primary} iconSize={iconSize} />
          <Text style={{ flex: 1 }}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <Icon name="chevron-down" iconColor={colors.primary} iconSize={30} />
        </View>
      </TouchableWithoutFeedback>

      {/*------------------------------------------MODAL SCREEN------------------------------------------*/}

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <BlurView intensity={100} style={styles.modalTransparentBackground}>
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
            <AppButton
              iconName="close"
              style={{ backgroundColor: colors.fifth }}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </BlurView>
      </Modal>
      {/*------------------------------------------MODAL SCREEN------------------------------------------*/}
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

    backgroundColor: colors.fifth,
  },
  insideScreenModal: {
    width: "80%",
    height: 400,
    borderRadius: 50,
    //backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    opacity: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 10,
  },
  modalTransparentBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

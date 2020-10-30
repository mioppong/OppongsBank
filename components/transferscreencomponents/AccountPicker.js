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
import AppButton from "../AppButton";

export default function AccountPicker({
  icon,
  items,
  iconSize,
  placeholder,
  onSelectItem,
  selectedItem,
  title,
}) {

  //this component takes a list of options, and when you click the main button,
  // the options appear, and you can click them
  //takes a list, and each item is rendered is PickerItem.js, so we need to import that here also
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

      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View style={styles.mainModalContainer}>
          <View style={styles.insideScreenModal}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}> {title}</Text>
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
              iconSize={45}
              style={{ backgroundColor: colors.primary, height: 50, width: 50 }}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  mainModalContainer: {
    width: "100%",
    height: "100%",
    marginTop: "30%",
    backgroundColor: colors.fifth,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
    alignItems: "center",
  },

  modalTransparentBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

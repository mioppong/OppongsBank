import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ImageBackground,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native";
import AppButton from "../AppButton";
import colors from "../../config/colors";
import * as Linking from "expo-linking";

export default function MoreItemComponent({ title, content, urlPic, urlLink }) {
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
          <AppButton
            iconName="close"
            style={{
              backgroundColor: colors.primary,
              alignSelf: "center",
              width: 50,
              height: 50,
            }}
            onPress={() => setModalVisible(false)}
          />
          <Text
            style={{
              fontSize: 40,
              marginVertical: 10,
              fontWeight: "bold",
              color: colors.primary,
            }}
          >
            {title}
          </Text>

          <Text style={styles.maintContentText}>{content}</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: urlPic,
              }}
            />
          </View>
          <AppButton
            iconName="account-search"
            style={{ alignSelf: "center", width: 50, height: 50 }}
            onPress={() => Linking.openURL(urlLink)}
          />
        </View>
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
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  imageStyle: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 20,
    marginVertical: 40,
  },

  insideModal: {
    width: "100%",
    height: "100%",
    marginTop: "30%",
    backgroundColor: colors.fifth,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },

  maintContentText: {
    color: colors.primary,
    fontSize: 20,
    textTransform: "capitalize",
  },

  modalTransparentBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

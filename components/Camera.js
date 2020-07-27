import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import AppButton from "./AppButton";
import colors from "../config/colors";
import Screen from "./Screen";

export default function App({ children, takePic }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Screen style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View style={styles.topView}>{children}</View>
        <View style={styles.bottomView}>{takePic}</View>
      </Camera>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  topView: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    flex: 1,
    marginBottom: 25,
  },
});

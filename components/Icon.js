import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({ name, size = 40, iconColor = "#fff" }) {
  //RENDERS ICONS FROM MaterialCommunityIcons, IN THE SIZE AND COLOR I WANT
  //PUTTING SIZE=40 ^, MEANS THAT THE SIZE OF THE ICON WITHOUT PROVIDING THE PARAMETER SIZE, WILL BE 40, WHEN RETURNED
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.7} />
    </View>
  );
}

export default Icon;

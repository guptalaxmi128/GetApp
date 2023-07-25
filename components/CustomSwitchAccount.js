import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CustomSwitchAccount({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };
  return (
    <View
      style={{
        height: 50,
        width: "100%",
        backgroundColor: "rgba(167, 169, 183, 0.15)",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 50,
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor:
            getSelectionMode == 1 ? "#f6e4e0" : "rgba(167, 169, 183, 0.15)",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          height: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 16,
            color: getSelectionMode == 1 ? "#EC6E46" : "#8e8e8e",
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor:
            getSelectionMode == 2 ? "#f6e4e0" : "rgba(167, 169, 183, 0.15)",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          height: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 16,
            color: getSelectionMode == 2 ? "#EC6E46" : "#8e8e8e",
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

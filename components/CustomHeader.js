import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ headerTitle }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{ width: "100%", flexDirection: "row", backgroundColor: "#fff" }}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require("../assets/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      {headerTitle && <Text style={styles.headerTitle}>{headerTitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 40,
    width: 60,
    borderWidth: 1,
    justifyContent: "center",
    borderColor: "#dcdcdc",
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft:50,
    marginTop:55,
    fontFamily:'Poppins'
  },
});

export default CustomHeader;

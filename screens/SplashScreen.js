import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Main");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GLOBAL EDUCATION TRUST</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ec6f48",
  },
  logo: {
    width: 171,
    height: 171,
    borderRadius: 20,
  },
  titleContainer: {
    width: 322,
    height: 45,
    borderRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    textAlign:'center',
   padding:8,
   fontFamily:'Poppins'
  },
});

export default SplashScreen;

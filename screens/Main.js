import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomSwitch from "../components/CustomSwitch";
import SignUp from "../components/signup/SignUp";
import SignIn from "../components/signin/SignIn";

const Main = () => {
  const [courseTab, setCourseTab] = useState(1);
  const onSelectSwitch = (value) => {
    setCourseTab(value);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>GLOBAL EDUCATION TRUST</Text>
          </View>
        </View>
        <View style={{margin:20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Sign Up"
            option2="Sign In"
            onSelectSwitch={onSelectSwitch}
          />
          {courseTab === 1 && <SignUp /> }
          {courseTab === 2 && <SignIn /> }
        </View>
      </View>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    width: '100%',
    // height: 250,
    height: hp('30%'),
    backgroundColor: "#ec6f48",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    // width: 171,
    // height: 171,
    width: wp('20%'), 
    height: hp('20%'),
    borderRadius: 20,
  },
  titleContainer: {
    // width: 322,
    // height: 45,
    width: wp('60%'), 
    height: hp('5%'),
    borderRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    marginBottom: 20,
  },
  title: {
    color: "white",
    // fontSize: 18,
    fontSize: wp('4%'),
    fontWeight: "500",
    textAlign: "center",
    padding: 8,
    fontFamily: "Poppins",
  },
});

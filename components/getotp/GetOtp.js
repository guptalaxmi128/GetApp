import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import CustomButton from "../CustomButton";
import CustomHeader from "../CustomHeader";

const GetOtp = () => {
    const navigation=useNavigation();
  const [otp1, setOtp1] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });
  const route = useRoute();
  // const { mobileNumber } = route.params;
  const otp = Object.keys(otp1)
    .map((key) => otp1[key])
    .join("");

  const handleButtonPress = () => {
    // Perform desired action
    console.log("Button pressed");
    navigation.navigate("TabNavigator")
  };

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();

  return (
    <>
      <CustomHeader />
      <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <View style={styles.textConatiner}>
          <Text style={styles.textOne}>Verification Code</Text>
          <Text style={styles.textTwo}>
            We have sent the code verification to your number
            <Text style={{ color: "#000" }}> +91 123456789</Text>
            {/* {mobileNumber} */}
          </Text>
        </View>

        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={(text) => {
                setOtp1({ ...otp1, 1: text });
                text && secondInput.current.focus();
              }}
            />

            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={(text) => {
                setOtp1({ ...otp1, 2: text });
                text ? thirdInput.current.focus() : firstInput.current.focus();
              }}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={(text) => {
                setOtp1({ ...otp1, 3: text });
                text
                  ? fourthInput.current.focus()
                  : secondInput.current.focus();
              }}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={(text) => {
                setOtp1({ ...otp1, 4: text });
                text ? fifthInput.current.focus() : thirdInput.current.focus();
              }}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              ref={fifthInput}
              onChangeText={(text) => {
                setOtp1({ ...otp1, 5: text });
                text ? sixthInput.current.focus() : fourthInput.current.focus();
              }}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              ref={sixthInput}
              onChangeText={(text) => {
                setOtp1({ ...otp1, 6: text });
                !text && fifthInput.current.focus();
              }}
            />
          </View>
        </View>

        <View style={styles.btnConatiner}>
          <CustomButton name="Submit" onPress={handleButtonPress} />
        </View>
        <View style={styles.textResend}>
        <Text style={styles.textTwo}>
          Didn’t receive the code? <Text style={{ color: "#000" }}>Resend</Text>
        </Text>
        </View>
      </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    flex:1
  },
  textConatiner: {
    marginLeft: 20,
  },
  textOne: {
    fontSize: 20,
    fontFamily: "Poppins",
    fontWeight: "400",
  },
  textTwo: {
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "200",
    marginTop: 3,
    color: "#8e8e8e",
  },
  input: {
    width: 45,
    height: 45,
    borderWidth: 0.5,
    borderColor: "gray",
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  btnConatiner: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textResend:{
    width:'100%',alignItems:'center',justifyContent:'center',marginTop:5
  }
});

export default GetOtp;

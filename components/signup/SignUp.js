import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../CustomButton";

const type = [
  {
    id: 1,
    type: "Student",
  },
  {
    id: 2,
    type: "Donar",
  },
];

const SignUp = () => {
  const navigation = useNavigation();
  const [partnerType, setPartnerType] = useState("Select an Option");
  const [isClicked, setIsClicked] = useState(false);
  const [dataType, setDataType] = useState(type);

  const handleButtonPress = () => {
    // Perform desired action
    console.log("Button pressed");
    navigation.navigate("GetOtp");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>I'm A</Text>
      <TouchableOpacity
        style={[styles.dropDownSelector, { marginTop: isClicked ? hp("1%") : 0 }]}
        onPress={() => {
          setIsClicked(!isClicked);
        }}
      >
        <Text style={styles.text}>{partnerType}</Text>
        {isClicked ? (
          <Image
            source={require("../../assets/signup/arrow-down.png")}
            style={styles.icon}
          />
        ) : (
          <Image
            source={require("../../assets/signup/arrow-up.png")}
            style={styles.icon}
          />
        )}
      </TouchableOpacity>
      {/* {isClicked ? (
          <View style={styles.dropDownArea}>
            <FlatList
              data={dataType}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={styles.typeItems}
                    onPress={() => {
                      setPartnerType(item.type);
                      setIsClicked(false);
                    }}
                  >
                    <Text style={styles.text}>{item.type}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null} */}

      <Modal
        visible={isClicked}
        transparent={true}
        onRequestClose={() => setIsClicked(false)}
      >
        <View style={styles.modalContainer}>
          <FlatList
            data={dataType}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={styles.typeItems}
                  onPress={() => {
                    setPartnerType(item.type);
                    setIsClicked(false);
                  }}
                >
                  <Text style={styles.text}>{item.type}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            style={[styles.dropDownArea, { maxHeight:  hp("12%"), maxWidth:  wp("90%"), }]}
          />
        </View>
      </Modal>
      <Text style={[styles.label, { marginTop: hp("1.5%") }]}>Full Name</Text>
      <TextInput style={styles.textInput} placeholder="Enter Name" />
      <Text style={[styles.label, { marginTop: hp("1.5%")}]}>Mobile Number</Text>
      <TextInput style={styles.textInput} placeholder="Enter Mobile Number" />
      <Text style={[styles.label, { marginTop: hp("1.5%") }]}>Email</Text>
      <TextInput style={styles.textInput} placeholder="Enter Email" />
      <View
        style={{
          width: "100%",
          marginTop: hp("2%"),
          justifyContent: "center",
          alignItems: "center",
          marginBottom: hp("1.5%"),
        }}
      >
        <CustomButton name="Create Account" onPress={handleButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // paddingTop: 8,
    paddingTop: hp("1%"),
  },
  label: {
    // fontSize: 16,
    fontSize: wp("3.5%"),
    fontWeight: "400",
    // marginBottom: 5,
    marginBottom: hp("1.5%"),
    color: "#000",
    fontFamily: "Poppins",
  },
  dropDownSelector: {
    width: "100%",
    // height: 50,
    height: hp("6%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingLeft: 15,
    // paddingRight: 15,
    paddingLeft: wp("3%"),
    paddingRight: wp("3%"),
    alignItems: "center",
  },
  icon: {
    // width: 20,
    // height: 20,
    width: wp("4%"),
    height: wp("4%"),
  },
  text: {
    // fontSize: 16,
    fontSize: wp("3.5%"),
    fontFamily: "Poppins",
    color: "#8e8e8e",
    padding:wp("3%")
  },
  dropDownArea: {
    width: "100%",
    // height: 100,
    height: hp("12%"),
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
    alignSelf: "center",
    // marginTop: 10,
    marginTop: hp("1%"),
  },
  typeItems: {
    // width: "90%",
    // height: 50,
    width: wp("90%"),
    height: hp("6%"),
    borderBottomWidth: 0.2,
    borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    // height: 50,
    height: hp("6%"),
    borderColor: "#dcdcdc",
    // fontSize: 16,
    // padding: 12,
    fontSize: wp("3.5%"),
    padding: wp("3%"),
    fontFamily: "Poppins",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default SignUp;

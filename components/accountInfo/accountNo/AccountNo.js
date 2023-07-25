import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import CustomButton from "../../CustomButton";

const AccountNo = () => {
  const handleButtonPress = () => {
    // Perform desired action
    console.log("Button pressed");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name On Account</Text>
      <TextInput style={styles.textInput} placeholder="Enter Name" />
      <Text style={styles.label}>Account Number</Text>
      <TextInput style={styles.textInput} placeholder="Enter Account Number" />
      <Text style={styles.label}>Branch Name</Text>
      <TextInput style={styles.textInput} placeholder="Enter Branch Name" />
      <Text style={styles.label}>IFSC Code</Text>
      <TextInput style={styles.textInput} placeholder="Enter IFSC Code" />
      <View
        style={{
          width: "100%",
          marginTop: 100,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <CustomButton name="Save Changes" onPress={handleButtonPress} />
      </View>
    </View>
  );
};

export default AccountNo;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 10,
    color: "#000",
    fontFamily: "Poppins",
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    height: 50,
    borderColor: "#dcdcdc",
    fontSize: 16,
    padding: 12,
    fontFamily: "Poppins",
  },
});

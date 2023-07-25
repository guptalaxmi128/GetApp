import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import { Avatar } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomButton from "../CustomButton";
import CustomHeader from "../CustomHeader";

const genders = [
  {
    id: 1,
    gender: "Male",
  },
  {
    id: 2,
    gender: "Female",
  },
];

const marital = [
  {
    id: 1,
    status: "Married",
  },
  {
    id: 2,
    status: "UnMarried",
  },
];

const EditProfile = () => {
  const [date, setDate] = useState("Date of Birth");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [gender, setGender] = useState("Select Gender");
  const [isClicked, setIsClicked] = useState(false);
  const [dataType, setDataType] = useState(genders);

  const [status, setStatus] = useState("Select Marital Status");
  const [isMarital, setIsMarital] = useState(false);
  const [maritalType, setMaritalType] = useState(marital);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("-");
    console.log(x1[2] + "/" + x1[1] + "/" + x1[0]);
    setDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
    hideDatePicker();
  };
  const handleButtonPress = () => {
    // Perform desired action
    console.log("Button pressed");
  };
  return (
    <>
      <CustomHeader headerTitle="Edit Profile" />
      <ScrollView>
        <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:20,position:'relative'}}>
        <Avatar
            rounded
            source={{
              uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            }}
            size={100}
          />
             <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/profile/camera.png")}
              style={styles.icon}
            />
          </View>
          </View>
          <Text style={styles.label}>Student Name</Text>
          <TextInput style={styles.textInput} placeholder="Enter Name" />
          <Text style={styles.label}>Father's Name</Text>
          <TextInput style={styles.textInput} placeholder="Enter Father Name" />
          <Text style={styles.label}>Mother's Name</Text>
          <TextInput style={styles.textInput} placeholder="Enter Mother Name" />
          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity
            style={styles.textInput}
            onPress={() => {
              showDatePicker();
            }}
          >
            <Text style={{ fontSize: 16, color: "#dcdcdc", fontWeight: "600" }}>
              {date}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
          <Text style={styles.label}>Gender</Text>
          <TouchableOpacity
            style={[styles.dropDownSelector, { marginTop: isClicked ? 10 : 0 }]}
            onPress={() => {
              setIsClicked(!isClicked);
            }}
          >
            <Text style={styles.text}>{gender}</Text>
            {isClicked ? (
              <Image
                source={require("../../assets/profile/arrow-down.png")}
                style={styles.icon}
              />
            ) : (
              <Image
                source={require("../../assets/profile/arrow-up.png")}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
          {isClicked ? (
            <View style={styles.dropDownArea}>
              <FlatList
                data={dataType}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.typeItems}
                      onPress={() => {
                        setGender(item.gender);
                        setIsClicked(false);
                      }}
                    >
                      <Text style={styles.text}>{item.gender}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : null}
          <Text style={styles.label}>Nationality</Text>
          <TextInput style={styles.textInput} placeholder="Enter Nationality" />
          <Text style={styles.label}>Current Address</Text>
          <TextInput style={styles.textInput} placeholder="Enter Address" />
          <Text style={styles.label}>District</Text>
          <TextInput style={styles.textInput} placeholder="Enter District" />
          <Text style={styles.label}>Religion</Text>
          <TextInput style={styles.textInput} placeholder="Enter Religion" />
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Mobile Number"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.textInput} placeholder="Enter Email" />
          <Text style={styles.label}>Occupation</Text>
          <TextInput style={styles.textInput} placeholder="Enter Occupation" />
          <Text style={styles.label}>Marital Status</Text>
          <TouchableOpacity
            style={[styles.dropDownSelector, { marginTop: isMarital ? 10 : 0 }]}
            onPress={() => {
              setIsMarital(!isMarital);
            }}
          >
            <Text style={styles.text}>{status}</Text>
            {isClicked ? (
              <Image
                source={require("../../assets/profile/arrow-down.png")}
                style={styles.icon}
              />
            ) : (
              <Image
                source={require("../../assets/profile/arrow-up.png")}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
          {isMarital ? (
            <View style={styles.dropDownArea}>
              <FlatList
                data={maritalType}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.typeItems}
                      onPress={() => {
                        setStatus(item.status);
                        setIsMarital(false);
                      }}
                    >
                      <Text style={styles.text}>{item.status}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : null}
          <Text style={styles.label}>Qualification</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Qualification"
          />
          <Text style={styles.label}>From Where You Here About Us</Text>
          <TextInput style={styles.textInput} placeholder="Your Answer" />
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
      </ScrollView>
    </>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
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
  dropDownSelector: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#8e8e8e",
  },
  dropDownArea: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
    alignSelf: "center",
    marginTop: 10,
  },
  typeItems: {
    width: "90%",
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderColor:"#fff",
    borderWidth:1,
    position: 'absolute',
    right: 132, 
    top: 55, 
    // backgroundColor: 'transparent',
  },
});

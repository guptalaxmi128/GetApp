import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <View style={{ marginLeft: 30, marginTop: 50 }}>
          <Text style={styles.text}>My Profile</Text>
        </View>
        <View
          style={{
            margin: 30,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Avatar
            rounded
            source={{
              uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            }}
            size={40}
          />
          <View>
            <Text style={styles.textOne}>Prakhar</Text>
            <Text style={styles.textOne}>+91 1234567890</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 100,
              height: 35,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
            }}
            onPress={()=>navigation.navigate("EditProfile")}
          >
            <Text
              style={{ fontFamily: "Poppins", fontSize: 14, color: "#fff" }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "600" }}
          >
            Settings
          </Text>
          <TouchableOpacity style={styles.boxContainer} onPress={()=>navigation.navigate("Account")}>
            <Image
              source={require("../assets/profile/lock.png")}
              style={styles.icon}
            />
            <Text style={styles.headingText}> Account Info</Text>
          </TouchableOpacity>
          <View style={styles.boxContainer}>
            <Image
              source={require("../assets/profile/Globe.png")}
              style={styles.icon}
            />
            <Text style={styles.headingText}>Website</Text>
          </View>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={() => navigation.navigate("Notification")}
          >
            <Image
              source={require("../assets/profile/Notification.png")}
              style={styles.icon}
            />
            <Text style={styles.headingText}>Notification</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "600" }}
          >
            About Us
          </Text>
          <TouchableOpacity style={styles.boxContainer} onPress={()=>navigation.navigate("HelpCenter")}>
            <Image
              source={require("../assets/profile/Help.png")}
              style={styles.icon}
            />
            <Text style={styles.headingText}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.boxContainer}
            onPress={() => navigation.navigate("Wallet")}
          >
            <Image
              source={require("../assets/profile/Security.png")}
              style={styles.icon}
            />
            <Text style={styles.headingText}>Privacy Policy</Text>
          </TouchableOpacity>
          <View style={styles.boxContainer}>
            <Image
              source={require("../assets/profile/Team.png")}
              style={styles.icon}
            />
            <Text style={styles.headingText}>Contact Us</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text
            style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "600" }}
          >
            Other
          </Text>
          <View style={styles.boxContainer}>
            <Image
              source={require("../assets/profile/Share.png")}
              style={styles.icon}
            />
            <Text style={styles.headingText}>Share</Text>
          </View>
          <View style={styles.boxContainer}>
            <Image
              source={require("../assets/profile/Mobile.png")}
              style={styles.icon}
            />
            <Text style={styles.headingText}>Get The Latest Version</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  homeContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#EC6E46",
  },
  text: {
    fontSize: 20,
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "#fff",
  },
  textOne: {
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "#fff",
  },
  textOne: { fontSize: 16, fontFamily: "Poppins", color: "#fff" },
  icon: {
    width: 20,
    height: 20,
  },
  boxContainer: {
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    height: 50,
    borderColor: "#dcdcdc",
    padding: 12,
    flexDirection: "row",
    margin: 5,
  },
  headingText: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 10,
  },
});

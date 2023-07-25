import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";

const Wallet = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.homeContainer}>
          <Text
            style={{
              height: 20,
              fontFamily: "Poppins",
              fontSize: 12,
              color: "#fff",
            }}
          >
            Main Balance
          </Text>
          <Text style={styles.text}>₹ 14,235</Text>
          <TouchableOpacity
            style={{
              width: 100,
              height: 35,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
            }}
          >
            <Text
              style={{ fontFamily: "Poppins", fontSize: 14, color: "#fff" }}
            >
              Withdrawal
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20,
          }}
        >
          <View
            style={{
              width: 171,
              height: 77,
              backgroundColor: "background: rgba(229, 249, 255, 1)",
              borderRadius: 15,
              padding: 20,
            }}
          >
            <Text style={styles.textOne}>Total Fund Raised</Text>
            <Text style={styles.textOne}> ₹ 50,000</Text>
          </View>
          <View
            style={{
              width: 171,
              height: 77,
              backgroundColor: "background: rgba(255, 237, 229, 1)",
              borderRadius: 15,
              padding: 20,
            }}
          >
            <Text style={styles.textOne}>Fund Required</Text>
            <Text style={styles.textOne}> ₹ 1,00,000</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 14, fontFamily: "Poppins" }}>
            Withdrawal Request
          </Text>
        </View>
        <View style={styles.notificationContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/wallet/Wallmart.png")}
              style={styles.sideIcon}
            />
          </View>
          <View style={styles.textContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>
                Withdrawal Request
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  color: "red",
                  marginLeft:40
                }}
              >
                Pending
              </Text>
              <Image
                source={require("../../assets/wallet/arrow.png")}
                style={styles.icon}
              />
            </View>
            <Text
              style={{ fontFamily: "Poppins", color: "#8e8e8e", fontSize: 14 }}
            >
              Today 12:32
            </Text>
          </View>
        </View>
        <View style={styles.hr} />
        <View style={styles.notificationContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/wallet/Topup.png")}
              style={styles.sideIcon}
            />
          </View>
          <View style={styles.textContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>
                Withdrawal Request
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  color: "green",
                  marginLeft:40
                }}
              >
                Success
              </Text>
              <Image
                source={require("../../assets/wallet/arrow.png")}
                style={styles.icon}
              />
            </View>
            <Text
              style={{ fontFamily: "Poppins", color: "#8e8e8e", fontSize: 14 }}
            >
              Yesterday 02:20
            </Text>
          </View>
        </View>
        <View style={styles.hr} />
        <View style={styles.notificationContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/wallet/Netflix.png")}
              style={styles.sideIcon}
            />
          </View>
          <View style={styles.textContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>
                Withdrawal Request
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  color: "red",
                  marginLeft:40
                }}
              >
                Rejected
              </Text>
              <Image
                source={require("../../assets/wallet/arrow.png")}
                style={styles.icon}
              />
            </View>
            <Text
              style={{ fontFamily: "Poppins", color: "#8e8e8e", fontSize: 14 }}
            >
              Dec 24 13:53
            </Text>
          </View>
        </View>
        <View style={styles.hr} />
      </View>
    </>
  );
};

export default Wallet;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  homeContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#EC6E46",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "#fff",
    lineHeight: 54,
  },
  textOne: { fontFamily: "Poppins", fontSize: 12, fontWeight: "400" },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 20,
  },
  imageContainer: {
    width: 44,
    height: 44,
    borderRadius: 50,
  },
  sideIcon:{
width:40,
height:40
  },
  icon: {
    width: 22,
    height: 22,
  },
  textContainer: {
    width: 285,
    height: 50,
  },
  hr: {
    position: "relative",
    width: "90%",
    borderBottomColor: "#8e8e8e",
    borderBottomWidth: 1,
    opacity: 0.2,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 5,
  },
});

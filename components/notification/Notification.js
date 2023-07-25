import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CustomHeader from "../CustomHeader";

const Notification = () => {
  return (
    <>
      <CustomHeader headerTitle="Notification" />
      <View style={styles.container}>
        <View style={styles.notificationContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/notification/message.png")}
              style={styles.icon}
            />
          </View>
          <View style={styles.textContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>
                You Updated Your Profile
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  color: "#8e8e8e",
                }}
              >
                2m ago
              </Text>
            </View>
            <Text
              style={{ fontFamily: "Poppins", color: "#8e8e8e", fontSize: 14 }}
            >
              Tap to see the message.
            </Text>
          </View>
        </View>
        <View style={styles.hr} />
        <View style={styles.notificationContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/notification/box.png")}
              style={styles.icon}
            />
          </View>
          <View style={styles.textContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>
                You Updated Your Profile
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  color: "#8e8e8e",
                }}
              >
                2m ago
              </Text>
            </View>
            <Text
              style={{ fontFamily: "Poppins", color: "#8e8e8e", fontSize: 14 }}
            >
              Tap to see the detail shipping.
            </Text>
          </View>
        </View>
        <View style={styles.hr} />
        <View style={styles.notificationContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/notification/message.png")}
              style={styles.icon}
            />
          </View>
          <View style={styles.textContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>
                You Updated Your Profile
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  color: "#8e8e8e",
                }}
              >
                2m ago
              </Text>
            </View>
            <Text
              style={{ fontFamily: "Poppins", color: "#8e8e8e", fontSize: 14 }}
            >
              Let’s try the feature we provide
            </Text>
          </View>
        </View>
        <View style={styles.hr} />
        <View style={styles.notificationContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/notification/discount.png")}
              style={styles.icon}
            />
          </View>
          <View style={styles.textContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>
              Get 20% Discount on first course
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  color: "#8e8e8e",
                }}
              >
                10m ago
              </Text>
            </View>
            <Text
              style={{ fontFamily: "Poppins", color: "#8e8e8e", fontSize: 14 }}
            >
             For all transaction without 
            </Text>
          </View>
        </View>
        <View style={styles.hr} />
      </View>
    </>
  );
};

export default Notification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
    backgroundColor: "#EC6E46",
    justifyContent: "center",
    alignItems: "center",
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
    marginRight:24,
    marginTop: 5,
  },
});

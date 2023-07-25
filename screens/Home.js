import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
// import { ProgressView } from 'expo-progress';
import HomeCard from "../components/HomeCard";

const Home = ({navigation}) => {
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   // Simulate progress updates for demonstration purposes
  //   const progressInterval = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       const newProgress = prevProgress + 0.1;
  //       return newProgress >= 1 ? 0 : newProgress;
  //     });
  //   }, 1000);

  //   return () => clearInterval(progressInterval);
  // }, []);
  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <View style={{ margin: 30 }}>
            <Text style={styles.text}>Hii Prakhar</Text>
            <Text style={styles.textOne}>GET23071000</Text>
          </View>
          <View style={{ margin: 30 }}>
            <Avatar
              rounded
              source={{
                uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
              }}
              size={40}
            />
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Text style={styles.textTwo}>Your Profile Progress</Text>
            <Text style={[styles.textTwo, { color: "#EC6E46" }]}>Profile</Text>
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
            <Text style={{ fontSize: 24, fontWeight: "600" }}>
              49%<Text style={styles.textTwo}>(Not Completed)</Text>
            </Text>
          </View>
          {/* <ProgressView
        progress={progress}
        color="#007AFF" // Customize the progress bar color
        trackColor="#f2f2f2" // Customize the progress bar track color
        style={styles.progress}
      /> */}
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: 80,
        }}
      >
        <Image
          source={require("../assets/home/card.png")}
          style={styles.cardImg}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 14, fontFamily: "Poppins" }}>
          Recommended Course
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("AllCourses")}>
        <Text style={{ fontSize: 14, fontFamily: "Poppins", color: "#EC6E46" }}>
          See All
        </Text>
        </TouchableOpacity>
      </View>

      <HomeCard />
    </View>
  );
};

export default Home;
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
    fontSize: 22,
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
  cardContainer: {
    position: "absolute",
    top: 150,
    left: 35,
    right: 0,
    width: 320,
    height: 110,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
  },
  textTwo: {
    fontSize: 12,
    fontFamily: "Poppins",
  },
  cardImg: {
    width: 350,
    height: 112,
  },
  progress: {
    width: 200,
    height: 20,
  },
});

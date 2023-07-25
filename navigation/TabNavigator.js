import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import HomeIcon from "../assets/bottomIcon/home.png";
import HomeActive from "../assets/bottomIcon/homeActive.png";
import Current from "../assets/bottomIcon/receipt-text.png";
import CurrentActive from "../assets/bottomIcon/receipt.png"
import JobIcon from "../assets/bottomIcon/job.png";
import RaiseIcon from "../assets/bottomIcon/message.png";
import RaiseActive from "../assets/bottomIcon/messageActive.png";
import ProfileActive from "../assets/bottomIcon/profileActive.png";
import UserIcon from "../assets/bottomIcon/user.png";
import Home from "../screens/Home";
import CurrentCourse from "../screens/CurrentCourse";
import RaiseFund from "../screens/RaiseFund";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#EC6E46",
        tabBarStyle: {
            height: 55,
            width: "100%",
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
          
          
          },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabelStyle: { marginBottom: 5, },
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeActive : HomeIcon}
              style={{
                width: 20,
                height: 20,
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Current Course"
        component={CurrentCourse}
        options={{
          tabBarLabelStyle: { marginBottom: 5 },
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? CurrentActive : Current}
              style={{
                width: 20,
                height: 20,
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Raise Fund"
        component={RaiseFund}
        options={{
          tabBarLabelStyle: { marginBottom: 5 },
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? RaiseActive : RaiseIcon}
              style={{
                width: 20,
                height: 20,
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabelStyle: { marginBottom: 5 },
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ProfileActive : UserIcon}
              style={{
                width: 20,
                marginTop: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                height: focused ? 27 : 20,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "../CustomHeader";
import CustomSwitchAccount from "../CustomSwitchAccount";
import AccountNo from "./accountNo/AccountNo";
import UpiCode from "./upiCode/UpiCode";

const Account = () => {
  const [courseTab, setCourseTab] = useState(1);
  const onSelectSwitch = (value) => {
    setCourseTab(value);
  };
  return (
    <>
      <CustomHeader headerTitle="Account Info" />
      <View style={styles.container}>
        <View style={{ marginTop:20 }}>
          <CustomSwitchAccount
            selectionMode={1}
            option1="Account No"
            option2="UPI / QR Code"
            onSelectSwitch={onSelectSwitch}
          />
          {courseTab === 1 && <AccountNo />}
          {courseTab === 2 && <UpiCode />}
        </View>
      </View>
    </>
  );
};

export default Account;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CustomHeader from '../CustomHeader';

const HelpCenter = () => {
    return (
        <>
        <CustomHeader headerTitle="Help Center" />
        <View style={styles.container}>
            <Text>Help Center</Text>
        </View>
        </>
    );
}



export default HelpCenter;
const styles = StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: "#fff",
      paddingVertical: 10,
    },
})
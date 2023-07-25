import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import CustomButton from "../../CustomButton";

const UpiCode = () => {
    const [imageSource, setImageSource] = useState(null);

    const handleImagePicker = async () => {
      try {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
        if (status !== 'granted') {
          console.log('Permission not granted to access media library');
          return;
        }
  
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
  
        if (!result.cancelled) {
          setImageSource({ uri: result.uri });
        }
      } catch (error) {
        console.log('Error while picking an image: ', error);
      }
    };
  
  const handleButtonPress = () => {
    // Perform desired action
    console.log("Button pressed");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter UPI</Text>
      <TextInput style={styles.textInput} placeholder="Enter UPI" />
      <Text style={styles.label}>Upload QR Code</Text>
       <Image source={imageSource} style={styles.image} />
      <TouchableOpacity
        style={{
          width: 110,
          height: 40,
          backgroundColor: "#EC6E46",
          justifyContent: "center",
          alignItems: "center",
          borderRadius:8,
        }}
        onPress={handleImagePicker}
      >
        <Text style={{color:'#fff',fontSize:14,fontFamily:'Poppins'}}>Select Image</Text>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          marginTop: 180,
          justifyContent: "center",
          alignItems: "center",
          marginBottom:20
        }}
      >
        <CustomButton name="Save Changes" onPress={handleButtonPress} />
      </View>
    </View>
  );
};

export default UpiCode;
const styles = StyleSheet.create({
  container: {
    width:'100%',
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 10,
    color: "#000",
    fontFamily: "Poppins",
    marginTop:10
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
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 20,
    borderWidth:1,
    borderStyle:'dotted',
    borderColor:'#8e8e8e',
    borderRadius:5
  },
});

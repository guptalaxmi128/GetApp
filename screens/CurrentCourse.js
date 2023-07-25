import React, { useState } from "react";
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
import * as ImagePicker from "expo-image-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomHeader from "../components/CustomHeader";
import CustomButton from "../components/CustomButton";
import {
  courseLevels,
  courseDurations,
  durations,
  courseTypeDatas,
} from "../Constants";

const CurrentCourse = () => {
  const [date, setDate] = useState("Start Date");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [endDate, setEndDate] = useState(" Expected End Date");

  const [courseLevel, setCourseLevel] = useState("Select Course Level");
  const [isClicked, setIsClicked] = useState(false);
  const [dataType, setDataType] = useState(courseLevels);

  const [durationType, setDurationType] = useState("Select Duration Type");
  const [isDuration, setIsDuration] = useState(false);
  const [durationData, setDurationData] = useState(durations);

  const [courseType, setCourseType] = useState("Select Course Type");
  const [isCourse, setIsCourse] = useState(false);
  const [courseTypeData, setCourseTypeData] = useState(courseTypeDatas);

  // for course duration
  const [courseDuration, setCourseDuration] = useState(
    "Select Course Duration"
  );
  const [isCourseDuration, setIsCourseDuration] = useState(false);
  const [courseDurationType, setCourseDurationType] = useState(courseDurations);

  const [imageSource, setImageSource] = useState(null);

  const handleImagePicker = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission not granted to access media library");
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
      console.log("Error while picking an image: ", error);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
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

  const handleEndDateConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("-");
    console.log(x1[2] + "/" + x1[1] + "/" + x1[0]);
    setEndDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
    hideEndDatePicker();
  };

  const handleButtonPress = () => {
    // Perform desired action
    console.log("Button pressed");
  };
  return (
    <>
      <CustomHeader headerTitle="Current Course" />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>Course Name</Text>
          <TextInput style={styles.textInput} placeholder="Enter Course Name" />
          <Text style={styles.label}>Current Course Level</Text>
          <TouchableOpacity
            style={[styles.dropDownSelector, { marginTop: isClicked ? 10 : 0 }]}
            onPress={() => {
              setIsClicked(!isClicked);
            }}
          >
            <Text style={styles.text}>{courseLevel}</Text>
            {isClicked ? (
              <Image
                source={require("../assets/profile/arrow-down.png")}
                style={styles.icon}
              />
            ) : (
              <Image
                source={require("../assets/profile/arrow-up.png")}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
          <Modal
            visible={isClicked}
            transparent={true}
            onRequestClose={() => setIsClicked(false)}
          >
            <View style={styles.modalContainer}>
              <FlatList
                data={dataType}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.typeItems}
                      onPress={() => {
                        setCourseLevel(item.level);
                        setIsClicked(false);
                      }}
                    >
                      <Text style={styles.text}>{item.level}</Text>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
                style={[
                  styles.dropDownArea,
                  { maxHeight: 200, maxWidth: "90%" },
                ]}
              />
            </View>
          </Modal>
          <Text style={styles.label}>Board Name</Text>
          <TextInput style={styles.textInput} placeholder="Enter Board Name" />
          <Text style={styles.label}>School / College Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter School / College Name"
          />

          <Text style={styles.label}>Course Duration</Text>
          <TouchableOpacity
            style={[
              styles.dropDownSelector,
              { marginTop: isCourseDuration ? 10 : 0 },
            ]}
            onPress={() => {
              setIsCourseDuration(!isCourseDuration);
            }}
          >
            <Text style={styles.text}>{courseDuration}</Text>
            {isCourseDuration ? (
              <Image
                source={require("../assets/profile/arrow-down.png")}
                style={styles.icon}
              />
            ) : (
              <Image
                source={require("../assets/profile/arrow-up.png")}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>

          <Modal
            visible={isCourseDuration}
            transparent={true}
            onRequestClose={() => setIsCourseDuration(false)}
          >
            <View style={styles.modalContainer}>
              <FlatList
                data={courseDurationType}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.typeItems}
                      onPress={() => {
                        setCourseDuration(item.duration);
                        setIsCourseDuration(false);
                      }}
                    >
                      <Text style={styles.text}>{item.duration}</Text>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
                style={[
                  styles.dropDownArea,
                  { maxHeight: 200, maxWidth: "90%" },
                ]}
              />
            </View>
          </Modal>
          <Text style={styles.label}>Start Date</Text>
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
          <Text style={styles.label}>Expected End Date</Text>
          <TouchableOpacity
            style={styles.textInput}
            onPress={() => {
              showEndDatePicker();
            }}
          >
            <Text style={{ fontSize: 16, color: "#dcdcdc", fontWeight: "600" }}>
              {endDate}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            mode="date"
            onConfirm={handleEndDateConfirm}
            onCancel={hideEndDatePicker}
          />
          <Text style={styles.label}>Duration Type</Text>
          <TouchableOpacity
            style={[
              styles.dropDownSelector,
              { marginTop: isDuration ? 10 : 0 },
            ]}
            onPress={() => {
              setIsDuration(!isDuration);
            }}
          >
            <Text style={styles.text}>{durationType}</Text>
            {isDuration ? (
              <Image
                source={require("../assets/profile/arrow-down.png")}
                style={styles.icon}
              />
            ) : (
              <Image
                source={require("../assets/profile/arrow-up.png")}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
          <Modal
            visible={isDuration}
            transparent={true}
            onRequestClose={() => setIsDuration(false)}
          >
            <View style={styles.modalContainer}>
              <FlatList
                data={durationData}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.typeItems}
                      onPress={() => {
                        setDurationType(item.duration);
                        setIsDuration(false);
                      }}
                    >
                      <Text style={styles.text}>{item.duration}</Text>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
                style={[
                  styles.dropDownArea,
                  { maxHeight: 155, maxWidth: "90%" },
                ]}
              />
            </View>
          </Modal>
          <Text style={styles.label}>Course Type</Text>
          <TouchableOpacity
            style={[styles.dropDownSelector, { marginTop: isCourse ? 10 : 0 }]}
            onPress={() => {
              setIsCourse(!isDuration);
            }}
          >
            <Text style={styles.text}>{courseType}</Text>
            {isCourse ? (
              <Image
                source={require("../assets/profile/arrow-down.png")}
                style={styles.icon}
              />
            ) : (
              <Image
                source={require("../assets/profile/arrow-up.png")}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
          {/* {isCourse ? (
            <View style={styles.dropDownArea}>
              <FlatList
                data={courseTypeData}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.typeItems}
                      onPress={() => {
                        setCourseType(item.type);
                        setIsCourse(false);
                      }}
                    >
                      <Text style={styles.text}>{item.type}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : null} */}
          <Modal
            visible={isCourse}
            transparent={true}
            onRequestClose={() => setIsCourse(false)}
          >
            <View style={styles.modalContainer}>
              <FlatList
                data={courseTypeData}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.typeItems}
                      onPress={() => {
                        setCourseType(item.type);
                        setIsCourse(false);
                      }}
                    >
                      <Text style={styles.text}>{item.type}</Text>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
                style={[
                  styles.dropDownArea,
                  { maxHeight: 155, maxWidth: "90%" },
                ]}
              />
            </View>
          </Modal>
          <Text style={styles.label}>Document Upload</Text>

          {imageSource && <Image source={imageSource} style={styles.image} />}
          <TouchableOpacity
            style={{
              width: 110,
              height: 40,
              backgroundColor: "#EC6E46",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
            onPress={handleImagePicker}
          >
            <Text
              style={{ color: "#fff", fontSize: 14, fontFamily: "Poppins" }}
            >
              Select Image
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              marginTop: 50,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <CustomButton name="Submit" onPress={handleButtonPress} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CurrentCourse;

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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "#8e8e8e",
    borderRadius: 5,
  },
});

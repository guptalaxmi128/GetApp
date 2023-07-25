import React from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";

const Card = ({ item }) => {
  return (
    <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
      <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.cardText}>{item.title}</Text>

        <Image
          source={require("../assets/home/book.png")}
          style={styles.icon}
        />
        <Text style={{ fontSize: 10, marginTop: 10 }}>12</Text>
      </View>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Poppins",
          color: "#8e8e8e",
          padding: 5,
        }}
      >
        {item.subTitle}
      </Text>
      <View
        style={{
          width: 100,
          height: 35,
          backgroundColor: "#EC6E46",
          justifyContent: "center",
          alignItems: "center",
          borderRadius:8,
        }}
      >
        <Text style={{color:'#fff',fontSize:14,fontFamily:'Poppins'}}>Learn More</Text>
      </View>
    </View>
  );
};

const HomeCard = () => {
  const data = [
    {
      id: "1",
      title: "React Front To Back",
      subTitle: " By Global Education Trust",
      image: require("../assets/home/cardImage.png"),
      backgroundColor: "#FCE4EC",
    },
    {
      id: "2",
      title: "React Front To Back",
      subTitle: " By Global Education Trust",
      image: require("../assets/home/cardImage.png"),
      backgroundColor: "#C8E6C9",
    },
    {
      id: "3",
      title: "React Front To Back",
      subTitle: " By Global Education Trust",
      image: require("../assets/home/cardImage.png"),
      backgroundColor: "#feede7",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    paddingHorizontal: 16,
  },
  card: {
    width: 200,
    height: 210,
    borderRadius: 8,
    marginHorizontal: 8,
    elevation: 4,
    overflow: "hidden",
    padding: 10,
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  icon: {
    width: 15,
    height: 15,
    marginTop: 10,
  },
  cardText: {
    paddingHorizontal: 8,
    paddingTop: 8,
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default HomeCard;

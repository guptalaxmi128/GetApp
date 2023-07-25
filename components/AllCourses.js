import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions } from 'react-native';
import CustomHeader from './CustomHeader';

const Card = ({ item,cardWidth }) => {
  return (
    <View style={[styles.card, { width: cardWidth, backgroundColor: item.backgroundColor }]}>
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
        fontSize: 10,
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

const AllCourses = () => {
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

 
  const windowWidth = Dimensions.get('window').width;
  const numColumns = 2;
  const cardWidth = (windowWidth - 32) / numColumns - 16;

  return (<>
    <CustomHeader headerTitle="All Courses" />
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card item={item}  cardWidth={cardWidth}/>}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContent}
      />
  
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
 backgroundColor:'#fff'
  },
  flatListContent: {
    paddingHorizontal: 14,
    marginTop:5
  },
  card: {
    width: '100%',
    height: 203,
    borderRadius: 8,
    margin: 8,
    elevation: 4, 
    overflow: 'hidden', 
    padding:8
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
   
  },
  cardText: {
    paddingHorizontal: 8,
    paddingTop: 8,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    width: 15,
    height: 15,
    marginTop: 10,
  },
});

export default AllCourses;

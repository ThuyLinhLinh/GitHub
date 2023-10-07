import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const restaurantData = [
    { id: 1, image: require('../assets/hinh7.jpg') },
    { id: 2, image: require('../assets/hinh8.jpg') },
    { id: 3, image: require('../assets/hinh9.jpg') },
    { id: 4, image: require('../assets/hinh10.jpg') },
    { id: 5, image: require('../assets/hinh1.jpg') },
    { id: 6, image: require('../assets/hinh2.jpg') },
    { id: 7, image: require('../assets/hinh3.jpg') },
    { id: 8, image: require('../assets/hinh4.jpg') },
    { id: 9, image: require('../assets/hinh6.png') },
    { id: 10, image: require('../assets/hinh10.jpg') },
    
    ];
   
const Saveitems = () => {
    const renderItem = ({ item }) => (
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.restaurantImage} />
      </View>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={restaurantData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Set the number of columns you desire
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    imageContainer: {
      flex: 1,
      margin: 5,
    },
    restaurantImage: {
      width: '100%',
      aspectRatio: 1, // This keeps the original aspect ratio of the image
      borderRadius: 10,
    },
  });

  export default Saveitems;


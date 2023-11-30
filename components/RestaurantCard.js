import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const RestaurantCard = ({ restaurant }) => {
    // Create a formatted address string
    const formattedAddress = `${restaurant.location.address1}, ${restaurant.location.city}, ${restaurant.location.state}, ${restaurant.location.zip_code}`;
  
    return (
      <View style={styles.card}>
        <Image 
          source={{ uri: restaurant.image_url }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.details}>Rating: {restaurant.rating}</Text>
          <Text style={styles.details}>{formattedAddress}</Text>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    elevation: 3, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.1, // for iOS
    shadowRadius: 2, // for iOS
  },
  image: {
    width: '100%',
    height: 150, // Adjust as needed
    // You can use 'resizeMode' if necessary
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: 'grey',
  },
  // Add more styles as you like
});

export default RestaurantCard;

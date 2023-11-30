import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import RestaurantList from './RestaurantList'; // Adjust the import path as needed

const HomeScreen = ({ navigation }) => {
  const handlePress = (restaurant) => {
    navigation.navigate('Details', { restaurant });
  };

  return (
    <View>
      <Image
        source={{ uri: 'url-to-your-banner-image' }}
        style={styles.banner}
      />
      <RestaurantList onItemPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200, // Adjust the size as needed
    // other styling
  },
  // ... other styles
});

export default HomeScreen;

import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: restaurant.image_url }} style={styles.image} />
      <Text style={styles.title}>{restaurant.name}</Text>
      {/* // ... other restaurant details */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    // ... other styles
  },
  title: {
    // ... styles for the title
  },
  // ... other styles
});

export default DetailsScreen;

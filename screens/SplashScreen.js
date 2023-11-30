import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
const splashImage = require('../assets/splash2.png');


const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={splashImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  // ... Other styles
});

export default SplashScreen;

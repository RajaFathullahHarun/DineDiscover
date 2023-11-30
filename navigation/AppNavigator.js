import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomePage from '../screens/HomePage';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomePage} options={{ headerBackVisible: false, headerTitle: "DineDiscover" }}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;

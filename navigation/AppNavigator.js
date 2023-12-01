import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DetailsScreen from '../screens/DetailsScreen';
import HomePage from '../screens/HomePage';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Home" component={HomePage} options={{ headerBackVisible: false, headerTitle: "DineDiscover" }}/> */}
      <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ headerTitle: "", headerTintColor: '#FF1A1A'}}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;

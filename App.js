// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import RestaurantList from './RestaurantList';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <RestaurantList />
//       {/* <Text>Hello Hi, how you doing</Text> */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const TabBar = () => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.tabButton}>
        <MaterialIcons name="home" size={24} color="#FF1A1A" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton}>
        <MaterialIcons name="search" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton}>
        <MaterialIcons name="favorite" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton}>
        <MaterialIcons name="person" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingBottom: 10,
    paddingTop: 10,
    marginVertical: 20,
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    color: 'gray',
  },
});

export default TabBar;


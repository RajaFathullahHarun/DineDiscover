import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getRestaurants } from '../api/api'; // Adjust the import path as needed
import RestaurantCard from '../components/RestaurantCard'; // Adjust the import path as needed
import TabBar from '../components/TabBar';
const bannerImage = require('../assets/banner-image.jpg');


const HomePage = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const data = await getRestaurants();
        setRestaurants(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const getCurrentDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString("en-US", options);
  };

  const handlePress = (restaurant) => {
    // Navigate to DetailsScreen with the restaurant's data
    navigation.navigate('Details', { restaurant });
  };

  if (loading) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="#FF1A1A" />
      </View>
    );
  }
  

  if (error) {
    // return <Text>Error fetching restaurants!</Text>;
    return (
      <View style={styles.centeredView}>
        <Text>Error fetching restaurants!</Text>
      </View>
    );

  }

  return (
    <View style={styles.container}>
      <Image
         source={bannerImage} // Replace with your banner image URL
        style={styles.banner}
      />
      <TextInput
        style={styles.searchBar}
        placeholder="Search for restaurants"
        editable={false} // Dummy search bar
      />

      <Text style={styles.headerText}>Today's Picks for You</Text>
      <Text style={styles.dateText}>{getCurrentDate()}</Text>

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <RestaurantCard restaurant={item} />
          </TouchableOpacity>
        )}
      />
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  banner: {
    width: '100%',
    height: 200, // Adjust the size as needed
    // Additional styling if needed
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingHorizontal: 15,
  },
  dateText: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  searchBar: {
    fontSize: 16,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    // Additional styling if needed
    // Shadow properties
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});

export default HomePage;


// import React, { useEffect, useState } from 'react';
// import { FlatList, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
// import { getRestaurants } from '../api/api'; // Adjust the import path as needed
// import RestaurantCard from '../components/RestaurantCard'; // Adjust the import path as needed
// const bannerImage = require('../assets/banner-image.jpg');


// const HomePage = ({ navigation }) => {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const data = await getRestaurants();
//         setRestaurants(data);
//         console.log(data)
//       } catch (error) {
//         console.error('Error fetching restaurants:', error);
//         // Handle the error appropriately
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   const handlePress = (restaurant) => {
//     // Navigate to DetailsScreen with the restaurant's data
//     navigation.navigate('Details', { restaurant });
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//          source={bannerImage} // Replace with your banner image URL
//         style={styles.banner}
//       />
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search for restaurants"
//         editable={false} // Dummy search bar
//       />
//       <FlatList
//         data={restaurants}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handlePress(item)}>
//             <RestaurantCard restaurant={item} />
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   banner: {
//     width: '100%',
//     height: 200, // Adjust the size as needed
//     // Additional styling if needed
//   },
//   searchBar: {
//     fontSize: 16,
//     margin: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     backgroundColor: '#FFFFFF',
//     // Additional styling if needed
//   },
//   // Additional styles can be added here
// });

// export default HomePage;

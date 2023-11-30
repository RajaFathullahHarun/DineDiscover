import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { fetchReviews } from '../api/api';

const DetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true); // Start loading
      try {
        const reviewsData = await fetchReviews(restaurant.id);
        if (reviewsData.error) {
          setError(reviewsData.error); // Set error from API response
        } else {
          setReviews(reviewsData.reviews); // Assuming the data has a 'reviews' field
        }
      } catch (err) {
        setError(err.message); // Set error from catch block
      } finally {
        setLoading(false); // Stop loading regardless of result
      }
    };

    getReviews();
  }, [restaurant.id]);

  // Function to render categories
  const renderCategories = (categories) => {
    return categories.map((category, index) => (
      <View key={index} style={styles.categoryBadge}>
        <Text style={styles.categoryText}>{category.title}</Text>
      </View>
    ));
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error fetching reviews: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: restaurant.image_url }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <View style={styles.ratingPriceContainer}>
          <Text style={styles.rating}>{restaurant.rating} ⭐</Text>
          <Text style={styles.price}>{restaurant.price}</Text>
        </View>
        <View style={styles.categoryContainer}>
          {renderCategories(restaurant.categories)}
        </View>
        <Text style={styles.address}>{restaurant.location.display_address.join('\n')}</Text>
        <Text style={styles.phone}>{restaurant.display_phone}</Text>
      </View>

      {reviews.map((review) => (
        <View key={review.id} style={styles.reviewCard}>
          <Text style={styles.reviewText}>{review.text}</Text>
          <View style={styles.userInfo}>
            {review.user.image_url && (
              <Image source={{ uri: review.user.image_url }} style={styles.userImage} />
            )}
            <Text style={styles.userName}>{review.user.name}</Text>
          </View>
          <Text style={styles.reviewDate}>{review.time_created}</Text>
          <Text style={styles.rating}>Rating: {review.rating}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    padding: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  ratingPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    color: '#FFA500', // Orange color for rating
    marginRight: 15,
  },
  price: {
    fontSize: 18,
    color: '#008000', // Green color for price
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#E0E0E0', // Light grey background
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#333333',
  },
  address: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
    color: '#1E90FF', // Dodger blue color for phone
  },
  reviewCard: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  reviewText: {
    fontSize: 14,
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  reviewDate: {
    fontSize: 12,
    color: 'grey',
  },
});

export default DetailsScreen;

import axios from 'axios';

const API_KEY = 'zHyw2U5g3rrDfEE24q_9eH-gjlABPpQSyk2ctAxQlomhrWltNDZ17Af6iNeIPw3oAZY6dNq74lSORe4H9E1Mt5wX1xkmVKZge3RCPogeTpgp2f-MM4wsZEEr4gloZXYx'; // Replace with your API key
const API_BASE_URL = 'https://api.yelp.com/v3/';

const yelp = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const getRestaurants = async (location = 'Kuala Lumpur') => {
  try {
    const response = await yelp.get(`businesses/search`, {
      params: { location, categories: 'restaurants', limit: 10 },
    });
    return response.data.businesses;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};

export const fetchReviews = async (businessId) => {
  try {
    const response = await fetch(`https://api.yelp.com/v3/businesses/${businessId}/reviews`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return error; // Handle the error as needed
  }
};
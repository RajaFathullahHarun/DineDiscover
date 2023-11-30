import axios from 'axios';

const API_KEY = 'zHyw2U5g3rrDfEE24q_9eH-gjlABPpQSyk2ctAxQlomhrWltNDZ17Af6iNeIPw3oAZY6dNq74lSORe4H9E1Mt5wX1xkmVKZge3RCPogeTpgp2f-MM4wsZEEr4gloZXYx'; // Replace with your API key
const API_BASE_URL = 'https://api.yelp.com/v3/';

const yelp = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const getRestaurants = async (location = 'San Francisco') => {
  try {
    const response = await yelp.get(`businesses/search`, {
      params: { location:'kualalumpur', categories: 'restaurants' },
    });
    return response.data.businesses;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};

import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getRestaurants } from '../api/api'; // Adjust the import path as needed

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
            setLoading(true);
            try {
                const data = await getRestaurants();
                setRestaurants(data);
                
                setError(null);
            } catch (err) {
                setError('Error fetching restaurants');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            {/* Add more details as needed */}
        </View>
    );

    if (error) {
        return <Text>{error}</Text>;
    }

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <FlatList
            data={restaurants}
            renderItem={renderItem}
            keyExtractor={item => item.id} // Adjust according to your data structure
        />
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
});

export default RestaurantList;

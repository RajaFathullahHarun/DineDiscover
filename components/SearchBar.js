import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const SearchBar = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = () => {
    onSubmit(searchInput);
  };

  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search for restaurants: New york, Las vegas etc"
      value={searchInput}
      onChangeText={setSearchInput}
      onSubmitEditing={handleSearchSubmit} // Handle submission
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    fontSize: 16,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default SearchBar;

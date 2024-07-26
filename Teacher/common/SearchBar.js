import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const SearchBar = ({ placeholder, onChangeText }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.searchBarContainer}>
      <Image source={require('../../Assets/search-normal.png')} style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        value={searchQuery}
        onChangeText={handleSearch}
        placeholderTextColor="#9e9e9e"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 20,
    marginTop: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#9e9e9e',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});

export default SearchBar;

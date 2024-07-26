import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CustomDropdownTextInput = ({ options, selectedOption, onSelect }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    toggleDropdown();
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputl}>{selectedOption || 'Select Class'}</Text>
        <TouchableOpacity onPress={toggleDropdown}>
          <Image source={require('../Assets/dropdownIcon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {isDropdownOpen && (
        <View style={styles.dropdown}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={option.id}
              style={[styles.option, index !== 0 && styles.optionMarginTop]}
              onPress={() => handleOptionSelect(option)}
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
    padding: 10,
    borderWidth: 1,
    borderColor: '#6E6D8E',
    borderRadius: 8,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5
  },
  inputl: {
    fontSize: 18,
  },
  dropdown: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#6E6D8E',
    borderRadius: 8,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff', // Added background color for the dropdown
  },
  option: {
    padding: 10, // Adjusted padding for options
    borderBottomWidth: 1,
    borderBottomColor: '#6E6D8E',
    backgroundColor: '#f9f9f9', // Background color for options
  },
  optionMarginTop: {
    marginTop: 5,
  },
  icon: {
    height: 10,
    width: 15,
    marginLeft: 150, // Align icon to the right
  },
});

export default CustomDropdownTextInput;

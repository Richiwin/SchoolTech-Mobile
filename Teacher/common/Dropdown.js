import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CustomDropdownTextInput = ({ options, selectedOption, onSelect, placeholder }) => {
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
        <Text style={styles.inputLabel}>{selectedOption?.label || placeholder}</Text>
        <TouchableOpacity onPress={toggleDropdown}>
          <Image source={require('../../Assets/dropdownIcon.png')} style={styles.icon} />
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#EDF1F7',
    borderRadius: 8,
    marginTop: 5,
  },
  inputLabel: {
    fontSize: 18,
  },
  dropdown: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#6E6D8E',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#6E6D8E',
    backgroundColor: '#f9f9f9',
  },
  optionMarginTop: {
    marginTop: 5,
  },
  icon: {
    height: 10,
    width: 15,
    marginLeft: 200,
  },
});

export default CustomDropdownTextInput;

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Alert, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CustomDropdownTextInput from '../common/Dropdown';
import CustomCalendar from '../common/CustomCalendar';

const Attendance = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const navigation = useNavigation();

  const classOptions = [
    { id: 1, label: 'Pre Nursery' },
    { id: 2, label: 'Basic 1' },
    { id: 3, label: 'Basic 2' },
    { id: 4, label: 'Basic 3' },
    { id: 5, label: 'Basic 4' },
    { id: 6, label: 'Basic 5' },
    { id: 7, label: 'JSS1' },
    { id: 8, label: 'JSS2' },
    { id: 9, label: 'JSS3' },
    { id: 10, label: 'SSS1' },
    { id: 11, label: 'SSS2' },
    { id: 12, label: 'SSS3' },
  ];


  const handleNext = () => {
    if (!selectedClass) {
      Alert.alert('Error', 'Please select all options before proceeding.');
      return;
    }

    // Perform the navigation or other action here
    navigation.navigate('allstudentlist', {
      selectedClass,
      
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.navigate('teacherdashboard')}
        >
          <Image source={require('../../Assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Attendance</Text>
        <Text style={styles.textNote}>Mark student attendance either present or absent.</Text>
      </View>
      <ScrollView> 
      <View style={styles.section}>
       <View style={styles.year}>
       <Text style={styles.number}>2023/2024</Text>
       </View>
       <View style={styles.term}>
       <Text style={styles.ter}>Second term</Text>
       </View>
       </View>
    
      <CustomCalendar />
      <View style={styles.textContainer}>
        <Text style={styles.textList}>List of classes</Text>
        <CustomDropdownTextInput
          options={classOptions}
          selectedOption={selectedClass}
          onSelect={setSelectedClass}
          placeholder="Select Class"
        />
   
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  icon: {
    width: 15,
    height: 10,
    marginRight: 15,
    marginLeft: 4,
    marginTop: 5,
  },
  backIcon: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginTop: 25,
    borderRadius: 100,
    backgroundColor: '#fff',
    borderColor: '#727272',
    borderWidth: 1,
  },
  textContainer: {
    marginLeft: 20,
    marginTop: 4,
    marginBottom: 20,
    marginRight: 20
  },
  text: {
    color: '#020064',
    fontSize: 21,
    fontWeight: 'bold',
  },
  textNote: {
    color: '#020064',
    fontSize: 18,
  },
  textList: {
    color: '#020064',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6E6D8E',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#6E6D8E',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    color: '#020064',
  },
  nextButton: {
    backgroundColor: '#020064',
    borderRadius: 8,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  section: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10
  },
  year: {
    backgroundColor: '#ffffff',
    height: 46,
    marginLeft: 10,
    width: 160,
    borderRadius: 4,
    marginTop: 10,
    borderWidth: 0.40
  },
  term: {
    backgroundColor: '#ffffff',
    height: 46,
    marginLeft: 10,
    width: 160,
    borderRadius: 4,
    marginTop: 10,
    borderWidth: 0.40
  },
  number: {
    fontSize: 15,
    lineHeight: 20,
    marginLeft: 40,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
  ter: {
    fontSize: 15,
    lineHeight: 20,
    marginLeft: 40,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default Attendance;

import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar,
  Alert,
  Image,
  SafeAreaView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomDropdownTextInput from './Dropdown';
import axios from 'axios';

const StudentPreRegistration = () => {
  const [surname, setSurname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [students, setStudents] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const parentId = route.params?.parentId;

  const options = [
    { id: 6, label: 'Pre Nursery' },
    { id: 1, label: 'Basic 1' },
    { id: 2, label: 'Basic 2' },
    { id: 3, label: 'Basic 3' },
    { id: 4, label: 'Basic 4' },
    { id: 5, label: 'Basic 5' },
    { id: 1, label: 'JSS1' },
    { id: 2, label: 'JSS2' },
    { id: 3, label: 'JSS3' },
    { id: 4, label: 'SSS1' },
    { id: 5, label: 'SSS2' },
    { id: 6, label: 'SSS3' },
  ];

  const handleSelect = option => {
    setSelectedOption(option.label);
  };

  const handleAddStudent = () => {
    if (!surname || !firstName || !middleName || !selectedOption) {
      Alert.alert('Error', 'Please fill all the fields.');
      return;
    }

    const studentData = {
      surname,
      firstName,
      middleName,
      selectedClass: selectedOption,
    };

    setStudents([...students, studentData]);

    setSurname('');
    setFirstName('');
    setMiddleName('');
    setSelectedOption('');
  };

  const handleNext = async () => {
    if (
      students.length === 0 &&
      (!surname || !firstName || !middleName || !selectedOption)
    ) {
      Alert.alert(
        'Error',
        'Please fill all the fields or add at least one student.',
      );
      return;
    }

    if (surname && firstName && middleName && selectedOption) {
      handleAddStudent();
    }

    try {
      const response = await axios.post(
        'https://schtech.ebs-rcm.com/api/ParentRegisterStudent',
        {
          firstName,
          lastName: surname,
          middleName,
          parentId,
          classId: selectedOption,
        },
      );

      console.log('Response from API:', response.data);

      navigation.navigate('paymentinformation', {
        studentData: students,
        apiResponse: response.data,
      });
    } catch (error) {
      console.error('Error registering student:', error);
      Alert.alert(
        'Error',
        'An error occurred while registering the student. Please try again.',
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#020064" barStyle="light-content" />
      <TouchableOpacity
          style={styles.backIcon}
          onPress={() => {
            console.log('Navigating back to parentdashboard screen');
            navigation.navigate('parentdashboard');
          }}>
          <Image source={require('../Assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.title}>Student Registration Form</Text>
          <Text style={styles.subtitle}>
            To register your student kindly fill the details below
          </Text>
        </View>

        <TouchableOpacity style={styles.customButton} onPress={handleAddStudent}>
          <View style={styles.addContainer}>
            <Image source={require('../Assets/addIcon.png')} style={styles.add} />
          </View>
          <Text style={styles.customButtonText}>Add Account</Text>
        </TouchableOpacity>

        {students.map((student, index) => (
          <View key={index} style={styles.studentContainer}>
            <Text style={styles.student}>Student {index + 1}</Text>
            <Text style={styles.info}>Surname: {student.surname}</Text>
            <Text style={styles.info}>First Name: {student.firstName}</Text>
            <Text style={styles.info}>Middle Name: {student.middleName}</Text>
            <Text style={styles.info}>Class: {student.selectedClass}</Text>
          </View>
        ))}

        <View style={styles.formContainer}>
          <Text>Parent ID: {parentId}</Text>
          <Text style={styles.label}>Surname</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter surname"
            value={surname}
            onChangeText={setSurname}
          />

          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter first name"
            value={firstName}
            onChangeText={setFirstName}
          />

          <Text style={styles.label}>Middle Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter middle name"
            value={middleName}
            onChangeText={setMiddleName}
          />

          <Text style={styles.label}>Select Class</Text>
          <CustomDropdownTextInput
            options={options}
            selectedOption={selectedOption}
            onSelect={handleSelect}
          />
        </View>

  
      </ScrollView>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    alignItems: 'left',
    marginTop: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#020064',
  },
  subtitle: {
    fontSize: 16,
    color: '#6E6D8E',
    marginTop: 10,
    marginBottom: 20,
  },
  studentContainer: {
    borderWidth: 1,
    borderColor: '#6E6D8E',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  student: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#020064',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#6E6D8E',
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
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
  customButton: {
    flexDirection: 'row',
    width: 120,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 240,
    marginBottom: 10,
  },
  customButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  addContainer: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 20,
  },
  add: {
    height: 10,
    width: 10,
    marginLeft: 1,
    marginTop: 2,
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
    borderWidth: 1
  },
});

export default StudentPreRegistration;

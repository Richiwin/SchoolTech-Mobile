import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native';
import Pagination from '../Common/Pagination';
import axios from 'axios';
import { APP_BASE_URL } from '@env';

const SignUp = ({ navigation }) => {
  const [parentLastname, setParentLastname] = useState('');
  const [parentFirstName, setParentFirstName] = useState('');
  const [parentMiddleName, setParentMiddleName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhoneNumber, setParentPhoneNumber] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = 2;

  const baseURL = APP_BASE_URL;
  console.log('Base URL:', baseURL);

  const authService = axios.create({
    baseURL: baseURL,
  });

  const sendOtp = async () => {
    try {
      const endpoint = 'InsertParentDetails';
      const fullURL = `${baseURL}${endpoint}`;
      console.log('Full URL:', fullURL);

      const response = await authService.post(endpoint, {
        parentFirstName,
        parentMiddleName,
        parentLastname,
        parentEmail,
        parentPhoneNumber,
      });

      if (response.status !== 200) {
        throw new Error(`HTTP status ${response.status}`);
      }

      const responseText = response.data;
      console.log('Response text:', responseText);

      if (responseText.includes('Parent Details Inserted and OTP sent')) {
        console.log('OTP sent successfully:', responseText);
        navigation.navigate('verificationcode', { email: parentEmail });
      } else {
        console.error('Failed to send OTP:', responseText);
        Alert.alert('Error', 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      Alert.alert('Error', `An error occurred: ${error.message}`);
    }
  };

  const handleSignUp = () => {
    console.log('Signing up with:', {
      parentLastname,
      parentFirstName,
      parentMiddleName,
      parentEmail,
      parentPhoneNumber,
    });
    sendOtp();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar backgroundColor="#020064" barStyle="light-content" />
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 0, marginBottom: 10 }}>
        <Pagination pageCount={pageCount} currentPage={currentPage} />
        <Text style={styles.in}>Sign Up</Text>
        <Text style={styles.Signuptext}>
          Get started with your account while taking charge of your courses
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <Text style={styles.email}>Surname</Text>
        <TextInput
          placeholder="Enter your surname"
          style={styles.input}
          value={parentLastname}
          onChangeText={setParentLastname}
        />
        <Text style={styles.email}>First Name</Text>
        <TextInput
          placeholder="Enter your First Name"
          style={styles.input}
          value={parentFirstName}
          onChangeText={setParentFirstName}
        />
        <Text style={styles.email}>Middle Name</Text>
        <TextInput
          placeholder="Enter your Middle Name"
          style={styles.input}
          value={parentMiddleName}
          onChangeText={setParentMiddleName}
        />
        <Text style={styles.email}>Email</Text>
        <TextInput
          placeholder="Enter your email address"
          style={styles.input}
          value={parentEmail}
          onChangeText={setParentEmail}
        />
        <Text style={styles.email}>Phone Number</Text>
        <TextInput
          placeholder="Enter your phone number"
          style={styles.input}
          value={parentPhoneNumber}
          onChangeText={setParentPhoneNumber}
        />

        <TouchableOpacity style={styles.nextButton} onPress={handleSignUp}>
          <Text style={styles.text4}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.signin}>
          <TouchableOpacity
            style={styles.si}
            onPress={() => {
              console.log('Navigating to signin screen');
              navigation.navigate('signin');
            }}
          >
            <Text style={styles.mem}>
              Have an account?<Text style={styles.signup}> Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  sign: {
    color: '#020064',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: 20,
  },
  email: {
    color: '#6E6D8E',
    fontWeight: 'bold',
    marginLeft: 14,
    fontSize: 18,
    marginTop: 15,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#6E6D8E',
    padding: 8,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    color: '#6E6D8E',
    backgroundColor: '#ffffff',
  },
  Signuptext: {
    fontSize: 14,
    padding: 2,
    marginTop: 2,
    marginLeft: 20,
    marginRight: 20,
    color: '#6E6D8E',
  },
  nextButton: {
    width: '90%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#020064',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
    marginLeft: 18,
    marginBottom: 20,
    marginRight: 10,
  },
  signin: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mem: {
    color: '#6E6D8E',
    fontSize: 14,
  },
  signup: {
    color: '#020064',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text4: {
    color: '#ffffff',
    fontSize: 16,
  },
  in: {
    color: '#020064',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SignUp;

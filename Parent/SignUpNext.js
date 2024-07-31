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
} from 'react-native';
import axios from 'axios'; // Ensure axios is imported
import Pagination from '../Common/Pagination';
import { APP_BASE_URL } from '@env';

const SignUpNext = ({ navigation, route }) => {
  const { email } = route.params;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const baseURL = APP_BASE_URL;
  console.log('Base URL:', baseURL);

  const handleSignUpNext = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }

    try {
      const endpoint = 'InsertParentLoginDetails';
      const fullURL = `${baseURL}${endpoint}`;
      console.log('Full URL:', fullURL);

      const response = await axios.post(fullURL, {
        UserName: username,
        Email: email,
        Password: password,
        ConfirmPassword: confirmPassword,
      });

      console.log('Response data:', response.data);
      Alert.alert('Success', 'Account created successfully.');
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
        Alert.alert('Error', error.response.data.message || 'An error occurred.');
      } else if (error.request) {
        console.error('Error request:', error.request);
        Alert.alert('Error', 'No response from server. Please try again later.');
      } else {
        console.error('Error message:', error.message);
        Alert.alert('Error', 'An unexpected error occurred. Please try again.');
      }
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#020064" barStyle="light-content" />
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 0, marginBottom: 10 }} />
      <Pagination pageCount={2} currentPage={1} />
      <Text style={styles.in}>Sign Up</Text>
      <Text style={styles.Signuptext}>Get started with your account while taking charge of your courses</Text>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <Text style={styles.email}>Username</Text>
        <TextInput
          placeholder="Enter your username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.email}>Password</Text>
        <TextInput
          placeholder="Create your password"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.email}>Confirm Password</Text>
        <TextInput
          placeholder="Confirm password"
          style={styles.input}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.textButton} onPress={handleSignUpNext}>
          <Text style={styles.text4}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backtext}>Back</Text>
        </TouchableOpacity>
        <View style={styles.signin}>
          <TouchableOpacity
            style={styles.si}
            onPress={() => {
              console.log('Navigating to signin screen');
              navigation.navigate('signin');
            }}
          >
            <Text style={styles.mem}>Have an account?<Text style={styles.signup}> Sign In</Text></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  email: {
    color: '#6E6D8E',
    fontWeight: 'bold',
    marginLeft: 14,
    fontSize: 18,
    marginTop: 15,
  },
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#6E6D8E',
    padding: 8,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    color: '#6E6D8E',
    backgroundColor: '#ffffff'
  },
  Signuptext: {
    fontSize: 14,
    padding: 2,
    marginTop: 2,
    marginLeft: 20,
    marginRight: 20,
    color: '#6E6D8E',
  },
  textButton: {
    width: '90%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#020064',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginLeft: 18,
    marginBottom: 10,
    marginRight: 10
  },
  backButton: {
    width: '90%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#D2D2D2',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 18,
    marginBottom: 40,
    marginRight: 10,
  },
  signin: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  mem: {
    color: '#6E6D8E',
    fontSize: 14
  },
  signup: {
    color: '#020064',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text4: {
    color: '#ffffff',
    fontSize: 16
  },
  backtext: {
    color: '#000000',
    fontSize: 16
  },
  in: {
    color: '#020064',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20
  },
});

export default SignUpNext;

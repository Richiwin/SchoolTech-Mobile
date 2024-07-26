import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Ensure the environment variable is set correctly
const baseURL = process.env.APP_BASE_URL;
if (!baseURL) {
  console.error('APP_BASE_URL is not set');
}

const authService = axios.create({
  baseURL: baseURL,
});

export const studentLogin = async (username, password, navigation) => {
  try {
    const requestBody = {
      Username: username,
      Password: password,
    };

    const response = await authService.post('/PostLoginDetails', requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = response.data;
    console.log('Response data:', responseData);

    // Check if the entity type is 'STUDENT'
    if (responseData.entityType === 'STUDENT') {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('entityType', responseData.entityType);
      // Optionally store token if needed
      // await AsyncStorage.setItem('token', responseData.token);
      navigation.navigate('studentdashboard');
    } else {
      Alert.alert('Access Denied', 'Only students are allowed to log in.');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    if (error.response) {
      const status = error.response.status;
      const errorMessage = error.response.data;

      if (status === 401) {
        // Unauthorized (invalid credentials)
        console.error('Unauthorized:', errorMessage);
        Alert.alert('Login Failed', 'Invalid credentials. Please check your username and password.');
      } else if (status === 403) {
        // Forbidden
        console.error('Forbidden:', errorMessage);
        Alert.alert('Access Denied', 'You do not have permission to access this resource.');
      } else if (status >= 500) {
        // Server error
        console.error('Server Error:', errorMessage);
        Alert.alert('Server Error', 'An error occurred on the server. Please try again later.');
      } else {
        console.error('Login failed:', errorMessage);
        Alert.alert('Login Failed', 'An error occurred. Please try again.');
      }
    } else if (error.request) {
      console.error('Network error:', error.request);
      Alert.alert('Network Error', 'Please check your internet connection and try again.');
    } else {
      console.error('Error:', error.message);
      Alert.alert('Login Failed', 'An error occurred. Please try again.');
    }
  }
};

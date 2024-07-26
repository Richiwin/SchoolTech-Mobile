import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = process.env.APP_BASE_URL;
console.log(baseURL);

const authService = axios.create({
  baseURL: baseURL,
});

export const teacherLogin = async (username, password, navigation) => {
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

    // Checking if the response status is successful (HTTP status 200-299)
    if (response.status >= 200 && response.status < 300) {
      // Checking if the logged-in user is a teacher
      if (responseData.entityType === 'TEACHER') {
        // Storing user data securely using AsyncStorage
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('entityType', responseData.entityType);
        await AsyncStorage.setItem('entityId', responseData.entityId.toString()); // Store entity ID as string

        // Navigating to the 'teacherdashboard' screen and passing 'entityId' as 'teacherId'
        navigation.navigate('teacherdashboard', { teacherId: responseData.entityId });
      } else {
        // Alerting the user if login is denied for non-teacher user types
        Alert.alert('Error', 'Access denied. Only teachers are allowed to log in.');
      }
    } else if (response.status === 401) {
      // Handling unauthorized access (invalid credentials)
      const errorMessage = response.data.message || 'Invalid credentials';
      console.error('Login failed:', errorMessage);
      throw { code: 'INVALID_CREDENTIALS' };
    } else {
      // Handling other server-side errors
      const errorMessage = response.data.message || 'Unknown error';
      console.error('Login failed:', errorMessage);
      throw { code: 'UNKNOWN_ERROR' };
    }
  } catch (error) {
    // Handling client-side errors such as network issues or unexpected errors
    console.error('Error logging in:', error);
    if (error.code === 'INVALID_CREDENTIALS') {
      Alert.alert('Error', 'Invalid credentials. Please check your username and password.');
    } else if (error.code === 'NETWORK_ERROR') {
      Alert.alert('Error', 'Network error. Please check your internet connection and try again.');
    } else {
      Alert.alert('Error', 'Login failed. Please check your username and password.');
    }
  }
};

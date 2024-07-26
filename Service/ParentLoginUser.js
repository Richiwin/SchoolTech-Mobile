import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = process.env.APP_BASE_URL;
console.log(baseURL);

const authService = axios.create({
  baseURL: baseURL,
});
export const parentLogin = async (username, password, navigation) => {
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
  
      // Checking if the response from the server is successful (HTTP status 200-299)
      if (response.ok) {
        // Parsing the JSON response data
        const responseData = await response.json();
  
        // Checking if the logged-in user is a parent
        if (responseData.entityType === 'PARENT') {
          // Storing user data securely using AsyncStorage
          await AsyncStorage.setItem('username', username);
          await AsyncStorage.setItem('entityType', responseData.entityType);
          await AsyncStorage.setItem('entityId', responseData.entityId.toString()); // Store parent ID as string
  
          // Navigating to the 'StudentPreRegistration' screen and passing 'entityId' as 'parentId'
          navigation.navigate('parentdashboard', { parentId: responseData.entityId });
        } else {
          // Alerting the user if login is denied for non-parent user types
          Alert.alert('Error', 'Access denied. Only parents are allowed to log in.');
        }
      } else if (response.status === 401) {
        // Handling unauthorized access (invalid credentials)
        const errorMessage = await response.text();
        console.error('Login failed:', errorMessage);
        throw { code: 'INVALID_CREDENTIALS' };
      } else {
        // Handling other server-side errors
        const errorMessage = await response.text();
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
  
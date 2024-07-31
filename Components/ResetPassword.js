import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Pagination from '../Common/Pagination';
import axios from 'axios';
import { APP_BASE_URL } from '@env';

const ResetPassword = ({ navigation, route }) => {
  const { email = '' } = route.params; // Destructuring with default value
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const baseURL = APP_BASE_URL;
  console.log('Base URL:', baseURL);

  // Function to handle password reset
  const handleResetPassword = async () => {
    if (password === confirmPassword) {
      try {
        const endpoint = 'SetNewPassword';
        const fullURL = `${baseURL.replace(/\/$/, '')}/${endpoint}`;
        console.log('Full URL:', fullURL);
  
        const response = await axios.post(fullURL, {
          email: email, // Email receiving the OTP
          Password: password, // Match the key with the expected case
          ConfirmedPassword: confirmPassword, // Match the key with the expected case
        });

        if (response.status === 200) {
          Alert.alert('Success', 'Password reset successful', [
            { text: 'OK', onPress: () => navigation.navigate('changedpassword') }
          ]);
        } else {
          Alert.alert('Failure', 'Password reset failed. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    } else {
      Alert.alert('Error', 'New password and confirm password do not match.');
    }
  };

  return (
    <View style={styles.container}>
      <Pagination pageCount={3} currentPage={2} />
      <Text style={styles.for}>Reset password</Text>
      <Text style={styles.text}>Please create a new password for your account</Text>
      <Text style={styles.email}>{email}</Text> 
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email address"
          style={styles.input}
          value={email}
          editable={false} // Make email field non-editable
        />
        <Text style={styles.label}>New password</Text>
        <TextInput
          placeholder="Enter new password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} // Hide the entered text
        />
        <Text style={styles.label}>Confirm password</Text>
        <TextInput
          placeholder="Confirm your password"
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true} // Hide the entered text
        />
      </View>
      <TouchableOpacity style={styles.textButton} onPress={handleResetPassword}>
        <Text style={styles.reset}>Reset password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
  },
  email: {
    color: '#020064',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 20,
    marginBottom: 10,
  },
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#6E6D8E',
    padding: 8,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 25,
    color: '#020064',
    backgroundColor: '#ffffff',
  },
  label: {
    color: '#6E6D8E',
    fontWeight: '400',
    marginLeft: 20,
    marginTop: 20,
  },
  for: {
    color: '#020064',
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  text: {
    color: '#6E6D8E',
    marginLeft: 20,
    fontSize: 16,
    marginTop: 10,
  },
  textButton: {
    width: '88%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#020064',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 18,
    marginBottom: 40,
    marginRight: 10,
  },
  reset: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default ResetPassword;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import Pagination from '../Common/Pagination';
import axios from 'axios';
import { APP_BASE_URL } from '@env';

const ForgotPassword = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const pageCount = 3;

  const handleSendEmail = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter an email address');
      return;
    }

    setLoading(true);

    const baseURL = APP_BASE_URL;
    console.log('Base URL:', baseURL);

    const authService = axios.create({
      baseURL: baseURL,
    });

    try {
      // i Ensured that the endpoint is correctly concatenated with a single slash
      const endpoint = 'forgotpassword';
      const fullURL = `${baseURL}${endpoint}`;
      console.log('Full URL:', fullURL);

      const response = await authService.post(endpoint, { email });

      if (response.status === 200) {
        navigation.navigate('verifyemailcode', { email });
      } else {
        Alert.alert('Error', response.data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Pagination pageCount={pageCount} currentPage={currentPage} />
      <Text style={styles.for}>Forgot password</Text>
      <Text style={styles.text}>
        It’s not your fault as it can happen to anybody. Please enter the email address attached to
        your account
      </Text>
      <View>
        <Text style={styles.email}>Email</Text>
        <TextInput
          keyboardType="email-address"
          placeholder="Enter your email address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.textButton} onPress={handleSendEmail} disabled={loading}>
          {loading ? <ActivityIndicator color="#ffffff" /> : <Text style={styles.get}>Get code</Text>}
        </TouchableOpacity>
      </View>
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
    fontWeight: '400',
    marginLeft: 14,
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
  for: {
    color: '#020064',
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    color: '#6E6D8E',
    marginLeft: 20,
    fontSize: 16,
    marginBottom: 50,
  },
  textButton: {
    width: '88%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#020064',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 18,
    marginBottom: 40,
    marginRight: 10,
  },
  signin: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  get: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default ForgotPassword;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import Pagination from '../Common/Pagination';

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

    try {
      const response = await fetch('https://schtech.ebs-rcm.com/api/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        navigation.navigate('verifyemailcode', { email });
      } else {
        Alert.alert('Error', result.message || 'Something went wrong');
      }
    } catch (error) {
      navigation.navigate('verifyemailcode', { email });
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
          type="email"
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

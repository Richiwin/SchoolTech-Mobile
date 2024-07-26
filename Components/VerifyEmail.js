import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Pagination from '../Common/Pagination';

const VerifyEmail = ({ navigation, route }) => {
  const [otp, setOtp] = useState(''); // State to store the OTP input
  const [otpTimer, setOtpTimer] = useState(299); // Initial timer value in seconds
  const email = route.params?.email || ''; // Retrieve the email from route parameters

  // Simulating the OTP timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setOtpTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Convert seconds to minutes and seconds format
  const formatTimer = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleConfirmCode = async () => {
    if (otp.trim() === '') {
      Alert.alert('Error', 'Please enter the OTP');
      return;
    }

    try {
      const response = await fetch('https://your-api-endpoint.com/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'OTP verified successfully');
        navigation.navigate('resetpassword');
      } else {
        Alert.alert('Error', result.message || 'Invalid OTP');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to verify OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Pagination pageCount={3} currentPage={1} />
      <Text style={styles.for}>Verify email</Text>
      <Text style={styles.text}>Please enter the OTP sent to your email address</Text>
      <Text style={styles.gmail}>{email}</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          keyboardType="numeric"
          value={otp}
          onChangeText={setOtp}
        />
        <View style={styles.code}>
          <Text style={styles.codexp}>
            Code expires in <Text style={styles.count}>{formatTimer(otpTimer)}</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.textButton}
          onPress={handleConfirmCode}
          disabled={otpTimer === 0}
        >
          <Text style={styles.confirm}>Confirm code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  for: {
    color: '#020064',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  text: {
    color: '#6E6D8E',
    fontSize: 16,
    marginTop: 10,
  },
  textButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#020064',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  code: {
    flexDirection: 'row',
    marginTop: 50,
  },
  codexp: {
    color: '#6E6D8E',
  },
  gmail: {
    color: '#020064',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
  },
  count: {
    color: '#F04438',
  },
  confirm: {
    color: '#ffffff',
    fontSize: 16,
  },
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#6E6D8E',
    padding: 8,
    marginTop: 20,
    color: '#020064',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
});

export default VerifyEmail;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import ConfirmCode from '../Common/ConfirmCode';

const VerificationCode = ({ navigation, route }) => {
  const { email } = route.params; // Ensure this line is correct
  const [timeLeft, setTimeLeft] = useState(600); // 5 minutes timer

  useEffect(() => {
    if (timeLeft === 0) {
      Alert.alert('Code expired', 'Your verification code has expired. Please request a new code.');
    }

    const timer = timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);
  const verifyCode = async (code) => {
    try {
      const response = await fetch('https://schtech.ebs-rcm.com/api/VerifyOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, OTP: code }),
      });
  
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
  
      const contentType = response.headers.get('content-type');
      let data;
  
      if (contentType && contentType.indexOf('application/json') !== -1) {
        data = await response.json();
      } else {
        data = await response.text();
      }
  
      console.log('Response data:', data);
  
      if (response.ok) {
        if (typeof data === 'string') {
          console.log('OTP sent successfully:', data);
          Alert.alert('Success', data);
          navigation.navigate('signupnext', { email });
        } else if (data.success) {
          console.log('Code verified successfully');
          navigation.navigate('signupnext', { email });
        } else {
          console.log('Verification failed:', data.message);
          Alert.alert('Invalid verification code', data.message || 'Please try again.');
        }
      } else {
        console.log('Response not ok:', response.status);
        Alert.alert('Invalid verification code', 'Please try again.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      Alert.alert('Error', 'Failed to verify code. Please try again.');
    }
  };
  

  const handleCodeComplete = async (code) => {
    if (code.length === 6) { // Assuming the code length is 6
      verifyCode(code);
    }
  };

  const handleResendCode = async () => {
    try {
      const response = await fetch('https://schtech.ebs-rcm.com/api/ResendOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log('Resend response:', data);

      if (response.ok) {
        Alert.alert('Success', 'A new verification code has been sent to your email.');
        setTimeLeft(600); // Reset timer to 5 minutes
      } else {
        Alert.alert('Error', data.message || 'Failed to resend verification code. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to resend verification code. Please try again.');
      console.error('Resend error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../Assets/code-img.png')} style={styles.image} />
      <View style={styles.textcontainer}>  
        <Text style={styles.title}>Verification Code</Text>
        <Text style={styles.text}>We have sent a verification code to your</Text>
        <Text style={styles.text2}> email address</Text>
        <Text style={styles.text1}>{email}</Text>
      </View>
      <View>
        <ConfirmCode onChangeCode={handleCodeComplete} />
        <View style={styles.code}>
          <Text style={styles.codexp}>
            Code expires in <Text style={styles.count}>{Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2)}s</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.textcode} onPress={handleResendCode}>
          <Text style={styles.recode}>Resend Code</Text>
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
    paddingTop: 40,
  },
  title: {
    color: '#020064',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    color: '#6E6D8E',
    fontSize: 18,
    marginBottom: 1,
    alignItems: 'center',
    
  },
  text2: {
    color: '#6E6D8E',
    fontSize: 18,
    marginBottom: 10,
    alignItems: 'center',
    
  },
  text1: {
    color: '#020064',
    fontSize: 18,
    marginBottom: 10,
    alignItems: 'center',
    fontWeight: 'bold'
  },
  textcontainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  email: {
    color: '#020064',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
  code: {
    flexDirection: 'row',
    marginTop: 80,
    alignItems: 'center',
  },
  textcode: {
    width: '90%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#020064',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 10,
  },
  codexp: {
    color: '#6E6D8E',
    fontSize: 16,
  },
  count: {
    color: '#F04438',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recode: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    height: 150,
    width: 250,
    borderRadius: 14,
    marginTop: 50,
    marginLeft: 20,
  },
});

export default VerificationCode;

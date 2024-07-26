import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import ConfirmCode from '../Common/ConfirmCode';


const EmailVerification = ({ navigation, route }) => {

  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes timer

  useEffect(() => {
    if (timeLeft === 0) {
      Alert.alert('Code expired', 'Your verification code has expired. Please request a new code.');
    }

    const timer = timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const verifyCode = async (code) => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code }),
      });

      if (response.ok) {
        navigation.navigate('confirmotp', { email });
      } else {
        Alert.alert('Invalid verification code', 'Please try again.');
      }
    } catch (error) {
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
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        Alert.alert('Success', 'A new verification code has been sent to your email.');
        setTimeLeft(300); // Reset timer to 5 minutes
      } else {
        Alert.alert('Error', 'Failed to resend verification code. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to resend verification code. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
    <Image source={require('../Assets/code-img.png')} style={styles.image} />
      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.text}>We have sent verification to your email</Text>
      <Text style={styles.text1}>email address</Text>
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
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 50
  },
  text: {
    color: '#6E6D8E',
    fontSize: 18,
    marginBottom: 10,
    alignItems: 'center',
   marginLeft: 30
  },
  text1: {
    color: '#6E6D8E',
    fontSize: 18,
    marginBottom: 10,
    alignItems: 'center',
   marginLeft: 120
  },
  email: {
    color: '#020064',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
  code: {
    flexDirection: 'row',
    marginTop: 60,
    alignItems: 'center'
  },

  textcode: {
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
    width: 300,
    borderRadius: 14,
    marginTop: 50,

  },
});

export default EmailVerification;



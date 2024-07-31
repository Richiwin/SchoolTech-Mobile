import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import ConfirmCode from '../Common/ConfirmCode';
import axios from 'axios';
import {APP_BASE_URL} from '@env';

const VerifyEmailCode = ({navigation, route}) => {
  const {email} = route.params;
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes timer

  const baseURL = APP_BASE_URL;

  useEffect(() => {
    if (timeLeft === 0) {
      Alert.alert(
        'Code expired',
        'Your verification code has expired. Please request a new code.',
      );
    }

    const timer =
      timeLeft > 0 &&
      setInterval(() => setTimeLeft(prevTime => prevTime - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const verifyCode = async code => {
    try {
      const endpoint = 'verifyotp';
      const fullURL = `${baseURL.replace(/\/$/, '')}/${endpoint}`;
      console.log('Full URL:', fullURL);

      const response = await axios.post(fullURL, {
        email,
        code,
      });

      if (response.status === 200) {
        navigation.navigate('resetpassword', {email});
      } else {
        Alert.alert(
          'Invalid verification code',
          response.data.message || 'Please try again.',
        );
      }
    } catch (error) {
      console.error(
        'Error:',
        error.response ? error.response.data : error.message,
      );
      Alert.alert(
        'Error',
        `Failed to verify code. ${
          error.response ? error.response.data.message : error.message
        }`,
      );
    }
  };

  const handleCodeComplete = code => {
    if (code.length === 6) {
      // Assuming the code length is 6
      verifyCode(code);
    }
  };

  const handleResendCode = async () => {
    try {
      const endpoint = 'forgotpassword';
      const fullURL = `${baseURL.replace(/\/$/, '')}/${endpoint}`;
      console.log('Full URL:', fullURL);

      const response = await axios.post(fullURL, {
        email,
      });

      if (response.status === 200) {
        Alert.alert(
          'Success',
          'A new verification code has been sent to your email.',
        );
        setTimeLeft(300); // Reset timer to 5 minutes
      } else {
        Alert.alert(
          'Error',
          response.data.message ||
            'Failed to resend verification code. Please try again.',
        );
      }
    } catch (error) {
      console.error(
        'Error:',
        error.response ? error.response.data : error.message,
      );
      Alert.alert(
        'Error',
        `Failed to resend verification code. ${
          error.response ? error.response.data.message : error.message
        }`,
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify email</Text>
      <Text style={styles.text}>
        Please enter the code sent to your email to verify your account.
      </Text>
      <Text style={styles.email}>{email}</Text>
      <View>
        <ConfirmCode onChangeCode={handleCodeComplete} />
        <View style={styles.code}>
          <Text style={styles.codexp}>
            Code expires in{' '}
            <Text style={styles.count}>
              {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}s
            </Text>
          </Text>
          <TouchableOpacity style={styles.textcode} onPress={handleResendCode}>
            <Text style={styles.recode}>Resend code</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    color: '#6E6D8E',
    fontSize: 16,
    marginBottom: 10,
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
    alignItems: 'center',
  },
  textcode: {
    marginLeft: 90,
    color: '#020064',
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
    color: '#020064',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerifyEmailCode;

import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, StatusBar, Image } from 'react-native'; // Add Alert to imports
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pagination from '../Common/Pagination';

const PasswordReset = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar backgroundColor="#020064" barStyle="light-content" /> 
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 0, marginBottom: 10 }}>
          <Pagination pageCount={2} currentPage={1} />
        </View>
        <Text style={styles.in}>Reset Password</Text>
        <Text style={styles.intext}>Welcome Iwebuke Rachel</Text>
        <Text style={styles.text}>Please reset password by creating a new</Text>
        <Text style={styles.text}>password..</Text>
        <View style={styles.PasswordContainer}>
          <Text style={styles.password}>New Password</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.inpute}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <Text style={styles.password}>Confirm New Password</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.inpute}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
        </View>
        <View>
          <View style={styles.stepContainer}>
            <Image source={require('../Assets/verify-icon.png')} style={styles.img} />
            <Text style={styles.stepText}>At least 8 characters</Text>
          </View>
          <View style={styles.stepContainer}>
            <Image source={require('../Assets/verify-icon.png')} style={styles.img} />
            <Text style={styles.stepText}>At least 1 number</Text>
          </View>
          <View style={styles.stepContainer}>
            <Image source={require('../Assets/verify-icon.png')} style={styles.img} />
            <Text style={styles.stepText}>Both upper and lower case letters</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.textButton}
          onPress={() => {
            console.log('Navigating to parentdashboard screen');
            navigation.navigate('passwordconfirmed')
          }}>
          <Text style={styles.text4}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logButton} onPress={() => navigation.navigate('teacherlogin')}>
          <Text style={styles.backtext}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  sign: {
    color: '#020064',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: 20,
  },
  email: {
    color: '#6E6D8E',
    fontWeight: 'bold',
    marginLeft: 14,
    fontSize: 18,
  },
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#6E6D8E',
    padding: 8,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    color: '#000000',
    backgroundColor: '#ffffff',
  },
  inpute: {
    flex: 1,
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#6E6D8E',
    padding: 8,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    color: '#000000',
    backgroundColor: '#ffffff',
  },
  password: {
    color: '#6E6D8E',
    fontWeight: 'bold',
    marginLeft: 14,
    marginTop: 20,
    fontSize: 18,
  },
  PasswordContainer: {
    marginBottom: 20,
  },
  pass: {
    color: '#020064',
    fontSize: 14,
  },
  forgotPassword: {
    marginLeft: 220,
    marginTop: 14,
    fontWeight: '400',
  },
  textButton: {
    width: '90%',
    height: 40,
    borderRadius: 8,
    backgroundColor: '#020064',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginLeft: 18,
    marginBottom: 20,
    marginRight: 10,
  },
  logButton: {
    width: '90%',
    height: 40,
    borderRadius: 8,
    backgroundColor: '#D2D2D2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 18,
    marginBottom: 40,
    marginRight: 10,
  },
  signin: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mem: {
    color: '#6E6D8E',
    fontSize: 14,
  },
  signup: {
    color: '#020064',
    fontSize: 14,
    fontWeight: 'bold',
  },
  backtext: {
    color: '#000000',
    fontSize: 16,
  },
  text4: {
    color: '#ffffff',
    fontSize: 16,
  },
  in: {
    color: '#020064',
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  intext: {
    color: '#020064',
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  passwordeye: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 14,
    position: 'relative',
    marginTop: 10,
  },
  icon: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 310,
  },
  text: {
    marginLeft: 20,
    color: '#6E6D8E',
    fontSize: 14,
  },
  textt: {
    marginLeft: 20,
    color: '#6E6D8E',
    marginBottom: 40,
    fontSize: 14,
  },
  stepContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,
  },
  stepText: {
    marginLeft: 20,
    fontSize: 14,
    color: '#000000',
  },
  img: {
    height: 20,
    width: 20,
  },
});

export default PasswordReset;

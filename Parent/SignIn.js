import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, StatusBar, Alert } from 'react-native';
import MyPager from '../Common/MyPager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { parentLogin } from '../Service/ParentLoginUser';

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      await parentLogin(username, password, navigation);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar backgroundColor="#020064" barStyle="light-content" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 0, marginBottom: 10 }}>
          <MyPager />
        </View>
        <Text style={styles.in}>Sign in</Text>
        <Text style={styles.email}>Username</Text>
        <TextInput
          placeholder="Enter your username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.password}>Password</Text>
        <View style={styles.passwordeye}>
          <TextInput
            placeholder="Enter your password"
            style={styles.inpute}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles.icon}>
            <Image
              source={showPassword ? require('../Assets/eye.png') : require('../Assets/eye-off.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => {
            console.log('Navigating to forgotpassword screen');
            navigation.navigate('forgotpassword');
          }}>
          <Text style={styles.pass}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.textButton} onPress={handleLogin}>
          <Text style={styles.text4}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.signin}>
          <TouchableOpacity
            style={styles.si}
            onPress={() => {
              console.log('Navigating to signup screen');
              navigation.navigate('signup');
            }}
          >
            <Text style={styles.mem}>Don't have an account?<Text style={styles.signup}> Sign up</Text></Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 18
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
    color: '#020064',
    backgroundColor: '#ffffff'
  },
  password: {
    color: '#6E6D8E',
    fontWeight: 'bold',
    marginLeft: 14,
    marginTop: 20,
    fontSize: 18
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
    marginTop: 35,
    marginLeft: 18,
    marginBottom: 40,
    marginRight: 10,
  },
  signin: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  mem: {
    color: '#6E6D8E',
    fontSize: 14
  },
  signup: {
    color: '#020064',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text4: {
    color: '#ffffff',
    fontSize: 16
  },
  in: {
    color: '#020064',
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  passwordeye: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 14,
    marginTop: 10
  },
  icon: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 310,
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
    backgroundColor: '#ffffff'
  },
});

export default SignIn;
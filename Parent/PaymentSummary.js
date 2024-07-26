import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const PaymentSummary = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => {
          console.log('Navigating to studentpreregistration  screen');
          navigation.navigate('studentpreregistration');
        }}>
        <Image source={require('../Assets/backIcon.png')} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.textcontainer}>
        <Text style={styles.text1}>Payment Summary</Text>
        <Text style={styles.text2}>payment summary and information </Text>
        <Text style={styles.text3}> for your student</Text>
      </View>
      <View style={{borderWidth: 0.1, borderColor: '#E4E4E4', marginTop: 20}} />
      <Text style={styles.text}>Students FirstName</Text>
      <Text style={styles.textInfo}>Micheal</Text>

      <View style={{borderWidth: 0.1, borderColor: '#E4E4E4', marginTop: 10}} />
      <Text style={styles.text}>Students Surname</Text>
      <Text style={styles.textInfo}>joseph</Text>

      <View style={{borderWidth: 0.1, borderColor: '#E4E4E4', marginTop: 10}} />
      <Text style={styles.text}>Student class</Text>
      <Text style={styles.textInfo}>Basic 5</Text>

      <View style={{borderWidth: 0.1, borderColor: '#E4E4E4', marginTop: 10}} />
      <Text style={styles.text}>parent first Name</Text>
      <Text style={styles.textInfo}>Rachel</Text>

      <View style={{borderWidth: 0.1, borderColor: '#E4E4E4', marginTop: 10}} />
      <Text style={styles.text}>Parent Surname</Text>
      <Text style={styles.textInfo}>Joseph</Text>

      <View style={{borderWidth: 0.1, borderColor: '#E4E4E4', marginTop: 10}} />
      <Text style={styles.text}>Parent Phone Number</Text>
      <Text style={styles.textInfo}>09069414681</Text>

      <View style={{borderWidth: 0.1, borderColor: '#E4E4E4', marginTop: 10}} />
      <Text style={styles.text}>Payment Amount</Text>
      <Text style={styles.textInfo}>#5000</Text>
      <View style={{borderWidth: 0.2, borderColor: '#E4E4E4', marginTop: 10}} />
      <View>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => {
            console.log('Navigating to paymentinformation  screen');
            navigation.navigate('paymentinformation');
          }}>
          <Text style={styles.textpay}>pay #5000</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  textcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text1: {
    color: '#020064',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text2: {
    color: '#8A8A8A',
    fontSize: 18,
  },
  text3: {
    color: '#8A8A8A',
    fontSize: 18,
    marginBottom: 5,
  },
  payButton: {
    width: '90%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#020064',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 18,
    marginBottom: 20,
    marginRight: 10,
  },
  textpay: {
    color: '#ffffff',
    fontSize: 16,
  },
  text: {
    color: '#8A8A8A',
    fontSize: 14,
    marginLeft: 40,
  },
  textInfo: {
    color: '#000000',
    fontSize: 26,
    marginLeft: 40,
  },
  icon: {
    width: 15,
    height: 10,
    marginRight: 15,
    marginLeft: 5,
    marginTop: 6,
  },
  backIcon: {
    width: 30,
    height: 25,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: '#fff',
    borderColor: '#727272',
    borderWidth: 1,
  },
});
export default PaymentSummary;

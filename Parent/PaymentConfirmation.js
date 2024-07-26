import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'


const PaymentConfirmation = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <View style={styles.Icon}>
    <Image source={require('../Assets/verify-icon.png')}  style={styles.img} />
    </View>
    <View style={styles.textContainer}>
    <Text style={styles.change}>Total Amount  </Text>
    <Text style={styles.success}>#1,000.00</Text>
    <Text style={styles.textpay}>Payment Successful! </Text>
    <Text style={styles.text}>Congratulations, your payment was</Text>
    <Text style={styles.text}>successfully processed</Text>
    </View>
    <TouchableOpacity style={styles.textButton}
    onPress={() => {
      console.log('Navigating to parentdashboard screen');
      navigation.navigate('parentdashboard')
    }}>
    <Text style={styles.sign}>Go Back</Text>
  </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  change: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 200
  },
  success: {
    color: '#000000',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  
  },
  text: {
    color: '#8A8A8A',
    fontSize: 18,
    lineHeight: 24,
  },
  textpay: {
    color: '#000000',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  textButton : {
    width: '88%', 
    height: 40, 
    borderRadius: 8, 
    backgroundColor: '#020064',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150, 
    marginLeft: 18,
    marginBottom: 40,
    marginRight: 10,
  },
  sign: {
    fontSize: 16,
    color: '#ffffff'
  },
  Icon: {
    height: 10,
    width: 200,
    textAlign: 'center',
    marginTop: 100
    },
    img: {
      height: 200,
      width: 200,
    },
})
export default PaymentConfirmation

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'





const ChangedPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <View style={styles.Icon}>
    <Image source={require('../Assets/squareoffset.png')}  style={styles.img} />
    </View>

    <Text style={styles.change}>Password changed!</Text>
    <Text style={styles.text}>You have successfully changed your password. Please proceed to dashboard</Text>
    <TouchableOpacity style={styles.textButton}
    onPress={() => {
      console.log('Navigating to dashboard screen');
      navigation.navigate('dashboard')
    }}>
    <Text style={styles.sign}>Sign in</Text>
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
  Icon: {
  height: 20,
  width: 20,
  textAlign: 'center',
  marginTop: 200
  },
  img: {
    height: 20,
    width: 20,
  },
  change: {
    color: '#020064',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30
  },
  text: {
    color: '#6E6D8E',
    fontSize: 18,
    lineHeight: 28
  },
  textButton : {
    width: '88%', 
    height: 40, 
    borderRadius: 8, 
    backgroundColor: '#020064',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40, 
    marginLeft: 18,
    marginBottom: 40,
    marginRight: 10,
  },
  sign: {
    color: '#ffffff',
    fontSize: 16
  }
})
export default ChangedPassword

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const ConfirmOtp = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <View style={styles.Icon}>
        <Image source={require('../Assets/verify-icon.png')}  style={styles.img} />
        </View>

        <Text style={styles.change}>Profile created </Text>
        <Text style={styles.success}>successfully</Text>
        <Text style={styles.text}>We have successfully created  </Text>
        <Text style={styles.text}>your profile</Text>
        <TouchableOpacity style={styles.textButton}
        onPress={() => {
          console.log('Navigating to signin screen');
          navigation.navigate('signin')
        }}>
        <Text style={styles.sign}>Login</Text>
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
      change: {
        color: '#020064',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: 200
      },
      success: {
        color: '#020064',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
      
      },
      text: {
        color: '#919191',
        fontSize: 16,
        lineHeight: 24,
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
export default ConfirmOtp

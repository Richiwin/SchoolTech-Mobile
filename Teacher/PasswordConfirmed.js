import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const PasswordConfirmed = ( {navigation} ) => {
    return (
        <View style={styles.container}>
        <View style={styles.Icon}>
        <Image source={require('../Assets/code-img.png')} style={styles.image} />
        </View>
        <View style={styles.textcontainer}>
        <Text style={styles.change}>Password has been </Text>
        <Text style={styles.success}>changed successfully</Text>
        <Text style={styles.text}>password has been changed successfully</Text>
        <Text style={styles.text}>notification has been sent to your email</Text>
        </View>
        <TouchableOpacity style={styles.textButton}
        onPress={() => {
          console.log('Navigating to teacherlogin screen');
          navigation.navigate('teacherlogin')
        }}>
        <Text style={styles.sign}>Log in</Text>
      </TouchableOpacity>
        </View>
      )
    }
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#ffffff',
        height: '100%',
     
      },
      textcontainer: {
        alignContent: 'center',
        alignItems: 'center',
    
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
        marginBottom: 40,
      
      
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
        marginTop: 120,
        marginLeft: 20
        },
       
        image: {
          height: 150,
          width: 300,
          borderRadius: 14,
          marginBottom: 20,
          marginLeft: 20,
        },
    })

export default PasswordConfirmed

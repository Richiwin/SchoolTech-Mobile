import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const AccountCreated = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <View style={styles.Icon}>
        <Image source={require('../Assets/squareoffset.png')}  style={styles.img} />
        </View>

        <Text style={styles.change}>Account created!</Text>
        <Text style={styles.text}>You have successfully created your</Text>
        <Text style={styles.text}> account. Please proceed to dashboard</Text>
        <TouchableOpacity style={styles.textButton}
        onPress={() => {
          console.log('Navigating to dashboard screen');
          navigation.navigate('dashboard')
        }}>
        <Text style={styles.sign}>Go to dashboard</Text>
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
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 200
      },
      text: {
        color: '#6E6D8E',
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
        marginTop: 40, 
        marginLeft: 18,
        marginBottom: 40,
        marginRight: 10,
      },
      sign: {
        fontSize: 16
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
    })
export default AccountCreated

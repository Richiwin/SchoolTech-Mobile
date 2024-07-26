import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native'


const AssignmentDashboard = ({navigation}) => {
 
    return (
        <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.navigate('teacherdashboard')}
          >
            <Image source={require('../../Assets/arrow-left.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      <Text style={styles.text}>Assignment</Text>
      <Text style={styles.text2}>View upcoming events from the school</Text>
        <View style={styles.touchContainer}> 
        <TouchableOpacity style={styles.touchButton} 
     onPress={() => {
        console.log('Navigating to attendance  screen');
        navigation.navigate('attendance');
      }}>
        <Image source={require('../../Assets/clipboard-text.png')} style={styles.iconimg} />
        <Text style={styles.touchText}>Create assignment</Text>
        </TouchableOpacity>
    
    
      <View>
    
        <TouchableOpacity style={styles.touchButton}
       onPress={() => {
        console.log('');
        navigation.navigate('');
      }}>
        <Image source={require('../../Assets/Vector1.png')} style={styles.iconimg} />
        <Text style={styles.touchText}>View Submission</Text>
        </TouchableOpacity>
      </View>
    

      <View>
    
        <TouchableOpacity style={styles.touchButton}
       onPress={() => {
        console.log('');
        navigation.navigate('');
      }}>
        <Image source={require('../../Assets/School-cap.png')} style={styles.iconimg} />
        <Text style={styles.touchText}>Grade Submission</Text>
        </TouchableOpacity>
      </View>
    
      </View>
      </View>
    )
    }
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#ffffff',
        flex: 1,
      },
      iconContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: '#ffffff',
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#CED3DE',
        marginLeft: 20,
      },
      icon: {
        width: 15,
        height: 25,
        marginRight: 15,
        marginLeft: 4,
        marginTop: 3,
      },
      iconimg: {
          width: 25,
          height: 25,
          marginRight: 15,
          marginLeft: 4,
          marginTop: 3,
        },
      backIcon: {
        width: 60,
        height: 60,
        marginLeft: 15,
        marginTop: 10,
        borderRadius: 20,
       
      },
      
      text: {
        color: '#020064',
        fontSize: 28,
        fontWeight: '600',
        marginLeft: 22
      },
      text2: {
          color: '#6E6D8E',
          fontSize: 16,
          fontWeight: '400',
          marginLeft: 20,
          marginTop: 0
        },
      
      image2: {
        backgroundColor: "#ffffff",
        marginRight: 0,
        marginLeft: 10,
        fontSize: 16,
        height: 40,
        width: 40,
        borderRadius: 100,
        marginBottom: 5
      },
      class: {
        marginTop: 0,
        marginLeft: 20
      },
      touchButton: {
          backgroundColor: '#819EFF',
          padding: 10,
          margin: 20,
          borderRadius: 11,
          alignItems: 'center',
          height: 60,
          flexDirection: 'row',
          marginTop: 10
        },
        touchText: {
          color: '#fff',
        fontSize: 20,
        fontWeight: 'bold' ,
        marginLeft: 20
        },
        touchContainer: {
          marginTop: 50
        }
    });
    
    

export default AssignmentDashboard

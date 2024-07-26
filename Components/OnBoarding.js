import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import AnimatedText from './AnimatedText';


const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Video
      source={require('../Assets/school-video.mp4')} // Can be a URL or a local file.
      style={styles.backgroundVideo}
      muted={true}
      repeat={true}
      resizeMode={"cover"}
      rate={1.0}
      ignoreSilentSwitch={"obey"}
    />
    <View style={styles.overlay}>
    <Text style={styles.text}>Welcome to </Text>
        <AnimatedText />
      <TouchableOpacity style={styles.textButton}
        onPress={() => {
          console.log('Navigating to dashboard screen');
          navigation.navigate('dashboard')
        }}>
        <View>
         
          <Text style={styles.textView}>Continue</Text>
        </View>
       
      </TouchableOpacity>
      {/* Add other components or styles you want on top of the video */}
    </View>
  </View>
);
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'gray',
      fontSize: 28,
      fontWeight: 'bold',
    },
    textView: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold', 
    },
    textButton : {
        width: 150, 
        height: 50, 
        borderRadius: 8, 
        backgroundColor: '#020064',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 250, 
        marginLeft: 18,
        marginBottom: 40,
        marginRight: 10,
      },
  });
  

export default OnBoarding



import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  // State variables to manage the current images
  const [homeImage, setHomeImage] = useState(require('../Assets/home.png'));
  
  const [featureImage, setFeatureImage] = useState(require('../Assets/cup1.png'));
  const [profileImage, setProfileImage] = useState(require('../Assets/profile.png'));

  // Function to change the image
  const changeImage = (setImageFunc, newImage) => {
    setImageFunc(newImage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            console.log('Navigating to teacherdashboard screen');
            navigation.navigate('teacherdashboard');
            changeImage(setHomeImage, require('../Assets/Vector.png')); // Change to the active image
          }}>
          <View>
            <Image source={homeImage} style={styles.image3} />
            <Text style={styles.footerText}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('Navigating to teacherfeature screen');
            navigation.navigate('teacherfeature');
            changeImage(setFeatureImage, require('../Assets/cup.png')); // Change to the active image
          }}>
          <View>
            <Image source={featureImage} style={styles.image2} />
            <Text style={styles.footerText1}>Feature</Text>
          </View>
          <View style={styles.line} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('Navigating to teacherdashboard screen');
            navigation.navigate('teacherdashboard');
            changeImage(setProfileImage, require('../Assets/profile2.png')); // Change to the active image
          }}>
          <View>
            <Image source={profileImage} style={styles.image4} />
            <Text style={styles.footerText1}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 60,
    marginTop: 20,
  },
  footerText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 70,
    marginLeft: 40,
    marginTop: 0,
    marginBottom: 10,
  },
  footerText1: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    marginRight: 80,
    marginLeft: 25,
  },
  image2: {
    marginLeft: 35,
    height: 20,
    color: 'black',
    width: 20,
    marginTop: 5,
    marginBottom: 1,
  },
  image3: {
    marginLeft: 45,
    height: 20,
    width: 20,
    marginTop: 5,
    marginBottom: 1,
  },
  image4: {
    marginLeft: 30,
    height: 20,
    color: 'black',
    width: 20,
    marginTop: 5,
    marginBottom: 1,
  },
  line: {
    height: 5,
    backgroundColor: '#000000',
    marginTop: 3,
    marginRight: 10,
    width: 90,
    flexDirection: 'center',
    borderRadius: 20,
  },
});

export default Footer;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // State variables to manage the current images
  const [homeImage, setHomeImage] = useState(require('../Assets/home.png'));
  const [featureImage, setFeatureImage] = useState(require('../Assets/cup1.png'));
  const [profileImage, setProfileImage] = useState(require('../Assets/profile.png'));

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(null);

  // Effect to reset images when leaving the current tab
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setHomeImage(require('../Assets/home.png'));
      setFeatureImage(require('../Assets/cup1.png'));
      setProfileImage(require('../Assets/profile.png'));
      setActiveTab(null);
    });

    return unsubscribe;
  }, [navigation]);

  // Function to handle navigation and image change
  const handleNavigation = (screen, setImageFunc, newImage) => {
    setActiveTab(screen);
    setImageFunc(newImage);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => handleNavigation('parentdashboard', setHomeImage, require('../Assets/Vector.png'))}>
        <View>
          <Image source={homeImage} style={styles.image3} />
          <Text style={styles.footerText}>Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleNavigation('parentfeature', setFeatureImage, require('../Assets/cup.png'))}>
        <View>
          <Image source={featureImage} style={styles.image2} />
          <Text style={styles.footerText1}>Feature</Text>
        </View>
        {activeTab === 'parentfeature' && <View style={styles.line} />}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleNavigation('parentprofile', setProfileImage, require('../Assets/profile2.png'))}>
        <View>
          <Image source={profileImage} style={styles.image4} />
          <Text style={styles.footerText1}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 60,
    marginTop: 0
  },
  footerText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 70,
    marginLeft: 30,
    marginTop: 5,
    marginBottom: 5
  },
  footerText1: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    marginRight: 70,
    marginLeft: 15,
  },
  image2: {
    marginLeft: 23,
    height: 20,
    color: 'black',
    width: 20,
    marginTop: 5,
    marginBottom: 1
  },
  image3: {
    marginLeft: 37,
    height: 20,
    width: 20,
    marginTop: 5,
    marginBottom: 1
  },
  image4: {
    marginLeft: 20,
    height: 20,
    color: 'black',
    width: 20,
    marginTop: 5,
    marginBottom: 1
  },
  line: {
    height: 5,
    backgroundColor: '#000000',
    marginTop: 3,
    marginRight: 10,
    width: 80,
    alignSelf: 'center',
    borderRadius: 20,
  },
});

export default Footer;

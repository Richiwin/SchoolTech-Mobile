import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from './Footer';

const StudentDashboard = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Retrieve the username from local storage
    const fetchUserName = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        if (storedUsername !== null) {
          setUserName(storedUsername);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserName();
  }, []);

  useEffect(() => {
    const now = new Date();
    const hour = now.getUTCHours();

    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navcontainer}>
        <LinearGradient
          colors={['#020064', '#020054']}
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.text}>SCHOOL TECH</Text>
          <View style={styles.bar}>
            <Text style={styles.name}>
              {greeting}, {userName}
            </Text>
            <Image
              style={styles.BellIcon}
              source={require('../Assets/bell.png')}></Image>
            <Image
              style={styles.image2}
              source={require('../Assets/avatar.png')}></Image>
          </View>
          <View style={styles.section}>
            <View style={styles.year}>
              <Text style={styles.number}>2023/2024</Text>
            </View>
            <View style={styles.term}>
              <Text style={styles.ter}>second term</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.feature}>
        <Text style={styles.textfeature}>Features</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('Navigating to feature  screen');
            navigation.navigate('feature');
          }}>
          <Text style={styles.textall}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.contentContainer}>
          <View style={styles.feature}>
            <TouchableOpacity>
              <View style={styles.leftcontainer}>
                <Image
                  source={require('../Assets/student.png')}
                  style={styles.image3}
                />
                <Text style={styles.containtext}>Online Class</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.rightcontainer}>
                <Image
                  source={require('../Assets/assignment.png')}
                  style={styles.image3}
                />
                <Text style={styles.containtext}>Assignment/Homework</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.feature}>
            <TouchableOpacity>
              <View style={styles.leftcontainer}>
                <Image
                  source={require('../Assets/grade.png')}
                  style={styles.image3}
                />
                <Text style={styles.containtext}>Grades/Progress</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.rightcontainer}>
                <Image
                  source={require('../Assets/communication.png')}
                  style={styles.image3}
                />
                <Text style={styles.containtext}>Messaging/Communication</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.feature}>
            <TouchableOpacity>
              <View style={styles.leftcontainer}>
                <Image
                  source={require('../Assets/calendar.png')}
                  style={styles.image3}
                />
                <Text style={styles.containtext}>Calendar</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.rightcontainer}>
                <Image
                  source={require('../Assets/announcement.png')}
                  style={styles.image3}
                />
                <Text style={styles.containtext}>Announcement</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F3FB',
  },
  navcontainer: {
    width: '100%',
    height: 200,
  },
  gradient: {
    flex: 1,
    borderRadius: 5,
  },
  text: {
    color: '#ffffff',
    marginLeft: 20,
    fontSize: 18,
    lineHeight: 18,
    marginTop: 50,
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    flexWrap: 'wrap',
  },
  name: {
    color: '#ffffff',
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
  },
  image: {
    marginLeft: 50,
  },
  BellIcon: {
    marginLeft: 70,
    marginTop: 5,
  },
  avatar: {
    width: 36,
    height: 36,
  },
  image2: {
    backgroundColor: '#ffffff',
    marginRight: 0,
    marginLeft: 15,
    fontSize: 16,
    height: 40,
    width: 40,
    borderRadius: 100,
    marginBottom: 5,
  },
  input: {
    flex: 1,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: 1,
    padding: 0,
    marginTop: 20,
    height: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    width: 320,
    backgroundColor: '#ffffff',
  },
  feature: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 20,
    marginTop: 20,
  },
  textfeature: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textall: {
    marginLeft: 200,
    color: '#000000',
    fontSize: 16,
  },
  leftcontainer: {
    backgroundColor: '#ffffff',
    width: 137,
    height: 120,
    borderRadius: 9,
  },
  rightcontainer: {
    backgroundColor: '#ffffff',
    width: 137,
    height: 120,
    marginLeft: 20,
    borderRadius: 9,
  },
  image3: {
    marginLeft: 40,
    height: 53,
    color: ' black',
    width: 53,
    marginTop: 10,
  },
  containtext: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 15,
    marginTop: 20,
  },
  footer: {
    marginTop: 60,
  },
  section: {
    flexDirection: 'row',
  },
  year: {
    backgroundColor: '#ffffff',
    height: 46,
    marginLeft: 20,
    width: 160,
    borderRadius: 4,
    marginTop: 10,
  },
  term: {
    backgroundColor: '#ffffff',
    height: 46,
    marginLeft: 10,
    width: 160,
    borderRadius: 4,
    marginTop: 10,
  },
  number: {
    fontSize: 15,
    lineHeight: 20,
    marginLeft: 40,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
  ter: {
    fontSize: 15,
    lineHeight: 20,
    marginLeft: 40,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: 0,
    backgroundColor: '#F4F3FB',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 0,
  },
  ScrollView: {
    backgroundColor: '#F4F3FB',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
});

export default StudentDashboard;

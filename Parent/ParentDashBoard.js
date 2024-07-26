import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import LinearGradient from 'react-native-linear-gradient';
import Footer from './Footer';

const ParentDashBoard = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [greeting, setGreeting] = useState('');

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

  const handleMenuPress = menu => {
    setSelectedMenu(menu);
    // Replace '' with the appropriate screen name or route
    navigation.navigate('');
  };

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
              <Text style={styles.ter}>Second term</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.feature}>
        <Text style={styles.textfeature}>Features</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('');
            navigation.navigate('');
          }}>
          <Text style={styles.textall}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.ScrollView}>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log('');
              navigation.navigate('');
            }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/studentlogo.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>Register New Student</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('');
              navigation.navigate('');
            }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/assignment.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>Attendance Tracking</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMenuPress('Assignment and Grade Monitoring')}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/grade.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>
                  Assignment and Grading {'\n'} Monitoring
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('');
              navigation.navigate('');
            }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/communication.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>
                  Communication with {'\n'}
                  Teachers
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('');
              navigation.navigate('');
            }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/announcement.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>
                  School Announcement and {'\n'} Update
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('');
              navigation.navigate('');
            }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/calendar.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>
                  Upcoming Events and {'\n'}
                  Deadlines
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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
  bar: {
    backgroundColor: '#020064',
    width: 40,
    height: 30,
    borderRadius: 20,
  },
  ScrollView: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: 30,
  },
  image: {
    width: 200,
    height: 100,
    marginLeft: 80,
    marginTop: 30,
  },
  image2: {
    backgroundColor: '#ffffff',
    marginRight: 0,
    marginLeft: 10,
    fontSize: 16,
    height: 40,
    width: 40,
    borderRadius: 100,
    marginBottom: 5,
  },

  menu: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 7,
    paddingVertical: 10,
    height: 90,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 20,
    borderColor: '#020064',
    borderWidth: 1,
  },

  men: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 7,
    paddingVertical: 10,
    height: 70,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 1,
    marginBottom: 10,
    borderRadius: 11,
    borderColor: '#DEDEED',
    borderWidth: 2,
  },

  name: {
    color: '#020064',
    fontSize: 16,
    marginLeft: 120,
    fontWeight: 'bold',
    marginTop: 5,
  },
  menu2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  schooltext: {
    marginBottom: 10,
    color: '#020064',
    fontWeight: 'bold',
    marginTop: 24,
    marginLeft: 130,
    alignItems: 'center',
  },
  text2: {
    marginLeft: 20,
    marginTop: 1,
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
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
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
  },
  image: {
    marginLeft: 50,
  },
  BellIcon: {
    marginLeft: 50,
    marginTop: 5,
  },
  avatar: {
    width: 36,
    height: 36,
  },
  feature: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 20,
    marginTop: 15,
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
  image: {
    width: 32,
    height: 32,
    marginLeft: 10,
  },
  menu2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  section: {
    flexDirection: 'row',
  },
  year: {
    backgroundColor: '#ffffff',
    height: 46,
    marginLeft: 10,
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
});

export default ParentDashBoard;

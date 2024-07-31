import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from './Footer';

const TeacherDashboard = () => {
  const navigation = useNavigation();
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
              console.log('Navigating to classsummary  screen');
              navigation.navigate('classsummary');
            }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/student.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>Summary of Class</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={() => {
            console.log('Navigating to announcement  screen');
            navigation.navigate('announcement');
          }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/announcement.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>Announcement</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={() => {
             console.log('Navigating to classevent  screen');
             navigation.navigate('classevent');
           }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/calendar.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>Upcoming Events</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
         onPress={() => {
          console.log('Navigating to classes  screen');
          navigation.navigate('classes');
        }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/classes.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}> Classes</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('Navigating to classschedule  screen');
              navigation.navigate('classschedule');
            }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/time-schedule.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>Class Schedule</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('Navigating to classresources  screen');
              navigation.navigate('classresources');
            }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/books.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>Classes Resources</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('Navigating to attendancedashboard  screen');
              navigation.navigate('attendancedashboard');
            }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/announcement.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>Attendance</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('Navigating to gradebook  screen');
              navigation.navigate('gradebook');
            }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/grade.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>GradeBook</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('Navigating to assignmentdashboard  screen');
              navigation.navigate('assignmentdashboard');
            }}>
            <View style={styles.men}>
              <View style={styles.menu2}>
                <Image
                  source={require('../Assets/assignment.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>Assignments</Text>
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
                  source={require('../Assets/exam.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>Create Exam</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View></View>
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
    height: 66,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 1,
    marginBottom: 10,
    borderRadius: 11,
    borderColor: '#DEDEED',
    borderWidth: 1,
  },

  text2: {
    marginLeft: 10,
    marginTop: 1,
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
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
    marginLeft: 20,
  },
  textall: {
    marginLeft: 200,
    color: '#000000',
    fontSize: 16,
  },
  image: {
    width: 36,
    height: 36,
    marginLeft: 10,
  },
  menu2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
  },
});

export default TeacherDashboard;

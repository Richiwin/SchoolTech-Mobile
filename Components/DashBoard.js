import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DashBoard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#030235" barStyle="light-content" />
      <View style={styles.design}>
        <View style={styles.leftdesign} />
        <View style={styles.rightdesign} />
      </View>
      <Image source={require('../Assets/boy.png')} style={styles.boy} />
      <View style={styles.design2}>
        <View style={styles.leftdesign2} />
        <View style={styles.rightdesign2} />
      </View>
      <View style={styles.viewtext}>
        <Text style={styles.textin}>SIGN IN AS</Text>
        <Text style={styles.textto}>Choose account to sign in to the </Text>
        <Text style={styles.textapp}>School Tech App</Text>
      </View>

      <View style={styles.feature}>
        <TouchableOpacity
          onPress={() => {
            console.log('Navigating to studentlogin  screen');
            navigation.navigate('studentlogin');
          }}>
          <View style={styles.entitycontainer}>
            <Image
              source={require('../Assets/studentlogo.png')}
              style={styles.image3}
            />
            <Text style={styles.containtext}>Student</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('Navigating to signin  screen');
            navigation.navigate('signin');
          }}>
          <View style={styles.entitycontainer1}>
            <Image
              source={require('../Assets/parentlogo.png')}
              style={styles.image3}
            />
            <Text style={styles.containtext}>Parents</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('Navigating to teacherlogin  screen');
            navigation.navigate('teacherlogin');
          }}>
          <View style={styles.entitycontainer1}>
            <Image
              source={require('../Assets/teacherIcon.png')}
              style={styles.image3}
            />
            <Text style={styles.containtext}>Teacher</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  feature: {
    flexDirection: 'row',
    marginLeft: 20,
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
    backgroundColor: '#F2F3FF',
    width: 120,
    height: 90,
    borderRadius: 20,
    marginLeft: 10,
  },
  rightcontainer: {
    backgroundColor: '#F2F3FF',
    width: 127,
    height: 90,
    marginLeft: 10,
    borderRadius: 20,
  },
  entitycontainer: {
    backgroundColor: '#F2F3FF',
    width: 90,
    height: 90,
    marginLeft: 10,
    borderRadius: 20,
  },
  entitycontainer1: {
    backgroundColor: '#F2F3FF',
    width: 90,
    height: 90,
    marginLeft: 15,
    borderRadius: 20,
  },
  image3: {
    marginLeft: 25,
    height: 40,
    color: ' black',
    width: 40,
    marginTop: 10,
  },
  containtext: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 15,
    marginTop: 10,
    marginLeft: 0,
  },

  textin: {
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    marginLeft: 150,
    fontWeight: 'bold',
    lineHeight: 23,
    Font: 'Eina02-Regular',
  },
  viewtext: {
    justifyContent: 'center',
    marginTop: 35,
  },
  textapp: {
    marginLeft: 140,
    lineHeight: 17,
    color: '#000000',
    fontSize: 15,
  },
  textto: {
    marginLeft: 90,
    lineHeight: 27,
    color: '#000000',
    fontSize: 15,
    marginTop: 5,
  },
  design: {
    flexDirection: 'row',
    marginTop: 30,
  },
  leftdesign: {
    height: 130,
    width: 150,
    marginLeft: 30,
    backgroundColor: '#030235',
    borderTopLeftRadius: 100,
  },
  rightdesign: {
    height: 130,
    width: 150,
    marginRight: 20,
    backgroundColor: '#EEF0FF',
    borderBottomRightRadius: 100,
  },
  boy: {
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 30,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100,
    height: 150,
    width: 300,
  },
  design2: {
    flexDirection: 'row',
    marginTop: 5,
  },
  leftdesign2: {
    height: 130,
    width: 160,
    marginLeft: 30,
    backgroundColor: '#EEF0FF',
    borderBottomLeftRadius: 100,
  },
  rightdesign2: {
    height: 130,
    width: 160,
    marginRight: 30,
    backgroundColor: '#030235',
    borderTopRightRadius: 100,
  },
});

export default DashBoard;

import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.navigate('teacherdashboard')}>
          <Image
            source={require('../Assets/arrow-left.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Announcement</Text>
      </View>
    </View>
  );
};

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
});
export default Notification;

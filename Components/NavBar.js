import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import MenuIcon from '../Svg/MenuIcon';
import BellIcon from '../Svg/BellIcon';
import { useNavigation } from '@react-navigation/native';

const List2 = ({ userName }) => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigateTo = (screen) => {
    setShowMenu(false);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.bar} onPress={toggleMenu}>
        <MenuIcon style={styles.image2} />
      </TouchableOpacity>
      <Text style={styles.name}>Hi, {userName}!</Text>

      <View>
        <TouchableOpacity style={styles.bell} onPress={() => navigation.navigate('')}>
          <BellIcon style={styles.image3} />
        </TouchableOpacity>
      </View>
      {showMenu && (
        <View style={styles.dropdown}>
        <ScrollView> 
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('academics')}>
            <Text style={styles.text}>academics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('communication')}>
            <Text style={styles.text}>Communication</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('information')}>
            <Text style={styles.text}>Information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('feedback and support')}>
            <Text style={styles.text}>Feedback and Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('settings')}>
            <Text style={styles.text}>Settings</Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 7,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  bar: {
    backgroundColor: '#020064',
    width: 40,
    height: 30,
    borderRadius: 20,
    marginLeft: 5,
  },
  bell: {
    backgroundColor: '#F3F6FF',
    width: 50,
    height: 30,
    borderRadius: 20,
    marginLeft: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {
    color: 'blue',
    marginRight: 0,
    marginLeft: 10,
    fontSize: 16,
    height: 30,
    width: 40,
  },
  image3: {
    marginLeft: 0,
    height: 20,
    width: 40,
    marginBottom: 0,
    marginTop: 0,
  },
  name: {
    color: '#020064',
    fontSize: 15,
    marginLeft: 15,
    flex: 1,
  },
  dropdown: {
    position: 'absolute',
    top: 50, 
    left: 10,
    backgroundColor: '#020064',
    elevation: 55,
    padding: 10,
    borderRadius: 25,
    zIndex: 2, 
    width: 250,
    height: 300,
  
  },
  menuItem: {
    paddingVertical: 5,
    marginTop: 20,
    marginLeft:20,
 
  },
  text: {
    color: '#ffffff',
    fontSize: 18
  }
});

export default List2;

import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SearchBar from '../common/SearchBar';
// Import the SearchBar component

const AllStudentList = () => {
  const navigation = useNavigation();

  const handleSummit = () => {
    // Add your condition here to check if all options are selected
    const allOptionsSelected = true; // Replace this with your actual condition

    if (!allOptionsSelected) {
      Alert.alert('Error', 'Please select all options before proceeding.');
      return;
    }

    // Perform the navigation or other action here
    navigation.navigate('teacherdashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.navigate('attendance')}
        >
          <Image source={require('../../Assets/arrow-left.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>All Students</Text>
      </View>
      <SearchBar placeholder="Search students" onChangeText={(text) => console.log(text)} />
      <View style={styles.textListContainer}>
        <Text style={styles.textList}>Student</Text>
        <Text style={styles.textList1}>Present</Text>
        <Text style={styles.textList2}>Absent</Text>
      </View>
      <ScrollView>
        <View style={{borderWidth: 1.1, borderColor: '#E4E4E4', marginTop: 10}} />
        <View style={styles.listContainer}>
          <Image style={styles.image2} source={require('../../Assets/avatar.png')} />
          <View>
          <Text style={styles.name}>IWEBUKE RACHEL</Text>
          <Text style={styles.class}> Primary 2</Text>
          </View>
          <TouchableOpacity style={styles.DotPresent}>
            <Image style={styles.dot} source={require('../../Assets/red-dot.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.DotAbsent}>
            <Image style={styles.dot} source={require('../../Assets/red.png')} />
          </TouchableOpacity>
        </View>
        {/* Repeat the above view for other students */}
        <View style={{borderWidth: 1.1, borderColor: '#E4E4E4', marginTop: 10}} />
        <View style={styles.listContainer}>
          <Image style={styles.image2} source={require('../../Assets/avatar.png')} />
          <View>
          <Text style={styles.name}>IWEBUKE RACHEL</Text>
          <Text style={styles.class}>Primary 2</Text>
          </View>
          <TouchableOpacity style={styles.DotPresent}>
            <Image style={styles.dot} source={require('../../Assets/red-dot.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.DotAbsent}>
            <Image style={styles.dot} source={require('../../Assets/red.png')} />
          </TouchableOpacity>
        </View>
        {/* Repeat the above view for other students */}
      </ScrollView>
      <TouchableOpacity style={styles.nextButton} onPress={handleSummit}>
        <Text style={styles.nextButtonText}>Summit</Text>
      </TouchableOpacity>
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
    backgroundColor: '#ffffff'
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 15,
    marginLeft: 4,
    marginTop: 3,
  },
  backIcon: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginTop: 25,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderColor: '#727272',
    borderWidth: 1,
  },
  textContainer: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20
  },
  text: {
    color: '#020064',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textListContainer: {
    flexDirection: 'row',
    marginTop: 40
  },
  textList: {
    marginLeft: 20
  },
  textList1: {
    marginLeft: 150
  },
  textList2: {
    marginLeft: 20
  },
  listContainer: {
    flexDirection: 'row',
    marginTop: 10 
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
  DotPresent: {
    width: 20,
    height: 20,
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 50
  },
  DotAbsent: {
    width: 20,
    height: 20,
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 50
  },
  dot: {
    width: 15,
    height: 15,
    marginLeft: 1,
    marginTop: 1
  },
  name: {
    marginLeft: 20
  },
  nextButton: {
    backgroundColor: '#020064',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center'
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  class: {
    marginTop: 0,
    marginLeft: 20
  }
});

export default AllStudentList

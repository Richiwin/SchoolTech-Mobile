import { View, Text, StyleSheet, Image,  TouchableOpacity, ScrollView } from 'react-native';
import Pfooter from './Footer';

const ParentFeature = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.feature}>
    <TouchableOpacity
    style={styles.arrowicon}
    onPress={() => {
        console.log('Navigating to parentdashboard  screen');
        navigation.navigate('parentdashboard');
      }}>
    <Image source={require('../Assets/arrow.png')} style={styles.arrow} />
    </TouchableOpacity>
    <Text style={styles.textfeature}>Features</Text>
    </View>
    <ScrollView style={styles .ScrollView}>
    <View style={styles.contentContainer}>

    <TouchableOpacity 
    onPress={() => {
      console.log('Navigating to studentpreregistration  screen');
      navigation.navigate('studentpreregistration');
    }}
  >
  <View style={styles.men}> 
  <View style={styles.menu2}>
  <Image source={require('../Assets/studentlogo.png')} style={styles.image} />
  <Text style={styles.text2}>Register New Student</Text>
  </View>

</View>
</TouchableOpacity>   


<TouchableOpacity 
onPress={() => {
  console.log('');
  navigation.navigate('');
}}
>
<View style={styles.men}> 
<View style={styles.menu2}>
<Image source={require('../Assets/assignment.png')} style={styles.image} />
<Text style={styles.text2}>Attendance Tracking</Text>
</View>

</View>
</TouchableOpacity>   



<TouchableOpacity onPress={() => handleMenuPress('Assignment and Grade Monitoring')}>
  <View style={styles.men}>
  <View style={styles.menu2}>
  <Image source={require('../Assets/grade.png')} style={styles.image} />
  <Text style={styles.text2}>Assignment and Grading {'\n'}Monitoring</Text>
  </View>
  

  </View>
</TouchableOpacity> 

<TouchableOpacity
onPress={() => {
console.log('');
navigation.navigate('');
}}
>
<View style={styles.men}>
<View style={styles.menu2}>
<Image source={require('../Assets/communication.png')} style={styles.image} />
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
}}
>

<View style={styles.men}>
<View style={styles.menu2}>
<Image source={require('../Assets/announcement.png')} style={styles.image} />
<Text style={styles.text2}>School Announcement and {'\n'} Update</Text>
</View>
</View>
</TouchableOpacity>  


<TouchableOpacity
onPress={() => {
console.log('');
navigation.navigate('');
}}
>
<View style={styles.men}>
<View style={styles.menu2}>
<Image source={require('../Assets/calendar.png')} style={styles.image} />
<Text style={styles.text2}>Upcoming Events and {'\n'}
 Deadlines</Text>
</View>
</View>
</TouchableOpacity>  

</View>
</ScrollView>
<Pfooter />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F3FB',
    },

    ScrollView: {
  backgroundColor: '#ffffff',
  marginTop: 20,
  marginLeft: 20,
  marginRight: 20,
marginBottom: 20
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
      borderWidth: 1 
  
    },
    
   
    men: {
      backgroundColor: '#ffffff',
      paddingHorizontal: 7,
      paddingVertical: 10,
      height: 100,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 1,
      marginBottom: 10,
      borderRadius: 11,
      borderColor: '#DEDEED',
      borderWidth: 2
  
    },
    
    text2: {
      marginLeft: 20,
      marginTop: 1,
      color: '#000000',
      fontSize: 16,
      fontWeight:'600'
    },
 
  feature: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 20,
    marginTop: 20
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
  fontSize: 16
},
image: {
         width: 36,
         height: 36,
         marginLeft: 10,
   
    },
    menu2: {
            flexDirection: 'row',
           alignItems: 'center',
           marginTop: 20
        },
        arrow: {
          width: 15,
          height: 15,
          marginLeft: 5,
          marginRight: 15
      },
      arrowicon: {
          width: 25,
          height: 20
      }
  });
export default ParentFeature

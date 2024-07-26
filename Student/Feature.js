import { View, Text, StyleSheet, Image,  TouchableOpacity } from 'react-native';
import Footer from './Footer';

const Feature = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <View style={styles.feature}>
    <TouchableOpacity
    style={styles.arrowicon}
    onPress={() => {
        console.log('Navigating to studentdashboard  screen');
        navigation.navigate('studentdashboard');
      }}>
    <Image source={require('../Assets/arrow.png')} style={styles.arrow} />
    </TouchableOpacity>
    <Text style={styles.textfeature}>Features</Text>
    </View>
    <View  style={styles.contentContainer}> 
    <View  style={styles.feature}>
    <TouchableOpacity> 
    <View style={styles.leftcontainer}>
    <Image source={require('../Assets/student.png')} style={styles.image3} />
    <Text style={styles.containtext}>Online Class</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.rightcontainer}>
    <Image source={require('../Assets/assignment.png')} style={styles.image3} />
    <Text style={styles.containtext}>Assignment/Homework</Text>
    </View>
    </TouchableOpacity>
    </View>

    
    <View  style={styles.feature}>
    <TouchableOpacity>
    <View style={styles.leftcontainer}>
    <Image source={require('../Assets/grade.png')} style={styles.image3} />
    <Text style={styles.containtext}>Grades/Progress</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.rightcontainer}>
    <Image source={require('../Assets/communication.png')} style={styles.image3} />
    <Text style={styles.containtext}>Messaging/Communication</Text>
    </View>
    </TouchableOpacity>
    </View>

    <View  style={styles.feature}>
    <TouchableOpacity>
    <View style={styles.leftcontainer}>
    <Image source={require('../Assets/calendar.png')} style={styles.image3} />
    <Text style={styles.containtext}>Calendar</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.rightcontainer}>
    <Image source={require('../Assets/announcement.png')} style={styles.image3} />
    <Text style={styles.containtext}>Announcement</Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
    <Footer />
 </View>
  )
}
const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#F4F3FB'
      },
      
  feature: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 20,
    marginTop: 40
  },
textfeature: {
  color: '#000000',
  fontSize: 16,
  fontWeight: 'bold',
  marginLeft: 20
},
textall: {
  marginLeft: 230,
  color: '#000000',
  fontSize: 16
},
leftcontainer: {
  backgroundColor: '#ffffff',
  width: 137,
  height: 140,
  borderRadius: 9
},
rightcontainer: {
  backgroundColor: '#ffffff',
  width: 137,
  height: 140,
  marginLeft: 20,
  borderRadius: 9
},
image3: {
  marginLeft: 50,
height: 63,
color: ' black',
width: 63,
marginTop: 20
},
containtext: {
  fontSize: 16,
  color: '#000000',
  textAlign: 'center',
  fontWeight: 'bold',
  lineHeight: 15,
  marginTop: 20
},
footer: {
  marginTop: 100
},
arrow: {
    width: 15,
    height: 15,
    marginLeft: 5
},
arrowicon: {
   
    width: 25,
    height: 20
},
contentContainer: {
  flexGrow: 1,
  paddingTop: 0,
  backgroundColor: '#F4F3FB',
  marginTop: 5,
  marginLeft: 10,
  marginRight: 20,
marginBottom: 0
},
})
export default Feature

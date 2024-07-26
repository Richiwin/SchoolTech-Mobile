import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar,
  Alert,
  Image,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomDropdownTextInput from './Dropdown';

const AddAccount = () => {
  const [surname, setSurname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [students, setStudents] = useState([]);
  const navigation = useNavigation();

  const options = [
    {id: 1, label: 'JSS1'},
    {id: 2, label: 'JSS2'},
    {id: 3, label: 'JSS3'},
    {id: 4, label: 'SSS1'},
    {id: 5, label: 'SSS2'},
    {id: 6, label: 'SSS3'},
  ];

  const handleSelect = option => {
    setSelectedOption(option.label);
  };

  const handleAddStudent = () => {
    if (!surname || !firstName || !middleName || !selectedOption) {
      Alert.alert('Error', 'Please fill all the fields.');
      return;
    }

    const studentData = {
      surname,
      firstName,
      middleName,
      selectedClass: selectedOption,
    };

    setStudents([...students, studentData]);

    // Clear the input fields
    setSurname('');
    setFirstName('');
    setMiddleName('');
    setSelectedOption('');
  };

  const handleSubmit = () => {
    if (students.length === 0) {
      Alert.alert('Error', 'No student data to submit.');
      return;
    }

    // Submit the data to the server
    // Replace the URL with your API endpoint
    const apiUrl = 'https://example.com/api/students';
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({students}),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        Alert.alert('Success', 'Student data submitted successfully.');
        setStudents([]);
        navigation.navigate('paymentsummary', {studentData: students});
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert('Error', 'Failed to submit student data.');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#020064" barStyle="light-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 0,
          marginBottom: 10,
        }}></View>

      <Text style={styles.in}>Student Pre Registration</Text>
      <Text style={styles.Signuptext}>
        To register your student kindly fill the
      </Text>
      <Text style={styles.Signuptext}>details below</Text>

      <TouchableOpacity style={styles.customButton} onPress={handleAddStudent}>
        <Image source={require('../Assets/addIcon.png')} style={styles.add} />
        <Text style={styles.customButtonText}>Add Account</Text>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        {students.map((student, index) => (
          <View key={index} style={styles.regContainer}>
            <Text style={styles.student}>Student {index + 1}</Text>
            <Text style={styles.email}>Surname: {student.surname}</Text>
            <Text style={styles.email}>First Name: {student.firstName}</Text>
            <Text style={styles.email}>Middle Name: {student.middleName}</Text>
            <Text style={styles.email}>Class: {student.selectedClass}</Text>
          </View>
        ))}

        <View style={styles.regContainer}>
          <Text style={styles.student}>New Student</Text>
          <Text style={styles.email}>Surname</Text>
          <TextInput
            placeholder="Enter your surname"
            style={styles.input}
            value={surname}
            onChangeText={setSurname}
          />
          <Text style={styles.email}>First Name</Text>
          <TextInput
            placeholder="Enter your First Name"
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
          <Text style={styles.email}>Middle Name</Text>
          <TextInput
            placeholder="Enter your Middle Name"
            style={styles.input}
            value={middleName}
            onChangeText={setMiddleName}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.email}>Select Class</Text>
            <CustomDropdownTextInput
              options={options}
              selectedOption={selectedOption}
              onSelect={handleSelect}
            />
          </View>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.nextButton} onPress={handleSubmit}>
          <Text style={styles.text4}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  sign: {
    color: '#020064',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: 20,
  },
  email: {
    color: '#6E6D8E',
    fontWeight: 'bold',
    marginLeft: 14,
    fontSize: 18,
    marginTop: 15,
  },
  student: {
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 14,
    fontSize: 18,
    marginTop: 15,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#6E6D8E',
    padding: 8,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    color: '#6E6D8E',
    backgroundColor: '#ffffff',
  },
  Signuptext: {
    fontSize: 16,
    padding: 2,
    marginLeft: 20,
    marginRight: 20,
    color: '#6E6D8E',
  },
  nextButton: {
    width: '90%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#020064',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 18,
    marginBottom: 20,
    marginRight: 10,
  },
  signin: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mem: {
    color: '#6E6D8E',
    fontSize: 14,
  },
  signup: {
    color: '#020064',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text4: {
    color: '#ffffff',
    fontSize: 16,
  },
  in: {
    color: '#020064',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 35,
    fontWeight: 'bold',
    fontSize: 28,
  },
  regContainer: {
    marginBottom: 10,
  },
  selectInput: {
    flexDirection: 'row',
  },
  customButton: {
    flexDirection: 'row',
    width: 120,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 220,
    marginBottom: 10,
  },
  customButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  add: {
    height: 10,
    width: 10,
  },
  add: {
    height: 10,
    width: 10,
    marginLeft: 2.5,
    marginTop: 3,
  },
  backIcon: {
    width: 18,
    height: 18,
    marginTop: 1,
    borderRadius: 100,
    backgroundColor: '#000',
    borderColor: '#ffff',
    borderWidth: 2,
  },
});

export default AddAccount;

// <View style={styles.regContainer}>
// <Text style={styles.student}>Student 3</Text>
//     <Text style={styles.email}>Surname</Text>
//     <TextInput
//       placeholder="Enter your surname"
//       style={styles.input}
//       value={surname}
//       onChangeText={setSurname}
//     />
//     <Text style={styles.email}>First Name</Text>
//     <TextInput
//       placeholder="Enter your First Name"
//       style={styles.input}
//       value={firstName}
//       onChangeText={setFirstName}
//     />
//     <Text style={styles.email}>Middle Name</Text>
//     <TextInput
//       placeholder="Enter your Middle Name"
//       style={styles.input}
//       value={middleName}
//       onChangeText={setMiddleName}
//     />
//     <View style={styles.inputContainer}>
//       <Text style={styles.email}>Select Class</Text>
//       <CustomDropdownTextInput
//         options={options}
//         selectedOption={selectedOption}
//         onSelect={handleSelect}
//       />
//     </View>
//   </View>
//   <View style={styles.regContainer}>
//   <Text style={styles.student}>Student 4</Text>
//       <Text style={styles.email}>Surname</Text>
//       <TextInput
//         placeholder="Enter your surname"
//         style={styles.input}
//         value={surname}
//         onChangeText={setSurname}
//       />
//       <Text style={styles.email}>First Name</Text>
//       <TextInput
//         placeholder="Enter your First Name"
//         style={styles.input}
//         value={firstName}
//         onChangeText={setFirstName}
//       />
//       <Text style={styles.email}>Middle Name</Text>
//       <TextInput
//         placeholder="Enter your Middle Name"
//         style={styles.input}
//         value={middleName}
//         onChangeText={setMiddleName}
//       />
//       <View style={styles.inputContainer}>
//         <Text style={styles.email}>Select Class</Text>
//         <CustomDropdownTextInput
//           options={options}
//           selectedOption={selectedOption}
//           onSelect={handleSelect}
//         />
//       </View>
//     </View>

//     <View style={styles.regContainer}>
//     <Text style={styles.student}>Student 5</Text>
//         <Text style={styles.email}>Surname</Text>
//         <TextInput
//           placeholder="Enter your surname"
//           style={styles.input}
//           value={surname}
//           onChangeText={setSurname}
//         />
//         <Text style={styles.email}>First Name</Text>
//         <TextInput
//           placeholder="Enter your First Name"
//           style={styles.input}
//           value={firstName}
//           onChangeText={setFirstName}
//         />
//         <Text style={styles.email}>Middle Name</Text>
//         <TextInput
//           placeholder="Enter your Middle Name"
//           style={styles.input}
//           value={middleName}
//           onChangeText={setMiddleName}
//         />
//         <View style={styles.inputContainer}>
//           <Text style={styles.email}>Select Class</Text>
//           <CustomDropdownTextInput
//             options={options}
//             selectedOption={selectedOption}
//             onSelect={handleSelect}
//           />
//         </View>
//       </View>

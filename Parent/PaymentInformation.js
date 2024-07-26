import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Alert } from 'react-native';
import axios from 'axios';

const PaymentInformation = ({ navigation, route }) => {
  // State to keep track of input fields
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const { studentData, apiResponse } = route.params; // Get parameters from route

  // Function to handle expiry date formatting
  const handleExpiryDateChange = (text) => {
    let formattedText = text.replace(/[^0-9]/g, '');

    if (formattedText.length > 2) {
      formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2)}`;
    }

    setExpiryDate(formattedText);
  };

  const handleSubmit = async () => {
    // Check if any input field is empty
    if (!nameOnCard || !cardNumber || !expiryDate || !cvv) {
      Alert.alert('Error', 'Please fill all the fields.');
      return;
    }

    try {
      // Make API call to complete payment
      const response = await axios.post('https://schtech.ebs-rcm.com/api/CompletePayment', {
        nameOnCard,
        cardNumber,
        expiryDate,
        cvv,
        amount: 1000, // Example amount to be paid, adjust as needed
        stripeSessionId: apiResponse.stripeSessionId, // Use the Stripe session ID from the previous screen
      });

      // Assuming successful payment, navigate to confirmation screen
      navigation.navigate('paymentconfirmation', { paymentDetails: response.data });
    } catch (error) {
      console.error('Error making payment:', error);
      Alert.alert('Error', 'An error occurred while processing your payment. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconcontainer}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => {
            console.log('Navigating back to studentpreregistration screen');
            navigation.navigate('studentpreregistration');
          }}>
          <Image source={require('../Assets/backIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.text1}>Payment Information</Text>
      </View>
      <Text style={styles.text2}>Add your payment information</Text>
      <ScrollView>
        <View style={styles.textcontainer}>
          <Text style={styles.text3}>Payment Amount</Text>
          <Text style={styles.text4}>Make payment of <Text style={styles.amount}>#1000</Text></Text>
        </View>
        <View style={styles.paymentcontainer}>
          <Text style={styles.email}>Name on card</Text>
          <TextInput
            placeholder="Enter your name as it appears on your card"
            style={styles.input}
            value={nameOnCard}
            onChangeText={setNameOnCard}
          />

          <View style={styles.cardInputContainer}>
            <Text style={styles.email}>Card Number</Text>
            <TextInput
              placeholder="1234 5678 9832 9200"
              style={styles.cardNumberInput}
              value={cardNumber}
              onChangeText={setCardNumber}
            />
          </View>

          <View style={styles.expirycontainer}>
            <View>
              <Text style={styles.expiry}>Expiry Date</Text>
              <TextInput
                placeholder="MM/YY"
                style={styles.inputexpiry}
                value={expiryDate}
                onChangeText={handleExpiryDateChange}
                maxLength={5} // Ensure the input does not exceed MM/YY format
              />
            </View>
            <View style={styles.cvvView}>
              <Text style={styles.cvv}>CVV </Text>
              <TextInput
                placeholder="000"
                style={styles.inputcvv}
                value={cvv}
                onChangeText={setCvv}
                maxLength={3}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.textView}>
        <Text style={styles.text5}>Set as primary card</Text>
        <View style={styles.cardText}>
          <Text style={styles.text6}>We will use this card by default for future orders</Text>
          <Image source={require('../Assets/goodIcon.png')} style={styles.good} />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.payButton} onPress={handleSubmit}>
          <Text style={styles.textpay}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  textcontainer: {
    marginTop: 40,
    marginLeft: 20,
  },
  text1: {
    color: '#020064',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 20,
    marginLeft: 20,
  },
  text2: {
    color: '#6E6D8E',
    fontSize: 16,
    marginLeft: 65,
  },
  text3: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold'
  },
  text4: {
    color: '#8B8B8B',
    fontSize: 16,
  },
  amount: {
    color: '#3AAB05',
    fontSize: 16,
    fontWeight: 'bold'
  },
  iconcontainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  payButton: {
    width: '90%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#020064',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 18,
    marginBottom: 20,
    marginRight: 10,
  },
  textpay: {
    color: '#ffffff',
    fontSize: 16,
  },
  text: {
    color: '#8A8A8A',
    fontSize: 14,
    marginLeft: 40
  },
  textInfo: {
    color: '#000000',
    fontSize: 26,
    marginLeft: 40,
  },
  icon: {
    width: 15,
    height: 10,
    marginRight: 15,
    marginLeft: 4,
    marginTop: 5,
  },
  backIcon: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginTop: 25,
    borderRadius: 100,
    backgroundColor: '#fff',
    borderColor: '#727272',
    borderWidth: 1
  },
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#6E6D8E',
    padding: 8,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    color: '#000000',
    backgroundColor: '#ffffff'
  },
  textInput: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#6E6D8E',
    padding: 8,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    color: '#000000',
    backgroundColor: '#ffffff'
  },
  transparentInput: {
    backgroundColor: 'transparent',
  },
  email: {
    color: '#606060',
    fontWeight: 'bold',
    marginLeft: 14,
    fontSize: 18,
    marginBottom: 5,
    marginTop: 20,
  },
  expirycontainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20
  },
  cvv: {
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 18,
  },
  expiry: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18
  },
  inputcvv: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#6E6D8E',
    padding: 8,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    color: '#000000',
    backgroundColor: '#ffffff',
    width: 100
  },
  inputexpiry: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#6E6D8E',
    padding: 8,
    marginTop: 5,
    marginRight: 0,
    color: '#000000',
    backgroundColor: '#ffffff',
    width: 200
  },
  cardContainer: {
    flexDirection: 'row',
  },
  payCard: {
    width: 75,
    height: 20,
    marginLeft: 40,
    marginTop: 20,
  },
  masterCard: {
    width: 35,
    height: 20,
    marginLeft: 5,
    marginTop: 20,
  },
  visaCard: {
    width: 60,
    height: 20,
    marginLeft: 5,
    marginTop: 20,
  },
  good: {
    width: 20,
    height: 20,
    marginLeft: 40,
  },
  textView: {
    marginTop: 40,
    marginLeft: 20
  },
  text5: {
    color: '#606060',
    fontSize: 18,
  },
  text6: {
    color: '#8B8B8B',
    fontSize: 12,
  },
  cardText: {
    flexDirection: 'row',
  },
  cardInputContainer: {
    position: 'relative',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  cardNumberInput: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#6E6D8E',
    padding: 8,
    paddingLeft: 40, // Add padding to the left to make space for the icon
    color: '#000000',
    backgroundColor: '#ffffff',
  },
  cardIcon: {
    position: 'absolute',
    left: 10,
    top: 15,
    width: 20,
    height: 20,
  },
});

export default PaymentInformation;

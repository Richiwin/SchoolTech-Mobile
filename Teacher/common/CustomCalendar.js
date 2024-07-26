import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';

// Configure locale for English
LocaleConfig.locales['eng'] = {
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: ['Jan.', 'Feb.', 'Mar', 'Apr', 'May', 'Jun', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
  dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  dayNamesShort: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
  today: "Today"
};
LocaleConfig.defaultLocale = 'eng';

const CustomCalendar = () => {
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const [selected, setSelected] = useState(getTodayDate());
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
  const [selectedMonth, setSelectedMonth] = useState((new Date().getMonth() + 1).toString().padStart(2, '0'));

  useEffect(() => {
    setSelected(getTodayDate());
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleConfirm = () => {
    const newDate = `${selectedYear}-${selectedMonth}-01`;
    setSelected(newDate);
    setModalVisible(false);
  };

  const years = Array.from({ length: 30 }, (_, i) => (2020 - i).toString());
  const months = [
    { label: 'January', value: '01' },
    { label: 'February', value: '02' },
    { label: 'March', value: '03' },
    { label: 'April', value: '04' },
    { label: 'May', value: '05' },
    { label: 'June', value: '06' },
    { label: 'July', value: '07' },
    { label: 'August', value: '08' },
    { label: 'September', value: '09' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
  ];

  return (
    <View>
      <Calendar
        style={{
          borderWidth: 0,
          borderColor: 'gray',
          height: 350,
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#1E293B',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#94A3B8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          monthTextColor: '#1E293B',
          indicatorColor: '#94A3B8',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
        current={selected}
        onDayPress={day => {
          console.log('selected day', day);
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: '#1E293B', selectedColor: '#050295' }
        }}
        hideArrows={true}
      />
      <TouchableOpacity onPress={toggleModal} style={styles.iconButton}>
        <Image source={require('../../Assets/Calendar-icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text>Select Year and Month</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedYear(value)}
            items={years.map(year => ({ label: year, value: year }))}
            placeholder={{ label: 'Select a year', value: null }}
          />
          <RNPickerSelect
            onValueChange={(value) => setSelectedMonth(value)}
            items={months}
            placeholder={{ label: 'Select a month', value: null }}
          />
          <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
            <Text>Confirm</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  confirmButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#00adf5',
    borderRadius: 5,
  },
});

export default CustomCalendar;

import React from 'react';
import { View, StyleSheet } from 'react-native';

const Pagination = ({ pageCount, currentPage }) => {
  return (
    <View style={styles.container}>
    {[...Array(pageCount).keys()].map((index) => (
      <View
        key={index}
        style={[
          styles.dot,
          { backgroundColor: index === currentPage ?  '#020064' : '#6E6D8E' },
        ]}
      />
    ))}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 300,
    marginTop: 40
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});

export default Pagination;

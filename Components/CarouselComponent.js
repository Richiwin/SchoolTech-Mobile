import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import DotPagination from '../Common/DotPagination';
 // Adjust the path as per your directory structure

const CarouselComponent = ({ currentPage }) => {
  const carouselData = [
    { image: require('../Assets/splashy.png'), text: 'Text for Image 1' },
    { image: require('../Assets/splashy.png'), text: 'Text for Image 2' },
    { image: require('../Assets/splashy.png'), text: 'No Distractions' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View>
      <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={400}
        layout="default"
        autoplay={true}
        autoplayInterval={0}
        loop={true}
        onSnapToItem={(index) => currentPage(index)}
      />
      <DotPagination pageCount={carouselData.length} currentPage={currentPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover', // Adjust resizeMode as per your requirement
  },
  text: {
    position: 'absolute',
    bottom: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CarouselComponent;

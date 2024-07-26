import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import DotPagination from './SimplePaginationDot';

const MyPager = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef(null);

  useEffect(() => {
    // Create an interval to automatically slide to the next page every 3 seconds (adjust as needed)
    const slideInterval = setInterval(() => {
      const nextPage = (currentPage + 1) % 3; // Assuming there are 2 pages
      setCurrentPage(nextPage);
      pagerRef.current.setPage(nextPage);
    }, 3000); // 3 seconds interval (adjust as needed)

    return () => {
      clearInterval(slideInterval); // Clean up the interval on unmount
    };
  }, [currentPage]);

  return (
    <SafeAreaView style={styles.container}>
      <PagerView
        style={styles.pagerView}
        initialPage={currentPage} // Set the initial page
        onPageSelected={event => setCurrentPage(event.nativeEvent.position)}
        ref={pagerRef}>
        <View key="1">
          <ImageBackground
            source={require('../Assets/Group8.jpg')}
            style={styles.imageContainer}
          />
          <View style={styles.overlay} />
          <View style={styles.textcontainer}>
            <Text style={styles.subhead}>Go study!</Text>
            <Text style={styles.text}>
              Get started with your account while taking{' '}
            </Text>
            <Text style={styles.text}>charge of your courses</Text>
          </View>
        </View>
        <View key="2">
          <ImageBackground
            source={require('../Assets/Group7.jpg')}
            style={styles.imageContainer}
          />
          <View style={styles.overlay} />
          <View style={styles.textcontainer}>
            <Text style={styles.subhead}>Engage your mind</Text>
            <Text style={styles.text}>
              Take online interaction assessments on the{' '}
            </Text>
            <Text style={styles.text}>app to gauge your intellect</Text>
          </View>
        </View>
        <View key="3">
          <ImageBackground
            source={require('../Assets/Group6.jpg')}
            style={styles.imageContainer}
          />
          <View style={styles.overlay} />
          <View style={styles.textcontainer}>
            <Text style={styles.subhead}>No distractions</Text>
            <Text style={styles.text}>
              We allow you focus on the important things{' '}
            </Text>
            <Text style={styles.text}> and avoid distractions</Text>
          </View>
        </View>
      </PagerView>
      <DotPagination pageCount={3} currentPage={currentPage} />
    </SafeAreaView>
  );
};

export default MyPager;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  pagerView: {
    height: 225,
    width: 400,
    marginBottom: 10,
    borderRadius: 18,
  },

  imageContainer: {
    height: 225,
    width: 400,
    borderRadius: 14,
  },
  text: {
    color: '#ffffff',
    fontSize: 15,
  },
  subhead: {
    fontSize: 26,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
  },
  textcontainer: {
    position: 'absolute',
    top: 100,
    left: 40,
    textAlign: 'left',
    color: 'white',
  },
});

// <ImageBackground source={require('../Assets/Trade2profit1.png')} style={styles.image}>

// </ImageBackground>

// <View style={styles.textContainer}>
// <Text  style={[styles.textitem1, { textDecorationLine: 'underline' ,  }]}>We are Trade2Profit</Text>
// <Text  style={styles.textitem2}>Trade <Text style={styles.emptytext}>Smarter</Text></Text>
// <Text  style={styles.textitem3}>not <Text style={styles.emptytext}>Harder </Text></Text>
// <Text  style={styles.textitem4}>success is just a click way</Text>
// </View>

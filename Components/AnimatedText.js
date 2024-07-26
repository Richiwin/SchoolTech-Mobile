import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';

const AnimatedText = () => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: true,
      })
    ).start();
  }, [animation]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-400, 0],
  });

  return (
    <Animated.Text style={[styles.text, { transform: [{ translateX }] }]}>
      GENESIS ACADEMY
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    fontWeight: '900',
    color: '#ffffff', // Choose a color that suits your design
    textAlign: 'center',
    textShadowColor: '#2435A1',
    textShadowOffset: { width: 0, height: 2 }, // Adjust as needed
    textShadowRadius: 5, // Adjust as needed
  },
});

export default AnimatedText;

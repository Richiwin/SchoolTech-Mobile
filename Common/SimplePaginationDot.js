// import React from 'react';

// import {View, StyleSheet} from 'react-native';

// function genCircleStyle(size) {
//   if (!size) {
//     return {};
//   }
//   return {width: size, height: size, borderRadius: size / 2};
// }

// function Dot({isActive, color, activeDotSize, inActiveDotSize, dotSeparator}) {
//   const processedActiveDotStyle = [
//     styles.activeDot,
//     {
//       backgroundColor: color,
//       borderColor: color,
//       marginHorizontal: dotSeparator / 2,
//       ...genCircleStyle(activeDotSize),
//     },
//   ];
//   const processedInActiveDotStyle = [
//     styles.inActiveDot,
//     {
//       backgroundColor: 'transparent',
//       borderColor: color,
//       marginHorizontal: dotSeparator / 2,
//       ...genCircleStyle(inActiveDotSize),
//     },
//   ];
//   return (
//     <View
//       style={[
//         styles.baseDot,
//         isActive ? processedActiveDotStyle : processedInActiveDotStyle,
//       ]}
//     />
//   );
// }

// export default function SimplePaginationDot(props) {
//   const {
//     style,
//     length,
//     currentIndex = 0,
//     color = '#fff',
//     activeDotSize = 14,
//     inActiveDotSize = 10,
//     dotSeparator = 10,
//   } = props;
//   function renderItem(item, index) {
//     return (
//       <Dot
//         key={index}
//         isActive={index === currentIndex}
//         color={color}
//         activeDotSize={activeDotSize}
//         inActiveDotSize={inActiveDotSize}
//         dotSeparator={dotSeparator}
//       />
//     );
//   }
//   return (
//     <View style={[styles.container, style]}>
//       {Array(length).fill(0).map(renderItem)}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     width: '100%',
//     height: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   baseDot: {
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: 'white',
//   },
//   activeDot: {
//     backgroundColor: 'white',
//   },
//   inActiveDot: {
//     backgroundColor: 'transparent',
//   },
// });





import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

function DotPagination({ pageCount, currentPage }) {
  return (
    <SafeAreaView style={styles.container}>
      {Array.from({ length: pageCount }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { backgroundColor: index === currentPage ? '#020064' : '#6E6D8E' },
          ]}
        />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default DotPagination;

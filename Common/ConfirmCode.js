import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const ConfirmCode = ({ onChangeCode }) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleChange = (code) => {
    setValue(code);
    if (onChangeCode) {
      onChangeCode(code);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={handleChange}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, paddingLeft: 0 },
  codeFieldRoot: { marginTop: 20, },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#6E6D8E',
    textAlign: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    marginLeft: 6,
    color: '#020064'
  },
  focusCell: {
    borderColor: '#020064',
  },
});

export default ConfirmCode;

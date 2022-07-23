// https://github.com/hectahertz/react-native-typography
// https://github.com/zoontek/react-native-localize.git

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import * as TP from 'react-native-typography';

import text from '../../constants/text';

export default ({
  font = {
    family: '',
    class: '',
  },
  style,
  children,
}) => {
  // font library configuration:
  const fontLib = TP[font.family || text.fontFamily];
  const fontStyles = fontLib[font.class || text.fontClass];

  return <Text style={[styles.text, fontStyles, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {},
});

// react-native-typography:
// consumer component can send font family and class with props
// also default font family and class can be set in src/constants/text.js
// also if you want to add more special styles for specific font family and class, you can import and spread them in consumer component

// https://github.com/rcaferati/react-native-really-awesome-button

import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../../constants/colors';

import Text from '../../function/Text';

export default Button = ({
  style,
  children,
  onPress = () => {},
  title,
  disabledStyle,
  titleStyle,
  disabled = false,
  ...props
}) => {
  const [loading, setLoading] = useState(false);

  const handleOnPress = event => {
    try {
      setLoading(true);
      onPress(event);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.warn(error);
    }
  };

  const height =
    (style?.height || 40) +
    (style?.paddingVertical || 0) +
    (style?.marginVertical || 0);
  const width = style?.width || '100%';

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      disabled={disabled}
      style={[styles.button, style, {height, width}, disabled && disabledStyle]}
      {...props}>
      {loading ? (
        <ActivityIndicator />
      ) : title ? (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.white,
  },
  title: {
    fontSize: 16,
    color: colors.white,
  },
});

// react-native-really-awesome-button:
// I got some help from this library, but unfortunately since it's an old library,
// I prefered to code it myself from scratch.

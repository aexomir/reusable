// https://github.com/rcaferati/react-native-really-awesome-button

import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';

import Text from '../../function/Text';

export default Button = ({
  style,
  children,
  onPress,
  title,
  disabledStyle,
  disabled = false,
  ...props
}) => {
  const [loading, setLoading] = useState(false);

  const handleOnPress = event => {
    setLoading(true);
    onPress(event);
    setLoading(false);
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      disabled={disabled}
      style={[styles.button, style, disabled && disabledStyle]}
      {...props}>
      {loading ? (
        <ActivityIndicator />
      ) : title ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {},
});

// react-native-really-awesome-button:
// I got some help from this library, but unfortunately since it's an old library,
// I prefered to code it myself from scratch.

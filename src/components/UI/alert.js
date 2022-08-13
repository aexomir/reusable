// https://github.com/lucasferreira/react-native-flash-message

import React from 'react';
import {View, StyleSheet} from 'react-native';
import FlashMessage, {showMessage} from 'react-native-flash-message';

export default Alert = ({position = 'top'}) => {
  // posiition: top, left, right, center, bottom
  return <FlashMessage position={position} />;
};

const styles = StyleSheet.create({
  container: {},
});

// this function is used to show a message
export const withAlert = ({
  message,
  type = 'success',
  duration = 3000,
  hideOnPress = true,
  onPress,
  icon = 'auto',
  style,
  ...props
}) => {
  return showMessage({
    message,
    type, // success, error, warning, danger, info, default
    duration,
    hideOnPress,
    onPress,
    icon, // The icon prop could be a render function that return a new JSX Element to be placed in icon position OR a definition of the graphical icon of a flash message. Expected options: "none" (default), "auto" (guided by type), "success", "info", "warning", "danger", a custom icon (render function) or a custom object with icon type/name and position (left or right) attributes, e.g.: { icon: "success", position: "right" }
    style,
    ...props, // for more customizations over props, see // https://github.com/lucasferreira/react-native-flash-message
  });
};

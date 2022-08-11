// https://github.com/mastermoo/react-native-action-button
// https://github.com/geremih/react-native-circular-action-menu

import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import RNActionButton from 'react-native-action-button';

import Text from '../../function/Text';

const DUMMY_OPTIONS = [
  {
    id: 1,
    name: 'Facebook',
    color: '#3b5998',
    onPress: () => {
      console.log('Facebook');
    },
  },
  {
    id: 2,
    name: 'Google',
    color: '#dd4b39',
    onPress: () => {
      console.log('Google');
    },
  },
  {
    id: 3,
    name: 'Github',
    color: '#24292e',
    onPress: () => {
      console.log('Github');
    },
  },
];

export default ActionButton = ({
  actions = DUMMY_OPTIONS,
  color = '#24292e',
  size = 60,
  degrees = 135,
  position = 'center',
  renderMainIcon,
  onToggle,
  onReset,
  ...props
}) => {
  const renderAction = ({id, color, title, iconName, onPress}) => {
    return (
      <RNActionButton.Item
        key={id}
        buttonColor={color}
        title={title}
        onPress={onPress}
        size={id == 2 ? 55 : 45}>
        {/* <Icon name={iconName} style={styles.actionButtonIcon} /> */}
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={{
            width: 200,
            height: 300,
            borderWidth: 1,
          }}
        />
        {/* <Text>{title}</Text> */}
      </RNActionButton.Item>
    );
  };

  return (
    <View style={styles.container}>
      <RNActionButton
        buttonColor={color}
        position={position}
        renderIcon={renderMainIcon}
        onPress={onToggle}
        onReset={onReset}
        size={size}
        degrees={degrees}
        {...props}>
        {actions.map(action => {
          return renderAction(action);
        })}
      </RNActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

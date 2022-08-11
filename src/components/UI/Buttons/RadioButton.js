// https://github.com/ArnaudRinquin/react-native-radio-buttons

import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {RadioButtons} from 'react-native-radio-buttons';

import Text from '../../function/Text';
import colors from '../../../constants/colors';

export default RadioButton = ({
  options = [],
  selectedOptionStyle,
  optionStyle,
  onSelectOption,
  selectedOption,
  color = colors.primary,
}) => {
  const renderOption = (option, selected, onSelect, index) => {
    const optionStyles = selected
      ? [styles.selectedOption, selectedOptionStyle]
      : [styles.option, optionStyle];

    return (
      <TouchableOpacity key={index} onPress={onSelect} style={optionStyles}>
        <View style={[styles.circle, {borderColor: color}]}>
          {selected && (
            <View style={[styles.checkedCircle, {backgroundColor: color}]} />
          )}
        </View>
        <Text style={{color}}>{option}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <RadioButtons
      options={options}
      onSelection={onSelectOption}
      selectedOption={selectedOption}
      renderOption={renderOption}
      renderContainer={optionNodes => <View>{optionNodes}</View>}
    />
  );
};

const CIRCLE_SIZE = 20;

const styles = StyleSheet.create({
  selectedOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderWidth: 1,
    marginRight: CIRCLE_SIZE / 2,
  },
  checkedCircle: {
    width: CIRCLE_SIZE / 2,
    height: CIRCLE_SIZE / 2,
    borderRadius: CIRCLE_SIZE / 4,
  },
});

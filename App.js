import React from 'react';
import {View, StyleSheet, LogBox} from 'react-native';
import ActionButton from './src/components/UI/Buttons/ActionButton';

export default App = props => {
  LogBox.ignoreAllLogs(true);

  return (
    <View style={styles.container}>
      <ActionButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

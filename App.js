import React from 'react';
import {View, StyleSheet, Text, LogBox, TouchableOpacity} from 'react-native';

import Alert from './src/components/UI/Alert';
import Icon from './src/components/UI/Icon';

export default App = props => {
  LogBox.ignoreAllLogs(true);

  return (
    <View style={styles.container}>
      <Icon />
      {/* This Alert Component is for initialization; => Don't remove it! */}
      <Alert />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

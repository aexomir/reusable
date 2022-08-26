import React from 'react';
import {View, StyleSheet, LogBox} from 'react-native';

import Alert from './src/components/UI/Alert';

export default App = props => {
  LogBox.ignoreAllLogs(true);

  return (
    <View style={styles.container}>
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

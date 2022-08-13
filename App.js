import React from 'react';
import {View, StyleSheet, LogBox} from 'react-native';

import Alert, {withAlert} from './src/components/UI/Alert';
import Button from './src/components/UI/Buttons/Button';

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
    // padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

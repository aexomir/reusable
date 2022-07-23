import React from 'react';
import {View, StyleSheet} from 'react-native';

import Text from './src/components/function/Text';

export default App = props => {
  return (
    <View style={styles.container}>
      <Text
        language="en"
        i18nProps={{
          name: 'Aexo',
        }}>
        {'hello_world'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

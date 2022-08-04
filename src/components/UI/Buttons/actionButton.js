// https://github.com/mastermoo/react-native-action-button
// https://github.com/geremih/react-native-circular-action-menu

import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import RNActionButton from 'react-native-action-button';

export default ActionButton = props => {
  return (
    <View style={styles.container}>
      <RNActionButton buttonColor="rgba(231,76,60,1)">
        <RNActionButton.Item
          buttonColor="#9b59b6"
          title="New Task"
          onPress={() => console.log('notes tapped!')}>
          {/* <Icon name="md-create" style={styles.actionButtonIcon} /> */}
          <Image source={'https://picsum.photos/200'} />
        </RNActionButton.Item>
        {/* <RNActionButton.Item
          buttonColor="#3498db"
          title="Notifications"
          onPress={() => {}}>
          <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
        </RNActionButton.Item>
        <RNActionButton.Item
          buttonColor="#1abc9c"
          title="All Tasks"
          onPress={() => {}}>
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </RNActionButton.Item> */}
      </RNActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

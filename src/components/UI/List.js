// https://reactnative.dev/docs/optimizing-flatlist-configuration
import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';

export default List = ({
  data,
  keyExtractor,
  renderer,
  seperatorStyles,
  ListHeaderComponent,
  ListFooterComponent,
  ListEmptyComponent,
  horizontal = false,
  stickyHeaderIndices = [],
  ...props
}) => {
  const screenHeight = Math.round(Dimensions.get('screen').height);

  const renderItem = ({item}) => {
    return <View key={item.id || item.key}>{renderer(item)}</View>;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      maxToRenderPerBatch={screenHeight / data.length} // This is the number of items to render at once.
      initialNumToRender={screenHeight / data.length} // This is the number of items to render initially.  This is a performance optimization.
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => (
        <View style={[styles.separator, seperatorStyles]} /> // This is the separator between items.
      )}
      ListHeaderComponent={ListHeaderComponent} // header is rendered at the top of the list.
      listfooterComponent={ListFooterComponent} // footer is rendered at the bottom of the list.
      ListEmptyComponent={ListEmptyComponent} // component to render when list is empty
      stickyHeaderIndices={
        stickyHeaderIndices.length > 0 ? stickyHeaderIndices : [0]
      } // indices of items to render as sticky headers
      // stickyHeaderIndices can also be an array of the indices we want to stick. You can even set a lot of indices
      horizontal={horizontal}
      keyboardDismissMode={'interactive'} // {interactive, none, on-drag}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});


// use stickyHeaderIndices + listHeaderComponent + listFooterComponent to render sticky headers.
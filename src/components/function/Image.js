// https://github.com/DylanVann/react-native-fast-image
// https://github.com/ladas-larry/react-native-responsive-image
// https://github.com/jayesbe/react-native-cacheable-image

import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

export default Image = ({
  uri,
  width = 200,
  height = 200,
  style,
  token,
  resizeMode = 'contain', // can be 'contain', 'cover', 'stretch', 'center'
  priorityMode = 'normal', // can be 'low' or 'normal' or 'high',
  cacheMode = 'immutable', // can be 'immutable' or 'web' or 'cache only'
}) => {
  const resize = FastImage.resizeMode[resizeMode];
  const priority = FastImage.priority[priorityMode];
  const cache = FastImage.cacheControl[cacheMode];

  return (
    <FastImage
      source={{
        uri,
        headers: token !== '' ? {Authorization: token} : null,
        priority,
        cache,
      }}
      style={[styles.image, {width, height}, style]}
      resizeMode={resize}
    />
  );
};

const styles = StyleSheet.create({
  image: {},
});

// gives an array of all the images you want to pre load
export const preLoadImages = (images = []) => {
  return FastImage.preload(images);
};

export const clearImageCache = () => {
  FastImage.clearMemoryCache();
  FastImage.clearDiskCache();
  return;
};

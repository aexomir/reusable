// https://github.com/hectahertz/react-native-typography
// www.npmjs.com/package/i18n-js/v/next
// https://github.com/zoontek/react-native-localize.git

import React from 'react';
import {StyleSheet, Text, I18nManager} from 'react-native';
import * as TP from 'react-native-typography';
import * as RNLocalize from 'react-native-localize';

import text from '../../constants/text';
import i18n from '../../constants/i18n';

export default ({
  font = {
    family: '',
    class: '',
  },
  language,
  i18nProps,
  style,
  children,
}) => {
  // font library configuration:
  const fontLib = TP[font.family || text.fontFamily];
  const fontStyles = fontLib[font.class || text.fontClass];

  // language configuration:
  const availableLanguages = Object.keys(i18n.translations);
  const {languageTag: deviceLanguageCode, isRTL} =
    RNLocalize.findBestAvailableLanguage(availableLanguages);
  // const deviceLanguageCode = RNLocalize.getLocales()[0].languageCode;      // alternative
  i18n.locale = language || deviceLanguageCode;
  i18n.enableFallback = true;
  i18n.missingBehavior = 'guess';
  I18nManager.allowRTL(isRTL);

  return (
    <Text style={[styles.text, fontStyles, style]}>
      {i18n.t(children, {
        ...i18nProps,
        defaultValue: children,
      })}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {},
});

// react-native-typography:
// consumer component can send font family and class with props
// also default font family and class can be set in src/constants/text.js
// also if you want to add more special styles for specific font family and class, you can import and spread them in consumer component

// i18n-js:
// i18nProps are used for dynamic text inside translations
// defaultValue speciifies text if translation is not found

// https://github.com/wix/react-native-calendars
// https://hosseinshabani.github.io/react-native-modern-datepicker/
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';
import * as RNLocalize from 'react-native-localize';

export default ({
  initialDate,
  minDate = '2020-01-01',
  maxDate = '2022-12-31',
  onDayPress,
  onMonthChange,
  arrows, // arrow functions which return components for prev/next month
  markingType = 'simple', // 'period' or 'simple',
  start,
  end,
  ...props
}) => {
  return (
    <Calendar
      initialDate={initialDate}
      minDate={minDate}
      maxDate={maxDate}
      onDayPress={onDayPress}
      onMonthChange={onMonthChange}
      // render default arrows:
      hideArrows={arrows != null}
      renderArrow={arrows}
      enableSwipeMonths
      //
      markingType={markingType}
      // you can mark days in any order you want, but that's out of this component scope;
      // if you want to add this functionality, add it with markedDates and see the doc for more info
      markedDates={{
        [start]: {startingDay: true, color: '#50cebb'},
        [end]: {endingDay: true, color: '#50cebb'},
      }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

// you can call this function whenever you need to change the locale for calendar
export const localizeCalendar = defaultLocale => {
  LocaleConfig.locales['fa'] = {
    monthNames: [
      'فروردین',
      'اردیبهشت',
      'خرداد',
      'تیر',
      'مرداد',
      'شهریور',
      'مهر',
      'آبان',
      'آذر',
      'دی',
      'بهمن',
      'اسفند',
    ],
    monthNamesShort: [
      'فروردین',
      'اردیبهشت',
      'خرداد',
      'تیر',
      'مرداد',
      'شهریور',
      'مهر',
      'آبان',
      'آذر',
      'دی',
      'بهمن',
      'اسفند',
    ],
    dayNames: [
      'یکشنبه',
      'دوشنبه',
      'سه شنبه',
      'چهارشنبه',
      'پنجشنبه',
      'جمعه',
      'شنبه',
    ],
    dayNamesShort: [
      'یکشنبه',
      'دوشنبه',
      'سه شنبه',
      'چهارشنبه',
      'پنجشنبه',
      'جمعه',
      'شنبه',
    ],
    today: 'امروز',
  };

  LocaleConfig.locales['det'] = {
    monthNames: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mär',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dez',
    ],
    dayNames: [
      'Sonntag',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
    ],
    dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    today: 'Heute',
  };

  const isDefaultExisting = LocaleConfig.locales[defaultLocale] != undefined;
  const deviceDefaultLocale = RNLocalize.getLocales()[0].languageTag.substring(
    0,
    2,
  ); // en-US -> en
  const isDeviceLocaleExisting =
    LocaleConfig.locales[deviceDefaultLocale] != undefined;

  LocaleConfig.defaultLocale = isDefaultExisting
    ? defaultLocale
    : isDeviceLocaleExisting
    ? deviceDefaultLocale
    : ''; // '' means default locale which ia 'en'
};

export const addLocaleCalendar = (locale, calendar) => {
  LocaleConfig.locales[locale] = calendar;
  // for a list of keys for calendar object see upper function `localizeCalendar`
};

// https://github.com/root-two/react-native-drawer
import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Drawer from 'react-native-drawer';

export default Custom_Drawer = ({
  children,
  content,
  type = 'overlay', // 'overlay', 'static', 'displace'
  onToggle,
  style,
  disabled = false,
  onOpen,
  onClose,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);
  const drawer = useRef();

  const toggleDrawer = () => {
    if (onToggle !== undefined) {
      onToggle();
    }
    if (!isOpen) {
      drawer.current.open();
      setOpen(true);
    } else {
      drawer.current.close();
      setOpen(false);
    }
  };

  const contentContainer = () => {
    // this is the content shown when drawer is open
    return (
      <TouchableOpacity onPress={toggleDrawer} style={styles.container}>
        {content}
      </TouchableOpacity>
    );
  };

  return (
    <Drawer
      ref={drawer}
      open={isOpen}
      type={type}
      tapToClose
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      closedDrawerOffset={-3}
      content={contentContainer()}
      tweenHandler={ratio => ({
        main: {opacity: (2 - ratio) / 2},
      })}
      disabled={disabled}
      style={style}
      onOpen={onOpen}
      onClose={onClose}
      {...props}>
      {/* here: children means anythings you want to put to show when drawer closed */}
      <TouchableOpacity onPress={toggleDrawer}>{children}</TouchableOpacity>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
});

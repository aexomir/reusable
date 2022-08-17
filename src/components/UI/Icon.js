// https://github.com/oblador/react-native-vector-icons
import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

export default Icon = ({
  pack = 'AntDesign',
  name = 'rocket',
  size = 30,
  color = 'red',
}) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    loadPack();
  }, [pack]);

  async function loadPack() {
    switch (pack) {
      case 'AntDesign':
        await import('react-native-vector-icons/AntDesign')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'Entypo':
        await import('react-native-vector-icons/Entypo')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'EvilIcons':
        await import('react-native-vector-icons/EvilIcons')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'Feather':
        await import('react-native-vector-icons/Feather')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'FontAwesome':
        await import('react-native-vector-icons/FontAwesome')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'FontAwesome5_Brands':
        await import('react-native-vector-icons/FontAwesome5')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'FontAwesome5_Regular':
        await import('react-native-vector-icons/FontAwesome5')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'FontAwesome5_Solid':
        await import('react-native-vector-icons/FontAwesome5')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'Foundation':
        await import('react-native-vector-icons/Foundation')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'Ionicons':
        await import('react-native-vector-icons/Ionicons')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'MaterialIcons':
        await import('react-native-vector-icons/MaterialIcons')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'MaterialCommunityIcons':
        await import('react-native-vector-icons/MaterialCommunityIcons')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'SimpleLineIcons':
        await import('react-native-vector-icons/SimpleLineIcons')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'Octicons':
        await import('react-native-vector-icons/Octicons')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'Zocial':
        await import('react-native-vector-icons/Zocial')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      case 'Fontisto':
        await import('react-native-vector-icons/Fontisto')
          .then(Font => {
            setIcon(Font);
          })
          .catch(error => {
            console.warn(error);
          });
        break;
      default:
        console.warn('Icon pack not found!');
        break;
    }
  }

  return (
    <View style={styles.container}>
      {icon && <icon.default name={name} size={size} color={color} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

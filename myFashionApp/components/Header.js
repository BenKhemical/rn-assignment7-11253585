import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={require('../assets/Menu.png')} style={styles.icon} />
      </TouchableOpacity>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => console.log('Search pressed')}>
          <Image source={require('../assets/Search.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={require('../assets/shoppingBag.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    borderBottomColor: '#ddd',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  logo: {
    width: 110,
    height: 44,
  },
});

export default Header;

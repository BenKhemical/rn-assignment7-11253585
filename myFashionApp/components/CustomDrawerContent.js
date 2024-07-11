import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.userName}>Bernard Afful</Text>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Store"
        onPress={() => props.navigation.navigate('Store')}
      />
      <DrawerItem
        label="Locations"
        onPress={() => props.navigation.navigate('Locations')}
      />
      <DrawerItem
        label="Blog"
        onPress={() => props.navigation.navigate('Blog')}
      />
      <DrawerItem
        label="Jewelry"
        onPress={() => props.navigation.navigate('Jewelry')}
      />
      <DrawerItem
        label="Electronics"
        onPress={() => props.navigation.navigate('Electronics')}
      />
      <DrawerItem
        label="Clothing"
        onPress={() => props.navigation.navigate('Clothing')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 30,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userName: {
    fontSize: 24,
    fontStyle: 'italic',
  },
});

export default CustomDrawerContent;

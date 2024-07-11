import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();

    const loadCart = async () => {
      const cartItems = await AsyncStorage.getItem('cart');
      if (cartItems) {
        setCart(JSON.parse(cartItems));
      }
    };
    loadCart();
  }, []);

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity style={styles.cartIconContainer} onPress={() => addToCart(item)}>
          <Image source={require('../assets/add_circle.png')} style={styles.cartIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={styles.storyContainer}>
        <Text style={styles.storyText}>Our Story</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => console.log('Filter pressed')}>
            <Image source={require('../assets/Listview.png')} style={styles.smallIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('List pressed')}>
            <Image source={require('../assets/Filter.png')} style={styles.smallIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        columnWrapperStyle={styles.row}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 200,
    marginLeft: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 130,
    height: 200,
  },
  text: {
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 14,
    flexWrap: 'wrap', 
  },
  price: {
    textAlign: 'center',
    color: '#FF6347',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  cartIcon: {
    width: 30,
    height: 30,
  },
  storyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  storyText: {
    fontSize: 24,
    fontStyle: 'italic',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  smallIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default HomeScreen;

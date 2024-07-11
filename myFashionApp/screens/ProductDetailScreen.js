import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [showSubText, setShowSubText] = useState(false);

  const toggleSubText = () => {
    setShowSubText(!showSubText);
  };

  const addToCart = () => {
    alert(`Added ${product.title} to cart!`);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.title}>MATERIALS</Text>
      <Text style={styles.description}>{product.description}</Text>
      <View style={styles.iconTextContainer}>
        <Image source={require('../assets/Do Not Bleach.png')} style={styles.icon} />
        <Text style={styles.iconText}>Do not use bleach</Text>
      </View>
      <View style={styles.iconTextContainer}>
        <Image source={require('../assets/Do Not Tumble Dry.png')} style={styles.icon} />
        <Text style={styles.iconText}>Do not tumble dry</Text>
      </View>
      <View style={styles.iconTextContainer}>
        <Image source={require('../assets/Do Not Wash.png')} style={styles.icon} />
        <Text style={styles.iconText}>Dry clean with tetrachloroethylene</Text>
      </View>
      <View style={styles.iconTextContainer}>
        <Image source={require('../assets/Iron Low Temperature.png')} style={styles.icon} />
        <Text style={styles.iconText}>Iron at a maximum of 110°C/230°F</Text>
      </View>

       <View style={styles.line} />
      <View style={styles.bottomContainer}>
        <Image source={require('../assets/Shipping.png')} style={styles.bottomIcon} />
        <Text style={styles.bottomText}>Free Flat Rate Shipping</Text>
      </View>

      <TouchableOpacity style={styles.toggleButton} onPress={toggleSubText}>
        <Image source={require('../assets/Up.png')} style={styles.toggleIcon} />
      </TouchableOpacity>
      {showSubText && (
        <View>
          <Text style={styles.subText}>Estimated to be delivered on</Text>
          <Text style={styles.subText}>09/11/2021 - 12/11/2021.</Text>
        </View>
      )}

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
          <Image source={require('../assets/Plus.png')} style={styles.cartIcon} />
          <Text style={styles.addToCartText}>Add to Basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  image: {
    width: 300,
    height: 200,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 20,
    color: '#FF6347',
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'left',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  iconText: {
    fontSize: 18,
    color: '#666',
  },
  line: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  bottomIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  bottomText: {
    fontSize: 20,
    color: '#333',
    marginLeft: 10,
    padding: 10,
  },
  toggleButton: {
    alignSelf: 'flex-end',
    marginTop: -30,
    marginRight: 20,
  },
  toggleIcon: {
    width: 24,
    height: 24,
  },
  subText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 42,
    padding: 5,
  },
  footer: {
    backgroundColor: '#333',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
     color: '#fff'
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProductDetailScreen;

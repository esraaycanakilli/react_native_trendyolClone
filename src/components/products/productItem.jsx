import React from 'react';
import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import {screenHeight, screenWidth} from '../../utils/constant';
import AppColors from '../../theme/colors';
import {Heart, Star, Star1} from 'iconsax-react-native';
import {convertPrice} from '../../utils/functions';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../../utils/routes';

const ProductItem = ({product}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate(AppScreens.ProductDetail, {productId: product.id})
      }>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text numberOfLines={2} style={styles.title}>
        {product.title}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.price}>{convertPrice(product.price)}</Text>
        <View style={styles.infoContainer}>
          <Star1 size={20} color={AppColors.yellow} variant="Bold" />
          <Text>{product.rating.rate}</Text>
        </View>
      </View>
      <View style={styles.favorites}>
        <Heart size={25} color={AppColors.red} variant="Outline" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth / 2 - 20,
    margin: 3,
    padding: 8,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: AppColors.softgray,
  },
  image: {
    width: screenWidth / 2 - 50,
    height: screenHeight * 0.15,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 10,
  },
  description: {},
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rate: {
    fontSize: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: AppColors.primary,
  },
  favorites: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default ProductItem;

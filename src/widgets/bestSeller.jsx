import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import AppColors from '../theme/colors';
import WidgetTitle from '../components/widgets/widgetTitle';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../components/products/productItem';
import {getProducts} from '../store/actions/productsActions';

const BestSeller = ({item}) => {
  const {bestSellerProducts} = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProducts({
        limit: 4,
        category: "men's clothing",
      }),
    );
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle
        title={item.title}
        seeAll={item.seeAll}
        category="men's clothing"
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          alignItems: 'center',
        }}
        data={bestSellerProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
});

export default BestSeller;

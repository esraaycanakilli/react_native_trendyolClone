import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import AppColors from '../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../store/actions/categoriesActions';
import CategoryItem from '../components/widgets/categoryItem';
import { screenHeight } from '../utils/constant';

const Categories = ({item}) => {
  const {categories} = useSelector(state => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    marginVertical:15,
    maxHeight:screenHeight*0.04
  },
});

export default Categories;

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../../store/slice/categoriesSlice';
import AppColors from '../../theme/colors';
import { screenHeight, screenWidth } from '../../utils/constant';

const CategoryItem = ({category}) => {
  const dispatch = useDispatch();
  const {selectedCategory} = useSelector(state => state.categories);
  return (
    <TouchableOpacity
      onPress={() => dispatch(setCategory(category))}
      style={[
        styles.container,
        selectedCategory == category
          ? styles.activeCategoryContainer
          : styles.inactiveCategoryContainer,
      ]}>
      <Text
        style={
          selectedCategory == category
            ? styles.activeTitle
            : styles.inactiveTitle
        }>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 6,
    borderRadius: 100,
    borderWidth: 0.5,
    marginHorizontal: 4,
    maxHeight:screenHeight*0.04,
    maxWidth:screenWidth*0.6,
  },
  activeCategoryContainer: {
    backgroundColor: AppColors.primary,
    borderColor:AppColors.primary
  },
  inactiveCategoryContainer: {
    backgroundColor: AppColors.white,
  },
  activeTitle: {
    color: AppColors.white,
    fontWeight:"500"
  },
  inactiveTitle: {
    color: AppColors.black,
  },
});

export default CategoryItem;

//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppColors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../../utils/routes';

// create a component
const WidgetTitle = ({title, seeAll,category}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {seeAll && (
        <TouchableOpacity
          onPress={() => navigation.navigate(AppScreens.Products,{category:category})}>
          <Text style={styles.seeAll}>Tümünü Gör</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 20,
  },
  seeAll: {
    fontSize: 10,
    color: AppColors.primary,
  },
});

export default WidgetTitle;

import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import AppColors from '../../theme/colors';

const Button = props => {
  const {title, buttonType, onPress} = props;  
  return (
    <Pressable
      style={[
        styles.container,
        buttonType === 'flat' ? styles.flatButton : styles.outlineButton, // 'flat?' yerine 'flat'
      ]}
      onPress={onPress}  
      {...props}>
      <Text style={[
        styles.title,
        buttonType === 'flat' ? styles.flatTitle : styles.outlineTitle, // 'flat?' yerine 'flat'
      ]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
    borderColor: AppColors.primary,
    padding:10
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  flatButton: {
    backgroundColor: AppColors.primary,
  },
  outlineButton: {
    backgroundColor: AppColors.white,
  },
  flatTitle: {
    color: AppColors.white,
  },
  outlineTitle: {
    color: AppColors.primary,
  },
});

export default Button;

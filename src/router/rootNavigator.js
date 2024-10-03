import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppScreens} from '../utils/routes';
import TabNavigator from './tabNavigator';
import Notification from '../screens/notifications';
import Notice from '../screens/notice';
import AppColors from '../theme/colors';
import Products from '../screens/products';
import ProductDetail from '../screens/products/productDetail';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: AppColors.black,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={AppScreens.TabMenu}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={AppScreens.Notifications}
        component={Notification}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={AppScreens.Products}
        component={Products}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={AppScreens.ProductDetail}
        component={ProductDetail}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={AppScreens.Notice}
        component={Notice}
      />
    </Stack.Navigator>
  );
}

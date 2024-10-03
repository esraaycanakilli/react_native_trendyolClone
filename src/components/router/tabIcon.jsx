import React from 'react';
import {
  Home,
  ShoppingCart,
  Google,
  Profile,
  HeartAdd,
} from 'iconsax-react-native';
import {AppScreens} from '../../utils/routes';

const TabIcon = ({name, size, color, focused}) => {
  switch (name) {
    case AppScreens.Home:
      return (
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case AppScreens.Cart:
      return (
        <ShoppingCart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case AppScreens.Favorites:
      return (
        <HeartAdd
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case AppScreens.Profile:
      return (
        <Profile
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case AppScreens.TrendyolGo:
      return (
        <Google
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    default:
      <Home size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />;
  }
};



export default TabIcon;

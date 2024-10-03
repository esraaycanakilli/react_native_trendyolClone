import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppScreens} from '../utils/routes';
import HomeScreen from '../screens/home';
import TrendyolGo from '../screens/trendyolGo';
import FavoritesScreen from '../screens/favorites';
import CartScreen from '../screens/cart';
import ProfileScreen from '../screens/profile';
import TabIcon from '../components/router/tabIcon';
import AppColors from '../theme/colors';
import {Pressable, View} from 'react-native';
import {Notification, Sms} from 'iconsax-react-native';
import Notice from '../screens/notice';
import Notifications from '../screens/notice';


const Tab = createBottomTabNavigator();

export default TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route,navigation}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <TabIcon
              name={route.name}
              size={size}
              color={color}
              focused={focused}
            />
          );
        },
        headerRight: props => (
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <Pressable 
            onPress={()=>navigation.navigate(AppScreens.Notice)}
            style={{marginHorizontal:5}}>
              <Sms size="28" color={AppColors.black} />
            </Pressable>
            <Pressable 
            onPress={()=>navigation.navigate(AppScreens.Notifications)}
            style={{marginHorizontal:5}}>
              <Notification size="28" color={AppColors.black} />
            </Pressable>
          </View>
        ),
        tabBarActiveTintColor: AppColors.primary,
        tabBarInactiveTintColor: AppColors.gray,
      })}>
      <Tab.Screen name={AppScreens.Home} component={HomeScreen} />
      <Tab.Screen name={AppScreens.TrendyolGo} component={TrendyolGo} />
      <Tab.Screen name={AppScreens.Favorites} component={FavoritesScreen} />
      <Tab.Screen name={AppScreens.Cart} component={CartScreen} />
      <Tab.Screen name={AppScreens.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

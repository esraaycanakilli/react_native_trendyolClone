//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import { AppScreens } from '../utils/routes';

// create a component
const Introduction = ({item}) => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      <Pressable
      onPress={()=>navigation.navigate(AppScreens.Products)}
      >
      <Image
          source={{
            uri: 'https://cdn.dsmcdn.com/ty1521/pimWidgetApi/mobile_20240904134331_3132590KadinMobile202409032002.jpg',
          }}
          style={{
            width: 400,
            height: 200,
            resizeMode: 'contain',
            borderRadius: 12,
          }}
        />
      </Pressable>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:10,
  },
});

//make this component available to the app
export default Introduction;

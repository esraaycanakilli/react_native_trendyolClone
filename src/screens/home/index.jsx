import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import AppColors from '../../theme/colors';
import widgets from '../../widgets/witgets.json';
import Categories from '../../widgets/categories';
import BestSeller from '../../widgets/bestSeller';
import ForYou from '../../widgets/forYou';
import screenStyle from '../../styles/screenStyles';
import Introduction from '../../widgets/introduction';

const HomeScreen = () => {
  const renderWidget = ({item}) => {
    switch (item.name) {
        case 'introduction':
        return <Introduction item={item} />;
      case 'bestSeller':
        return <BestSeller item={item} />;
      case 'forYou':
        return <ForYou item={item} />;
      default:
        return null;
    }
  };

  return (
    <View style={screenStyle.container}>
      <FlatList
        data={widgets}
        renderItem={renderWidget}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};


export default HomeScreen;

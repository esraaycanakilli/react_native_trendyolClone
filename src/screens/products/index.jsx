import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import screenStyle from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../store/actions/productsActions';
import ProductItem from '../../components/products/productItem';
import Spinner from '../../components/ui/spinner';
import Categories from '../../widgets/categories';

const Products = ({route}) => {
  const {pending, products} = useSelector(state => state.products);
  const {selectedCategory} = useSelector(state => state.categories);
  const category = route?.params?.category;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProducts({
        category: selectedCategory ? selectedCategory : category,
      }),
    );
  }, [selectedCategory, category]);

  return (
    <View style={screenStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          ListHeaderComponent={<Categories />}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          numColumns={2}
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      )}
    </View>
  );
};

export default Products;

//import liraries
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import screenStyle from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsInfo} from '../../store/actions/productsActions';
import Spinner from '../../components/ui/spinner';
import {screenHeight, screenWidth} from '../../utils/constant';
import AppColors from '../../theme/colors';
import {Star1} from 'iconsax-react-native';
import {convertPrice} from '../../utils/functions';
import Button from '../../components/ui/button';

const ProductDetail = ({route}) => {
  const {pendingDetail, productInfo} = useSelector(state => state.products);
  const dispatch = useDispatch();
  const productId = route?.params?.productId;
  useEffect(() => {
    dispatch(
      getProductsInfo({
        id: productId,
      }),
    );
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <View style={screenStyle.container}>
        {pendingDetail ? (
          <Spinner />
        ) : (
          <View style={styles.container}>
            <ScrollView>
              <Image source={{uri: productInfo.image}} style={styles.image} />
              <Text style={styles.title}>{productInfo?.title}</Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: AppColors.gray,
                }}>
                {productInfo?.category}
              </Text>
              <View style={styles.rateContainer}>
                <Star1 size={25} color={AppColors.yellow} variant="Bold" />
                <Text style={styles.rate}>{productInfo?.rating?.rate}</Text>
              </View>
              <Text style={styles.description}>{productInfo?.description}</Text>
            </ScrollView>
          </View>
        )}
        <View style={styles.footerContainer}>
          <View style={{flex: 1, paddingLeft: 20}}>
            <Text style={styles.price}>{convertPrice(productInfo.price)}</Text>
            <Text style={styles.cargoText}>Kargo Bedava</Text>
          </View>
          <View
            style={{
              flex: 2.5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems:'center'
            }}>
            <Button title="Şimdi Al" buttonType="outline" />
            <Button title="Sepete Ekle" buttonType="flat" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  image: {
    width: screenWidth,
    height: screenHeight * 0.3,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
    color: AppColors.black,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    color: AppColors.black,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: AppColors.softgray,
    paddingVertical: 10,
  },
  rate: {
    fontSize: 16,
    padding: 5,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: AppColors.softgray,
    paddingVertical: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
    color: AppColors.primary,
  },
  cargoText: {
    fontSize: 14,
    color: AppColors.green,
  },
});

export default ProductDetail;

import { PrimaryButton } from 'components/atoms/buttons';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { useAppDispatch, useAppSelector } from 'hooks/use-store';
import React from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';
import { setAddToCart, setRemoveFromCart } from 'store/reducers/cart';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';

const SearchItemCard = ({
  item,
  index,
  style,
  onPress = () => {},
}) => {
  const {t} = i18n;
  const Icon = item.icon;
  const dispatch = useAppDispatch();
  const {cart} = useAppSelector(s => s);
  const cart_list = cart?.cart;
  const cartItem = cart_list?.find(
    x => x?.id === item?.id,
  );
  console.log('cart item check===>',cartItem);
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={{uri: item?.image}} />
      <View style={styles.innerContainer}>
        <View style={{height:mvs(38)}}>
        <Regular
          fontSize={mvs(13)}
          numberOfLines={2}
          color={colors.black}
          label={item?.title}
        />
        </View>
        <Bold style={{color:colors.black}} label={item?.price}/>
        <PrimaryButton 
           onPress={() => {
            dispatch(
              cartItem
                ? setRemoveFromCart(
                   item
                  )
                : setAddToCart(item),
            );
      
          }}
          title={t(!cartItem ? 'Add to cart' : 'Remove')}
        containerStyle={{height:mvs(40),marginTop:mvs(5)}}/>
      </View>
    </View>
  );
};
export default React.memo(SearchItemCard);
const styles = StyleSheet.create({
  container: {
    width: '48%',
    borderRadius: mvs(15),
    marginBottom: mvs(20),
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

  },
  innerContainer: {
    backgroundColor: colors.white,
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(10),
   
  },
  backgroundImage: {width: '100%', height: mvs(140), borderRadius: mvs(10)},
});

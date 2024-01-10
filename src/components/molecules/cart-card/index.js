import { Row } from 'components/atoms/row';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { useAppDispatch } from 'hooks/use-store';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { setDecrementQtyCart } from 'store/reducers/cart';
import { setIncrementQtyCart } from 'store/reducers/cart';
import { setRemoveFromCart } from 'store/reducers/cart';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Light from 'typography/light-text';
import Regular from 'typography/regular-text';
const CartCard = ({
  item,
  count,
  setCount,
  index,
  style,
  onPress = () => {},
  onPressCart = () => {},
}) => {
  const {t} = i18n;
  const Icon = item.icon;
  const dispatch = useAppDispatch();
  const { cart } = useSelector((x) => x?.cart);
  const cartItem = cart?.find((x) => x?.id === item?.id);
  const incrementQuantity = (e) => {
    try {
      if (!cartItem?.qty) {
        dispatch(setAddToCart(item));
      } else {
        dispatch(setIncrementQtyCart(item));
      }
    } catch (error) {
      alert(error?.message);
    }
  };
 

  const decrementQuantity = (e) => {
    try {
      if (cartItem?.qty > 1) {
        dispatch(setDecrementQtyCart(item));
      } else if (cartItem?.qty === 1) {
        resetQuantity();
      }
    } catch (error) {
      alert(error?.message);
    }
  };
  const resetQuantity = (e) => {
    dispatch(setRemoveFromCart(item));
    // setHoveredOnce(false);
  };

  return (
    <Row style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(setRemoveFromCart(item));
        }}
        style={styles.crossBtn}>
        <Entypo name="cross" size={mvs(20)} color={colors.black} />
      </TouchableOpacity>
      <Image style={styles.backgroundImage} source={{uri: item?.image}} />
      <View style={styles.infoContainer}>
        <Regular numberOfLines={3} color={colors.black} label={item?.title} />
        <Light color={colors.black} label={item?.price} />
        {/* <Light color={colors.black} label={'5 oz'} /> */}
      </View>
      <View style={{alignSelf: 'center'}}>
        <Row style={styles.buttonContainer}>
          <TouchableOpacity onPress={() =>decrementQuantity(item)}>
            <Ionicons name="remove" size={mvs(25)} color={colors.black} />
          </TouchableOpacity>
          <Bold color={colors.black} label={item?.qty} />
          <TouchableOpacity onPress={() => incrementQuantity(item)}>
            <Ionicons name="add" size={mvs(25)} color={colors.black} />
          </TouchableOpacity>
        </Row>
        <Regular
          style={styles.priceText}
          fontSize={mvs(18)}
          color={colors.black}
          label={item.price}
        />
      </View>
    </Row>
  );
};
export default React.memo(CartCard);
const styles = StyleSheet.create({
  container: {
    // gap: mvs(10),
    paddingVertical: mvs(10),
    width: '100%',
    paddingHorizontal: mvs(20),
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
    alignItems: 'center',
    borderBottomRightRadius: mvs(15),
    borderBottomLeftRadius: mvs(15),
  },
  backgroundImage: {width: mvs(100), height: mvs(100), borderRadius: mvs(50)},
  buttonContainer: {
    gap: mvs(10),
    alignItems: 'center',
    paddingHorizontal: mvs(10),
    borderWidth: mvs(1),
    borderRadius: mvs(5),
  },
  crossBtn: {
    width: mvs(20),
    height: mvs(20),
    backgroundColor: colors.white,
    position: 'absolute',
    left: mvs(20),
    top: mvs(2),
    opacity: 1,
    borderRadius: mvs(12),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  infoContainer: {flex: 1, paddingVertical: mvs(10), marginLeft: mvs(10)},
  priceText: {alignSelf: 'flex-end', marginTop: mvs(10)},
});

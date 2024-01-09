import {useNavigation} from '@react-navigation/native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {I18nManager, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Medium from 'typography/medium-text';
import {Row} from '../row';
import Regular from 'typography/regular-text';
import {navigate} from 'navigation/navigation-ref';
const HeaderTab = ({
  style = {},
  mtop = 0,
  title,
  back = false,
  menu=false,
  onAdd,
  onCart,
  cart = false,
  add = false,
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <Row style={{alignItems: 'center'}}>
      
          {menu ? (
            <TouchableOpacity onPress={() => navigation?.toggleDrawer()}>
              <Feather
                name={'menu'}
                size={mvs(20)}
                color={colors.black}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        
          <Medium fontSize={mvs(20)} label={title} style={[styles.title]} />

      
        {cart ? (
          <TouchableOpacity
            style={styles.cartContainer}
            onPress={() => navigate('Cart')}>
            <Row style={{gap: mvs(5)}}>
              <Icon name={'shoppingcart'} size={mvs(20)} color={colors.black} />
              <Regular color={colors.black} label={'1'} />
            </Row>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </Row>
    </View>
  );
};
export default React.memo(HeaderTab);
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(10),
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  empty: {
    width: mvs(10),
  },
  title: {
    fontSize: mvs(18),
    color: colors.black,
  },
  back: {},
  cartContainer: {
    backgroundColor: colors.border,
    paddingVertical: mvs(5),
    paddingHorizontal: mvs(10),
    borderRadius: mvs(6),
  },
});

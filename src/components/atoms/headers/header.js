import { useNavigation } from '@react-navigation/native';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import React from 'react';
import { I18nManager, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Medium from 'typography/medium-text';
import { Row } from '../row';
const Header = ({
  style = {},
  mtop = 0,
  title,
  back = true,
  onAdd,
  add = false,
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <Row style={{alignItems: 'center'}}>
        <Row style={{alignItems: 'center', gap: mvs(20)}}>
          {back ? (
            <TouchableOpacity onPress={() => navigation?.goBack()}>
              <Icon
                name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
                size={mvs(20)}
                color={colors.black}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
          <Medium fontSize={mvs(20)} label={title} style={[styles.title]} />
        </Row>
        {add ? (
          <TouchableOpacity onPress={onAdd}>
            <Icon name={'plus'} size={mvs(20)} color={colors.black} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </Row>
    </View>
  );
};
export default React.memo(Header);
const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.primary,
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
    paddingHorizontal: mvs(20),
    borderRadius: mvs(6),
  },
});

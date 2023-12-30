import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import i18n from 'translation';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import Regular from 'typography/regular-text';

const DepartmentsCard = ({
  item,
  index,
  style,
  onPress = () => {},
  onPressCart = () => {},
}) => {
  const {t} = i18n;
  const Icon = item.icon;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground
        borderRadius={mvs(15)}
        style={styles.backgroundImage}
        source={{uri: item?.image}}>
          <View style={{flex:1,justifyContent:'flex-end'}}>

        <View style={styles.innerContainer}>
          <Regular color={colors.black} label={item?.title} />
        </View>
          </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default React.memo(DepartmentsCard);
const styles = StyleSheet.create({
  container: {
    height: mvs(150),
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
    alignItems: 'center',
    opacity: 0.9,
    borderBottomRightRadius:mvs(15),
    borderBottomLeftRadius:mvs(15),
  },
  backgroundImage: {width: '100%', height: '100%'},
});

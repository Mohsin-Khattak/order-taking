import { colors } from 'config/colors';
import { mvs, width } from 'config/metrices';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
const SwiperCard = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        scrollEnabled={true}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        style={styles.wrapper}
        showsButtons={false}>
        <View style={styles.slide}>
          <Image source={{uri:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww'}} style={styles.sliderImage} />
        </View>
        <View style={styles.slide}>
          <Image source={{uri:        'https://w0.peakpx.com/wallpaper/768/855/HD-wallpaper-breads-bakery-graphy-food-healthy-bread-thumbnail.jpg'}} style={styles.sliderImage} />
        </View>
        <View style={styles.slide}>
          <Image source={{uri:  'https://media.istockphoto.com/id/1442992545/photo/homemade-feta-cheese-puff-muffins-with-spinach-closeup-in-the-maffin-pan-horizontal-top-view.webp?b=1&s=170667a&w=0&k=20&c=OHf1oe8pnfmdIMsB68QvCm4Z0uC2WfBd15S_ATWL65A='}} style={styles.sliderImage} />
        </View>
      </Swiper>
    </View>
  );
};
export default SwiperCard;

const styles = StyleSheet.create({
  container: {
    height: mvs(220),
    // marginHorizontal: mvs(20),
    marginTop: mvs(0),
  },
  sliderImage: {
    width: width - mvs(40),
    height: mvs(180),
    borderRadius: mvs(18),
    resizeMode: 'cover',
  },
  dotStyle: { marginBottom: -mvs(40) },
  activeDotStyle: { marginBottom: -mvs(40), backgroundColor: colors.primary },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

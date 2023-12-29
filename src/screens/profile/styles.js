import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: '10%',
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: mvs(20),
    paddingTop: mvs(20),
    paddingBottom: mvs(100),
  },
  buttonContainer: {paddingVertical: mvs(10)},
  rowContainer: {
    // padding: mvs(5),
    backgroundColor: colors.white,
    // borderRadius: mvs(10),
    borderWidth: mvs(1),
    borderColor: colors.primary,
  },
  orderBtn: {
    width: '25%',
    height: mvs(30),
    borderRightWidth: mvs(1),
    borderRadius: mvs(0),
    borderColor: colors.primary,
  },
  image: {
    width: mvs(50),
    height: mvs(50),
    borderWidth: mvs(1),
    borderColor: colors.black,
    borderRadius: mvs(25),
  },
  innerRowContainer: {alignItems: 'center', gap: mvs(10)},
  saveBtn: {marginTop: mvs(20), height: mvs(40)},
  wantToRecive: {
    justifyContent: 'flex-start',
    gap: mvs(10),
    marginTop: mvs(20),
  },
  signOutContainer: {
    marginTop: mvs(20),
  },
  btnContainerStyle:{height: mvs(40), alignItems: 'center'}
});
export default styles;

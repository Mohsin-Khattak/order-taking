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
    paddingHorizontal: mvs(20),
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: mvs(20),
    paddingTop: mvs(20),
    paddingBottom: mvs(100),
  },
  buttonContainer:{paddingHorizontal:mvs(20),paddingVertical:mvs(10)},
  rowContainer:{padding:mvs(5),backgroundColor:colors.primary,borderRadius:mvs(10)},
  orderBtn:{
    width: '50%',
    height: mvs(40),
  }
});
export default styles;

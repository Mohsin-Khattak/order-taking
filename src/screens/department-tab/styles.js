import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(20),
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: mvs(20),
    justifyContent:'space-between'
  },


});
export default styles;

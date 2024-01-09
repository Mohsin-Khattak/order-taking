import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logout: {
    marginTop: mvs(58),
    marginHorizontal: mvs(166),
  },
  category: {
    paddingTop: mvs(33),
    paddingHorizontal: mvs(27),
    paddingBottom: mvs(8),
  },
  down: {
    height: mvs(15),
    marginLeft: mvs(6),
    width: mvs(11),
  },
  contentContainerStyle: {
    flexGrow: 1,
  paddingHorizontal:mvs(20),
    // paddingTop: mvs(10),
    justifyContent:'space-between'

  
  },

});
export default styles;

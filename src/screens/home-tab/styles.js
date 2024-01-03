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

  btn:{
    width:'50%',
    borderWidth:mvs(1),
    borderColor:colors.primary,
    height:mvs(40)
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent:'space-between'
  },
});
export default styles;

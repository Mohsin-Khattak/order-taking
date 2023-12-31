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
    // paddingHorizontal: mvs(20),
  },
  footerContainer:{
    backgroundColor:colors.white,
    paddingVertical: mvs(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
  }
});
export default styles;

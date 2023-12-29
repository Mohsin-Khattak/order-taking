import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    paddingVertical: mvs(30),
    paddingHorizontal: mvs(20),
  },
  lan: 
    {
      paddingVertical: mvs(10),
      borderBottomWidth: mvs(1),
      borderBottomColor: colors.gray,
      alignItems: 'center',
      flexDirection:'row',
      justifyContent:'space-between'
    
  },
  btnText: {
    fontSize: mvs(16),
    color:colors.black
  },
});
export default styles;

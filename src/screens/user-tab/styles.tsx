import { StyleSheet } from 'react-native';
import { mvs, width } from 'config/metrices';
import { colors } from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal:mvs(20)

  },
  contentContainerStyle: {
    flex: 1,
    padding: mvs(20),
  },
  body: {
    flex: 1,
    paddingHorizontal: mvs(20),
    paddingTop: mvs(40),
  },

  name: {
    alignSelf: 'center',
    fontSize: mvs(24),
    marginTop: mvs(10),
    color: colors.white,
  },
  email: {
    alignSelf: 'center',
    fontSize: mvs(14),
    color: `${colors.white}`,
  },
  item: {
    marginBottom: mvs(15),
  },
  itemtabs: {
    marginBottom: mvs(15),

    flexDirection: 'row',
    // borderWidth: 1,
    alignItems: 'center',
    borderRadius: mvs(10),
    padding: mvs(10),
    backgroundColor: colors.white,
    // justifyContent: 'space-between',
    width: width - mvs(40),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  itemText: {
    fontSize: mvs(16),
    color: `${colors.black}`,
  },
  itemText1: {
    fontSize: mvs(16),
    color: `${colors.black}`,
    marginLeft: mvs(10),
  },
  img: {
    height: mvs(70),
    width: mvs(70),
    borderRadius: mvs(35),
    backgroundColor: colors.black,
    alignSelf: 'center',
  },
  logouttab: {
    flexDirection: 'row',
    marginBottom: mvs(15),
  },
});
export default styles;

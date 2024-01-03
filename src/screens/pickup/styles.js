import { StyleSheet } from "react-native";
import { mvs } from "config/metrices";
import { colors } from 'config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    contentContainerStyle: {

        paddingVertical: mvs(30),
        paddingHorizontal: mvs(20)
    },
    button: {
        marginTop: mvs(20),
    },
    accountText: {
        color: colors.primary,
        alignSelf: 'center',
        marginTop: mvs(20)
    },
    pickText:{
        color: colors.black,
        paddingVertical: mvs(20),
        fontSize: mvs(18),
      },
      innerPrimaryContainer:{
        height: mvs(110),
        textAlignVertical: 'top',
        paddingVertical: mvs(10),
      },
      smsContainer:{justifyContent:'flex-start',gap:mvs(10),paddingBottom:mvs(20)},

});
export default styles;
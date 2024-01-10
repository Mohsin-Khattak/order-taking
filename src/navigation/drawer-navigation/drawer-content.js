import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {StyleSheet, View} from 'react-native';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Row} from 'components/atoms/row';
import {navigate} from 'navigation/navigation-ref';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawerContent = props => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.header}>
        <View style={styles.drawerheader}>
          <Image
            source={{
              uri: 'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg',
            }}
            style={styles.drawerman}
          />
        </View>
        <Medium
          label={'Guest Mode'}
          fontSize={mvs(18)}
          color={colors.black}
          style={{marginTop: mvs(6)}}
        />
      </View>
      <View style={{paddingHorizontal: mvs(20)}}>
        <TouchableOpacity
          onPress={() => navigate('Profile')}
          style={styles.ButtonContainer}>
          <Row style={styles.btnRow}>
            <AntDesign name={'user'} size={25} color={colors.primary} />
            <Bold
              label={'Edit Profile'}
              color={colors.primary}
              fontSize={mvs(18)}
            />
          </Row>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('SavedAddress')}
          style={styles.ButtonContainer}>
          <Row style={styles.btnRow}>
            <Entypo name={'location'} size={25} color={colors.primary} />
            <Bold
              label={'Saved Address'}
              color={colors.primary}
              fontSize={mvs(18)}
            />
          </Row>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Profile')}
          style={styles.ButtonContainer}>
          <Row style={styles.btnRow}>
            <Ionicons
              name="reader-outline"
              size={mvs(25)}
              color={colors.primary}
            />
            <Bold
              label={'Privacy Policy'}
              color={colors.primary}
              fontSize={mvs(18)}
            />
          </Row>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Profile')}
          style={styles.ButtonContainer}>
          <Row style={styles.btnRow}>
            <Ionicons
              name="reader-outline"
              size={mvs(25)}
              color={colors.primary}
            />
            <Bold
              label={('Terms & Conditions')}
              color={colors.primary}
              fontSize={mvs(18)}
            />
          </Row>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Login')}
          style={styles.ButtonContainer}>
          <Row style={styles.btnRow}>
          <AntDesign name={'logout'} size={mvs(22)} color={colors.red} />
            <Bold
              label={('Logout')}
              color={colors.red}
              fontSize={mvs(18)}
            />
          </Row>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};
export default CustomDrawerContent;
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    height: mvs(260),
    width: width - 70,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: mvs(1),
    borderColor: colors.border,
    // backgroundColor: colors.primary,
  },
  drawerheader: {
    height: mvs(100),
    width: mvs(100),
    borderRadius: mvs(50),
    borderWidth: mvs(3),
    borderColor: colors.primary,
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  drawerman: {
    height: '100%',
    width: '100%',
    borderRadius: mvs(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  ButtonContainer: {
    borderWidth: mvs(1),
    borderColor: colors.primary,
    paddingVertical: mvs(5),
    borderRadius: mvs(10),
    marginTop: mvs(20),
  },
  btnRow: {
    justifyContent: 'flex-start',
    gap: mvs(30),
    marginLeft: mvs(20),
    alignItems: 'center',
  },
});

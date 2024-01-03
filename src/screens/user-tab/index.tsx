import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { useAppDispatch, useAppSelector } from 'hooks/use-store';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabParamList from 'types/navigation-types/bottom-tab';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import i18n from '../../translation/index';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'UserTab'>,
  NativeStackScreenProps<RootStackParamList>
>;
const UserTab = (props: props) => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const dispatch = useAppDispatch();
  const {t} = i18n;

  return (
    <View style={styles.container}>
      <Bold
        style={{alignSelf: 'center', fontSize: mvs(18), marginTop: mvs(30)}}
        label={'Welcome To'}
      />
      <Image
        style={{
          width: mvs(150),
          height: mvs(150),
          borderRadius: mvs(75),
          alignSelf: 'center',
          marginBottom: mvs(80),
        }}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TUUKRDhn5qWuU01sEPV1viaeH3cbukwiiw&usqp=CAU',
        }}
      />
      <TouchableOpacity
        style={styles.itemtabs}
        onPress={() => props?.navigation?.navigate('LanguageScreen')}>
        <FontAwesome5 name="globe" size={mvs(22)} color={colors.primary} />
        <Regular style={styles.itemText1} label={`${t('Language')}`} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.itemtabs}
        onPress={() => props?.navigation?.navigate('SavedAddress')}
        >
        <FontAwesome name="info-circle" size={mvs(22)} color={colors.primary} />
        <Regular style={styles.itemText1} label={`${t('About the app')}`} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.itemtabs}
        onPress={() => props?.navigation?.navigate('SavedVehicles')}
        >
        <Ionicons name="reader-outline" size={mvs(22)} color={colors.primary} />
        <Regular
          style={styles.itemText1}
          label={`${t('Terms & Conditions')}`}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.itemtabs}
        // onPress={() => props?.navigation?.navigate('AvailabilityList')}
        >
        <Ionicons name="reader-outline" size={mvs(22)} color={colors.primary} />
        <Regular style={styles.itemText1} label={`${t('Privacy Policy')}`} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemtabs}
        // onPress={() => props?.navigation?.navigate('AvailabilityList')}
        >
        <Ionicons name="reader-outline" size={mvs(22)} color={colors.primary} />
        <Regular
          style={styles.itemText1}
          label={`${t('Open Source Libraries')}`}
        />
      </TouchableOpacity>
      <Regular
        style={{
          color: colors.black,
          paddingVertical: mvs(20),
          alignSelf: 'center',
        }}
        label={'1.11.0(133) - Release'}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',

          width: '100%',
          paddingBottom: mvs(60),
        }}>
        <TouchableOpacity style={styles.logouttab}>
          <AntDesign name={'logout'} size={mvs(22)} color={colors.red} />
          <Regular style={styles.itemText1} label={`${t('Logout')}`} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default UserTab;

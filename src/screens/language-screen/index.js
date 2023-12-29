import {PrimaryButton} from 'components/atoms/buttons';
import Header from 'components/atoms/headers/header';
import {colors} from 'config/colors';
import {STORAGEKEYS} from 'config/constants';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React from 'react';
import {Alert, I18nManager, TouchableOpacity, View} from 'react-native';
import RNRestart from 'react-native-restart';
import {setLanguage} from 'store/reducers/user-reducer';
import i18n from 'translation';
import {UTILS} from 'utils';
import styles from './styles';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import Medium from 'typography/medium-text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Regular from 'typography/regular-text';
const LanguageScreen = props => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const language = user?.language;
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const onChangeLanguage = (lang = 'en', rtl = false) => {
    try {
      Alert.alert(
        'Are you sure to change language ?',
        'App will restart once',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              dispatch(setLanguage(lang));
              i18n.changeLanguage(lang);
              I18nManager.forceRTL(rtl);
              UTILS.setItem(STORAGEKEYS.lang, lang);
              RNRestart.restart();
            },
          },
        ],
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Header title={t('Language')} />
      <View style={styles.body}>
        <TouchableOpacity
          disabled={language === 'en'}
          onPress={() => onChangeLanguage('en', false)}
          style={styles.lan}>
            <View>
              <Medium
                color={colors.black}
                fontSize={mvs(18)}
                label={'English'}
              />
              <Regular style={{marginTop:mvs(10)}}  label={'English'} />
            </View>
            {language === 'en' && (
            <MaterialIcons name="done" size={25} color={colors.green} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          disabled={language === 'ar'}
          onPress={() => onChangeLanguage('ar', false)}
          style={styles.lan}>
            <View>
              <Medium
                color={colors.black}
                fontSize={mvs(18)}
                label={'Arabic'}
              />
              <Regular style={{marginTop:mvs(10)}}  label={'Arabic'} />
            </View>
            {language === 'ar' && (
            <MaterialIcons name="done" size={25} color={colors.green} />
          )}
        </TouchableOpacity>
        {/* <PrimaryButton
          disabled={language === 'ar'}
          onPress={() => onChangeLanguage('ar', true)}
          textStyle={[
            styles.btnText,
            {color: language === 'ar' ? colors.white : colors.black},
          ]}
          title={t('ar')}
          containerStyle={[
            styles.lan,
            {
              backgroundColor:
                language === 'ar' ? colors.primary : colors.secondary,
            },
          ]}
        /> */}
      </View>
    </View>
  );
};
export default LanguageScreen;

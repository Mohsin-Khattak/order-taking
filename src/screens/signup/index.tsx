import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import Geocoder from 'react-native-geocoding';

import { PrimaryButton } from 'components/atoms/buttons';
import Header from 'components/atoms/headers/header';
import PrimaryInput from 'components/atoms/inputs';
import { KeyboardAvoidScrollview } from 'components/atoms/keyboard-avoid-scrollview';
import OtpModalRenewPassword from 'components/molecules/modals/otp-modal-signup-renewpassword.js.js';
import { useAppDispatch, useAppSelector } from 'hooks/use-store';
import { navigate } from 'navigation/navigation-ref';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import { signupFormValidation } from 'validations';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
Geocoder.init('AIzaSyCbFQqjZgQOWRMuQ_RpXU0kGAUIfJhDw98');

type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Signup = (props: props) => {
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const { navigation } = props;
  const { t } = i18n;
  const { user } = useAppSelector(s => s);
  const { location } = user;
  console.log('location=>>>', location);

  const dispatch = useAppDispatch();
  const initialValues = {
    name: '',
    email: '',
    confirm_password: '',
    password: '',
    token: '',
  };
  const [loading, setLoading] = React.useState(false);
  const { values, errors, touched, setFieldValue, setFieldTouched, isValid } =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: signupFormValidation,
      onSubmit: () => { },
    });

  console.log('errors=>', errors);
  console.log('values=>', values);


  return (
    <View style={styles.container}>
      <Header title={t('signup')} />
      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <PrimaryInput
          isRequired
          error={touched?.name && errors?.name ? t(errors?.name) : ''}
          label={t('name')}
          placeholder={t('name')}
          onChangeText={str => setFieldValue('name', str)}
          onBlur={() => setFieldTouched('name', true)}
          value={values.name}
        />
        <PrimaryInput
          isRequired
          keyboardType={'email-address'}
          error={touched?.email && errors?.email ? t(errors?.email) : ''}
          label={t('email')}
          placeholder={t('email')}
          onChangeText={str => setFieldValue('email', str)}
          onBlur={() => setFieldTouched('email', true)}
          value={values.email}
        />
        <PrimaryInput
          isRequired
          isPassword
          error={
            touched?.password && errors?.password
              ? t(errors?.password)
              : undefined
          }
          placeholder={'********'}
          label={t('password')}
          onChangeText={str => setFieldValue('password', str)}
          onBlur={() => setFieldTouched('password', true)}
          value={values.password}
        />
        <PrimaryInput
          isRequired
          isPassword
          error={
            touched?.confirm_password && errors?.confirm_password
              ? t(errors?.confirm_password)
              : undefined
          }
          placeholder={'********'}
          label={t('confirm_pass')}
          onChangeText={str => setFieldValue('confirm_password', str)}
          onBlur={() => setFieldTouched('confirm_password', true)}
          value={values.confirm_password}
        />
        
        <Medium
          style={styles.accountText}
          onPress={props?.navigation?.goBack}
          label={`${t('Already Account')}`}
        />
        <PrimaryButton
          loading={loading}
          disabled={
            Object.keys(errors)?.length > 0 ||
            Object.keys(touched)?.length === 0
          }
          title={t('signup')}
          // onPress={() => {
          //   messaging()
          //     .getToken()
          //     .then(fcmToken => {
          //       console.log('fcmToken=>', fcmToken);
          //       dispatch(
          //         onSignup(
          //           { ...values, token: fcmToken },
          //           setLoading,
          //           props,
          //           setOtpModalVisible,
          //         ),
          //       );
          //     })
          //     .catch(error => console.log(error));
          // }}
          onPress={()=> navigate('Drawer')}
          containerStyle={styles.button}
        />
        <OtpModalRenewPassword
          email={values?.email}
          onClose={() => setOtpModalVisible(false)}
          visible={otpModalVisible}
          setValue={setValue}
          value={value}
          {...props}
        />
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default Signup;

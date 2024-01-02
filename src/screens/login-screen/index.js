import messaging from '@react-native-firebase/messaging';
import { auth_bg } from 'assets/images';
import { PrimaryButton } from 'components/atoms/buttons';
import PrimaryInput from 'components/atoms/inputs';
import { KeyboardAvoidScrollview } from 'components/atoms/keyboard-avoid-scrollview/index';
import OtpModal from 'components/molecules/modals/otp-modal';
import { height, mvs, width } from 'config/metrices';
import { Formik } from 'formik';
import { useAppDispatch } from 'hooks/use-store';
import { navigate, resetStack } from 'navigation/navigation-ref';
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import { signinFormValidation } from 'validations';
import styles from './styles';
const LoginScreen = props => {
  const dispatch = useAppDispatch();
  const { t } = i18n;
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [data,setData]=React.useState(true)
  const initialValues = {
    email: '',
    password: '',
  };
  const [loading, setLoading] = React.useState(false);
  const handleFormSubmit = async () => {
    try {
      messaging()
        .getToken()
        .then(fcmToken => {
          console.log('fcmToken=>', fcmToken);
          // dispatch(onLogin({ ...values, token: fcmToken }, setLoading, props));
          resetStack('Drawer');
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log('error=>', error);
    }
  };
  return (
    <View style={styles.container}>
      {/* <Header1x2x title={t('login')} /> */}
      <View style={styles.container}>
        <ImageBackground
          source={auth_bg}
          style={{
            height: height,
            width: width,
          }}>
          <KeyboardAvoidScrollview
            contentContainerStyle={styles.contentContainerStyle}>
               <Formik
              initialValues={initialValues}
              validationSchema={signinFormValidation}
              onSubmit={handleFormSubmit}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                touched,
                values,
                errors,
              }) => (
                <>
                  {console.log('errror2', errors)}
            <Bold label={t('login')} style={styles.txt} />
            <PrimaryInput
              error={
                touched?.email && errors?.email
                  ? `${t(errors?.email)}`
                  : undefined
              }
              keyboardType={'email-address'}
              placeholder={t('Email')}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <PrimaryInput
              isPassword
              error={
                touched?.password && errors?.password
                  ? `${t(errors?.password)}`
                  : undefined
              }
              placeholder={t('Password')}
              label={t('password')}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              containerStyle={{ marginBottom: 0 }}
              errorStyle={{ marginBottom: 0 }}
            />
            <TouchableOpacity
              style={{ alignSelf: 'flex-end', marginBottom: mvs(15) }}
              // onPress={() => navigate('ForgotPassword')}
              >
              <Medium
                label={t('Forgot password')}
                style={{ textDecorationLine: 'underline' }}
              />
            </TouchableOpacity>
            <PrimaryButton
              // disabled={
              //   Object.keys(errors).length > 0 ||
              //   Object.keys(touched).length === 0
              // }
              loading={loading}
              onPress={handleSubmit}
              title={t('login')}
            />
            <TouchableOpacity
              style={{ alignSelf: 'center', marginTop: mvs(20) }}
              onPress={() => navigate('Signup')}>
              <Medium
                label={t('Dont have account')}
                style={{ textDecorationLine: 'underline' }}
              />
            </TouchableOpacity>
            </>
              )}
            </Formik>

            <OtpModal
              onClose={() => setOtpModalVisible(false)}
              visible={otpModalVisible}
              setValue={setValue}
              value={value}
            />

          </KeyboardAvoidScrollview>
          {/* <View style={styles.button}>
        </View> */}

        </ImageBackground>
      </View>
    </View>
  );
};
export default LoginScreen;

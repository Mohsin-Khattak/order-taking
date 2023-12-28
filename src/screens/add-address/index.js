import { PrimaryButton } from 'components/atoms/buttons';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import PrimaryInput from 'components/atoms/inputs';
import { KeyboardAvoidScrollview } from 'components/atoms/keyboard-avoid-scrollview/index';
import { mvs } from 'config/metrices';
import { Formik } from 'formik';
import { useAppDispatch } from 'hooks/use-store';
import { resetStack } from 'navigation/navigation-ref';
import React from 'react';
import { View } from 'react-native';
import i18n from 'translation';
import { signinFormValidation } from 'validations';
import styles from './styles';
import { colors } from 'config/colors';
import Header from 'components/atoms/headers/header';
const AddAddress = props => {
  const dispatch = useAppDispatch();
  const { t } = i18n;
  const [value, setValue] = React.useState('');
  const initialValues = {
    address: '',
    address_two:'',
    appartment:'',
    first_name:'',
    last_name:'',
    phone:'',
    email:'',
  };
  const [loading, setLoading] = React.useState(false);
  const handleFormSubmit = async () => {
    try {
     
          // dispatch(onLogin({ ...values, token: fcmToken }, setLoading, props));
          resetStack('Drawer');
       
    } catch (error) {
      console.log('error=>', error);
    }
  };
  return (
    <View style={styles.container}>
      <Header title={t('Add address')} />
      <View style={styles.container}>
     
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
            <PrimaryInput
              // error={
              //   touched?.email && errors?.email
              //     ? `${t(errors?.email)}`
              //     : undefined
              // }
              placeholder={t('Address')}
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              value={values.address}
            />
            <PrimaryInput
              // error={
              //   touched?.email && errors?.email
              //     ? `${t(errors?.email)}`
              //     : undefined
              // }
              placeholder={t('Address Alias')}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <PrimaryInput
              // error={
              //   touched?.email && errors?.email
              //     ? `${t(errors?.email)}`
              //     : undefined
              // }
              placeholder={t('Apartment/Suite/Floor')}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <PrimaryInput
              error={
                touched?.first_name && errors?.first_name
                  ? `${t(errors?.first_name)}`
                  : undefined
              }
              placeholder={t('First name *')}
              onChangeText={handleChange('first_name')}
              onBlur={handleBlur('first_name')}
              value={values.first_name}
            />
            <PrimaryInput
              // error={
              //   touched?.first_name && errors?.first_name
              //     ? `${t(errors?.first_name)}`
              //     : undefined
              // }
              placeholder={t('Last name')}
              onChangeText={handleChange('last_name')}
              onBlur={handleBlur('last_name')}
              value={values.last_name}
            />
            <PrimaryInput
              error={
                touched?.phone && errors?.phone
                  ? `${t(errors?.phone)}`
                  : undefined
              }
              placeholder={t('Phone *')}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            <PrimaryInput
              error={
                touched?.email && errors?.email
                  ? `${t(errors?.email)}`
                  : undefined
              }
              placeholder={t('Email *')}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
           
          
            <PrimaryButton
              // disabled={
              //   Object.keys(errors).length > 0 ||
              //   Object.keys(touched).length === 0
              // }
              loading={loading}
              onPress={handleSubmit}
              title={t('Save')}
            />
            <PrimaryButton
             containerStyle={styles.cancelBtn}
             textStyle={{color:colors.black}}
              onPress={handleSubmit}
              title={t('Cancel')}
            />
           
            </>
              )}
            </Formik>

           

          </KeyboardAvoidScrollview>
        

       
      </View>
    </View>
  );
};
export default AddAddress;

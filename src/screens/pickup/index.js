import { PrimaryButton } from 'components/atoms/buttons';
import { Checkbox } from 'components/atoms/checkbox';
import Header from 'components/atoms/headers/header';
import PrimaryInput, {
  PrimaryPhoneInput
} from 'components/atoms/inputs';
import { KeyboardAvoidScrollview } from 'components/atoms/keyboard-avoid-scrollview/index';
import { Row } from 'components/atoms/row';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { Formik } from 'formik';
import { useAppDispatch } from 'hooks/use-store';
import { resetStack } from 'navigation/navigation-ref';
import React from 'react';
import { View } from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import { signinFormValidation } from 'validations';
import styles from './styles';
import Regular from 'typography/regular-text';
const Pickup = props => {
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const [value, setValue] = React.useState('');
  const initialValues = {
    address: '',
    apartment: '',
    first_name: '',
    last_name: '',
    email: '',
    note: '',
    phone: '',
    deliver_date: '',
    from_time: '',
    to_time: '',
    special_instruction:''
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
      <Header title={t('Pickup')} />
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
                  error={
                    touched?.address && errors?.address
                      ? `${t(errors?.address)}`
                      : undefined
                  }
                  placeholder={t('Address')}
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
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
                  error={
                    touched?.last_name && errors?.last_name
                      ? `${t(errors?.last_name)}`
                      : undefined
                  }
                  placeholder={t('Last name')}
                  onChangeText={handleChange('last_name')}
                  onBlur={handleBlur('last_name')}
                  value={values.last_name}
                />
                <PrimaryInput
                  keyboardType={'email-address'}
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
                <PrimaryPhoneInput
                  error={
                    errors?.phone && touched?.phone ? `${t(errors?.phone)}` : ''
                  }
                  placeholder={t('')}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                />
                
                <PrimaryInput
                  isCalendar
                  placeholder="Pickup date"
                  editable={false}
                  onChangeText={handleChange('deliver_date')}
                  value={values.deliver_date}
                />

                <Row style={{alignItems: 'center'}}>
                  <Bold color={colors.black} label={'Pickup time :'} />
                  <PrimaryInput
                    mainContainer={{width: '35%', height: mvs(40)}}
                    containerStyle={{borderWidth: mvs(0)}}
                    mode="time"
                    isTime
                    placeholder="To"
                    editable={false}
                    onChangeText={handleChange('to_time')}
                    value={values.to_time}
                  />
                  <PrimaryInput
                    mainContainer={{width: '35%', height: mvs(40)}}
                    containerStyle={{borderWidth: mvs(0)}}
                    mode="time"
                    isTime
                    placeholder="From"
                    editable={false}
                    onChangeText={handleChange('from_time')}
                    value={values.from_time}
                  />
                </Row>
                <Bold
                  style={styles.pickText}
                  label={'Pick preferable notification method :'}
                />
                <Row style={styles.smsContainer}>
                  <Checkbox/>
                  <Bold color={colors.black} label={'SMS'}/>
                </Row>
                <PrimaryInput
                  placeholder={'Special Instructions:'}
                  onChangeText={handleChange('special_instruction')}
                  onBlur={handleBlur('special_instruction')}
                  value={values.special_instruction}
                  multiline={true}
                  numberOfLines={10}
                  containerStyle={{
                    height: mvs(120),
                  }}
                  style={styles.innerPrimaryContainer}
                />
         
                  <Regular style={{paddingVertical:mvs(20)}} numberOfLines={2} color={colors.black} fontSize={mvs(17)} label={'What should we do if some products are sold out?'}/>
                  <PrimaryButton containerStyle={{marginBottom:mvs(20)}} title='Pick replacement'/>
                

                <PrimaryButton
                  // disabled={
                  //   Object.keys(errors).length > 0 ||
                  //   Object.keys(touched).length === 0
                  // }
                  loading={loading}
                  onPress={handleSubmit}
                  title={t('Next')}
                />
              </>
            )}
          </Formik>
        </KeyboardAvoidScrollview>
      </View>
    </View>
  );
};
export default Pickup;

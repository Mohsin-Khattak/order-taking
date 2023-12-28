import { PrimaryButton } from 'components/atoms/buttons';
import Header from 'components/atoms/headers/header';
import PrimaryInput, { InputPresciption } from 'components/atoms/inputs';
import { KeyboardAvoidScrollview } from 'components/atoms/keyboard-avoid-scrollview/index';
import { Formik } from 'formik';
import { useAppDispatch } from 'hooks/use-store';
import { resetStack } from 'navigation/navigation-ref';
import React from 'react';
import { View } from 'react-native';
import i18n from 'translation';
import { signinFormValidation } from 'validations';
import styles from './styles';
import { mvs } from 'config/metrices';
const AddVehicle = props => {
  const dispatch = useAppDispatch();
  const { t } = i18n;
  const [value, setValue] = React.useState('');
  const initialValues = {
    vehicle_brand: '',
    vehicle_model:'',
    vehicle_color:'',
    plate_number:'',
    note:'',
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
      <Header title={t('Add vehicle')} />
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
                touched?.vehicle_brand && errors?.vehicle_brand
                  ? `${t(errors?.vehicle_brand)}`
                  : undefined
              }
              placeholder={t('Vehicle brand *')}
              onChangeText={handleChange('vehicle_brand')}
              onBlur={handleBlur('vehicle_brand')}
              value={values.vehicle_brand}
            />
            <PrimaryInput
              error={
                touched?.vehicle_model && errors?.vehicle_model
                  ? `${t(errors?.vehicle_model)}`
                  : undefined
              }
              placeholder={t('Vehicle model *')}
              onChangeText={handleChange('vehicle_model')}
              onBlur={handleBlur('vehicle_model')}
              value={values.vehicle_model}
            />
            <PrimaryInput
              error={
                touched?.vehicle_color && errors?.vehicle_color
                  ? `${t(errors?.vehicle_color)}`
                  : undefined
              }
              placeholder={t('Vehicle Color *')}
              onChangeText={handleChange('vehicle_color')}
              onBlur={handleBlur('vehicle_color')}
              value={values.vehicle_color}
            />
            <PrimaryInput
              error={
                touched?.plate_number && errors?.plate_number
                  ? `${t(errors?.plate_number)}`
                  : undefined
              }
              placeholder={t('Plate Number *')}
              onChangeText={handleChange('plate_number')}
              onBlur={handleBlur('plate_number')}
              value={values.plate_number}
            />
          
            <PrimaryInput
              
                  placeholder={'Note'}
                  onChangeText={handleChange('note')}
                  onBlur={handleBlur('note')}
                  value={values.note}
                  multiline={true}
                  numberOfLines={10}
                  containerStyle={{
                    height: mvs(150),
                  }}
                  style={{
                    height: mvs(140),
                    textAlignVertical: 'top',
                    paddingVertical: mvs(10),
                    // backgroundColor:'red'
                  }}
                />
        
           
          
            <PrimaryButton
              // disabled={
              //   Object.keys(errors).length > 0 ||
              //   Object.keys(touched).length === 0
              // }
              loading={loading}
              onPress={handleSubmit}
              title={t('Add')}
            />
         
            </>
              )}
            </Formik>

           

          </KeyboardAvoidScrollview>
        

       
      </View>
    </View>
  );
};
export default AddVehicle;

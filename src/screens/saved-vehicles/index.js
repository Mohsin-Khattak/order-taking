import Header from 'components/atoms/headers/header';
import {useAppDispatch} from 'hooks/use-store';
import {navigate, resetStack} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import i18n from 'translation';
import styles from './styles';
import CustomFlatList from 'components/atoms/custom-flatlist';
import { EmptyList } from 'components/atoms/empty-list';
const SavedVehicles = props => {
  const {t} = i18n;
  const [value, setValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const data=[]
  const renderCarItem = ({item}) => (
    <></>
  );
  return (
    <View style={styles.container}>
      <Header title={t('Saved vehicles')} add={true} onAdd={()=> navigate('AddVehicle')} />
      <View style={styles.container}>
      <CustomFlatList
          contentContainerStyle={styles.contentContainerStyle}
          ListEmptyComponent={!loading && <EmptyList label={'You do not have any saved vehicles'} />}
          showsVerticalScrollIndicator={false}
          data={data || []}
          renderItem={renderCarItem}
      />

      </View>
    </View>
  );
};
export default SavedVehicles;

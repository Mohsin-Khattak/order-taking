import CustomFlatList from 'components/atoms/custom-flatlist';
import { EmptyList } from 'components/atoms/empty-list';
import Header from 'components/atoms/headers/header';
import React from 'react';
import { FlatList, View } from 'react-native';
import i18n from 'translation';
import styles from './styles';
import { navigate } from 'navigation/navigation-ref';
const SavedAddress = props => {
  const {t} = i18n;
  const [value, setValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const data = [];
  const renderCarItem = ({item}) => <></>;
  return (
    <View style={styles.container}>
      <Header
        title={t('Saved addresses')}
        add={true}
        onAdd={() => navigate('AddAddress')}
      />
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          ListEmptyComponent={
            !loading && (
              <EmptyList label={'You have not saved any address yet'} />
            )
          }
          showsVerticalScrollIndicator={false}
          data={data || []}
          renderItem={renderCarItem}
        />
      </View>
    </View>
  );
};
export default SavedAddress;

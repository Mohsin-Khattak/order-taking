import Header from 'components/atoms/headers/header';
import {useAppDispatch} from 'hooks/use-store';
import {navigate, resetStack} from 'navigation/navigation-ref';
import React from 'react';
import {FlatList, View} from 'react-native';
import i18n from 'translation';
import styles from './styles';
import CustomFlatList from 'components/atoms/custom-flatlist';
import {EmptyList} from 'components/atoms/empty-list';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import {PrimaryButton} from 'components/atoms/buttons';
import {colors} from 'config/colors';
const Orders = props => {
  const {t} = i18n;
  const [value, setValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [select,setSelect]=React.useState('current_order')
  const data = [];
  const renderCarItem = ({item}) => <></>;
  return (
    <View style={styles.container}>
      <Header title={t('Orders')} />
      <View style={styles.buttonContainer}>
        <Row style={styles.rowContainer}>
          <PrimaryButton
          onPress={()=>setSelect('current_order')}
            textStyle={{color: colors.black}}
            containerStyle={{
              ...styles.orderBtn,
              backgroundColor:select==='current_order'? colors.white :colors?.primary,
            }}
            title={'Current orders'}
          />
          <PrimaryButton
              onPress={()=>setSelect('order_history')}
            textStyle={{color: colors.black}}
            containerStyle={{
              ...styles.orderBtn,
              backgroundColor: select==='order_history'? colors.white :colors?.primary,
            }}
            title={'Orders history'}
          />
        </Row>
      </View>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={
          !loading && (
            <EmptyList
              numberOfLines={3}
              label={
                'You currently do not have any orders. Start shopping now.'
              }
            />
          )
        }
        showsVerticalScrollIndicator={false}
        data={data || []}
        renderItem={renderCarItem}
      />
    </View>
  );
};
export default Orders;

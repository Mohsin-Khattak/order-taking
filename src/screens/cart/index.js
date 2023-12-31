import { PrimaryButton } from 'components/atoms/buttons';
import { EmptyList } from 'components/atoms/empty-list';
import Header from 'components/atoms/headers/header';
import { Row } from 'components/atoms/row';
import CartCard from 'components/molecules/cart-card';
import { mvs } from 'config/metrices';
import { useAppDispatch, useAppSelector } from 'hooks/use-store';
import React from 'react';
import { FlatList, View } from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import styles from './styles';
const Cart = props => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const dispatch = useAppDispatch();
  const [count,setCount]=React.useState(0)
  const [loading, setLoading] = React.useState(false);
  const {t} = i18n;
  const data = [
    {
      id: 1,
      title: 'Alernative Snacks',
      image:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww',
    },
    {
      id: 2,
      title: 'Candy',
      image:
        'https://w0.peakpx.com/wallpaper/768/855/HD-wallpaper-breads-bakery-graphy-food-healthy-bread-thumbnail.jpg',
    },
    {
      id: 3,
      title: 'Candy',
      image:
        'https://media.istockphoto.com/id/1442992545/photo/homemade-feta-cheese-puff-muffins-with-spinach-closeup-in-the-maffin-pan-horizontal-top-view.webp?b=1&s=170667a&w=0&k=20&c=OHf1oe8pnfmdIMsB68QvCm4Z0uC2WfBd15S_ATWL65A=',
    },
    {
      id: 4,
      title: 'Alernative Snacks',
      image:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww',
    },
  ];

  const renderCarItem = ({item, index}) => (
    <CartCard
      item={item}
      count={count[index] || 0}  
      setCount={(newCount) => setCount({ ...count, [index]: newCount })}  
      onPress={() =>
        props?.navigation?.navigate('WhereToMoveScreen', {
          service_id: item?.id,
        })
      }
    />
  );

  return (
    <View style={styles.container}>
      <Header back title={t('Cart')} />
      <Row
        style={{
          alignItems: 'center',
          paddingHorizontal: mvs(20),
          paddingVertical: mvs(10),
        }}>
        <Bold fontSize={mvs(18)} label={'Total Amount'} />
        <Bold fontSize={mvs(18)} label={'$ 1,059'} />
      </Row>

      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={
          !loading && <EmptyList label={'You have not any departments yet'} />
        }
        showsVerticalScrollIndicator={false}
        data={data || []}
        renderItem={renderCarItem}
      />
      <View
      style={styles.footerContainer}
      >

      <Row
        style={{paddingHorizontal:mvs(20)}}>
        <PrimaryButton
          containerStyle={{width: '48%', height: mvs(40)}}
          title="Delivery"
        />
        <PrimaryButton
          containerStyle={{width: '48%', height: mvs(40)}}
          title="Pickup"
        />
      </Row>
      </View>
    </View>
  );
};
export default Cart;

import {PrimaryButton} from 'components/atoms/buttons';
import {EmptyList} from 'components/atoms/empty-list';
import HeaderTab from 'components/atoms/headers/header-tab';
import {Row} from 'components/atoms/row';
import SwiperCard from 'components/atoms/swiper';
import DepartmentCard from 'components/molecules/department-card';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React from 'react';
import {FlatList, View} from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import styles from './styles';
const HomeTab = props => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(s => s?.user);

  const {t} = i18n;
  const [select, setSelect] = React.useState('delivery');
  const [loading, setLoading] = React.useState(true);
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
    {
      id: 5,
      title: 'Candy',
      image:
        'https://w0.peakpx.com/wallpaper/768/855/HD-wallpaper-breads-bakery-graphy-food-healthy-bread-thumbnail.jpg',
    },
    {
      id: 6,
      title: 'Candy',
      image:
        'https://media.istockphoto.com/id/1442992545/photo/homemade-feta-cheese-puff-muffins-with-spinach-closeup-in-the-maffin-pan-horizontal-top-view.webp?b=1&s=170667a&w=0&k=20&c=OHf1oe8pnfmdIMsB68QvCm4Z0uC2WfBd15S_ATWL65A=',
    },
    {
      id: 7,
      title: 'Alernative Snacks',
      image:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww',
    },
    {
      id: 8,
      title: 'Candy',
      image:
        'https://w0.peakpx.com/wallpaper/768/855/HD-wallpaper-breads-bakery-graphy-food-healthy-bread-thumbnail.jpg',
    },
    {
      id: 9,
      title: 'Candy',
      image:
        'https://media.istockphoto.com/id/1442992545/photo/homemade-feta-cheese-puff-muffins-with-spinach-closeup-in-the-maffin-pan-horizontal-top-view.webp?b=1&s=170667a&w=0&k=20&c=OHf1oe8pnfmdIMsB68QvCm4Z0uC2WfBd15S_ATWL65A=',
    },
  ];
  const renderCarItem = ({item, index}) => (
    <DepartmentCard
      item={item}
      onPress={() =>
        props?.navigation?.navigate('SubCategories', {
          title: item?.title,
        })
      }
    />
  );

  return (
    <View style={styles.container}>
      <HeaderTab title={t('Home')} back={false} menu={true} cartt={true} />

      <View style={styles.body}>
        <Row style={{marginTop: mvs(10)}}>
          <PrimaryButton
            onPress={() => setSelect('delivery')}
            textStyle={{
              color: select === 'delivery' ? colors.white : colors.black,
            }}
            containerStyle={{
              ...styles.btn,
              backgroundColor:
                select === 'delivery' ? colors.primary : colors.white,
              borderTopRightRadius: mvs(0),
              borderBottomRightRadius: mvs(0),
            }}
            title="DELIVERY"
          />
          <PrimaryButton
            onPress={() => setSelect('pickup')}
            textStyle={{
              color: select === 'pickup' ? colors.white : colors.black,
            }}
            containerStyle={{
              ...styles.btn,
              backgroundColor:
                select === 'pickup' ? colors.primary : colors.white,
              borderTopLeftRadius: mvs(0),
              borderBottomLeftRadius: mvs(0),
            }}
            title="PICKUP"
          />
        </Row>
        <SwiperCard />

        <Bold
          style={{paddingVertical: mvs(10), paddingHorizontal: mvs(20)}}
          fontSize={mvs(18)}
          label={'Departments'}
        />
        <FlatList
          columnWrapperStyle={styles.contentContainerStyle}
          numColumns={2}
          ListEmptyComponent={
            !loading && <EmptyList label={'You have not any departments yet'} />
          }
          showsVerticalScrollIndicator={false}
          data={data || []}
          renderItem={renderCarItem}
        />
      </View>
    </View>
  );
};
export default HomeTab;

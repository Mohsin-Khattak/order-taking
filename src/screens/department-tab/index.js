import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React from 'react';
import {View} from 'react-native';
import i18n from 'translation';
import styles from './styles';
import Header from 'components/atoms/headers/header';
import Bold from 'typography/bold-text';
import {mvs} from 'config/metrices';
import {FlatList} from 'react-native';
import {EmptyList} from 'components/atoms/empty-list';
import DepartmentCard from 'components/molecules/department-card';
const DepartmentTab = props => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(false);
  const {t} = i18n;
  const data = [
    {id: 1, title: 'Alernative Snacks',image:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww'},
    {id: 2, title: 'Candy', image:"https://w0.peakpx.com/wallpaper/768/855/HD-wallpaper-breads-bakery-graphy-food-healthy-bread-thumbnail.jpg"},
    {id: 2, title: 'Candy', image:"https://media.istockphoto.com/id/1442992545/photo/homemade-feta-cheese-puff-muffins-with-spinach-closeup-in-the-maffin-pan-horizontal-top-view.webp?b=1&s=170667a&w=0&k=20&c=OHf1oe8pnfmdIMsB68QvCm4Z0uC2WfBd15S_ATWL65A="},
  ];

  const renderCarItem = ({item, index}) => (
    <DepartmentCard
      item={item}
      onPress={() =>
        props?.navigation?.navigate('WhereToMoveScreen', {
          service_id: item?.id,
        })
      }
    />
  );

  return (
    <View style={styles.container}>
      <Header title={t('General Goods')} cart={true} back={false} />

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
  );
};
export default DepartmentTab;

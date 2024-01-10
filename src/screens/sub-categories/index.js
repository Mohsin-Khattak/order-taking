import { EmptyList } from 'components/atoms/empty-list';
import Header from 'components/atoms/headers/header';
import SearchItemCard from 'components/molecules/search-item-card';
import { mvs } from 'config/metrices';
import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';

const SubCategories = props => {
  const {navigation} = props;
  const {title} = props?.route?.params;

  const [loading, setLoading] = React.useState(true);

  
  const data = [
    {
      id: 1,
      title: 'Pepto Bismol Maximum Strength Liquid 4oz',
      price: '$ 400',
      image:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww',
    },
    {
      id: 2,
      title: 'Candy',
      price: '$ 400',

      image:
        'https://w0.peakpx.com/wallpaper/768/855/HD-wallpaper-breads-bakery-graphy-food-healthy-bread-thumbnail.jpg',
    },
    {
      id: 3,
      title: 'Candy',
      price: '$ 400',
      image:
        'https://media.istockphoto.com/id/1442992545/photo/homemade-feta-cheese-puff-muffins-with-spinach-closeup-in-the-maffin-pan-horizontal-top-view.webp?b=1&s=170667a&w=0&k=20&c=OHf1oe8pnfmdIMsB68QvCm4Z0uC2WfBd15S_ATWL65A=',
    },
    {
      id: 4,
      title: 'Alernative Snacks',
      price: '$ 400',
      image:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww',
    },
    {
      id: 5,
      title: 'Candy',
      price: '$ 400',
      image:
        'https://w0.peakpx.com/wallpaper/768/855/HD-wallpaper-breads-bakery-graphy-food-healthy-bread-thumbnail.jpg',
    },
    {
      id: 6,
      title: 'Candy',
      price: '$ 400',
      image:
        'https://media.istockphoto.com/id/1442992545/photo/homemade-feta-cheese-puff-muffins-with-spinach-closeup-in-the-maffin-pan-horizontal-top-view.webp?b=1&s=170667a&w=0&k=20&c=OHf1oe8pnfmdIMsB68QvCm4Z0uC2WfBd15S_ATWL65A=',
    },
    {
      id: 7,
      title: 'Alernative Snacks',
      price: '$ 400',
      image:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww',
    },
    {
      id: 8,
      title: 'Candy',
      price: '$ 400',
      image:
        'https://w0.peakpx.com/wallpaper/768/855/HD-wallpaper-breads-bakery-graphy-food-healthy-bread-thumbnail.jpg',
    },
    {
      id: 9,
      title: 'Candy',
      price: '$ 400',
      image:
        'https://media.istockphoto.com/id/1442992545/photo/homemade-feta-cheese-puff-muffins-with-spinach-closeup-in-the-maffin-pan-horizontal-top-view.webp?b=1&s=170667a&w=0&k=20&c=OHf1oe8pnfmdIMsB68QvCm4Z0uC2WfBd15S_ATWL65A=',
    },
  ];
  const renderSearchItem = ({item, index}) => (
    <SearchItemCard
      item={item}
      onPress={() =>{}}
    />
  );

  return (
    <View style={{...styles.container}}>
      <Header title={title} />
      <View style={{marginTop: mvs(10)}} />
      <FlatList
        columnWrapperStyle={styles.contentContainerStyle}
        numColumns={2}
        ListEmptyComponent={
          !loading && <EmptyList label={'You have not any departments yet'} />
        }
        showsVerticalScrollIndicator={false}
        data={data || []}
        renderItem={renderSearchItem}
      />
    </View>
  );
};
export default SubCategories;

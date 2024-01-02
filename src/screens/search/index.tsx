import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  down,
  left
} from 'assets/images';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import Line from 'components/atoms/line';
import { Row } from 'components/atoms/row';
import SearchItemCard from 'components/molecules/search-item-card';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import React, { Fragment } from 'react';
import { Image, View } from 'react-native';
import Bold from 'typography/bold-text';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
import Header from 'components/atoms/headers/header';
type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Search = (props: props) => {
  const data = [
    {title: 'Apple juices', icon: left},
    {title: 'Apple juices', icon: left},
    {title: 'Apple juices', icon: left},
    {title: 'Apple juices', icon: left},
    {title: 'Pakistani Dishes', icon: left},
    {title: 'Pakistani Dishes', icon: left},
    {title: 'Pakistani Dishes', icon: left},
    {title: 'Pakistani Dishes', icon: left},
    {title: 'Pakistani Dishes', icon: left},
    {title: 'Pakistani Dishes', icon: left},
    {title: 'Pakistani Dishes', icon: left},
    {title: 'Pakistani Dishes', icon: left},
    {title: 'Pakistani Dishes', icon: left},
    {title: 'Pakistani Dishes', icon: left},
  ];
  const {navigation} = props;
  return (
    <View style={{...styles.container}}>
      <Header
        title={'Search Product'}
        back={false}
        cart={true}
      />
      {/* <Row style={styles.category}>
        <Bold label={'Categories'} fontSize={mvs(15)} color={colors.black} />
        <Row>
          <Bold label={'A-Z'} fontSize={mvs(15)} color={colors.grey} />
          <Image source={down} style={styles.down} />
        </Row>
      </Row>
      {data.map((item, index) => (
        <Fragment key={index}>
          <SearchItemCard item={item} />
          <Line marginVertica={3} />
        </Fragment>
      ))} */}
      {/* <Bold
        label={'Log Out'}
        color={colors.primary}
        fontSize={mvs(15)}
        onPress={() => {}}
        style={styles.logout}
      /> */}
    </View>
  );
};
export default Search;

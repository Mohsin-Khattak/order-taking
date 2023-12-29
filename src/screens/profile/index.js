import {PrimaryButton} from 'components/atoms/buttons';
import {EmptyList} from 'components/atoms/empty-list';
import Header from 'components/atoms/headers/header';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import i18n from 'translation';
import styles from './styles';
import Medium from 'typography/medium-text';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import Regular from 'typography/regular-text';
import {mvs} from 'config/metrices';
import PrimaryInput from 'components/atoms/inputs';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import {Checkbox} from 'components/atoms/checkbox';
import Light from 'typography/light-text';
const Profile = props => {
  const {t} = i18n;
  const [value, setValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [select, setSelect] = React.useState('unkown');
  const data = [];
  const renderCarItem = ({item}) => <></>;
  return (
    <View style={styles.container}>
      <Header title={t('Profile')} />
      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <Row style={{alignItems: 'center'}}>
          <View>
            <Medium color={colors.black} label={'Account Number'} />
            <Regular color={colors.black} label={'45347305'} />
            <Regular color={colors.black} label={'Mohsin Khattak'} />
          </View>
          <Image
            style={styles.image}
            source={{
              uri: 'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg',
            }}
          />
        </Row>
        <View style={styles.buttonContainer}>
          <Row style={styles.rowContainer}>
            <PrimaryButton
              onPress={() => setSelect('unkown')}
              textStyle={{color:select === 'unkown' ? colors.white : colors?.black}}
              containerStyle={{
                ...styles.orderBtn,
                backgroundColor:
                  select === 'unkown' ? colors.primary : colors?.white,
              }}
              title={'Unkown'}
            />
            <PrimaryButton
              onPress={() => setSelect('mr')}
              textStyle={{color:select === 'mr' ? colors.white : colors?.black}}
              containerStyle={{
                ...styles.orderBtn,
                backgroundColor:
                  select === 'mr' ? colors.primary : colors?.white,
              }}
              title={'Mr'}
            />
            <PrimaryButton
              onPress={() => setSelect('mrs')}
              textStyle={{color:select === 'mrs' ? colors.white : colors?.black}}
              containerStyle={{
                ...styles.orderBtn,
                backgroundColor:
                  select === 'mrs' ? colors.primary : colors?.white,
              }}
              title={'Mrs'}
            />
            <PrimaryButton
              onPress={() => setSelect('ms')}
              textStyle={{color: select === 'ms' ? colors.white : colors?.black}}
              containerStyle={{
                ...styles.orderBtn,
                backgroundColor:
                  select === 'ms' ? colors.primary : colors?.white,
              }}
              title={'Ms'}
            />
          </Row>
        </View>
        <PrimaryInput
          style={{fontSize: mvs(16)}}
          containerStyle={styles.btnContainerStyle}
          children={
            <EvilIcons
              name={'user'}
              size={20}
              style={{paddingRight: mvs(10)}}
            />
          }
          placeholder="First Name"
        />
        <PrimaryInput
          style={{fontSize: mvs(16)}}
          containerStyle={styles.btnContainerStyle}
          children={
            <EvilIcons
              name={'user'}
              size={20}
              style={{paddingRight: mvs(10)}}
            />
          }
          placeholder="Last Name"
        />
        <PrimaryInput
          style={{fontSize: mvs(16)}}
          containerStyle={styles.btnContainerStyle}
          children={
            <Fontisto
              name={'email'}
              size={20}
              style={{paddingRight: mvs(10)}}
            />
          }
          placeholder="Email"
        />
        <PrimaryInput
          style={{fontSize: mvs(16)}}
          containerStyle={styles.btnContainerStyle}
          children={
            <Feather name={'phone'} size={20} style={{paddingRight: mvs(10)}} />
          }
          placeholder="+923448422399"
        />
        <Row style={{justifyContent: 'flex-start', gap: mvs(40)}}>
          <Row style={styles.innerRowContainer}>
            <Checkbox />
            <Light color={colors.black} label={'SMS'} />
          </Row>
          <Row style={styles.innerRowContainer}>
            <Checkbox />
            <Light color={colors.black} label={'Web Push Notification'} />
          </Row>
        </Row>
        <Row
          style={styles.wantToRecive}>
          <Checkbox />
          <Light color={colors.black} label={'I want to receive news and service updates'} />
        </Row>
        <PrimaryButton containerStyle={styles.saveBtn} title='Save Changes'/>
        <TouchableOpacity style={styles.signOutContainer}>
        <Medium label={'Sign out'} color={colors.black} fontSize={mvs(18)}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signOutContainer}>
        <Medium label={'Delete Account'} color={colors.black} fontSize={mvs(18)}/>
        </TouchableOpacity>
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default Profile;

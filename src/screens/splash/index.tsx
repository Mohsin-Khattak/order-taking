import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SplashIcon } from 'assets/icons';
import { mvs, width } from 'config/metrices';
import { useAppDispatch } from 'hooks/use-store';
import React from 'react';
import { Image, View } from 'react-native';
import i18n from 'translation';
import { UTILS } from 'utils';
import { STORAGEKEYS } from '../../config/constants';
import { setLanguage, setLocation, setUserInfo } from '../../store/reducers/user-reducer';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
  }, [])
  React.useEffect(() => {

    (async () => {
      try {
        let screen: any = 'Login';
        UTILS.get_current_location((position) => {
          dispatch(setLocation({
            latitude: position?.coords?.latitude,
            longitude: position?.coords?.longitude
          }))

        }, (error) => {

        })
        UTILS.getItem(STORAGEKEYS.lang).then((lang: any) => {
          i18n.changeLanguage(lang);
          dispatch(setLanguage(lang ?? 'en'));
        })

        UTILS.getItem(STORAGEKEYS.user).then((data: any) => {
          if (data) {
            const user = JSON.parse(data);
            screen = 'Login';
            dispatch(setUserInfo(user));
          }
          setTimeout(() => {
            navigation?.replace(screen);
          }, 2000);
        });

      } catch (error) {

      }
    })()
  }, []);


  return (
    <View style={{ ...styles.container }}>
      {/* <SplashIcon width={width - mvs(60)} />
       */}
       <Image
       style={{width:mvs(150),height:mvs(100)}}
       source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TUUKRDhn5qWuU01sEPV1viaeH3cbukwiiw&usqp=CAU',
      }}
       />
    </View>
  );
};
export default Splash;

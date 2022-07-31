import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Gap} from '../../components';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, []);
  return (
    <View style={styles.page}>
      <Logo />
      <Gap height={38} />
      <Text style={styles.text}>FoodMarket</Text>
    </View>
  );
};

const styles = {
  page: {
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'},
};

export default SplashScreen;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlOrderSuccess} from '../../assets';
import {Button, Gap} from '../../components';

const OrderSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlOrderSuccess />
      <Gap height={30} />
      <Text style={styles.title}>You've Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subTittle}>Just stay at home while we are</Text>
      <Text style={styles.subTittle}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Order Other Foods"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={12} />
        <Button
          text="View My Order"
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
          color="#8D93A3"
          textColor="white"
        />
      </View>
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subTittle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});

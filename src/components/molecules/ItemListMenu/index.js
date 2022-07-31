import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcNext} from '../../../assets';

const ItemListMenu = ({name, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <IcNext />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regullar',
    color: '#020202',
  },
});

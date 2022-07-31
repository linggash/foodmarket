import React from 'react';
import {StyleSheet, Text, TextInput as TextInputRN, View} from 'react-native';

const TextInput = ({label, placeholder, ...props}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} {...props} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
  },
});

import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import NumericInput from 'react-native-numeric-input';

export function FooterBar({ speed, setSpeed }) {
  return (
    <View style={styles.container}>
      <Text>Flip Speed</Text>
      <NumericInput 
        value={speed}
        onChange={value => setSpeed(speed = value)}
        step={25}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    textAlign: 'center',
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
  }
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Incrementer } from './NumericInput';

export function FooterBar({ speed, setSpeed }) {
  return (
    <View style={styles.container}>
      <Text>Flip Speed</Text>
      <Incrementer 
        speed={speed}
        setSpeed={setSpeed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SliderBar } from './SliderBar';

export function FooterBar({ speed, setSpeed }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Flip Speed</Text>
      <SliderBar
        speed={speed}
        setSpeed={setSpeed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

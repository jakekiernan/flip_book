import React from 'react';
import { StyleSheet } from 'react-native';
import { Slider } from 'react-native';

export function ProgressBar({ textLen, countObj }) {
  let { count, setCount } = countObj;

  return (
    <Slider
      value={count}
      maximumValue={textLen}
      onValueChange={value => setCount(count = value)}
      step={1}
      style={styles.slider}
      minimumTrackTintColor="#1E1E1E"
      maximumTrackTintColor="#1E1E1E"
      thumbTintColor="#2D2D30"/>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '75%',
    height: 40
  },
});
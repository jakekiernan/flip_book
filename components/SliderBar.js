import React from 'react';
import { StyleSheet } from 'react-native';
import { Slider } from 'react-native';

export function SliderBar({ speed, setSpeed }) {
  return (
    <Slider
      value={speed}
      onValueChange={value => setSpeed(speed = value)}
      step={1}
      style={styles.slider}
      minimumValue={0}
      maximumValue={100}
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
import React from 'react';
import { StyleSheet } from 'react-native';
import { Slider } from 'react-native';

export function SliderBar({ speed, setSpeed }) {
  return (
    <Slider
      value={speed}
      onValueChange={value => setSpeed(speed = value)}
      step={5}
      style={styles.slider}
      minimumValue={0}
      maximumValue={100}
      minimumTrackTintColor="#38A1F3"
      maximumTrackTintColor="#38A1F3"
      thumbTintColor="#38A1F3"/>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '75%',
    height: 40
  },
});
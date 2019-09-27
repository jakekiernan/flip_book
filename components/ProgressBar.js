import React from 'react';
import { StyleSheet } from 'react-native';
import { Slider } from 'react-native';
import { useStateValue } from '../state';
import { splitArr } from '../utils'

export const ProgressBar = () => {
  const [{ count, text: { text } }, dispatch] = useStateValue();

  return (
    <Slider
      value={count}
      maximumValue={splitArr(text).length}
      onValueChange={value => 
        dispatch({
          type: 'scrollText',
          value,
        })
      }
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
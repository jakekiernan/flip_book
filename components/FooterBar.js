import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SpeedBar } from './SpeedBar';
import { ProgressBar } from './ProgressBar';
import { useStateValue } from '../state';

export const FooterBar = () => {
  const [{ count, speed }, dispatch] = useStateValue();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Speed</Text>
      <View style={styles.slider}>
        <Text style={styles.sliderText}>{speed}</Text>
        <SpeedBar />
      </View>
      <Text style={styles.text}>Progress</Text>
      <View style={styles.slider}>
        <Text style={styles.sliderText}>{count}</Text>
        <ProgressBar />      
      </View>
      <Text 
        onPress={() => {
          dispatch({
            type: 'resetCounter'
          })
        }}
        style={styles.reset}>
        Reset to Start
      </Text>
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
  slider: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderText: {
    marginRight: 10,
  },
  reset: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SpeedBar } from './SpeedBar';
import { ProgressBar } from './ProgressBar';
import { useStateValue } from '../state';

export const FooterBar = () => {
  const [{ count, speed }, _dispatch] = useStateValue();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Progress</Text>
      <View style={styles.slider}>
        <Text style={styles.sliderText}>{count}</Text>
        <ProgressBar />
      </View>  
      <Text style={styles.text}>Flip Speed</Text>
      <View style={styles.slider}>
        <Text style={styles.sliderText}>{speed}</Text>
        <SpeedBar />
      </View>
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
});

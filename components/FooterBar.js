import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SliderBar } from './SliderBar';
import { ProgressBar } from './ProgressBar';
import { ThemedButton } from './ThemedButton';

export function FooterBar({ speed, setSpeed, textLen, countObj }) {
  return (
    <View style={styles.container}>
      <ThemedButton />
      <Text style={styles.text}>Progress</Text>
      <View style={styles.slider}>
        <Text style={styles.sliderText}>{countObj.count}</Text>
        <ProgressBar
          textLen={textLen}
          countObj={countObj} />
      </View>  
      <Text style={styles.text}>Flip Speed</Text>
      <View style={styles.slider}>
        <Text style={styles.sliderText}>{speed}</Text>
        <SliderBar
          speed={speed}
          setSpeed={setSpeed} />
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

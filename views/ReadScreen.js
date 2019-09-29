import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useStateValue } from '../state';
import { WordDisplay } from '../components';
import { useInterval, convertSpeed, showWord, splitArr, invertNumber } from '../utils'

export const ReadScreen = ({ navigation: { navigate } }) => {
  let [isRunning, setIsRunning] = useState(true);
  const [{ count, text: { text }, speed }, dispatch] = useStateValue();
  const pauseText = isRunning ? 'Pause' : 'Start';

  useInterval(() => {
    if (count >= splitArr(text).length) {
      return;
    }
    dispatch({
      type: 'incrementCounter',
    })
  }, isRunning ? convertSpeed(invertNumber(speed)) : null);

  const word = showWord(splitArr(text), count);

  return (
    <View style={styles.container}>
      <WordDisplay
        word={word} />
      <Button 
        title={pauseText}
        color="#1E1E1E"
        onPress={() => setIsRunning(!isRunning)}
        style={styles.button} />
      <Button 
        title="Back"
        color="#1E1E1E"
        onPress={() => {
          dispatch({
            type: 'resetCounter'
          })
          navigate('Home', { resetCount: 0 })
        }}
        style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {},
});
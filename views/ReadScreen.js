import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { WordDisplay } from '../components';
import { useInterval, convertSpeed, splitArr, invertNumber } from '../utils'
import { useStateValue } from '../state';

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

  return (
    <View style={styles.container}>
      <WordDisplay
        text={text}
        count={count} />
      <Button 
        title={pauseText}
        color="#1E1E1E"
        onPress={() => setIsRunning(!isRunning)}
        style={styles.button} />
      <Button 
        title="Back"
        color="#1E1E1E"
        onPress={() => navigate('Home', { resetCount: 0 })}
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
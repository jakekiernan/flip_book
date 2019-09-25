import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { WordDisplay } from '../components';
import { useInterval, convertSpeed, splitArr, invertNumber } from '../utils'

export function ReadScreen ({ navigation: { navigate, getParam }, screenProps }) {
  const { text } = screenProps.textObj
  const { countObj: { count, setCount }, speed } = screenProps // TODO replace screenProps with useContext https://reactjs.org/docs/hooks-reference.html#usecontext
  let [isRunning, setIsRunning] = useState(true);

  useInterval(() => {
    if (count >= splitArr(text).length) {
      return;
    }
    setCount(count + 1);
  }, isRunning ? convertSpeed(invertNumber(speed)) : null);

  const pauseText = isRunning ? 'Pause' : 'Start'

  const author = (getParam('author'))

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
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { WordDisplay } from '../components';
import { useInterval, convertSpeed, splitArr, invertNumber } from '../utils'

export function ReadScreen ({ navigation: { navigate }, screenProps }) {
  const { text } = screenProps.textObj
  const { countObj: { count, setCount }, speed } = screenProps // TODO find a better way of passing props through react-navigation-stack

  useInterval(() => {
    if (count >= splitArr(text).length) {
      return;
    }
    setCount(count + 1);
  }, convertSpeed(invertNumber(speed)));

  return (
    <View style={styles.container}>
      <WordDisplay
        text={text}
        count={count} />
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
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {splitArr, showWord, useInterval} from '../utils/parse';
import {stage} from '../assets/text/Shakespeare';

export default function WordDisplay() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 200);

  return (
    <View style={styles.container}>
      <Text
        style={styles.baseText}>
        {showWord(splitArr(stage), count)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontSize: 50,
  },
});

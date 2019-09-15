import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { splitArr, showWord, useInterval } from '../utils/parse';
import { texts } from '../assets/texts';
import { get } from 'lodash';

export function WordDisplay({ textKey }) {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 200);

  const text = get(texts, textKey)

  return (
    <View style={styles.container}>
      <Text
        style={styles.baseText}>
        {showWord(splitArr(text), count)}
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

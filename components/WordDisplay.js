import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { splitArr, showWord, useInterval } from '../utils/readUtils';
import { texts } from '../assets/texts';
import { get } from 'lodash';

export function WordDisplay({ textKey }) {
  const [count, setCount] = useState(0);
  const text = get(texts, textKey);

  useInterval(() => {
    if (count >= splitArr(text).length) {
      return;
    }
    setCount(count + 1);
  }, 200);

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontSize: 50,
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { splitArr, showWord } from '../utils';

export function WordDisplay({ text, count }) {
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
    fontSize: 60,
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const WordDisplay = ({ word }) => {

  return (
    <View style={styles.container}>
      <Text
        style={styles.baseText}>
        {word}
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

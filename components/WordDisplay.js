import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {parse} from '../utils/parse';
import {stage} from '../assets/text/Shakespeare';

export default function WordDisplay() {
  return (
    <View style={styles.container}>
      <Text>{parse(stage)}</Text>
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
});
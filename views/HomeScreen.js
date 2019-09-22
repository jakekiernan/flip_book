import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { get } from 'lodash';
import { texts } from '../assets/texts';
import { getFirstTen } from '../utils';

export function HomeScreen ({
  navigation: { navigate },
  screenProps }) {

  let { text, setText } = screenProps.textObj;
  let { reset } = screenProps.countObj;
  const resetRef = useRef(true);

  useEffect(() => {
    if (resetRef) {
      reset()
    }
  }, [resetRef.current])

  resetRef.current = false;

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text
          style={styles.author}
          onPress={() => {
            setText(text = get(texts, 'shakespeare'))
            navigate('Read')
          }}>
          Shakespeare
        </Text>
        <Text style={styles.previewText}>
          {getFirstTen(get(texts, 'shakespeare'))}...
        </Text>
      </View>
      <View style={styles.item}>
        <Text
          style={styles.author}
          onPress={() => {
            setText(text = get(texts, 'dostoevsky'))
            navigate('Read')
          }}>
          Dostoevsky
        </Text>
        <Text style={styles.previewText}>
          {getFirstTen(get(texts, 'dostoevsky'))}...
        </Text>
      </View>
      <View style={styles.item}>
        <Text
          style={styles.author}
          onPress={() => {
            setText(text = get(texts, 'eliot'))
            navigate('Read')
          }}>
          Eliot
        </Text>
        <Text style={styles.previewText}>
          {getFirstTen(get(texts, 'eliot'))}...
        </Text>
      </View>
      <View style={styles.item}>
        <Text
          style={styles.author}
          onPress={() => {
            setText(text = get(texts, 'shelley'))
            navigate('Read')
          }}>
          Shelley
        </Text>
        <Text style={styles.previewText}>
          {getFirstTen(get(texts, 'shelley'))}...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  item: {
    padding: 10,
    display: 'flex',
    backgroundColor: '#1E1E1E',
    borderColor: '#2D2D30',
    borderWidth: 1,
  },
  author: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  previewText: {
    color: 'white',

  },
});
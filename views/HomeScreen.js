import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { get } from 'lodash';
import { texts } from '../assets/texts';
import { getFirstTen, resetCounter } from '../utils';

export function HomeScreen ({navigation: { navigate }, screenProps }) {
  let { setText } = screenProps.textObj;
  let { reset } = screenProps.countObj; // TODO replace screenProps with useContext https://reactjs.org/docs/hooks-reference.html#usecontext

  // resetCounter(reset, 'home');

  return (
    <View style={styles.container}>
      <View
        style={styles.item}>
        <Text
          style={styles.author}
          onPress={() => {
            setText(text = get(texts, 'shakespeare'))
            navigate('Read', { author: 'shakespeare' })
          }}>
          William Shakespeare
        </Text>
        <Text
          style={styles.previewText}
          onPress={() => {
            setText(text = get(texts, 'shakespeare'))
            navigate('Read')
          }}>
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
          Fyodor Dostoevsky
        </Text>
        <Text
          style={styles.previewText}
          onPress={() => {
            setText(text = get(texts, 'dostoevsky'))
            navigate('Read')
          }}>
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
          George Eliot
        </Text>
        <Text
          style={styles.previewText}
          onPress={() => {
            setText(text = get(texts, 'eliot'))
            navigate('Read')
          }}>
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
          Mary Shelley
        </Text>
        <Text
          style={styles.previewText}
          onPress={() => {
            setText(text = get(texts, 'shelley'))
            navigate('Read')
          }}>
          {getFirstTen(get(texts, 'shelley'))}...
        </Text>
      </View>
      <View style={styles.item}>
        <Text
          style={styles.author}
          onPress={() => {
            setText(text = get(texts, 'dickens'))
            navigate('Read')
          }}>
          Charles Dickens
        </Text>
        <Text
          style={styles.previewText}
          onPress={() => {
            setText(text = get(texts, 'dickens'))
            navigate('Read')
          }}>
          {getFirstTen(get(texts, 'dickens'))}...
        </Text>
      </View>
      <View style={styles.item}>
        <Text
          style={styles.author}
          onPress={() => {
            setText(text = get(texts, 'twain'))
            navigate('Read')
          }}>
          Mark Twain
        </Text>
        <Text
          style={styles.previewText}
          onPress={() => {
            setText(text = get(texts, 'twain'))
            navigate('Read')
          }}>
          {getFirstTen(get(texts, 'twain'))}...
        </Text>
      </View>
      <View style={styles.item}>
        <Text
          style={styles.author}
          onPress={() => {
            setText(text = get(texts, 'woolf'))
            navigate('Read')
          }}>
          Virgina Woolf
        </Text>
        <Text
          style={styles.previewText}
          onPress={() => {
            setText(text = get(texts, 'woolf'))
            navigate('Read')
          }}>
          {getFirstTen(get(texts, 'woolf'))}...
        </Text>
      </View>
      <View style={styles.item}>
        <Text
          style={styles.author}
          onPress={() => {
            setText(text = get(texts, 'hemingway'))
            navigate('Read')
          }}>
          Ernest Hemingway
        </Text>
        <Text
          style={styles.previewText}
          onPress={() => {
            setText(text = get(texts, 'hemingway'))
            navigate('Read')
          }}>
          {getFirstTen(get(texts, 'hemingway'))}...
        </Text>
      </View>
      <View style={styles.item}>
        <Text
          style={styles.author}
          onPress={() => {
            setText(text = get(texts, 'tolstoy'))
            navigate('Read')
          }}>
          Leo Tolstoy
        </Text>
        <Text
          style={styles.previewText}
          onPress={() => {
            setText(text = get(texts, 'tolstoy'))
            navigate('Read')
          }}>
          {getFirstTen(get(texts, 'tolstoy'))}...
        </Text>
      </View>
      <View style={styles.item}>
        <Text
          style={styles.author}
          onPress={() => {
            setText(text = get(texts, 'christie'))
            navigate('Read')
          }}>
          Agatha Christie
        </Text>
        <Text
          style={styles.previewText}
          onPress={() => {
            setText(text = get(texts, 'christie'))
            navigate('Read')
          }}>
          {getFirstTen(get(texts, 'christie'))}...
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
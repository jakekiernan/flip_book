import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { get } from 'lodash';
import { texts } from '../assets/texts';
import { getFirstTen } from '../utils';
import { useStateValue } from '../state';

export const HomeScreen = ({ navigation: { navigate } }) => {
  const [_state, dispatch] = useStateValue();

  // TODO add first names
  return (
    <View style={styles.container}>
      {Object.keys(texts).map(author =>
        <View
          key={author}
          style={styles.item}>
          <Text
            style={styles.author}
            onPress={() => {
              dispatch({
                type: 'selectText',
                author,
              })
              navigate('Read')
            }}>
            {`${author[0].toUpperCase()}${author.slice(1)}`}
          </Text>
          <Text
            style={styles.previewText}
            onPress={() => {
              dispatch({
                type: 'selectText',
                author,
              })
              navigate('Read')
            }}>
            {getFirstTen(get(texts, author))}...
          </Text>
        </View>
      )}
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
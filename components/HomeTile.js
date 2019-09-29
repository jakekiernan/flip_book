import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { get } from 'lodash';
import { useStateValue } from '../state';
import { getFirstTen } from '../utils';
import { texts, authorList } from '../assets/texts';

export const HomeTile = ({ author, navigate }) => {
  const [_state, dispatch] = useStateValue();

  return (
    <View
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
        {authorList.map(auth => {
          if (auth.toLowerCase().includes(author)) {
            return auth;
          }
        })}
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
  );
}

const styles = StyleSheet.create({
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
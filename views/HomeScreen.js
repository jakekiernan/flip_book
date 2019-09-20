import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export function HomeScreen ({navigation: { navigate }}) {
  return (
    <View style={styles.container}>
      <Text 
        onPress={() => navigate('Read', {author: 'shakespeare'})}
        style={styles.item}>
        Shakespeare
      </Text>
      <Text
        onPress={() => navigate('Read', {author: 'dostoevsky'})}
        style={styles.item}>
        Dostoevsky
      </Text>
      <Text
        onPress={() => navigate('Read', {author: 'eliot'})}
        style={styles.item}>
        Eliot
      </Text>
      <Text
        onPress={() => navigate('Read', {author: 'shelley'})}
        style={styles.item}>
        Shelley
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '50%',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item: {
    paddingTop: '40%',
    display: 'flex',
    flexBasis: '50%', 
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#38A1F3',
    fontSize: 24,
    fontWeight: 'bold',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
  },
});
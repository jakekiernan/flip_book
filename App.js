import React from 'react';
import { StyleSheet, View } from 'react-native';
import WordDisplay from './components/WordDisplay'

export default function App() {
  return (
    <View style={styles.container}>
      <WordDisplay />
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

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { texts } from '../assets/texts';
import { HomeTile } from '../components';

export const HomeScreen = ({ navigation: { navigate } }) => {

  return (
    <View style={styles.container}>
      {Object.keys(texts).map(author =>
        <HomeTile
          author={author}
          navigate={navigate}
          key={author} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export class HomeScreen extends React.Component {
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Button 
            title="Shakespeare"
            onPress={() => navigate('Read', {author: 'shakespeare'})}
            style={styles.item} />
          <Button
            title="Dostoevsky"
            onPress={() => navigate('Read', {author: 'dostoevsky'})}
            style={styles.item} />
        </View>
        <View style={styles.innerContainer}>
          <Button
            title="George Eliot"
            onPress={() => navigate('Read', {author: 'eliot'})}
            style={styles.item} />
          <Button
            title="Mary Shelley"
            onPress={() => navigate('Read', {author: 'shelley'})}
            style={styles.item} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: 200,
    flexGrow: 1,
  },
});
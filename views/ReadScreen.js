import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { WordDisplay } from '../components/WordDisplay'

export class ReadScreen extends React.Component {
  render () {
    const {navigate, state: {params: { author }}} = this.props.navigation;
    const { screenProps } = this.props // TODO find a better way of passing props through react-navigation-stack

    return (
      <View style={styles.container}>
        <WordDisplay
          textKey={author}
          speed={screenProps} />
        <Button 
          title="Back"
          onPress={() => navigate('Home', {key: 'Back'})}
          style={styles.button} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {},
});
import React, { useState } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, View, Text } from 'react-native';
import { HomeScreen } from './views/HomeScreen'
import { ReadScreen } from './views/ReadScreen'
import { FooterBar } from './components/FooterBar'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Read: { screen: ReadScreen },
});

const Routing = createAppContainer(MainNavigator);

function App() {
  const [speed, setSpeed] = useState(200);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Routing screenProps={speed} />
      </View>
      <View style={styles.footer}>
        <FooterBar
          setSpeed={setSpeed}
          speed={speed} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flexGrow: 6,
  },
  footer: {
    flexGrow: 1,
  },
});

export default App;

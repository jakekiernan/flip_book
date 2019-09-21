import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, View } from 'react-native';
import { HomeScreen, ReadScreen } from './views';
import { FooterBar } from './components';
import { convertSpeed } from './utils';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Read: { screen: ReadScreen },
});
const Routing = createAppContainer(MainNavigator);

function App() {
  const [speed, setSpeed] = useState(50);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Routing screenProps={convertSpeed(speed)} />
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

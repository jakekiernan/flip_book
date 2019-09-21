import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Main } from './Routing'
import { FooterBar } from './components';
import { convertSpeed } from './utils';

function App() {
  const [speed, setSpeed] = useState(50);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Main screenProps={convertSpeed(speed)} />
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
  container: { flex: 1 },
  main: { flexGrow: 6 },
  footer: { flexGrow: 1 },
});

export default App;

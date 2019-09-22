import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Main } from './Routing'
import { FooterBar } from './components';
import { splitArr, useCounter } from './utils';

function App() {
  const [speed, setSpeed] = useState(50);
  const [text, setText] = useState('');
  const { count, setCount, reset } = useCounter();

  const screenProps = {
    textObj: { text, setText },
    countObj: { count, setCount, reset },
    speed
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Main screenProps={screenProps} />
      </View>
      <View style={styles.footer}>
        <FooterBar
          setSpeed={setSpeed}
          speed={speed}
          textLen={splitArr(text).length}
          countObj={screenProps.countObj} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  main: { flexGrow: 4 },
  footer: { flexGrow: 1 },
});

export default App;

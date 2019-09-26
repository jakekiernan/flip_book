import React, { useState } from 'react';
import { StateProvider } from './AppState';
import { MainReducer, InitialState } from './Reducers'
import { StyleSheet, View } from 'react-native';
import { Main } from './Routing'
import { FooterBar } from './components';
import { splitArr, useCounter, useText } from './utils';

const App = () => {
  const [ speed, setSpeed ] = useState(50);
  const { text, setText, authorKey, setAuthorKey } = useText();
  const { count, setCount, reset } = useCounter();

  const screenProps = {
    textObj: { text, setText, authorKey, setAuthorKey },
    countObj: { count, setCount, reset },
    speed
  }

  return (
    <StateProvider initialState={InitialState} reducer={MainReducer}>
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
    </StateProvider>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  main: { flexGrow: 4 },
  footer: { flexGrow: 1 },
});

export default App;

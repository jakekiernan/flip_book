import React from 'react';
import { StateProvider, mainReducer, initialState } from './state';
import { StyleSheet, View } from 'react-native';
import { Main } from './Routing'
import { FooterBar } from './components';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Main />
        </View>
        <View style={styles.footer}>
          <FooterBar />
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

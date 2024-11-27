/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainRoute from './src/routes/mainRoute';
import {Provider} from 'react-redux';
import store from './src/store';
import {injectStore} from './src/apis/createInstance';
import {useAppSelector} from './src/hooks/reduxHooks';
import MainLoader from './src/components/mainLoader';
injectStore(store);
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <KeyboardAvoidingView style={styles.container}>
          <MainRoute />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

export default App;

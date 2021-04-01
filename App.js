/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Login from './src/Login/index';

const App: () => Node = () => {
  return (
    <>
      <Login />
    </>
   
  )
};

const styles = StyleSheet.create({

  text: {
    color:'#FFF',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 350,
  },
});

export default App;

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

import Register from './src/Register/index';
import Projects from './src/Projects/index';
import ProjectCard from './src/ProjectCard/index';
import NewProject from './src/NewProject/index';

const App: () => Node = () => {
  return (
    <>
      <NewProject />
    </>
   
  )
};

export default App;

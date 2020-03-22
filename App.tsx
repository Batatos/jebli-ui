import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './views/HomeScreen';
import LoginScreen from './views/LoginScreen';
import AppContainer from './routes';

export default function App() {
  return (
    // <HomeScreen/>
    // <LoginScreen/>
    <AppContainer/>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

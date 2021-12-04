import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './Components/Routes';

export default function App() {
  return (

  
      <SafeAreaProvider>
        <Routes/>
      </SafeAreaProvider>
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

import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './screens/Login';
import RouteStack from './router/RouteStack';

const App = () => {
  return (
    <SafeAreaView style = {styles.body}>
      <RouteStack />

      <StatusBar backgroundColor={'#ff00c3'} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  }
});

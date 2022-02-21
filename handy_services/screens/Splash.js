import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {

    setTimeout(() => {
        navigation.navigate('Login');
    }, 2000);

  return (
    <SafeAreaView style={styles.body}>
      <View style={{flex: 1}} />
      <LottieView
        style={styles.lottie}
        source={require('../res/lottie/splash.json')}
        autoPlay
        loop
      />
      <View style={{flex: 1}} />
      <Image style={styles.name} source={require('../res/images/name.png')} />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  lottie: {
    height: 250,
  },

  name: {
    width: 200,
    height: 50,
    marginBottom: 50,
  },
});

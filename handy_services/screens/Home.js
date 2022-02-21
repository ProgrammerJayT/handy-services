import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';

const Home = ({navigation}) => {

  const gotoRequest = () => {
    navigation.navigate('Request');
  };

  return (
    <View style={styles.body}>
      <View style={{flex: 1}} />

      <TouchableOpacity style={styles.request_btn} onPress={gotoRequest}>
        <Text style={styles.request_txt}>Request Service</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.feedback_btn}>
        <Text style={styles.feedback_txt}>Write Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  request_btn: {
    backgroundColor: 'black',
    borderRadius: 20,
    width: '40%',
    marginBottom: 10,
  },

  request_txt: {
    color: 'white',
    padding: 10,
    alignSelf: 'center',
  },

  feedback_btn: {
    backgroundColor: '#ff00c3',
    borderRadius: 20,
    width: '40%',
    marginBottom: 20,
  },

  feedback_txt: {
    color: 'black',
    padding: 10,
    alignSelf: 'center',
  },
});

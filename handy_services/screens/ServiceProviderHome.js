import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ServiceProviderHome = ({navigation}) => {

    const gotoAddService = () => {
        navigation.navigate('AddService');
    }

  return (
    <View style={styles.body}>
      <View style={{flex: 1}} />
      <Image
        style={styles.login_image}
        source={require('../res/images/electricican.png')}
      />
      <View style={{flex: 1}} />
      <TouchableOpacity style={styles.request_btn} onPress = {gotoAddService}>
        <Text style={styles.request_txt}>Add Service</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.feedback_btn}>
        <Text style={styles.feedback_txt}>View Requests</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.request_btn}>
        <Text style={styles.request_txt}>View Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceProviderHome;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  request_btn: {
    backgroundColor: 'black',
    borderRadius: 20,
    width: '60%',
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
    width: '60%',
    marginBottom: 20,
  },

  feedback_txt: {
    color: 'black',
    padding: 10,
    alignSelf: 'center',
  },

  login_image: {
    width: 300,
    height: 300,
  },
});

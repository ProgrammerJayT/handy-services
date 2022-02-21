import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {openDatabase} from 'react-native-sqlite-storage';

const Login = () => {
  return (
    <SafeAreaView style={styles.body}>
      <TouchableOpacity style={styles.reg_btn}>
        <Text style={styles.reg_text}>Login as Service Provider</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reg_btn}>
        <Text style={styles.reg_text}>Login as Customer</Text>
      </TouchableOpacity>
      <View style={{flex: 1}} />
      <View style={styles.divider} />
      <TouchableOpacity style={styles.reg_btn}>
        <Text style={styles.reg_text}>Register new account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  divider: {
    width: '50%',
    height: 1,
    backgroundColor: '#3a3a3a',
    marginBottom: 20,
  },

  cust_btn: {
    width: '90%',
    backgroundColor: 'lightgreen',
  },

  serv_btn: {
      
  },

  reg_text: {
    color: '#ff00c3',
    fontWeight: 'bold',
    fontSize: 18,
  },
  reg_btn: {
    marginBottom: 20,
  },
});

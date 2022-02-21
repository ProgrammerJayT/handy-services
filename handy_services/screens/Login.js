import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
  Alert,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';
import LottieView from 'lottie-react-native';

const Login = ({navigation}) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('User? : ' + user);

  const gotoHome = () => {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.body}>
      <View style={{flex: 1}} />
      <LottieView
        style={styles.lottie}
        source={require('../res/lottie/login_animation.json')}
        autoPlay
        loop
      />

      <LottieView
        style={styles.auth}
        source={require('../res/lottie/email.json')}
        autoPlay
        loop
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="email address"
        keyboardType="email-address"
      />
      <LottieView
        style={styles.auth}
        source={require('../res/lottie/password.json')}
        autoPlay
        loop
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={{alignItems: 'center', marginTop: 20}}>
        <Text style={{color: '#3a3a3a', padding: 10}}>Recover password</Text>
      </TouchableOpacity>

      <View style={{flex: 1}} />
      <TouchableOpacity style={styles.submit} onPress = {gotoHome}>
        <Text style={styles.serv_text}>Login</Text>
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
    marginTop: 20,
  },

  serv_btn: {
    width: '70%',
    backgroundColor: 'black',
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },

  //Checked
  serv_text: {
    color: 'white',
    padding: 15,
    fontWeight: 'bold',
  },

  //Checked
  submit: {
    width: '50%',
    backgroundColor: '#ff00c3',
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },

  //Checked
  scroller: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
  },

  //Checked
  lottie: {
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  //Checked
  input: {
    height: 50,
    marginHorizontal: 20,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  //Checked
  auth: {
    height: 70,
    alignSelf: 'center',
  },
});

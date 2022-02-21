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

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, [user]);

  const SetProvider = () => {
    setUser('provider');
  };

  const SetCustomer = () => {
    setUser('customer');
  };

  const RegForm = () => {
    return (
      <View style={{width: '100%', flex: 1}}>
        <Text style={styles.reg_user}>
          {user.charAt(0).toUpperCase() + user.slice(1)} sign in
        </Text>
        <ScrollView contentContainerStyle={styles.scroller}>
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
            keyboardType='email-address'
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
          <TouchableOpacity style = {{alignItems: 'center', marginTop: 20}}>
            <Text style={{color: '#3a3a3a', padding: 10}}>Recover password</Text>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity style={styles.submit}>
          <Text style={styles.serv_text}>Submit</Text>
        </TouchableOpacity>
        <View style={{marginBottom: 20}} />
      </View>
    );
  };

  console.log('User? : ' + user);

  function handleBackButtonClick() {
    if (user == '') {
    } else {
      setUser('');
    }
    return true;
  }

  return (
    <SafeAreaView style={styles.body}>
      {user == 'provider' && RegForm()}

      {user == 'customer' && RegForm()}

      {user == '' && (
        <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
          <View style={{flex: 1}} />
          <TouchableOpacity style={styles.serv_btn} onPress={SetProvider}>
            <Text style={styles.serv_text}>Login as Service Provider</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cust_btn} onPress={SetCustomer}>
            <Text style={styles.cust_text}>Login as Customer</Text>
          </TouchableOpacity>
          <View style={{flex: 1}} />
          <View style={styles.divider} />
          <TouchableOpacity style={styles.reg_btn}>
            <Text style={styles.reg_text}>Register new account</Text>
          </TouchableOpacity>
        </View>
      )}
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

  cust_btn: {
    width: '70%',
    backgroundColor: '#ff00c3',
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },

  serv_btn: {
    width: '70%',
    backgroundColor: 'black',
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },

  reg_text: {
    color: '#ff00c3',
    fontWeight: 'bold',
    fontSize: 18,
  },
  reg_btn: {
    marginBottom: 20,
  },

  cust_text: {
    color: 'white',
    padding: 15,
    fontWeight: 'bold',
  },

  serv_text: {
    color: 'white',
    padding: 15,
    fontWeight: 'bold',
  },
  reg_user: {
    backgroundColor: '#3a3a3a',
    borderRadius: 5,
    color: 'white',
    fontSize: 20,
    padding: 10,
    marginTop: 10,
    alignSelf: 'center',
    width: '95%',
    textAlign: 'center',
  },

  submit: {
    width: '50%',
    backgroundColor: '#ff00c3',
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },

  scroller: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
  },

  lottie: {
    height: 250,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
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

  auth: {
    height: 70,
    alignSelf: 'center',
  },
});

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';

const Login = ({navigation}) => {
  const [user, setUser] = useState('');

  const SetProvider = () => {
    setUser('provider');
  };

  const SetCustomer = () => {
    setUser('customer');
  };

  const RegForm = () => {
    return (
      <View style={{width: '100%', flex: 1}}>
        <Text style={styles.reg_user}>Registering as a {user}</Text>
        <ScrollView contentContainerStyle={styles.scroller}></ScrollView>
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

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

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
    backgroundColor: 'black',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    color: 'white',
    fontSize: 20,
    padding: 10,
    marginTop: 10,
    alignSelf: 'flex-start',
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
      backgroundColor: '#f2f0f2',
      width: '95%',
      flex: 1,
      alignSelf: 'center',
      borderRadius: 10,
      marginTop: 10,
  }
});

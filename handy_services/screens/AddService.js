import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const AddService = () => {
  const [service, setService] = useState('');

  return (
    <View style={styles.body}>
      <View style={{flex: 1}} />
      <Text style = {{fontSize: 20, fontWeight: 'bold'}}>Type in service</Text>
      <TextInput
        style={styles.input}
        onChangeText={setService}
        value={service}
        multiline={true}
        maxLength={30}
      />

      <View style={{flex: 1}} />

      <TouchableOpacity style={styles.request_btn}>
        <Text style={styles.request_txt}>Add service</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddService;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 0.5,
    padding: 10,
    width: '80%',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },

  request_btn: {
    backgroundColor: 'black',
    borderRadius: 20,
    width: '60%',
    marginBottom: 20,
  },

  request_txt: {
    color: 'white',
    padding: 10,
    alignSelf: 'center',
  },
});

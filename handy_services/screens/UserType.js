import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const UserType = ({navigation}) => {

    const Provider = () => {
        navigation.navigate('ServiceProviderHome');
    }

  return (
    <View style = {styles.body}>
    <View style = {{flex: 1}}/>
    <Image style = {styles.login_image} source={require('../res/images/login.png')}/>
      <View style = {{flex: 1}}/>
      <Text style= {styles.login_head}>Login as</Text>
      <TouchableOpacity style={styles.request_btn}>
        <Text style={styles.request_txt}>Customer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.feedback_btn} onPress = {Provider}>
        <Text style={styles.feedback_txt}>Service Provider</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UserType;

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    login_head: {
        fontSize: 20,
        color: '#3a3a3a',
        marginBottom: 20,
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
    }
})
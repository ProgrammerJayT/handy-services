import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Request from '../screens/Request';
import CustomerHome from '../screens/CustomerHome';
import UserType from '../screens/UserType';
import ServiceProviderHome from '../screens/ServiceProviderHome';
import AddService from '../screens/AddService';

const Stack = createNativeStackNavigator();

function RouteStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CustomerHome" component={CustomerHome} />
        <Stack.Screen name="ServiceProviderHome" component={ServiceProviderHome} />
        <Stack.Screen name="Request" component={Request} />
        <Stack.Screen name="UserType" component={UserType} />
        <Stack.Screen name="AddService" component={AddService} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteStack;
import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import styles from './styles/MainStyle';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Principal from './screens/Principal';
import Card1 from './screens/Card1';
import Feed1 from './screens/Feed1';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} /> 
      <Stack.Screen name="Hospital São Pedro" component={Card1} />            
      <Stack.Screen name="Hospital Feed" component={Feed1} />                   
      
    </Stack.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



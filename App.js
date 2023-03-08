import React, { useState } from 'react';
import { View, Image,   StatusBar, SafeAreaView, } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import styles from './styles/MainStyle';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Principal from './screens/Principal';
import Card1 from './screens/Card1';
import Feed1 from './screens/Feed1';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Tabs() {
  return (
      <Tab.Navigator>
      <Tab.Screen name="Principal" component={Principal}/>    
      <Tab.Screen name="Feed1" component={Feed1} options={{ title: 'Hospital Feed' }}  />         
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />    
      <Stack.Screen name="Principal" component={Tabs} options={{ title: 'Principal' }} />    
      <Stack.Screen name="Card1" component={Card1} options={{ title: 'Hospital São Pedro' }} />            
      <Stack.Screen name="Feed1" component={Feed1} options={{ title: 'Hospital Feed' }}  />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}



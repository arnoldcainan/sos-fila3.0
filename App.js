import React, { useState } from 'react';
import { View, Image, StatusBar, SafeAreaView } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import styles from './styles/MainStyle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Principal from './screens/Principal';
import Card1 from './screens/Card1';
import Card2 from './screens/Card2';
import Card3 from './screens/Card3';
import Feed1 from './screens/Feed1';
import Feed2 from './screens/Feed2';
import Feed3 from './screens/Feed3';

import Cadastro from './screens/Cadastro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ title: 'Principal' }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: 'Cadastro' }}
        />
        <Stack.Screen
          name="Card1"
          component={Card1}
          options={{ title: 'Hospital São Pedro' }}
        />
        <Stack.Screen
          name="Feed1"
          component={Feed1}
          options={{ title: 'Hospital Feed' }}
        />
        <Stack.Screen
          name="Card2"
          component={Card2}
          options={{ title: 'Hospital Caridade' }}
        />
        <Stack.Screen
          name="Feed2"
          component={Feed2}
          options={{ title: 'Hospital Caridade' }}
        />
        <Stack.Screen
          name="Card3"
          component={Card3}
          options={{ title: 'UPA Saúde' }}
        />
        <Stack.Screen
          name="Feed3"
          component={Feed3}
          options={{ title: 'UPA Saúde' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

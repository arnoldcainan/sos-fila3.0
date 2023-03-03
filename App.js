import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import styles from './styles/MainStyle';




export default function App() {
  
  const [email, setEmail] = useState(null)
  const [password,setPassword] = useState(null)

  return (
    <View style={styles.container}>
           
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 200, height: 200}} />

      <Text h4 style={styles.text}> Bem vindo ao </Text>
      <Text h1 style={styles.text}>Sos filas</Text>
      <Input style={styles.inputView}
      placeholder="  E-mail"
      placeholderTextColor="#24757B"
      leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      onChangeText={value => setEmail(value)}
      keyboardType='email-address'
      />
      <Input style={styles.inputView}
      placeholder="Senha"
      placeholderTextColor="#24757B"
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />

      <Button style={styles.button} 
        title="ENTRAR"
               
        onPress={() => console.log('ENTROU')}
      />
      <Text style={styles.text}> Não tem uma conta? Cadastre-se </Text>
      <Text style={styles.text}> Modo anônimo </Text>

      <Text style={styles.text}>Desenvolvido por:</Text>
      <Text style={styles.text}>Fotos</Text>
      
            
    </View>
  );
}



import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import styles from '../styles/MainStyle';




export default function Login({ navigation }) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  //logica de login
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)

  const validar = ()=> {
    let error = false
    setErrorEmail(null)
    setErrorPassword(null)

    //verifica atraves de REGEX formatação do email (ex teste@teste.com)
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;



    if (!re.test(String(email).toLowerCase())){
      setErrorEmail('Preencha seu email corretamente')
      error = true
    }

     if (password == null){
      setErrorPassword('Preencha sua senha corretamente')
      error = true
    }

    
    return !error

  }
 

  const entrar = () => {
    if(validar())
    navigation.reset({
      index: 0,
      routes: [{ name: "Principal" }]
    })
  }

  return (
    <View style={styles.container}>

      <Image source={require('../logo/logo.png')} />

      <Text h4 style={styles.text}> Bem vindo ao </Text>
      <Text h1 style={styles.text}>Sos filas</Text>
      <Input style={styles.inputView}
        placeholder="  E-mail"
        placeholderTextColor="#24757B"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => {
        setEmail(value)
        setErrorEmail(null)
        }}
        keyboardType='email-address'
        errorMessage={errorEmail}
      />
      <Input style={styles.inputView}
        placeholder="Senha"
        placeholderTextColor="#24757B"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => {
          setPassword(value)
          setErrorPassword(null)
        }}
        secureTextEntry={true}
        errorMessage={errorPassword}
      />

      <Button style={styles.button}
        title="ENTRAR"

        onPress={() => entrar()}
      />
      <Text style={styles.text}> Não tem uma conta? Cadastre-se </Text>
      <Text style={styles.text}> Modo anônimo </Text>

      <Text style={styles.text}>Desenvolvido por:</Text>
      <Text style={styles.text}>Fotos</Text>


    </View>
  );
}
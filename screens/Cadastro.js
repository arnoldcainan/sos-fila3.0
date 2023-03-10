import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import styles from '../styles/MainStyle';




export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState(null)

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  
  
  
  //logica de login

  const [errorNome, setErrorNome] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)

  const validar = () => {
    let error = false
    setErrorEmail(null)
    setErrorPassword(null)
    setErrorNome(null)

    //verifica atraves de REGEX formatação do email (ex teste@teste.com)
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;



    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail('Preencha seu email corretamente')
      error = true
    }

    if (password == null) {
      setErrorPassword('Preencha sua senha corretamente')
      error = true
    }
    if (nome == null) {
        setErrorNome('Preencha seu nome corretamente')
        error = true
      }


    return !error

  }


  const entrar = () => {
    if (validar())
      navigation.reset({
        index: 0,
        routes: [{ name: "Principal" }]
      })
  }
  const cadastrar = () =>{
    navigation.navigate("Cadastro")
  }

  return (
    <View style={styles.container}>      
      
      <Image source={require('../logo/user.png')} />
      <Text h2 style={styles.text}> Crie sua Conta </Text>
      
      <Input style={styles.inputView}
        placeholder="  Seu nome"
        placeholderTextColor="#24757B"
        onChangeText={value => {
          setNome(value)
          setErrorNome(null)
        }}
        keyboardType='email-address'
        errorMessage={errorNome}
        />
      
      <Input style={styles.inputView}
        placeholder="  Seu e-mail"
        placeholderTextColor="#24757B"
        onChangeText={value => {
          setEmail(value)
          setErrorEmail(null)
        }}
        keyboardType='email-address'
        errorMessage={errorEmail}
        />

        <Input style={styles.inputView}
        placeholder="Sua senha"
        placeholderTextColor="#24757B"
        onChangeText={value => {
          setPassword(value)
          setErrorPassword(null)
        }}
        secureTextEntry={true}
        errorMessage={errorPassword}
        />

        <Input style={styles.inputView}
        placeholder="Confirmar senha"
        placeholderTextColor="#24757B"
        onChangeText={value => {
          setPassword(value)
          setErrorPassword(null)
        }}
        secureTextEntry={true}
        errorMessage={errorPassword}
        />

      

      <Button style={styles.button}
      
        title="Cadastrar"

        onPress={() => entrar()}
      />
      

      


    </View>
  );
}
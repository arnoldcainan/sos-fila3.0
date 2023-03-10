import React from "react";
import { View, Text, TextInput, Button } from 'react-native';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from "../firebaseConect";

export function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function createUser(){

        await createUserWithEmailAndPassword(auth, email, password);
        .then(value => {
            console.log('cadastrado com sucesso! /n' + value.user.uid);
        })
        .catch(error => console.log(error));
    };
    
    return (
 
        <View style={styles.container}>
        <Text>Firebase App</Text>
        <TextInput 
        placeholder="email"
        placeholderTextColor="#000000"
        value={email}
        onChangeText={value => setEmail(value)}
        style={styles.input}
        />
                <TextInput 
        placeholder="senha"
        placeholderTextColor="#000000"
        value={password}
        onChangeText={value => setPassword(value)}
        style={[styles.input, {marginBottom: 10}]}
        />
        <Button
        title="CADASTRAR"
        onPress={() => createUser()}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    input:{
        borderBottomWidht:1,
        borderBottomColor: '#313131',
        marginTop:5,
        width: '80',
        height: 50,
    },
})
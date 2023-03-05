import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';  //icone relogio,coracao
import { Entypo } from '@expo/vector-icons'; //icone local

const Principal = ({ navigation, route }) => {

  return (
  
     
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Card1')}>
          <Image style={styles.logo} source={require('../assets/favicon.png')} />
            </TouchableOpacity>
          <View>
           <Text style={styles.titulo }> Hospital São Pedro</Text>
            <View style={styles.relogio}>
              <Text style={styles.paragraph}> Tempo de espera <AntDesign name="clockcircle" size={15} color="black" /> 10 minutos  </Text>
            </View>
            <View style={styles.distancia}>
              <Text style={styles.paragraph}> Distancia              <Entypo name="location-pin" size={20} color="black" />10 minutos  </Text>
            </View>
            <View style={styles.coracao}>
              <AntDesign name="hearto" size={20} color="black"/>
            </View>
          </View>
        </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    backgroundColor:'#BFEDFA',
    marginBottom: 500,
    shadowColor: '#444',
    shadowOpacity: 2.5,
    shadowRadius: 7,
  },
  titulo: {
    textAlign:'center',
    textItems: 'center',
    justifyContent: 'center',
    padding: 30,
    fontWeight: 'bold',
    marginTop: -40,
  },
  paragraph: {
    textAlign:'right',
    marginTop: 0,
    fontSize: 12,
    fontWeight: 'bold',
  },
  //icone relogio
  relogio:{
    color: "blue",
    marginBottom: 10,
  //icone local
  },
  distancia:{
    color: "blue",
},
  logo: {
    height: 100,
    width: 100,
  },
    coracao:{
    marginTop: 30,
    marginLeft: 180,
},
});

export default Principal
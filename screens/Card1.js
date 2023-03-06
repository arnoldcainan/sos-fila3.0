import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';  //icone relogio,coracao
import { Entypo } from '@expo/vector-icons'; //icone local
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


const Card1 = ({ navigation, route }) => {

  return (


    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Card1')}>
        <Image style={styles.logo} source={require('../assets/favicon.png')} />
      </TouchableOpacity>
      <View>
        <Text style={styles.titulo}> Hospital São Pedro</Text>
        <View style={styles.relogio}>
          <Text style={styles.paragraph}> Tempo de espera <AntDesign name="clockcircle" size={15} color="black" /> 10 minutos  </Text>
        </View>
        <View style={styles.distancia}>
          <Text style={styles.paragraph}> Distancia              <Entypo name="location-pin" size={20} color="black" />10 minutos  </Text>
        </View>
        <View style={styles.especialidades}>
          <Text><MaterialCommunityIcons name="face-woman" size={24} color="black" /> Especialidades</Text>
        </View>
        <View style={styles.agendar}>
          <Text><AntDesign name="calendar" size={24} color="black" /> Agendar atendimento</Text>
        </View>
        <View style={styles.comentario}>
          <Text><EvilIcons name="comment" size={24} color="black" /> Comentario</Text>
        </View>
        <View style={styles.comoChegar}>
          <Text><Entypo name="location-pin" size={24} color="black" /> Como chegar</Text>
        </View>
        <View style={styles.contato}>
          <Text><AntDesign name="phone" size={24} color="black" /> Contato</Text>
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
    backgroundColor: '#BFEDFA',
    marginBottom: 500,
    shadowColor: '#444',
    shadowOpacity: 2.5,
    shadowRadius: 7,
  },
  titulo: {
    textAlign: 'center',
    textItems: 'center',
    justifyContent: 'center',
    padding: 30,
    fontWeight: 'bold',
    marginTop: -40,
  },
  paragraph: {
    textAlign: 'right',
    marginTop: 0,
    fontSize: 12,
    fontWeight: 'bold',
  },
  //icone relogio
  relogio: {
    color: "blue",
    marginBottom: 10,
    //icone local
  },
  distancia: {
    color: "blue",
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: -160,
  },
  especialidades: {
    alignItems: 'row',
    marginTop: 80,
    marginLeft: -100,
  },
  agendar: {
    marginLeft: -100,
  },
  comentario: {
    marginLeft: -100,
  },
  comoChegar: {
    marginLeft: -100,
  },
  contato: {
    marginLeft: -100,
  },
});

export default Card1
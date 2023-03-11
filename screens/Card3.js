import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; //icone relogio,coracao
import { Entypo } from '@expo/vector-icons'; //icone local
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Text, Card, Button } from '@rneui/themed';

const Card3 = ({ navigation, route }) => {
  return (
    <ScrollView>
      <Card>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Feed3')}>
            <Image
              style={styles.logo}
              source={require('../logo/hospital/Hospital3.jpg')}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.titulo}>{' UPA Saúde '}</Text>
            <View style={styles.relogio}>
              <Text style={styles.paragraph}>
                {' Tempo de espera '}
                <AntDesign name="clockcircle" size={15} color="black" /> {' 100 min '}
              </Text>
            </View>
            <View style={styles.distancia}>
              <Text style={styles.paragraph}>
                {' Distancia '}
                <Entypo name="location-pin" size={20} color="black" />
                {' 6.5 km '}
              </Text>
            </View>
            <View style={styles.icon}>
              <Text>
                <MaterialCommunityIcons
                  name="face-woman"
                  size={24}
                  color="black"
                />{' Especialidades '}

              </Text>
            </View>
            <View style={styles.icon}>
              <Text>
                <AntDesign name="calendar" size={24} color="black" /> {' Agendar atendimento '}
              </Text>
            </View>
            <View style={styles.icon}>
              <Text>
                <EvilIcons name="comment" size={24} color="black" /> {' Comentário '}
              </Text>
            </View>
            <View style={styles.icon}>
              <Text>
                <Entypo name="location-pin" size={24} color="black" /> {' Como chegar '}
              </Text>
            </View>
            <View style={styles.icon}>
              <Text>
                <AntDesign name="phone" size={24} color="black" /> {' Contato '}
              </Text>
            </View>
          </View>
        </View>
      </Card>
      <Text
        style={{
          marginBottom: 10,
          fontWeight: 'bold',
          fontSize: 14,
          marginLeft: 40,
        }}>
        {' FACILIDADES '}

      </Text>
      <View style={styles.icon2}>
        <Text>
          <Feather name="coffee" size={24} color="black" /> {' Lanchonete '}
        </Text>
      </View>
      <View style={styles.icon2}>
        <Text>
          <AntDesign name="car" size={24} color="black" /> {' Estacionamento - PAGO '}
        </Text>
      </View>
      <View style={styles.icon2}>
        <Text>
          <AntDesign name="wifi" size={24} color="black" /> {' Wi-Fi-GRATUITO '}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#D4CB7D',
    shadowColor: '#444',
    shadowOpacity: 2.5,
    shadowRadius: 7,
  },
  titulo: {
    textAlign: 'center',
    justifyContent: 'center',
    padding: 30,
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: -30,
    marginTop: -30,
  },
  paragraph: {
    textAlign: 'right',
    marginTop: -10,
    fontSize: 10,
    fontWeight: 'bold',
  },
  //icone relogio
  relogio: {
    marginBottom: 10,
    //icone local
  },
  distancia: {
    marginBottom: 10,
  },
  logo: {
    height: 90,
    width: 120,
    marginTop: -140,
  },
  icon: {
    
    marginTop: 10,
    marginLeft: -120,
  },
  icon2: {
    marginTop: 10,
    marginLeft: 50,
  },
});

export default Card3;

import * as React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; //icone relogio,coracao
import { Entypo } from '@expo/vector-icons'; //icone local
import { Text, Card, Button } from '@rneui/themed';

const Feed1 = ({ navigation, route }) => {
  return (
    <ScrollView>
      <Card>
        <Text style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10, fontWeight: 'bold' }}>
          <Image style={styles.image}
            source={require('../logo/joel.png')}
          />  Joel Miller</Text>
        <Card.Divider />
        <View style={styles.container}>
          <View>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Card1')}>
              <Image
                style={styles.logo}
                source={require('../logo/Estacionamento.jpg')}
              />
              <View></View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Card1')}>
              <Image
                style={styles.logo}
                source={require('../logo/Recepcao.jpg')}
              />
            </TouchableOpacity>
            <View></View>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Card1')}>
              <Image
                style={styles.logo}
                source={require('../logo/Vazio.jpg')}
              />
            </TouchableOpacity>
            <View></View>
          </View>
        </View>
        <Text style={{ marginBottom: 10, fontWeight: 'bold', }}> <Entypo name="location-pin" size={20} color="black" />Hospital das clinicas</Text>
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component
          structure than actual design.
        </Text>
        <Text style={{ marginBottom: 10, fontWeight: 'bold', }}>  <AntDesign name="like2" size={20} color="black" /> 19  <FontAwesome name="commenting" size={24} color="black" /> 4</Text>
      </Card>
      <Card>
        <Text style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10, fontWeight: 'bold' }}>
          <Image style={styles.image}
            source={require('../logo/ellie.png')}
          />  Ellie Williams</Text>
        <Card.Divider />
        <View style={styles.container}>
          <View>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Card2')}>
              <Image
                style={styles.logo}
                source={require('../logo/Lanchonete.jpg')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Card2')}>
              <Image
                style={styles.logo}
                source={require('../logo/Jardim.jpg')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Card2')}>
              <Image
                style={styles.logo}
                source={require('../logo/Kids.jpg')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ marginBottom: 10, fontWeight: 'bold', }}> <Entypo name="location-pin" size={20} color="black" />Hospital da Criança</Text>
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component
          structure than actual design.
        </Text>
        <Text style={{ marginBottom: 10, fontWeight: 'bold', }}>  <AntDesign name="like2" size={20} color="black" /> 15  <FontAwesome name="commenting" size={24} color="black" /> 3</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#444',
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  logo: {
    marginRight: 10,
    height: 80,
    width: 100,

  },
  image: {
    height: 33,
    width: 31,
    marginBottom: -10,
    marginLeft: 10,
  },
},
);

export default Feed1;
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';  //icone relogio,coracao
import { Entypo } from '@expo/vector-icons'; //icone local


const Principal = ({ navigation, route }) => {
  return (

    <ScrollView>

      <View style={styles.container}>
        <Card>
          <TouchableOpacity
            onPress={() => navigation.navigate('Card1')}>
            <Image
              style={styles.logo}
              source={require('../logo/hospital/Hospital.jpg')} />
            <View>
              <Text style={styles.titulo}>Hospital São Pedro</Text>
            </View>
            <View style={styles.relogio}>
              <Text style={styles.paragraph}>{' Tempo de espera '}
                <AntDesign name="clockcircle" size={15} color="black" />{' 10 min '}</Text>
            </View>
            <View style={styles.distancia}>
              <Text style={styles.paragraph}>{' Distância '}
                <Entypo name="location-pin" size={20} color="black" />{' 10 km '} </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.coracao}>
            <AntDesign name="hearto" size={20} color="red" />
          </View>
        </Card>
        <Card>
          <TouchableOpacity
            onPress={() => navigation.navigate('Card2')}>
            <Image
              style={styles.logo}
              source={require('../logo/hospital/Hospital2.jpg')} />
            <View>
              <Text style={styles.titulo}>Hospital Caridade</Text>
            </View>
            <View style={styles.relogio}>
              <Text style={styles.paragraph}>{' Tempo de espera '}
                <AntDesign name="clockcircle" size={15} color="black" />{' 10 min '}</Text>
            </View>
            <View style={styles.distancia}>
              <Text style={styles.paragraph}>{' Distância '}
                <Entypo name="location-pin" size={20} color="black" />{' 10 km '} </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.coracao}>
            <AntDesign name="hearto" size={20} color="red" />
          </View>
        </Card>
        <Card>
          <TouchableOpacity
            onPress={() => navigation.navigate('Card3')}>
            <Image
              style={styles.logo}
              source={require('../logo/hospital/Hospital3.jpg')} />
            <View>
              <Text style={styles.titulo}>UPA Saude</Text>
            </View>
            <View style={styles.relogio}>
              <Text style={styles.paragraph}>{' Tempo de espera '}
                <AntDesign name="clockcircle" size={15} color="black" />{' 10 min '}</Text>
            </View>
            <View style={styles.distancia}>
              <Text style={styles.paragraph}>{' Distância '}
                <Entypo name="location-pin" size={20} color="black" />{' 10 km '} </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.coracao}>
            <AntDesign name="hearto" size={20} color="red" />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 3,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'column',
    backgroundColor: '#BFEDFA',
    shadowColor: '#444',
    shadowOpacity: 2.5,
    shadowRadius: 7,
    justifyContent: 'space-between',


  },
  titulo: {
    textAlign: 'right',
    justifyContent: 'center',
    padding: 10,
    fontWeight: 'bold',
    marginTop: -110,
  },
  paragraph: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -60,

  },
  //icone relogio
  relogio: {
    color: "blue",
    marginBottom: 15,
    //icone local
  },
  distancia: {
    color: "blue",
  },
  logo: {
    height: 120,
    width: 140,
  },
  coracao: {
    marginTop: 0,
    alignItems: 'flex-end',

  },
});

export default Principal;
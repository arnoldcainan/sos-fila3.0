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
      <Text style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10, fontWeight: 'bold' }}>
        <Image style={styles.image}
          source={require('../logo/joel.png')}
        />  Joel Miller</Text>
      <Card.Divider />
      <View style={styles.container}>
        <Card>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.navigate('Card1')}>
            <Image
              style={styles.logo}
              source={require('../assets/icon.png')}
            />
            <View></View>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.navigate('Card1')}>
            <Image
              style={styles.logo}
              source={require('../assets/icon.png')}
            />
          </TouchableOpacity>
          <View></View>
        </Card>

        <Card>
          <TouchableOpacity onPress={() => navigation.navigate()}>
            <Image
              style={styles.logo}
              source={require('../assets/icon.png')}
            />
          </TouchableOpacity>
          <View></View>
        </Card>
      </View>
      <Text style={{ marginBottom: 10, fontWeight: 'bold', }}> <Entypo name="location-pin" size={20} color="black" />Hospital das clinicas</Text>
      <Text style={{ marginBottom: 10 }}>
        The idea with React Native Elements is more about component
        structure than actual design.
      </Text>
      <Text style={{ marginBottom: 10, fontWeight: 'bold', }}>  <AntDesign name="like2" size={20} color="black" /> 30  <FontAwesome name="commenting" size={24} color="black" /> 4</Text>
      <Card.Divider />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 50,
    width: 50,
  },
  image: {
    height: 33,
    width: 31,
    marginBottom: -10,
    marginLeft: 10,
  }
},
);

export default Feed1;
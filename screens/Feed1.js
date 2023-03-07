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
    <>
      <ScrollView>
        <Card>
          <Text
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginTop: 20,
              marginBottom: 20,
              fontWeight: 'bold',
            }}>
            <Image
              style={styles.image}
              source={require('../assets/joel.png')}
            />{' '}
            Joel Miller
          </Text>

          <Card.Divider />
          <View style={styles.container}>
            <View>
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.navigate('Card1')}>
                <Image
                  style={styles.logo}
                  source={require('../assets/snack-icon.png')}
                />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.navigate('Card1')}>
                <Image
                  style={styles.logo}
                  source={require('../assets/snack-icon.png')}
                />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate()}>
                <Image
                  style={styles.logo}
                  source={require('../assets/snack-icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={{ marginTop: 10, marginBottom: 10, fontWeight: 'bold' }}>
            {' '}
            <Entypo name="location-pin" size={20} color="black" />
            Hospital das clinicas
          </Text>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>
            {' '}
            <AntDesign name="like2" size={20} color="black" /> 30{' '}
            <FontAwesome name="commenting" size={24} color="black" /> 4
          </Text>
        </Card>
        <Card>
          <Text
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginTop: 20,
              marginBottom: 20,
              fontWeight: 'bold',
            }}>
            <Image
              style={styles.image}
              source={require('../assets/joel.png')}
            />{' '}
            Joel Miller
          </Text>

          <Card.Divider />
          <View style={styles.container}>
            <View>
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.navigate('Card1')}>
                <Image
                  style={styles.logo}
                  source={require('../assets/snack-icon.png')}
                />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.navigate('Card1')}>
                <Image
                  style={styles.logo}
                  source={require('../assets/snack-icon.png')}
                />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate()}>
                <Image
                  style={styles.logo}
                  source={require('../assets/snack-icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={{ marginTop: 10, marginBottom: 10, fontWeight: 'bold' }}>
            {' '}
            <Entypo name="location-pin" size={20} color="black" />
            Hospital das clinicas
          </Text>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>
            {' '}
            <AntDesign name="like2" size={20} color="black" /> 30{' '}
            <FontAwesome name="commenting" size={24} color="black" /> 4
          </Text>
        </Card>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  logo: {
    height: 50,
    width: 50,
  },
  image: {
    height: 35,
    width: 25,
    marginBottom: -10,
    marginLeft: 10,
  },
});

export default Feed1;

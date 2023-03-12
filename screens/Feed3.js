import * as React from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Image,
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
                        source={require('../logo/pessoas/Wilson Smith.png')} />  Wilson Smith </Text>
                <Card.Divider />
                <View style={styles.container}>
                    <View>
                        <Image
                            style={styles.logo}
                            source={require('../logo/fotos/Estacionamento.jpg')} />
                    </View>
                    <View>
                        <Image
                            style={styles.logo}
                            source={require('../logo/fotos/Recepcao.jpg')} />
                    </View>
                    <View>
                        <Image
                            style={styles.logo}
                            source={require('../logo/fotos/Vazio.jpg')} />
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
                        source={require('../logo/pessoas/Picasso.png')} />  Picasso </Text>
                <Card.Divider />
                <View style={styles.container}>
                    <View>
                        <Image
                            style={styles.logo}
                            source={require('../logo/fotos/Lanchonete.jpg')} />
                    </View>
                    <View>
                        <Image
                            style={styles.logo}
                            source={require('../logo/fotos/Jardim.jpg')} />
                    </View>
                    <View>
                        <Image
                            style={styles.logo}
                            source={require('../logo/fotos/Kids.jpg')} />
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
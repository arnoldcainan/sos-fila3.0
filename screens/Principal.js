import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // icone local
import { AntDesign } from '@expo/vector-icons';  //icone relogio


const Principal = ({ navigation, route }) => {
 return (

    <View >
     <Text>Hello</Text>
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#E0FFFF',
  },
  //espaço texto
  paragraph: {
    margin: 10,
    marginTop: 30,
    marginBottom: 5,
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  //texto
  texto:{
    paddingTop: 0,
    margin: 2,
    marginTop: 10,
    marginBottom: 4,
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  //imagems
  logo: {
    left:-70,
    height: 100,
    width: 100,    
    marginVertical:5,
    marginBottom: 5,
  },
  //icones
  viewIcon: { 
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    marginTop: -170,
    marginBottom: 20,
    marginRight:-200,
},
});

export default Principal
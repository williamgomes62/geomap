import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';

function Home() {
  /*const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Orders');
  }*/
  return (
    <>
      <Header />
        <View style={styles.container}>
          <Image 
          style={styles.image}
          source={require('../assets/logo.png')} 
          />
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOpacity}>
              <Text style={styles.buttonTextOpacity}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  buttonView: {
    paddingTop: 150
  },
  button: {
    backgroundColor: '#E33D4B',
    margin: 2.5,
    borderRadius: 30,
    alignContent: 'center'
  },
  buttonOpacity: {
    backgroundColor: '#FFF',
    margin: 2.5,
    borderRadius: 30,
   borderColor: '#E33D4B',
    borderWidth: 1,
    alignContent: 'center'
  },
  buttonText: {
    paddingTop: 12.5,
    paddingBottom: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    textAlign: 'center',
    width: 170,
    height: 50
  },
  buttonTextOpacity: {
    paddingTop: 12.5,
    paddingBottom: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#E33D4B',
    letterSpacing: -0.24,
    textAlign: 'center',
    width: 170,
    height: 50
  },
  image: {
    marginTop: 100,
    alignContent: 'center',
    alignItems: 'center'
  },
});

export default Home;
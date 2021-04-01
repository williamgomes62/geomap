import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import Header from '../Header';

function Register() {
  return (
    <>
      <Header />
      <KeyboardAvoidingView  style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.textTop}>Informe seus dados:</Text>
          <Text style={styles.textForm}>Nome:</Text>
            <TextInput
              style={styles.input}
              placeholder="Jane Silva"
              autoCorrect={false}
              onChangeText={()=> {}}
            />
          <Text style={styles.textForm}>Email:</Text>
            <TextInput
            style={styles.input}
            placeholder="jane@example.com"
            autoCorrect={false}
            onChangeText={()=> {}}
            />
          <Text style={styles.textForm}>Senha:</Text>
              <TextInput
              style={styles.input}
              placeholder="********"
              autoCorrect={false}
              onChangeText={()=> {}}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView> 
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%'
  },
  input: {
    fontSize: 24,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    width: '95%',
    marginBottom: 10,
    padding: 10
  },
  button: {
    backgroundColor: '#E33D4B',
    width: 170,
    height: 50,
    margin: 3,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlignVertical: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24
  },
  textTop: {
    fontSize: 30,
    paddingBottom: 0
  },
  textForm: {
    fontSize: 24,
    paddingRight: 250
  },

});

export default Register;
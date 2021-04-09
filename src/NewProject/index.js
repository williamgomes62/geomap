import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import Header from '../Header';

function NewProject() {

  return (
    <>
      <Header />
      <KeyboardAvoidingView  style={styles.background}>
        <View style={{backgroundColor: '#FFF', alignItems: 'center'}}>
          <Text style={styles.text}>Novo Projeto</Text>
        </View>

        <View style={styles.container}>
          <Text style={{fontSize: 24, paddingRight: 250}}>Nome:</Text>
          <TextInput
          style={styles.input}
          placeholder=""
          autoCorrect={false}
          onChangeText={()=> {}}
          />
          <Text style={{fontSize: 24, paddingRight: 133}}>Ponto de partida:</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
            style={styles.inputStartPoint}
            placeholder="Latitude"
            autoCorrect={false}
            onChangeText={()=> {}}
            />
            <TextInput
            style={styles.inputStartPoint}
            placeholder="Longitude"
            autoCorrect={false}
            onChangeText={()=> {}}
            />
          </View>

          <Text style={{fontSize: 24, paddingRight: 195}}>Referência:</Text>
          <TextInput
          style={styles.input}
          placeholder=""
          autoCorrect={false}
          onChangeText={()=> {}}
          />
          <Text style={{fontSize: 24, paddingRight: 258}}>Raio:</Text>
          <TextInput
          style={styles.input}
          placeholder=""
          autoCorrect={false}
          onChangeText={()=> {}}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CRIAR</Text>
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
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 35
  },
  input: {
    fontSize: 24,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    width: '95%',
    marginBottom: 10,
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

  },
  inputStartPoint: {
    fontSize: 24,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    paddingLeft: 55,

    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12
  },
  button: {
    backgroundColor: '#E33D4B',
    width: 170,
    height: 50,
    margin: 3,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%'
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
    paddingBottom: 50
  },
  textForm: {
    fontSize: 24,
    paddingRight: 100
  },
});
export default NewProject;
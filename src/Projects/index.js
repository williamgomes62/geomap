import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../Header';
import ProjectCard from '../ProjectCard/index';

function Projects() {

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Meus Projetos</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NOVO PROJETO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cards}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </View>
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
  },
  cards: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 35
  },
  button: {
    backgroundColor: '#E33D4B',
    width: 170,
    height: 50,
    margin: 3,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    margin: 10
  },
  buttonText: {
    textAlignVertical: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24
  }
});
export default Projects;

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Header() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Geomap</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E33D4B',
    height: 50,
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#FFF',
    fontFamily: 'OpenSans_700Bold'
  }
});

export default Header;

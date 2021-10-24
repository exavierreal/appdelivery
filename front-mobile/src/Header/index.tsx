import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>App Delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6C63FF',
    height: 115,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#FFF',
    marginLeft: 15,
    fontFamily: 'OpenSans_700Bold'
  }
});

export default Header;
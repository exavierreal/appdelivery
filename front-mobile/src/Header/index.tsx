import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {StackNavigationProp} from "@react-navigation/stack"
import {RootStackParamList} from "../types"

type HomeNavigationType = StackNavigationProp<RootStackParamList, "Home">

function Header() {
  const navigation = useNavigation<HomeNavigationType>();

    const handleOnPress = () => {
      navigation.navigate('Home');
    }
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>App Delivery</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6C63FF',
    height: 80,
    paddingTop: 20,
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

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';

function Home() {
  const navigation = useNavigation<any>();

    const handleOnPress = () => {
      navigation.navigate('Orders');
    }

  return (
    <>
    <Header />
    <View style={styles.container}>
      <Image source={require('../assets/deliveryman.png')} />
      <Text style={styles.title}> Acompanhe a entrega de {'\n'} seu pedido em tempo real!</Text>
      <Text style={styles.subTitle}> Receba todos os seus pedidos com {'\n'} um simples clique.</Text>
    </View>
    <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleOnPress}>
            <Text style={styles.buttonText}>VER PEDIDOS</Text>
        </RectButton>
    </ View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
          marginTop: '2%',
          alignItems: 'center'
        },
        title: {
          color: '#263238',
          fontSize: 20,
          lineHeight: 35,
          fontWeight: 'bold',
          marginTop: 15,
          textAlign: 'center'
        },
        subTitle: {
          color: '#9E9E9E',
          fontSize: 16,
          marginTop: 15,
          lineHeight: 22,
          textAlign: 'center'
        },
        footer: {
          marginTop: '5%',
          alignItems: 'center'
        },
        button: {
          backgroundColor: '#5436CC',
          flexDirection: 'row',
          borderRadius: 10
        },
        buttonText: {
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 50,
          paddingRight: 50,
          fontWeight: 'bold',
          fontSize: 18,
          color: '#FFF',
          letterSpacing: -0.24
        }
      }
);

export default Home;
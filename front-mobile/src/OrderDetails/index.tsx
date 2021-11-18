import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack'
import { StyleSheet, View, Text, Alert, Linking } from 'react-native';
import Header from '../Header';
import { Order, RootStackParamList } from '../types';
import OrderCard from '../OrderCard';
import { RectButton } from 'react-native-gesture-handler';
import { confirmDelivery } from '../api';

type OrdersNavigationType = StackNavigationProp<RootStackParamList, 'Orders'>;

type Props = {
  route: {
    params: {
      order: Order;
    }
  }
}

function OrderDetails({route}: Props) {
  const { order } = route.params;
  const navigation = useNavigation<OrdersNavigationType>();

  const handleOnCancel = () => {
    navigation.navigate('Orders');
  }

  const handleConfirmDelivery = () => {
    confirmDelivery(order.id)
      .then(() => {
        Alert.alert(`Pedido ${order.id} confirmado com sucesso!`);
        navigation.navigate('Orders');
      })
      .catch(() => {
        Alert.alert(`Ocorreu um erro ao confirmar o pedido ${order.id}`);
      })
  }

  const handleStartNavigator =() => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);
  }

  return (
    <>
    <Header />
    <View style={styles.container}>
      <OrderCard order={order}/>
      <RectButton style={styles.button}onPress={handleStartNavigator}>
        <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
      </RectButton>
      <RectButton style={styles.button}onPress={handleConfirmDelivery}>
        <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
      </RectButton>  
      <RectButton style={styles.button} onPress={handleOnCancel}>
        <Text style={styles.buttonText}>CANCELAR</Text>
      </RectButton>      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  button: {
    backgroundColor: '#5436CC',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    fontFamily: 'OpenSans_700Bold'
  }
});

export default OrderDetails;

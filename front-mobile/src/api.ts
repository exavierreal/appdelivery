import axios from "axios";

const API_URL = 'https://tcc-appdelivery.herokuapp.com'


export function fetchOrders(){
    return axios.get<any>(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number) {
   return axios.put<any>(`${API_URL}/orders/${orderId}/delivered`)
}
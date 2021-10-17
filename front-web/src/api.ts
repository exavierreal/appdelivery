import axios from "axios"
import { OrderPayload as OrderPayload, OrderResponse, Product } from "./Orders/types";

const API_URL = 'https://rbettini-sds2.herokuapp.com';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts() {
    return axios.get<Product[]>(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string) {
    console.log(mapboxToken)
    return axios.get<any>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=pk.eyJ1IjoiYmV0dGluaSIsImEiOiJja3V1Z3l5MHA1ejlyMm9xam83em54cWhwIn0.sx2GlIDM5AOzKxbzOXLE4g`)
}

export function saveOrder(payload: OrderPayload){
    return axios.post<OrderResponse>(`${API_URL}/orders`, payload);
}
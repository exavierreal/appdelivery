export type Order  ={
    id: number;
    address: string;
    latitude: number;
    longitude: number;
    moment: string;
    status: string;
    total: number;
    products: Product[];           
}

export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export type RootStackParamList={
    Header: undefined;
    Home: undefined;
    OrderDetails: { order: Order } | undefined;
    Orders: undefined;
}
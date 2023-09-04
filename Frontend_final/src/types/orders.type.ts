export interface IGetAllOrder{
    id: number;
    userId: number;
    dateTime: string;
    status: string;
}

export interface IOrderProduct {
    productOrders: ProductOrder[];
}

interface ProductOrder {
    productId: number;
    productname: string;
    image: string;
    quantity: number;
    price: number;
}

import { AxiosResponse } from 'axios';
import { axiosOrderInstance } from '../config/http.config';
import { IOrder, IOrderProduct } from '../types/order.type';


class OrderService {
    getAllOrder(): Promise<AxiosResponse<IOrder[]>> {
        return axiosOrderInstance.get('/orders')
    }
    createOrder(body: IOrderProduct) {
        return axiosOrderInstance.post(`orders/create`, body)
    }
}

export const orderService = new OrderService()

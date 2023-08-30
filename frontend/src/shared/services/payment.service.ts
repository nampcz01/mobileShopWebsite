import { axiosOrderInstance, axiosPaymentInstance } from '../config/http.config';
import { ICheckBalanceAndPay } from '../types/payment.type';


class PaymentService {
    checkBalance(body:ICheckBalanceAndPay) {
        return axiosPaymentInstance.post("/payments/accounts/checkBalance/", body)
    }
    // pay(orderId: number) {
    //     return axiosOrderInstance.post(`/orders/pay?orderId=${orderId}`)
    // }
}

export const paymentService = new PaymentService()

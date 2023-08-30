import { axiosPaymentInstance } from '../config/http.config';
import { IRecharge, ITransaction } from '../types/transaction.type';


class TransactionService {
    getAllTransaction(): Promise<ITransaction[]> {
        return axiosPaymentInstance.get('/payments/transactions/')
    }
    getTransactionByUserId(id: number): Promise<ITransaction[]> {
        return axiosPaymentInstance.get(`/payments/transaction/${id}`)
    }
    rechargeMoney(body:IRecharge) {
        return axiosPaymentInstance.post("/payments/accounts/recharge", body)
    }
}

export const transactionService = new TransactionService()

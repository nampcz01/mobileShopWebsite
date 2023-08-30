import { axiosPaymentInstance } from '../config/http.config';
import { IAccount, IAccountAdd } from '../types/account.type';


class AccountService {
    getAllAccount(): Promise<IAccount[]> {
        return axiosPaymentInstance.get('/payments/accounts/')
    }
    getAccountByUserId(id: number): Promise<IAccount> {
        return axiosPaymentInstance.get(`/payments/accounts/${id}`)
    }
    createAccount(body: IAccountAdd) {
        return axiosPaymentInstance.post("/payments/accounts/create", body)
    }
}

export const accountService = new AccountService()

import axios from "axios";
import { IRechargeMoney } from "../types/recharge.type";

//admin 
export const getAllTransaction = async () => {
    return await axios.get("localhost:9000/api/payments/transactions/", {
        headers: {
            'Authorization': 'Bearer ' + "validToken()"
        }
    }).catch((e) => { throw e.toJSON() });
}

export const getAllTransactionByUserId = async ({userId} : {userId: number}) => {
    return await axios.get(`localhost:9000/api/payments/transactions/${userId}`, {
        headers: {
            'Authorization': 'Bearer ' + "validToken()"
        }
    }).catch((e) => { throw e.toJSON() });
}

export const rechargeMoneyForAccount = async(bodyRecharge : IRechargeMoney)=>{
    return await axios.post("localhost:9000/api/payments/accounts/recharge", {...bodyRecharge}, {
        headers: {
            'Authorization': 'Bearer ' + "validToken()"
        }
    }).catch((e) => { throw e.toJSON() });
}
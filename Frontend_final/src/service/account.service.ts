
import axios from "axios";
import { IAccountAdd } from "../types/account.type";

//add and get all account


export const getAllAccount = async () => {
    return await axios.get("localhost:9000/api/payments/accounts/", {
        headers: {
            'Authorization': 'Bearer ' + "validToken()"
        }
    }).catch((e) => { throw e.toJSON() });
}

export const getAllAccountByUserId = async ({userId} : {userId: number}) => {
    return await axios.get(`localhost:9000/api/payments/accounts/${userId}`, {
        headers: {
            'Authorization': 'Bearer ' + "validToken()"
        }
    }).catch((e) => { throw e.toJSON() });
}

export const addAccount = async(bodyAccount : IAccountAdd)=>{
    return await axios.post("localhost:9000/api/payments/accounts/create", {...bodyAccount}, {
        headers: {
            'Authorization': 'Bearer ' + "validToken()"
        }
    }).catch((e) => { throw e.toJSON() });
}
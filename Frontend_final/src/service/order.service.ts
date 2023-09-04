import axios from "axios"
import { IOrderProduct } from "../types/orders.type";
//admin
export const getAllOrder = async () => {
    return await axios.get("localhost:9000/api/orders/", {
        headers: {
            'Authorization': 'Bearer ' + "validToken()"
        }
    }).catch((e) => { throw e.toJSON() });
}
//customer
export const createOrders = async (ojbNewOrder : IOrderProduct) => {
    return await axios.post("localhost:9000/api/orders/create", {...ojbNewOrder},{
        headers: {
            'Authorization': 'Bearer ' + "validToken()"
        }
    }).catch((e) => { throw e.toJSON() });
}

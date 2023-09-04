import axios from "axios"
import { IProductAdd } from "../types/product.type";

export const getAllProducts = async () => {
    return await axios.get("http://localhost:9001/api/products").catch((e) => { throw e.toJSON() });
}

export const getProductById = async ({ productId }: { productId: number }) => {
    return await axios.get(`http://localhost:9001/api/products/${productId}`).catch((e) => { throw e.toJSON() });
}

//admin
export const addProduct = async (productInfo: IProductAdd) => {
    return await axios.post("http://localhost:9001/api/products/createFull", { ...productInfo }, {
        headers: {
            'Authorization': 'Bearer ' + "validToken()"
        }
    }).catch((e) => { throw e.toJSON() });
}

export const getListManufacture = async () => {
    return await axios.get("http://localhost:9001/api/products/getListManufactor").catch((e) => { throw e.toJSON() });
}

export const searchProductByName = async ({ productName, abortController}: { productName: string, abortController: any}) => {
    return await axios.get("http://localhost:9001/api/products/search", { params: { keywork: productName }, signal: abortController}).catch((e) => { throw e.toJSON() });
}

export const filterProductByManufacturer = async ({ manufacturerName }: { manufacturerName: string }) => {
    return await axios.get("localhost:9000/api/products/filter_manufacturer", { params: { manufacturer: manufacturerName } }).catch((e) => { throw e.toJSON() });
}

// export 
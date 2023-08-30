import { AxiosResponse } from 'axios';
import { axiosProductInstance } from '../config/http.config';
import { IProduct, IProductAdd } from '../types/product.type';


class ProductService {
    getAllProduct(): Promise<IProduct[]> {
        return axiosProductInstance.get('/products')
    }
    createProduct(body:IProductAdd) {
        return axiosProductInstance.post("/products/createFull", body)
    }
    getProductById(id: number): Promise<IProduct> {
        return axiosProductInstance.get(`/products/${id}`)
    }
    getDetailProductById(id: number): Promise<IProduct> {
        return axiosProductInstance.get(`/products/getDetail/${id}`)
    }
    searchProduct(key: any) {
        return axiosProductInstance.get(`/products/search?keywork=${key}`)
    }
    updateProduct(id: number, body:IProduct) {
        return axiosProductInstance.put(`/products/updateDetail/${id}`, body)
    }
    deleteProduct(id: number) {
        return axiosProductInstance.delete(`/products/delete/${id}`)
    }
}

export const productService = new ProductService()

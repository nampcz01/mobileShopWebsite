import { AxiosResponse } from 'axios';
import { axiosProductInstance } from '../config/http.config';
import { IProduct } from '../types/product.type';


class ManufacturerService {
    getAllManufacturer(): Promise<string[]> {
        return axiosProductInstance.get('/products/getListManu')
    }
    searchManufacturer(key: any): Promise<IProduct[]> {
        return axiosProductInstance.get(`/products/filter_manufacturer?manufacturer=${key}`)
    }
}

export const manufacturerService = new ManufacturerService()

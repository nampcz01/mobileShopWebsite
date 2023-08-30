import { AxiosResponse } from 'axios';
import { axiosProductInstance } from '../config/http.config';
import { IWareHouse, IWareHouseAdd, IWareHouseExportAndImport } from '../types/warehouse.type';


class WarehouseService {
    getAllWarehouse(): Promise<IWareHouse[]> {
        return axiosProductInstance.get('/products/warehouse/')
    }
    createWarehouse(body:IWareHouseAdd) {
        return axiosProductInstance.post("/products/warehouse/create", body)
    }
    getWarehouseById(id: number): Promise<IWareHouse> {
        return axiosProductInstance.get(`/products/warehouse/${id}`)
    }
    importWarehouse(body: IWareHouseExportAndImport) {
        return axiosProductInstance.put(`/products/warehouse/import`, body)
    }
    exportWarehouse(body: IWareHouseExportAndImport) {
        return axiosProductInstance.put(`/products/warehouse/export`, body)
    }
    checkAmounttWarehouse(body: IWareHouseExportAndImport) {
        return axiosProductInstance.post(`/products/warehouse/checkQuantity`, body)
    }
}

export const warehouseService = new WarehouseService()

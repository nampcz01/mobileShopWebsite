export interface IWareHouse {
productId: number;
amount: number;
status: string;
}

export interface IWareHouseAdd {
productId: number;
amount: number;
}

export interface IWareHouseExportAndImport {
productId: number;
quantity: number;
}
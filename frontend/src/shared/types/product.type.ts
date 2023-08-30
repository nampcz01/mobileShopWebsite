export interface IProduct {
  productId: number;
  name: string;
  manufacturer: string;
  price: number;
  image: string;
  promotion: number;
}
export interface IProductAdd {
  name: string;
  manufacturer: string;
  price: number;
  image: string;
  promotion: number;
  displaySize: number;
  operatingSystem: string;
  displayType: string;
  frontCam: string;
  backCam: string;
  ram: number;
  rom: number;
  battery: number;
  chipset: string;
}
export interface IDetailProduct {
  existingProduct: number;
  productId: number;
  name: string;
  manufacturer: string;
  price: number;
  image: string;
  promotion: number;
  displaySize: number;
  operatingSystem: string;
  displayType: string;
  frontCam: string;
  backCam: string;
  ram: number;
  rom: number;
  battery: number;
  chipset: string;
  amount?: number
  choose?: boolean
}
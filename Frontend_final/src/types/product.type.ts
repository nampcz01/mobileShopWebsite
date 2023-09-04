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

export interface IProductCard {
    name: string;
    manufacturer: string;
    price: number;
    image: string;
    promotion: number;
}
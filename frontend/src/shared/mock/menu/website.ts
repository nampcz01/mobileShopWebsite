export const fakeMenu = [ 
    {label: "Trang chủ", path: "/"},
    {label: "Sản phẩm", path: "/products"},
    {label: "Đặt hàng", path: "/order"},
    {label: "Dành cho nhân viên", path: "/employee/product"},
];
export interface IMenu{
    label: string;
    path: string
}
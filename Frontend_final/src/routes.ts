import React from "react"

const Product = React.lazy(() => import("./pages/Product/page"));
const ProductDetail = React.lazy(() => import("./pages/Product/productDetail"));

export const routes = [
    {
        path: "/",
        name: "home",
        element: Product,
    },
    {
        path: "/products/:id",
        name: "productDetail",
        element: ProductDetail,
    },
];
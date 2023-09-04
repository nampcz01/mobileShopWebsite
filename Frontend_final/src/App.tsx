import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/AuthPages/Login";
import Register from "./pages/AuthPages/Register";
import Cart from "./pages/Cart/Cart";
import ProductDetail from "./pages/Product/productDetail";
import AdminPages from "./pages/Admin/AdminPages";
import Orders from "./pages/Orders/Orders";



const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"))


function App() {
  // const { contextHolder } = useNotify();
  return (
    <BrowserRouter>
      {/* <Suspense fallback={loading}>
        {contextHolder}
        <ConfirmPopup />
        <AuthProvider> */}
          <Routes>
            <Route path="*" element={<DefaultLayout />}/>
            {/* <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/products/:id" element={<ProductDetail />}/>
            <Route path={ROUTES.LOGIN} element={<Login />}></Route>
            <Route path="/orders" element={<Orders />}/>
            <Route path="/admin" element={<AdminPages />}/> */}
          </Routes>
        {/* </AuthProvider>
      </Suspense> */}
    </BrowserRouter>
  );
}

export default App;

import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./pages/AuthPages/Login";
// import Register from "./pages/AuthPages/Register";
// import Cart from "./pages/Cart/Cart";
// import ProductDetail from "./pages/Product/productDetail";
// import AdminPages from "./pages/Admin/AdminPages";
// import Orders from "./pages/Orders/Orders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const queryClient = new QueryClient();

function App() {
  // const { contextHolder } = useNotify();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loading ....</div>}>
          {/* {contextHolder}
        <ConfirmPopup />
        <AuthProvider> */}
          <Routes>
            <Route path="*" element={<DefaultLayout />} />
            {/* <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/products/:id" element={<ProductDetail />}/> */}
            {/* <Route path={ROUTES.LOGIN} element={<Login />}></Route>
            <Route path="/orders" element={<Orders />}/>
            <Route path="/admin" element={<AdminPages />}/> */}
          </Routes>
          {/* </AuthProvider> */}
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

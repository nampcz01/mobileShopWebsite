import {onlyHeader} from '../components/Layout/Layout'
import Home from '../pages/Home/Home';
import Phone from '../pages/Phone/Phone';
import Accessories from '../pages/Accessories';
import Login from '../pages/Login/Login'
import Cart from '../pages/Cart/Cart';
import DashBoard from '../pages/DashBoard/DashBoard';
import Product from '../pages/Product/Product';
//Giao diện công khai
//obj
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/phone', component: Phone},
    { path: '/accessories', component: Accessories},
    { path: '/login', component: Login, layout: onlyHeader},
    //layout only header: cart,...
    {path: '/cart', component: Cart, layout: onlyHeader},
   // {path: '/product/${product.id}', component: Product, layout: onlyHeader},
    {path: '/product/:productId', component: Product, layout: onlyHeader},
    //layout dashboard = null
    { path: '/dashboard', component: DashBoard, layout: null}
]

//Phải đăng nhập mới xem được
const privateRoutes = [

]

export { publicRoutes, privateRoutes}
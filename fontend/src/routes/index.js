import {onlyHeader} from '../components/Layout'
import Home from '../pages/Home';
import Phone from '../pages/Phone';
import Accessories from '../pages/Accessories';
import uLogin from '../pages/uLogin'
import Cart from '../pages/Cart';
import DashBoard from '../pages/DashBoard';
//Giao diện công khai
//obj
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/phone', component: Phone},
    { path: '/accessories', component: Accessories},
    { path: '/login', component: uLogin},
    //layout only header: cart,...
    { path: '/cart', component: Cart, layout: onlyHeader},
    //layout dashboard = null
    { path: '/dashboard', component: DashBoard, layout: null}
]

//Phải đăng nhập mới xem được
const privateRoutes = [

]

export { publicRoutes, privateRoutes}
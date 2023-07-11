import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import imgBg from "./../../assets/image/bgCart.jpg"
import React, { useState, useEffect } from "react";
// import { useCookies } from 'react-cookie';
// import Cookies from "react-cookie/cjs/Cookies";
const cx = classNames.bind(styles)

function Cart() {
    const {data, setData} = useState([]);
    // const [cookies, setCookie, removeCookie] = useCookies([]);
    // console.log(cookies.addProduct)
    
    if (data){
        return (<div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('item')}>
                    <img height={'400px'} src={imgBg} alt="" />
                    <div className={cx('text')}>
                        <span>Bạn chưa có sản phẩm nào trong giỏ hàng</span>
                        <span>Hãy mua gì đó!</span>
                    </div>
                    <a href="/"><button className={cx('btnHome')}>Tiếp tục mua sắm</button></a>
                </div>  
            </div>
        </div>)}
    else{
        return( 
            <div className={cx('wrapper')}>
            <div className={cx('body-table')}>
                <table className={cx('table')}>
                    <thead>
                        <tr key={''}>
                            <th>Tất cả</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    {/* {data1.addProduct.map(cookies =>(
                    <tbody>
                        <tr key={data1.productId}><p>{data1.name}</p></tr>
                    </tbody>
                    ))} */}
                    <tbody>
                        <tr>
                            <td>
                                test
                            </td>
                            <td>
                                test
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>  
        )
    }

    
    
}
export default Cart;
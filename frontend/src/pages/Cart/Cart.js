import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import imgBg from "./../../assets/image/bgCart.jpg";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';

// import { useCookies } from 'react-cookie';
// import Cookies from "react-cookie/cjs/Cookies";
const cx = classNames.bind(styles);

function Cart() {
  const  [data, setData]  = useState([]);
  const { carts } = useSelector((state) => state.cart);
    
  console.log(carts);
  // const [cookies, setCookie, removeCookie] = useCookies([]);
  // console.log(cookies.addProduct)

  if (!carts) {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("body")}>
          <div className={cx("item")}>
            <img height={"400px"} src={imgBg} alt="" />
            <div className={cx("text")}>
              <span>Bạn chưa có sản phẩm nào trong giỏ hàng</span>
              <span>Hãy mua gì đó!</span>
            </div>
            <a href="/">
              <button className={cx("btnHome")}>Tiếp tục mua sắm</button>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
    //   <div className={cx("wrapper")}>
    //     <div className={cx("body-table")}>
    //       <table className={cx("table")}>
    //         <thead>
    //           <tr key={""}>
    //             <th>Tất cả</th>
    //             <th>Đơn giá</th>
    //             <th>Số lượng</th>
    //             <th>Thành tiền</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             {carts?.map((item) => (
    //               <>
    //                 <td>{item.name}</td>
    //                 <td>{item.price}</td>
    //                 <td>1</td>
                   
    //               </>
    //             ))}
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    <TableContainer sx={{marginTop:' 70px' }} component={Paper}>
      <Table sx={{borderRadius:"8px"}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Tất cả</TableCell>
            <TableCell>Đơn giá</TableCell>
            <TableCell>Số lượng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carts?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.prize?.toLocaleString()}</TableCell>
              <TableCell>1</TableCell>
              {/* Add the calculation for Thành tiền */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
  }
}
export default Cart;

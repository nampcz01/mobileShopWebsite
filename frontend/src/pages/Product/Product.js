import axios from 'axios';
import React from 'react';
//import { useCookies } from 'react-cookie';
//import Cookies from 'universal-cookie';
import { useParams  } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruckFast, faCircleCheck, faArrowRotateLeft, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import logoImg from './../../assets/image/Vshop.gif';


const cx = classNames.bind(styles)


function Product() {
    const params = useParams()
    const [products, setProducts] = useState([]);
    // const [cookies, setCookie] = useCookies(['addProduct']);
 
    useEffect(() => {
        axios.get(`http://localhost:9000/api/products/${params.productId}`).then(res =>{
            setProducts(res.data)
         })
         
     }, [params.productId])

    const handleAdd = () =>{
        console.log(products)
        const productData={
            productId: products.productId,
            price: products.prize
        }
        axios
            .post('localhost:9000/api/orders/addCart', productData)
            .then((response)=>{
                console.log(response)
            })
            .catch((error) => {
                if (error.response) {
                  console.log(error.response);
                  console.log("server responded");
                } else if (error.request) {
                  console.log("network error");
                } else {
                  console.log(error);
                }
              });
    }
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div key={products.productId} className={cx('wrapper-product')}>
                    <div className={cx('imgPd')}>
                        <img height={'350px'} src="https://storage.googleapis.com/my-image-products/iphone-xi-den-600x600.jpg" alt="" />
                    </div>
                    <div className={cx('detail')}>
                        <div className={cx('name-item')}>
                            {products.name}
                        </div>
                        <div className={cx('maf')}>
                            <span>NSX: {products.manufacturer}</span>
                            <ul className='rating'>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                            </ul>
                        </div>
                        <div className={cx('price')}>
                            <div className={cx('priceShow')}>
                            <span>{(products.prize - (products.prize * (products.promotion/100)))?.toLocaleString()} VNĐ</span>
                            </div>
                                <div >
                                    <span className={cx('priceShow_previous')}>{products.prize?.toLocaleString()} VNĐ</span>
                                    <span className={cx('promotion')}>-{products.promotion || 0}%</span>
                                </div>
                        </div> 
                        <hr className={cx('line')} />
                        <div className={cx('amount-input')}>
                            <div className={cx('amount-text')}><span>Số lượng</span></div>
                            <div className={cx('amount')}>
                                <button className={cx('plusminus')} >-</button>
                                <input type="number" className={cx('num')} defaultValue="0"/>
                                <button className={cx('plusminus')} >+</button>
                            </div>
                        </div>

                        <button className={cx('btnAdd-Cart')} onClick={()=>{handleAdd()}}><FontAwesomeIcon icon={faCartPlus} />  Thêm vào giỏ hàng</button>
                    
                    </div>
                </div>
                <div className={cx('info')}>
                    <div className={cx('info-name')}>
                        <div><img height={'70px'} src={logoImg} alt="" /></div>
                        <div className={cx('text')}><span>Cửa hàng điện thoại di động Vshop</span></div>
                    </div>
                    <div className={cx('info-policy')}>
                        <div className={cx('info-main')}>Chính sách bán hàng: </div>
                        <div className={cx('content')}>
                            <div className={cx('info-content')}> <FontAwesomeIcon icon={faTruckFast} /> Miễn phí giao hàng cho đơn hàng từ 5 triệu</div>
                            <div className={cx('info-content')}> <FontAwesomeIcon icon={faCircleCheck} /> Cam kết chính hãng 100%</div>
                            <div className={cx('info-content')}> <FontAwesomeIcon icon={faArrowRotateLeft} /> Đổi trả trong vòng 30 ngày</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Product;
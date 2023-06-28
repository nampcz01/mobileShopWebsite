import axios from 'axios';
import React from 'react';
import {useEffect, useState} from 'react';
import styles from './CardItem.module.scss'
import classNames from 'classnames/bind';
//import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles) 
const productsURL = "http://localhost:9000/api/products";
function Card() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get(productsURL).then(res =>{
            setProducts(res.data)
         })
     }, [])

    // const price = toString(products.prize);
    // function numberWithCommas(price) {
    //     return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
    return (
        <div className={cx('wrapper')} >
            {products.map( products =>(   
            <div key={products.productId} className={cx('productCard')}>
                <div className= {cx('Card')}>
                    <div className={cx('img')}>
                        <img height={190} src="https://storage.googleapis.com/my-image-products/iphone-xi-den-600x600.jpg" alt="" />    
                    </div>
                    <div className={cx('nameItem')}>
                        {products.name}
                    </div> 
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
                        <div >
                            <span className={cx('priceShow_previous')}>40,000,000 VNĐ</span>
                            <span className={cx('promotion')}>-{products.promotion || 0}%</span>
                        </div>
                    <div className={cx('priceShow')}>
                        <span>{products.prize.toLocaleString()} VNĐ</span>
                    </div>
                    </div> 
            </div>  
            ))}     
        </div>
    );
}
export default Card;
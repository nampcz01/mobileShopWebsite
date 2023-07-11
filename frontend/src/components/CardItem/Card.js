import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
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
    return (
        <div className={cx('wrapper')} >
            {products.map( products =>(   
            <div key={products.productId} className={cx('productCard')}>
                <Link to={`/product/${products.productId}`}>
                    <div className= {cx('Card')}>
                        <div className={cx('img')}>
                            <img height={190} src="https://storage.googleapis.com/my-image-products/iphone-xi-den-600x600.jpg" alt="" />    
                        </div>
                        <div className={cx('nameItem')}>
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
                            <div >
                                <span className={cx('priceShow_previous')}>{products.prize?.toLocaleString()} VNĐ</span>
                                <span className={cx('promotion')}>-{products.promotion || 0}%</span>
                            </div>
                        <div className={cx('priceShow')}>
                            <span>{(products.prize - (products.prize * (products.promotion/100)))?.toLocaleString()} VNĐ</span>
                        </div>
                    </div> 
                    </div>
                </Link>
            </div>  
            ))}     
        </div>
    );
}
export default Card;
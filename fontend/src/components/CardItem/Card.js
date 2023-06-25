import axios from 'axios';
import React from 'react';
import {useEffect, useState} from 'react';
import styles from './CardItem.module.scss'
import classNames from 'classnames/bind';
//import Button from '../Button';

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
        <div className={cx('wrapper')}>
            {products.map( products =>(
                <div className={cx('productCard')}>
                <div className= {cx('Card')}>
                    <div className={cx('img')}>
                        <img src="https://placehold.co/139x190.png" alt="" />    
                    </div>
                    <div className={cx('nameItem')}>
                            <h3 key={products.productsID}>{products.name}</h3>
                    </div>
                    <div className={cx('price')}>
                        <div className={cx('priceShow')}>
                            <p key={products.productsID} >{products.prize}</p>
                        </div>
                        <div className={cx('priceShow_previous')}>
                        </div>
                    </div>  
                </div>
            </div>
            ))}    
        </div>
    );
}
export default Card;
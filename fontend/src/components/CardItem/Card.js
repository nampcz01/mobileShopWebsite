import axios from 'axios';
import React from 'react';
import {useEffect} from 'react';
import styles from './CardItem.module.scss'
import classNames from 'classnames/bind';
//import Button from '../Button';

const cx = classNames.bind(styles) 

function Card() {
    // useEffect(() => {
    //     // const cors = require('cors')
    //     // const corsOptions ={
    //     //     origin:'http://localhost:9000/api/products', 
    //     //     credentials:true,            //access-control-allow-credentials:true
    //     //     optionSuccessStatus:200
    //     // }
    //     // app.use(cors(corsOptions));

    //     axios.get('http://localhost:9000/api/products')
    //     .then(res => console.log(res))
    //     .catch(err =>console.log(err));
    // }, [])
    

    return (
        <div className={cx('productCard')}>
            <div className= {cx('Card')}>
                <div className={cx('img')}>
                    <img src="https://placehold.co/139x190.png" alt="" />    
                </div>
                <div className={cx('nameItem')}>

                    <h3>name item</h3>
                </div>
                <div className={cx('price')}>
                    <div className={cx('priceShow')}>
                        
                        <p>199.900</p>
                    </div>
                    <div className={cx('priceShow_previous')}>
                        
                    </div>
                </div>
               
            </div>
        </div>
        
    );
}
export default Card;
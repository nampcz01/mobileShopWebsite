import React, { useRef } from "react";
import Card from "../../../CardItem/Card";
//styles
import styles from './ViewProduct.module.scss'
import classNames from 'classnames/bind';
//swipper
import { Navigation, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

//import BtnNext from "./btnNext";
import BtnPrev from "./btnPrev";
import BtnNext from "./btnNext";


const cx = classNames.bind(styles) 

function ViewProduct() {  
    const swiperRef = useRef();
    const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('header')}>
                    <hr className={cx('line')} />  
                    <h2>Sản phẩm mới cập nhật</h2>
                    <hr className={cx('line')} />
                </div>
                    <div className={cx('round')}>
                        <BtnPrev onClick={() => swiperRef.current?.slidePrev()}></BtnPrev>
                        <Swiper 
                        navigation={{
                            nextEl: '.review-swiper-button-next',
                            prevEl: '.review-swiper-button-prev',
                        }}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Virtual, Navigation]} spaceBetween={50} slidesPerView={4} virtual>
                            {slides.map((slideContent, index) => (
                            <SwiperSlide key={slideContent} virtualIndex={index}>
                            <p>Test</p>
                            </SwiperSlide>
                        ))}
                        
                        </Swiper>
                        <BtnNext onClick={() => swiperRef.current?.slideNext()}></BtnNext>
                    </div>
               <div className={cx('header')}>
                    <hr className={cx('line')} />
                    <h2>Tất cả sản phẩm</h2>
                    <hr className={cx('line')} />
                    
                </div>
                <div className={cx('rowCard')}>
                    <Card/>
                </div>
           </div>
        </div>
    );
    
}

export default ViewProduct;
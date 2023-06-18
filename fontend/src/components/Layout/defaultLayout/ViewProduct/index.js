import Card from "../../../CardItem";
import styles from './ViewProduct.module.scss'
import classNames from 'classnames/bind';
//swipper
import React, { useRef } from "react";
import { Navigation, Virtual } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

import BtnNext from "./btnNext";
import BtnPrev from "./btnPrev";


const cx = classNames.bind(styles) 

function ViewProduct() {  
    const swiperRef = useRef();
    const swiper = useSwiper();
    const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>Sản phẩm mới cập nhật</h2>
                
            </div>
            <Swiper 
            navigation={{
                nextEl: '.review-swiper-button-next',
                prevEl: '.review-swiper-button-prev',
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            modules={[Virtual, Navigation]} spaceBetween={50} slidesPerView={5} virtual>
                {slides.map((slideContent, index) => (
                <SwiperSlide key={slideContent} virtualIndex={index}>
                   <Card/>
                </SwiperSlide>
            ))}
           <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
           <button onClick={() => swiperRef.current?.slideNext  ()}>Next</button>
            </Swiper>


            <div className={cx('round')}>
               <BtnPrev/>
                <div className={cx('rowCard_Slide')}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                
            </div>
            <div className={cx('header')}>
                <h2>Tất cả sản phẩm</h2>
            </div>
            <div className={cx('rowCard')}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
    
}

export default ViewProduct;
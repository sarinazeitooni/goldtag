import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
import React from "react";
import {v4 as uuidv4} from "uuid";
function MainSwiper({swiperData}){
    SwiperCore.use([Navigation]);
    return(
        <Swiper navigation slidesPerView={1}>
            {
                swiperData.map((item)=>{
                    return(
                        <SwiperSlide key={uuidv4()}>
                            <img className='swiper-image-detail' src={item} alt=""/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
};
export default MainSwiper;
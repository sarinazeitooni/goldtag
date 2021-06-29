import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
import React from "react";
function MainSwiper({swiperData}){
    SwiperCore.use([Navigation]);
    return(
        <Swiper
            navigation slidesPerView={1}
        >
            {
                swiperData.map((item)=>{
                    return(
                        <SwiperSlide>
                            <img className='swiper-image-detail' src={item} alt=""/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
};
export default MainSwiper;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Pagination} from "swiper";
import './style/mainswiper.scss';
import 'swiper/swiper-bundle.css';
import SwiperImg from './images/swiperImg';
import { v4 as uuidv4 } from 'uuid';
function MainSwipper() {
    SwiperCore.use([
        Pagination
      ]);
    return(
        <div className="swiperContainer">
            <Swiper
            spaceBetween={1} slidesPerView={1} loop={true} pagination>
                {
                    SwiperImg.map((item)=>{
                        return(
                            <SwiperSlide key={uuidv4()}>
                                <div className='swiper-item' style={{backgroundRepeat: 'no-repeat', backgroundImage : `url(${item})`}}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
export default MainSwipper;
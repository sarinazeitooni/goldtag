import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Pagination} from "swiper";
import './style/mainswiper.scss';
import 'swiper/swiper-bundle.css';
import SwiperImg from './images/swiperImg';
function MainSwiper() {
    SwiperCore.use([
        Pagination
      ]);
    return(
        <div className="swiperContainer">
            <Swiper
            spaceBetween={1} slidesPerView={1} loop={true}
        pagination={{
          clickable: true,
          renderBullet: (index, bullets) => {
            return `<span class="${bullets}"></span>`;
          }
        }}>
                {
                    SwiperImg.map((item)=>{
                        return(
                            <SwiperSlide key={item.id}>
                                <div className='swiper-item' style={{backgroundRepeat: 'no-repeat', backgroundImage : `url(${item})`}} ></div>
                            </SwiperSlide>
                        )
                    })
                }
                <div class="swiper-pagination"></div>
            </Swiper>
        </div>
    )
}
export default MainSwiper;
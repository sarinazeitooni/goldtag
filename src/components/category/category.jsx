import React from 'react';
import './style/category.scss';
import categoryData from './data/categoryData';
import Divider from '../divider/Divider';
import {BrowserView , MobileView} from 'react-device-detect';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { v4 as uuidv4} from 'uuid';
function Category (){
    return(
        <div className="category-container">
            <BrowserView>
        <h3>{categoryData.h3text}</h3>
                <div className="category-item-container">
                    {
                        categoryData.images.map((item)=>{
                            return(
                                <div key={uuidv4()} style={{backgroundRepeat: 'no-repeat',backgroundImage : `url(${item})`}}/>
                            )
                        })
                    }
                </div>
                <Divider className={'category-divider'}/>
            </BrowserView>
            <MobileView>
                <Swiper spaceBetween={1} slidesPerView={1} loop={true}>
                    {
                        categoryData.images.map((item)=>{
                            return(
                                <SwiperSlide key={uuidv4()}>
                                    <img className='category-swiper' alt='Baner' src={item}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </MobileView>
    </div>
    )
}
export default Category;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
import '../../style/mainsection.scss'
import 'swiper/components/navigation/navigation.scss';
import Comments from './comments'
import {BrowserView} from 'react-device-detect';
function MainSection({id}){
    let swiperData = id.swiper;
    let clothesImage; 
    if(id.clothes){
        clothesImage = <img style={{width: "100%"}} src='https://cdn.goldtag.net/images/tshirtnike78.jpg' alt='clothes'/>;
    }else{
        clothesImage = '';
    }
    SwiperCore.use([Navigation]);
    return(
        <div className='mainsection-container'>
            <BrowserView><div className='address'>{id.address}</div></BrowserView>
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
            <BrowserView>
            <div className='description'>
                <h3> <FontAwesomeIcon icon={faInfoCircle} /> توضیحات </h3>
                <hr/>
                <p>{id.description}</p>
            </div>
            {clothesImage}
                <Comments id={id} />
            </BrowserView>
        </div>
    )
}
export default MainSection;
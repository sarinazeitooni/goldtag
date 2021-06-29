import React from 'react';
import './style/mainsection.scss'
import 'swiper/components/navigation/navigation.scss';
import CommentsContainer from '../comments/CommentsContainer'
import {BrowserView} from 'react-device-detect';
import Address from './address/Address';
import MainSwiper from './swiper/Swiper';
import MainDescription from "./description/MainDescription";
function MainSection({id}){
    return(
        <div className='mainsection-container'>
            <Address id={id}/>
            <MainSwiper swiperData={id.swiper}/>
            <BrowserView>
                <MainDescription id={id}/>
                {
                    id.clothes ? <img style={{width: "100%"}} src='https://cdn.goldtag.net/images/tshirtnike78.jpg' alt='clothes'/> : ''
                }
                <CommentsContainer id={id} />
            </BrowserView>
        </div>
    )
}
export default MainSection;
import React from 'react';
import './style/mainsection.scss'
import 'swiper/components/navigation/navigation.scss';
import CommentsContainer from '../comments/CommentsContainer';
import Address from './address/Address';
import MainSwiper from './swiper/Swiper';
import MainDescription from "./description/MainDescription";
import useViewPort from "../../../customIsMobileHook/useViewPort";
function MainSection({id}){
    const isMobile = useViewPort();
    return(
        <div className='mainsection-container'>
            <Address id={id}/>
            <MainSwiper swiperData={id.swiper}/>
                {!isMobile ? <><MainDescription id={id}/>
                    {
                        id.clothes ? <img style={{width: "100%"}} src='https://cdn.goldtag.net/images/tshirtnike78.jpg' alt='clothes'/> : ''
                    }
                    <CommentsContainer id={id} /></> : ''}
        </div>
    )
}
export default MainSection;
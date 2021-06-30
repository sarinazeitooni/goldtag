import React from 'react';
import './style/card.scss';
import './style/price.scss';
import texts from './texts/texts';
import { BrowserView, MobileView} from "react-device-detect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCar,faShoppingBag}from "@fortawesome/free-solid-svg-icons";
import soldout from '../assets/img/soldout.png';
import {Link} from 'react-router-dom';
function Card({size,id,cover,title,subtitle,price,newprice,purchased,className, available}){
    let soldOut;
    if(available){
        soldOut = 'soldout-block';
    }else{
        soldOut = 'soldout-none';
    }
    return(
         <div className={className}>
             <div className={soldOut}>
             <img src={soldout}/>
             </div>
            <Link style={{width: '100%' , height: '100%' , textDecoration: 'none', display: "inline-block"}} to={"/" + id}>
            <div className={size}>
                <img alt="cover" className='card-image' src={cover}></img>
                <div className="card-title"> {title} <MobileView> <FontAwesomeIcon style={{float:'left', margin: "-17px 40px"}} icon={faCar}/></MobileView></div>
                <div className="card-subtitle"> {subtitle}</div>
                <hr className="line"></hr>
                <div className='price-container'>
                <div className="car-icon">
                    <BrowserView><FontAwesomeIcon icon={faCar}/></BrowserView>
                    <MobileView><span className='purchased-m'> <FontAwesomeIcon icon={faShoppingBag}/> {purchased}{texts.purchased}</span></MobileView>
                    </div>
                    <div className="old-price">{price}</div>
                <div className="new-price">{newprice}{texts.currency}</div>
                </div>
            </div>
            </Link>               
          </div> 
     )
};
export default Card;

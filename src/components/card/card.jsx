import React from 'react';
import './style/card.scss';
import './style/price.scss';
import { BrowserView, MobileView} from "react-device-detect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faTruckMoving} from "@fortawesome/free-solid-svg-icons";
import soldout from '../assets/img/soldout.png';
import {Link} from 'react-router-dom';
import Divider from "../divider/Divider";
import NumberFormat from 'react-number-format';
function Card({size,id,cover,title,subtitle,price,beenPurchased,newprice ,currency,purchased,className, available}){
    return(
         <div className={className}>
             {
                 (available)
                     ? <div className='soldout-block'><img alt='soldout' src={soldout}/></div>
                     : <div className='soldout-none'><img alt='soldout' src={soldout}/></div>
             }
            <Link className="main-card-container" to={"/" + id}>
            <div className={size}>
                <img alt="cover" className='card-image' src={cover}/>
                <div className="purchased"> <FontAwesomeIcon icon={faShoppingBag}/> {beenPurchased}</div>
                <div className="card-title"> {title}
                <MobileView> <FontAwesomeIcon className='car-icon' icon={faTruckMoving}/></MobileView>
                </div>
                <div className="card-subtitle"> {subtitle}</div>
                <Divider className={'line'}/>
                <div className='price-container'>
                    <div className="car-icon-container">
                        <BrowserView><FontAwesomeIcon icon={faTruckMoving}/></BrowserView>
                    </div>
                    <div className='prices'>
                        <div className="old-price">{price}</div>
                        <div className="new-price">
                            <div>
                                <NumberFormat className='' value={newprice} displayType={'text'}
                         thousandSeparator={true} renderText={(value, props) =>
                                    <span {...props}>{value}</span>
                         }/>
                            </div>
                            {currency}
                        </div>
                    </div>
                    </div>
                </div>
            </Link>               
          </div> 
     )
};
export default Card;

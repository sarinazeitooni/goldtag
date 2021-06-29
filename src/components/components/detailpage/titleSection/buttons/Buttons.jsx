import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock, faShoppingBag, faShoppingBasket, faStar} from "@fortawesome/free-solid-svg-icons";
import React from "react";
function Buttons({data, titleSectionData}){
    return(
        <div>
            <button className='available-btn'> <FontAwesomeIcon icon={faShoppingBag} />{titleSectionData.available}</button>
            <div className="label-info-container">
                <div className="label-info">
                    <span className='info'><FontAwesomeIcon icon={faClock}/> {data.daynum} </span>
                    {titleSectionData.day}
                </div>
                <div className="label-info">
                    <span className='info'><FontAwesomeIcon icon={faShoppingBasket}/> {data.purchased} </span>
                    {titleSectionData.purchased}
                </div>
            </div>
            <div className='product-charity'>
                با خرید این محصول از گلدتگ <span style={{color:'#ff7a7a'}}>100 تومان</span> به <span style={{color:'#436fbe'}}>خیریه</span> کمک کرده اید.
            </div>
        </div>
    )
};
export default Buttons;
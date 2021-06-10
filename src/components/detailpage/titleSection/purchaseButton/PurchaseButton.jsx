import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import NumberFormat from "react-number-format";
import React from "react";
function PurchaseButton({id , data}){
    let discountPercent = ((data.price - data.newprice) * 100) / data.price;
    return(
        <button className='price-container-btn'>
            <div className='shopping-icon'><FontAwesomeIcon icon={faShoppingBag} /></div>
            <div>
                <div className='new-price-container'><span>{id.purchase}</span><span className='price-num'>
                       <NumberFormat className='' value={data.newprice} displayType={'text'}
                                     thousandSeparator={true} renderText={(value, props) =>
                           <span {...props}>{value}</span>
                       }/>

                    </span>
                    <span className='currency'>{id.currency}</span></div>
                <div className='old-price-container'><span className='discount-percent'> {discountPercent}{id.discount}</span>
                    <span className='old-price'><NumberFormat className='' value={data.price} displayType={'text'}
                                                              thousandSeparator={true} renderText={(value, props) =>
                        <span {...props}>{value}</span>
                    }/>{id.currency}</span></div>
            </div>
        </button>
    )
};
export default PurchaseButton;
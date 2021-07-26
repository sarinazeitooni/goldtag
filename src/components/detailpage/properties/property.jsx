import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList} from "@fortawesome/free-solid-svg-icons";
import propertyTexts from './texts/propertyTexts';
import Divider from "../../divider/Divider";
import useViewPort from "../../../customIsMobileHook/useViewPort";
function Property({data}){
    let properties = data.property;
    const isMobile = useViewPort();
    return(
        <div className='side-section-container'>
            <h3> <FontAwesomeIcon icon={faList}/>{propertyTexts.properties}</h3>
                {!isMobile ? <Divider/> : ''}
            <ul className="property-container">
                {
                    properties.map((item,index)=>{
                        return(
                        <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
            {isMobile ? <Divider/> : ''}
        </div>
    )
}
export default Property;
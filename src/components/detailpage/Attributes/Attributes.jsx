import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList} from "@fortawesome/free-solid-svg-icons";
import propertyTexts from './texts/propertyTexts';
import Divider from "../../divider/Divider";
import {v4 as uuidv4} from "uuid";
import useViewPort from "../../../customIsMobileHook/useViewPort";
function Attributes({data}){
    const isMobile = useViewPort();
    let properties = data.property;
    return(
        <div className='side-section-container'>
            <h3> <FontAwesomeIcon icon={faList}/>{propertyTexts.properties}</h3>
                {!isMobile ? <Divider/> :''}
            <ul className="property-container">
                {
                    properties.map((item)=>{
                        return(
                        <li key={uuidv4()}>{item}</li>
                        )
                    })
                }
            </ul>
            {isMobile ? <Divider/> :''}
        </div>
    )
}
export default Attributes;
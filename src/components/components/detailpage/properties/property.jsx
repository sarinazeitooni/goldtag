import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList} from "@fortawesome/free-solid-svg-icons";
import propertyTexts from './texts/propertyTexts';
import {BrowserView , MobileView} from 'react-device-detect';
import Divider from "../../divider/Divider";
function Property({data}){
    let properties = data.property;
    return(
        <div className='side-section-container'>
            <h3> <FontAwesomeIcon icon={faList}/>{propertyTexts.properties}</h3>
            <BrowserView>
                <Divider/>
            </BrowserView>
            <ul className="property-container">
                {
                    properties.map((item)=>{
                        return(
                        <li>{item}</li>
                        )
                    })
                }
            </ul>
            <MobileView>
                <Divider className=''/>
            </MobileView>
        </div>
    )
}
export default Property;
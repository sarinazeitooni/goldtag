import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList} from "@fortawesome/free-solid-svg-icons";
import {BrowserView , MobileView} from 'react-device-detect';
function Property({data}){
    let properties = data.property;
    return(
        <div className='side-section-container'>
            <h3> <FontAwesomeIcon icon={faList}/> ویژگی ها</h3>
            <BrowserView>
            <hr/>
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
            <hr/>
            </MobileView>
        </div>
    )
}
export default Property;
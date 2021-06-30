import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import mainSectionTexts from "../texts/mainSectionTexts";
import Divider from "../../../divider/Divider";
import React from "react";
function MainDescription({id}){
    return(
        <div className='description'>
            <h3> <FontAwesomeIcon icon={faInfoCircle} /> {mainSectionTexts.description} </h3>
            <Divider className=''/>
            <p>{id.description}</p>
        </div>
    )
};
export default MainDescription;
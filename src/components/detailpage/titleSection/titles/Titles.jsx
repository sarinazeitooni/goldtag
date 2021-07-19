import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import titleSectionData from "../Data/titleSectionData";
import {BrowserView} from "react-device-detect";
import React from "react";

function Titles({id , titleSection}) {
    const stars = [1,2,3,4,5];
    return(
        <div>
            <h1 className='title'>{id.title}</h1>
            <h4 className='subtitle'>{id.subtitle}</h4>
            <div className='star-container'>
                <div className='stars'>
                    {stars.map(() => { return (<FontAwesomeIcon icon={faStar} />) })}
                    {titleSectionData.comments}
                </div>
                <BrowserView><div><button className='submit-btn'>{titleSection.shipping}</button></div></BrowserView>
            </div>
        </div>
    )
};
export default Titles;
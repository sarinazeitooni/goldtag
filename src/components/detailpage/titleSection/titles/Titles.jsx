import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import titleSectionData from "../Data/titleSectionData";
import React from "react";
import useViewPort from "../../../../customIsMobileHook/useViewPort";

function Titles({id, titleSection}) {
    const isMobile = useViewPort();
    const stars = [1, 2, 3, 4, 5];
    return (
        <React.Fragment>
            <h1 className='title'>{id.title}</h1>
            <h4 className='subtitle'>{id.subtitle}</h4>
            <div className='star-container'>
                <div className='stars'>
                    {stars.map((item) => {
                        return (
                            <span key={item}><FontAwesomeIcon icon={faStar}/></span>
                        )
                    })}
                    {titleSectionData.comments}
                </div>
                    {!isMobile ? <div>
                        <button className='submit-btn'>{titleSection.shipping}</button>
                    </div> : ''}
            </div>
        </React.Fragment>
    )
};
export default Titles;
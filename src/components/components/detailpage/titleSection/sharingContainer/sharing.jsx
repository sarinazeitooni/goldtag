import titleSectionData from "../Data/titleSectionData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSchool} from "@fortawesome/free-solid-svg-icons";
import {MobileView} from "react-device-detect";
import React from "react";

function SharingContainer({titleSectionData}){
    return(
        <MobileView>
            <div className='sharing-container'>
                <div>{titleSectionData.share}</div>
                <div>
                    <span className="social-media-icon"><FontAwesomeIcon icon={faSchool} /></span>
                    <span className="social-media-icon"><FontAwesomeIcon icon={faSchool} /></span>
                    <span className="social-media-icon"><FontAwesomeIcon icon={faSchool} /></span>
                </div>
            </div>
        </MobileView>
    )
};
export default SharingContainer;
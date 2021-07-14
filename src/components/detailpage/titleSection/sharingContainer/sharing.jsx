import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSchool} from "@fortawesome/free-solid-svg-icons";
import {MobileView} from "react-device-detect";
import React from "react";

function SharingContainer({titleSectionData}){
    const icons = [1,2,3]
    return(
        <MobileView>
            <div className='sharing-container'>
                <div>{titleSectionData.share}</div>
                <div>
                    {icons.map((item)=>{
                        return(
                            <span key={item + ''} className="social-media-icon"><FontAwesomeIcon icon={faSchool} /></span>
                        )
                    })}
                </div>
            </div>
        </MobileView>
    )
};
export default SharingContainer;
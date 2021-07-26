import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSchool} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import useViewPort from "../../../../customIsMobileHook/useViewPort";
function SharingContainer({titleSectionData}){
    const isMobile = useViewPort();
    const icons = [1,2,3]
    return(
        <React.Fragment>
            {isMobile ? <div className='sharing-container'>
                <div>{titleSectionData.share}</div>
                <div>
                    {icons.map((item,index)=>{
                        return(
                            <span key={index} className="social-media-icon"><FontAwesomeIcon icon={faSchool} /></span>
                        )
                    })}
                </div>
            </div> : ''}
        </React.Fragment>
    )
}
export default SharingContainer;
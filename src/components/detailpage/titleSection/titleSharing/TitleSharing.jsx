import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSchool} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {v4 as uuidv4} from "uuid";
import useViewPort from "../../../../customIsMobileHook/useViewPort";
function TitleSharing({id}){
    const isMobile = useViewPort();
    const socialMedia = [1,2,3];
    return(
        <React.Fragment>
            {isMobile ? <div className='sharing-container'>
                <div>{id.share}</div>
                <div>
                    {
                        socialMedia.map((item)=>{
                            return(
                                <span key={uuidv4()} className="social-media-icon"><FontAwesomeIcon icon={faSchool} /></span>
                            )
                        })
                    }
                </div>
            </div> : ''}
        </React.Fragment>
    )
};
export default TitleSharing;
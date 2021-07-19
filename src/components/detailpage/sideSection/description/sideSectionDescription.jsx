import Divider from "../../../divider/Divider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import useViewPort from "../../../../customIsMobileHook/useViewPort";
function SideSectionDescription({clothes , description}){
    const isMobile = useViewPort();
    return(
        <React.Fragment>
            {isMobile ? <><Divider className=''/>
                <div className='description'>
                    <h3> <FontAwesomeIcon icon={faInfoCircle} />{description}</h3>
                    <p>{description}</p>
                </div>
                {
                    clothes ? <img style={{width: "100%"}} src='https://cdn.goldtag.net/images/tshirtnike78.jpg' alt='clothes'/> : ''
                }
                <Divider className=''/></> : ''}
        </React.Fragment>
    )
}
export default SideSectionDescription;
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMap, faPhone, faSearchLocation, faTag} from "@fortawesome/free-solid-svg-icons";
import Divider from "../../../divider/Divider";
import CommentsContainer from "../../comments/CommentsContainer";
import React from "react";
import useViewPort from "../../../../customIsMobileHook/useViewPort";
function SideAddress({id , comments}){
    const isMobile = useViewPort();
    return(
        <React.Fragment>
            <br/>
            <h3> <FontAwesomeIcon icon={faSearchLocation}/>{id.Address}</h3>
            <Divider className=''/>
            <img className='map-img' width={370} height={230}
                 src="https://api.cedarmaps.com/v1/static/light/35.777506,51.355780,15/400x250@2x?access_token=c73b0ada9f835f63eba89edde51429872f8f21af&markers=marker-default|35.777506,51.355780"
                 alt="map"/>
            <div className="address-phone"><FontAwesomeIcon icon={faPhone}/>{id.number}</div>
            <div className="address-phone"><FontAwesomeIcon icon={faMap}/>{id.fullAddress}</div>
                {isMobile ? <CommentsContainer id={comments}/> : '' }
            <h3><FontAwesomeIcon icon={faTag}/>{id.tags}</h3>
            <Divider className=''/>
        </React.Fragment>
    )
};
export default SideAddress;
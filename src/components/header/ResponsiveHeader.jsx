import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch, faShoppingBasket, faUserFriends} from "@fortawesome/free-solid-svg-icons";
import './style/responsiveheader.scss';
import useViewPort from "../../customIsMobileHook/useViewPort";
function ReponsiveHeader(){
    const isMobile = useViewPort();
    return(
        <React.Fragment>
            {isMobile ? <div className="header-top-container-sticky">
                <FontAwesomeIcon className="header-item icon ham-menu" icon={faBars}/>
                <FontAwesomeIcon className="header-item icon" icon={faSearch}/>
                <img alt="goldtag" src="https://cdn.goldtag.net/frontend/assets/v1/mobile/build/images/mobile-logo.svg"/>
                <FontAwesomeIcon className="header-item icon" icon={faUserFriends}/>
                <div className=" header-item basket-container">
                    <div className="item-numbers">0</div>
                    <FontAwesomeIcon className="header-item icon" icon={faShoppingBasket}/>
                </div>
            </div> : ''}
        </React.Fragment>
    )
};
export default  ReponsiveHeader;
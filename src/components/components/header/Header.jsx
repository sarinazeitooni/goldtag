import React from 'react';
import Navbar from './navbar/Navbar';
import texts from './texts/texts';
import './style/header.scss';
import './style/location.scss';
import './style/search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBag, faShoppingBasket ,faSearch , faUserFriends ,faMapMarker ,faBars}
from "@fortawesome/free-solid-svg-icons";
import { BrowserView, MobileView} from "react-device-detect";
function Header() {
    return (
      <div className="header">
          <BrowserView>
          <div className="header-top-container">
            <div className="search-container">
              <button className="basket">
                <FontAwesomeIcon className="icon" icon={faShoppingBag}/>
                {texts.basket}</button>
              <div className="search-box">
              <FontAwesomeIcon style={{position: "absolute",top: "9px", right: "5px"}} className="icon" icon={faSearch}/>
              <input className="search-input" type="text"
              placeholder={texts.inputPlaceHolder}></input>
                <button className="search-btn">{texts.search}</button>
              </div>
            </div>
            <div className="location-container">
              <button className="location-btn">
                <span>{texts.location}</span>
                <FontAwesomeIcon style={{ marginRight : "14px" , color : 'rgba(190,146,67,.95)'}} className="icon" icon={faMapMarker}/>
                </button>
              <img className="goldtagIcon" alt="golTagIcon" src="https://cdn.goldtag.net/frontend/assets/v1/desktop/build/images/logo.svg"></img>
            </div>
          </div>
          <hr></hr>
        </BrowserView>
          <MobileView>
            <div className="header-top-container">
            <FontAwesomeIcon className="header-item icon ham-menu" icon={faBars}/>
            <FontAwesomeIcon className="header-item icon" icon={faSearch}/>
            <img alt="goldtag" src="https://cdn.goldtag.net/frontend/assets/v1/mobile/build/images/mobile-logo.svg"></img>
            <FontAwesomeIcon className="header-item icon" icon={faUserFriends}/>
            <div className=" header-item basket-container">
              <div className="item-numbers">0</div>
            <FontAwesomeIcon className="header-item icon" icon={faShoppingBasket}/>
            </div>
            </div>       
          </MobileView>
          <BrowserView>
          <Navbar/>
          </BrowserView>
      </div>
    );
  }
  export default Header;
  
import React from 'react';
import Navbar from './navbar/Navbar';
import headerTexts from './texts/headerTexts';
import './style/header.scss';
import './style/location.scss';
import './style/search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBag ,faSearch ,faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {BrowserView} from "react-device-detect";
import Divider from "../divider/Divider";
import ResponsiveHeader from "./ResponsiveHeader";
function Header() {
    return (
        <React.Fragment>
          <div className="header">
          <BrowserView>
          <div className="header-top-container">
            <div className="search-container">
              <button className="basket">
                <FontAwesomeIcon className="icon" icon={faShoppingBag}/>{headerTexts.basket}</button>
              <div className="search-box">
              <FontAwesomeIcon className="icon search-icon" icon={faSearch}/>
              <input className="search-input" type="text"
              placeholder={headerTexts.inputPlaceHolder}/>
                <button className="search-btn">{headerTexts.search}</button>
              </div>
            </div>
            <div className="location-container">
              <button className="location-btn">
                <span>{headerTexts.location}</span>
                <FontAwesomeIcon className="icon map-icon" icon={faMapMarker}/>
                </button>
              <img className="goldtagIcon" alt="golTagIcon" src="https://cdn.goldtag.net/frontend/assets/v1/desktop/build/images/logo.svg"/>
            </div>
          </div>
          <Divider className=''/>
        </BrowserView>
      </div>
          <ResponsiveHeader/>
          <Navbar/>
          </React.Fragment>
    );
  }
  export default Header;
  
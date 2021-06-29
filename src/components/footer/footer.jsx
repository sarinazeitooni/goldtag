import React from 'react';
import './style/footer.scss';
import './style/footer-bottom.scss';
import {BrowserView, MobileView} from 'react-device-detect';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faMap} from "@fortawesome/free-solid-svg-icons";

import FooterBottom from "./FooterBottom";
import footerTexts from "./Data/footerData";

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className="footer-sections goltag">
                    <h4>{footerTexts.h4}</h4>
                    <ul className="footer-item-container footer-regular">
                        {footerTexts.goldtags.map((item) => {
                            return (
                                <li className={"footer-item  " + item.class}>{item.text}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="footer-sections social">
                    <BrowserView><h4>{footerTexts.categories}</h4></BrowserView>
                    <MobileView><h4>{footerTexts.social}</h4></MobileView>
                    <ul className="footer-item-container footer-regular">
                        <BrowserView>
                            {
                                footerTexts.footerItem.map((item) => {
                                    return (
                                        <li className="footer-item" style={{color: `${item.color}`}}>{item.text}</li>
                                    )
                                })
                            }
                        </BrowserView>
                        <div className='colored-social'>
                            {
                                footerTexts.socialItem.map((item) => {
                                    return (
                                        <MobileView key={item.text}>
                                            <li className="footer-item"><span>
                                            <FontAwesomeIcon icon={item.socialIcon}/>{item.text}</span></li>
                                        </MobileView>
                                    )
                                })
                            }
                        </div>
                    </ul>
                </div>
                <div className="footer-sections tamas">
                    <h4>{footerTexts.call}</h4>
                    <ul className="footer-item-container">
                        <li className="footer-item"><FontAwesomeIcon icon={faPhone}/>{footerTexts.number}</li>
                        <li className="footer-item"><FontAwesomeIcon icon={faMap}/>{footerTexts.address}</li>
                    </ul>
                    <BrowserView>
                        <h4>{footerTexts.social}</h4>
                        <ul className="footer-item-container">
                            {
                                footerTexts.socialItem.map((item) => {
                                    return (
                                        <li className="footer-item"><span><FontAwesomeIcon
                                            icon={item.socialIcon}/> {item.text}</span></li>
                                    )
                                })
                            }
                        </ul>
                    </BrowserView>
                </div>
                <div className="footer-sections etebar">
                    <h4>{footerTexts.etebar}</h4>
                    <ul className="footer-item-container">
                        <li className="footer-item">
                            <img src="https://www.digikala.com/static/files/3a24ea39.png" alt={footerTexts.etebar}/>
                        </li>
                    </ul>
                </div>
            </div>
            <FooterBottom/>
        </div>
    )
};
export default Footer;
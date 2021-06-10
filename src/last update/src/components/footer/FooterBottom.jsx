import React from 'react';
import Divider from "../divider/Divider";
import {BrowserView} from "react-device-detect";
import footerTexts from "./Data/footerData";
function FooterBottom(){
    return(
        <div className='footer-bottom-container'>
            <Divider className='footer-bottom-divider'/>
            <div className='footer-bottom'>
                <div>
                    <span>{footerTexts.copyRight}</span>
                    <div className='footer-bottom-text'>{footerTexts.rightText}</div>
                </div>
                <BrowserView>
                    <div className='left-footer'>
                        {
                            footerTexts.leftFooter.map((item)=>{
                            return(
                                <div>
                                    {item}
                                </div>
                            )
                            })
                        }
                    </div>
                </BrowserView>
            </div>
        </div>
    )
};
export default FooterBottom;
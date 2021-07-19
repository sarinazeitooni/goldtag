import React from 'react';
import Divider from "../divider/Divider";
import footerTexts from "./Data/footerData";
import useViewPort from "../../customIsMobileHook/useViewPort";
function FooterBottom(){
    const isMobile = useViewPort();
    return(
        <div className='footer-bottom-container'>
            <Divider className='footer-bottom-divider'/>
            <div className='footer-bottom'>
                <div>
                    <span>{footerTexts.copyRight}</span>
                    <div className='footer-bottom-text'>{footerTexts.rightText}</div>
                </div>
                    {!isMobile ? <div className='left-footer'>
                        {
                            footerTexts.leftFooter.map((item)=>{
                                return(
                                    <div key={item}>
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </div> : ' '}
            </div>
        </div>
    )
};
export default FooterBottom;
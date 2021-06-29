import React from 'react';
import './style/social.scss';
import texts from './texts/texts';
function Social(){
    return(
        <div className="social-container">
            {
                texts.map((item)=>{
                    return(
                        <div className={item.classes}>
                            <div className="social-text">
                                <div className="social-title">{item.title}</div>
                                <div className="social-subtitle">{item.subtitle}</div>
                            </div>
                            <div className="social-icon">
                                <img src={item.img}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Social;
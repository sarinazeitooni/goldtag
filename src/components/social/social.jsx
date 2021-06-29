import React from 'react';
import './style/social.scss';
import socialData from './Data/socialData';
function Social(){
    return(
        <div className="social-container">
            {
                socialData.map((item)=>{
                    return(
                        <div key={item.title} className={item.classes}>
                            <div className="social-text">
                                <div className="social-title">{item.title}</div>
                                <div className="social-subtitle">{item.subtitle}</div>
                            </div>
                            <div className="social-icon">
                                <img alt='item-pic' src={item.img}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Social;
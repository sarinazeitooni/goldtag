import React from 'react';
import './style/social.scss';
import socialData from './Data/socialData';
import {v4 as uuidv4} from "uuid";
function Social(){
    return(
        <div className="social-container">
            {
                socialData.map((item)=>{
                    return(
                        <div key={uuidv4()} className={item.classes}>
                            <div className="social-text">
                                <div className="social-title">{item.title}</div>
                                <div className="social-subtitle">{item.subtitle}</div>
                            </div>
                            <div className="social-icon">
                                <img alt='social-icon' src={item.img}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Social;
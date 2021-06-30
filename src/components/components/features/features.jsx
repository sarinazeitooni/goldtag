import React from 'react';
import './style/features.scss';
import texts from "./texts/texts";
function Features(){
    return(
        <div className="features-container">
            {texts.map((item)=>{
                return(
                    <div className="feature-item">
                        <div className="feature-icon">
                            <img src={item.img}alt="feature"/>
                        </div>
                        <div className="feature-text">
                            <div className="feature-title">{item.title}</div>
                            <div className='feature-info'>{item.info}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
export default Features;
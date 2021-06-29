import React from 'react';
import './style/features.scss';
import featuresData from "./Data/featuresData";
function Features(){
    return(
        <div className="features-container">
            {featuresData.map((item)=>{
                return(
                    <div key={item.title} className="feature-item">
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
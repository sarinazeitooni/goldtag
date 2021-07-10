import React from "react";
import {v4 as uuidv4} from "uuid";

function TitleSectionFeatures({id}){
    return(
        <div className='features-container'>
            {id.items.map((item)=>{
                return(
                    <div key={uuidv4()} className='feature'>
                        <div>
                            <img alt='features' src={item.img} />
                            <span>{item.title}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
export default TitleSectionFeatures;
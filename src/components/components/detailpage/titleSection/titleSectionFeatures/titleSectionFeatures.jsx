import React from "react";

function TitleSectionFeatures({id}){
    return(
        <div className='features-container'>
            {id.items.map((item)=>{
                return(
                    <div className='feature'>
                        <div>
                            <img src={item.img} />
                            <span>{item.title}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
export default TitleSectionFeatures;
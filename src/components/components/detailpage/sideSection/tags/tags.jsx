import React from "react";

function Tags({id}){
    return(
        <div className='item-tags-container'>{
            id.map((item)=>{
                return(
                    <button className='tag-btn'>{item}</button>
                )})
        }
        </div>
    )
};
export default Tags;
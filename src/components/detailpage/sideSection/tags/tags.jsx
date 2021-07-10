import React from "react";
import {v4 as uuidv4} from "uuid";

function Tags({id}){
    return(
        <div className='item-tags-container'>{
            id.map((item)=>{
                return(
                    <button key={uuidv4()} className='tag-btn'>{item}</button>
                )})
        }
        </div>
    )
};
export default Tags;
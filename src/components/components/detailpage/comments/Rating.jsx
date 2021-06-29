import commentTexts from "./texts/commentTexts";
import React from "react";
function Rating(){
    return(
        <div className="customer-opinion-container">
            <div className='rate-container'>
                <h3>{commentTexts.rate}</h3>
                <p>{commentTexts.rateRule}</p>
            </div>
        </div>
    )
}
export default Rating;
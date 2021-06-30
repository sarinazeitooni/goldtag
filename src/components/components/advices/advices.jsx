import React from 'react';
import AdviceTexts from "./texts/texts";
import './style/advices.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";
function Advices(){
    return(
        <div className="advices-container">
            <div className="advice-pic"><img src="https://cdn.goldtag.net/frontend/assets/v1/desktop/build/images/icon-subscribe.svg" alt=""/></div>
                <div>{AdviceTexts.enterEmail}</div>
            <div className="advices-input-container">
                <div className="advices-input-items advice-icon">
                <FontAwesomeIcon icon={faMailBulk}/>
                </div>
                <div className="advices-input-items">
                    <input type='text' className="advice-input" placeholder={AdviceTexts.emailPlaceHolder}></input>
                </div>
                <div className="advices-input-items advice-text">{AdviceTexts.getAnnounced}</div>
            </div>
            <hr></hr>
        </div>
    )
};
export default Advices;
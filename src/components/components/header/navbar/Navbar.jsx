import React from 'react';
import './style/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropDown from "./dropdown/Dropdown";
import texts from './texts/texts';
import {faStopwatch, faIdCard, faUser, faUserNurse}
from "@fortawesome/free-solid-svg-icons";
function Navbar(){
    return(
        <div id="navbar" style={{backgroundColor: 'hsla(0,0%,53%,.12)'}}>
            <ul className="menu-container">
                <li className="menu-item"> <FontAwesomeIcon icon={faStopwatch}></FontAwesomeIcon> <span>{texts.goldtagproduct}</span></li>
                <li className="menu-item"> <FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon> <span>{texts.goldtagservice}</span></li>
                {texts.dropdownmenu.map((item)=>{
                    return(
                        <li className="menu-item">
                            <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                            <span>{item.title}</span>
                            <DropDown menu={item} />
                        </li>
                    )
                })}
                <li className="menu-item"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>{texts.login}</li>
                <li className="menu-item"><FontAwesomeIcon icon={faUserNurse}></FontAwesomeIcon>{texts.signup}</li>
            </ul>
            <hr></hr>
        </div>
    )
}
export default Navbar;
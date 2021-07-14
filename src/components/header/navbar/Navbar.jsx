import React from 'react';
import './style/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropDown from "./dropdown/Dropdown";
import navbarData from './Data/navbarData';
import {faStopwatch, faIdCard, faUser, faUserNurse}
from "@fortawesome/free-solid-svg-icons";
function Navbar(){
    return(
        <div id="navbar" className='sticky'>
            <ul className="menu-container">
                <li className="menu-item"> <FontAwesomeIcon icon={faStopwatch}/> <span>{navbarData.goldtagproduct}</span></li>
                <li className="menu-item"> <FontAwesomeIcon icon={faIdCard}/> <span>{navbarData.goldtagservice}</span></li>
                {navbarData.dropdownmenu.map((item)=>{
                    return(
                        <li className="menu-item" key={item.title}>
                            <FontAwesomeIcon icon={item.icon}/>
                            <span>{item.title}</span>
                            <DropDown menu={item} />
                        </li>
                    )
                })}
                <li className="menu-item"><FontAwesomeIcon icon={faUser}/>{navbarData.login}</li>
                <li className="menu-item"><FontAwesomeIcon icon={faUserNurse}/>{navbarData.signup}</li>
            </ul>
            <hr/>
        </div>
    )
}
export default Navbar;
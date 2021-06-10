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
                <li className="menu-item"> <FontAwesomeIcon icon={faStopwatch}></FontAwesomeIcon> <span>{navbarData.goldtagproduct}</span></li>
                <li className="menu-item"> <FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon> <span>{navbarData.goldtagservice}</span></li>
                {navbarData.dropdownmenu.map((item)=>{
                    return(
                        <li className="menu-item">
                            <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                            <span>{item.title}</span>
                            <DropDown menu={item} />
                        </li>
                    )
                })}
                <li className="menu-item"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>{navbarData.login}</li>
                <li className="menu-item"><FontAwesomeIcon icon={faUserNurse}></FontAwesomeIcon>{navbarData.signup}</li>
            </ul>
            <hr></hr>
        </div>
    )
}
export default Navbar;
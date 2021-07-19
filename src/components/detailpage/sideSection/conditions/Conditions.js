import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import Divider from "../../../divider/Divider";
import React from "react";
import {v4 as uuidv4} from "uuid";
import useViewPort from "../../../../customIsMobileHook/useViewPort";

function Conditions({id}){
    const isMobile = useViewPort();
    return(
        <React.Fragment>
            <h3> <FontAwesomeIcon icon={faBook}/>{id.conditions}</h3>
                {!isMobile ? <Divider className=''/> :''}
            <ul>
                {
                    id.items.map((item)=>{
                        return(
                            <li key={uuidv4()} className={item.class}>{item.text}</li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
}
export default Conditions;
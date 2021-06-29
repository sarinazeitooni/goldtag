import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import {BrowserView} from "react-device-detect";
import Divider from "../../../divider/Divider";
import React from "react";

function Conditions({id}){
    return(
        <div>
            <h3> <FontAwesomeIcon icon={faBook}/>{id.conditions}</h3>
            <BrowserView>
                <Divider className=''/>
            </BrowserView>
            <ul>
                {
                    id.items.map((item)=>{
                        return(
                            <li className={item.class}>{item.text}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
};
export default Conditions;
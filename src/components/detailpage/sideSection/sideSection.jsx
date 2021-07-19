import React from 'react';
import './style/sidesection.scss';
import './style/mainsidesectionstyles.scss';
import sideSectionData from './Data/sideSectionData';
import Conditions from './conditions/Conditions';
import SideAddress from './address/address';
import Tags from "./tags/tags";
import SideSectionDescription from './description/sideSectionDescription'
function SideSection({ id, clothes , description , itemTags}){
    return(
        <div className='side-section-container'>
            <Conditions id={sideSectionData}/>
            <SideSectionDescription clothes={clothes} description={description}/>
            <SideAddress comments={id} id={sideSectionData}/>
            <Tags id={itemTags}/>
        </div>
    )
};
export default SideSection;
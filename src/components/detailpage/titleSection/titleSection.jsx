import React from 'react';
import './style/titleSection.scss';
import './style/prices.scss';
import './style/labels.scss';
import './style/stars.scss';
import './style/sharing.scss';
import './style/features.scss';
import titleSectionData from "./Data/titleSectionData";
import PurchaseButton from "./purchaseButton/PurchaseButton";
import TitleSectionFeatures from "./titleSectionFeatures/titleSectionFeatures";
import TitleSharing from "./titleSharing/TitleSharing";
import Titles from "./titles/Titles";
import Buttons from './buttons/Buttons';
import SharingContainer from "./sharingContainer/sharing";
function TitleSection({ data }) {
    return (
        <div className='title-section'>
            <Titles id={data} titleSection={titleSectionData}/>
            <PurchaseButton data={data} id={titleSectionData}/>
            <Buttons data={data} titleSectionData={titleSectionData}/>
            <SharingContainer titleSectionData={titleSectionData}/>
            <TitleSectionFeatures id={titleSectionData}/>
            <TitleSharing id={titleSectionData}/>
        </div>
    )
}
export default TitleSection;
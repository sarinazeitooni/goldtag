import React from 'react';
import SideSection from '../sideSection/sideSection';
import MainSection from '../mainSection/mainSection';
import TitleSection from '../titleSection/titleSection';
import Attributes from '../Attributes/Attributes';
import './style/details.scss';
import data from '../../assets/data/Data';
import {useParams} from 'react-router-dom';
function Detail(){
    let Data = data;
    let {id} = useParams();
    return(
        <div className='detail-container'>
            <div>
                <MainSection id={Data[id]} />
            </div>
            <div>
                <TitleSection data={Data[id]} />
                <Attributes data={Data[id]}/>
                <SideSection clothes={Data[id].clothes} id={Data[id]} description={Data[id].description} itemTags={Data[id].tags}/>
            </div>
        </div>
    )
};
export default Detail;
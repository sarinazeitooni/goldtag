import React from 'react';
import SideSection from './sideSection';
import MainSection from './mainSection';
import TitleSection from './titleSection';
import Property from './property';
import '../../style/detail.scss';
import '../../style/detailResponsive.scss';
import data from '../../data/Data';
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
                <Property data={Data[id]}/>
                <SideSection clothes={Data[id].clothes} id={Data[id]} description={Data[id].description} itemTags={Data[id].tags}/>
            </div>
        </div>
    )
};
export default Detail;
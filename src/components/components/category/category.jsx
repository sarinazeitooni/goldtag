import React from 'react';
import './style/category.scss';
import data from './data/data';
import {BrowserView , MobileView} from 'react-device-detect';
function Category (){
    return(
        <div className="category-container">
        <BrowserView>
        <h3>{data.h3text}</h3>
        <div className="category-item-container">
            {
                data.images.map((item)=>{
                    return(
                        <img alt='Baner' src={item}/>
                    )
                })
            }
        </div>
        <hr style={{margin : '10px 95px'}}></hr>
        </BrowserView>
        <MobileView>
        <hr></hr>
            <img style={{width:"100%", marginTop:"15px"}} src="https://cdn.goldtag.net/web/uploads/banners/b1d1.jpg" alt="baner"/>
        </MobileView>
    </div>
    )
}
export default Category;
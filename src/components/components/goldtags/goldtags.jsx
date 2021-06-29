import React from 'react';
import './style/tags-container.scss';
import './style/cards-container.scss';
import data from '../assets/data/Data';
import texts from './texts/texts'
import Card from '../card/card';
import {MobileView} from 'react-device-detect';
function Goldtags(){
    return(
        <div>
            <div className="tags-container">
                <h3>{texts.last24h}</h3>
                <MobileView style={{display : 'inline-block'}}>
                <button className='more-m'>{texts.more}</button>
                </MobileView>
                <div className="cards-container">
                {data.map((item)=>
                        <Card id={item.id} available={item.isAvailable} size={'card-container'} className={item.className} cover={item.cover} title={item.title}
                        subtitle={item.subtitle} price={item.price} purchased={item.purchased} newprice={item.newprice}/>     
                )}
                </div>
                
            </div>
        </div>
        
    )
};
export default Goldtags;
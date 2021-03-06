import React from 'react';
import './style/tags-container.scss';
import './style/cards-container.scss';
import data from '../assets/data/Data';
import goldtagTexts from './texts/goldtagTexts'
import Card from '../card/card';
import { v4 as uuidv4 } from 'uuid';
import useViewPort from "../../customIsMobileHook/useViewPort";
function Goldtags() {
    const isMobile = useViewPort();
    return (
        <React.Fragment>
            <div className="tags-container">
                <h3>{goldtagTexts.last24h}</h3>
                    {isMobile ? <div className='goldtag-btn'> <button className='more-m'>{goldtagTexts.more}</button></div> :''}
                <div className="cards-container">
                    {data.map((item) =>
                        <Card key={uuidv4()} id={item.id} currency='تومان' beenPurchased={item.beenPurchased} available={item.isAvailable}
                              size={'card-container'} className={item.className} cover={item.cover} title={item.title}
                              subtitle={item.subtitle} price={item.price} purchased={item.purchased}
                              newprice={item.newprice}/>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
};
export default Goldtags;
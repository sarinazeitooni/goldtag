import React from 'react';
import './style/tags-container.scss';
import './style/cards-container.scss';
import data from '../assets/data/Data';
import goldtagTexts from './texts/goldtagTexts'
import Card from '../card/card';
import {MobileView} from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTag} from "@fortawesome/free-solid-svg-icons";
function Goldtags() {
    return (
        <div>
            <div className="tags-container">
                <FontAwesomeIcon className='tag-icon' icon={faTag} />
                <h3>{goldtagTexts.last24h}</h3>
                <MobileView className='goldtag-btn'>
                    <button className='more-m'>{goldtagTexts.more}</button>
                </MobileView>
                <div className="cards-container">
                    {data.map((item) =>
                        <Card key={item.id} id={item.id} currency='تومان' beenPurchased={item.beenPurchased} available={item.isAvailable}
                              size={'card-container'} className={item.className} cover={item.cover} title={item.title}
                              subtitle={item.subtitle} price={item.price} purchased={item.purchased}
                              newprice={item.newprice}/>
                    )}
                </div>

            </div>
        </div>

    )
};
export default Goldtags;
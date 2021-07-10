import React from 'react';
import '../../style/titleSection.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSchool, faShoppingBag, faStar} from "@fortawesome/free-solid-svg-icons";
import {BrowserView, MobileView} from 'react-device-detect';
import {v4 as uuidv4} from "uuid";

function TitleSection({data}) {
    const stars = [1, 2, 3, 4, 5];
    let discountPercent = ((data.price - data.newprice) * 100) / data.price;

    return (
        <div className='title-section'>
            <h1 className='title'>{data.title}</h1>
            <h4 className='subtitle'>{data.subtitle}</h4>
            <div className='star-container'>
                <div className='stars'>{stars.map(() => {
                    return (<FontAwesomeIcon key={uuidv4()} icon={faStar}/>)
                })} ___ 0 نظر
                </div>
                <BrowserView>
                    <div>
                        <button className='submit-btn'>ارسال آنی</button>
                    </div>
                </BrowserView>
            </div>
            <button className='price-container-btn'>
                <div className='shopping-icon'><FontAwesomeIcon icon={faShoppingBag}/></div>
                <div>
                    <div className='new-price-container'><span>خرید</span><span
                        className='price-num'>{data.newprice}</span><span>تومان</span></div>
                    <div className='old-price-container'><span
                        className='discount-percent'> {discountPercent}% تخفیف </span><span
                        className='old-price'>{data.price}تومان</span></div>
                </div>
            </button>
            <button className='available-btn'><FontAwesomeIcon icon={faShoppingBag}/> درخواست تمدید</button>
            <div className="label-info-container">
                <div className="label-info">
                    <span className='info'> {data.daynum} </span>
                    !فرصت باقیست

                </div>
                <div className="label-info">
                    <span className='info'> {data.purchased} </span>
                    فروخته شده
                </div>
            </div>
            <div className='product-charity'>
                با خرید این محصول از گلدتگ <span style={{color: '#ff7a7a'}}>100 تومان</span> به <span
                style={{color: '#436fbe'}}>خیریه</span> کمک کرده اید.
            </div>

            <MobileView>
                <div className='sharing-container'>
                    <div>این پیشنهاد را با دوستان‌تان به اشتراک بگذارید…</div>
                    <div>
                        <span className="social-media-icon"><FontAwesomeIcon icon={faSchool}/></span>
                        <span className="social-media-icon"><FontAwesomeIcon icon={faSchool}/></span>
                        <span className="social-media-icon"><FontAwesomeIcon icon={faSchool}/></span>
                    </div>
                </div>
            </MobileView>

            <div className='features-container'>
                <div className='feature'>
                    <div><img src="https://cdn.goldtag.net/frontend/assets/v1/desktop/build/images/icon-4.svg" alt=""/>
                        <span>ضمانت سلامت و تطبیق کالا</span></div>
                </div>
                <div className='feature'>
                    <div><img src="https://cdn.goldtag.net/frontend/assets/v1/desktop/build/images/icon-3.svg" alt=""/>
                        <span>کمک به خیریه‌ها در هر خرید</span></div>
                </div>
                <div className='feature'>
                    <div><img src="https://cdn.goldtag.net/frontend/assets/v1/desktop/build/images/icon-2.svg" alt=""/>
                        <span>هفت روز ضمانت برگشت</span></div>
                </div>
                <div className='feature'>
                    <div><img src="https://cdn.goldtag.net/frontend/assets/v1/desktop/build/images/icon-1.svg" alt=""/>
                        <span>ضمانت بهترین قیمت</span></div>
                </div>
            </div>
            <hr></hr>
            <BrowserView>
                <div className='sharing-container'>
                    <div>این پیشنهاد را با دوستان‌تان به اشتراک بگذارید…</div>
                    <div>
                        <span className="social-media-icon"><FontAwesomeIcon icon={faSchool}/></span>
                        <span className="social-media-icon"><FontAwesomeIcon icon={faSchool}/></span>
                        <span className="social-media-icon"><FontAwesomeIcon icon={faSchool}/></span>
                    </div>
                </div>
            </BrowserView>
        </div>
    )
}

export default TitleSection;
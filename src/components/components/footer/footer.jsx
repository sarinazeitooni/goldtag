import React from 'react';
import './style/footer.scss';
import './style/footer-bottom.scss';
import {BrowserView , MobileView} from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faMap,} from "@fortawesome/free-solid-svg-icons";
function Footer(){
    return(
       <div className='footer'>
            <div className='footer-container'>
                <div className="footer-sections goltag">
                    <h4>گلدتگ</h4>
                    <ul className="footer-item-container">
                        <li style={{color:'#436fbe'}} className="footer-item">تماس با ما</li>
                        <li className="footer-item">درباره ما</li>
                        <li className="footer-item">گلدتگ چگونه کار می کند</li>
                        <li className="footer-item">خیریه های تحت حمایت </li>
                        <li className="footer-item">کسب و کار شما در گلدتگ</li>
                        <li className="footer-item">سوالات متداول</li>
                    </ul>
                </div>
            <div className="footer-sections social">
                <BrowserView><h4>محبوب‌ترین دسته‌بندی ها</h4></BrowserView>
                <MobileView><h4>شبکه های اجتماعی</h4></MobileView>
                <ul className="footer-item-container">
                    <BrowserView>
                    <li className="footer-item">دکوری</li>
                    <li className="footer-item">پوشاک مردانه</li>
                    <li className="footer-item">لباس کودک</li>
                    <li className="footer-item">لوازم التحریر</li>
                    <li className="footer-item">ورزشی و سرگرمی</li>
                    <li className="footer-item">لوازم شخصی</li>
                    <li className="footer-item">عینک</li>
                    </BrowserView>
                    <MobileView>
                    <li className="footer-item">تلگرام</li>
                    <li className="footer-item">اینستاگرام</li>
                    <li className="footer-item">فیس بوک</li>
                    </MobileView>
                </ul>
            </div>
            <div className="footer-sections tamas">
                <h4>تماس</h4>
                <ul className="footer-item-container">
                    <li className="footer-item"><FontAwesomeIcon icon={faPhone}/> 021-2811220</li>
                    <li className="footer-item"><FontAwesomeIcon icon={faMap}/> پاسداران، خیابان نیستان سوم، خیابان راستوان، تقاطع حجت سوری
                     (ضلع جنوب غربی میدان احتشامیه)، پلاک 75</li>
                </ul>
                <BrowserView>
                <h4>شبکه های اجتماعی</h4>
                <ul className="footer-item-container">
                    <li className="footer-item">تلگرام</li>
                    <li className="footer-item">اینستاگرام</li>
                    <li className="footer-item">فیس بوک</li>
                </ul>
                </BrowserView>
            </div>
            <div className="footer-sections etebar">
                <h4>اعتبارات</h4>
                <ul className="footer-item-container">
                    <li className="footer-item">
                        <img src="https://www.digikala.com/static/files/3a24ea39.png" alt="اعتبارات"/>
                    </li>
                </ul>
            </div>
        </div>

        <div className='footer-bottom-container'>
            <hr></hr>
            <div className='footer-bottom'>
                <div>
                    <span>کپی رایت 1398</span>
                    <div className='footer-bottom-text'>© تمامی حقوق این سایت برای گلدتگ محفوظ است.</div>
                </div>
                <BrowserView>
                    <div className='left-footer'>
                        <div>درباره ما</div>
                        <div>شرایط استفاده</div>
                        <div>حقوق مشتریان</div>
                    </div>
                </BrowserView>
            </div>
        </div>
       </div>
    )
};
export default Footer;
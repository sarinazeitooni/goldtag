import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle,faBook ,faSearchLocation,faPhone,faMap,faTag} from "@fortawesome/free-solid-svg-icons";
import '../../style/sidesection.scss';
import Comments from './comments'
import {BrowserView , MobileView} from 'react-device-detect';
function SideSection({ id, clothes , description , itemTags}){
    let clothesImage; 
    if(clothes){
        clothesImage = <img style={{width: "100%"}} src='https://cdn.goldtag.net/images/tshirtnike78.jpg' alt='clothes'/>;
    }else{
        clothesImage = '';
    }
    return(
        <div className='side-section-container'>
            <h3> <FontAwesomeIcon icon={faBook}/> شرایط استفاده</h3>
            <BrowserView>
            <hr/>
            </BrowserView>
            
            <ul>
                <li>هزینه ارسال در شهر تهران فقط 8000 تومان</li>
                <li>هزینه ارسال به سایر شهرها و شهرستانها بعهده خریدار می باشد</li>
                <li className='colored'>ارسال سفارشات در تهران حداکثر 3 روز بعد از آخرین ثبت سفارش</li>
                <li className='colored'>ارسال به تمامی شهرستان ها با هزینه ثابت 16,000 تومان
                     توسط پست پیشتاز و هزینه ثابت 18,000 توسط پست چاپار</li>
                <li className='colored'>ثبت درخواست ارسال پستی به عهده خریدار می باشد</li>
                <li className='colored'>مدت زمان تحویل سفارشات به پست حداکثر دو روز کاری بعد از ثبت درخواست ارسال پستی</li>
                <li>در صورت مشکل در تامین موجودی، سفارشات لغو و تمام مبلغ به حساب کاربری شما برگردانده میشود</li>
                <li>امکان درخواست برگشت وجه، از طریق پنل کاربری!</li>
                <li className='colored'> تمام گلدتگ‌های (مختلف) سفارش داده شده باهم و با یک هزینه ارسال میشوند (تهران و شهرستان)</li>
                <li>عد از خرید لطفاٌ اطلاعات تماس و آدرس را بطور کامل در پروفایل وارد کنید</li>
                <li className='colored'>امکان دریافت کالا بصورت حضوری از 9 صبح تا 5 عصر بهمراه کد گلدتگ (بجز روزهای تعطیل)</li>
                <li>برای خریدی مطمئن،حتما قبل از سفارش گلدتگ، از تمامی مراکز آنلاین و فروشگاهی استعلام قیمت، امکانات و کیفیت بگیرید</li>
            </ul>
            <MobileView>
            
            <hr/>
            
            <div className='description'>
                <h3> <FontAwesomeIcon icon={faInfoCircle} /> توضیحات </h3>
                <p>{description}</p>
            </div>
            
            {clothesImage}
            <hr></hr>
            </MobileView>
            <br/>
            <h3> <FontAwesomeIcon icon={faSearchLocation}/> آدرس</h3>
            <hr/>
            <img className='map-img' width={370} height={230} src="https://api.cedarmaps.com/v1/static/light/35.777506,51.355780,15/400x250@2x?access_token=c73b0ada9f835f63eba89edde51429872f8f21af&markers=marker-default|35.777506,51.355780" alt="map"/>
                    <div className="address-phone"><FontAwesomeIcon icon={faPhone}/> 021-2811220</div>
                    <div className="address-phone"><FontAwesomeIcon icon={faMap}/> پاسداران، خیابان نیستان سوم، خیابان راستوان، تقاطع حجت سوری
                     (ضلع جنوب غربی میدان احتشامیه)، پلاک 75</div>
                     <MobileView>
                        <Comments id={id}/>
                     </MobileView>
            <h3><FontAwesomeIcon icon={faTag}/> برچسب ها</h3>
            <hr></hr>
            <div className='item-tags-container'>{
                    itemTags.map((item)=>{
                        return(
                            <button className='tag-btn'>{item}</button>
                        )})
                }
            </div>
        </div>
    )
};
export default SideSection;
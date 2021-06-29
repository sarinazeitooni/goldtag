import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment,faComments} from "@fortawesome/free-solid-svg-icons";
import '../../style/gold-comments.scss';
import '../../style/customer-comments.scss';
import '../../style/comments-container.scss';
import {BrowserView , MobileView} from 'react-device-detect';
function Comments({id}){
    const data = id.comments;
    return(
        <div className='comments-container'>
            <a className='QandA'><FontAwesomeIcon icon={faComments}></FontAwesomeIcon> پرسش و پاسخ </a>
            <a><FontAwesomeIcon icon={faComment}></FontAwesomeIcon> نظرات مشتریان </a>
            <hr ></hr>
            <div className='QandA-container'>
                    {data.map((item)=>{
                        return(
                            <div className='QA-container'>
                                <div className="customer">
                                    <div className="customer-info">
                                        <img src="https://cdn.goldtag.net/web/uploads/pictures/users/thumb/avatar_women.jpg" alt="customer"/>
                                        <div className="customer-text-info">
                                            <h3 className="customer-name">{item.name}</h3>
                                            <div className="date">{item.date}</div>
                                        </div>
                                    </div>
                                    <p className="customer-comment">{item.customercomment}</p>
                                </div>

                                <div className='gold'>

                                    <MobileView className='gold-info'>
                                        <div className="gold-info-text">
                                        <h3 className="customer-name-gold">گلدتگ</h3>
                                            <div className="date">{item.date}</div>
                                        </div>
                                    </MobileView>
                                    <img className='gold-avatar' src='https://cdn.goldtag.net/web/uploads/pictures/users/thumb/1_1556417043299.jpg' alt="gold"/>
                                    <p className="goldcomment">{item.goldcomment}</p>
                                </div>
                                <hr className='dashed'></hr>
                            </div>
                        )
                    })}
            </div>
            <div className="customer-opinion-container">
                <div className='rate-container'>
                    <h3>ارسال نظر!</h3>
                    <p>
                    برای ارسال نظر باید وارد سایت شوید. برای این کار از گزینه ورود در منو بالا استفاده نمایید.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Comments
import React from 'react';
import LikeAndDislike from "./likes/LikeAndDislike";
import commentTexts from "./texts/commentTexts";
import Divider from "../../divider/Divider";
import useViewPort from "../../../customIsMobileHook/useViewPort";
function Comment({name, date, customercomment, goldcomment,like,dislike, id,data}){
    const isMobile = useViewPort();
    return(
        <div className='QA-container'>
            <div className="customer">
                <div className="customer-info">
                    <img src="https://cdn.goldtag.net/web/uploads/pictures/users/thumb/avatar_women.jpg" alt="customer"/>
                    <div className="customer-text-info">
                        <h3 className="customer-name">{name}</h3>
                        <div className="date">{date}</div>
                    </div>
                </div>
                <p className="customer-comment">{customercomment}</p>
                <LikeAndDislike data={data} id={id}/>
            </div>
            <div className='gold'>
                {isMobile ? <div className='gold-info'><div className="gold-info-text">
                    <h3 className="customer-name-gold">{commentTexts.goldTag}</h3>
                    <div className="date">{date}</div>
                </div></div> : '' }
                <img className='gold-avatar' src='https://cdn.goldtag.net/web/uploads/pictures/users/thumb/1_1556417043299.jpg' alt="gold"/>
                <p className="goldcomment">{goldcomment}</p>
            </div>
            <Divider className='dashed'/>
        </div>
    )
};
export default Comment;
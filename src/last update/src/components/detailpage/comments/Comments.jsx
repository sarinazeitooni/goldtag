import React from 'react';
import './style/gold-comments.scss';
import './style/customer-comments.scss';
import './style/comments-container.scss';
import Comment from "./Comment";
function Comments({items}){
    const data = items.comments;
    return(
            <div className='QandA-container'>
                    {data && data.map((item)=>{
                        return(
                            <div>
                                <Comment like={item.likes.like} likeId={item.likes.id} dislike={item.likes.dislike} name={item.name} date={item.date} customercomment ={item.customercomment} goldcomment={item.goldcomment} />
                            </div>
                        )
                    })}
            </div>
    );
}
export default Comments
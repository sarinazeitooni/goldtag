import React from 'react';
import './style/gold-comments.scss';
import './style/customer-comments.scss';
import './style/comments-container.scss';
import Comment from "./Comment";
function Comments({items}){
    const data = items.comments;
    console.log(data);
    return(
            <div className='QandA-container'>
                    {data.map((item)=>{
                        return(
                            <div key={item.id}>
                                <Comment like={item.like} dislike={item.dislike} name={item.name} date={item.date} customercomment ={item.customercomment} goldcomment={item.goldcomment} />
                            </div>
                        )
                    })}
            </div>
    );
}
export default Comments
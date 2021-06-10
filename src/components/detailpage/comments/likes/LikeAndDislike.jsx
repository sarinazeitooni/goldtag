import React, {useState} from 'react';
import '../style/like-and-dislike.scss';
import {useDispatch, useSelector} from "react-redux";
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import actionTypes from "../../../../redux/actionTypes/actionTypes";
import ls from 'local-storage';
function LikeAndDislike({likeId,like,dislike}){
    const dispatch = useDispatch();
    const likeItem = useSelector((state) => state.likes.likes.id);
    let likeNum = useSelector((state) => state.likes.likes.id.like)
    let dislikeNum = useSelector((state) => state.likes.dislikes.id.dislike)
    const dislikeItem = useSelector((state) => state.likes.dislikes.id);
    // let likes = (likeItem == likeId) ? likeNum : 0;
    // let dislikes =(dislikeItem == likeId) ? dislikeNum : 0;
    function Dispatch(action){
        dispatch({
            type : action ,
            payload: {
                likeId
            }
        })
    }
    function addDislike(){
        Dispatch(actionTypes.Like);
    }
    function addLike(){
        Dispatch(actionTypes.Dislike);
    }
    return(
        <div className='like-dislike-container'>
            <button className='like-buttons' onClick={addDislike}>
                <ThumbUpAltOutlinedIcon/>
                <span className='counter-container'>{likeNum}</span>
            </button>
            <button className='like-buttons' onClick={addLike}>
                <ThumbDownOutlinedIcon/>
                <span className='counter-container'>{dislikeNum}</span>
            </button>
        </div>
    )
}
export default LikeAndDislike;
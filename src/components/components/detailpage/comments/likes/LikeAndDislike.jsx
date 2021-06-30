import React, {useState} from 'react';
import '../style/like-and-dislike.scss';
import {useDispatch, useSelector} from "react-redux";
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import actionTypes from "../../../../redux/actionTypes/actionTypes";
function LikeAndDislike({like,dislike}){
    localStorage.setItem('like' , like);
    localStorage.setItem('dislike' , dislike);
    const dispatch = useDispatch();
    let likes = useSelector((state) => state.likes.like);
    let dislikes = useSelector((state) => state.likes.dislike);
    function Dispatch(action){
        dispatch({
            type : action
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
                <span className='counter-container'>{likes}</span>
            </button>
            <button className='like-buttons' onClick={addLike}>
                <ThumbDownOutlinedIcon/>
                <span className='counter-container'>{dislikes}</span>
            </button>
        </div>
    )
}
export default LikeAndDislike;
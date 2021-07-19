import React from 'react';
import '../style/like-and-dislike.scss';
import {useDispatch, useSelector} from "react-redux";
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import actionTypes from "../../../../redux/actionTypes/actionTypes";
function LikeAndDislike({id}){
    const dispatch = useDispatch();
    let likes = useSelector((state) => state.likes.like);
    let dislikes = useSelector((state) => state.likes.dislike);
    function Dispatch(action , e){
        dispatch({
            type : action,
            id : e
        })
    }
    function addDislike(e){
        Dispatch(actionTypes.Like , e);
        console.log(e,"dislike");
    }
    function addLike(e){
        Dispatch(actionTypes.Dislike , e);
        console.log(e,"like");
   }
    return(
        <div className='like-dislike-container'>
            <button className='like-buttons' onClick={()=>{addDislike(id)}}>
                <ThumbUpAltOutlinedIcon/>
                <span className='counter-container'>{likes}</span>
            </button>
            <button className='like-buttons' onClick={()=>{addLike(id)}}>
                <ThumbDownOutlinedIcon/>
                <span className='counter-container'>{dislikes}</span>
            </button>
        </div>
    )
}
export default LikeAndDislike;
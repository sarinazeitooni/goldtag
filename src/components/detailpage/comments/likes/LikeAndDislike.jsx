import React, {useState} from 'react';
import '../style/like-and-dislike.scss';
import {useDispatch, useSelector} from "react-redux";
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import actionTypes from "../../../../redux/actionTypes/actionTypes";
function LikeAndDislike({data,id}){
    const dispatch = useDispatch();
    let items = useSelector((state) => state.likes.items);
    let targetObject;
    let target;
    const [item , setItem] = useState(items.find((object) => object.id === id));
    function Dispatch(action , targetItem){
        dispatch({
            type : action,
            targetItem : targetItem
        })
    }
    function addDislike(id){
        target = data.find((object) => object.id === id);
        targetObject = {
            id : target.id,
            like : target.like,
            dislike : target.dislike
        }
        Dispatch(actionTypes.Like , targetObject);
    }
    function addLike(id){
        target = data.find((object) => object.id === id);
        targetObject = {
            id : target.id,
            like : target.like,
            dislike : target.dislike
        }
        Dispatch(actionTypes.Dislike , targetObject);
   }
    return(
        <div className='like-dislike-container'>
            <button className='like-buttons' onClick={()=>{addDislike(id)}}>
                <ThumbUpAltOutlinedIcon/>
                <span className='counter-container'>{item && item.like}</span>
            </button>
            <button className='like-buttons' onClick={()=>{addLike(id)}}>
                <ThumbDownOutlinedIcon/>
                <span className='counter-container'>{item && item.dislike}</span>
            </button>
        </div>
    )
}
export default LikeAndDislike;
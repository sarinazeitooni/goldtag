import React from 'react';
import {useDispatch,useSelector } from "react-redux";
import Comments from "./Comments";
import Rating from "./Rating";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faComments} from "@fortawesome/free-solid-svg-icons";
import commentTexts from "./texts/commentTexts";
import actionTypes from "../../../redux/actionTypes/actionTypes";
function CommentsContainer({id}){
    const dispatch = useDispatch();
    function Dispatch(action){
        dispatch({
            type : action
        })
    }
    let target;
    function style(e){
        target = e.target;
        target.classList.add('clicked');
    }
    function showComments(e){
        Dispatch(actionTypes.Comments);
        style(e);
    }
    function showRating(e){
        Dispatch(actionTypes.Rating);
        style(e);
    }
    const Tab = useSelector(state => state.comments.Tab);
    return(
        <div className='comments-container'>
                <span className={ (Tab) ? "clicked Tabs" : 'unClicked Tabs'} onClick={showComments}>
                    <FontAwesomeIcon icon={faComments}/>{commentTexts.QandA}
                </span>
                <span className={ (Tab) ? 'unClicked Tabs' : "clicked Tabs"} onClick={showRating}>
                    <FontAwesomeIcon icon={faComment}/>{commentTexts.comments}
                </span>
                <hr/>
            {(!Tab) ? <Comments items={id}/> : ''}
            <Rating/>
        </div>
    )
}
export default  CommentsContainer;
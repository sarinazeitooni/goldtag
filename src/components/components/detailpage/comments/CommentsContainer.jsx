import React, {useEffect, useState} from 'react';
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
    };
    function showRating(e){
        Dispatch(actionTypes.Rating);
        style(e);
    };
    const Tab = useSelector(state => state.comments.Tab);
    localStorage.setItem('comments' , JSON.stringify(id.comments));
    return(
        <div className='comments-container'>
                <a className={ (Tab) ? "clicked Tabs" : 'unClicked Tabs'} onClick={showComments}>
                    <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>{commentTexts.QandA}
                </a>
                <a className={ (Tab) ? 'unClicked Tabs' : "clicked Tabs"} onClick={showRating}>
                    <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>{commentTexts.comments}
                </a>
                <hr></hr>
            {(!Tab) ? <Comments items={id}/> : ''}
            <Rating/>
        </div>
    )
}
export default  CommentsContainer;
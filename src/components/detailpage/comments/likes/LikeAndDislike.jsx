import React, {useState} from 'react';
import '../style/like-and-dislike.scss';
import {useDispatch, useSelector} from "react-redux";
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import actionTypes from "../../../../redux/actionTypes/actionTypes";

function LikeAndDislike({data, id}) {
    const dispatch = useDispatch();
    let items = useSelector((state) => state.likes.items);
    let targetObject, target;
    const [item] = useState(items.find((object) => object.id === id));
    function Dispatch(action, targetItem) {
        dispatch({
            type: action,
            targetItem: targetItem
        })
    }
    function add(id, action) {
        target = data.find((object) => object.id === id);
        targetObject = {
            id: target.id,
            like: target.like,
            dislike: target.dislike
        }
        Dispatch(action, targetObject);
    }
    const buttons = [{
        action: actionTypes.Like,
        icon: <ThumbUpAltOutlinedIcon/>,
        text: item &&  item.like
    },{
        action: actionTypes.Dislike,
        icon: <ThumbDownOutlinedIcon/>,
        text: item &&  item.dislike
    }]
    return (
        <div className='like-dislike-container'>
            {
                buttons.map((index,item)=>{
                    return(
                        <button key={item} className='like-buttons' onClick={() => {
                            add(id, index.action)
                        }}>
                            {index.icon}
                            <span className='counter-container'>{index.text}</span>
                        </button>
                    )
                })
            }
        </div>
    )
}
export default LikeAndDislike;
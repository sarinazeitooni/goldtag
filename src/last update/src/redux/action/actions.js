import actionTypes from '../actionTypes/actionTypes';
const Comments = () => ({
    type: actionTypes.Comments
});

const Rating = () => ({
    type: actionTypes.Rating
});
const Like = () => ({
    type: actionTypes.Like
});
const Dislike = () => ({
    type: actionTypes.Dislike
});

export default {
    Comments,
    Rating,
    Like,
    Dislike
};
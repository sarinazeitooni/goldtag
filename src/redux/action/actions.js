import actionTypes from '../actionTypes/actionTypes';
const Comments = () => ({
    type: actionTypes.Comments
});

const Rating = () => ({
    type: actionTypes.Rating
});
const Like = (e) => ({
    type: actionTypes.Like,
    id : e
});
const Dislike = (e) => ({
    type: actionTypes.Dislike,
    id : e
});
const exportObject = {
    Comments,
    Rating,
    Like,
    Dislike
}
export default exportObject;
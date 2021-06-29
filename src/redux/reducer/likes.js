const initialState = {
    like : 0,
    dislike : 0
}
export default function likes(state=initialState, action) {
    switch (action.type) {
        case 'Like':
            let likes = JSON.parse(localStorage.getItem("like"));
            return {
                ...state,
                like: state.like+1
            };
        case 'Dislike':
            let dislikes = JSON.parse(localStorage.getItem("dislike"));
            return{
                ...state,
                dislike: state.dislike+1
            }
        default:
            return state;
    }
}
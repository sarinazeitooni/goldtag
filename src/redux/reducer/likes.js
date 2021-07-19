const initialState = {
    like : 0,
    dislike : 0
}
export default function likes(state=initialState, action) {
    switch (action.type) {
        case 'Like':
            return {
                ...state,
                like: state.like+1,
                id : action.payload
            };
        case 'Dislike':
            return{
                ...state,
                dislike: state.dislike+1,
                id : action.payload
            }
        default:
            return state;
    }
}
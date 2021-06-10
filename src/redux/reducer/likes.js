const initialState = {
    likes : {
        like : 0,
        dislike : 0
    }
}
export default function likes(state=initialState, action) {
    switch (action.type) {
        case 'Like':
            return {
                ...state,
                likes : {
                    id : action.payload.likeId,
                    like : state.likes.like+1
                }
            };
        case 'Dislike':
            return{
                ...state,
                dislikes : {
                    id : action.payload.likeId,
                    dislike : state.dislikes.dislike+1
                }
            }
        default:
            return state;
    }
}
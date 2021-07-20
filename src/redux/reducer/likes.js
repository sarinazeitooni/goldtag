let initialState = {
    like: 0,
    dislike: 0
}
let id;
let target;
let data;
export default function likes(state = initialState, action) {
    console.log(action , "ACTION");
    switch (action.type) {

        case 'Like':
            id = action.id;
            data = action.data

            return {
                state,
                like: state.like + 1,
                id : action.id
            }
        case 'Dislike':
            id = action.id;
            return {
                ...state,
                dislike: state.dislike + 1,
                id : action.id
            }
        default:
            return state;
    }
}
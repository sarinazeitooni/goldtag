const initialState = {
    Tab : false
}
export default function comments(state=initialState, action) {
    switch (action.type) {
        case 'Comments':
            return {
                Tab : true,
            };
        case 'Rating':
            return{
                Tab : false
            }
        default:
            return state;
    }
}
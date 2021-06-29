const initialState = {
    Tab : false
}
function reducer(state=initialState, action) {
    switch (action.type) {
        case 'Comments':
            return {
                Tab : true
            };
        case 'Rating':
            return{
                Tab : false
            }
        default:
            return state;
    }
}
export default reducer;
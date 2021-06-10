import { combineReducers } from 'redux';
import comments from './comments';
import likes from'./likes'
const rootReducer = combineReducers({
    comments,
    likes
})
export default rootReducer;
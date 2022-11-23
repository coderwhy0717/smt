import { combineReducers } from "redux-immutable";
import { reducer as homes } from '../pages/home/store'
// 模块结合
const cReducer = combineReducers({
    home:homes
})

export default cReducer
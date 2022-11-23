import { Map } from 'immutable'

import * as actionType from './constans'
const defaultState = Map({
    time: new Date().getTime(),
    
    // 控制 定时器 请求 时间/网络数据 次数 
    show: true,
    showMessage: true
})

function reducer(state = defaultState , action) {
    switch(action.type) {
        case actionType.CURRENT_TIME:
            return state.set('time',action.time)
        case actionType.CURRENT_SHOW:
                return state.set('show',action.show)
        case actionType.CURRENT_SHOWMESSAGE:
                return state.set('showMessage',action.showMessage)
        default:
            return state
    }
}
export default reducer
import * as actionType from './constans'
const changeTimeAction = time => ({
    type: actionType.CURRENT_TIME,
    time
})
const changeMapAction = show => ({
    type: actionType.CURRENT_SHOW,
    show
})
const changeShowMessageAction = showMessage => ({
    type: actionType.CURRENT_SHOWMESSAGE,
    showMessage
})

export function CurrentTimeAction() {
    return (dispatch,getState) => {
        const show = getState().getIn(['home','show'])
        const time = () => {
            setTimeout(time,1000)
            dispatch(changeTimeAction(new Date().getTime()))
            console.log("更新时间")
        }  
    // 控制 定时器 请求 时间次数 
       if(show) {
            time()
            dispatch(changeMapAction(false))
       }
        
    }
}

export function CurrentMessageAction() {
    return (dispatch,getState) => {
        const showMessage = getState().getIn(['home','showMessage'])
        const message = () => {
            setTimeout(message,10000) 
            console.log("请求数据/更新数据")
        }
         // 控制 定时器 请求 网络数据 次数 
        if(showMessage) {
            message()
            dispatch(changeShowMessageAction(false))
        }
    }
}

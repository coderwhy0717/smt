import React, { memo,  useEffect, useState } from 'react'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { smtMessage } from '@/common/json'
import {formatDate,formatterDate} from '@/utils/format-utils'
// import {CurrentTimeAction,CurrentMessageAction} from './store/acionCreators'
import { useRequest } from 'ahooks'
import { getMessage,getTimes } from '../../services/home'
import { HomeWrapper } from './style'
import { Spin } from 'antd'
export default memo(function WYHome() {

    const [time,setTime] = useState()
    const [smtMessage,setMessage] = useState()
    // 获取当前时间
    // const {time} = useSelector(state => ({
    //     time: state.getIn(['home','time'])
    // }),shallowEqual)

    // const dispatch = useDispatch()
//    useEffect(() => {
//     //   第一次 触发时间 / 触发请求数据
//         dispatch(CurrentTimeAction())
//         dispatch(CurrentMessageAction())
//         console.log("first")
//    }, [dispatch])

const {error} = useRequest(getMessage, {
    pollingInterval:5000,
    refreshOnWindowFocus:true,
    pollingWhenHidden:false,
    onSuccess:(res,paroms) => {
        setMessage(res)
    }
})
    useEffect(() => {
        console.log(smtMessage)
    },[smtMessage])
    // 实时 时间获取
   useRequest(getTimes,{
       pollingInterval:1000,
       refreshOnWindowFocus:true,
       pollingWhenHidden:false,
       onSuccess:(res,paroms) => {
            setTime(res)
            console.log("res",res)
       }
       
   })


  return (
    <HomeWrapper>
        <div className='title'>迦南智能 SMT 车间生产看板</div>
        <div className='conent'>
            <div className='line'>
                <div className='line-a'>
                    线别：<span className='line-name'>{smtMessage?.title[0]?.name}</span>
                </div>
                <div className='text_top'>
                    <div className='conent-a'>
                            <div className='gongdan'>当前工单：<span>{smtMessage?.work}</span></div>
                            <div className='daima'>产品代码：<span>2.01.0478</span></div>
                            <div className='number'>生产数量：<span>998568</span></div>
                    </div>
                        <div className='text-name'>
                            <div>销售订单号：<span>SO20220615001</span></div>
                            <div>产品名称：<span>2021年第一批江苏A级单相费控智能电能表（远程-开关内置）主板SMT</span></div>
                            <div>产品规格：<span>DDZY149-Z(2021年第一批江苏) 220V 0.25-0.5(60)A DZ4 2C</span></div>
                        </div>
                  
                </div>
                <div className='time'>
                       <div className='time-fz'>
                            <div>
                                {
                                    formatterDate(time)
                                }
                            </div>
                            <div className='hhmm'>
                                {
                                    formatDate(time,'hh:mm:ss')
                                }
                            </div>
                            
                       </div>
                    </div>
            </div>
            {/* <hr /> */}
            <div className='message'>
                <div> 
                    工单投入：<span>{smtMessage?.into}</span>
                </div>
                <div> 
                    工单产出：<span>{smtMessage?.output}</span>
                </div>
                <div> 
                    当天投入：<span>{smtMessage?.dayInto}</span>
                </div>
                <div> 
                    当天产出：<span>{smtMessage?.dayOutput}</span>
                </div>
                <div> 
                    不良数：<span>{smtMessage?.bad}</span>
                </div>
                
            </div>
            <div className='footer'>
                <div className='Status'>
                    <div className='aocv'>
                        <div className='div-fff'>上片机</div>
                        <img src={`${require('@/assets/img/spj.jpg')}`} alt='上片机' /> 
                        <div>上片机</div>
                    </div>
                    <div className='aocv'>
                        <div className='div-fff'>SPI</div>
                        <img src={`${require('@/assets/img/spi.png')}`} alt='' /> 
                        <div>SPI</div>
                    </div>
                    <div className='tiepian'>
                        <div className='run'>运行</div>
                        <div className='img'>
                            <img src={`${require('@/assets/img/tpj.webp')}`} alt='贴片机' />
                            <img src={`${require('@/assets/img/tpj.webp')}`} alt='贴片机' />
                            <img src={`${require('@/assets/img/tpj.webp')}`} alt='贴片机' />
                        </div>
                        <div>贴片机</div>

                    </div> 
                    <div className='huilu'>
                        <div className='run'>运行</div>
                        <img src={`${require('@/assets/img/hll.webp')}`} alt='回流炉' />
                        <div>回流炉</div>
                        
                    </div>
                    <div className='aio'>
                        <div className='run'>运行</div>
                        {/* <div >AIO</div> */}
                        <img className='aio-img' src={`${require('@/assets/img/aio.jpg')}`} alt="" />
                        <div>AIO</div>

                    </div> 
                    <div className='aocv'>
                        <div className='div-fff'>装箱</div>
                        <img src={`${require('@/assets/img/sbj.jpg')}`} alt='收板机' /> 
                        <div>收板机</div>
                    </div>       
                </div>
            </div>
        </div>
        {
            // console.log(error)
        //     error ? <div className='cover' >
        //     <div>加载中<Spin /></div>
        // </div> : '....'
        }
    </HomeWrapper>
  )
})

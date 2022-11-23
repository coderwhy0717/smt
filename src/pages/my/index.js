import React, { memo, useEffect, useRef } from 'react'
import * as echarts from 'echarts';
import {option} from '@/common/contants.js'
import { MyWrapper } from './style';
export default memo(function WYMy() {
  
   const echet = useRef()
   useEffect(() => {
    //   第一次 触发时间 / 触发请求数据
   console.log(echet)
   let myChart = echarts.init(echet.current);
   option && myChart.setOption(option);
   }, [echet])
  
  return (
        <MyWrapper ref={echet} className="echets"></MyWrapper>
  )
})

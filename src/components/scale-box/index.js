import React, { memo, useRef, useState,useEffect, useCallback } from 'react'
import { ScaleBoxWrapper } from './style'
import { WIDTH,HEIGHT } from '@/common/contants'

export default memo(function WYScaleBox(props) {
    const [scales,setScales] = useState(0)
    const divRef = useRef()
    const { children } = props
    console.log(props)

    useEffect(() => {
      getScale()
      window.addEventListener("resize", debounce(setScale));
      return () => {
        window.removeEventListener('resize', debounce(setScale))
      }
    })

    const getScale = useCallback(() => {
          // 固定好16：9的宽高比，计算出最合适的缩放比
        const wh = window.innerHeight / HEIGHT;
        const ww = window.innerWidth / WIDTH;
        console.log(window.innerWidth, "innerWidth");
        console.log(window.innerHeight, "innerHeight");
        console.log(ww, "w");
        console.log(wh, "h");
        console.log(ww < wh ? ww : wh, "bijiap");
        return ww < wh ? ww : wh;
    },[])
    const setScale = useCallback(() => {
          // 获取到缩放比例，设置它
          setScales(getScale())
        if (divRef.current) {
            divRef.current.style.setProperty("--scale", scales);
        }
    },[getScale,scales])

    const debounce = useCallback((fn, delay) => {
      const delays = delay || 500;
      let timer;
      return function() {
        const th = this;
        const args = arguments;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function() {
          timer = null;
          fn.apply(th, args);
        }, delays);
      };
  },[])
    
   
    
    
  return (
       <ScaleBoxWrapper
            ref={divRef}
            style={{
                width: WIDTH + 'px',
                height: HEIGHT + 'px'
            }}
        >
            {
                children
            }
  </ScaleBoxWrapper>
  )
})

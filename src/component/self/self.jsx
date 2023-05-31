import React from 'react'
import SelfImg from './selfIcon/self2.jpg'
const Self = () => {
  return (
    <>
     <div id="self" className='mt-[90px] flex w-full pl-28 pr-28'>
      <div className='selfinfo w-[50%] h-[450px] text-[50px] flex flex-col mt-[150px] items-start'>
       <div className='resInfo'>
       <p id="apr_1"><span>H</span>i,</p>
       <p id="apr_2">I'am Jayesh Dhundhalva</p>
       <p id="apr_3">Web Developer</p>
       </div>
      </div>
      <div className='selfImg w-[50%] flex justify-end pr-[60px] items-start'>
        <img src={SelfImg} height="400" width="400" className='rfe'/>
      </div>
     </div>
    </>
  )
}
export default Self;
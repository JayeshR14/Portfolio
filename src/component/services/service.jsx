import React from 'react'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'
import frontImg from './servicesIcon/ui-design.png'
import backImg from './servicesIcon/database.png'
import fullImg from './servicesIcon/full-stack.png'

import ServiceData from './serviceApi'
import { useState } from 'react'

const Services = () => {
   const [data, showData] = useState(false);
   const [btnState, setBtnState] = useState("More");
   const serviceLogo = [frontImg, backImg, fullImg];
      return (
        <>
         <div id="services" className='services w-screen flex flex-col justify-center items-center mb-20'>
          <h3>Services</h3>
          <div className='ser__container h-auto'>
               <div  
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className='ser__sec w-[300px]'>
                <div><img src={serviceLogo[2]}/></div>
                <div className='font-bold'>{ServiceData[0].service}</div>
                <div>{ServiceData[0].description}</div>
              </div>

              <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"  
                className='ser__sec w-[300px]'>
                <div><img src={serviceLogo[1]}/></div>
                <div className='font-bold'>{ServiceData[1].service}</div>
                <div>{ServiceData[1].description}</div>
              </div>

              <div  
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
                className='ser__sec w-[300px]'>
                <div><img src={serviceLogo[0]}/></div>
                <div className='font-bold'>{ServiceData[2].service}</div>
                <div>{ServiceData[2].description}</div>
              </div>
           {/* {
              ServiceData.map((data,index)=>{
                return (
                )        
              })
           } */}
          </div>
         </div>
        </>
      )

}

export default Services;
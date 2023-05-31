import React from 'react'
import { Redirect } from 'react-router-dom';

const Project = (props) => {
  console.log(props.imgurl);
  const projectStyle = {
      backgroundImage : `url(${props.imgurl})`,
      backgroundSize : '400px 250px',
      backgroundRepeat : 'no-repeat',
  }
    return (
      <>
       <div data-aos="flip-down" className='projectPrev h-[250px] rounded-xl w-[400px] bg-black mb-[20px]' style={projectStyle}>
        <div className='preview h-[250px] w-[400px] rounded-xl bg-[rgba(0,0,0,0.4)] flex justify-between items-center' >
         <button id="liveBtn" onClick={()=>{window.open(props.live,"_blank")}}>Live</button>
         <button id="CodeBtn" onClick={()=>{window.open(props.code,"_blank")}}>Code</button>
        </div>
       </div>
      </>
    ) 
} 

export default Project;

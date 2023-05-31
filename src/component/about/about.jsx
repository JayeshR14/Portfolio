import React,{useRef} from 'react'
import SelfImg from './aboutIcon/self2.jpg'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'
import Skill from './skills'
import Edu from './education'
const About = () => {
 
  return (
  <>
  <div id="aboutd" className='h-[50px]'></div>
  <div id="about" data-aos="fade-right" className='about aboutNew flex mt-10 h-[700px] w-screen'>
    <div  className='aboutImg w-[50%] pr-10 flex justify-end items-center h-[600px]'>
      <img src={SelfImg} className="rounded-[10px]" width="300"/>
      <div className='separate h-[550px] rounded-md ml-20 w-[4px]' ></div>
    </div>
    <div  className='aboutInfo w-[50%] flex text-[#262626] flex-col items-start pl-7'>
      <p className='aboutme mt-10 text-[50px] mb-2'>About Me</p>
      <div className='deinfo'>
      <p className='de text-[21px] mb-4'>I'm a web developer with a focus on the MERN stack, currently exploring technology and framework. I am very interested to create interactive, userfriendly and dynamic websites.</p>
      </div>
      <div className='activeLinks text-[21px] mt-2 mb-5 bg-blue-400'>
      <NavLink className='bg-[#e7e6e6] p-2 pl-4 pr-4 text-center rounded-l-md font-bold' exact to="/Portfolio/" activeClassName='links' >Skills</NavLink>
        <NavLink className='bg-[#e7e6e6] h-[45px] p-2 pl-3 pr-3 w-[120px] text-center font-bold rounded-r-md' exact to="/Portfolio/education" activeClassName='links' >Education</NavLink>
      </div>
      <div className='aboutsec p-3 w-[480px] h-[200px] rounded-xl'>
      <Switch>
       <Route exact path="/Portfolio/" component={Skill}/>
       <Route exact path="/Portfolio/education" component={Edu}/>
     </Switch>
      </div>
    </div>
  </div>
  </>
  )
}

export default About;
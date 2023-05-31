import React,{useEffect, useState} from 'react';
import upbtn from './headerIcon/up.png'
import ScrollToBottom from 'react-scroll-to-bottom'
import home from './headerIcon/home.png'
import about from './headerIcon/about.png'
import project from './headerIcon/projects.png'
import contact from './headerIcon/contact.png'
import service from './headerIcon/technical-support.png'
import './header.css'
const Header = () => {
  const [showButton, setShowButton] = useState(false);
  const showHeader = (event) => {
   console.log(event.target.checked);
   if(event.target.checked == true) {
      document.getElementById('headert').style.transform = 'none'
      document.querySelector('.toggleMenu').style.boxShadow = 'none'}
      else if(event.target.checked == false){
      document.getElementById('headert').style.transform = 'translate(0,100%)';
      }}
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  useEffect(()=>{
    const handleScrollButtonVisisbility = () => {
      window.pageYOffset > 200 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener('scroll',handleScrollButtonVisisbility);
    return () => {
      window.removeEventListener('scroll',handleScrollButtonVisisbility);
    };
  },[]);
  return (
  <>
  <div className='downHeader relative'>
    <div className="switchToggle">
    <div className="toggleMenu flex justify-end fixed bottom-0 h-[46px] w-full">
      <div>
    <input type="checkbox" id="showHeader" onChange={showHeader}/>
    <span></span>
    <span></span>
    <span></span>
    </div>
    </div>
    </div>
    <div id="headert" className="h-[90px] flex z-1 justify-between items-center min-w-full pl-28 font-bold pr-28">
      <div className='topl text-4xl'><p>Portfolio</p></div>
      <div className='headerLinks w-[500px]'>
        <div className="flex flex-1 justify-between text-[20px] text-[hsl(0,0%,20%)] font-[600] flex-row ">
          <a href="#" className="cursor-pointer"><span>H</span>ome</a>
          <a href="#aboutd" className="aboutLink"><span>A</span>bout</a>
          <a href="#services" className="serviceLink"><span>S</span>ervices</a>
          <a href="#projectPrevd" className="projectPrevLink"><span>P</span>roject</a>
          <a href="#contact" className="contactLink"><span>C</span>ontact Us</a>
        </div>
        </div>
        <div className='mviewLinks'>
          <a href="#" className="cursor-pointer"><img src={home}/>Home</a>
          <a href="#aboutd" className="aboutLink"><img src={about}/>About</a>
          <a href="#services" className="serviceLink"><img src={service}/>Services</a>
          <a href="#projectPrevd" className="projectPrevLink"><img src={project}/>Project</a>
          <a href="#contact" className="contactLink"><img src={contact}/>Contact Us</a> 
        </div>
        { showButton &&(
        <img onClick={scrollToTop} src={upbtn} className="scrollToTop bg-white h-[40px] w-[40px] rounded-[50%] fixed bottom-7 right-7">
           
        </img>)}
    </div>
    </div>
  </>
  )
}
export default Header;
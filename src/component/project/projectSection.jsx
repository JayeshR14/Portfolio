import React from 'react'
import projects from './projectApi';
import Project from './project';
import notes from './projectPrevIcon/notes.png'
import tictactoe from './projectPrevIcon/tictactoe.png'
import flipcard from './projectPrevIcon/flipcard.png'
// import Explore from './explore'

const ProjectSection = () => {
   const projectImg = [notes, tictactoe, flipcard];
   const moreProjects = () => {
      window.location.replace("https://github.com/JayeshR14?tab=repositories");
   }
   return (
    <>
    <div id="projectPrevd" className='min-h-[5b00px] pt-1 flex flex-col'> 
    <p id="projectPrev" className='fd mt-20 mb-10 font-bold text-3xl w-screen text-center'>My Work</p>
    
   <div className='projectSec h-auto flex justify-between w-screen pl-28 pr-28'>
      {
         projects.map((elem,index)=>{
            return <Project
            key = {index} 
            imgurl = {projectImg[index]}
            live = {elem.live}
            code = {elem.code}
             />
         })
      }
   </div>
   <div className="explore__btn">
        <button className='ff border-solid border-2 border-[black] h-[50px] w-[180px] font-bold' onClick={moreProjects}>Explore More</button>
        </div>
   </div>
    </>
    
   )
}

export default ProjectSection;
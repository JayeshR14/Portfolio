import { useState } from 'react'

import './App.css'

import Header from './component/header/header.jsx'
import Self from './component/self/self'
import About from './component/about/about'
import ProjectSection from './component/project/projectSection'
import Contact from './component/contact/contact'
import Services from './component/services/service'

import ScrollToBottom from 'react-scroll-to-bottom'

import './component/self/self.css'
import './component/about/about.css'
import './component/project/project.css'
import './component/contact/contact.css'
import './component/services/services.css'

const App = () => {
  const [loadState, setLoadState] = useState(false);
   const scrollToTop = () => {
    window.scrollTo({
      top : 0,
      left : 0,
      behavior : 'smooth'
    })
   }
   console.log(window.location.href);
   window.onload = function(){
   let newUrl = "";
   window.history.pushState({},document.title,"/Portfolio/"+ newUrl);
   scrollToTop();
   }
   return (<>
     <Header/> 
     <Self/>
     <About/>
     <Services/>
     <ProjectSection/>
     <Contact/>
   </>)
}
export default App;
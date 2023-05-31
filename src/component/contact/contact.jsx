import React, {useState} from 'react'
import {Toast} from '@chakra-ui/react'
import emailjs from 'emailjs-com'
import send from './contactIcon/send.png'
import contact from './contactIcon/phone.png'
import facebook from './contactIcon/facebook.png'
import twitter from './contactIcon/twitter.png'
import linkedin from './contactIcon/linkedin.png'
import github from './contactIcon/github.png'
import sucess from './contactIcon/sucess.png'
import wrong from './contactIcon/wrong.png'
import Resume from '../contact/resume.pdf'
import { useToast } from '@chakra-ui/react'
import './contact.css'

const Contact = (props) => {
  // const [loadState, setLoadState] = useState(false);
  // const [mailState, setMailState] = useState(false);
  // const [btnState, setbtnState] = useState(false);
  const toast = useToast();
  const [curData, setData] = useState({
    name : "",
    email : "",
    message : "",
  });
  const InputEvent = (event) => {
    const {name, value} = event.target;
  
      setData((preVal)=>{
       return {
         ...curData,
         [name] : value,
       }
      }); 
    }

  const sendEmail = (e) => {
    document.querySelector('.loading').style.visibility = 'visible';
    // props.setLoadState(true);
    e.preventDefault();
     if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(curData.email))&&(curData.name != '')&&(curData.message!='')&&(curData.email != ''))
     { 
      emailjs.sendForm('service_6cf5gaq','template_0iqx17c',e.target,'Mvzma7NNY83cw4hV0').then((result)=>{
        if(result.status == 200){
          document.querySelector('.loading').style.visibility = 'hidden';
          console.log(curData)
          document.querySelector('.sendAlert').style.display = 'block';
          setTimeout(() => {
            document.querySelector('.sendAlert').style.display = 'none';
            }, 5000);
          // props.setLoadState(false);
        }   
        setData((preVal)=>{
            return{
              name : '',
              email : '',
              message : '',
            }
          }) 
          
      },(error)=>{
          // document.querySelector('.loading').style.visibility = 'hidden';  
          // props.setLoadState(false);
        console.log(error.text);
      }) 
     }
     else{
      document.querySelector('.loading').style.visibility = 'hidden';  
      document.querySelector('.errorAlert').style.display = 'block';
      setTimeout(() => {
        document.querySelector('.errorAlert').style.display = 'none';
        }, 5000);
        return false;  
     }
  }
   return (
    <>
     <div id="contact"  data-aos="zoom-in" className='contact h-[800px] mt-10 flex w-screen' >
      <div className='contactMe w-3/6 h-full flex justify-center flex-col items-end pr-10'>
      <div className='contactb h-[450px] w-[450px] flex flex-col justify-between rounded-xl pl-10 pt-12 pb-12'>
       <h2 className='text-3xl'>Contact Me</h2>
       <div className='text-[21px]'>
       <div className='flex mb-2'>
        <img src={send}/>
        <p>jayeshdhundhalva@gmail.com</p>
       </div>
       <div className='flex'>
        <img src={contact}/>
        <p>9712274711</p>
       </div>
       </div>
       <div className='flex w-[225px] justify-between'>
        <img src={facebook}/>
        <img src={twitter}/>
        <img src={linkedin}/>
        <img src={github}/>
       </div>
       <div>
       <a
       href={Resume}
       download="download_8765432"
       target="_blank"
       rel="noreferrer">
       <button>Download CV</button>
       </a>
       </div>
       </div>
      </div>
      <div className='sendMe w-3/6 h-full flex justify-start items-center'>
        <form onSubmit={sendEmail} id="my_form" className='flex justify-center flex-col items-center'>
        <input type="text" placeholder='Your name' name="name" onChange={InputEvent} value={curData.name}/>
        <input type="text" placeholder='Your email' name="email" onChange={InputEvent}  value={curData.email}/>
        <textarea placeholder='Your message' name='message' className="textarea" onChange={InputEvent}  value={curData.message}/>
        <div className='flex justify-start h-[50px] mt-5 w-[500px] font-bold'>
        <input type="submit" id="submit"/>
        </div>
        </form>
      </div>
     
      <div className='sendAlert h-[70px] pl-5 fixed bg-green-100 pt-4 rounded-[5px] w-[250px] top-10 right-6'>
         <img className='inline-block' src={sucess}/>
         <p className='inline-block text-[21px]'>Sucessfully send</p>
      </div>

      <div className='errorAlert h-[70px] pl-5 fixed bg-red-100 pt-4 rounded-[5px] w-[250px] top-10 right-6'>
         <img className='inline-block' src={wrong}/>
         <p className='inline-block text-[21px] text-red-600'>Invalid Credentials</p>
      </div>
      
      {/* loading screen */}
      <div className='loading bg-[rgb(213,213,213,0.5)]'>
      <div className="ring">Loading
      <span id="loadingSpan"></span>
      </div>
      </div>
     </div>
    </>
   )
}
export default Contact;
// how to set div over entire screen in html css?
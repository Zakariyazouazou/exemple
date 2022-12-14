import React from 'react'
import { Link } from 'react-router-dom'
import {contactus} from '../../data/data'
import './Contact_us.css'
const Contact_us = () => {
  return (
    <div className="bg-gray-100">
        <div className='bg-black '>
        <div className='ContactTop  w-full pt-14  '>
              <div className='Container_Home  ml-56 w-2/5'>
                <h1 className='text-white font-bold text-6xl '> About me </h1>   
                <h3 className='text-gray-200 mt-8 ml-10 font-bold text-xl'>All time in one XXXD</h3>
                    <Link to='/'><button className='p-4 mt-10 border-1 border-solid border-white text-white hover:text-black hover:bg-white mr-2 rounded-xl'  type="button">Find More</button></Link>
                    <button className='p-4 mt-10 border-1 border-solid border-white text-black bg-white hover:text-white hover:bg-black ml-2 rounded-xl' type="button">Shop Now</button>
        
              </div>
        </div>
     </div>



     <div className='w-10/12 flex flex-row flex-wrap mt-28 justify-center' style={{marginLeft:"7%"}}>
         {
            contactus.map((element)=>{
             return <div className='w-64 h-52 bg-white text-center m-3 rounded-3xl'>
                        <h1 className='text-2xl font-bold mt-3 mb-3'>{element.subtitle}</h1> 
                        <h4 className='pt-5 pb-3'>{element.detalis}</h4>
                        <span className='text-blue-700 font-bold ' >{element.number}</span>
                   </div>
            }) 
         }
     </div>




     <div className='w-10/12 flex flex-row flex-wrap mt-28 justify-center ' style={{marginLeft:"7%"}}>
          <div className='w-2/5 mr-14 Aboutp'>
               <h6 className='mb-5'>Dontt be stranger</h6>  
               <h1 className='text-5xl font-bold ml-2 mb-5'>You tell us. We listen</h1>
               <h6 className='mb-5'>Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.</h6>
          </div>
          <div className='w-1/2  bg-white Aboutp rounded-2xl mb-2'>
               <input className='block w-10/12 p-4 ml-4 mb-5 border-2 border-solid border-blue-700 hover:border-blue-400 text-xl font-bold mt-10' type="text" name="name" placeholder='Name..' />    
               <input className='block w-10/12 p-4 ml-4 mb-5 border-2 border-solid border-blue-700 hover:border-blue-400 text-xl font-bold ' type="text" name="Subject" placeholder='Subject..' />     
               <input className='block w-10/12 p-4 ml-4 mb-5 border-2 border-solid border-blue-700 hover:border-blue-400 text-xl font-bold 'type="Email" name="Email" placeholder='Email..' />     
               <textarea className='block w-10/12 p-4 ml-4 mb-5 border-2 border-solid border-blue-700 hover:border-blue-400 text-xl font-bold ' rows="10"  cols="10" placeholder='Your Email..' />
               <button type="button" className='p-4 bg-blue-600 rounded-lg text-white text-xl font-bold transition hover:bg-blue-700 m-4'>Send Your message</button>
          </div>
     </div>
    </div>
  )
}

export default Contact_us

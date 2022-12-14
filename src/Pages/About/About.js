import React from 'react'
import { Link } from 'react-router-dom'
import {Contact} from '../../data/data'
import './About.css'
const About = () => {
  return (
    <>
      <div className='bg-blue-700 '>
        <div className='AboutTop  w-full pt-14  '>
              <div className='Container_Home  ml-56 w-2/5'>
                <h1 className='text-white font-bold text-6xl '> About me </h1>   
                <h3 className='text-gray-200 mt-8 ml-10 font-bold text-xl'>All time in one XXXD</h3>
                    <Link to='/'><button className='p-4 mt-10 border-1 border-solid border-white text-white hover:text-black hover:bg-white mr-2 rounded-xl'  type="button">Find More</button></Link>
                    <button className='p-4 mt-10 border-1 border-solid border-white text-black bg-white hover:text-white hover:bg-black ml-2 rounded-xl' type="button">Shop Now</button>
        
              </div>
        </div>
     </div>

    <div className='flex flex-wrap flex-row w-10/12 mt-36 bg-gray-50' style={{marginLeft:"7%"}}>
         <div className='w-1/2 Aboutp' > 
              <h1 className='mt-5 inline-block text-4xl font-bold pt-3 border-solid border-t-2 border-blue-700'>Who we Are</h1>
              <h3 className='mt-5 font-bold text-gray-600 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</h3>
         </div>
         <img src="http://localhost/wordpress/wp-content/uploads/2022/12/people-group-friends-2569234.jpg" alt="image" className='w-1/2 Aboutp'/>
    </div>


     <div className='w-10/12 bg-blue-900  justify-center mt-10 ' style={{marginLeft:"7%"}}>
              <div className='LImitedHome AboutScreen  Aboutp w-full pt-14  pb-10'>
                <div className='w-1/2 text-center  bg-White' style={{marginLeft:"25%" , height:"20em"}}>
                    <h1 className='mt-5 inline-block text-4xl font-bold pt-3 border-solid border-t-2 border-blue-700'>Who we Are</h1>
                    <h1>{
                      Contact.map((element)=>{
                          return <span className=''>{element.symbol}</span>
                      })


                     }</h1>
               
                </div>
          </div>
        </div>
    </>
  )
}

export default About

import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/Symbol1.png'
import {Women , men , Contact , presentation }  from '../../data/data'
import './Footer.css'
const Footer = () => {
  return (
        <div className='mt-10'>

                <div className='w-full text-center mt-36'>
                <h1 className='inline-block pb-2 text-4xl font-bold border-b-2 border-solid border-blue-700'>Offers</h1>
                <div className='w-10/12 flex flex-row flex-wrap justify-center mt-10' style={{marginLeft:"7%"}}>
                    {
                        presentation.map((element)=>{
                        return <div>
                                        <div className='bg-gray-50 w-56 overflow-hidden m-2 pb-1 text-center mb-10' style={{height:""}} >
                                            {element.symbol}
                                            <h2 className='font-bold text-xl mb-4'>{element.Subtitle}</h2>
                                            <h6>{element.explain}</h6>
        


        
                                    </div>
                                </div>
                        })
                    }
                </div>
            </div>


            <h1 className='text-2xl font-bold transition hover:text-blue-700 mb-10 pl-5 pt-5 pb-5 border-t-2 border-b-2 border-solid border-gray-400'>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h1>
            <div className='flex flex-row flex-wrap justify-center w-10/12' style={{marginLeft:"7%"}}>
                 <ul className='m-3 mr-10'>
                    <li><h1 className='font-bold text-xl mb-10'>THe Best Look Any Time , Any where </h1></li>
                    <li><img src={logo} alt="Logo" className='w-16'/></li>
                    <li><h3 className='font-bold text-xl mt-10'>Sunshine</h3></li>
                 </ul>
                 <ul className='m-3'>
                    <li><h3 className='font-bold mb-2'>for her</h3></li>
                    {
                      Women.map((element)=>{
                       return <Link><li className='text-gray-600'>{element.type}</li></Link>
                      })
                    }
                 </ul>
                 <ul className='m-3 '>
                    <li><h3 className='font-bold mb-2'>for her</h3></li>
                    {
                      men.map((element)=>{
                       return <Link><li className='text-gray-600'>{element.type}</li></Link>
                      })
                    }
                 </ul>
                 <ul className='m-3'>
                    <li><h2 className='font-bold mb-10'>Subscribe</h2></li>
                    <input type="input" name="input" placeholder='Your email Adrees.....' className=' mb-2 p-2 border-solid border-1 mt-10 border-gray-600 hover:border-black'/>
                     
                    <li><button className='p-3 pl-5 pr-5 bg-blue-600 transition hover:bg-blue-400 font-bold rounded-md mt-14 text-white'>Subscribe</button></li>

                 </ul>
                 
            </div>
            <div className='w-ful bg-blue-700 flex flex-wrap flex-row justify-between items-center mt-28'>
                 <h1>Copyright © Zakariya Zouazou
                 <br/>
                 Welcome To My page</h1>
                 <h1>{
                        Contact.map((element)=>{
                            return <span>{element.symbol}</span>
                        })


                 }</h1>
            </div>
        </div>
  )
}

export default Footer
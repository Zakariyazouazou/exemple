import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import { UsecontextdataProduct } from '../Contextdata/contextdata'
import { Link } from 'react-router-dom'
const Card = ({productImag,productname,forhow,old,New,Color1,Color2,Color3 ,product, link}) => {
const {Addpanier} = UsecontextdataProduct()   



   
  return (
    <div className='bg-gray-50 w-56 overflow-hidden text-left m-2 pb-1 ' style={{height:"32em"}} >
      <div className='absolute -mt-3 bg-blue-500 p-2 rounded-full ml-48 z-20'>
        <h6>sale!</h6>
      </div>
      <Link to={`/Chekout/${link}`}><img src={productImag} alt="product" className='w-full h-1/2 hoverImages'/></Link>
      <h5>{productname}</h5>
      <h6>{forhow}</h6>
      <h6><del className='mr-1'>${old}</del> ${New}</h6> 
      <div>
           <AiOutlineStar className='inline-block hover:text-orange-600'/>
           <AiOutlineStar className='inline-block hover:text-orange-600'/>
           <AiOutlineStar className='inline-block hover:text-orange-600'/>
           <AiOutlineStar className='inline-block hover:text-orange-600'/>
           <AiOutlineStar className='inline-block hover:text-orange-600'/>    
      </div>
      <button className='p-1 bg-white text-black border-solid border-1 hover:border-black m-1 rounded-sm' type="button">{Color1}</button>
      <button className='p-1 bg-white text-black border-solid border-1 hover:border-black m-1 rounded-sm' type="button">{Color2}</button>
      <button className='p-1 bg-white text-black border-solid border-1 hover:border-black m-1 rounded-sm' type="button">{Color3}</button>
      <button type='button' className='p-1 bg-blue-700 text-white font-bold w-10/12 ml-1 mt-3 transmition hover:bg-white hover:text-black  ' ><Link to={`/Chekout/${link}`}>check Out</Link></button>
      <button type='button' className='p-1 bg-blue-700 text-white font-bold w-10/12 ml-1 mt-1  transmition hover:bg-white hover:text-black ' onClick={()=>Addpanier(product)} >Buy</button>

    
    </div>
  )
}

export default Card
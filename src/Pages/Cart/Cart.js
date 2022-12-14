import React from 'react'
import './Cart.css'
import { UsecontextdataProduct } from '../../Contextdata/contextdata'
import { Link } from 'react-router-dom'

const Cart = () => {

  const {activeSidebarre , panier , finalPanier,panierTotal ,removeThis, TotalPrice , setTotalPrice ,  } = UsecontextdataProduct()




  return (
    <div className='mt-28 w-10/12   text-center' style={{marginLeft:"7%"}}>
         <h1 className='font-bold text-7xl text-gray-700 transition hover:text-blue-700 pb-5'  >Cart</h1>

         <table className="table-auto w-full border-1 border-gray-500 border-solid ">
            <thead className='border-1 border-gray-500 border-solid'>
              <tr>
                <th className='border-1 p-1 font-bold border-gray-500 border-solid'></th>
                <th className='border-1 p-1 font-bold border-gray-500 border-solid'>Product</th>
                <th className='border-1 p-1 font-bold border-gray-500 border-solid'>Prix</th>
                <th className='border-1 p-1 font-bold border-gray-500 border-solid'>Quantite</th>
                <th className='border-1 p-1 font-bold border-gray-500 border-solid'>Total</th>
              </tr>
            </thead>
            <tbody>
              {panierTotal > 0 && 
                panier.map((element)=>{
                  return <tr className='bg-gray-200'>
                            <td  className=' border-gray-500 border-solid flex flex-wrap flex-row items-center'  > <h1   onClick={()=>{removeThis(element.ID_Product , element.Prix1 )}}  className='bg-white ml-1 text- transition  gray-600 border-1 border-gray-600 cursor-pointer inline-block text-xl pl-1 pr-1 pb-1 rounded-full hover:text-black  ' >x</h1><img src={element.pic1} alt="Product_Image"  className='m-5 w-14 inline-block'  /></td>
                            <td  className=' border-gray-500 border-solid'  ><h1 className='ml-5' >{element.ProductName}</h1></td>
                            <td  className=' border-gray-500 border-solid'  ><h1 className='ml-1' >${element.Prix1}</h1></td>
                            <td  className=' border-gray-500 border-solid'  ><h1 className='ml-1' >1</h1></td>
                            <td  className=' border-gray-500 border-solid'  ><h1 className='ml-1' >${element.Prix1}</h1></td>
                         </tr>
                })
              }    
            </tbody>
        </table>
        <div className='w-1/2 mt-10 overflow-hidden rounded-md shadow-xl' style={{marginLeft:"22%"}}> 
             <ul>
                 <li className='font-bold text-3xl bg-gray-300 pb-1 pt-1'>Cart Total</li>
                 <li className=''>
                   <ul className='flex justify-between bg-gray-200'>
                      <li className='m-4 font-bold text-xl '>Subtotal : </li>
                      <li className='m-4 font-bold text-xl '>${TotalPrice}</li>
                   </ul>
                 </li>
                 <li>
                   <ul className='flex justify-between bg-gray-200'>
                      <li className='m-4 font-bold text-xl '>Subtotal : </li>
                      <li className='m-4 font-bold text-xl '>${TotalPrice}</li>
                   </ul>
                 </li>
                 <li className=' bg-gray-200 pb-2'>  <Link to ='/MyAcompt'> <button type="button" className='w-10/12 text-center bg-blue-700 text-white hover:bg-blue-900 text-xl transition font-bold mt-5 pt-2 border-2 border-blue-600 border-solid  pb-2 mb-1'>CHEkOutt</button></Link> </li>
             </ul>      
        </div>
    </div>
  )
}

export default Cart


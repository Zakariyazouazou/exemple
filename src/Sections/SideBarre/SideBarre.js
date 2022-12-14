import React from 'react'
import './SideBarre.css'
import { Link } from 'react-router-dom'
import { UsecontextdataProduct } from '../../Contextdata/contextdata'
const SideBarre = () => {
  const {activeSidebarre , panier , finalPanier,panierTotal ,removeThis, TotalPrice , setTotalPrice ,  } = UsecontextdataProduct()








   var z = 0 ; 
   for(var i = 0; i < finalPanier.length; i++) {
     z = parseFloat(finalPanier[i].Prix1)  + z
     console.log(z)
     setTotalPrice(z)
     
}







     

  return (
    <div className='bg-white h-full fixed right-0 z-50 top-0 SideBarreScreen w-96' > 
       <div className='flex justify-between w-full border-b-2 border-solid border-gray-700 items-center'>
            <h1 className='text-xl  m-5' >Shopping Cart</h1>
            <h1  onClick={()=>{activeSidebarre(false)}}  className='text-2xl m-5 font-bold cursor-pointer bg-gray-500 transition rounded-full pl-1 pr-1 hover:text-white hover:bg-gray-900 '>X</h1>
       </div>    
       <div className='mt-8   overflow-y-auto' style={{height:"34em"}}>
          {panierTotal > 0 && 
               
                    panier.map((element)=>{
                         return <div className='flex items-center justify-between overflow-y-auto'>
                         <img src={element.pic1} alt="Product_Image"  className='m-5 w-10' />
                         <div>
                              <ul>
                                   <li>{element.ProductName}</li>
                                   <li> <input type="number" id={element.ID_Product} className='w-10' name="Quantite" placeholder='1' onClick={()=>{}}/> x <h1 className='inline-block' id={element.Prix1}>${element.Prix1}</h1></li>
     
                              </ul>               
                         </div>
                         <h1  onClick={()=>{removeThis(element.ID_Product , element.Prix1 )}} className='bg-white text- transition  gray-600 border-1 border-gray-600 cursor-pointer mr-1 pb-1 pl-1 pr-1  rounded-full hover:text-black hover:border-2 ' >x</h1>
                    </div>
                    })
               

          }
        
       </div>


       <div className='absolute bottom-0 w-full z-50 bg-white'>
             {
               panierTotal > 0 && 
               <>
               <div className='flex justify-between pt-1 pb-1 border-t-2  border-b-2 border-gray-600 border-solid' >
                         <h1 className='m-5 text-3xl' >Total</h1>
                         <h1 className='m-5 text-3xl' >${z}</h1>
                </div>
                 <Link to='/Cart'><button type="button"    onClick={()=>{activeSidebarre(false)}} className='w-10/12 text-center transition text-xl font-bold mt-5 text-blue-700 pt-2 border-2 border-blue-600 border-solid pb-2' style={{marginLeft:"7%"}} >VIEW CART</button></Link> 
               </>
             }
             <Link to='/Store'><button type="button" className='w-10/12 text-center bg-blue-700 text-white hover:bg-blue-900 text-xl transition font-bold mt-5 pt-2 border-2 border-blue-600 border-solid  pb-2 mb-1' style={{marginLeft:"7%"}} >CHEKOUT</button></Link>

       </div>
    </div>
  )
}

export default SideBarre
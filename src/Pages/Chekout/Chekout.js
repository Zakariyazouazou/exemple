import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../../Component/index'
import {productdata} from "../../data/data"
import { UsecontextdataProduct } from '../../Contextdata/contextdata'
import './Chekout.css'
const Chekout = () => {
  const {id} = useParams()
  const {Addpanier} = UsecontextdataProduct()
  





  for (var i = 0; i < productdata.length; i++){

    const filterdata = productdata.filter((element)=>{
      return element.PoduCtCategorie == productdata[i].PoduCtCategorie 
    })
   
   console.log(filterdata)


     if(id == productdata[i].ID_Product){
      return (
        <>
            
            <div className='mt-28 w-10/12 flex flex-row flex-wrap bg-gray-100' style={{marginLeft:"7%"}}>
                <div className='w-1/2 Aboutp'>
                    <img src={productdata[i].pic1} alt="product" className='w-full'/>
                    <div className='w-full flex overflow-hidden mt-2'>
                        <img className='w-2/6 m-1' src={productdata[i].pic1} alt="product"/>
                        <img className='w-2/6 m-1' src={productdata[i].pic2} alt="product"/>
                        <img className='w-2/6 m-1' src={productdata[i].pic3} alt="product"/>
                        <img className='w-2/6 m-1' src={productdata[i].pic4} alt="product"/>
                    </div>
                </div>
                <div className='w-1/2 mt-16 Aboutp'>
                      <h1 className='font-bold m-5 text-xl'>{productdata[i].forhow}</h1>
                      <h1 className='font-bold m-5 text-3xl'>{productdata[i].ProductName}</h1>
                      <h1 className='font-bold m-5 text-xl'>Prix : $ {productdata[i].Prix1} +free shipping</h1>
                      <h1 className='m-5'>Some details : {productdata[i].SimpleDEtails}</h1>
                      <button className='p-3 pl-5 pr-5 bg-blue-600 transition hover:bg-blue-400 font-bold rounded-md mt-14 ml-5 text-white mb-1' onClick={()=>{Addpanier(productdata[i])}}>Take this Chance</button>
                </div>
            </div>
                <div  className='mt-28'/>
                <h1 className='m-10 text-3xl font-bold  pb-3 border-b-2 border-solid border-gray-300' >Related products</h1>
                <div className='flex overflow-x-auto '>
                       
                  {
                    filterdata.map((element)=>{
                      return <Card className="mt-5"
                            productImag={element.pic1}
                            productname={element.ProductName}
                            forhow={element.forhow}
                            old={element.Prix2}
                            New={element.Prix1}
                            product = {element}
                            Color1="black"
                            Color2="green"
                            Color3="white"
                            link={element.ID_Product}
                    />
                    })
                  }
                </div>
            
         
         
         </>
      )
     }
  }




  
}

export default Chekout



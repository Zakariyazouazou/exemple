import React , {useState} from 'react'
import './Store.css'
import {productdata , } from '../../data/data'
import {Card} from '../../Component/index'
const Store = () => {
    const [filterdata , setfilterdata] = useState({})
    const [itsfilter , setitsfilter] = useState(false)
    const filtrage=(n)=>{
       setfilterdata( productdata.filter((elemen)=>{
        return elemen.PoduCtCategorie == n 
        }))
        setitsfilter(true)
        
           console.log(filterdata)
    }

    console.log(filterdata)



  return (
    <div className='mt-28 bg-gray-200 w-11/12 flex flex-row flex-wrap ' style={{marginLeft:"4%"}}>
       <div className='w-2/5 text-center mt-16'>
            <input type="text" name="Serch" className='p-3 border-1 border-solid border-gray-600' placeholder='serch Product....'/> <button type="button" className='p-3 border-1 border-solid border-gray-600 bg-blue-700 text-white hover:bg-blue-800'>serch</button>
            <div className='w-1/2  ml-20'>
              <h1 className='text-gray-700 text-3xl mt-14 ' >Categorie </h1>
              <h3 className='text-gray-800 mt-5 hover:text-blue-700 cursor-pointer text-xl' onClick={()=>{filtrage(3)}} >Accesoire (3)</h3>
              <h3 className='text-gray-800 mt-5 hover:text-blue-700 cursor-pointer text-xl' onClick={()=>{filtrage(2)}} >Men (4)</h3>
              <h3 className='text-gray-800 mt-5 hover:text-blue-700 cursor-pointer text-xl' onClick={()=>{filtrage(1)}} >Women (4)</h3>
            </div>

       </div>

       <div className='' style={{width:"60%"}}>
          <h1 className='font-bold text-3xl m-5'>Thanks for choosing our Web Site {itsfilter && <h1 className='cursor-pointer text-red-600 m-5' onClick={()=>setitsfilter(false)}>ClickHerToreturn <span>X</span></h1>}</h1>
         <div className='w-full bg-white flex flex-row flex-wrap justify-center '>
                {!itsfilter && 
                  productdata.map((element)=>{
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
                 {itsfilter && 
                  filterdata.map((element)=>{
                    return <Card className="mt-5"
                          productImag={element.pic1}
                          productname={element.ProductName}
                          forhow={element.forhow}
                          old={element.Prix2}
                          New={element.Prix1}
                          Color1="black"
                          Color2="green"
                          Color3="white"
                          product = {element}
                          link={element.ID_Product}
                   />
                  })
                 }
         </div>
       </div>
      
    </div>
  )
}

export default Store
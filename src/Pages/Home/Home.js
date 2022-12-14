import React from 'react'
import './Home.css'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { productModel , PublicData , productdata , presentation} from '../../data/data';
import {UsecontextdataProduct} from '../../Contextdata/contextdata'
import {Card} from '../../Component/index'

   const Public = ({link , subtitl , textButton , minSub})=> {
         return <div className='w-80 h-96 bg-gray-800 overflow-hidden m-1'>
                    <img src={link} alt="img" className=' w-full h-full opacity-80 transition hoverImages'/>
                    <div className='absolute -mt-44 ml-1 text-center w-72'> 
                        <h1 className=" text-white text-xl">{subtitl}</h1>
                        <h5 className='font-bold text-white'>{minSub}</h5>
                        <button type="button" className='p-4 bg-white text-black hover:text-white hover:bg-black transmition rounded-md mt-2 '>{textButton}</button>
                    </div>
                 </div>  
   }
   





const Home = () => {
   
   


  return (
    <>
       <div className='bg-black '>
          <div className='presentation  w-full pt-14  '>
                <div className='Container_Home  ml-56 w-2/5'>
                  <h1 className='text-white font-bold text-6xl '> Exempl Commerc Page Sunshine From Zakariya </h1>   
                  <h3 className='text-gray-200 mt-8 ml-10 font-bold text-xl'>25% Off On All Products</h3>
                  
                      <button className='p-4 mt-10 border-1 border-solid border-white text-white hover:text-black hover:bg-white mr-2 rounded-xl'  type="button">Find More</button>
                      <button className='p-4 mt-10 border-1 border-solid border-white text-black bg-white hover:text-white hover:bg-black ml-2 rounded-xl' type="button">Shop Now</button>
          
                </div>
          </div>
        </div>
        <div>
          <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
         
          modules={[Pagination, Navigation]}
          className="mySwiper w-1/2 mt-10"
        >
        {productModel.map((element)=>{
          return <SwiperSlide><img src={element.img} alt="img" className='w-48 h-48'/></SwiperSlide>
        })}
        
        </Swiper>
        </div>
        


        <div className='w-full text-center mt-36'>
        <h1 className='inline-block pb-2 text-4xl font-bold border-b-2 border-solid border-blue-700'>Featured Products</h1>
        <div className='flex flex-row flex-wrap w-full justify-center mb-3 mt-16'>
              {
                PublicData.map((element)=>{
                  return   <Public link={element.link} subtitl={element.Subtitel}  textButton={element.textButton} minSub={element.mini}/>
                })
              }
        </div>
        </div>



        <div className='w-full text-center mt-36'>
         <h1 className='inline-block pb-2 text-4xl font-bold border-b-2 border-solid border-blue-700'>All Product</h1>
          <div className='w-10/12 flex flex-row flex-wrap justify-center mt-10' style={{marginLeft:"7%"}}>
          {
            productdata.map((element)=>{
              return <Card
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
        </div>
        



        <div className='w-10/12 bg-blue-900  justify-center mt-10' style={{marginLeft:"7%"}}>
              <div className='LImitedHome  w-full pt-14  '>
                <div className=' inmediascreen  ml-56 w-2/5'>
                  <h3 className='text-white mt-8 ml-10 font-bold text-xl'>LImitedHome</h3>
                  <h1 className='text-white font-bold text-6xl '> Exempl Commerc Page Sunshine From Zakariya </h1>   
                  <h3 className='text-white mt-8 ml-10 font-bold text-xl'>25% Off On All Products</h3>
                  
                      <button className='p-4 mt-10 border-1 border-solid border-white text-white hover:text-black hover:bg-white mr-2 rounded-xl'  type="button">Find More</button>
                      <button className='p-4 mt-10 border-1 border-solid border-white text-black bg-white hover:text-white hover:bg-black ml-2 rounded-xl' type="button">Shop Now</button>
          
                </div>
          </div>
        </div>
    


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
    
    
    </>
  )
}

export default Home

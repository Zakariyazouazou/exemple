import './App.css';
import React , {useEffect , useState} from 'react';
import axios from 'axios';
import {UsecontextdataProduct , } from './Contextdata/contextdata'
import  { Route , Routes } from 'react-router-dom'
import {About , Home , Chekout , Cart , Contact_us , MyAcompt , Store} from './Pages/index'
import {NavBarre , Footer , SideBarre} from './Sections/index'
import {ScrollToTop} from './Component/index'



function App() {
  const {showsidebarre } = UsecontextdataProduct()
  
   
   
  
  

  return (
    <div className="">
         <ScrollToTop/>
          <NavBarre/>
          { showsidebarre  && <SideBarre/>}
          <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/About' element={<About/>}/>
               <Route path='/Chekout/:id' element={<Chekout/>}/>
               <Route path='/Cart' element={<Cart/>}/>
               <Route path='/Contact_us' element={<Contact_us/>}/>
               <Route path='/MyAcompt' element={<MyAcompt/>}/>
               <Route path='/Store' element={<Store/>}/>
          </Routes>


          <Footer/>
    </div>
  );
}

export default App;

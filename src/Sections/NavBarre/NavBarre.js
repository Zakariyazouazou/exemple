import React , {useEffect , useState} from 'react'
import {AiFillCaretDown} from "react-icons/ai"
import {AiFillCaretUp} from "react-icons/ai"
import {RiShoppingBagLine} from "react-icons/ri"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import { UsecontextdataProduct } from '../../Contextdata/contextdata'
import Symbol from '../../assets/img/Symbol1.png'
import './NavBarre.css'
import { Link } from 'react-router-dom'
const NavBarre = () => {
    const {activeSidebarre , TotalPrice , setTotalPrice , panierTotal} = UsecontextdataProduct()
    const [forWidth, setforWidth] = useState(undefined)
    const [activeListe , setactiveListe] = useState(false)
    const [openSideBare , setopenSideBare] = useState(false)



    const ControlListe = (result) => {
        setactiveListe(result)
    }

    const ControlSideBarre = (result) => {
        setopenSideBare(result)
    }



    useEffect(() => {
        const wiDth = () => {
            setforWidth(window.innerWidth) 
            console.log(forWidth)
        }
        window.addEventListener('resize', wiDth)
        wiDth()
        return ()=>window.removeEventListener('resize', wiDth)
    }, [forWidth])




  return (
    <>
       {forWidth >= 1000   &&
         <div className='fixed top-0 z-20 w-full bg-gray-500 opacity-60'>
            <div className='flex justify-between pt-2 pb-2 '>
            <Link to='/'><img src={Symbol} className="w-12 ml-2" alt="Logo" /></Link>
            <ul className='flex items-center '>
                <li className='ml-1 text-white mr-5 font-bold cursor-pointer '><Link to="/About">About</Link></li>
                <li className='ml-1 text-white mr-5 font-bold cursor-pointer '><Link to='Contact_us'>Contact Us</Link></li>
                <li className='ml-1 text-white mr-5 font-bold cursor-pointer '><Link to='Store'> Store </Link> {activeListe ? <AiFillCaretDown className='inline-block cursor-pointer' onClick={()=>ControlListe(false)}/> : <AiFillCaretUp className='inline-block cursor-pointer' onClick={()=>ControlListe(true)}/>}
                        {activeListe &&
                        <div className='absolute mt-3 rounded-lg border-t-1 border-solid border-blue-500 bg-gray-200 w-48 forClosingAndOpening'>
                            <ul className='listeNavbarre'>
                                <li className='mt-1  text-black ml-1 hover:text-blue-700 ' >Women</li>
                                <li className='mt-1  text-black ml-1 hover:text-blue-700 ' >Men</li>
                                <li className='mt-1  text-black ml-1 hover:text-blue-700 ' >Axesoire</li>
                                <li className='mt-1  text-black ml-1 hover:text-blue-700 ' >Uncatecorize</li>
                            </ul>
                        </div>
                        }
                
                </li>
                <li className='ml-1 text-white mr-1 mt-2 font-bold cursor-pointer ' onClick={()=>{activeSidebarre(true)}}>${TotalPrice}</li>       
                <li onClick={()=>{activeSidebarre(true)}}><RiShoppingBagLine className='inline-block cursor-pointer text-5xl text-white'/><span className='absolute z-10  text-xl text-white top-6 CartShop cursor-pointer'>{panierTotal}</span></li>  
            </ul>
        </div>
         </div>
       }
       { forWidth < 1000 &&
        <div className='text-center bg-blue-100'>
          <Link to='/'><img src={Symbol} className="w-12 h-12 ml-2" alt="Logo" /></Link>
            <div className=' absolute top-0 right-10'>
                        <ul className='flex items-center'>
                                <li className='ml-1 mr-1 mt-2 font-bold cursor-pointer ' onClick={()=>{activeSidebarre(true)}}>${TotalPrice}</li>       
                                <li className=''><div><RiShoppingBagLine onClick={()=>{activeSidebarre(true)}} className='inline-block text-5xl cursor-pointer'/><span className='absolute mt-4 text-xl font-bold  forDropZoneNavbarre  cursor-pointer ' onClick={()=>{activeSidebarre(true)}}>{panierTotal}</span></div></li>  
                        </ul>
            </div>
            {openSideBare ?  <AiOutlineClose className='absolute top-3 cursor-pointer hover:text-gray-700 right-2 font-bold text-2xl' onClick={()=>ControlSideBarre(false)}/> :  <GiHamburgerMenu className='absolute top-3 cursor-pointer hover:text-gray-700 right-2 font-bold text-2xl' onClick={()=>{ControlSideBarre(true)}} />}
            {openSideBare &&
                <div className='absolute right-0  z-30 w-4/5 bg-blue-300 SideBarreOpenAnimation h-96'>
                    <ul className='relative '>
                    <li className='ml-1 pt-4 border-t border-solid border-gray-600 pb-2 mr-5 font-bold cursor-pointer '><Link to="/About">About</Link></li>
                    <li className='ml-1 pt-4 border-t border-solid border-gray-600 pb-2 mr-5 font-bold cursor-pointer '><Link to='Contact_us'>Contact Us</Link></li>
                    <li className='ml-1 pt-4 border-t border-solid border-gray-600 pb-1 border-b  mr-5 font-bold cursor-pointer '> <Link to='Store'>Store </Link>{activeListe ? <AiFillCaretDown className='inline-block cursor-pointer' onClick={()=>ControlListe(false)}/> : <AiFillCaretUp className='inline-block cursor-pointer' onClick={()=>ControlListe(true)}/>}
                        {activeListe &&
                            <div className='absolute mt-3 rounded-lg border-t-1  border-solid border-blue-500 bg-gray-200  forClosingAndOpening w-full'>
                                <ul className='listeNavbarre '>
                                    <li className=' ml-1 hover:text-blue-700 mt-3' >Women</li>
                                    <li className=' ml-1 hover:text-blue-700 mt-3' >Men</li>
                                    <li className=' ml-1 hover:text-blue-700 mt-3' >Axesoire</li>
                                    <li className=' pb-3 ml-1 hover:text-blue-700 mt-3' >Uncatecorize</li>
                                </ul>
                           </div>
                        }
                    
                    </li>
                    
                </ul>
            </div>
            }
        </div>

       }
    </>
  )
}

export default NavBarre
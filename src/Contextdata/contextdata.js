import React , {createContext , useContext , useState , useEffect}from 'react'
import axios from 'axios';

const ContextdataProduct = createContext()

var finalPanier = [] ; 






export  const Contextdata = ({children}) => {
     const [productdata, setproductdata] = useState({})
     const [Categorie, setCategorie] = useState({})
     const [showsidebarre ,  setshowsidebarre ] = useState(false)
     const [panier , setpanier] = useState()
     const [panierTotal , setpanierTotal ] = useState(0)
     const [TotalPrice , setTotalPrice] = useState(0)
     var z = 0 ;  


    const Addpanier = (productdatapanier) => {
        finalPanier.push(productdatapanier)
         setpanier(finalPanier) 
         setpanierTotal(finalPanier.length)
         
      for(var i = 0; i < panier.length; i++) {
          z = parseFloat(panier[i].Prix1)  + z
          setTotalPrice(z)
      }
  
  }



    function  removeThis(data , data2) {
      finalPanier = panier.filter((items)=>{
      return  (
              items.ID_Product != data
          )
      })


      setpanier(finalPanier) 

      setpanierTotal(finalPanier.length)

      if(finalPanier.length > 0) {
        for(var i = 0; i < finalPanier.length; i++) {
          z = parseFloat(finalPanier[i].Prix1)  + z
          
            
      }
      }else{
        setTotalPrice(z) 
      }


     
    }




    useEffect(() => {
        axios.get('http://localhost/selectProduct/selectProduct.php')   
        .then(res=>setproductdata(res.data))
    }, [productdata])

     
     const activeSidebarre = (promotion)=>{
      setshowsidebarre(promotion)   
     }


    useEffect(() => {
        axios.get('http://localhost/selectProduct/selectCategorie.php')   
        .then(res=>setCategorie(res.data))
    }, [Categorie])


      



  return (
    <ContextdataProduct.Provider value={{productdata , Categorie , panier , panierTotal ,z,finalPanier,
    showsidebarre ,  setshowsidebarre , activeSidebarre , Addpanier ,removeThis, TotalPrice , setTotalPrice }}>
         {children}
    </ContextdataProduct.Provider>
  )
}





export const UsecontextdataProduct = () => useContext(ContextdataProduct) 
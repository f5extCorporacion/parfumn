
import './App.css'
/**funtions firebas */
import{ collection , getDocs,getDoc,deleteDoc} from'firebase/firestore';
/*conexion a firebase */
import { db } from'./config/firebase.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const Porfolio = ({tema , setTheme}) => {

  //1.handler de cambio mode a dark
  const handlerthemeSwitch = ()=>{
    if(tema === false)
      setTheme(true)
    else
    setTheme(false)
  }
  //2. configuracion de hooks
  const [products , setProducts] = useState([])

  //Referenciamos la Base de datos
   const Links = collection(db , "porfoliolinks")

  //3.Mostrar todos los Docs
 const getDatos = async () =>{
  const data = await getDocs(Links)
 // console.log(data.docs)
 const rest = await data.docs.map( (doc) =>( { ...doc.data() , id:doc.id}))
 /* setProducts()*/
 setProducts( rest)
 }

 //Usamos el efect
 useEffect( ()=>{
  getDatos()
 },[])


  return (
    <>
    
    {tema?  <h1 className='text-slate-400'> 
              <ion-icon name="planet-outline"></ion-icon> PORFOLIO
              </h1>:<h1 className='text-blue-700'> 
              <ion-icon name="planet-outline"></ion-icon> PORFOLIO
              </h1>}
                <hr /> 
    <div className="porfolio  ">
    {
      products.map((sd)=>   <div className="boxporfolio bg-green-500">
      <a href={sd.link}  className='bg-green-500' target="_blank"> 
      <h2><ion-icon name="triangle-outline"></ion-icon>{sd.titulo} </h2></a>
      </div>)
    }
       
    </div>
    </>
  )
}
export default Porfolio
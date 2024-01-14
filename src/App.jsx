
import './App.css'
import Spineer from './Spineer';
import Carga from './carga'
import { useState, useEffect} from 'react'

function App() {
  const [loading , setLoading] = useState(false)

   useEffect ( ()=>{
    setLoading(false)

    setTimeout(()=>{
      setLoading(true)
    },5000)
   },[])

  return(
  <>
  { loading?  <Carga/>: <Spineer/>}
  </>
)
}

export default App

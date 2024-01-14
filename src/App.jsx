
import './App.css'
import { useState, useEffect} from 'react'
import Spineer from './Spineer.jsx';
import Carga from './Carga.jsx'
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

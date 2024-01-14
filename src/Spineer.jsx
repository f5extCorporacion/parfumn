 
 import'./App.css'
 
import { CirclesWithBar } from 'react-loader-spinner'
 const Spineer = () => {
   return (
     <div className=" sp flex  p-52 justify-center content-center items-center sm:items-center sm:justify-center">
        <div className="spinner flex flex-col justify-center content-center items-center ">
         
         <CirclesWithBar
            height="100"
            width="100"
            color="#000"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel='circles-with-bar-loading'
            /><br/>
              <p className='text-2xl' >Cargando</p>
            </div>
        </div>
   )
 }
 export default Spineer
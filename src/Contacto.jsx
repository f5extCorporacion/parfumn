

const Contacto = ({tema , setTheme}) => {
  const handlerthemeSwitch = ()=>{
    if(tema === false)
      setTheme(true)
    else
    setTheme(false)
  }
  return (
    <>
 
 {tema?  <h1 className='text-slate-400'> 
              <ion-icon name="planet-outline"></ion-icon> CONTACTO 
              </h1>:<h1 className='text-blue-700'> 
              <ion-icon name="planet-outline"></ion-icon> CONTACTO 
              </h1>}  
   <div className="contacto flex flex-wrap justify-center items-center p-2 gap-10  ">
    

      <div className="datos  rounded-2xl opacity-[0.9] p-5">
      <div className="newsdata  rounded-2xl opacity-[0.9] p-5">
            <h2><ion-icon name="bookmarks-outline"></ion-icon> Info Datos.</h2>
          </div>
        <address className=" justify-start items-start">
         <p className="text-xl text-slate-900"> <ion-icon name="at-outline"></ion-icon>Email: 1107050440f@gmail.com.</p>  
         <ion-icon name="call-outline"></ion-icon> Whatsapp: +57 318 379 76 86
        </address>
      </div>

      <div className="redes  bg-green-400 rounded-2xl opacity-[0.9] p-5">
         <div className="newsdata bg-white rounded-2xl opacity-[0.9] p-5">
            <h5>Redes</h5>
          </div>
           <div className=" flex gap-3 text-center content-center justify-center ">
         <a href="https://www.linkedin.com/in/frank-valverde-650161209/"  target="_blank"><ion-icon name="logo-linkedin"  ></ion-icon></a> 
         <a href="https://www.instagram.com/franlimvalverde/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a> 
          <a href="https://www.youtube.com/@FULLCODE./videos" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a> 
          </div>

          </div>   
     </div>
    </>
  )
}
export default Contacto

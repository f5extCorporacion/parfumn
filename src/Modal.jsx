


const Modal = ({setModal , moda}) => {
  return (
    <div className='modaScrem fixed inset-0 bg-black  bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
    <div className=' bg-white p-5 rounded  flex flex-col justify-center items-center gap-5'>
       
        <div className='flex flex-col gap-5'>
          <button className=' border border-green-800 text-lg bg-white' onClick={()=> setModal(false)}> x</button>
                    <a href="#Home ">
                      <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
                    <span className='text icon'>HOME</span> </a>
                    <a href="#Profile"  >
                      <span className='icon'><ion-icon name="planet-outline"></ion-icon></span>
                    <span className='text icon'>PROFILE</span></a>
                    <a href="#Message"  >
                      <span className='icon'><ion-icon name="chatbubble-outline"></ion-icon></span>
                    <span className='text icon'> PORFOLIO</span> </a>

                    <a href="#Contact" >
                      <span className='icon'><ion-icon name="battery-charging-outline"></ion-icon></span> 
                    <span className='text icon'>CONTACTO</span>
                    </a>

              </div>

              
      </div>
  </div> 

  )
}
export default Modal
import {Howl, Howler} from 'howler';
import cartoon from'./assets/sonido/cartoon.mp3';

const Modal = ({setModal , moda}) => {
  var sounde = new Howl({
    src:[cartoon]
  })
  const hand =()=>{
    sounde.play();
    setModal(false)
 }
  return (
    <div className='modaScrem fixed inset-0 bg-black  bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
    <div className=' bg-white p-5 rounded  flex flex-col justify-center items-center gap-5'>
       
        <div className='flex flex-col gap-5'>
          <button className=' border border-green-800 text-lg bg-white' onClick={()=> setModal(false)}> x</button>
                    <a href="#Home " onClick={hand}>
                      <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
                    <span className='text icon'>HOME</span> </a>
                    <a href="#Profile" onClick={hand} >
                      <span className='icon'><ion-icon name="planet-outline"></ion-icon></span>
                    <span className='text icon'>NOSOTROS</span></a>
                    <a href="#Message" onClick={hand} >
                      <span className='icon'><ion-icon name="chatbubble-outline"></ion-icon></span>
                    <span className='text icon'> PORFOLIO</span> </a>

                    <a href="#Contact" onClick={hand}>
                      <span className='icon'><ion-icon name="battery-charging-outline"></ion-icon></span> 
                    <span className='text icon'>CONTACTO</span>
                    </a>

              </div>

              
      </div>
  </div> 

  )
}
export default Modal

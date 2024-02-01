import {CounterStore} from'./store/CounterStore';
//import shallow from 'zustand/shallow';
import './App.css'
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import Porfolio from'./Porfolio.jsx';
import Contacto from './Contacto.jsx';
import React ,{ useState,Suspense,lazy, useEffect } from 'react';
import {Howl, Howler} from 'howler';
import cartoon from'./assets/sonido/cartoon.mp3';
const video = lazy( ()=>import('https://cadenaser.com/resizer/av8uSQm4LrD27LxLZ3kFIsrIP60=/1200x537/filters:quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/2BXBIY6XXNNJDMIDYTKUN47QZA.gif'))
import Modal from './Modal';

const Carga = () => {
    const [modal , setModal] = useState(false)
    const [theme , setTheme] = useState(false);

var sound = new Howl({
  src:[cartoon]
})
const handlera =()=>{
   sound.play();
}
//Handler theme darkmodo action
const handlerthemeSwitch = ()=>{
  if(theme === false)
    setTheme(true)
  else
  setTheme(false)
}
    /* PRIMERA FORMA DE EXPORTAR VALORES */
  /*const Result= CounterStore( (state) => state.count)*/
   /*Forma rapida de ejecutar  funciones de un objeto para ejecutarlas */
   const { increment , decrementar } = CounterStore();
    return (
      <div className='Global' style={{ background : theme? '#373737':'white',
      }}>
        <div className="responsive">
        {
            modal?  <Modal  setModal={setModal} moda={modal} />:''
          }
        </div>
        <header >
          <a href="#" className='logo animate-bounce w-6 h-6'><ion-icon name="code-slash-outline"></ion-icon> </a>
          <nav>
             <a href="#Home" onClick={handlera}>
              <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
             <span className='text icon'>HOME</span> </a>
  
             <a href="#Profile" onClick={handlera} >
              <span className='icon'><ion-icon name="planet-outline"></ion-icon></span>
             <span className='text icon'>PROFILE</span></a>
  
             <a href="#Message" onClick={handlera} >
              <span className='icon'><ion-icon name="chatbubble-outline"></ion-icon></span>
             <span className='text icon'> PORFOLIO</span> </a>
  
             <a href="#Contact" onClick={handlera}>
              <span className='icon'><ion-icon name="battery-charging-outline"></ion-icon></span> 
             <span className='text icon'>CONTACTO</span>
             </a>
            
          
            

            <button  onClick={()=> setModal(true)}>
              <ion-icon name="apps-outline"></ion-icon> </button>
          </nav>
         
        </header>
         <section id='Home'> <div className="marge"> <Home tema={theme} setTheme={setTheme}/> </div>  </section>  
         <section id='Profile'><div className="marge">  <Profile tema={theme} setTheme={setTheme}/></div> </section>  
         <section id='Message'><div className="marge"> <Porfolio tema={theme} setTheme={setTheme} /></div> </section>  
         <section id='Contact'><div className="marge"> <Contacto tema={theme} setTheme={setTheme}/></div> </section>  
     
        <footer>
          <div className="waves">
             <div className="wave" id='wave1'></div>
             <div className="wave" id='wave2'></div>
             <div className="wave" id='wave3'></div>
             <div className="wave" id='wave4'></div>
          </div>
          <ul  className='social'>
            <li><a href="https://www.youtube.com/channel/UC5I30AmdB7Z1DNrO2MOh56A" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-youtube"></ion-icon> </a> </li>
            <li><a href="https://www.instagram.com/franlimvalverde/" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-instagram"></ion-icon> </a> </li>
            <li><a href="https://www.linkedin.com/in/franklim-mu%C3%B1oz-valverde-650161209/" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a> </li>
          </ul>
          <p>@2024 Derechos Fullstack developer Franklim mv| Porfolio Personal</p>
        </footer>
      </div>
      
    )
}
export default Carga

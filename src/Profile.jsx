import './App.css';
import { CounterStore } from './store/CounterStore';
import {shallow} from 'zustand/shallow';
import m1 from './assets/m1.png'
import m2 from './assets/m2.png'
import m3 from './assets/m3.png'
import m4 from './assets/m4.png'
import m5 from './assets/m5.png'
import m6 from './assets/m6.png'
import m7 from './assets/m7.png'

import {Howl, Howler} from 'howler';
import Gamestart from'./assets/sonido/Gamestart.mp3';

const Profile = ({ tema, setTheme }) => {
  const handlerthemeSwitch = () => {
    if (tema === false)
      setTheme(true)
    else
      setTheme(false)
  }
  //Mostrar los Datos

  var soundstart = new Howl({
    src:[Gamestart]
  })
  const handlerar =()=>{
    soundstart.play();
  }
  const { name, count } = CounterStore((state) => ({
    name: state.name,
    count: state.count,
  }), shallow)

  //Actions de los datos functiones
  const { increment, decrementar } = CounterStore();
  return (
    <>
      <article>
        <div className="mode flex gap-2 justify-center">
       </div>
        {/**Buton dark mode */}
        <label>
           <input type="checkbox" onClick={handlerthemeSwitch} />
            {tema ? <span className=' text-3xl text-blue-600 '><ion-icon name="moon-outline"></ion-icon></span> : <span className='  text-3xl text-yellow-100 '><ion-icon name="sunny-outline"></ion-icon></span>}
           <b> </b>
        </label>
        <br/>


        
        {tema ? <h1 className='text-slate-400 text-2xl'>
          <ion-icon name="planet-outline"></ion-icon> NOSOTROS.
        </h1> : <h1 className='text-blue-300 text-2xl'>
          <ion-icon name="planet-outline"></ion-icon> NOSOTROS.
        </h1>}

        {/**estudios y mas */}
       
      </article>
<div className="promo">


      <div className="text">
                  <h4>Estudios.</h4>
                  <ul>
                     <li onMouseEnter={handlerar} >Ingenieria informatica   <br /><pre> cursando </pre></li>
                    <li onMouseEnter={handlerar} >Fullstack developer <br /><pre>Academlo </pre></li>
                    <li onMouseEnter={handlerar} >Desarrollo de java <br /><pre>el sena </pre></li>
                    <li onMouseEnter={handlerar} >Comfenalco valle <br /><pre>seminario de negocios y ventas </pre></li>
                  </ul>

                  
                </div>

                <div className="icons">
                  <h4>Informacion</h4>
                  <p>Desarrollador de software con más de 2 años de experiencia en la industria tecnológica. Especializado en Java, Python y JavaScript, destaca en el diseño, desarrollo y mantenimiento de sistemas complejos. Conocido por sus habilidades para resolver problemas y encontrar soluciones innovadoras, Juan ha liderado exitosamente proyectos desde su concepción hasta su implementación.  </p>
                  <a href="https://drive.google.com/file/d/10g5uNS5ZYiXolTI-iAMqagOohZEMd0tK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    descargar
                  </a>
                  <ul>
                    <li><ion-icon name="logo-css3"></ion-icon></li>
                    <li><ion-icon name="logo-javascript"></ion-icon></li>
                    <li><ion-icon name="logo-python"></ion-icon></li>
                    <li><ion-icon name="logo-figma"></ion-icon></li>
                    <li><ion-icon name="logo-npm"></ion-icon></li>
                    <li><ion-icon name="logo-ionic"></ion-icon></li>
                    <li><ion-icon name="logo-apple-ar"></ion-icon></li>
                  </ul>
              </div>

   </div>
      <div className='profileContainer'>
        <div className="card card1">
          <div className="box">
            <div className="icon bg-[#249eff]">
              <div className="iconBox">
               <ion-icon name="globe"></ion-icon>
              </div>
            </div>
            <div className="conent">
              <h3>Front-End</h3>
              <p> creacion de sitios dimanicos con diseños esteticos.</p>
            </div>
          </div>
        </div>
        <div className="card card2">
          <div className="box">
            <div className="icon bg-[#249eff]">
              <div className="iconBox">
              <ion-icon name="server"></ion-icon>
              </div>
            </div>
            <div className="conent">
              <h3>Back-end </h3>
              <p> Creacion de apis que permiten registro de informacion y su administración.</p>
            </div>
          </div>
        </div>

        <div className="card card3">
          <div className="box">
            <div className="icon bg-[#249eff]">
              <div className="iconBox   ">
             <ion-icon name="logo-windows"></ion-icon>
              </div>
            </div>
            <div className="conent">
               <h3>Desktop</h3>
              <p> Programas sencillos en c#  y java aplicando los princios de programacón.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contador flex gap-5 text-slate-300 flex-col" >
           <div className="flex Skillglov">
                    <div className="containerSkills">
                                <h1 className="title-text">skills programación</h1>
                                <div className="skill-box">
                                    <span className="title">react</span>
                                        <div className="skill-bar"> 
                                            <span className="skill-per html"> 
                                                <span className="tooltip">80%</span>
                                            </span>
                                        </div>
                                </div>
                                <div className="skill-box">
                                    <span className="title">Angular</span>
                                        <div className="skill-bar"> 
                                            <span className="skill-per css"> 
                                                <span className="tooltip">60%</span>
                                            </span>
                                        </div>
                                </div>
                                <div className="skill-box">
                                    <span className="title">vue</span>
                                        <div className="skill-bar"> 
                                            <span className="skill-per vue"> 
                                                <span className="tooltip">95%</span>
                                            </span>
                                        </div>
                                </div>
                    </div>
                    <div className="containerSkills">
                                <h1 className="title-text">Otros Lenguajes</h1>
                                <div className="skill-box">
                                    <span className="title">C#</span>
                                        <div className="skill-bar"> 
                                            <span className="skill-per html"> 
                                                <span className="tooltip">80%</span>
                                            </span>
                                        </div>
                                </div>
                                <div className="skill-box">
                                    <span className="title">Javascript</span>
                                        <div className="skill-bar"> 
                                            <span className="skill-per css"> 
                                                <span className="tooltip">60%</span>
                                            </span>
                                        </div>
                                </div>
                                <div className="skill-box">
                                    <span className="title">Java</span>
                                        <div className="skill-bar"> 
                                            <span className="skill-per vue"> 
                                                <span className="tooltip">95%</span>
                                            </span>
                                        </div>
                                </div>
        </div>
       </div>
      </div>
      
      <div className='scroll  flex    ' >
        {/*Parte donde ponemos cards y fondo */}
        <div>
          <span className='border border-green-900' onMouseEnter={handlerar}>Html</span>
          <span className='border border-green-900' onMouseEnter={handlerar}>Css</span>
          <span className='border border-green-900' onMouseEnter={handlerar}>Javascript</span>
          <span className='border border-green-900' onMouseEnter={handlerar}>React</span>
          <span className='border border-green-900' onMouseEnter={handlerar}>c#</span>
          <span className='border border-green-900' onMouseEnter={handlerar}>Phython</span>
          <span className='border border-green-900' onMouseEnter={handlerar}>Angular</span>
          <span className='border border-white-900' onMouseEnter={handlerar}>Html</span>
          <span className='border border-white-900' onMouseEnter={handlerar}>Css</span>
          <span className='border border-white-900' onMouseEnter={handlerar}>Javascript</span>
          <span className='border border-white-900' onMouseEnter={handlerar}>React</span>
          <span className='border border-white-900' onMouseEnter={handlerar}>Figma</span>
          <span className='border border-white-900' onMouseEnter={handlerar}>Photoshop</span>
          <span className='border border-white-900' onMouseEnter={handlerar}>Angular</span>
          <span className='border border-white-900' onMouseEnter={handlerar}>Figma</span>
          <span className='border border-white-900' onMouseEnter={handlerar}>Photoshop</span>
          <span className='border border-white-900' onMouseEnter={handlerar}>Angular</span>

        </div>

      </div>
      <div className='scroll  flex    ' >
        {/*Parte donde ponemos cards y fondo */}
        <div className='flex gap-1'></div>
        <div className='flex gap-1 '>
          <img className='border border-slate-900 rounded-lg opacity-0' src={m1} alt="" width={"100px"} />
          <img className='border border-slate-900 rounded-lg' src={m2} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m3} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m4} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m5} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m6} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m7} alt="" width={"100px"} />
          <img className='border border-slate-900 rounded-lg' src={m1} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m2} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m3} alt="" width={"100px"} />
          <img className='border border-slate-900 rounded-lg' src={m4} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m5} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m6} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m7} alt="" width={"100px"} />
          <img className='border border-slate-900 rounded-lg' src={m1} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m2} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m3} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m4} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m5} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m6} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m7} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m1} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m2} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m3} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m4} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m5} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m6} alt="" width={"100px"}/>
          <img className='border border-slate-900 rounded-lg' src={m7} alt="" width={"100px"}/>
        </div>
      </div>  <br /><br />   <br /><br />

    </>

  )
}
export default Profile;

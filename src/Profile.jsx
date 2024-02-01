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


        {tema ? <h1 className='text-slate-400'>
          <ion-icon name="planet-outline"></ion-icon> PROFILE.
        </h1> : <h1 className='text-blue-700'>
          <ion-icon name="planet-outline"></ion-icon> PROFILE.
        </h1>}

        {/**estudios y mas */}
       
      </article>
<div className="promo">


      <div className="text">
                  <h4>Estudios.</h4>
                  <ul>
                    <li onMouseEnter={handlerar} >Academlo <br /><pre>Fullstack developer </pre></li>
                    <li onMouseEnter={handlerar} >Sena <br /><pre>Tecnico en Desarrollo de software </pre></li>
                    <li onMouseEnter={handlerar} >Comfenalco valle <br /><pre>seminario de negocios y ventas </pre></li>
                     <li onMouseEnter={handlerar} >Ingenieria informatica   <br /><pre> cursando </pre></li>
                  </ul>

                  
                </div>

                <div className="icons">
                  <h4>Informacion</h4>
                  <p>Cordial saludo para mi es un gusto que visites mi pagina web , estare  atento a cualquier petición,
                   Dejo Aqui el link para que pueda ser descargado mi cv , para mi sera un gusto atender tus dudas.</p>
                  <a href="https://drive.google.com/file/d/10Dyrnef8pm5Oa--ZnNmimjtS0B91avCg/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
                <ion-icon name="logo-react"></ion-icon>
              </div>
            </div>
            <div className="conent">
              <h3>React</h3>
              <p> typescript , javascript ,eventos, bases de datos, creacion sitios dimanicos.</p>
            </div>
          </div>
        </div>
        <div className="card card2">
          <div className="box">
            <div className="icon bg-[#ff1f6b]">
              <div className="iconBox">
              <ion-icon name="logo-angular"></ion-icon>
              </div>
            </div>
            <div className="conent">
              <h3>Angular </h3>
              <p> typescript , javascript ,eventos, bases de datos, creacion sitios dimanicos.</p>
            </div>
          </div>
        </div>

        <div className="card card3">
          <div className="box">
            <div className="icon bg-[#98ff21]">
              <div className="iconBox   ">
              <ion-icon name="logo-windows"></ion-icon>
              </div>
            </div>
            <div className="conent">
              <h3>Nodejs, firebase, postgres ,Sql</h3>
              <p> Creacion de servicios , crud,  todo  relacionado con back-end.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contador flex gap-5 text-slate-600 flex-col" >
        <h4>Contador</h4>
        <div className="flex gap-5">
          <button className='w-10 h-10 border border-slate-500 rounded-xl'  onClick={() => decrementar(1)} > - </button>

          <div className="num text-[50px] text-4xl">{count} </div>
          <button className='w-10 h-10 border border-slate-500 rounded-xl'  onClick={() => increment(1)}> + </button>
        </div>
      </div>
      <div className='scroll  flex    ' >
        {/*Parte donde ponemos cards y fondo */}
        <div>
          <span className='border border-green-900' onMouseEnter={handlerar}>Html</span>
          <span className='border border-green-900' onMouseEnter={handlerar}>Css</span>
          <span className='border border-green-900' onMouseEnter={handlerar}>Javascript</span>
          <span className='border border-green-900' onMouseEnter={handlerar}>React</span>
          <span className='border border-green-900' onMouseEnter={handlerar}>Figma</span>
          <span className='border border-green-900' onMouseEnter={handlerar}>Photoshop</span>
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

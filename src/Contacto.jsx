import { useState } from 'react'
import Swal from 'sweetalert2'

/**funtions firebas */
import{ collection , getDocs,getDoc,deleteDoc,addDoc} from'firebase/firestore';
/*conexion a firebase */
import { db } from'./config/firebase.js';
import { getDatabase, ref, set } from "firebase/database";


const Contacto = ({tema , setTheme}) => {
  const handlerthemeSwitch = ()=>{
    if(tema === false)
      setTheme(true)
    else
    setTheme(false)
  }
/*VAriables del formulario */
const [empresa , setEmpresa]= useState('');
const [email , setEmail]= useState('');
const [servicios , setServicios]= useState('');
const [comentarios , setComentarios]= useState('');

  const envioHandler =(e) =>{
    e.preventDefault()
    const send ={"empresa":empresa ,"email":email,"servicios":servicios,"comentarios":comentarios};
    
    Swal.fire({
      title: ` Datos correctos ? <br/> Empresa: ${send.empresa}, Email: ${send.email}
      Servicio solicitado: ${send.servicios}`,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        //crear datos en firebase
      addDoc(collection(db, "formularioPortafolio"), send);
      setEmpresa('')
      setEmail('')
      setServicios('')
      setComentarios('')

      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });


  }
  return (
    <>
 
  
   <div className="contacto">
   {tema?  <h1 className='text-slate-400 text-3xl'> 
              <ion-icon name="planet-outline"></ion-icon> CONTACTO 
              </h1>:<h1 className='text-blue-700  text-slate-400 text-3xl'> 
              <ion-icon name="planet-outline"></ion-icon> CONTACTO 
              </h1>} 

    <div className="tecni">
          
              <form  onSubmit = { envioHandler }>
              <div className="item">
                  <label htmlFor="name">Nombre</label>
                  <input type="text"
                  value={empresa}
                  onChange={(e)=>setEmpresa(e.target.value)} 
                  required/>
                </div>
                <div className="item">
                  <label htmlFor="Email">Email</label>
                  <input type="email"  
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                   <div className="item">
                      <label htmlFor="Email">Servicios</label>
                      <select id="pet-select" value={servicios} onChange={(e)=>setServicios(e.target.value)} required>
                    <option value={''}>--Please choose an option--</option>
                    <option value={'Front-end'}>Front-end</option>
                    <option value={'Back-end'}>Back-end</option>
                    <option value={'Fullstack web'}>Fullstack web</option>
                    <option value={'Fullstack software'}>Fullstack software</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="">Comentarios</label>
                    <textarea id="story"  rows="5" cols="33" 
                   value={comentarios} onChange={(e)=>setComentarios(e.target.value)} required>
                    .............
                    </textarea>
                </div>
                <div className="item"><br />
                 <button type='submit' >Enviar</button>
                </div>

              </form>
      </div>
  

     </div>
    </>
  )
}
export default Contacto
